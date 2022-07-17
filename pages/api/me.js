const me = {
  fullName: 'Roman Kyva',
  avatar: '/avatar.jpg',
  description:
    '<p>Hello everybody. I am Roman and I am the God of fullstack developing. Why->->?</p>' +
    '<p>->->I have been learning during 5 month: HTML; CSS; Scss; JS; React; Redux; Redux Toolkit; Node; React router dom; Axios; Express; MongoDB; Mongoose; Git + GitHub (you can check); Material UI -> -> </p>' +
    '<p>->->But I want even more that\'s why I continue Learning TypeScript; Next; Nuxt; Docker; Kubernetes; Microservices; AWS; Firebase->-></p>' +
    '<p>->->And finally Web 3.0; Solidity; Ethereum->-></p>' +
    '<p>P.S. I am a manager and a philosopher</p>',
  followMe: {
    gitHub:{
      avatar:'/github.svg',
      link:'https://github.com/1Romulus1?tab=repositories'
    },
    linkedin:{
      avatar: '/linkedin.svg',
      link:'https://www.linkedin.com/in/kyvaroman/'
    }
  }
}

export default function handler(req, res,){
  res.status(200).json(me)
}