# :wrench: Teste Automatizado

&emsp;&emsp; A documentação a seguir é uma descrição detalhada dos Testes de Aprendizado. Cada um dos testes apresentam suas pré-condições, resultados esperados, procedimentos de teste e  pós-condições.<br>
Ela pode irá incluir algumas informações como<br>
&emsp;***|--> Teste número 1;*** <br>
&emsp;***|--> Teste número 2;***<br>
&emsp;***|--> Teste número 3;***<br>
&emsp;***|--> Teste número 4;***<br>
&emsp;***|--> Teste número 5;***<br>



Nesse momento, realizamos dois testes seguindo metodologias utilizadas em testes de software. Esses testes são realizados para verificação das pequenas partes do código, chamadas de unidades, que devem apresentar o funcionamento perfeitamente, seguindo uma pré-condição, procedimento e pós-condição. Os testes foram executados em um ambiente isolado do contrato principal, em um arquivo denominado “coin_test.sol”. Essa metodologia ajuda a garantir que cada parte do código esteja funcionando corretamente antes de ser integrada a outras partes.

Instruções de teste unitário no ambiente de desenvolvimento:<br>

### **Teste número 1**<br>

Na primeira função de teste, "testarTaxaAdmin()", é verificado se a taxa de administração do contrato foi definida corretamente.<br><br>
**Pré-condição**: é criado um novo contrato, passando a taxa de administração como parâmetro. Em seguida, o valor esperado é definido como 2. Como mostrado abaixo:<br>

```
function testarTaxaAdmin() public {
        //cria o contrato, passando a texaAdmin como 3 parametro
        MeuContrato meuContrato = new MeuContrato(1, 5, 2);
        //no caso fala q o valor esperado e 2
        uint valorEsperado = 2;
```

**Procedimento de teste**: o teste verifica se o valor retornado pela função "taxaAdmin()" é igual ao valor definido no deploy da nova instância do contrato.<br>
**Resultado esperado**: o resultado esperado é que a função "taxaAdmin()" retorne 2, valor esse que foi definido na criação do contrato.

```
Assert.equal(meuContrato.taxaAdmin(), valorEsperado, "taxaIncorreta");
    }
```

**Pós-condição**: o teste verifica se o valor retornado pela função "taxaAdmin()" é igual ao valor esperado, e se não for, a mensagem de erro "taxaIncorreta" é exibida.<br>

Abaixo é possível visualizar o código completo deste teste tanto para copiar quanto para uma captura de tela para melhor visualização no Remix IDE:

```
function testarTaxaAdmin() public {
        //cria o contrato, passando a taxaAdmin como 3 parâmetro
        MeuContrato meuContrato = new MeuContrato(1, 5, 2);
        //no caso, o valor esperado é 2
        uint valorEsperado = 2;
        Assert.equal(meuContrato.taxaAdmin(), valorEsperado, "taxaIncorreta");
    }
```
![Teste Automatizado 1](https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/Teste%20Automatizado%201.png)
<br>


### **Teste número 2**<br>

Na segunda função de teste, "testarValorPosTaxa()", é verificado se o valor final, com a taxa de administração incluída, está sendo calculado corretamente.<br>
**Pré-condição**: é criado um novo contrato, passando a taxa de administração como parâmetro, 10% no caso. Em seguida, o valor do depósito é definido como 10.<br>

```
    //função para testar se o valor com a taxa está sendo calculado corretamente
    function testarValorPosTaxa() public{
        MeuContrato meuContrato = new MeuContrato(1, 5, 10);
         uint valorDeposito = 10;
```

**Resultado Esperado**: o valor esperado é definido como 11 (o depósito original mais a taxa de administração).<br>

```
uint valorEsperado = 11;
```

**Procedimento de teste**: o teste calcula o impacto da taxa administrativa no valor do depósito através da função valorPosTaxa(), para depois ser comparado ao valor esperado.<br>

**Pós-condição**: o teste verifica se o valor retornado pela função "valorPosTaxa()" é igual ao valor esperado, e se não for, a mensagem de erro "valor Incorreto" é exibida.<br>

```
Assert.equal(meuContrato.valorPosTaxa(valorDeposito),valorEsperado, "valorCorreto");
    }
```

Abaixo é possível visualizar o código completo deste teste tanto para copiar quanto para uma captura de tela para melhor visualização no Remix IDE:

```
//função para testar se o valor com a taxa está sendo calculado corretamente
function testarValorPosTaxa() public{
MeuContrato meuContrato = new MeuContrato(1, 5, 10);
uint valorDeposito = 10;
uint valorEsperado = 11;
Assert.equal(meuContrato.valorPosTaxa(valorDeposito), valorEsperado, "valorCorreto");
    }
```

