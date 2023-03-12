# 📁 DOCUMENTAÇÃO DO SMART CONTRACT

&emsp;&emsp; Uma documentação do smart contract é uma descrição detalhada do funcionamento e uso de um contrato inteligente (smart contract).<br>
Ela pode irá incluir algumas informações como<br>
&emsp;***|--> Uma visão geral do contrato inteligente, incluindo seu propósito e objetivos;*** <br>
&emsp;***|--> A estrutura do contrato inteligente, incluindo suas funções, variáveis e eventos;***<br>
&emsp;***|--> Requisitos de Negócio implementado;***<br>
&emsp;***|--> Descrição da Arquitetura da Solução em Diagrama de Blocos;***<br>
&emsp;***|--> Descrição do Diagrama de Implantação UML;***<br>
&emsp;***|--> Comportamento do Smart Contract em diagrama de sequência UML;***<br>
&emsp;***|--> Ambiente de desenvolvimento;***<br>


## 🎯 O objetivo:
&emsp;&emsp;|-->O smart contract possui como objetivo geral armazenar e garantir que os parâmetros para o funcionamento do contrato sejam atendidos, armazenando informações úteis sobre os membros do contrato, garantindo que as transações sejam feitas de forma segura e previsível. Garantindo que o que foi acordado vai ser executado de forma segura e imutável.<br>

## Estrutura do Smart Contract com explicação textual
&emsp;&emsp;|-->O arquivo smartContract.sol possui as seguintes funcionalidades e características, que podem ser observadas abaixo.
Abaixo é possível visualizar as variáveis responsáveis para o funcionamento do contrato:
<br>

### 1.1 - Variáveis do contrato:
&emsp;As variáveis globais ou variáveis de estado são declarações de variáveis que ficam no nível do contrato e podem ser acessadas por todas as funções do contrato. Elas são usadas para armazenar informações importantes para o funcionamento do contrato. No código fornecido, existem várias variáveis globais, como 
- **quantUsuario**: variável do tipo uint, ela é responsável por armazenar a quantidade de usuários dentro do contrato.

- **minPessoas** e **maxPessoas**: variável do tipo uint, são responsável por armazenar a quantidade mínima e máxima de usuários permitidos por contrato.

- **taxaAdmin**: variável tipo uint que armazena a taxa de administração do contrato.

- **carteiraCentral**: variável do tipo address, que é responsável por armazenar informações sobre a carteira da Coover.

- **fundosAdm**: variável tipo uint que armazena o total de fundos coletados como taxa de administração.

- **carteira**: armazena a lista de carteiras de usuários, que são definidas usando a struct Carteira.

- **admin**: variável do tipo address, onde armazena o endereço do proprietário do contrato, que é o administrador.

### 1.2 - Structs do contrato:

&emsp;&emsp;|-->O “struct `Carteira`" é uma estrutura de dados que é usada para armazenar informações sobre a carteira de um usuário. No código fornecido, a struct Carteira armazena o endereço da carteira do usuário, o valor do aparelho celular, o saldo da carteira do usuário e o número de IMEI do aparelho celular.<br>

&emsp;Abaixo há a estrutura dentro do `struct Carteira` definida no nosso smart contract.

- **carteiraUsuario**: é um elemento do tipo "address" e armazena o endereço da carteira do usuário.
- **valorAparelho**: é um elemento do tipo "uint" e armazena o valor do aparelho celular do usuário.
- **saldo**: é um elemento do tipo "uint" e armazena o saldo da carteira do usuário.
-**IMEI**:  é um elemento do tipo "uint" e armazena o número de IMEI do aparelho celular do usuário.

&emsp;Esses elementos são usados para armazenar informações relevantes sobre a carteira do usuário dentro do smart contract.<br>

### 1.3 - constructor:
&emsp;O constructor é uma função especial que é executada apenas uma vez, quando o contrato é criado. É usado para inicializar as variáveis globais do contrato com valores iniciais. No código fornecido, o constructor recebe três parâmetros: _minPessoas, _maxPessoas e _taxaAdmin.<br>

&emsp;Dentro do constructor, são executadas as seguintes ações:

