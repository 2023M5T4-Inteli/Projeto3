import { Layout } from '../components/Layout'
import React from 'react';
import Image from 'next/image';
import Globe from '../assets/globe.svg'
import Button from '../components/Bt';
import Meta from '../assets/Metamask.svg'
import Emoji from '../assets/emoji.svg'
import Ic from '../assets/icon1.svg'














const Login = () => {
    const Web3 = require('web3');

    async function connectToMetamask() {
        console.log("Oj")
        try {
            // Verifique se o Metamask está instalado e se o usuário está conectado
            if (typeof window.ethereum !== 'undefined') {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
    
                const web3Provider = new Web3(window.ethereum);
                const accounts = await web3Provider.eth.getAccounts();
                const account = accounts[0];
    
                // Obtenha o saldo da conta
                const balanceWei = await web3Provider.eth.getBalance(account);
                const balanceEth = web3Provider.utils.fromWei(balanceWei, 'ether');
    
                // Armazene os dados no localStorage
                localStorage.setItem('address', account);
                localStorage.setItem('balance', balanceEth);
    
                console.log(`Endereço da conta: ${account}`);
                console.log(`Saldo da conta: ${balanceEth} ETH`);
                window.location.href = "./minhaConta"
            } else {
                console.error('A carteira Metamask não está instalada neste navegador.');
            }
        } catch (error) {
            console.error('Erro ao conectar à carteira Metamask:', error);
        }
    }



    return (
        <Layout title={'Home'} showImage={true} showSeta={true} rota={"../"}>
            <div className='flex flex-col items-center justify-center text-center h-full w-full py-8 px-2'>
                <div className='w-full h-auto pt-10 items-center justify-center flex flex-col'>
                    <Image
                        src={Meta}
                        alt="My Image"
                        width={200}
                    />
                </div>
                <div onClick={connectToMetamask}>
                    <Button text='Conecte sua wallet' onclick={() => connectToMetamask} color='bg-[#02DE82]' />
                </div>
                <div className='pt-3 flex flex-row '>
                    <p className='mx-3'>Ter o App facilita sua vida! </p>
                    <Image
                        src={Emoji}
                        alt="My Image"
                        width={30}
                    />
                </div>


                <div className='mt-10 items-center text-center flex flex-col'>
                    <p className='text-lg'>Não conhece o MetaMask?</p>
                    <a href='https://metamask.io/'>
                        <div className='border-solid border-white border-2 text-2xl flex flex-row rounded-lg h-[40px] mx-3 px-10 w-6/7'>
                            <p className='mx-3'>Metamask info</p>
                            <Image
                                src={Ic}
                                alt="My Image"
                                width={20}
                            />
                        </div>
                    </a>

                </div>

            </div>
        </Layout>
    )

}

export default Login;