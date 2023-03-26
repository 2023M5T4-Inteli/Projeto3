# 📁 DOCUMENTAÇÃO DO SMART CONTRACT

&emsp;&emsp; Uma documentação do smart contract é uma descrição detalhada do funcionamento e uso de um contrato inteligente (smart contract).<br>
Ela pode irá incluir algumas informações como<br>
&emsp;***|--> Uma visão geral do contrato inteligente, incluindo seu propósito e objetivos;*** <br>
&emsp;***|--> A estrutura do contrato inteligente, incluindo suas funções, variáveis e eventos;***<br>
&emsp;***|--> Requisitos de Negócio implementado;***<br>
&emsp;***|--> Descrição do Diagrama de Implantação UML;***<br>
&emsp;***|--> Descrição da Arquitetura da Solução em Diagrama de Blocos;***<br>
&emsp;***|--> Documentação do Deploy e Testes de Smart Contracts;***<br>

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
- **IMEI**:  é um elemento do tipo "uint" e armazena o número de IMEI do aparelho celular do usuário.

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
modifier apenasAdmin() {
        require(msg.sender == admin, "Somente o proprietario do contrato pode executar esta funcao.");
        _;
    }
```
<br>

![Modifier](https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/Modifier%20apenasAdmin%20-%20Sprint3.png)
<br>

&emsp;&emsp; |--> Para a User Story 5, o requisito de negócio implementado é referente à cobrança de um percentual da Coover em uma carteira geral. Foi desenvolvido um struct chamado "carteiraCentral" que define essa carteira central para receber fundos do contrato. Para utilizar esse código, é necessário instanciar esse struct e transferir os fundos da carteira geral para a carteira da Coover.<br>
&emsp;&emsp; |--> Para relembrar a **User Story 5: Como gerente de seguro, quero cobrar de uma carteira geral o percentual da Coover referente aos seus serviços prestados, para conseguir ter caixa na empresa** <br>
&emsp;&emsp; |--> Nessa user story, o requisito de negócio implementado foi a criação de uma carteira central para receber fundos do contrato, permitindo que o gerente de seguro possa cobrar o percentual referente aos serviços prestados pela Coover. Isso garante que a empresa tenha caixa para continuar operando.<br>

O código que implementa esse requisito é o seguinte struct:
```
    struct Carteira {
        address carteiraUsuario;
        uint valorAparelho;
        uint saldo;
        uint IMEI;
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
    function visualizarCarteiras() public view returns (Carteira[] memory) {
        return carteira;
    } 
```

![função visualizar Carteira](https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/fun%C3%A7%C3%A3o%20visualizarCarteiras%20-%20Sprint2.png)

&emsp;&emsp; |--> Para a User Story 8, o requisito de negócio implementado é referente à validade do contrato e ao número de membros necessários para o funcionamento do mesmo. Foi desenvolvida a função "viabilidadeContrato()" que confere se o contrato está na validade e possui o número definido de membros. Para utilizar esse código, é necessário chamar a função e passar como argumento o endereço do contrato.<br>
&emsp;&emsp; |--> Para relembrar a **User Story 8: Como gerente de seguros, quero que o smart contract só entre em pleno vigor, caso as condições de funcionamento sejam atendidas. Para que tudo funcione conforme o acordado.** <br>
&emsp;&emsp; |--> Nessa user story, o requisito de negócio implementado foi garantir que o contrato só entre em pleno vigor caso as condições de funcionamento sejam atendidas. Isso é importante para garantir que tudo funcione conforme o acordado entre as partes.<br>
O código que implementa esse requisito é a seguinte função:
```
    function viabilidadeContrato() public view returns (uint) {
        
        //Verifica se o contrato está válido mas não possui o número ideal de pessoas para funcionar
        if (quantUsuario >= minPessoas  && quantUsuario <= maxPessoas) {
            return 1; // Contrato Ativo
            
        //Verifica se o contrato está válido mas não possui o número de pessoas ideal para funcionar
        } else if (quantUsuario < minPessoas || quantUsuario >= maxPessoas) {
            return 2; // Contrato em Progresso        
        } else {
            revert("Erro ao verificar o contrato");
        }
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

## Relação entre o Diagrama de Implantação UML e o Diagrama de Sequência UML 

&emsp;&emsp; O diagrama de implantação UML permite que o processo descrito no diagrama de sequência UML seja implementado, uma vez que, ao representar os diferentes hardwares que fazem parte do sistema, é possível associá-los aos membros participantes do diagrama de sequência.  <br>
&emsp;&emsp; Em primeiro lugar, vale mencionar o computador do usuário, que abriga tanto o frontend, representado pela plataforma web do usuário no diagrama de sequência, que possibilita que ele entre em contato com o servidor, quanto a carteira do usuário, também representada no diagrama de sequência, a qual fará o depósito diretamente para o smart contract localizado no bloco de hardware TesteNet no diagrama de implantação. <br>

&emsp;&emsp; Em paralelo a isso, temos o computador do gestor, que é um elemento importante para o processo de adição de membros mencionado no diagrama de sequência. O frontend do gestor possibilita a aprovação da solicitação de um novo membro no contrato, além de receber o feedback do aporte. Sendo assim, seu computador é uma parte essencial do processo apresentado no diagrama de sequência. <br>

&emsp;&emsp; Também é importante mencionar o servidor e a rede TestNet, que são blocos de hardware apresentados no diagrama de implantação. Começando pelo servidor, embora não esteja diretamente relacionado com o diagrama de sequência, ele fornece as plataformas web tanto do gestor quanto do usuário, mencionadas anteriormente. Além disso, o servidor é responsável, por meio do backend nele contido, por realizar o processo de comunicação entre os comandos do frontend e o smart contract, podendo chamar as funções mencionadas no diagrama de sequência, como adicionarUsuários() e visualizarCarteiras(). Por fim, o bloco da Test-net, formado por vários computadores participantes da rede, é responsável por manter o smart contract, que, no diagrama de sequência, é responsável por executar as funções mencionadas anteriormente e receber os fundos enviados pela carteira do usuário. <br>

&emsp;&emsp; Portanto, podemos concluir que os diagramas de sequência e implantação estão intimamente ligados. Os hardwares retratados no diagrama de implantação são peças essenciais para entender a lógica dos participantes retratados no diagrama de sequência e como a comunicação entre eles ocorreria em uma situação real, considerando todos os hardwares que participariam para o funcionamento real da solução. Isso possibilita ter uma noção mais clara de como o diagrama de sequência funcionaria em uma situação real. <br>

## Arquitetura da Solução em Diagrama de Blocos

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

## Principais Arquivos de Código Utilizados:

&emsp;&emsp; Na construção do Front-end da aplicação, foram utilizadas as seguintes linguagens: HTML - linguagem de marcação, CSS - linguagem de estilo, JavaScript - linguagem de programação e React - biblioteca JavaScript front-end gratuita e de código aberto. <br>

&emsp;&emsp; O React é usado para a criação de interfaces de usuário interativas e aplicativos da web de maneira rápida e eficiente com muito menos código do que faria com o JavaScript básico. Com o React, é possível criar componentes reutilizáveis que podem ser utilizados em diferentes partes da aplicação. Isso reduz o tempo de desenvolvimento e facilita a manutenção do código, o que torna mais fácil o processo de criação de interface e suas funcionalidades. <br>

**Estrutura de Pastas no VsCode:**

&emsp;&emsp; A parte principal da estrutura de pastas utilizada para o desenvolvimento das telas da aplicação é a seguinte: <br>

|-->**src** <br>
&emsp;&emsp;|-->**Assets** <br>
&emsp;&emsp;|-->**componentes** <br>
&emsp;&emsp;|-->**routers** <br>

**src** 
 |
 - > **Assets**: trata-se de uma pasta que armazena as imagens e ícones utilizados na aplicação front-end. Essa pasta é usada em projetos de desenvolvimento de front-end para armazenar recursos como imagens, ícones, arquivos de fonte e outros arquivos que não são código-fonte, mas que são usados na aplicação. <br>
 
 <img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/Pasta_assets.png"/> <br>
 
 - > **componentes**: nessa pasta, são armazenados os arquivos de código-fonte para componentes reutilizáveis que podem ser utilizados em diferentes partes do projeto. <br>
 
<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/Pasta_componentes.png"/> <br>
 
- > **routers**: é uma pasta em que todos os caminhos e rotas das páginas são colocadas, ou seja, é onde é feita a configuração e a junção de todas as rotas do projeto. Em outras palavras, esses arquivos determinam qual função ou método deve ser chamado quando uma determinada URL é acessada. <br>
 
<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/Pasta_routers.png"/> <br>
 
&emsp;&emsp; A pasta "routers" da aplicação front-end contém os arquivos responsáveis por gerenciar a navegação da aplicação. <br>
 
&emsp;&emsp; Dentro da pasta "routers", há um arquivo principal que define as rotas da aplicação denominado "index.js". Este arquivo está padronizado em toda as pastas que correspondem à diferentes telas, com esse arquivo é possível importar e configurar as rotas, definindo quais componentes serão exibidos para cada rota específica. <br>
 
<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/Routers.png"/> <br>
 
 &emsp;&emsp; Segundo a imagem acima, é possível notar que todas as pastas que correspondem à telas diferentes, possuem os mesmos tipos de arquivo: 
 
 - **index.js**: arquivo que define a lógica de programação da aplicação em JavaScript, incluindo a interação do usuário e a manipulação do DOM. 
 
 - **styles.css**: arquivo que define o estilo visual da página, incluindo as cores, fontes e layout. <br>

&emsp;&emsp; Ademais, abaixo está toda a estrutura de pasta da aplicação front-end do projeto: <br>

<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/Estrutura_pasta_VsCode.png?raw=true"/> <br>

 &emsp;&emsp; Todos os arquivos do projeto estão incluídos na pasta denominada sib - Smart Insurance Bloockchain, seguindo a estrutura de pasta acima. <br>
 
- > **Pasta "src"**: é onde fica todo o código fonte da aplicação, como arquivos HTML, CSS, JavaScript e imagens. Dentro dessa pasta, pode-se criar outras pastas para organizar o código, como "components" para armazenar componentes reutilizáveis, "pages" para páginas da aplicação e "assets" para recursos como imagens e arquivos de fontes.

- > **Pasta "public"**: é onde ficam arquivos estáticos, como imagens e fontes, que são utilizados pela aplicação. Esse diretório é normalmente acessado diretamente pelo navegador.

- > **Pasta "node_modules"**: é onde ficam as dependências do projeto, instaladas através do gerenciador de pacotes npm.

- > **Arquivo "package.json"**: contém informações sobre o projeto e suas dependências, bem como scripts para tarefas como compilação e execução.

- > **README.md**: arquivo que fornece informações gerais sobre o projeto, como a descrição, a instalação e a utilização.
 
**Vídeo de Demonstração do Fron-tend:**

&emsp;&emsp; O seguinte link refere-se à um vídeo que demonstra e explica todo o Front-end da aplicação: 
&emsp;&emsp;&emsp;&emsp; https://drive.google.com/file/d/1nCrp7ifpHgPiMtwfJAQ4GhFOLAw7Itm0/view?usp=sharing <br><br>

## Histórico de Lançamentos:

<ul><li>24/02/2023 - Criação do Readme.md da documentação do Smart Contract</li></ul>
<ul><li>26/02/2023 - Criação da pasta código - imagens</li></ul>
<ul><li>26/02/2023 - Atualização do Readme.md da documentação do Smart Contract</li></ul>
<ul><li>07/03/2023 - Atualização na estrutura da documentação do Deploy e Teste do Smart Contract</li>
<ul><li>12/03/2023 - Atualização da Estrutura do Smart Contract com explicação textual</li>
<ul><li>12/03/2023 - Revisão da Documentação do Deploy e Testes de Smart Contracts</li>
</ul>
