import Image from 'next/image'
import profilePic from '../../../public/avatar.jpg'
import LinksButton from './LinksButton'

export default function Header({me}) {
  return (
    <div className='flex justify-around items-baseline box-border'>
      <LinksButton link={me.followMe.gitHub}/>
        <Image
          className='rounded-lg'
          src={profilePic}
          width={190}
          height={190}
          alt={me.fullName}
          quality={100}
        />
      <LinksButton link={me.followMe.linkedin}/>
    </div>
  )
}