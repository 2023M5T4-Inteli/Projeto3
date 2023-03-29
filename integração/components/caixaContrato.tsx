import Image from "next/image";
import info from '../assets/info2.svg';

interface CaixinhaProps {
  membros: string;
  tipoSeguro: string;
  taxaAdm: string;
  valorMinimo: string;
}

export const Caixinha: React.FC<CaixinhaProps> = ({ membros, tipoSeguro, taxaAdm, valorMinimo }) => {
  return (
    <div className="items-center ">
      <div className="flex flex-col mt-5 bg-[#303030] rounded-xl w-[300px] py-2">
        <div className="flex flex-row items-start justify-between mb-1 mx-3">
          <p className="font-bold text-2xl"> Grupo 1</p>
          <div className="mt-1">
            <Image src={info} alt="My Image" width={20} height={20} />
          </div>
        </div>
        <hr className="bg-gradient-to-r from-black via-white to-black w-full mb-3 h-[2px]" />
        <ul className="list-disc items-center ml-8 ">
          <li>Quantidade de Membros - {membros}</li>
          <li>{tipoSeguro}</li>
          <li>Taxa Admin - {taxaAdm}</li>
          <li>Valor mínimo - {valorMinimo} do aparelho</li>
        </ul>
      </div>
    </div>
  );
};