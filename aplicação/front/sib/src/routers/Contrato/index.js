import Logo from '../../Assets/logoCoover.svg';
import Layout from '../../componentes/Layout';
import Bt from '../../componentes/Button';
import "./Contrato.css"
// import "../Global.css"

export const Contrato = () => {
  return (
    <Layout>
      <div className="logo"></div>
      <img src={Logo} alt="Logo" />

      <div className="TítuloContrato">
        <p className="textoContrato">Contrato</p>
        <p className='busca'>Pesquisar</p>
      </div>

      <Bt title={'Entrar'} link={'../'}> Entrar no grupo</Bt>
      <div className='button'></div>
    </Layout >
  );
}

export default Contrato;