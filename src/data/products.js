export const products = [
  {
    id: 1,
    name: 'Big Mac',
    category: 'Hambúrgueres',
    price: 29.9,
    image: 'https://i.postimg.cc/vDsnVHr8/Big-Mc.jpg',
    options: {
      tamanhos: ['Médio', 'Grande'],
      adicionais: [
        { nome: 'Queijo', preco: 3 },
        { nome: 'Bacon', preco: 5 },
        { nome: 'Molho', preco: 2 },
      ],
    },
  },
  {
    id: 2,
    name: 'Quarterão',
    category: 'Hambúrgueres',
    price: 32.9,
    image: 'https://i.postimg.cc/yWHRZYmx/Mc-Quarter.jpg',
    options: {
      tamanhos: ['Médio', 'Grande'],
      adicionais: [
        { nome: 'Queijo', preco: 3 },
        { nome: 'Bacon', preco: 5 },
        { nome: 'Molho', preco: 2 },
      ],
    },
  },
  {
    id: 3,
    name: 'McChicken',
    category: 'Hambúrgueres',
    price: 27.9,
    image: 'https://i.postimg.cc/NLcXHf6M/Mc-Chicken.jpg',
    options: {
      tamanhos: ['Médio', 'Grande'],
      adicionais: [
        { nome: 'Queijo', preco: 3 },
        { nome: 'Bacon', preco: 5 },
        { nome: 'Molho', preco: 2 },
      ],
    },
  },
  {
    id: 4,
    name: 'Batata Média',
    category: 'Acompanhamentos',
    price: 11.9,
    image: 'https://i.postimg.cc/hhBmdPLG/Fries.jpg',
  options:{
        tamanhos:["Médio","Grande"],
        adicionais:[
            {nome:"Cheddar",preco:5},
            {nome:"Bacon",preco:2}
        ]
    }  },
  {
    id: 5,
    name: 'Coca-Cola',
    category: 'Bebidas',
    price: 8.9,
    image: 'https://i.postimg.cc/rzk4rF1z/Coca-Cola.jpg',
    options: {
      tamanhos: ['300ml', '500ml', '700ml'],
      adicionais: [
        { nome: 'Gelo', preco: 0 },
        { nome: 'Sem gelo', preco: 0 },
      ],
    },
  },
  {
    id: 6,
    name: 'Sundae',
    category: 'Sobremesas',
    price: 9.9,
    image: 'https://i.postimg.cc/MXSBQK7n/Sundae.jpg',
      options:{
        tamanhos:["300ml","500ml"],
        adicionais:[
            {nome:"Calda",preco:0},
            {nome:"Oreo",preco:2}
        ]
    }
  },
]
