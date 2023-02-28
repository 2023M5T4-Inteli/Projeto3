# 📁 DOCUMENTAÇÃO DO SMART CONTRACT

&emsp;&emsp; Uma documentação do smart contract é uma descrição detalhada do funcionamento e uso de um contrato inteligente (smart contract).<br>
Ela pode irá incluir algumas informações como<br>
&emsp;***|--> Uma visão geral do contrato inteligente, incluindo seu propósito e objetivos;*** <br>
&emsp;***|--> A estrutura do contrato inteligente, incluindo suas funções, variáveis e eventos;***<br>
&emsp;***|--> Requisitos de Negócio implementado;***<br>
&emsp;***|--> Descrição da Arquitetura da Solução diagramada;***<br>
&emsp;***|--> Comportamento do Smart Contract em diagrama de sequência UML;***<br>

## 🎯 O objetivo:
&emsp;&emsp;|-->O smart contract possui como objetivo geral armazenar e garantir que os parâmetros para o funcionamento do contrato sejam atendidos, armazenando informações úteis sobre os membros do contrato, garantindo que as transações sejam feitas de forma segura e previsível. Garantindo que o que foi acordado vai ser executado de forma segura e imutável.<br>

## Estrutura do Smart Contract com explicação textual
&emsp;&emsp;|-->O arquivo smartContract.sol possui as seguintes funcionalidades e características, que podem ser observadas abaixo.
Abaixo é possível visualizar as variáveis responsáveis para o funcionamento do contrato:
<br>

### 1.1 - Variáveis do contrato:
        &emsp; **quantUsuario**: variável do tipo uint, ela é responsável por armazenar a quantidade de usuários dentro do contrato.<br>
	&emsp;**DataValidade**: variável do tipo uint, que é responsável por armazenar quantos dias o contrato ainda irá ficar em vigor.<br>
	&emsp;**minPessoas**: variável do tipo uint, que é responsável por armazenar o número mínimo de pessoas para o funcionamento do contrato.<br>
	&emsp;**maxPessoas**: variável do tipo uint, que é responsável por armazenar o número máximo de pessoas para o funcionamento do contrato.<br>
	&emsp;**termoAceito**: variável do tipo bool, que é responsável por armazenar se uma pessoa aceitou ou não os termos do contrato.<br>
	&emsp;**carteira[]**: é um array responsável por armazenar informações sobre cada carteira participante do contrato.<br>
  &emsp;**owner**: é um address, que é responsável por armazenar o endereço do dono do contrato. <br>
<br>
### 1.2 - Structs do contrato:

&emsp;&emsp;|-->O “struct" é usado para definir uma estrutura de dados personalizada, sendo muito semelhante a uma classe em outras linguagens de programação, pois pode ter membros (campos) e funções associadas a ela. Entretanto, ela não herda nada de outros structs.<br>
&emsp;Abaixo há alguns structs definidos no nosso smart contract.
&emsp;<br>**Carteira_central**: struct responsável por atribuir características a carteira que guarda os fundos do contrato.
&emsp;<br>**carteiraCentral**: tipo address que armazena o endereço da carteira do contrato.
&emsp;<br>**fundos**: do tipo uint, armazena o quanto de fundos a carteira central possui.
&emsp;<br>**Carteira**: esse struct possui dois membros ou campos denominados, carteiraUsuario e saldo, respectivamente. O primeiro é do tipo address, que é uma variável que contém um endereço, usado para identificar contas e contratos na blockchain. O segundo é do tipo uint, que informa o saldo que o usuário possui no contrato.
<br>
### 1.3 - Modifiers:
&emsp;<br>**onlyowner()**: modificador responsável por garantir que apenas o dono do contrato irá poder executar uma função.<br>

