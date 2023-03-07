//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
//imporatação de bilioteca, a qual ira fornecer funções herdadas de um contrato
//o qual ira possiblitar de realizar transações
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol";
// Contrato inteligente
contract MeuContrato {
    // Armazena a quantidade de usuários atualmente no contrato
    uint public quantUsuario;
    // Armazena a quantidade mínima e máxima de usuários permitida no projeto
    uint public minPessoas;
    uint public maxPessoas;
    //armazena a taxa de administração do contrato
    uint public taxaAdmin;
    //indica a carteira cenral do projeto
    // Armazena a lista de usuários que aceitaram o novo termo
    mapping(address => bool) public termoAceito;
    mapping(address => Carteira) public integrante;
    //referente a user stories de número 5, o struct abaixo supre parte dos requisitos desta user storie, ao definir um carteira central para receber os fundos do contrato.
    //assim como é previsto pela user storie.
    //carteira que ira armazenar informações sobre a carteira da coover
    address carteiraCentral;
    uint fundosAdm;
    // Armazena a lista de carteiras de usuários
    Carteira[] public carteira;
    // Estrutura para armazenar a carteira de um usuário
    struct Carteira {
        address carteiraUsuario;
        uint valorAparelho;
        uint saldo;
    }
    // Endereço do proprietário do contrato
    address owner;
    // Construtor do contrato que define a quantidade mínima e máxima de usuários e a data de validade
    constructor(uint _minPessoas, uint _maxPessoas, uint _taxaAdmin) {
        quantUsuario = 0;
        owner = msg.sender;
        minPessoas = _minPessoas;
        maxPessoas = _maxPessoas;
        taxaAdmin = _taxaAdmin;
        carteiraCentral = payable(msg.sender);
        fundosAdm = 0;
    }
        //referente a userstorie de numero 4, o código abaixo supre a user stories de número 4, pois ao criar o modificador only owner que cede a permissão,
        //apenas ao dono do contrato. É possível criar o nível de permissão que o gerente de seguros precisa, que e prevista na user storie.
        //modificador que da a permissão apenas para o dono do contrato executar uma função
        modifier onlyOwner() {
        require(msg.sender == owner, "Somente o proprietario do contrato pode executar esta funcao.");
        _;
    }
    // Adiciona um novo usuário ao projeto
    //referente a usersotries
    function adicionarUsuario(address cliente,uint valorAssegurado) public onlyOwner {
        // Verifica se a quantidade máxima de usuários já foi atingida
        require(quantUsuario <= maxPessoas, "O numero maximo de usuarios ja foi atingido.");
        // Adiciona o usuário à lista de carteiras com seu saldo e valor do telefone
        carteira.push(Carteira(payable(cliente), valorAssegurado, 0));
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
            // Verifica se a carteira do usuário corresponde ao endereço fornecido
                if (carteira[i].carteiraUsuario == msg.sender) {
            // Adiciona os fundos a carteira do úsuario, tirando a taxa adiministrativa e a tranferindo para a coover
                carteira[i].saldo += valorUsuario;
                fundosAdm += valorDeposito - valorUsuario;
                // Sai do loop
                break;
        }
    }
    }
    //função para ver o saldo de um úsuario
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

    //função para ver quanto de dinheiro tem no contrato 
    function contratoSaldo() public view returns (uint) {
    uint balance = address(this).balance; // retorna quanto de fundo o contrato tem
    return  balance;
}

    //
    //referente a user storie 6, o código abaixo, supre parte da user stories de número 6 ,pois ao criar uma função que permita visualizar carteiras
    // que fazem parte do contrato, já um passo essencial para permitir que o usuário possa visualizar as pessoas que fazem parte de seu contrato, assim como previsto pela user storie
    //função que permite visualizar carteiras participantes do contrato
    function visualizarCarteiras() public view returns (Carteira[] memory) {
        return carteira;
    }
    //função para ver os fundos do administrador do contrato
    function verSaldoAdm() external view returns(uint){
                return fundosAdm;
        }
    //função para o administrador conseguir retirar os fundos do contrato
    function retirarTaxas(uint256 quantidade) public onlyOwner{
    //confere se o contrato tem dinheiro suficiente
    require(address(this).balance >= quantidade, "Saldo insuficiente no contrato");
    //trafere o dinheiro solicitado pelo adiministrador
    payable(msg.sender).transfer(quantidade);
    }

    // Função para remover um usuário do projeto
    function removerUsuario(address _usuario) public onlyOwner {
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
    // corresponde user storie 8, o código abaixo, supre parte da user stories de número 8, pois ao criar condições que verificam se o contrato está válido e
    // se possui o número necessário de pessoas para continuar, pode ser usado para garantir que o contrato só seja executado caso atenda as condições para ser iniciado
    //assim como previsto pela user storie
    // Verifica a viabilidade do contrato
    function viabilidadeContrato() public view returns (uint) {
        //verifica se o contrato está valido e possui o numero ideal de pessoas para funcionar
        if (quantUsuario >= minPessoas  && quantUsuario <= maxPessoas) {
            return 1; // Contrato Ativo
            //verifica se o contrato está valido mas nao possui o numero de pessoas ideal para funcionar
        } else if (quantUsuario < minPessoas || quantUsuario >= maxPessoas) {
            return 2; // Contrato em Progresso
        } else {
            revert("Erro ao verificar o contrato");
        }
    }
    ///////////
//     function depositTokens(address _tokenAddress, uint256 _amount) public returns (bool) {
//     IERC20 token = IERC20(_tokenAddress);
//     require(token.allowance(msg.sender, address(this)) >= _amount, "Allowance not set");
//     require(token.transferFrom(msg.sender, address(this), _amount), "Transfer failed");
//     return true;
// }
    ///////////
    //referente a user storie de número 10, o código abaixo, supre parte da user stories de número 10, pois ao realizar a criação de uma função que transfira dinheiro
    //do fundo do smartcontract para outra carteira, gera a possibilidade do gestor de seguros realizar a transferência de uma indenização a um membro do contrato
    //assim como previsto pela user storie

}