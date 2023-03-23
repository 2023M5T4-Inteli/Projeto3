// SPDX-License-Identifier: GPL-3.0
        
pragma solidity >=0.4.22 <0.9.0;

// Imporação de arquivos padrões e blibliotecas de teste
import "remix_tests.sol"; 
import "remix_accounts.sol";
import "../contracts/Coin.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeMath.sol";


// Criação de contrato de teste
contract contratoTeste {

    // Teste se a taxaAdmin foi definida corretamente
    function testarTaxaAdmin() public {
        //cria o contrato, passando a texaAdmin como 3 parametro
        MeuContrato meuContrato = new MeuContrato(1, 5, 2);
        //define o valor esperado
        uint valorEsperado = 2;
        //realização da comparação do teste
        Assert.equal(meuContrato.taxaAdmin(), valorEsperado, "taxaIncorreta");
    }

    //função para testar se o valor com a taxa esta sendo calculado corretamente
    function testarValorPosTaxa() public{
        //cria o contratrato, passando a texaAdmin como 3 parametro e com valor de 10%
        MeuContrato meuContrato = new MeuContrato(1, 5, 10);
        //define o valor que se deseja ter de saldo na plataforma
         uint valorDeposito = 10;
         //define o valor esperado de quanto se deve colocar para obter esse saldo
         uint valorEsperado = 11;
        //realização da comparação do teste
        Assert.equal(meuContrato.valorPosTaxa(valorDeposito), valorEsperado, "valorIncorreto");
    }

    
    /// #sender: account-2
    /// #value: 0
    //Confere se o imei e valor do aparelho de quem solicitou foram salvos corretamente
    function testSolicitacaoAprovacao() public {
        //cria o contratrato
        MeuContrato meuContrato = new MeuContrato(1, 5, 10);
        //define o valor do aparelho e o seu imei, os quais são esperados que sejam salvos corretamente.
        uint valorAparelho = 10;
        uint imei = 123;
        //salva o úsuario na lista de parovação
        meuContrato.solicitacaoAprovacao(valorAparelho, imei);
        //valores realmente salvos na tabela
        uint imeiSalvo = meuContrato.teste3A();
        uint valorAparelhoSalvo = meuContrato.teste3B();
        //realização da comparação do teste, para conferir se o usuario foi salvo corretamente
        Assert.equal(imeiSalvo,imei, "Erro ao registrar Imei");
        Assert.equal(valorAparelhoSalvo, valorAparelho, "Erro ao registrar valor do aparelho ");
}

    /// #sender: account-0
    //funcao para testar se o maximo indenizavel e calculado corretamente
    function testeMaximoIndenizavel() public{
    //cria o contratrato
        MeuContrato meuContrato = new MeuContrato(1, 10, 5);
        //define o saldo atual e o valor do aparalho da pessoa, para calcular o maximo indenizavel
        uint saldo = 4;
        uint valorAparelho= 10;
        //obs: o úsuario deve ter pelo menos 50% do valor do aparelho para indenização maxima, abaixo disso sera prorpocional ao seu saldo
        //calcula o maximo indenizavel
        uint maximoIndenizavel = meuContrato.maximoIndenizavelParaTeste(saldo,valorAparelho);
        uint valorEsperado = 8;
        //confere seu foi calculado corretamente
        Assert.equal(maximoIndenizavel,valorEsperado, "Maximo indenizavel incorreto");
    }
}
