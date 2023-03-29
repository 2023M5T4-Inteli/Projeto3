import { id } from "ethers";




interface CampoInputProps {
    title: string;
    type: string;
    id:string;
  }
  
  const CampoInput: React.FC<CampoInputProps> = ({ title, type, id}) => {
    return (
      <div className="text-left text-[#C1C1C1] mb-2 mx-1">
        <p className="text-xl text-[#C1C1C1]">{title}</p>
        <div className="flex pt-1 flex-row">
        <input
          className="text-[14px] h-10 py-2 rounded-lg w-[270px] text-white px-3 bg-[#303030]"
          placeholder=""
          type={type}
          id={id}
        />
        </div>
      </div>
    );
  };


  const CampoInput2: React.FC<CampoInputProps> = ({ title, type}) => {
    return (
      <div className="text-left text-[#C1C1C1] mx-3">
        <p className="text-xl">{title}</p>
        <div className="flex pt-2 flex-row">
        <input
          className="text-[14px] h-10 py-2 rounded-lg w-[300px] text-white px-3 bg-[#303030]"
          placeholder=""
          type={type}
          
        />
        </div>
      </div>
    );
  };
  
  export default CampoInput;
  