- **quantUsuario = 0;**: inicializa a variável global quantUsuario com o valor zero.
- **admin = msg.sender;**: define o endereço que criou o contrato como o proprietário/administrador do contrato.
- **minPessoas = _minPessoas;**: define o valor do parâmetro _minPessoas como o valor inicial da variável global minPessoas.
- **maxPessoas = _maxPessoas;**: define o valor do parâmetro _maxPessoas como o valor inicial da variável global maxPessoas.
- **taxaAdmin = _taxaAdmin;**: define o valor do parâmetro _taxaAdmin como o valor inicial da variável global taxaAdmin.
- **carteiraCentral = payable(msg.sender);**: define o endereço que criou o contrato como a carteira central, que é a carteira que receberá a taxa de administração do contrato. O payable indica que a carteira pode receber pagamentos.
- **fundosAdm = 0;**: inicializa a variável global fundosAdm com o valor zero.

### 1.4 - Modifiers:
&emsp;&emsp;O nosso smart contract define um modificador chamado `apenasAdmin`. Esse modificador é utilizado para limitar o acesso a uma função somente ao proprietário do contrato (administrador).<br>

&emsp;&emsp;O modificador é uma função especial que modifica o comportamento de outra função. No caso desse modificador, ele é adicionado antes de uma função que deve ser executada somente pelo administrador. Se a pessoa que chama a função não for o administrador, a execução da função será interrompida e a mensagem de erro "Somente o proprietario do contrato pode executar esta funcao." será exibida.<br>

&emsp;&emsp;O modificador "apenasAdmin" ajuda a garantir que somente o proprietário do contrato possa executar funções críticas e sensíveis que poderiam afetar o estado do contrato ou os fundos mantidos dentro dele.<br>

- **apenasAdmin()**: modificador responsável por garantir que apenas o proprietário do contrato irá poder executar uma função.

### 1.4 - Funções do contrato:
&emsp;&emsp;Uma função no smart contract é um trecho de código que realiza uma tarefa específica dentro do contrato. As funções podem ser chamadas por outras funções dentro do contrato ou por usuários externos ao contrato, através de transações na blockchain.<br>

&emsp;&emsp;Uma função pode receber parâmetros de entrada, executar um conjunto de instruções e retornar um valor ou uma transação. As funções podem modificar o estado do contrato, que é a informação armazenada na blockchain, ou apenas consultar o estado atual do contrato, sem modificá-lo.<br>

&emsp;&emsp;As funções são essenciais para a interação dos usuários com o contrato e para a execução das regras de negócio definidas pelo contrato.<br>
&emsp;Abaixo há a lista de todas as funções utilizadas no smart contract:<br>

- **adicionarUsuario**: Essa função adiciona um novo usuário ao projeto, verifica se a quantidade máxima de usuários já foi atingida, adiciona o usuário à lista de carteiras com seu saldo e valor do aparelho celular e incrementa a quantidade de usuários.

- **adicionarDinheiro**: Essa função é utilizada para uma carteira adicionar dinheiro no smart contract, ela também armazena a taxa do adminstrador, armazena o valor do depósito, armazena o valor que o usuário deve receber, uma vez calculada a taxa administrativa. Essa função também passa pelas carteiras de membros do contrato, verifica se a carteira do usuário corresponde ao endereço de quem chamou a função, adiciona os fundos a carteira do usuário, tirando a taxa adiministrativa e a transferindo para a Coover.

- **verSaldo**: Essa função é utilizada para ver o saldo da carteira que está chamando a função, onde verifica se a carteira do usuário corresponde ao endereço fornecido e retorna o saldo do usuário.

- **contratoSaldo**: Essa função é utilizada para ver quanto de dinheiro tem dentro do contrato e retorna quanto de fundo o contrato possui.

- **visualizarCarteiras**: Essa função que permite visualizar carteiras participantes do contrato e retorna as carteiras.

- **verSaldoAdmin**: Essa função é utilizada para ver o saldo do administrador do contrato e retorna o saldo do administrador.
 
- **retirarTaxas**: Essa função é utilizada para o administrador conseguir retirar as taxas do contrato (retirar o valor que o administrador ganha, o qual já estará destinado a ele), ela também confere se o contrato tem dinheiro suficiente e transfere o valor já "separado" das taxas cobradas para o adiministrador, quando chama esta função.

