import Layout2 from "../../components/layout2";
import Image from "next/image";
import Sh from '../../assets/search.svg'
import { Caixinha } from "../../components/caixaContrato";
import Button from "../../components/Bt";
import { useState } from 'react';
import Web3 from 'web3';
import Modal from "../../components/Modal";









export const meusContratos = () => {







    const [mxP, setMxp] = useState([]);

    const [mnP, setMnp] = useState([]);
    const [tx, setTx] = useState([]);
    if (typeof window !== "undefined") {
        // Código que depende do objeto window pode ser executado aqui

        const web3 = new Web3(window.ethereum);
        const enderecoContrato = '0xEc2acE59bBC255a73C81d274bF0b9bD713E402b3';
        const abi = require('../../contract/MeuContrato.json').abi;
        const contrato = new web3.eth.Contract(abi, enderecoContrato);

        contrato.methods.maxPessoas().call()
            .then((result) => {
                setMxp(result)
            })
            .catch((error) => {
                console.error('Erro ao chamar a função', error);
            });
        contrato.methods.quantUsuario().call()
            .then((result) => {
                setMnp(result)
            })
            .catch((error) => {
                console.error('Erro ao chamar a função', error);
            });
        contrato.methods.taxaAdmin().call()
            .then((result) => {
                setTx(result)
            })
            .catch((error) => {
                console.error('Erro ao chamar a função', error);
            });
        contrato.methods.contratoSaldo().call()
            .then((result) => {
            })
            .catch((error) => {
                console.error('Erro ao chamar a função', error);
            });
        contrato.methods.verSaldo().call()
            .then((result) => {
            })
            .catch((error) => {
                console.error('Erro ao chamar a função', error);
            });


    }
    const [isOpen, setIsOpen] = useState(false)

    function handleOpenModal() {
        setIsOpen(true)
    }

    function handleCloseModal() {
        setIsOpen(false)
    }
    function redirect() {
        window.location.href = "./dadosAparelho";
    }
    function ethToWei(eth) {
        return web3.utils.toWei(eth, 'ether');
    }


    function mandaDado() {
        handleCloseModal()
        const web3 = new Web3(window.ethereum);
        const enderecoContrato = '0xEc2acE59bBC255a73C81d274bF0b9bD713E402b3';
        const abi = require('../../contract/MeuContrato.json').abi;
        const dinheiro = document.getElementById("dinheiro");
        const carteira = window.ethereum.selectedAddress;
        const din = dinheiro.value; // exemplo de valor do aparelho


        const contrato = new web3.eth.Contract(abi, enderecoContrato);
        const data = contrato.methods.adicionarDinheiro().encodeABI();




        
        web3.eth.getTransactionCount(carteira).then((nonce) => {
            const txParams = {
                nonce: nonce,
                to: enderecoContrato,
                value: din,
                from: carteira,
                data: data
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
        <Layout2>
            <Modal
                isOpen={isOpen}
                onClose={handleCloseModal}
                title="Gostaria de entrar nesse grupo?"
            >
                <div className="flex flex-col">
                    <p className="text-md text-center text-[#C1C1C1]">Digite o valor que deseja transferir</p>
                    <input type="number" placeholder="R$ 100" id="dinheiro" className="bg-[#203030] rounded-lg px-2 py-4 mt-3"></input>
                    <p className="mt-2 ">Tenha em mente que ao confirmar, será acionado a MetaMask para completar a transferência!</p>
                    <div className="mt-3">
                        <Button text='Certo!' color='bg-[#02DE82] my-5' onclick={mandaDado} />
                        <Button text='Cancelar' color='bg-[#FF2626] my-5' onclick={handleCloseModal} />
                    </div>
                </div>

            </Modal>
            <div className="flex flex-row justify-between items-start mx-2">
                <div className="text-bold text-xl mr-2 mt-2 font-bold">
                    <p>Meus Contratos</p>
                </div>
                <div className='bg-[#303030] text-xl flex mt-1 items-start py-1 text-center flex-row rounded-lg mx-2'>
                    <div className="w-full mx-3 mt-1">
                        <Image
                            src={Sh}
                            alt="My Image"
                            width={20}

                        /></div>

                    <div>
                        <input type="text" className="bg-inherit w-[150px] placeholder:text-sm" placeholder="Busque por um grupo" />
                    </div>
                </div>
            </div>
            <div className="max-h-[500px] overflow-y-auto mt-2">
                <Caixinha membros={mnP + '/' + mxP} tipoSeguro={"Roubo / Furto - 100% Assegurado*"} taxaAdm={tx + '%'} valorMinimo={"12%"} />
            </div>

            <div className="fixed bottom-0 bg-[#151A20] w-full h-[150px] text-center">
                <div className="mx-10 my-5" >   <Button text='Adcionar Saldo' color='bg-[#02DE82] my-5' onclick={handleOpenModal} />
                    <Button text='Sair do Grupo' color='bg-[#FF2626] my-5' />

                </div>


            </div>



        </Layout2>



    )





}


export default meusContratos