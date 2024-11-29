export async function submitOffer(formData: {
  name: string;
  email: string;
  phone: string;
  offer: string;
  message: string;
}) {
  const response = await fetch('/.netlify/functions/submit-offer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to submit offer');
  }

  return response.json();
}