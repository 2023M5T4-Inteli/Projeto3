//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Contrato inteligente
contract MeuContrato {

    // Armazena a quantidade de usuários atualmente no contrato
    uint public quantUsuario;

    string private usuario;

    // Armazena a data de validade do contrato
    uint public dataValidade;

    // Armazena a quantidade mínima e máxima de usuários permitida no projeto
    uint public minPessoas;
    uint public maxPessoas;
    //indica a carteira cenral do projeto
    Carteira_central public carteiraCentral;

    // Armazena a lista de usuários que aceitaram o novo termo
    mapping(address => bool) public termoAceito;

    //referente a user stories de número 5, o struct abaixo supre parte dos requisitos desta user storie, ao definir um carteira central para receber os fundos do contrato.
    //assim como é previsto pela user storie.
    //carteira que ira armazenar fundos central do contrato
    struct Carteira_central {
    address carteiraCentral;
    uint fundos;
    }

    // Armazena a lista de carteiras de usuários
    Carteira[] public carteira;

    // Estrutura para armazenar a carteira de um usuário
    struct Carteira {
        address carteiraUsuario;
        uint saldo;
    }

    // Endereço do proprietário do contrato
    address owner;

    // Construtor do contrato que define a quantidade mínima e máxima de usuários e a data de validade
    constructor(uint _minPessoas, uint _maxPessoas, uint _dataValidade) {
        quantUsuario = 0;
        owner = msg.sender;
        minPessoas = _minPessoas;
        maxPessoas = _maxPessoas;
        dataValidade = (_dataValidade*86400)+block.timestamp;
        carteiraCentral = Carteira_central(0x5B38Da6a701c568545dCfcB03FcB875f56beddC4, 0);
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
    function adicionarUsuario(address cliente) public onlyOwner {
        // Verifica se a quantidade máxima de usuários já foi atingida
        require(quantUsuario <= maxPessoas, "O numero maximo de usuarios ja foi atingido.");

        // Adiciona o usuário à lista de carteiras
        carteira.push(Carteira(cliente, 0));

        // Adiciona o usuário à lista de termos aceitos
        termoAceito[cliente] = true;

        // Incrementa a quantidade de usuários
        quantUsuario++;
    }
    //referente a user storie 6, o código abaixo, supre parte da user stories de número 6 ,pois ao criar uma função que permita visualizar carteiras
    // que fazem parte do contrato, já um passo essencial para permitir que o usuário possa visualizar as pessoas que fazem parte de seu contrato, assim como previsto pela user storie
    //função que permite visualizar carteiras participantes do contrato
    function visualizarCarteiras() public view returns (Carteira[] memory) {
        return carteira;
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
        if (quantUsuario >= minPessoas && block.timestamp <= dataValidade && quantUsuario <= maxPessoas) {
            return 1; // Contrato Ativo
            //verifica se o contrato está valido mas nao possui o numero de pessoas ideal para funcionar
        } else if (quantUsuario < minPessoas && block.timestamp <= dataValidade) {
            return 2; // Contrato em Progresso
            // verifica se o contrato venceu e não possui o numero de pessoas ideal para funcionar
        } else if (block.timestamp > dataValidade && quantUsuario < minPessoas) {
            return 3; // Contrato Inativo
        } else {
            revert("Erro ao verificar o contrato");
        }
    }

//função para verificar se os membros do contrato realizaram o depósito
function cobrarValor(uint valor) public onlyOwner {
    // Verifica se o contrato está ativo
    require(viabilidadeContrato() == 1, "O contrato esta ativo.");
    // Calcula o valor total a ser cobrado
    uint valorTotal = valor * quantUsuario;
    // Calcula a comissão do dono do contrato
    uint comissao = (valorTotal * 2) / 100;
    // Divide o valor total entre os usuários do contrato
    uint valorPorUsuario = (valorTotal - comissao) / quantUsuario;
    // Cobre o valor de cada usuário
    for (uint i = 0; i < carteira.length; i++) {
        carteira[i].saldo -= valorPorUsuario;
    }
    // Transfere a comissão para o dono do contrato
    for (uint i = 0; i < carteira.length; i++) {
        if (carteira[i].carteiraUsuario == owner) {
            carteira[i].saldo += comissao;
            break;
        }
        //soma o dinheiro capitado aos fundos do contrato
        carteiraCentral.fundos += (valorTotal - comissao);
    }
}

    //referente a user storie de número 10, o código abaixo, supre parte da user stories de número 10, pois ao realizar a criação de uma função que transfira dinheiro
    //do fundo do smartcontract para outra carteira, gera a possibilidade do gestor de seguros realizar a transferência de uma indenização a um membro do contrato
    //assim como previsto pela user storie
    //função para tranferir idenização a um úsuario
    function trasferirValor(uint valor,address deletarUsuario ) public onlyOwner {
        for (uint i = 0; i < carteira.length; i++) {
                    // Verifica se a carteira do usuário corresponde ao endereço fornecido
                    if (carteira[i].carteiraUsuario == deletarUsuario) {
                    //retira o valor da carteira de fundos
                    carteiraCentral.fundos -= valor;
                    // adiciona o valor a carteira do úsuario
                    carteira[i].saldo += valor;
                    // Sai do loop
                    break;
                }
        }
    }



//referente a user stories 7
// Função para renovar o contrato
function renovarContrato(uint _novaDataValidade) public onlyOwner {
    // Verifica se a nova data de validade é no futuro
    require(_novaDataValidade*86400+block.timestamp > block.timestamp, "Adicione uma quantidade valida de dias no contrato.");

    // Cria um array para armazenar os índices dos usuários que não aceitaram o novo termo
    uint[] memory indicesRemover = new uint[](quantUsuario);
    uint quantRemover = 0;

    // Verifica se cada usuário aceitou o novo termo, adicionando o índice à lista de remoção, caso contrário
    for (uint i = 0; i < quantUsuario; i++) {
        if (!termoAceito[carteira[i].carteiraUsuario]) {
            indicesRemover[quantRemover] = i;
            quantRemover++;
        }
    }

    // Remove os usuários que não aceitaram o novo termo
    for (uint i = 0; i < quantRemover; i++) {
        removerUsuario(carteira[indicesRemover[i]].carteiraUsuario);
    }

    // Verifica se a quantidade de usuários é compatível com o mínimo e o máximo definidos no contrato
    require(quantUsuario >= minPessoas && quantUsuario <= maxPessoas, "A quantidade de usuarios nao e compativel com o minimo e o maximo definidos no contrato.");
    
    // Define a nova data de validade
    dataValidade = _novaDataValidade;
}
}