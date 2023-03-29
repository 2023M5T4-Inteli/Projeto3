import Logo from '../../assets/logoCoover.svg'
import Image from 'next/image';
import Pr from '../../assets/Perfil.svg'
import Button from '../../components/Bt';
import Web3 from 'web3';

function Aprova(){
  const web3 = new Web3(window.ethereum);

const enderecoContrato = '0x4204ae36bE6bb52aC176b9D56b4827e55faB13Cc';
const abi = require('../../contract/MeuContrato.json').abi;

const carteira = window.ethereum.selectedAddress;

const contrato = new web3.eth.Contract(abi, enderecoContrato);
const data = contrato.methods.solicitacaoAprovacao(clienteEndereco).encodeABI();

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








function mandaDado() {

  let cart = document.getElementById('cart')
  const web3 = new Web3(window.ethereum);

  const enderecoContrato = '0x4204ae36bE6bb52aC176b9D56b4827e55faB13Cc';
  const abi = require('../../contract/MeuContrato.json').abi;

  const carteira = '0xaa00310795ECDcb40a70BC5002D475cFF867F09F';

const contrato = new web3.eth.Contract(abi, enderecoContrato);

contrato.methods.visualizarCarteiras().call({ from: carteira })
  .then((result) => {
    console.log('Resultado', result);
    cart.value = result.carteiraUsuario;
  })
  .catch((error) => {
    console.error('Erro ao chamar a função', error);
  });

}











export const Aprovacao = () => {



  return (
    <div className="bg-[#151A20] min-h-screen">
      <div className="bg-[#151A20] flex flex-row justify-between top-0 text-white w-full pt-8 px-10 h-full">
        <Image
          src={Logo}
          alt="My Image"
          width={150}
        />
        <Image
          src={Pr}
          alt="My Image"
          width={50}
        />
      </div>
      <div className='flex felx-row'>

        <div className='flex flex-col pt-10 mx-10'>

          <p className='font-bold text-white text-2xl'> Painel inicial</p>

          <Button text='Aprovação dos Dados' onclick={() => mandaDado()} color='bg-[#A5A4FF] mt-7 mx-0 text-white' />

        </div>

        <div className='bg-[#151A20] w-[900px] mt-6 '>
          <div className='text-left mt-3'>
            <p className='font-bold text-white text-2xl'>Grupos de seguros</p>
          </div>
          <div className='w-full items-center text-center '>
            <div className='bg-[#303030] '>
            </div>
          </div>
          <div className='flex flex-row items-start justify-between px-10'>
            <Button text='STATUS' color='bg-[#303030] mt-7 mx-0 text-white font-normal' />
            <Button text='SOLICITAÇÕES' color='bg-[#303030] mt-7 mx-0 text-white font-normal' />
          </div>
          <div className='w-full bg-[#FFFFFF] flex flex-row mt-7 rounded-xl'>
            <div className='flex flex-col mx-2'>
              <p className='my-1'>10/03/2023</p>
              <p className='my-1'>Carteira solicitante: <span id='cart'>0xaa00310795ECDcb40a70BC5002D475cFF867F09F</span> </p>
              <p className='my-1'>Valor do Aparelho: R$ 1.800,00</p>
              <p className='my-1'>IMEI: 529460054727407</p>
            </div>
            <div className='flex flex-row items-start justify-between mt-8'>
              <div className='bg-[#02DE82] mx-10 w-[100px] h-[60px] text-center'>
                <p className='font-bold mt-4'>Aceitar</p>
              </div>
              <div className='bg-[#FC3E3E] mx-10 w-[100px] h-[60px] text-center'>
                <p className='font-bold mt-4'>Negar </p>
              </div>
            </div>
     
          </div>

        </div>
        <div id='resposta'>
              <input placeholder='Digite a carteira'>
              </input>
              

            </div>


      </div>


    </div>

  )
}



export default Aprovacao;



