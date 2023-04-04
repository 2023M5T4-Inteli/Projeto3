## Documentação do Deploy e Testes de Smart Contracts

 &emsp;&emsp; O Solidity é a peça central da nossa solução em SmartContract. No entanto, outras tecnologias também são necessárias, por isso, será explicado detalhadamente como instalar e configurar o MetaMask e o Truffle para que eles possam funcionar perfeitamente em conjunto com o Solidity. Além disso, também  será demonstrado como fazer o deploy do SmartContract. <br>
  
**Truffle (ferramenta necessária para deploy)**
- Truffle é uma ferramenta de desenvolvimento que utiliza a Ethereum Virtual Machine (EVM) para simplificar os processos de desenvolvimento em áreas de blockchain e dApps. Com o objetivo de fornecer diversas implementações, compilações, testes e gerenciamento, a ferramenta visa atender às diferentes necessidades dos desenvolvedores e criar um ambiente mais facilitador e eficiente.

- Com o objetivo de facilitar e melhorar nossos processos, estamos utilizando o framework de ferramentas Truffle para criar interações de front-end com os smart contracts, compilar e implantar automaticamente os contratos inteligentes em diferentes redes, e desenvolver testes automatizados. Devido a sua eficiência, concluímos que a Truffle é a melhor opção para atender aos nossos objetivos nesse momento no projeto.
 
**Configurando o Truffle**
<br><br>
***Atenção: Antes de partirmos para o Truffle, é necessário ter um um projeto no VS Code com NodeJS e Git instalados!*** <br><br>

&emsp;&emsp;Primeiro, no terminal, escreva o seguinte comando para instalar a biblioteca do Truffle globalmente: <br>

 ```
 npm install -g truffle
 ```
 
 &emsp;&emsp;Depois, digite o comando a seguir para conferir se a biblioteca foi instalada e sua versão: <br><br>
 
 ```
 truffle --version
 ```

  &emsp;&emsp; O seguinte código deve aparecer no seu terminal, ele mostra que a biblioteca Truffle foi instalada com sucesso no contrato, e identifica a versão sendo utilizada:
  

<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/truffle_instalacao.jpeg"/>

 &emsp;&emsp; Agora, basta iniciar o truffle em seu repositório com o seguinte comando no terminal:
 
  ```
 truffle init
 ```
 
 &emsp;&emsp; Várias pastas serão criadas após esse procedimento. Na pasta “contracts” garanta que o seu contrato está incluso e com a extensão “.sol” (Se não estiver, o crie/altere)
 
 &emsp;&emsp;Na pasta “migrations” crie um arquivo “.js” com uma numeração ordenada em 1 acompanhada de um “_” (exemplo: 1_smartContract.js), permitindo que seja executado previamente na ordem. 
 
<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/1_deploy%20Sprint%203.jpg"/> 

 &emsp;&emsp;Volte para o terminal e execute o seguinte comando (ele gera um pacote que cria o arquivo “package.json”):
 
  ```
npm init -y
 ```

- A configuração do Truffle foi extremamente simples, não havendo grandes dificuldades. A possível real dificuldade pode estar nas pré-condições do ambiente de programação (VS Code com NodeJS e Git instalados), caso a pessoa não tenha experiência nesse tipo de interface, ela pode levar muito tempo pré configurando. Tirando isso, a instalação consiste em alguns comandos no terminal, com baixíssimas chances de erro.<br>

**Compilação do Contrato (preparação para Deploy)**

&emsp;&emsp;execute o comando abaixo no terminal, ele compila-ra o contrato:

  ```
truffle compile
 ```
&emsp;&emsp; Volte no arquivo “.js” criado na pasta “migrations” e escreva o seguinte código (informa o contrato que deseja compilar e fazer deploy):

  ```
const contrato = artifacts.require("nomeContrato");

module.exports = function(deployer) {
    // deployment steps
    deployer.deploy(contrato);
  };
 ```
 
&emsp;&emsp; Após informar o contrato desejado, é preciso selecionar a rede em que se deseja fazer o deploy. Vá ao arquivo “truffle-config.js” e procure a testnet “goerli” e descomente a mesma até a chaves que fecha o objeto .

  ```
goerli: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://goerli.infura.io/v3/${PROJECT_ID}`),
      network_id: 5,       // Goerli's id
      confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    }
 ```
 
 &emsp;&emsp; remova todas as linhas menos “provider” e “network_id”
 
   ```
goerli: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://goerli.infura.io/v3/${PROJECT_ID}`),
      network_id: 5,       // Goerli's id
    },
 ```

**Instação do dotenv (preparação para Deploy)**

&emsp;&emsp; É necessário instalar o “dotenv” para poder criar um arquivo que armazena as variáveis informadas no provider citado anteriormente. Escreva o seguinte comando em seu terminal:

   ```
npm install dotenv
 ```
 
&emsp;&emsp; Agora, crie o arquivo “.env” na raiz:

<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/2_deploy%20Sprint%203.png"/> 

&emsp;&emsp;Para atribuir variáveis no “.env” é necessário voltar ao arquivo “truffle-config.js”, descomente as três linhas seguintes:

   ```
require('dotenv').config();
const { MNEMONIC, PROJECT_ID } = process.env;

const HDWalletProvider = require('@truffle/hdwallet-provider');
 ```
 
&emsp;&emsp; Execute o seguinte código no terminalara criar a configuração de quem está efetuando o deploy:

   ```
