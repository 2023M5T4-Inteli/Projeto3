import { Layout } from '../components/Layout'
import Icon from '../assets/icons/Logo'
import globo from "../assets/icons/globe.svg"
import Image from 'next/image'
import Button from '../components/Bt'
import Setinha from '../assets/icons/Seta'
import Raposa from '../assets/icons/Metamask'
import Em from '../assets/icons/Emoji'

const Login = () => {
  return (
    <Layout title={'Home'}>
    <div className='pt-5 ' >
        <a href="../"><Setinha/></a>
    
    <div className='w-full flex flex-col items-center pt-5' >
        <div className='items-center flex flex-col'>
        <Icon/>
            <div className='pt-8'>
                <Raposa/>
            </div>
        </div>
        <div className='flex flex-col items-center text-center mt-7'>
            <Button Title='Cadastre-se com a sua wallet' Link='../../' className='bg-[#02DE82] p-3'/>
            <div className='flex flex-row mb-4 mt-2 text-center items-center'>
                <p className='text-white text-[17px]'>Ter o App facilita sua vida! </p>
                <Em/>
            </div>
            <Button Title='METAMASK INFO' Link='../../' className='bg-black text-[17px] text-bold p-2 px-10 border-4 border-white'/>
            <h3 className='text-white pt-4'>Aprenda com 'MetaMask Learn'!</h3>
        </div>
       
        </div>
        </div>
        
    </Layout>
  )

}

export default Login