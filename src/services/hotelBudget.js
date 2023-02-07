const COHERE_TOKEN_API = import.meta.env.VITE_TOKEN_API
const COHERE_API_GENERATE_URL = import.meta.env.VITE_URL_GEN

export async function hotelBudget(country, city = 'any', budget) {
  const data = {
    model: 'command-xlarge-nightly',
    prompt: `Question: 
    What is the best hotel in Buenos Aires with a budget of $1,500 in Buenos Aires city and why?
    --
    The best hotel in Argentina with a budget of $1,500 is the Alvear Icon Hotel. 
    It is a 5-star hotel located in the heart of Buenos Aires, close to the main tourist attractions and shopping areas. The hotel has a modern design and offers comfortable and spacious rooms with all the amenities you need for a perfect stay. 
    Some of the services and facilities offered by the hotel include a swimming pool, a fitness center, a spa, and a restaurant serving delicious local and international cuisine. 
    The staff is also very friendly and helpful, and will make sure your stay is as enjoyable as possible.
    --
    What is the best hotel in Spain with a budget of $1,500 in Barcelona city and why?
    
    There are many great hotels in Spain with a budget of $1,500 in Barcelona city. 
    
    One of the best hotels is the Mandarin Oriental Barcelona. This hotel is located in the heart of the city and offers stunning views of the city and the Mediterranean Sea. 
    The hotel has a modern design and features a rooftop pool, a spa, and a fitness center. The rooms are spacious and feature contemporary decor. The hotel also has several restaurants and bars, including the Michelin-starred Moments restaurant.
    --
    What is the best hotel in Chile with a budget of $410 in Santiago de chile city?
    
    There are many great hotels in Chile with a budget of $410 in Santiago de chile city. 
    
    One of the best hotels is the Holiday Inn Express & Suites Santiago Airport. 
    This hotel is located near the airport and offers free shuttle service to and from the airport. 
    The rooms are spacious and feature contemporary decor. The hotel also has an outdoor pool, a fitness center, and a restaurant serving breakfast, lunch, and dinner.
    --
    What is the best hotel in ${country} with a budget of ${budget} in ${city} city?
    `,
    max_tokens: 172,
    temperature: 1,
    k: 0,
    p: 0.75,
    frequency_penalty: 0.5,
    presence_penalty: 0.5,
    stop_sequences: ['--'],
    return_likelihoods: 'NONE'
  }
  const response = await fetch(COHERE_API_GENERATE_URL, {
    method: 'post',
    headers: {
      Accept: 'application / json',
      Authorization: `Bearer ${COHERE_TOKEN_API}`,
      'content-type': 'application/json',
      'Cohere-version': '2022-12-06'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())

  const { text } = response.generations[0]
  return text
    .replace('--', '')
    .replaceAll('"', '')
    .trim()
}
