import { deflate } from "zlib"
import pay from '../../assets/payment.svg'
import Image from "next/image"
import lg from '../../assets/logoCoover.svg'
import Meta from '../../assets/Metamask.svg'
import Button from "../../components/Bt"



export const Adm = () => {

    console.log("2")
    async function connectToMetamask() {
        console.log("2")
        try {
            // Verifique se o Metamask está instalado e se o usuário está conectado
            if (typeof window.ethereum !== 'undefined') {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                window.location.href = "./Adm/Aprovacao"
            } else {
                console.error('A carteira Metamask não está instalada neste navegador.');
            }
        } catch (error) {
            console.error('Erro ao conectar à carteira Metamask:', error);
        }
    }


    return (
        <div className="bg-[#151A20] flex flex-row justify-between pt-10 text-white w-full min-h-screen px-10 h-full">
            <div className="items-center mt-8 w-1/2 pl-16 ">
                <Image
                    src={pay}
                    alt="My Image"
                    width={450}
                />
            </div>

            <div className="items-center text-center w-1/2 flex flex-col mt-14">
                    <Image
                        src={lg}
                        alt="My Image"
                        width={300}
                    />




                <div className="mt-10">
                    <Image
                        src={Meta}
                        alt="My Image"
                        width={200}
                    />
                </div>

                <Button text='Conecte-se com a Wallet da Coover' onclick={connectToMetamask} color='bg-[#02DE82] mx-1 mt-10' />

            </div>
        </div>


    )



}


export default Adm;