### 1.4 - Funções do contrato:
&emsp;<br>**visualizarCarteiras()**: Função responsável por retornar todas as carteiras que fazem parte do contrato.
&emsp;<br>**adicionarUsuario()**: Função responsável por adicionar usuário ao projeto, verificando se o grupo possui um máximo de pessoas atingidas.
&emsp;<br>**removerUsuario()**: Função responsável por remover usuário do projeto, excluindo sua conta.
&emsp;<br>**viabilidadeContrato()**: Função responsável por verificar se existe um número necessário de pessoas para continuar, podendo ser usado para garantir que o contrato só seja executado caso atenda as condições para ser iniciado.
&emsp;<br>**cobrarValor()**: Função responsável por verificar se os membros do contrato realizaram o depósito.
&emsp;<br>**transferirValor()**: Função responsável por transferir fundo do smart contract para outra carteira, onde gera a possibilidade do gestor de seguros realizar a transferência de uma indenização a um membro do contrato.
&emsp;<br>**renovarContrato()**: Função responsável por enviar a todos os participantes do contrato um termo de renovação do contrato, removendo os que não aceitarem e reativando o contrato caso ele cumpra os requisitos na função viabilidadeContrato().<br>

## Requisitos de Negócio implementado
&emsp;&emsp; |--> O requisito de negócio implementado a seguir é referente à user story número 5 “Como gerente de seguro, quero cobrar de uma carteira geral o percentual da Coover referente aos seus serviços prestados, para conseguir ter caixa na empresa”.<br>
&emsp;&emsp;O requisito foi comprido devido ao struct “carteiraCentral” que define uma carteira central para receber fundos do contrato, assim como previsto pela user story que possui como critério de aceitação a existência dessa carteira geral do smart contract, que será utilizada para captação de recursos.
<br>
&emsp;&emsp;Abaixo é possível visualizar o código referente a essa user story:

![Struct da carteira](https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/C%C3%B3digo%20-%20Imagens/Struct%20carteiraCentral.png)

&emsp;&emsp;O requisito de negócio implementado a seguir é referente à user story número 4 “como gerente de seguro, quero ter permissão para executar funções que apenas o administrador  pode executar ”.O requisito foi cumprido devido ao modifier onlyOwner(), que garante que apenas o dono do contrato terá acesso às funcionalidades que devem ser direcionadas ao administrador.<br>
&emsp;Abaixo é possível visualizar o código referente a essa user story:

![Modifier](https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/C%C3%B3digo%20-%20Imagens/Modifier%20onlyOwner.png)

&emsp;&emsp;O requisito de negócio implementado a seguir é referente à user story número 6 “Como usuário, quero poder visualizar as pessoas dentro do meu contrato de forma segura, para poder ver a quantidade de usuários dentro do mesmo contrato que o meu".<br>
&emsp;&emsp;O requisito foi cumprido devido a função visualizarCarteiras(), que retorna todos os membros daquele contrato, permitindo visualizar as pessoas em seu contrato.<br>

&emsp;Abaixo é possível visualizar o código referente a essa user story:

![função visualizar Carteira](https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/C%C3%B3digo%20-%20Imagens/fun%C3%A7%C3%A3o%20visualizarCarteiras.png)

&emsp;&emsp;O requisito de negócio implementado a seguir é referente à user story número 8 “Como gerente de seguros, quero que o smart contract só entre em pleno vigor, caso as condições de funcionamento sejam atendidas. Para que tudo funcione conforme o acordado”.<br>
&emsp;&emsp;O requisito foi cumprido devido a função viabilidadeContrato(), que confere se o contrato está na validade e possui o número definido de membros, garantindo assim que condições de funcionamento sejam atendidas.<br>

&emsp;Abaixo é possível visualizar o código referente a essa user story
![função viabilidade Contrato](https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/C%C3%B3digo%20-%20Imagens/fun%C3%A7%C3%A3o%20viabilidadeContrato.png)

&emsp;&emsp;O requisito de negócio implementado a seguir é referente à user story número 10 “Como gerente de seguros, quero que após uma solicitação de indenização ser aprovada, quero poder transferir os dinheiros do fundo do smart contract para a carteira de quem deve ser assegurado. Para garantir que os usuários recebam o dinheiro”.<br>
&emsp;&emsp;O requisito foi cumprido devido a função tranferirValor(), que transfere dinheiro do fundo do smartcontract para a carteira que for indicada, possibilitando transferir os fundos referentes a indenização.<br>
&emsp;Abaixo é possível visualizar o código referente a essa user story:

![função transferir Valor](https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/C%C3%B3digo%20-%20Imagens/fun%C3%A7%C3%A3o%20transferirValor.png)

