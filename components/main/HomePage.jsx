import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'

export default function HomePage({me, links}) {
  return(
    <div className="flex flex-col h-screen justify-around items-center bg-gradient-to-t from-black to-red-100 ">
      <h1 className='uppercase text-2xl'>{me.fullName}</h1>
      <Header me={me} />
      <Body me={me} />
      <Footer links={links} />
    </div>
  )
}