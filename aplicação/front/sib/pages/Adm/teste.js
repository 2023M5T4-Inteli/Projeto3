import { Layout2 } from "../../components/layout2";
import CampoInput from "../../components/input";
import Image from "next/image";
import Info from '../../assets/info.svg'
import Button from "../../components/Bt";
import Web3 from 'web3';



function mandaDado(){
    
    const web3 = new Web3(window.ethereum);

const enderecoContrato = '0xEc2acE59bBC255a73C81d274bF0b9bD713E402b3';
const abi = require('../../contract/MeuContrato.json').abi;

const valCelular = document.getElementById("cel");
const imeiCel = document.getElementById("imei");


const carteira = window.ethereum.selectedAddress;
const valorAparelho = valCelular.value; // exemplo de valor do aparelho
const imei = imeiCel.value; // exemplo de IMEI do aparelho

const contrato = new web3.eth.Contract(abi, enderecoContrato);
const data = contrato.methods.aprovarSolicitacao(valorAparelho, imei).encodeABI();

web3.eth.getTransactionCount(carteira).then((nonce) => {
  const txParams = {
    nonce: nonce,
    to: enderecoContrato,
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


export const dadosAparelho = () => {
    
    let address;
    let balance;

    if (typeof window !== 'undefined' && localStorage) {
        address = localStorage.getItem('address');
        balance = localStorage.getItem('balance')
    }


    function mostrarValores(add, balan) {
        const valCelular = document.getElementById("cel");
        const imeiCel = document.getElementById("imei");
        const valorCelular = valCelular.value;
        const valorImei = imeiCel.value;
        console.log(valorCelular);
        console.log(valorImei)
        console.log(add)
        console.log(balan)

    }
    return (
        <Layout2>
            <div className="w-full px-8">
                <h2 className="font-bold text-2xl"> Dados do aparelho </h2>
                <div className="items-center flex mx-3 flex-col">
                    <ul className="list-disc mt-5">
                        <li>
                            <p>Para entrar em algum grupo de seguro, precisamos de algumas informações sobre o seu aparelho.</p>

                        </li>
                        <li className="mt-5">
                            <p>Isso nos ajudará para aprovar sua entrada em algum grupo e para futuras solicitações de indenização.</p>
                        </li>
                    </ul>
                </div>
                <div className="mt-5">
                    <div className="flex flex-row items-end ">
                        <CampoInput title="Valor do celular (Atual)" type="number" id="cel" />
                        <div className="pb-3 pl-4">
                            <Image
                                src={Info}
                                alt="My Image"
                                width={40}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row items-end ">
                        <CampoInput title="IMEI" type="text" id="imei" />
                        <div className="pb-3 pl-4">
                            <Image
                                src={Info}
                                alt="My Image"
                                width={40}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full text-center mt-8">
                    <Button text='Enviar dados' color='bg-[#02DE82] mx-1' onclick={() => mandaDado()} />
                    <div id="resposta">

                    </div>
                </div>


            </div>


        </Layout2>






    )
}



export default dadosAparelho;