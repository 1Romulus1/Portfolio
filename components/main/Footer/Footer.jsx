import Image from 'next/image'

export default function Footer({links}) {
  return(
    <div className='flex flex-nowrap justify-between '>
      {links.map(function(link){
        return (
          <div key={link.id}>
            <a className='animate-pulse' href={link.github}>
              <h4 className='text-center my-2 uppercase'>{link.title} (link)</h4>
            </a>
            <a className='animate-pulse' href={link.link}>
              <Image
              src={link.icon}
              width={250}
              height={250}
              quality={100}
              />
            </a>
          </div>
        )
      })}
  </div>
  )
}