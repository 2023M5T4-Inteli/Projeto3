import Link from 'next/link'
import Image from 'next/image'

interface ButtonProps {
  onclick?: () => void,
  href?: string
  color?: string
  text?: string
  im?: string
}

const ButtonMenu: React.FC<ButtonProps> = ({ href, color, text, onclick, im }) => {
  return (

    <div onClick={onclick} className={`${color} bg-[#737373] text-2xl flex flex-row font-bold rounded-lg h-[40px] mx-3 px-2 w-6/7 mt-2`}>
        <a href={href}>
        <Image
            src={`${im}`}
            alt="My Image"
            width={100}
            height={40}
        
          />
        {text}
        </a>
    </div>
    
  )
}

export default ButtonMenu
