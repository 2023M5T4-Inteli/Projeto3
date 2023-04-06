import Link from 'next/link'

interface ButtonProps {
  onclick?: () => void,
  href?: string
  color?: string
  text?: string
}



const Button: React.FC<ButtonProps> = ({ href, color, text, onclick }) => {
  return (

    <div onClick={onclick} className={`${color} text-2xl font-bold rounded-lg h-[40px] mx-3 px-2 w-6/7 mt-2`}>
        <a href={href}>
        {text}
        </a>
    </div>
    
  )
}

export default Button
