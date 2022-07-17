import Image from 'next/image'

export default function LinksButton({link}) {
  return(
    <a className='animate-pulse' href={link.link}>
      <Image
        className='rounded-lg'
        src={link.avatar}
        width={190}
        height={190}
        quality={100}
      />
    </a>
  )
}