- **indenizar**: Essa função é utlizada para transferir a indenização a um usuário, conferindo se o contrato tem dinheiro suficiente. Elas também retira primeiro todo o saldo de quem pediu a indenização e transfere o valor da indenização para o usuário.

## Requisitos de Negócio implementado
&emsp;&emsp; |--> Nessa seção iremos abordar cada requisito de negócio implementado, explicando brevemente o que foi desenvolvido e fornecendo orientações sobre como o código deve ser utilizado.<br>
&emsp;&emsp; |--> Para a User Story 4, o requisito de negócio implementado é referente à permissão para executar funções exclusivas do administrador do contrato. Foi desenvolvido um modifier chamado "apenasAdmin()" que garante que apenas o dono do contrato tenha acesso às funcionalidades direcionadas ao administrador. Para utilizar esse código, é necessário utilizar esse modifier nas funções que devem ser restritas apenas ao administrador.<br>

&emsp;&emsp; |--> Para relembrar a **User Story 4: Como gerente de seguro, quero ter permissão para executar funções que apenas o administrador pode executar.**<br>
Nessa user story, o requisito de negócio implementado foi garantir que apenas o dono do contrato (ou seja, o administrador) tenha permissão para executar determinadas funcionalidades. Isso é importante para garantir a segurança do contrato.
<br>O código que implementa esse requisito é o seguinte modifier:

```
modifier aspenasAdmin() {
require(msg.sender == admin, "Apenas o dono do contrato pode executar essa função");
_;
}
```
<br>

![Modifier](https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/Modifier%20apenasAdmin%20-%20Sprint3.png)
<br>

&emsp;&emsp; |--> Para a User Story 5, o requisito de negócio implementado é referente à cobrança de um percentual da Coover em uma carteira geral. Foi desenvolvido um struct chamado "carteiraCentral" que define essa carteira central para receber fundos do contrato. Para utilizar esse código, é necessário instanciar esse struct e transferir os fundos da carteira geral para a carteira da Coover.<br>
&emsp;&emsp; |--> Para relembrar a **User Story 5: Como gerente de seguro, quero cobrar de uma carteira geral o percentual da Coover referente aos seus serviços prestados, para conseguir ter caixa na empresa** <br>
&emsp;&emsp; |--> Nessa user story, o requisito de negócio implementado foi a criação de uma carteira central para receber fundos do contrato, permitindo que o gerente de seguro possa cobrar o percentual referente aos serviços prestados pela Coover. Isso garante que a empresa tenha caixa para continuar operando. <br>
O código que implementa esse requisito é o seguinte struct:
```
struct carteiraCentral {
uint256 fundos; // quantidade de ether na carteira
} 
```
<br>

![Struct da carteira](https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/Struct%20Carteira%20-%20Sprint3.png)
<br>

&emsp;&emsp; |--> Para a User Story 6, o requisito de negócio implementado é referente à visualização dos membros do contrato de forma segura. Foi desenvolvida a função "visualizarCarteiras()" que retorna todos os membros daquele contrato. Para utilizar esse código, é necessário chamar a função e passar como argumento o endereço do contrato.<br>
&emsp;&emsp; |--> Para relembrar a **User Story 6: Como usuário, quero poder visualizar as pessoas dentro do meu contrato de forma segura, para poder ver a quantidade de usuários dentro do mesmo contrato que o meu.**<br>
&emsp;&emsp; |--> Nessa user story, o requisito de negócio implementado foi permitir que os usuários possam visualizar todas as pessoas dentro do mesmo contrato de forma segura. Isso é importante para que eles possam ver a quantidade de usuários dentro do contrato e se sentirem seguros em relação aos seus investimentos.<br>

O código que implementa esse requisito é a seguinte função:
```
function visualizarCarteiras() public view returns (address[] memory) {
return carteiras;
} 
```

![função visualizar Carteira](https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/fun%C3%A7%C3%A3o%20visualizarCarteiras%20-%20Sprint2.png)

