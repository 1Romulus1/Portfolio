const links = [
  {
    id:'link_1',
    icon:'/delivery.png',
    link: 'https://delivery-lovat.vercel.app/',
    github: 'https://github.com/1Romulus1/delivery',
    title: 'My first project'
  }
]

export default function handler(req, res,){
  res.status(200).json(links)
}