import { Layout } from '../components/Layout'
import React from 'react';
import Image from 'next/image';
import Globe from '../assets/globe.svg'
import Button from '../components/Bt';

const Home = () => {
  return (
    <Layout title={'Home'} showImage={true} showSeta={false}>
      <div className='flex flex-col flex-1 items-center text-center h-full w-full py-8 px-[80px]'>
        <p className='text-[16px]'>Cuidar de verdade é
          oferecer uma proteção do jeito
          que você realmente precisa
        </p>

        <div className='w-full h-auto pt-10'>      
         <Image
          src={Globe}
          alt="My Image"
          width={300}
        />
        </div>
        <div className='bg-[#02DE82] text-4xl rounded-lg w-full mt-[40px] '>
          <a href="./login">
          Entrar
          </a>
        </div>



      </div>
    </Layout>
  )

}

export default Home;