&emsp;&emsp; |--> Para a User Story 8, o requisito de negócio implementado é referente à validade do contrato e ao número de membros necessários para o funcionamento do mesmo. Foi desenvolvida a função "viabilidadeContrato()" que confere se o contrato está na validade e possui o número definido de membros. Para utilizar esse código, é necessário chamar a função e passar como argumento o endereço do contrato.<br>
&emsp;&emsp; |--> Para relembrar a **User Story 8: Como gerente de seguros, quero que o smart contract só entre em pleno vigor, caso as condições de funcionamento sejam atendidas. Para que tudo funcione conforme o acordado.** <br>
&emsp;&emsp; |--> Nessa user story, o requisito de negócio implementado foi garantir que o contrato só entre em pleno vigor caso as condições de funcionamento sejam atendidas. Isso é importante para garantir que tudo funcione conforme o acordado entre as partes.<br>
O código que implementa esse requisito é a seguinte função:
```
function viabilidadeContrato() public view returns (bool) {
return (carteiras.length == numMembros && block.timestamp < validadeContrato);
}
```

![função viabilidade Contrato](https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/fun%C3%A7%C3%A3o%20viabilidadeContrato%20-%20Sprint3.png)

&emsp;&emsp; |--> Para a User Story 10, o requisito de negócio implementado é referente à transferência de fundos para a carteira de quem deve ser assegurado após a aprovação de uma solicitação de indenização. Foi desenvolvida a função `indenizar` que transfere dinheiro do fundo do smart contract para a carteira que for indicada. Para utilizar esse código, é necessário chamar a função e passar como argumento o endereço da carteira que deve receber os fundos e o valor a ser transferido.<br>

&emsp;&emsp; |--> Para relembrar a **User Story 10: Como gerente de seguros, quero que após uma solicitação de indenização ser aprovada, quero poder transferir os dinheiros do fundo do smart contract para a carteira de quem deve ser assegurado. Para garantir que os usuários recebam o dinheiro.**<br>
&emsp;&emsp; |--> O requisito foi cumprido devido à função `indenizar()`, que transfere dinheiro do fundo do smart contract para a carteira que for indicada, possibilitando transferir os fundos referentes à indenização.<br>
&emsp;&emsp; |--> Para implementar essa funcionalidade, foram realizados os seguintes passos:<br>
&emsp;&emsp; 1.	Criou-se a função `indenizar()` que recebe como parâmetros o endereço carteira que receberá a transferência, o valor a ser transferido e o IMEI.<br>

```
function indenizar(address _indenizado,uint256 valorIndenizacao, uint _IMEI) public apenasAdmin{
        
        //confere se o contrato tem dinheiro suficiente
        require(address(this).balance >= valorIndenizacao, "Saldo insuficiente no contrato");
        
        //valor indenizado
        uint valorID = valorIndenizacao;
        
        //confere retira primeiro tudo o saldo de quem pediu a indenização
        for (uint i = 0; i < carteira.length; i++){
            if (carteira[i].carteiraUsuario == _indenizado && carteira[i].IMEI == _IMEI){
                if(carteira[i].saldo >= valorID){
                    carteira[i].saldo -= valorID;
                }
                if(carteira[i].saldo <= valorID){
                    valorID -= carteira[i].saldo;
                    carteira[i].saldo = 0;
                }
            }
        }
```
        
![função de indenizar - parte 1](https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/fun%C3%A7%C3%A3o%20indenizar%20-%20parte1%20-%20Sprint3.png)

&emsp;&emsp; 2.	Na função solicitarIndenizacao(), após a validação de que a indenização foi aprovada, chamou-se a função transferirValor() para realizar a transferência do valor para a carteira do usuário.<br>

```
        //calcula quantos % do valor total dos aparelhos assegurados, a retirada representa
        uint valorTotalAssegurado = 0;
        
        // passa pelas carteiras do contrato e soma o valor total dos aparelhos assegurados
        for (uint i = 0; i < carteira.length; i++){
            valorTotalAssegurado += carteira[i].valorAparelho;
            if (carteira[i].carteiraUsuario == _indenizado){
                valorTotalAssegurado -= carteira[i].valorAparelho;
            }
        }
        
        //calcula quanto deve ser retirado do saldo de cada usuario em %, do saldo de cada participante.
        uint valorDecrecido = valorID / valorTotalAssegurado;
        
        //trafere o dinheiro para quem vai ser indenizado e diminui o valor relativo ao aparelho de cada usuário
        for (uint i = 0; i < carteira.length; i++){
            if (carteira[i].carteiraUsuario == _indenizado) {
                payable(_indenizado).transfer(valorIndenizacao);
                for (uint i = 0; i < carteira.length; i++){
                    if (carteira[i].carteiraUsuario != _indenizado){
                        carteira[i].saldo = carteira[i].saldo - (carteira[i].valorAparelho * valorDecrecido);
                    }
                }
            }
        }
    }
```
Com esses passos, a funcionalidade foi implementada com sucesso e o requisito de negócio foi cumprido.

