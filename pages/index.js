import { API_URL } from '../components/utils/const'
import HomePage from '../components/main/HomePage'
import MetaTitle from '../components/ui/MetaTitle'
// import axios from 'axios'

export default function Home(props) {
  return (
    <>
      <MetaTitle title='My Portfolio' />
      <HomePage {...props} />
    </>
  )
}


export async function getStaticProps() {
  const resLinks = await fetch(`${API_URL}/links`)
  const links = await resLinks.json()
  const resMe = await fetch(`${API_URL}/me`)
  const me = await resMe.json()
  // console.log(links, me)
  return {
    props:{
      links, me
    }
  }
}

// export async function getStaticProps() {
//   const links = await axios.get(`${API_URL}/links`).then(({data})=>data)
//   const me = await axios.get(`${API_URL}/me`).then(({data})=>data)
//   return {
//     props: {
//       links, me
//     },
//       revalidate: 60
//     }
// }