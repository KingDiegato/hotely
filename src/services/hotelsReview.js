const COHERE_TOKEN_API = import.meta.env.VITE_TOKEN_API
const COHERE_API_GENERATE_URL = import.meta.env.VITE_URL_GEN

export async function hotelReview(city, country = 'any') {
  const data = {
    model: 'command-xlarge-nightly',
    prompt: `give me a review about 5 hotels in la plata Argentina
The following is a list of the top five hotels in La Plata, Argentina:
1. The Grand Hotel La Plata
2. The Hotel Plata Views
3. The Obelisk Hotel
4. The Esmeralda
5. The Monaco Suites
--
in base of this list
what is cheapest?
The Monaco Hotel is the least expensive at $40 per night.
The Hotel de la Plata is in the middle at $100 per night.
The Obelisk Hotel is the least popular at $50 per night.
The Esmeralda is the most popular at $70 per night.
--
can u give me a list of 5 hotels in barcelona?
1. The Hotel Arts
2. The Mandarin Oriental
3. The Renaissance Barcelona
4. The Le Meridien
5. The Claris Hotel
--
now give me information about hotels in ${country}, ${city}
--
`,
    max_tokens: 1000,
    temperature: 2.2,
    k: 0,
    p: 0.75,
    frequency_penalty: 0,
    presence_penalty: 0,
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
  console.log(response)
  console.log(response.generations)
  console.log(response.generations[0])

  const { text } = response.generations[0]
  return text
    .replace('--', '')
    .replaceAll('"', '')
    .trim()
}
