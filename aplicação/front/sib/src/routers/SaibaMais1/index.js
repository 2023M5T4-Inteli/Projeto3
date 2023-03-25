import Logo from '../../Assets/logoCoover.svg';
import caixinha from "../../Assets/caixaverde.png";
import monitor from "../../Assets/IconMonitor.png";
import "./SaibaMais1.css"
import Layout from '../../componentes/Layout';

export const SaibaMais1 = () => {
  return (
    <Layout>
    <div>
    <div>
        <img src={Logo} class="logo-" alt="Logo" />
      </div>

      <div className="caixa0">
        <p className="texto10">Sobre o nosso sistema</p>
       </div>  

      <div className='al'>
        <img className="caixinha" src={caixinha} alt="caixinha" />
      </div>
      
      <div>
        <img className="monitor-" src={monitor} alt="monitor" />
      </div>

      <div className="caixona">
        <h3 className="texto">Descentralização</h3>
        <p className="texto">
          Não há uma única autoridade que controla ou gerencia a blockchain.
        </p>
      </div>

      <div className="caixa3">
        <h3 className="texto">Segurança e imutabilidade</h3>
        <p className="texto">
          Permite que todos os usuários vejam todas as transações registradas em
          um registro público e imutável, o que torna difícil para alguém
          alterar ou adulterar as informações.
        </p>
      </div>

    </div>
    </Layout>
  );
}

export default SaibaMais1;
