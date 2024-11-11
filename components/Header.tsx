import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { MenuBar } from "./MenuBar";





export default function Header(){
    return (
        <header className="bg-red-400">
            <div className="p-2 h-28 flex flex-row">
            <div className="grid basis-3/12">
                {/* <Image alt="asdf" src='/shopping.png' width='100' height='100' className="self-center justify-self-center"/> */}
                <h1 className="self-center justify-self-center">asdf</h1>
            </div>
            <div className="grid basis-5/12">
                <Input placeholder="Pesquisa..." className="w-96 self-center justify-self-start drop-shadow-md"/>
            </div>
            <div className="grid basis-3/12">
                <Button className="self-center justify-self-end drop-shadow-md">Login</Button>
            </div>
            </div>
            <MenuBar/>
        </header>
    )
}