export const CATEGORIES = ['Todos', 'Gamer', 'Hardware', 'Smartphones', 'Consoles']

export const products = [
  {
    id: 'p4',
    name: 'Combo Gamer Meetion',
    category: 'Gamer',
    price: 299.9,
    rating: 4,
    image: '/images/products/product-4-Photoroom.png',
    description:
      'Kit completo com teclado, mouse e headset para elevar sua experiência gamer.',
  },
  {
    id: 'p5',
    name: 'MSI GeForce GTX 1650',
    category: 'Hardware',
    price: 1299.0,
    rating: 4,
    image: '/images/products/product-5-Photoroom.png',
    description:
      'Placa de vídeo ideal para jogos em Full HD com excelente custo-benefício.',
  },
  {
    id: 'p6',
    name: 'DualSense PS5',
    category: 'Consoles',
    price: 449.9,
    rating: 5,
    image: '/images/products/product-6-Photoroom.png',
    description:
      'Controle oficial PlayStation 5 com feedback háptico e gatilhos adaptáveis.',
  },
  {
    id: 'p7',
    name: 'Cadeira Gamer Frizzi',
    category: 'Gamer',
    price: 899.0,
    rating: 4,
    image: '/images/products/product-7-Photoroom.png',
    description:
      'Cadeira ergonômica com apoio lombar e reclinação para longas sessões de jogo.',
  },
  {
    id: 'p8',
    name: 'iPhone 10',
    category: 'Smartphones',
    price: 2499.0,
    rating: 4,
    image: '/images/products/product-8-Photoroom.png',
    description: 'Smartphone Apple com desempenho fluido e câmera de alta qualidade.',
  },
  {
    id: 'p9',
    name: 'Galaxy S23 Ultra',
    category: 'Smartphones',
    price: 5499.0,
    rating: 5,
    image: '/images/products/product-9-Photoroom.png',
    description:
      'Flagship Samsung com S Pen, zoom avançado e tela AMOLED de alta resolução.',
  },
  {
    id: 'p10',
    name: 'ROG Phone 5',
    category: 'Smartphones',
    price: 4299.0,
    rating: 4,
    image: '/images/products/product-10-Photoroom.png',
    description:
      'Smartphone gamer ASUS ROG com refrigeração otimizada e alta taxa de atualização.',
  },
  {
    id: 'p11',
    name: 'Xiaomi 12S',
    category: 'Smartphones',
    price: 3199.0,
    rating: 4,
    image: '/images/products/product-11-Photoroom.png',
    description: 'Câmera Leica, carregamento rápido e design premium em formato compacto.',
  },
  {
    id: 'p12',
    name: 'Xbox Series X',
    category: 'Consoles',
    price: 4499.0,
    rating: 5,
    image: '/images/products/product-12-Photoroom.png',
    description: 'Console Microsoft com 4K, SSD ultrarrápido e Game Pass integrado.',
  },
  {
    id: 'p13',
    name: 'Volante Ferrari',
    category: 'Gamer',
    price: 1299.0,
    rating: 4,
    image: '/images/products/product-13-Photoroom.png',
    description:
      'Volante licenciado Ferrari com force feedback para simuladores de corrida.',
  },
  {
    id: 'p14',
    name: 'PlayStation 5',
    category: 'Consoles',
    price: 3999.0,
    rating: 5,
    image: '/images/products/product-14-Photoroom.png',
    description:
      'Console Sony de nova geração com SSD customizado e suporte a ray tracing.',
  },
  {
    id: 'p15',
    name: 'PC Gamer',
    category: 'Hardware',
    price: 5999.0,
    rating: 5,
    image: '/images/products/product-15-Photoroom.png',
    description:
      'Desktop montado para jogos com processador potente e placa de vídeo dedicada.',
  },
]

export const testimonials = [
  {
    id: 't1',
    quote:
      'Comprei meu setup gamer na Blue Store. Entrega rápida e atendimento impecável!',
    author: 'Leandro Simplicio',
    rating: 5,
  },
  {
    id: 't2',
    quote:
      'Loja moderna, fácil de usar no celular. O carrinho funciona perfeitamente.',
    author: 'George Oliver',
    rating: 5,
  },
  {
    id: 't3',
    quote: 'Melhor experiência de compra de tecnologia que já tive online.',
    author: 'Lindsey Simplicio',
    rating: 5,
  },
]

export const formatBRL = (value) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  )