npm install @truffle/hdwallet-provider
 ```

&emsp;&emsp;Crie o arquivo “.gitignore” na raíz e inclua o “.env” nele (tem a função de armazenar os arquivos que deseja que sejam ocultados quando o projeto for exposto no GitHub)

<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/3_deploy%20Sprint%203.png"/> 
<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/4_deploy%20Sprint%203.png"/> 

**Coletando a MNEMONIC da Metamask e a API KEY do Infura**

&emsp;&emsp;Com a conta criada no Metamask previamente, guarde ela na variável MNEMONIC no seu arquivo “.env”:

   ```
MNEMONIC = "sua mnemonic phrase"
```

&emsp;&emsp;Nessa etapa, é nessário ter uma private key de um node para efetuar o deploy. Entre no site da Infura para conseguir uma API KEY gratuitamente. Crie uma conta gratuita e obtenha uma API KEY para ser utilizada.

<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/infura1.jpg"/> 
<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/infura2.jpg"/> 
<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/infura3.jpg"/> 

&emsp;&emsp;Conseguindo a API KEY, insira no arquivo “.env” a variável “INFURA_API_KEY”.

   ```
MNEMONIC = "sua mnemonic phrase"

INFURA_API_KEY = "api key do infura"
```

&emsp;&emsp;Altere a mesma variável do arquivo “truffle-config.js”, troque a variável PROJECT_ID por INFURA_API_KEY:

   ```
require('dotenv').config();
const { MNEMONIC, INFURA_API_KEY } = process.env;

const HDWalletProvider = require('@truffle/hdwallet-provider');
```

&emsp;&emsp; Substitua “INFURA_API_KEY” no provider do arquivo “truffle-config.js” pela URL da Infura:

   ```
goerli: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://goerli.infura.io/v3/${INFURA_API_KEY}`),
      network_id: 5,       // Goerli's id
    },
```

**Deploy do contrato**

&emsp;&emsp; Agora sim, o deploy do contrato em si. Execute o seguinte comando no terminal:

   ```
truffle deploy --network goerli
```

&emsp;&emsp; Espera-se o retorno "No funds", pois sua carteira ainda não tem saldo.

&emsp;&emsp; Entre na Goerli Faucet, insira o endereço da sua carteira e envie “dinheiro” para ela.

<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/5_deploy%20Sprint%203.png"/> 

&emsp;&emsp; Para conferir se você realmente recebeu a quantia será nessário configurar o MetaMask (passo a passo logo abaixo).

**MetaMask**

- MetaMask é uma carteira de criptomoeda usada para interagir com o blockchain Ethereum. Ela permite que os usuários acessem sua carteira Ethereum por meio de uma extensão de navegador ou aplicativo móvel, que pode ser usado para interagir com aplicativos descentralizados.

- Reconhecemos que a utilização da carteira digital Metamask é essencial para garantir a segurança entre o usuário e a rede blockchain. Dessa forma, nossos usuários podem explorar nossa solução com segurança, maior autonomia, integração e facilidade, princípios fundamentais da extensão da carteira digital Metamask.

**Configurando o MetaMask**

- MetaMask é uma carteira de criptomoedas usada para interagir com o blockchain Ethereum. Ela permite que os usuários acessem sua carteira Ethereum por meio de uma extensão de navegador ou aplicativo móvel, que pode ser usado para interagir com aplicativos descentralizados.

- Reconhecemos que a utilização da carteira digital MetaMask é essencial para garantir a segurança entre o usuário e a rede blockchain. Dessa forma, nossos usuários podem explorar nossa solução com segurança, maior autonomia, integração e facilidade, princípios fundamentais da extensão da carteira digital Metamask.

&emsp;&emsp;O primeiro passo para realizar a integração entre a sua carteira Metamask com seu Smart Contract é localizar o Metamask na barra de extensões do seu navegador<br>
 <img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/passo1_metamask.png"/> <br>
 
&emsp;&emsp; Após localizar o Metamask no navegador, acesse-o <br>

<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/passo2_metamask.png"/> <br>
 
&emsp;&emsp; Abra a aba de 'Networks' e aperte em 'Show/hide' <br>

<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/passo3_metamask.png"/> <br>
 
&emsp;&emsp; Ative o 'Show test network' (OFF -> ON) <br>

<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/passo4_metamask.png"/>
<br>

&emsp;&emsp; Volte ao Menu do MetaMask, clique em 'Networks' e selecione 'Goerli test networks'<br>

<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/passo5_metamask.png"/> <br>

&emsp;&emsp; Pronto! A configuração do Metamask está completa!<br>

<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/passo6_metamask.png"/> <br>
 
- A instalação primária do MetaMask não é difícil, se comportando como mais uma extensão do navegador web. Porém, a configuração já demanda mais atenção: o MetaMask possui várias funções e opções, sendo esteticamente semelhantes, o que pode confundir o usuário nesse momento, podendo ser necessário refazer o passo a passo da configuração. Além disso, o principal problema que o time teve foi na rede do MetaMask em si: durante o deploy tentamos adicionar o Goerli Faucet à nossa carteira para concluir a atividade, no entanto, o site estava instável, dificultando a conclusão. O problema persistiu e, como resultado, optamos por fazer o deploy usando a rede local do Ganache. No dia seguinte, o website estava mais estável, o que me permitiu adicionarmos criptomoedas à nossa carteira e finalmente fazer o deploy na rede de testes Goerli. 

**Deploy do contrato (final)**

&emsp;&emsp;Após configurar o MetaMask, basta inserir o seguinte comando no terminal para finalizar o deploy:

   ```
truffle deploy --network goerli
```