import fetch from 'node-fetch';

export default async function handler() {
    let email = "hello@fivestack.pl"
    let password = "3bcePu.s" 
  try {
 
    const apiResponse = await fetch('https://api.fivestack.pl/v1/auth', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '
        },
        body: JSON.stringify({ email, password }),
      });
      
      // Log the raw response
      const rawData = await apiResponse.text();
      console.log('Raw API Response:', rawData);
      
      // Odczytanie odpowiedzi
      const data = await apiResponse.json();
      

    console.log('API Response:', data);


  } catch (error) {
    console.error('Error during API request:', error);

  }
}
