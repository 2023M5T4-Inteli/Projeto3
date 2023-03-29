import { deflate } from "zlib"
import pay from '../../assets/payment.svg'
import Image from "next/image"
import lg from '../../assets/logoCoover.svg'
import Meta from '../../assets/Metamask.svg'
import Button from "../../components/Bt"



export const Adm = () => {

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
                window.location.href = "./Aprovacao"
            } else {
                console.error('A carteira Metamask não está instalada neste navegador.');
            }
        } catch (error) {
            console.error('Erro ao conectar à carteira Metamask:', error);
        }
    }


    return (
        <div className="bg-[#151A20] flex flex-row justify-between text-white w-full min-h-screen pt-1 px-10 h-full">
            <div className="items-center mt-8 w-1/2 ">
                <Image
                    src={pay}
                    alt="My Image"
                    width={450}
                />
            </div>

            <div className="items-center text-center w-1/2 flex flex-col mt-14 ">
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

                <Button text='Conecte-se com a Wallet da Coover' onclick={() => connectToMetamask()}  color='bg-[#02DE82] mx-1 mt-10'/>

            </div>
        </div>


    )



}


export default Adm;