import Layout2 from "../../components/layout2";
import invoice from '../../assets/invoice.svg'
import Image from "next/image";
import Sh from '../../assets/search.svg'
import info from '../../assets/info2.svg'
import { Caixinha } from "../../components/caixaContrato";
import Button from "../../components/Bt";
import { useState } from 'react';
import Web3 from 'web3';
import Modal from "../../components/Modal";








export const Contratos = () => {







    const [mxP, setMxp] = useState([]);

    const [mnP, setMnp] = useState([]);
    const [tx, setTx] = useState([]);
    if (typeof window !== "undefined") {
        // Código que depende do objeto window pode ser executado aqui

        const web3 = new Web3(window.ethereum);
        const enderecoContrato = '0x4204ae36bE6bb52aC176b9D56b4827e55faB13Cc';
        const abi = require('../../contract/MeuContrato.json').abi;
        const contrato = new web3.eth.Contract(abi, enderecoContrato);

        contrato.methods.maxPessoas().call()
            .then((result) => {
                console.log('Resultado', result);
                setMxp(result)
            })
            .catch((error) => {
                console.error('Erro ao chamar a função', error);
            });
        contrato.methods.quantUsuario().call()
            .then((result) => {
                console.log('Resultado', result);
                setMnp(result)
            })
            .catch((error) => {
                console.error('Erro ao chamar a função', error);
            });
        contrato.methods.taxaAdmin().call()
            .then((result) => {
                console.log('Resultado', result);
                setTx(result)
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

    return (
        <Layout2>
            <Modal
                isOpen={isOpen}
                onClose={handleCloseModal}
                title="Gostaria de entrar nesse grupo?"
            > <p className="text-md text-center text-[#C1C1C1]"> A solicitação será enviada para a equipe de seguros, após a confirmação.</p>

                <Button text='Sim' color='bg-[#02DE82] my-5' onclick={redirect} />
                <Button text='Cancelar' color='bg-[#FF2626] my-5' onclick={handleCloseModal} />


            </Modal>
            <div className="flex flex-row justify-between items-start mx-2">
                <div className="text-bold text-3xl mr-3">
                    <p>Contratos</p>
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
                <div className="mx-10 my-5" >   <Button text='Entrar em Grupo' color='bg-[#02DE82] my-5' onclick={handleOpenModal} />
                    <Button text='Solicitar novo Grupo' color='bg-[#0038AF] my-5' />

                </div>


            </div>



        </Layout2>



    )





}


export default Contratos