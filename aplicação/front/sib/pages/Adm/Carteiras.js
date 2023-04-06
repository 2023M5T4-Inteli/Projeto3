import Logo from '../../assets/logoCoover.svg'
import Image from 'next/image';
import Pr from '../../assets/Perfil.svg'
import Button from '../../components/Bt';
import Web3 from 'web3';
import { useState } from 'react';
import logout from '../../assets/logout.svg'
import { stringify } from 'querystring';



function Aprova(valor) {
  const web3 = new Web3(window.ethereum);

  const enderecoContrato = '0xEc2acE59bBC255a73C81d274bF0b9bD713E402b3';
  const abi = require('../../contract/MeuContrato.json').abi;

  const carteira = window.ethereum.selectedAddress;

  const contrato = new web3.eth.Contract(abi, enderecoContrato);
  const data = contrato.methods.retirarTaxas(10000000).encodeABI();


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

export const Carteiras = () => {

  const [dados, setDados] = useState([]);
  const [saldoAdm, setSaldo] = useState([]);

  if (typeof window !== "undefined") {
    // Código que depende do objeto window pode ser executado aqui

    const web3 = new Web3(window.ethereum);
    const enderecoContrato = '0xEc2acE59bBC255a73C81d274bF0b9bD713E402b3';
    const abi = require('../../contract/MeuContrato.json').abi;

    const carteira = '0xaa00310795ECDcb40a70BC5002D475cFF867F09F';

    const contrato = new web3.eth.Contract(abi, enderecoContrato);

    contrato.methods.verSaldoAdm().call({ from: carteira })
      .then((result) => {
        console.log('Resultado', result);
        const weiValue = result; // Valor em wei
        const ethValue = weiValue / 1e18; // Conversão de wei para ETH
        const ethPrice = 961315; // Valor atual do ETH em reais
        const realValue = ethValue * ethPrice;
        setSaldo(realValue);

      })
      .catch((error) => {
        console.error('Erro ao chamar a função', error);
      });


    contrato.methods.visualizarCarteiras().call({ from: carteira })
      .then((result) => {
        console.log('Resultado', result);
        setDados(result);

      })
      .catch((error) => {
        console.error('Erro ao chamar a função', error);
      });

  }

  function red() {
    window.location.href = './Aprovacao'
  }
  function red2() {
    window.location.href = './Indenizacao'
  }




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
      <div className='flex flex-row'>

        <div className='flex flex-col pt-10 mx-10'>

          <p className='font-bold text-white text-2xl'> Painel inicial</p>

          <Button text='Aprovar Entradas' color='bg-[#303030] mt-7 mx-0 text-sm text-white' onclick={red} />
          <Button text='Aprovar Indenizações' color='bg-[#303030] mt-7 mx-0 text-sm text-white' onclick={red2} />
          <Button text='Visualizar Carteiras' color='bg-[#A5A4FF] mt-7 mx-0 text-sm text-white' />

          <div className='w-full mt-7 '>
            <div className='bg-[#303030] flex flex-row w-full  border-2 text-white items-center text-center font-bold rounded-lg px-3 py-3 text-xl'>
              <p className='text-sm'> Saldo ADM: R$ {saldoAdm} </p>
            </div>
            <Button text='Resgatar Taxas' color='bg-[#02E18F] text-center mt-7 mx-0 text-sm text-white' onclick={Aprova} />
          </div>


          <div className='items-center h-full'>
            <div className=' bottom-8 mt-[120%] flex flex-row'>
              <Image
                src={logout}
                alt="My Image"
                width={20}
              />
              <p className='text-white text-lg m-2'>logout</p>
            </div>
          </div>

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

          <div class="h-[350px] overflow-y-auto scroll-invi mt-3">

            {dados.map(dd => (
              <div key={dd.id} className='w-full bg-[#FFFFFF] flex flex-row mt-7 rounded-xl'>
                <div className='flex flex-col mx-2'>
                  <p className='my-1'>10/03/2023</p>
                  <p className='my-1'>Carteira: <span id='cart' className='font-normal'>{dd.carteiraUsuario}</span> </p>
                  <p className='my-1  '>Valor do Aparelho: R$ {dd.valorAparelho}</p>
                  <p className='my-1  '>Saldo: R$ {dd.saldo}</p>
                  <p className='my-1'>IMEI: {dd.IMEI}</p>
                </div>
                <div className='flex flex-row items-start justify-between mt-8'>
                </div>
              </div>
            ))}

          </div>


        </div>



      </div>


    </div>

  )
}



export default Carteiras;



