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

## Smart Contract em Diagrama de Sequência UML, com descrição

&emsp;&emsp;Um diagrama de sequência UML é um tipo de diagrama de interação que mostra a interação entre os objetos e/ou participantes em um sistema ao longo do tempo. Ele ilustra a ordem das mensagens trocadas entre os objetos e como eles colaboram para alcançar um objetivo comum. <br>
&emsp;&emsp;Os diagramas de sequência UML são úteis para entender o fluxo de informações em um sistema, permitindo que os desenvolvedores e analistas de sistemas entendam a lógica do sistema e detectem possíveis problemas de design ou implementação. Eles também podem ser usados para documentar e comunicar o comportamento do sistema para outras partes interessadas. <br>
&emsp;&emsp;Abaixo há um diagrama de sequência UML que representa o fluxo de interações entre os participantes do processo de aprovação de membros em um grupo de seguro, incluindo a carteira do usuário, o usuário, a plataforma web (usuário), o administrador do seguro (AdminCoover), a plataforma web (administrador) e o contrato inteligente (Smart Contract). As setas representam as mensagens trocadas entre os participantes, indicando o fluxo de controle. Cada caixa vertical representa um participante, com suas ações e respostas organizadas em uma linha horizontal. <br>

![diagrama de Sequência UML](https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/Diagrama_Sequencia_UML_Sprint5.png)<br>

## Smart Contract em Diagrama de Implantação UML, com descrição
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