![função indenizar - parte 2](https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/fun%C3%A7%C3%A3o%20indenizar%20-%20parte2%20-%20Sprint3.png)

## Smart Contract em diagrama de Sequência UML

&emsp;&emsp;Um diagrama de sequência UML é um tipo de diagrama de interação que mostra a interação entre os objetos e/ou participantes em um sistema ao longo do tempo. Ele ilustra a ordem das mensagens trocadas entre os objetos e como eles colaboram para alcançar um objetivo comum. <br>
&emsp;&emsp;Os diagramas de sequência UML são úteis para entender o fluxo de informações em um sistema, permitindo que os desenvolvedores e analistas de sistemas entendam a lógica do sistema e detectem possíveis problemas de design ou implementação. Eles também podem ser usados para documentar e comunicar o comportamento do sistema para outras partes interessadas. <br>
&emsp;&emsp;Abaixo há um diagrama de sequência UML que representa o fluxo de interações entre os participantes do processo de aprovação de membros em um grupo de seguro, incluindo a carteira do usuário, o usuário, a plataforma web (usuário), o administrador do seguro (AdminCoover), a plataforma web (administrador) e o contrato inteligente (Smart Contract). As setas representam as mensagens trocadas entre os participantes, indicando o fluxo de controle. Cada caixa vertical representa um participante, com suas ações e respostas organizadas em uma linha horizontal. <br>

![diagrama de Sequência UML](https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/diagrama%20de%20Sequ%C3%AAncia%20UML%20-%20Sprint3.png)<br>

## Descrição do Diagrama de Implantação UML
&emsp;&emsp; Um diagrama de implementação UML é um diagrama que descreve a arquitetura física de um sistema de software, incluindo o que cada parte armazena e sua utilidade para o sistema em geral. Ele representa os componentes do sistema, como servidores, computadores, e como eles se relacionam entre si para criar uma solução completa.<br>

&emsp;&emsp; O diagrama de implementação UML desenvolvido tem como objetivo ajudar a equipe a visualizar a infraestrutura e conexões necessárias para o funcionamento do sistema e a identificar possíveis problemas de implantação.  <br>

&emsp;&emsp; Com esse diagrama é possível observar tanto o que ocorre em todos os dispositivos que participam do processo de funcionamento da solução. Desde dos que entram em contato com clientes, como o computador do usuário de do administrador. Até o servidor que hospeda o frontend,backend e banco de dados, e a testnet que irá comunicar com a carteira dos utilizadores da solução e com backend do sistema. Abaixo é possível visualizar o diagrama de implementação UML:  <br>

![Diagrama de Implantação UML](https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Templates/diagrama_implanta%C3%A7%C3%A3o_uml.drawio.png)

## Arquitetura da Solução Diagramada

&emsp;&emsp;Abaixo, é possível visualizar a diagramação em blocos da solução a qual estamos desenvolvendo. <br><br>
![diagrama em blocos](https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/diagrama%20em%20blocos%20da%20solu%C3%A7%C3%A3o%20-%20Sprint3.jpg)<br>

&emsp;&emsp;A diagramação em blocos é uma técnica de organização visual de informações em que o conteúdo é dividido em blocos, cada um com uma função específica e sendo possível fazer linhas que representem as conexões ou interações entre as funções. A diagramação em blocos será usada como forma de criar uma hierarquia visual clara, com os elementos mais importantes e relevantes em destaque, refletindo em um melhor entendimento.<br>

&emsp;&emsp;Para melhor compreensão da construção de cada componente do diagrama, esta é uma lista dos principais componentes e uma breve descrição de suas interações:<br>