![Teste automatizado 2](https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/Teste%20Automatizado%202.png)
<br>
### **Teste número 3**

Na Terceira função de teste, "testSolicitacaoAprovacao()”, é verificado se o usuário enviar uma solicitação de entrada no grupo, as suas informações são salvas corretamente no contrato”<br>

**Pré-condição**: é criado um novo contrato, e posteriormente, definimos o valor do aparelho ”10” e imei “123” de usuário a ser adicionado no contrato.

```
/// #sender: account-2
    /// #value: 0
    //Confere se o imei e valor do aparelho de quem solicitou foram salvos corretamente
    function testSolicitacaoAprovacao() public {
        //cria o contrato
        MeuContrato meuContrato = new MeuContrato(1, 5, 10);
        //define o valor do aparelho e o seu imei, os quais são esperados que sejam salvos corretamente.
        uint valorAparelho = 10;
        uint imei = 123;
```

**Resultado Esperado**: os valores esperados são os mesmos fornecidos anteriormente no caso valor do aparelho”10” e imei “123”.<br>

**Procedimento de teste**:O valor do aparelho e o imei definidos são fornecidos para função solicitacaoAprovacao() para o usuário ser adicionado ao contrato, depois as informações salvas são recuperadas pelas funções teste3A() e teste 3B(), para serem comparadas ao resultado esperado.<br>

```
 //salva o usuário na lista de aprovação
        meuContrato.solicitacaoAprovacao(valorAparelho, imei);
        //valores realmente salvos na tabela
        uint imeiSalvo = meuContrato.teste3A();
        uint valorAparelhoSalvo = meuContrato.teste3B();
        //realização da comparação do teste, para conferir se o usuário foi salvo corretamente
```

**Pós-condição**: o teste verifica se o valor retornado pelas funções teste3A() e teste 3B() são iguais ao resultados registrados previamente, e retorna “Erro ao registrar Imei” caso o imei está errado e “Erro ao registrar valor do aparelho” caso valor do aparelho seja registrado errado.

```
 //realização da comparação do teste, para conferir se o usuário foi salvo corretamente
        Assert.equal(imeiSalvo,imei, "Erro ao registrar Imei");
        Assert.equal(valorAparelhoSalvo, valorAparelho, "Erro ao registrar valor do aparelho ");
}
```

Abaixo é possível visualizar o código completo deste teste tanto para copiar quanto para uma captura de tela para melhor visualização no Remix IDE:

```
/// #sender: account-2
    /// #value: 0
    //Confere se o imei e valor do aparelho de quem solicitou foram salvos corretamente
    function testSolicitacaoAprovacao() public {
        //cria o contrato
        MeuContrato meuContrato = new MeuContrato(1, 5, 10);
        //define o valor do aparelho e o seu imei, os quais são esperados que sejam salvos corretamente.
        uint valorAparelho = 10;
        uint imei = 123;
        //salva o usuário na lista de aprovação
        meuContrato.solicitacaoAprovacao(valorAparelho, imei);
        //valores realmente salvos na tabela
        uint imeiSalvo = meuContrato.teste3A();
        uint valorAparelhoSalvo = meuContrato.teste3B();
        //realização da comparação do teste, para conferir se o usuário foi salvo corretamente
        Assert.equal(imeiSalvo,imei, "Erro ao registrar Imei");
        Assert.equal(valorAparelhoSalvo, valorAparelho, "Erro ao registrar valor do aparelho ");
}
```
![Teste automatizado 3](https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/Teste%20Automatizado%203.png)
<br>

### **Teste número 4**
Na Quarta função de teste, "testeMaximoIndenizavel()”, é verificado se o máximo indenizável, baseado no saldo restante do membro do contrato, está sendo calculado corretamente”.<br>
**Pré-condição**: é criado um novo contrato, após isso e definimos o valor do aparelho”10” e o saldo do úsuario“4”.
```
/// #sender: account-0
    //funcao para testar se o maximo indenizavel e calculado corretamente
    function testeMaximoIndenizavel() public{
    //cria o contratrato
        MeuContrato meuContrato = new MeuContrato(1, 10, 5);
        //define o saldo atual e o valor do aparelho da pessoa, para calcular o maximo indenizavel
        uint saldo = 4;
        uint valorAparelho= 10;
```

**Resultado Esperado**: o valor esperado é 8. equivalente a 80% de cobertura do valor do aparelho.

