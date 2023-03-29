import Head from "next/head"

import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import React from "react";
import Image from "next/image";
import Logo from '../assets/logoCoover.svg'
import Setinha from '../assets/setinha.svg'

export const Layout = ({
    title,
    rota,
    showImage,
    showSeta,
    navbar = true,
    footer = true,
    children
}: {
    rota?: string
    title?: string,
    showImage?: boolean,
    navbar?: boolean,
    footer?: boolean,
    children: React.ReactNode
    showSeta?: boolean,
}) => {
    let classe2 = "pt-10"
    const pt = '10';
    if ( showSeta == false){
        classe2 = "pt-10"
    }
    else {
        classe2 = "pt-2"
    }


    const classe1 = "bg-[#151A20]"
    const novaClasse = `${classe1} + ${classe2}`;


    return (
        <div className={novaClasse}>
             {showSeta && (
                <div className="justify-start items-start w-full px-4">
                    <a href={rota}>
                          <Image
                          src={Setinha}
                          alt="My Image"
                          width={50}
                          
                        />
                    </a>
                </div>
            )}
              
            <main className={'flex flex-col bg-[#151A20] text-white pt-${pt} flex-1 w-full min-h-screen pt-1 items-center h-full'}>

         
            {showImage && (
                          <Image
                          src={Logo}
                          alt="My Image"
                          width={220}
                          
                          
                        />
            )}

                {children}


            </main>
        </div>
    )
}