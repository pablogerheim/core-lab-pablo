const CAR_INFO = ["nome", "cor", "descrição", "ano", "placa", "preço"]
const CAR_FILTER = ["marca", "cor", "ano"]
const COLORS = {
    "branco": "#ffffff",
    "preto": "#000000",
    "cinza": "#6e6e6e",
    "vermelho": "#e32b31",
    "azul": "#3252dc",
    "verde": "#52bc49",
    "laranja": "#e1a041",
    "amarelo": "#ebe833",
    "marron": "#914708",
    "rosa": "#d959e8",
    "roxo": "#761940",
}

const mok = [{
    id: 1, 
    name: 'First Vehicle',
    description: 'This is a description of first vehicle',
    plate: 'DDT-0012',
    isFavorite: false,
    year: 2018,
    color: 'vermelho',
    price: 22000,
    createdAt: new Date()
  },
  {
    id: 2,
    name: '2First Vehicle',
    description: '2This is a description of first vehicle',
    plate: 'DDT-0014',
    isFavorite: false,
    year: 2019,
    color: 'azul',
    price: 22000,
    createdAt: new Date()
  },
  {
    id: 3,
    name: '3First Vehicle',
    description: '2This is a description of first vehicle',
    plate: 'DDT-0014',
    isFavorite: true,
    year: 2020,
    color: 'laranja',
    price: 22000,
    createdAt: new Date()
  }

]

export { CAR_INFO, CAR_FILTER, COLORS, mok }