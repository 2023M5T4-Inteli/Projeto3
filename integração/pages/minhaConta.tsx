import { Layout } from '../components/Layout'
import React from 'react';
import Image from 'next/image';
import Button from '../components/Bt';
import Ic3 from '../assets/icon3.svg'
import seta from '../assets/vector.svg'
import user from   '../assets/user.svg';
import invoice from '../assets/invoice.svg'
import dash from '../assets/dash.svg'
import cubo from '../assets/cubo.svg'





const minhaConta = () => {
    return (
        <Layout title={'Home'} showImage={true} showSeta={false} rota={"../"}>
            <div className='w-full'>
                <div className='text-left items-left px-8 mt-8 w-full'>
                    <p className='font-bold text-xl'>Página Inicial</p>
                </div>
                <div className=' flex flex-col justify-center p-3 mt-2'>
                    <a href="./Contratos">
                    <div className='bg-[#303030] text-2xl flex items-start justify-between py-2 flex-row rounded-lg mx-3 px-2 w-6/7 mt-2'>
                        <div className='items-left text-left px-3 w-2/8'>
                            <Image
                                src={Ic3}
                                alt="My Image"
                                width={30}
                            />
                        </div>
                        <div className='text-left font-normal w-4/8'><p>Contatos</p></div>
                        <div className='px-4 items-center w-2/8 mt-1'>    
                            <Image
                            src={seta}
                            alt="My Image"
                            width={12}
                        /></div>

                    </div>
                    </a>
                    <div className='bg-[#303030] text-2xl flex items-start justify-between py-2 flex-row rounded-lg mx-3 px-2 w-6/7 mt-7    '>
                        <div className='items-left text-left px-3 w-2/8'>
                            <Image
                                src={user}
                                alt="My Image"
                                width={30}
                            />
                        </div>
                        <div className='text-left font-normal w-4/8'><p>Meus Contratos</p></div>
                        <div className='px-4 items-center w-2/8 mt-1'>    
                            <Image
                            src={seta}
                            alt="My Image"
                            width={12}
                        /></div>

                    </div>
                    <a href="./dadosAparelho">
                    <div className='bg-[#303030] text-xl flex items-start justify-between py-2 flex-row rounded-lg mx-3 px-2 w-6/7 mt-7    '>
                        <div className='items-left text-left px-3 w-2/8'>
                            <Image
                                src={invoice}
                                alt="My Image"
                                width={30}
                            />
                        </div>
                        <div className='text-left font-normal w-4/8'><p> Dados para o Contrato</p></div>
                        <div className='px-4 items-center w-2/8 mt-1'>    
                            <Image
                            src={seta}
                            alt="My Image"
                            width={12}
                        /></div>

                    </div>
                    </a>
                    <div className='bg-[#303030] text-xl flex items-start justify-between py-2 flex-row rounded-lg mx-3 px-2 w-6/7 mt-7    '>
                        <div className='items-left text-left px-3 w-2/8'>
                            <Image
                                src={dash}
                                alt="My Image"
                                width={30}
                            />
                        </div>
                        <div className='text-left font-normal w-4/8'><p> Indenização</p></div>
                        <div className='px-4 items-center w-2/8 mt-1'>    
                            <Image
                            src={seta}
                            alt="My Image"
                            width={12}
                        /></div>

                    </div>  
                    <div className='bg-[#303030] text-xl flex items-start justify-between py-2 flex-row rounded-lg mx-3 px-2 w-6/7 mt-7    '>
                        <div className='items-left text-left px-3 w-2/8'>
                            <Image
                                src={cubo}
                                alt="My Image"
                                width={30}
                            />
                        </div>
                        <div className='text-left font-normal w-4/8'><p> Saiba Mais</p></div>
                        <div className='px-4 items-center w-2/8 mt-1'>    
                            <Image
                            src={seta}
                            alt="My Image"
                            width={12}
                        /></div>

                    </div>  
                    <Button text='Sair do aplicativo' color=' text-center mt-10 bg-[#FF2626]'/>

                </div>
                

            </div>

        </Layout>
    )
}

export default minhaConta;