import Logo from '../../Assets/logoCoover.svg';
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
                <p className='texto11'> Saiba Mais</p>
            </div>
            <div className='texto22'>
                <p> Venha entender mais sobre o nosso serviço! </p>
            </div>

            <div className="caixa_">

             <p className="texto33">
             Aqui você pode ver sobre como funciona o nossso sistema e conhecer mais sobre a Coover!
            </p>
            </div>

            <div className="caixa2_">

            <p className="texto34">
            Sobre o nosso sistema &rarr;
            </p>
            </div>

            <div className="caixa2_">

            <p className="texto34">
            Sobre a Coover &rarr;
            </p>
            </div>

    

            
            
        </Layout>
    );
}

export default SaibaMaisPrincipal;
