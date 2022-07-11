const CAR_INFO = ["nome", "cor", "descrição", "ano", "placa", "preço"]
const CAR_FILTER = ["marca", "cor", "ano"]
const COLORS = {
    "branco": "bg-white",
    "preto": "bg-black",
    "cinza": "bg-gray-500",
    "vermelho": "bg-red-500",
    "azul": "bg-blue-500",
    "verde": "bg-green-500",
    "laranja": "bg-orange-500",
    "amarelo": "bg-yellow-500",
    "marron": "bg-amber-900",
    "rosa": "bg-pink-500",
    "roxo": "bg-purple-500",
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