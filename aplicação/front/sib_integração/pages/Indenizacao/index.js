import Lg from '../../assets/logoCoover.svg'
import Image from "next/image";
import Button from '../../components/Bt';
import Modal from '../../components/Modal'
import { useState } from 'react';
import Web3 from 'web3';



export const Indenizacao = () => {

    function handleOpenModal() {
        setIsOpen(true)
    }

    function handleCloseModal() {
        setIsOpen(false)
    }
    const [isOpen, setIsOpen] = useState(false)

    function redirect() {
        window.location.href = "./inicio.js";
    }

    function redi() {
        window.location.href = "./Indenizacao/okay";
    }
    function mandaDado() {

        const web3 = new Web3(window.ethereum);

        const enderecoContrato = '0x4204ae36bE6bb52aC176b9D56b4827e55faB13Cc';
        const abi = require('../../contract/MeuContrato.json').abi;

        const dinheiro = document.getElementById("dinheiro");
        const motivo = document.getElementById("motivo");


        const carteira = window.ethereum.selectedAddress;
        const din = dinheiro.value;
        const motiv = motivo.value; // exemplo de valor do aparelho

        const contrato = new web3.eth.Contract(abi, enderecoContrato);
        const data = contrato.methods.solicitacaoIndenizacao(din, motiv).encodeABI();

        web3.eth.getTransactionCount(carteira).then((nonce) => {
            const txParams = {
                nonce: nonce,
                to: enderecoContrato,
                from: carteira,
                data: data,
                gasPrice: web3.utils.toWei('10', 'gwei'), // definindo um preço de gás de 10 gwei
                gasLimit: 300000 // definindo um limite de gás de 300.000
            };

            web3.eth.sendTransaction(txParams)
                .on('receipt', (receipt) => {
                    alert('Transação concluída', receipt);
                    console.log('Transação concluída', receipt)
                })
                .on('error', (error) => {
                    console.error('Erro na transação', error);
                });
        });
    }



    return (
        <div className="bg-black min-h-screen w-full items-center" >
            <Modal
                isOpen={isOpen}
                onClose={handleCloseModal}
                title="Gostaria de entrar nesse grupo?"
            > <p className="text-md text-center text-[#C1C1C1]"> A solicitação será enviada para a equipe de seguros, após a confirmação.</p>

                <Button text='Sim' color='bg-[#FF2626] my-5' onclick={redirect} />
                <Button text='Não' color='bg-[#02DE82] my-5' onclick={handleCloseModal} />


            </Modal>
            <div className='bg-black items-cente justify-center flex flex-col text-center pt-3'>
                <div className='justify-center self-center items-center'>
                    <Image
                        src={Lg}
                        alt="My Image"
                        width={120}
                    />
                </div>
                <hr className="bg-gradient-to-r from-black via-white to-black w-full mt-3 mb-3 h-[2px]" />
            </div>
            <div className='flex flex-col bg-black items-center mt-8'>
                <div className='bg-[#303030] rounded-lg text-center font-bold text-white'>
                    <p className='p-4'>Status da solicitação - em aberto</p>
                </div>
                <div className='rounded-lg font-bold text-[#737373] w-4/5 mt-7'>
                    <p>Digite o valor da indenização</p>
                    <input type='number' id='dinheiro' className='bg-[#303030] w-full py-5 rounded-lg mt-3 px-2'>
                    </input>
                </div>
                <div className='rounded-lg font-bold text-[#737373] w-4/5 mt-7'>
                    <p>Selecione abaixo o tipo da categoria da indenização</p>
                    <div className='bg-[#303030] w-full  rounded-lg mt-3 px-2'>
                        <input type='text' className='bg-[#303030] w-full py-3' id='motivo' placeholder='descreva aqui o seu problema'></input>
                    </div>
                </div>
            </div>
            <div className='w-full items-center text-center flex flex-col'>
                <Button text='Solicitar indenização' color=' text-center w-4/5 mt-10 font-normal bg-[#02DE82] text-white' onclick={mandaDado} />
                <Button text='Cancelar indenização' color=' text-center w-4/5 mt-5 font-normal bg-[#FF2626] mt-4 text-white' onclick={handleOpenModal} />



            </div>
        </div>
    )
}




export default Indenizacao;