import "./SolicitacaoIndenizacao.css";
import Layout from "../../componentes/Layout";
import Logo from '../../Assets/logoCoover.svg'
import Check from "../../Assets/IconCheck.png";

export const SolicitacaoIndenizacao = () => {
    return (
        <Layout>
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <div className="check">
                    <img src={Check} alt="check" />
                </div>
                <div>
                    <p className="texto"> Pedido de indenização enviado com sucesso!</p> 
                    <p className="texto2"> Sua solicitação já foi enviada! Agora só falta aguardar pela resposta da seguradora. </p>
                    <p className="texto3">Status da sua solicitação</p>
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
            </div>
        </Layout>
    );
}

export default SolicitacaoIndenizacao;