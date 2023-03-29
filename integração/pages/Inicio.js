import { Layout } from '../components/Layout'
import Image from 'next/image';
import Button from '../components/Bt';
import Okay from '../assets/Okay.svg'
import React, { useState } from 'react'
import Modal from '../components/Modal'



export const Inicio = () => {

  function redirect() {
    window.location.href = "./login";
  }

  const [isOpen, setIsOpen] = useState(false)
  
  function handleOpenModal() {
    setIsOpen(true)
  }

  function handleCloseModal() {
    setIsOpen(false)
  }
    
  let address
  let balance;
  
  if (typeof window !== 'undefined' && localStorage) {
     address = localStorage.getItem('address');
     balance = sessionStorage.getItem('balance');
  }



  return (
    <Layout title={'Home'} showImage={true} showSeta={false}>
      <div className='flex flex-col items-center text-center h-full w-full py-8 px-[80px]'>
        <div className='flex flex-col mt-1 items-center text-center'>
          <Image
            src={Okay}
            alt="My Image"
            width={100}
          />
          <p className='mt-5'>Wallet conectada com sucesso!</p>
        </div>

        <div className='flex-flex-col mt-3 text-center justify-center items-center'>

          <div className='text-left text-[#C1C1C1] mx-3'>
            <p>Endereço da Wallet</p>
            <p className='text-[14px] h-10 px-1 py-2 text-white bg-[#303030]' >{address}</p>

          </div>
          <div className='text-left mt-5 text-[#C1C1C1] mx-3'>
            <p>Saldo</p>
            <p className='text-sm h-10 px-2 py-2 text-white bg-[#303030]'>{balance}</p>
          </div>
          <div className='mx-7 mt-3'>
            <p>Deseja continuar com esse endereço
              de wallet ou alterar?</p>
            <div className='bg-[#02DE82] text-2xl rounded-lg h-[40px] mx-3 px-2 w-6/7 mt-2'>
              <p>Continuar</p>
            </div>
            <Button text='Desconectar' onclick={() => handleOpenModal()} color='bg-[#FF2626]' />
          </div>
          <Modal
            isOpen={isOpen}
            onClose={handleCloseModal}
            title="Tem certeza que deseja desconectar?"
          >
            <div className='p-3'>
              <Button text='Sim' color='bg-[#FF2626]' onclick={redirect} />
              <Button text='Não' color='bg-[#02DE82]' onclick={handleCloseModal} />
            </div>

          </Modal>




        </div>

      </div>
    </Layout>
  )

}

export default Inicio;