**Cliente/Usuário**<br>
<ul><li>Os clientes são os proprietários dos aparelhos e os que desejam contratar um seguro. Nesse sentido, além de fornecerem as informações referentes ao seus próprios aparelhos (para contratação do seguro), irão se conectar à plataforma para navegarem nas diversas oportunidades. <br>
<li><em>Obs</em>: Também precisarão se conectar com uma carteira a partir da MetaMask.<br>
</ul>

**Coover (Administradores)**<br>
<ul><li>A Coover se encontra no papel de Seguradora, assim, ela busca entrar em seu sistema (Web) para controle e análise dos processos que ocorrem em sua plataforma, buscando ajudar e acatar ideias dos seus clientes.<br></ul>

**Metamask** <br>
<ul><li>MetaMask é uma carteira digital para armazenamento de criptomoedas que permite ao usuário interagir com aplicativos descentralizados baseados em Ethereum. Dessa forma, ela engloba diversas funcionalidades em uma única extensão – todas atreladas a aplicativos descentralizados (dApps). No caso da Coover, a Metamask é utilizada para realizar transacionar de forma mais simples e segura.<br></ul>

**Plataforma Web/App (Usuário)**<br>
<ul><li>Plataforma a qual o usuário irá utilizar, como forma de adquirir seu plano de seguro mútuo e gerenciá-lo. Viabiliza a conexão com a MetaMask, já que precisa conectar uma Wallet para contratar um seguro. Também fornece conexão com o sistema da seguradora, para fins de análise de pedidos diversos, processo de indenização e transação.<br></ul>

**Sistema da Seguradora (Coover)**<br>
<ul><li>O sistema da Seguradora é a fonte que faz a interligação entre a interface do usuário e os Smart Contracts em Blockchain. Podem receber requisições dos clientes, referentes à transações ou até mesmo modificar certos processos. Dessa forma, os administradores do sistema contam com toda a capacidade de gerenciar os seguros.<br></ul>

 **Smart Contracts**<br>
<ul><li>Sistema onde os termos e os conteúdos são estruturados, englobando todas as regras de negócio do seguro mútuo. São executados na rede blockchain e possuem todas as cláusulas que são acordadas entre os integrantes e a seguradora, de acordo com a regra de negócio. Não só isso, mas automatizam as transações relacionadas à indenizações, ao momento que são aprovadas pela Coover.<br></ul>
 
 **Deploy**<br>
 <ul><li>Deploy é o processo de implantação de um smart contract na blockchain, tornando-o disponível para ser usado e executado pelos usuários da rede. A principal diferença entre o deploy na rede Goerli e na rede Ganache é que a primeira é uma rede de testes pública que permite aos desenvolvedores testar seus contratos em um ambiente semelhante ao da rede principal da Ethereum, enquanto a segunda é uma rede de testes privada que permite aos desenvolvedores testar contratos em um ambiente controlado localmente.<br></ul>
 
  **API do Nó da Rede**<br>
 <ul><li>A Infura é uma plataforma de infraestrutura em nuvem que fornece acesso a APIs de nós de blockchain, incluindo Ethereum, IPFS e outros. A API Infura permite que desenvolvedores e usuários finais se conectem a esses nós sem a necessidade de executar seus próprios Nós. Isso simplifica e acelera o desenvolvimento de aplicativos descentralizados e serviços relacionados à blockchain.<br></ul>
 
**Rede Blockchain**<br>
<ul><li>Rede responsável por guardar os Smart contracts, além de garantir segurança e imutabilidade dos registros, de forma que as transações não necessitem de um intermediário.<br></ul>

**TestNet** <br>
<ul><li>Rede de testes na Blockchain, usada com objetivo de prevenir erros e riscos de gastos desnecessários, além de ser visto como local para testes e validações, antes de ser aplicado na Mainnet (Rede principal).<br></ul>

## Documentação do Deploy e Testes de Smart Contracts

 &emsp;&emsp; O Solidity é a peça central da nossa solução em SmartContract. No entanto, outras tecnologias também são necessárias, por isso, será explicado detalhadamente como instalar e configurar o MetaMask e o Truffle para que eles possam funcionar perfeitamente em conjunto com o Solidity, garantindo o sucesso do SmartContract.
  
<br>
  
