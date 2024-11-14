
import { getHomePromotions } from "@/app/admin/home/_service/HomePromotionsService";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HomePromotionItem from "@/model/Item";
import { ItemDto } from "../_dtos/ItemDto";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Item from "@/model/Item";
import Cookie from "js-cookie";



export default function HomeSection({items, className, gap, flag}:{flag:boolean, items:Array<ItemDto>, className:string, gap:string}){
    const [is, render] = useState(false);
    const router = useRouter();
    const handler = (item:Item) => {
        router.push('/'+item.link)
    }
    
    return (
        <div className={""+className}>
        <Card className={"grid grid-cols-3 gap-y-24  py-12 w-auto rounded-none outline-none justify-items-center"}>
            {items.map((p)=>
                
                p.show&&<a href='#' onClick={e=>handler(p.item)}><Card className={"transition hover:-translate-y-1.5 animate-fadeIn size-52 grid grid-cols-1 grid-rows-2 shadow-lg border-0 outline-none "}>
            <CardHeader className="justify-self-center">
                <img src={p.item.imageUrl} width={100} height={100} alt="product"/>
            </CardHeader>
            <CardHeader className="justify-self-center place-items-center">
                <CardTitle>{'R$ '+p.item.price}</CardTitle>
                <CardDescription>{p.item.name}</CardDescription>
            </CardHeader>
            </Card></a>)
                }

        </Card>
        </div>
    )
}