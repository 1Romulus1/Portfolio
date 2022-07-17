import DescriptionButton from './DescriptionButton'

export default function Body({me}) {
  return(
    <div className='min-w-min max-w-screen-md text-center '>
      <DescriptionButton description={me.description}/>
    </div>
  )
}