import { Layout2 } from "../../components/layout2";
import CampoInput from "../../components/input";
import Okay from '../assets/Okay.svg'
import Image from "next/image";
import Info from '../../assets/info.svg'
import Button from "../../components/Bt";
import Ic from '../../assets/icon1.svg'





export const Editar = () => {
   

    return (
        <Layout2>
            <div className="w-full px-8">
                <h2 className="font-bold text-2xl"> Dados do aparelho </h2>
                <div className="items-center flex mx-3 flex-col">
                    <div className="text-center mt-6 text-2xl">
                        <p className="text-bold">Gostaria de alterar seus dados atuais?</p>


                    </div>
                    <ul className="list-disc mt-2">
                        <li className="mt-5">
                            <p>Isso nos ajudará para aprovar sua entrada em algum grupo e para futuras solicitações de indenização.</p>
                        </li>
                    </ul>
                </div>
                <div className="mt-5">
                    <div className="flex flex-row items-end ">
                        <CampoInput title="Valor do celular (Atual)" type="number" id="teste"/>
                        <div className="pb-3 pl-4">
                        <Image
                            src={Info}
                            alt="My Image"
                            width={40}
                        />
                        </div>
                    </div>
                    <div className="flex flex-row items-end ">
                        <CampoInput title="IMEI" type="number" id="te"/>
                        <div className="pb-3 pl-4">
                        <Image
                            src={Info}
                            alt="My Image"
                            width={40}
                        />
                        </div>
                    </div>
                </div>
                <div className="w-full text-center mt-8">
                <Button text='Alterar dados' color='bg-[#0038AF] mx-1'/>
                </div>
                <div className='border-solid border-white border-2 mt-3 text-xl flex flex-row rounded-lg h-[40px] mx-2 px-5 w-6/7'>
                        <p className='mx-3'>Informações do contrato</p>
                        <Image
                        src={Ic}
                        alt="My Image"
                        width={20}
                    />
                    </div>
                

            </div>
            

        </Layout2>






    )
}



export default Editar;