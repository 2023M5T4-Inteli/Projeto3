import Layout  from "../../componentes/Layout";
import Logo from '../../Assets/logoCoover.svg'
import Globe from '../../Assets/globe.svg'
import Bt from "../../componentes/Button";




export const Home = () => {

    return( 
     <Layout>
        <div className="Alinhamento">
            <div>
            <img src={Logo} className="logo" alt="logo" />
            </div>
            <div>
            <p className="text-center">Cuidar de verdade é 
                oferecer uma proteção do jeito 
                que você realmente precisa
            </p>
        </div>
        <div className="Alinhamento">
        <img src={Globe} className="" alt="logo" />
        <div className="Alinhamento-bt">
        <Bt title={'Enter'} link={"../Enter"} />
        </div>

      
        </div>

        </div>
        </Layout>



    )
}