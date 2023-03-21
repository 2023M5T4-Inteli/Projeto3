//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//importação de bilioteca, a qual irá fornecer funções herdadas de um contrato
//o qual irá possibilitar a realização de transações
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol";

// Contrato inteligente / Smart contract
contract MeuContrato {
    
    // Armazena a quantidade de usuários atualmente no contrato
    uint public quantUsuario;
    
    // Armazena a quantidade mínima e máxima de usuários permitida por contrato
    uint public minPessoas;
    uint public maxPessoas;
    
    // Armazena a taxa de administração do contrato
    uint public taxaAdmin;
        
    //referente a user stories de número 5, as variáveis abaixo suprem partes dos requisitos desta user storie, ao definir uma carteira central para receber as taxas de administração do contrato.
    // Carteira central que irá armazenar informações sobre a carteira da *Coover*
    address carteiraCentral;
    uint fundosAdm;

    // Armazena a lista de carteiras de usuários
    Carteira[] public carteira;
    
    // Estrutura para armazenar a Carteira de um *Usuário*
    struct Carteira {
        address carteiraUsuario;
        uint valorAparelho;
        uint saldo;
        uint IMEI;
    }

    // Armazena a lista de usuarios a serem aprovados
    Aprovar[] public aprovar;

    // Estrutura para armazenar um pedido de entrada no smart contract
    struct Aprovar {
        address carteiraUsuario;
        uint valorAparelho;
        uint IMEI;
    }
    // Estrutura para armazenar um pedido de indenizacao do smart contract
   Indenizacao[] public indenizacao;
    struct Indenizacao{
        address carteiraUsuario;
        uint valorPedido;
        string justificativa;
        uint imeiSolicitacao;
    }
    
    // Endereço do proprietário do contrato, que é o ADMINISTRADOR [IMPORTANTE: apenas o proprietário pode adicionar e remover usuários]
    address admin; // nota-se que encurtamos o nome para ser melhor para o código.
    
    // Construtor do contrato que define a quantidade mínima e máxima de usuários, além de definir o dono do contrato e a taxa de administração
    constructor(uint _minPessoas, uint _maxPessoas, uint _taxaAdmin) { 
        quantUsuario = 0;
        admin = msg.sender;
        minPessoas = _minPessoas;
        maxPessoas = _maxPessoas;
        taxaAdmin = _taxaAdmin;
        carteiraCentral = payable(msg.sender);
        fundosAdm = 0;
    }
        
        //referente a user storie de número 4, o código abaixo supre a user stories de número 4, pois ao criar o modificador 'apenasAdmin' que cede a permissão,
        //apenas ao dono do contrato / proprietário. É possível criar o nível de permissão que o gerente de seguros precisa, que é prevista na user storie.
        //modificador que da a permissão apenas para o dono do contrato executar uma função
        modifier apenasAdmin() {
        require(msg.sender == admin, "Somente o proprietario do contrato pode executar esta funcao.");
        _;
    }

    function solicitacaoAprovacao(uint valorAparelho, uint imei) public {
        // Adiciona o usuário à lista de carteiras com seu saldo e valor do aparelho celular
        aprovar.push(Aprovar(msg.sender, valorAparelho, imei));  
    }   

     function verSolicitacao() external view apenasAdmin returns(Aprovar[] memory) {
         // retorna a lista de úsuarios a serem aprovados
         return aprovar;
     }


//função para aprovar solicitação de alguem para entra no contrato
function aprovarSolicitacao(uint resposta, address usuario) public apenasAdmin{
    // se a resposta for não remove a pessoa da lista de espera
    if (resposta == 0){
        for (uint i = 0; i < aprovar.length; i++) {
            if (aprovar[i].carteiraUsuario == usuario){
                // Move o último elemento do array para o índice vazio
                aprovar[i] = aprovar[aprovar.length - 1];
                aprovar.pop();
                break;
            }
        }
    }
    // se a resposta for sim aceita a  pessoa no contrato
    if (resposta == 1){
        for (uint i = 0; i < aprovar.length; i++) {
            if (aprovar[i].carteiraUsuario == usuario){
                adicionarUsuario(aprovar[i].carteiraUsuario, aprovar[i].valorAparelho ,aprovar[i].IMEI);
                // Move o último elemento do array para o índice vazio
                aprovar[i] = aprovar[aprovar.length - 1];
                aprovar.pop();
                break;
            }
        }
    }
}


    
    // Adicionar um novo usuário ao projeto
    function adicionarUsuario(address cliente,uint valorAssegurado, uint imei) public apenasAdmin {
        
        // Verifica se a quantidade máxima de usuários já foi atingida
        require(quantUsuario <= maxPessoas, "O numero maximo de usuarios ja foi atingido.");
        
        // Adiciona o usuário à lista de carteiras com seu saldo e valor do aparelho celular
        carteira.push(Carteira(payable(cliente), valorAssegurado, 0, imei));
        
        // Incrementa a quantidade de usuários
        quantUsuario++;
    }

    //função para uma carteira adicionar dinheiro no smart contract

    function adicionarDinheiro() public payable{

        //armazena a taxa do adminstrador
        uint taxa = taxaAdmin;
        
        //armazena o valor do deposito
        uint valorDeposito = msg.value;
        
        //armazena o valor que o úsuario deve receber, uma vez calculada a taxa adiministrativa
        uint valorUsuario = valorDeposito - (valorDeposito * taxa / 100);
        
        //passa pelas carteiras de membros do contrato
        for (uint i = 0; i < carteira.length; i++) {
        
            // Verifica se a carteira do usuário corresponde ao endereço de quem chamou a função
            if (carteira[i].carteiraUsuario == msg.sender) {
        
            // Adiciona os fundos a carteira do úsuario, tirando a taxa adiministrativa e a tranferindo para a Coover
            carteira[i].saldo += valorUsuario;
            fundosAdm += valorDeposito - valorUsuario;
            
            // Sai do loop
            break;
            }
        }
    }
    
    // Função para ver o saldo da carteira que está chamando a função
    // Exemplo: um usuário quer ver no front, o saldo da carteira dele, ele poderá visualizar o saldo da carteira dele, 
    // pois a função irá verificar se o endereço da carteira que está chamando a função é igual ao endereço da carteira do usuário 
    function verSaldo() external view returns(uint){
        for (uint i = 0; i < carteira.length; i++) {
        
            // Verifica se a carteira do usuário corresponde ao endereço fornecido
            if (carteira[i].carteiraUsuario == msg.sender) {
        
            // Retorna o saldo do úsuario
            return carteira[i].saldo;
            
            // Sai do loop
            break;
            }
        }
    }
    
    // Função para ver quanto de dinheiro tem no contrato, em suma, visualizar o saldo do contrato.
    function contratoSaldo() public view returns (uint) {
    uint balance = address(this).balance; // retorna quanto de fundo o contrato possui
    return  balance;
    }
    
    // referente a user storie 6, o código abaixo, supre parte da user stories de número 6, pois ao criar uma função que permita visualizar carteiras que fazem parte do contrato,
    // é um passo essencial para permitir que o usuário possa visualizar as pessoas que fazem parte de seu contrato, assim como previsto pela user storie
    // função que permite visualizar carteiras participantes do contrato
    function visualizarCarteiras() public view returns (Carteira[] memory) {
        return carteira;
    }
    
    // Função para ver o saldo do administrador do contrato
    function verSaldoAdm() external view returns(uint){
        return fundosAdm;
    }

    // Função para o administrador conseguir retirar taxas do contrato (retirar o valor que o administrador ganha, o qual já estará destinado a ele)
    function retirarTaxas(uint256 quantidade) public apenasAdmin{
        
        //confere se o contrato tem dinheiro suficiente
        require(address(this).balance >= quantidade, "Saldo insuficiente no contrato");
        
        //trafere o valor já "separado" das taxas cobradas para o adiministrador, quando chama esta função
        payable(msg.sender).transfer(quantidade);
    }

    //referente a user storie de número 10, o código abaixo, supre parte da user stories de número 10, pois ao realizar a criação de uma função que transfira dinheiro
    //do fundo do smartcontract para outra carteira, gera a possibilidade do gestor de seguros realizar a transferência de uma indenização a um membro do contrato
    //assim como previsto pela user storie
    //função para tranferir idenização a um úsuario
    // Função para o administrador conseguir fornecer a indenização a um membro do contrato
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

    //função para enviar solicitacao de aprovacao de indenizacao
    function solicitacaoIndenizacao(uint valorID,string memory justificativa) public {
        // Adiciona o usuário à lista de carteiras que pediram indenizacao
        uint imeiDoPedido;
        for (uint i = 0; i < carteira.length; i++){
            if (carteira[i].carteiraUsuario == msg.sender)
                imeiDoPedido = carteira[i].IMEI;
        } 
        indenizacao.push(Indenizacao(msg.sender, valorID, justificativa, imeiDoPedido));  
    }  

    //função para ver pedidos de idenizacao
     function verSolicitacaoIndenizacao() external view apenasAdmin returns(Indenizacao[] memory) {
         //retorna a lista de aprovação de solicitacao
         return indenizacao;
     }

    
    //função para aprovar a solicitação de idenizacao
    function aprovarIndenizacao(uint imeiDaSolicitacao) public apenasAdmin{
        //passa por todos os pedidos e executa o que foi aprovado
        for (uint i = 0; i < indenizacao.length; i++){
            if (indenizacao[i].imeiSolicitacao == imeiDaSolicitacao){
            indenizar(indenizacao[i].carteiraUsuario, indenizacao[i].valorPedido, imeiDaSolicitacao);  
            }
        }
    }
 


    // Função para remover um usuário do projeto
    function removerUsuario(address _usuario) public apenasAdmin {
        
        // Verifica cada carteira do projeto
        for (uint i = 0; i < carteira.length; i++) {
            
            // Verifica se a carteira do usuário corresponde ao endereço fornecido
            if (carteira[i].carteiraUsuario == _usuario) {
            
            // Remove o usuário da lista de carteiras
            delete carteira[i];
            
            // Atualiza o número de usuários
            quantUsuario--;
            
                // Sai do loop
                break;
            }
        }
    }

    //calcula quanto o úsuario ira efetivamente depositar apos a retirada da taxa
    function valorPosTaxa(uint valor) external view returns(uint) {
        uint valorComTaxa = valor + (valor * taxaAdmin / 100);
        return valorComTaxa;
    }   

    
    // corresponde user storie 8, o código abaixo, supre parte da user stories de número 8, pois ao criar condições que verificam se o contrato está válido e
    // se possui o número necessário de pessoas para continuar, pode ser usado para garantir que o contrato só seja executado caso atenda as condições para ser iniciado
    // Verifica a viabilidade do contrato
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
}