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
        Utilizamos tecnologia para simplificar e agilizar o processo de contratação de seguros.
        </p>
      </div>

      <div className="caixa3_">
        <p className="texto_">
        Empresa de seguros focada em melhorar a usabilidade dos nossos usuários. 
        </p>
      </div>

      <div className="caixa4_">
        <p className="texto_">
        Oferecemos uma ampla gama de seguros. Nossos clientes podem comparar diferentes planos de seguros e escolher o que melhor atende às suas necessidades e orçamento.
        </p>
      </div>

    </div>
    </Layout>
  );
}

export default SaibaMais2;