```
//obs: o usuário deve ter pelo menos 50% do valor do aparelho para indenização máxima, abaixo disso será proporcional ao seu saldo
        //calcula o maximo indenizavel
uint maximoIndenizavel = meuContrato.maximoIndenizavelParaTeste(saldo,valorAparelho);
        uint valorEsperado = 8;
```
**Procedimento de teste**: O valor para o aparelho e o saldo do usuário são passados para função MaximoIndenizavel(), que irá calcular o máximo indenizável com base nas informações e retornar esse valor para ser comparado posteriormente com o esperado.

**Pós-condição**: o teste verifica se o valor retornado pela funçãoMaximoIndenizavel() é igual ao valor espererado”8”, e retorna “Maximo indenizavel incorreto” caso o cálculo de errado.

```
//confere seu foi calculado corretamente
Assert.equal(maximoIndenizavel,valorEsperado, "Maximo indenizavel incorreto");
    }
```
Abaixo é possível visualizar o código completo deste teste tanto para copiar quanto para uma captura de tela para melhor visualização no Remix IDE:
```
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
```
![Teste automatizado 4](https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/Teste%20Automatizado%204.png)
<br>

### **Teste número 5**
Na Quinta função de teste, "testeViabilidadeContrato()", é verificado se a função identifica corretamente se o contrato possui a quantidade correta de membros para o seu funcionamento”.

**Pré-condição**: é criado um novo contrato, passando como parâmetro o mínimo de pessoas como 1 e o máximo como 3, e são adicionados 2 usuários no contrato através da função adicionarUsuario.

```
/// #sender: account-0
    //função para conferir se a viabilidade do contrato está funcionando
    function testeViabilidadeContrato() public{
    //cria o contrato definindo o mínimo de pessoas como 1 e o máximo com 3
    MeuContrato meuContrato = new MeuContrato(1, 3, 5);
```
**Resultado Esperado**: o valor esperado é 1, que ocorre quando o contrato está avaliado, uma vez que ele possui 2 usuários, valor este que está entre o mínimo e o máximo.<br>

**Procedimento de teste**: A função adicionarUsuario() é chamada 2 vezes, para adicionar 2 novos usuários ao contrato, após isso é chamada a função viabiliadeContrato(), que irá verificar se o número de pessoas é válido e retornar um feedback, que sera utilizado para ser comparado com resultado esperado.<br>

```
//adiciona 2 pessoas ao contrato
    meuContrato.adicionarUsuario(TestsAccounts.getAccount(1),10, 123);
    meuContrato.adicionarUsuario(TestsAccounts.getAccount(2),15, 124);
    //verifica se o contrato tem um numero valido de pessoas
    uint resposta = meuContrato.viabilidadeContrato();
```
**Pós-condição**: o teste verifica se o valor retornado pelaviabiliadeContrato() é igual ao Resultado esperado “1”, e retorna “Resposta Incorreta” caso o resultado esteja errado.

```
 //define que a reposata esperada e 1, valido, pois temos 2 pessoas, valor este que esta entre 1 e 3 definidos no min e max
    uint respostaEsperada = 1;
    //confere seu foi calculado corretamente
    Assert.equal(resposta,respostaEsperada, "Resposta Incorreta");
    }
```
Abaixo é possível visualizar o código completo deste teste tanto para copiar quanto para uma captura de tela para melhor visualização no Remix IDE:
```
/// #sender: account-0
    //função para conferir se a viabiliade do contrato esta funcionado
    function testeViabilidadeContrato() public{
    //cria o contrato definindo o min de pessaos como 1 e o maximo com 3
    MeuContrato meuContrato = new MeuContrato(1, 3, 5);
    //adiciona 2 pessoas ao contrato
    meuContrato.adicionarUsuario(TestsAccounts.getAccount(1),10, 123);
    meuContrato.adicionarUsuario(TestsAccounts.getAccount(2),15, 124);
    //verifica se o contrato tem um numero valido de pessoas
    uint resposta = meuContrato.viabilidadeContrato();
    //define que a reposata esperada e 1, valido, pois temos 2 pessoas, valor este que esta entre 1 e 3 definidos no min e max
    uint respostaEsperada = 1;
    //confere seu foi calculado corretamente
    Assert.equal(resposta,respostaEsperada, "Resposta Incorreta");
    }
```
![Teste automatizado 5](https://github.com/2023M5T4-Inteli/Projeto3/blob/main/Documentos/outros/Captura%20de%20telas%20-%20Imagens/Teste%20Automatizado%205.png)
<br>

Em resumo, os testes de automatizados são importantes para garantir que pequenas partes do código estejam funcionando corretamente antes de serem integradas a outras partes. Os testes têm pré e pós-condições definidas e verificam se o resultado esperado foi alcançado. Isso ajuda a garantir que o código funcione corretamente e minimize a possibilidade de erros e bugs em versões futuras.

