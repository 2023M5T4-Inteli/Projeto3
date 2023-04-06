import Web3 from "web3";


const contractABI = require('../contract/MeuContrato.json').abi


const testeContract = () => {
    async function connectToContract() {
        const web3 = new Web3(
            new Web3.providers.HttpProvider(
                "https://goerli.infura.io/v3/65dd0bc3fce14a32893c065d1c516dfb"
            )
        );
        const contractAddress = "0xEc2acE59bBC255a73C81d274bF0b9bD713E402b3";
        const contractABI = contractABI;

        const contract = new web3.eth.Contract(contractABI, contractAddress);

        const contractData = await contract.methods.viabilidadeContrato().call();

        console.log(contractData);
    }
    connectToContract();
    return (
        <div>

        </div>
    )
}
const web3 = new Web3('https://goerli.infura.io/v3/65dd0bc3fce14a32893c065d1c516dfb'); // substitua pelo endereço da sua rede blockchain

const contratoEndereco = '0xEc2acE59bBC255a73C81d274bF0b9bD713E402b3'; // substitua pelo endereço do seu contrato inteligente
const contratoAbi = require('../contract/MeuContrato.json').abi;
const contrato = new web3.eth.Contract(contratoAbi, contratoEndereco);



contrato.methods.viabilidadeContrato().call().then(resultado => {
    console.log(resultado);
});