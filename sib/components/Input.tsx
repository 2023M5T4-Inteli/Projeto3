import Link from "next/link"

type InProps = {
    Title: string;
    className: string;
    placeh:String
    type:string
  }

export const In = ({Title, className, placeh, type}: InProps) => {  
    return (
        <div className='text-left items-center '>
        <h4 className='text-[#C1C1C1] mb-1'>{Title}</h4>
        <input type={type} placeholder={''+ placeh} className=' placeholder:text-white placeholder:p-1 pl-2 rounded-lg w-[312px] bg-[#303030] py-2'/>
    </div>
    )
}