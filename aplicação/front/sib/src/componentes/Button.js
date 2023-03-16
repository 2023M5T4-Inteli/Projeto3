
import '../Global.css'

export const Bt = ({title, link}) => {
    return (
        <div className='Bt'>
            <a className='link' href={link}>
            {title}
            </a>
        </div>



    )
}


export default Bt
