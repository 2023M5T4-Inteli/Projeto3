import "./TelaEntrada.css";
import Logo from '../../Assets/logoCoover.svg'
import Check from "../../Assets/IconCheck.png";

export const TelaEntrada = () => {
  return (
    <div className="logo">
      <img src={Logo} alt="Logo" />
      <div className="IconCheck">
        <img src={Check} alt="IconCheck" />
      </div>
      <div>
        <p>Wallet conectada com sucesso!</p>{" "}
        {/* aqui está o novo elemento <p> */}
        <br />
      </div>
        <div className="endereco">
          <p className="texto55">Endereço da wallet</p>
          <div className="caixas">
            <input
              className="botao1"
              type="text"
              placeholder="1x0581505aE93b6191F0CF6F95f8658b5D401201g6"
            />
            <br />
            <br />
          </div>
        </div>
        <div className="saldo">
          <p>Saldo</p>
          <div className="caixas"> </div>
        </div>
        <div className="caixas">
          <input className="botao2" type="text" placeholder="20 ETH" />
          <br />
          <br />
          <p>Deseja continuar com esse endereço de wallet ou alterar?</p>
        </div>
        <div className="continuar">
          <p className="textcontinue">Continuar</p>
        </div>
            <div className="desconectar">
              <p className="textdesconect">Desconectar</p>
        </div>
      </div>
  );
}

export default TelaEntrada;