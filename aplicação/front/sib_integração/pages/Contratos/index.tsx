import Layout2 from "../../components/layout2";
import invoice from '../../assets/invoice.svg'
import Image from "next/image";
import Sh from '../../assets/search.svg'
import info from '../../assets/info2.svg'
import { Caixinha } from "../../components/caixaContrato";
import Button from "../../components/Bt";






export const Contratos = () => {

    let selecionado = 0




    return (
        <Layout2>
            <div className="flex flex-row justify-between items-start mx-2">
                <div className="text-bold text-3xl mr-3">
                    <p>Contratos</p>
                </div>
                <div className='bg-[#303030] text-xl flex mt-1 items-start py-1 text-center flex-row rounded-lg mx-2'>
                    <div className="w-full mx-3 mt-1">
                        <Image
                            src={Sh}
                            alt="My Image"
                            width={20}

                        /></div>

                    <div>
                        <input type="text" className="bg-inherit w-[150px] placeholder:text-sm" placeholder="Busque por um grupo" />
                    </div>
                </div>
            </div>
          <div className="max-h-[500px] overflow-y-auto mt-2">
            <Caixinha membros={"1/3"} tipoSeguro={"safosfoas sjsafdjosf"} taxaAdm={"20%"} valorMinimo={"12%"} />
            <Caixinha membros={"1/3"} tipoSeguro={"safosfoas sjsafdjosf"} taxaAdm={"20%"} valorMinimo={"12%"} />
            <Caixinha membros={"1/3"} tipoSeguro={"safosfoas sjsafdjosf"} taxaAdm={"20%"} valorMinimo={"12%"} />
            <Caixinha membros={"1/3"} tipoSeguro={"safosfoas sjsafdjosf"} taxaAdm={"20%"} valorMinimo={"12%"} />
            </div>

            <div className="fixed bottom-0 bg-[#151A20] w-full h-[150px] text-center">
                <div className="mx-10 my-5" >   <Button text='Entrar em Grupo' color='bg-[#02DE82] my-5' />
                <Button text='Solicitar novo Grupo' color='bg-[#0038AF] my-5' />
                
                </div>


            </div>



        </Layout2>



    )





}


export default Contratos