**Truffle** <br><ul><li> Truffle é uma ferramenta de desenvolvimento que utiliza a Ethereum Virtual Machine (EVM) para simplificar os processos de desenvolvimento em áreas de blockchain e dApps. Com o objetivo de fornecer diversas implementações, compilações, testes e gerenciamento, a ferramenta visa atender às diferentes necessidades dos desenvolvedores e criar um ambiente mais facilitador e eficiente.<br>
<li><em></em> Com o objetivo de facilitar e melhorar nossos processos, estamos utilizando o framework de ferramentas Truffle para criar interações de front-end com os smart contracts, compilar e implantar automaticamente os contratos inteligentes em diferentes redes, e desenvolver testes automatizados. Devido a sua eficiência, concluímos que a Truffle é a melhor opção para atender aos nossos objetivos nesse momento no projeto.</ul><br>
 
**Configurando o Truffle**
 <br>
 
  &emsp;&emsp;Atenção: Antes de partirmos para o Truffle, é necessário ter um um projeto no VS Code com NodeJS e Git instalados! <br><br>

  &emsp;&emsp;Primeiro, no terminal, escreva o seguinte comando para instalar a biblioteca do Truffle globalmente: <br><br>
           
 ```
 npm install -g truffle
 ```
 
 &emsp;&emsp;Depois, digite o comando a seguir para conferir se a biblioteca foi instalada e sua versão: <br><br>
 
 ```
 truffle --version
 ```

  &emsp;&emsp; O seguinte código deve aparecer no seu terminal, ele mostra que a biblioteca Truffle foi instalada com sucesso no contrato, e identifica a versão sendo utilizada:
  <img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/truffle_instalacao.jpeg"/> <br>
 
 <li>Inserir aqui o diário de bordo sobre o Truffle (dificuldades e experiências pessoais na hora de instalar e configurar. Adcione na documentação também! (Anexos))
 
 
 <br>
 
**MetaMask** <br>
<ul><li>MetaMask é uma carteira de criptomoeda usada para interagir com o blockchain Ethereum. Ela permite que os usuários acessem sua carteira Ethereum por meio de uma extensão de navegador ou aplicativo móvel, que pode ser usado para interagir com aplicativos descentralizados.<br>
<li> Reconhecemos que a utilização da carteira digital Metamask é essencial para garantir a segurança entre o usuário e a rede blockchain. Dessa forma, nossos usuários podem explorar nossa solução com segurança, maior autonomia, integração e facilidade, princípios fundamentais da extensão da carteira digital Metamask.</ul><br>
 
**Configurando o MetaMask**
 <br>

  &emsp;&emsp;O primeiro passo para realizar a integração entre a sua carteira Metamask com seu Smart Contract é localizar o Metamask na barra de extensões do seu navegador <br><br>
 <img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/passo1_metamask.png"/> <br>
 
  &emsp;&emsp; Após localizar o Metamask no navegador, acesse-o <br><br>
 <img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/passo2_metamask.png"/> <br>
 
  &emsp;&emsp; Abra a aba de 'Networks' e aperte em 'Show/hide' <br><br>
 <img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/passo3_metamask.png"/> <br>
 
  &emsp;&emsp; Ative o 'Show test network' (OFF -> ON) <br><br>
 <img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/passo4_metamask.png"/> <br>
 

  &emsp;&emsp; Volte ao Menu do MetaMask, clique em 'Networks' e selecione 'Goerli test networks' <br><br>
 <img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/passo5_metamask.png"/> <br>
 
 
  &emsp;&emsp; Pronto! A configuração do Metamask está completa!<br><br>
 <img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/passo6_metamask.png"/> <br>
 
 <li>Inserir aqui o diário de bordo sobre o MetaMask (dificuldades e experiências pessoais na hora de instalar e configurar. Adcione na documentação também! (Anexos))
 
  
## Histórico de Lançamento

<ul><li>24/02/2023 - Criação do Readme.md da documentação do Smart Contract</li></ul>
<ul><li>26/02/2023 - Criação da pasta código - imagens</li></ul>
<ul><li>26/02/2023 - Atualização do Readme.md da documentação do Smart Contract</li></ul>
<ul><li>07/03/2023 - Atualização na estrutura da documentação do Deploy e Teste do Smart Contract</li>
<ul><li>12/03/2023 - Atualização da Estrutura do Smart Contract com explicação textual</li>
</ul>
