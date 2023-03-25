import "./SolicitacaoIndenizacao.css";
import Layout from "../../componentes/Layout";
import Logo from '../../Assets/logoCoover.svg'
import Check from "../../Assets/IconCheck.png";
import vector from "../../Assets/Vector.png";

export const SolicitacaoIndenizacao = () => {
    return (
        <Layout>

            <div>
            <div className="logo">
                <img src={Logo} alt="Logo" />
                </div>
                
            <div className="check">
                <img src={Check} alt="check" />
                </div>

            <div>
                <p className="texto1-"> Pedido de indenização enviado com sucesso!</p> 
                <p className="texto2-"> Suas solicitação já foi enviada! Agora só falta aguardar pela resposta da seguradora. </p>
                <p className="texto3-">Status da sua solicitação</p>

            </div>
                <div className="button">
                        
                <button className="button1">
                    <span>Em aberto</span>
                    </button>
                        
                <button className="button2">
                    <span>Abrir minha solicitação</span>
                    </button>
                        
                        
                <button className="button3">
                    <span>Voltar para menu inicial</span>
                    </button>
                    </div>
                </div>
        </Layout>
    );
}

export default SolicitacaoIndenizacao;