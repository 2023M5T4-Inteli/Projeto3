import Logo from '../../Assets/logoCoover.svg';
import Escudo from "../../Assets/escudo.png";
import caixinha from "../../Assets/caixaverde.png";
import "./SaibaMais2.css"
import Layout from '../../componentes/Layout';

export const SaibaMais2 = () => {
  return (
    <Layout>
    <div>
    <div>
        <img src={Logo} class="logo_" alt="Logo" />
      </div>

      <div className="caixa1_">
        <p className="texto1_">Sobre a Coover</p>
       </div>  

      <div className='al'>
        <img className="caixinha" src={caixinha} alt="caixinha" />
      </div>
      
      <div>
        <img className="monitor-" src={Escudo} alt="monitor" />
      </div>

      <div className="caixa2_">
        <p className="texto_">
          Não há uma única autoridade que controla ou gerencia a blockchain.
        </p>
      </div>

      <div className="caixa3_">
        <p className="texto_">
          Permite que todos os usuários vejam todas as transações registradas em
          um registro público e imutável, o que torna difícil para alguém
          alterar ou adulterar as informações.
        </p>
      </div>

      <div className="caixa4_">
        <p className="texto_">
          Permite que todos os usuários vejam todas as transações registradas em
          um registro público e imutável, o que torna difícil para alguém
          alterar ou adulterar as informações.
        </p>
      </div>

    </div>
    </Layout>
  );
}

export default SaibaMais2;