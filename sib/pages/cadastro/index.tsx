import { Layout } from '../../components/Layout'
import Icon from '../../assets/icons/Logo'
import globo from "../assets/icons/globe.svg"
import Image from 'next/image'
import Button from '../../components/Bt'
import Setinha from '../../assets/icons/Seta'
import Raposa from '../../assets/icons/Metamask'
import Em from '../../assets/icons/Emoji'
import { In } from '../../components/Input'

const Login = () => {
    return (
      <Layout title={'Home'}>
      <div className='pt-5 ml-4 ' >
          <a href="../"><Setinha/></a>
      
      <div className='w-full flex flex-col pt-5' >
          <div className='items-center flex flex-col'>
                <Icon/>
          </div>
          <div className='mx-4 flex flex-col mt-8'>
            <h2 className='font-bold text-white text-[22px] text-left items-left'>Dados Pessoais</h2>
            <In
            Title='Nome'
            className=''
            placeh={"Digite seu nome:"}
            type={'text'} />

            <In
            Title='Sobrenome'
            className=''
            placeh={"Digite seu sobrenome:"}
            type={'text'} />

        <div className='mt-10'>
        <In
            Title='E-mail'
            className=''
            placeh={"Digite seu email:"}
            type={'email'} />

        <In
            Title='Confirmar email'
            className=''
            placeh={"confirme seu e-mail"}
            type={'email'} />

        </div>

        


          </div>
         
          </div>
          </div>
          
      </Layout>
    )
  
  }
  
  export default Login