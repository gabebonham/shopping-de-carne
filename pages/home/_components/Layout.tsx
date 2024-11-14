import Image from "next/image";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { MenuBar } from "./MenuBar";
import { FooterAcordeon } from "@/pages/home/_components/FooterAcordeon";
import FooterInfo from "./FooterInfo";





export default function Layout({children}:{children:React.ReactNode}){

    const contactInfo = [
        {
            title:'Contate-nos',
            link:'#'
        },
        {
            title:'Minha conta',
            link:'#'
        },
        {
            title:'Sobre nós',
            link:'#'
        }

    ]
    const manufacturerInfo = [
        {
            title:'Contate-nos',
            link:'#'
        },
        {
            title:'Minha conta',
            link:'#'
        },
        {
            title:'Sobre nós',
            link:'#'
        }

    ]
    const footerInfo = [manufacturerInfo, contactInfo]
    return <div>
        <header className="sticky top-0 z-50 bg-gray-200 shadow-md bg-red-500">
            <div className="p-2 h-24 flex flex-row">
            <div className="grid basis-1/12">
                {/* <Image alt="asdf" src='/logo.png' width='100' height='100' className="self-center justify-self-center"/> */}
                <h1 className="self-center justify-self-center">asdf</h1>
            </div>
            <div className="grid basis-8/12">
                <Input placeholder="Pesquisa..." className="w-96 self-center justify-self-center drop-shadow-md"/>
            </div>
            <div className="grid basis-3/12">
                <Button className="self-center justify-self-end drop-shadow-md">Login</Button>
            </div>
            </div>
            <MenuBar/>
        </header>
        {children}
        <footer className={`grid grid-cols-${footerInfo.length + 1} grid-rows-1 bg-red-500`}>
        <FooterAcordeon/>
        {footerInfo.map(j=><FooterInfo header={'Header'} items={j} className="flex flex-col self-center justify-self-center justify-items-end pr-8 items-start"/>)}
        </footer>
        </div>
    
}