## Smart Contract em diagrama de Sequência UML
![diagrama de Sequência UML](https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/C%C3%B3digo%20-%20Imagens/diagrama%20de%20Sequ%C3%AAncia%20UML.png)<br>

## Arquitetura da Solução Diagramada

&emsp;&emsp;Abaixo, é possível visualizar a diagramação em blocos da solução a qual estamos desenvolvendo. <br>
![diagrama em blocos](https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/C%C3%B3digo%20-%20Imagens/diagrama%20em%20blocos%20da%20solu%C3%A7%C3%A3o.jpg)<br>
&emsp;&emsp;A diagramação em blocos é uma técnica de organização visual de informações em que o conteúdo é dividido em blocos, cada um com uma função específica e sendo possível fazer linhas que representem as conexões ou interações entre as funções. A diagramação em blocos será usada como forma de criar uma hierarquia visual clara, com os elementos mais importantes e relevantes em destaque, refletindo em um melhor entendimento.<br>

&emsp;&emsp;Para melhor compreensão da construção de cada componente do diagrama, esta é uma lista dos principais componentes e uma breve descrição de suas interações:<br>

**Cliente/Usuário**<br>
<ul><li>Os clientes são os proprietários dos aparelhos e os que desejam contratar um seguro. Nesse sentido, além de fornecerem as informações referentes ao seus próprios aparelhos (para contratação do seguro), irão se conectar à plataforma para navegarem nas diversas oportunidades. <br>
<li>_Obs_: Também precisarão se conectar com uma carteira a partir da MetaMask.<br>
</ul>

**Coover (Administradores)**<br>
<ul><li>A Coover se encontra no papel de Seguradora, assim, ela busca entrar em seu sistema (Web) para controle e análise dos processos que ocorrem em sua plataforma, buscando ajudar e acatar ideias dos seus clientes.<br></ul>

**Metamask** <br>
<ul><li>MetaMask é uma carteira digital para armazenamento de criptomoedas que permite ao usuário interagir com aplicativos descentralizados baseados em Ethereum. Dessa forma, ela engloba diversas funcionalidades em uma única extensão – todas atreladas a aplicativos descentralizados (dApps). No caso da Coover, a Metamask é utilizada para realizar transacionar de forma mais simples e segura.<br></ul>

**Plataforma Web/App (Usuário)**<br>
<ul><li>Plataforma a qual o usuário irá utilizar, como forma de adquirir seu plano de seguro mútuo e gerenciá-lo. Viabiliza a conexão com a MetaMask, já que precisa conectar uma Wallet para contratar um seguro. Também fornece conexão com o sistema da seguradora, para fins de análise de pedidos diversos, processo de indenização e transação.<br></ul>

**Sistema da Seguradora (Coover)**<br>
<ul><li>O sistema da Seguradora é a fonte que faz a interligação entre a interface do usuário e os Smart Contracts em Blockchain. Podem receber requisições dos clientes, referentes à transações ou até mesmo modificar certos processos. Dessa forma, os administradores do sistema contam com toda a capacidade de gerenciar os seguros.<br></ul>

**Rede Blockchain**<br>
<ul><li>Rede responsável por guardar os Smart contracts, além de garantir segurança e imutabilidade dos registros, de forma que as transações não necessitem de um intermediário. <br></ul>

**Smart Contracts**<br>
<ul><li>Sistema onde os termos e os conteúdos são estruturados, englobando todas as regras de negócio do seguro mútuo. São executados na rede blockchain e possuem todas as cláusulas que são acordadas entre os integrantes e a seguradora, de acordo com a regra de negócio. Não só isso, mas automatizam as transações relacionadas à indenizações, ao momento que são aprovadas pela Coover.<br></ul>

**TestNet** <br>
<ul><li>Rede de testes na Blockchain, usada com objetivo de prevenir erros e riscos de gastos desnecessários, além de ser visto como local para testes e validações, antes de ser aplicado na Mainnet (Rede principal).<br></ul>

## Histórico de Lançamento

<ul><li>24/02/2023 - Criação do Readme.md da documentação do Smart Contract</li></ul>
<ul><li>26/02/2023 - Criação da pasta código - imagens</li></ul>
<ul><li>26/02/2023 - Atualização do Readme.md da documentação do Smart Contract</li></ul>
