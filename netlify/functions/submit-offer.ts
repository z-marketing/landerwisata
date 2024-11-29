import { Handler } from '@netlify/functions';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;
const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const { name, email, phone, offer, message } = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!name || !email || !offer) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Initialize Google Sheets
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL!,
      private_key: PRIVATE_KEY!,
    });

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    // Add row to spreadsheet
    await sheet.addRow({
      timestamp: new Date().toISOString(),
      name,
      email,
      phone: phone || 'Not provided',
      offer: `$${offer} USD`,
      message: message || 'No message provided',
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Offer submitted successfully' }),
    };
  } catch (error) {
    console.error('Error processing offer:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};

export { handler };