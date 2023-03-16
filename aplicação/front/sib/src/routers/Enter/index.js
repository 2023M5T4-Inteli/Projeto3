import Layout from "../../componentes/Layout";
import Seta from "../../Assets/St.svg"
import './Enter.css'
import Logo from '../../Assets/logoCoover.svg'
import '../../Global.css'
import Metamask from '../../Assets/metamask.svg'
import Bt from "../../componentes/Button";



export const Enter = () => {


    return (
        <Layout>
            <div className="seta">
                 <img src={Seta} className="" alt="logo" />
            </div>
            <div className="Alinhamento">
            <div>
             <img src={Logo} className="logo" alt="logo" />
            </div>
                <div>
                    <img src={Metamask} className="align-meta" alt="logo" />
                </div>
                <div className="Alinhamento">
                    <Bt className='teste' title={"Conecte-se ou Crie a sua Wallet"} link={'../'}/>
                </div>
            </div>
        </Layout>
    )

}



export default Enter;