import Logo from '../../Assets/logoCoover.svg';
import Seta from '../../Assets/St.svg';
import caixinha from "../../Assets/caixaverde.png";
import monitor from "../../Assets/IconMonitor.png";
import escudo from "../../Assets/IconEscudo.png";
import iconesaibamais from "../../Assets/icone5SaibaMais.png";
import vector from "../../Assets/Vector.png";
import "./SaibaMaisPrincipal.css"
import Layout from '../../componentes/Layout';

export const SaibaMaisPrincipal = () => {
    return (
        <Layout>
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="iconesaibamais">
                <img src={iconesaibamais} alt="iconesaibamais" />
                <p className='texto'> Saiba Mais</p>
            </div>
            <div className='texto2'>
                <p> Venha entender mais sobre o nosso serviço! </p>
            </div>
            <div className="caixa">
                <p className="texto3">
                    Aqui você pode ver sobre como funciona o nossso sistema e conhecer mais sobre a Coover
                </p>
            </div>
            <div className="caixa1">
                <p className="texto4">Sobre o nosso sistema</p>
                <div className='al'>
                    <img className="caixinha" src={caixinha} alt="caixinha" />
                </div>
            </div>
            <div>
                <img className="monitor" src={monitor} alt="monitor" />
            </div>
            <div className="caixa1">
                <p className="texto5">Sobre a Coover</p>
                <div className='al'>
                    <img className="caixinha" src={caixinha} alt="caixinha" />
                    <div>
                        <img className="escudo" src={escudo} alt="escudo" />
                        <img className="vector" src={vector} alt="vector" />
                    </div>
                </div>
            </div>
            <div className='vector1'>
                <img className="vector" src={vector} alt="vector" />
            </div>
        </Layout>
    );
}

export default SaibaMaisPrincipal;
