import Lg from '../../assets/logoCoover.svg'
import Image from 'next/image';
import Ok from '../../assets/Okay.svg'


export const Okay = () => {

    return (
        <div className=" bg-black min-h-screen w-full">
            <div className='pt-10 flex flex-col w-full'>
                <div className='flex items-center justify-center mt-10'>
                    <Image
                        src={Lg}
                        alt="My Image"
                        width={280}
                    />
                </div>
                <div className='flex items-center justify-center mt-10'>
                    <Image
                        src={Ok}
                        alt="My Image"
                        width={200}
                    />
                </div>
                <div className='text-center items-center mx-10'>
                    <p className='font-bold text-white text-2xl mt-4'>Pedido de indenização enviado com sucesso!</p>



                </div>
            </div>
        </div>
    )
}



export default Okay;