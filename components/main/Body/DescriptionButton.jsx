import parse from 'html-react-parser'
import { useOutside } from '../../hook/useOutside'

export default function DescriptionButton({description}) {
  const {isShow, setIsShow, ref} = useOutside(false)
  return (
    <div ref={ref}>
      <button className='animate-bounce text-sm hover:text-2xl' onClick={function(){
        setIsShow(!isShow)
      }} >
        <span className='uppercase'>About Me</span>
      </button>
      {isShow && <article className='sm:container place-content-center'>{parse(description)}</article>}
    </div>
  )
}