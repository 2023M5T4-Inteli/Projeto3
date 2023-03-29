import Head from "next/head"

import React from "react";
import Image from "next/image";
import Logo from '../assets/logoCoover.svg'
import Setinha from '../assets/setinha.svg'
import { Main } from "next/document";

export const Layout2 = ({ children }: { children: React.ReactNode }) => {

    return (
        <main className="flex flex-col bg-[#151A20] text-white pt-4 flex-1 w-full min-h-screen items-center h-full">
            <div className="flex flex-row h-[80px] items-center text-black">
                <div className="absolute left-6">
                <Image
                    src={Setinha}
                    alt="My Image"
                    width={50}
                />
                </div>
                <div>
                <Image
                    src={Logo}
                    alt="My Image"
                    width={150}
                />
                 
                </div>
            </div>
            <hr className="bg-gradient-to-r from-black via-white to-black w-full mb-3 h-[2px]"/>

            {children}
        </main>
    )
}


export default Layout2;