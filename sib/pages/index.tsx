import { Layout } from '../components/Layout'
import Icon from '../assets/icons/Logo'
import globo from "../assets/icons/globe.svg"
import Image from 'next/image'
import Button from '../components/Bt'

const Home = () => {
  return (
    <Layout title={'Home'}>
      <div className='w-full flex flex-col items-center pt-10' >
        <div>
        <Icon/>
        </div>
        <div className='text-center pt-10 pr-7 pl-7'>
          <p className='text-white text-[#16px]'>Cuidar de verdade é 
            oferecer uma proteção do jeito 
            que você realmente precisa</p>
        </div>
        <div>
          <Image
            src={globo}
            alt="Picture of the author"
            width={350}
            height={500}
          />
        </div>
        <div className='w-5/6 pt-5'>
        <Button Title='Enter' Link='../login' className='mb-5 bg-[#02DE82]'/>
        <Button Title='Cadastre-se' Link='/cadastro' className='border-4 border-white'/>

        </div>
        


      </div>
    </Layout>
  )

}

export default Home