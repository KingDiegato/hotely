import {
  blossomHotel,
  niceViews,
  hotelSofia,
  comfortSuite,
  smartHotel,
  viennaHotel,
  infinityPool,
  valleNevado,
  stambulHotel,
  rusiaHotel
} from '../../assets/assets'

export default function refreshImages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))

  return Array.from(new Array(8)).map(
    () => messageExamples[getRandomInt(messageExamples.length)]
  )
}

const messageExamples = [
  {
    city: 'Texas',
    secondary: 'Price from: 187$/night.',
    hotel: blossomHotel
  },
  {
    city: 'Madrid',
    secondary: 'Price from: 89$/night.',
    hotel: niceViews
  },
  {
    city: 'Seattle',
    secondary: 'Price from: 59$/night.',
    hotel: hotelSofia
  },
  {
    city: 'Mónaco',
    secondary: 'Price from: 112$/night.',
    hotel: comfortSuite
  },
  {
    city: 'Toronto',
    secondary: 'Price from: 79/night.',
    hotel: smartHotel
  },
  {
    city: 'Vienna',
    secondary: 'Price from 90$/night.',
    hotel: viennaHotel
  },
  {
    city: 'Miami',
    secondary: 'Price from 182$/night.',
    hotel: infinityPool
  },
  {
    city: 'Ciudad del fuego',
    secondary: 'Price from 112$/night.',
    hotel: valleNevado
  },
  {
    city: 'Stambul',
    secondary: 'Price from 88$/night.',
    hotel: stambulHotel
  },
  {
    city: 'Moscow',
    secondary: 'Price from 59$/night.',
    hotel: rusiaHotel
  }
]
