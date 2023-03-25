import Layout from '../../componentes/Layout';
import './PedirIndenizacao.css'
import Logo from '../../Assets/logoCoover.svg'
import FotoPerfil from '../../Assets/foto_perfil.png'


export const PedirIndenizacao = () => {
    return (
      <Layout>
      <div className="Alinhamento">
    
      <div>
        <img src={Logo} className="logo_pequena" alt="logo pequena" />
      </div>

      <hr class="linha"/>
      
      <div className="perfil">
      <img src={FotoPerfil} className="foto_perfil" alt="foto do perfil" />
      <h2>Guilherme Faria</h2>
      </div>

      <div className="caixa1">
        <p className="texto1">Status da Solicitação - Em Aberto</p>
      </div>

      <div className="selecao">
        <p className="texto2"> Selecione abaixo a categoria de indenização</p>
        <select className="formulario">
          <option value="Fisico">Danos físicos</option>
          <option value="Roubo">Roubo/furto</option>
          <option selected value="Agua">Queda na água</option>
       </select>
      </div>


      <div className="descricao">

        <p className="texto3"> Descreva abaixo o serviço que você precisa </p>

        <textarea className="formulario2">
        Digite aqui o seu problema
        </textarea>

       </div>

       <div class="anexo">
            <p><a href="inserir pop up"> Adicione o arquivo do seu B.O ou fotos em anexo</a></p>

       </div>

       <div>
       <button class="botao_solicitar">Solicitar Idenização</button>
       </div>

       <div>
       <button class="botao_cancelar">Cancelar Idenização</button>
       </div>

      </div>
      </Layout>
    );
  }
  
  export default PedirIndenizacao;