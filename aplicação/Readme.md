# Documentação das telas - Frontend:

&emsp;&emsp; A documentação a seguir é uma descrição detalhada do funcionamento e uso das telas desenvolvidas no Frontend. Tanto em formato mobile para o usuário quanto para gestor responsável da Coover.<br>
Ela pode irá incluir algumas informações como<br>
&emsp;***|--> Plataforma do usuário;*** <br>
&emsp;***|--> Plataforma do gestor;***<br>
&emsp;***|--> Vídeo de Demonstração;***<br><br>


## Plataforma do usuário

**Tela Inicial** <br>

&emsp;&emsp;Página de entrada da aplicação, em que recepciona o usuário e o direciona diretamente para a tela de entrada no sistema para que o usuário se conecte através de uma Wallet (carteira digital), uma vez que a conexão é feita com uma carteira digital da Metamask. <br>

<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/Frontend_TelaInicial.png"/> <br><br>

**Tela De Login** <br>

&emsp;&emsp;Página responsável pela conexão entre o usuário e sua conta/wallet da Metamask. Essa conexão é essencial para que o usuário consiga utilizar o sistema da aplicação. Caso o usuário não tenha uma carteira, ele será redirecionado para uma extensão em que poderá criar a sua própria conta na Metamask e ter uma Wallet (carteira digital).<br>

<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/Frontend_TelaEntrada.png"/> <br><br>

**Tela de Validação da Entrada** <br>

&emsp;&emsp;Essa tela é responsável por informar o usuário sobre a confirmação do seu login, ou seja, retorna para o usuário que o cadastro foi realizado caso a Wallet tenha sido conectada com sucesso com a aplicação. Além disso, essa tela disponibiliza informações importantes da carteira digital do usuário, como por exemplo: o endereço da wallet e seu respectivo saldo. <br>

<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/Frontend_TelaEntrada2.png"/> <br><br>

**Tela do Menu Principal** <br>

&emsp;&emsp;Trata-se da página de menu que serve como um guia para melhorar a expedição do usuário, e tornar sua jornada pelo aplicativo mais intuitiva e satisfatória. Nessa tela, estão incluídos todos os serviçoes do sistema, tais como: Contratos, Meus Contratos, Dados para Contrato, Indenização e Saiba mais. <br>

<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/Frontend_TelaMenu.png"/> <br><br>

**Tela de Dados do Aparelho** <br>
&emsp;&emsp;Página em que os usuários devem inserir as informações a respeito de seus aparelhos, para que assim eles possam participar dos grupos de seguro. Essa tela é responsável por armazenar informações importantes sobre o aparelho do usuário tais como Imei do celular e valor do aparelho. Essas informações são fundamentais para que o usuário seja aprovado para entrar em algum grupo.

<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/Frontend_TelaDadosAparelho.png"/> <br><br>

**Tela de Edição dos Dados do Aparelho** <br>

<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/Frontend_TelaDadosAparelho2.png"/> <br><br>

**Tela para Participação em um Grupo/Contrato** <br>

&emsp;&emsp;Página onde o usuário pode visuzalizar todos os tipos de grupos de seguros e selecionar o grupo que ele deseja ingressar e ter participaçãp. Vale ressaltar que a entrada só será possível caso o usuário forneca todas as informações e dados sobre sua conta e aparelho. Informações incluidno modelo, valor de celular, Imei, entre outros, fundamental para o bom funcionamento da aplicação. 

<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/Frontend_TelaContratos.png"/> <br><br>

**Tela de Pedido de Indenização** <br>

&emsp;&emsp;Trata-se de uma tela que informa o status da indenização que o usuário esteja desenvolvendo, além de disponibilizar a categoria de indenização (roubo/furto, queda na água, entre outros.) Além disso, ela garante também um espaço para que o usuário possa descrever um pouco mais o ocorrido para que o gestor responsável da Coover compreenda um pouco mais a situação. ALém disso, essa página traz a possibilidade do usuário anexar informações e srquivos tais como imagens, BO's (Boletins de Ocorrênci) etc. <br>

<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/Frontend_TelaPedidoIndenizacao.png"/> <br><br>

**Tela de Status da Solicitação de Indenização** <br>

&emsp;&emsp;Tela responsável para nformar ao usuário o status de seus pedidos de indenização, além de confirmar que o envio das solicitacções.<br>

<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/Frontend_TelaSolicitacaoIndenizacao.png"/> <br><br>

**Tela do Saiba Mais** <br>

<img src="https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/Frontend_TelaSaibaMais.png"/> <br>

&emsp;&emsp;Tela em que o usuário terá informações sobre o serviço, trazendo então a possibilidade de redirecionar o usuário para duas telas distintas: 

- Sobre o nosso sistema: descrição sobre a aplicação, princípios e pilares.
- Sobre a Coover: espaço em que o usuário pode compreender um pouco mais sobre a empresa e suas características. 

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
 
## Vídeo de Demonstração do Front-End


&emsp;&emsp; Para um melhor entendimento das telas e Front-End da aplicação, o seguinte link  refere-se à um vídeo que demonstra em formato de navegação comentada descrevendo sobre as principais funcionalidades implementadas em nossa aplicação blockchain.

https://user-images.githubusercontent.com/99209712/227753006-cb0ae84e-ab9d-45de-9d7d-8eff4ccabd69.mp4

&emsp;&emsp;&emsp;&emsp; https://drive.google.com/file/d/1tDQQCtRCu0vCDJa5nhL0Abgcm1KpkOWl/view?usp=sharing <br><br>

## Vídeo de Demonstração da Integração

&emsp;&emsp; Esse vídeo demonstra toda a integração das telas do front-end com o sistema desenvolvido que utilizada a tecnlogia Blockchain e smart contract. Portanto, trata-se de um vídeo que mostra todo o funcionamento do sistema. Abaixo segue o link para o vídeo:

&emsp;&emsp;&emsp;&emsp; https://drive.google.com/file/d/14-89jcUPTCe6OKh7_uLV5xurYEhUMw-6/view?usp=sharing


