
import {getProductByIdAndCategory } from "@/app/admin/home/_service/ProductsService";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Item from "@/model/Item";
import { Breadcrumbs } from "@/pages/home/_components/BreadCrumbs";
import Layout from "@/pages/home/_components/Layout";
import cookies from "js-cookie";
import { useEffect } from "react";
import { GetServerSideProps } from "next";


export async function getServerSideProps({ params }:{params:{id:string, category:string}}) {
    const product = await getProductByIdAndCategory(params.id, params.category)as Item;
    const serializedProduct = {
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        description: product.description,
        imageUrl: product.imageUrl
    };
    console.log(product)
    return {
        props:{
            product:serializedProduct,
        },
            
    };
};



export default function ProductPage({product}){

    const breadCrumbs = [
        {
            name:'Home',
            link:'/home'
        },
        {
            name:'Produtos',
            link:'/products'
        },
        {
            name:product.category,
            link:'/products/'+product.category
        }
    ]
    return <>
        <Layout>
            <Breadcrumbs items={breadCrumbs}/>
            <Card className="grid grid-cols-2 pt-20 pb-48">
                <CardHeader className="justify-self-end">
                    <img className='rounded-lg justify-self-center outline outline-gray-300' src={product.imageUrl} alt="product" width={300} height={300}/>
                </CardHeader>
                <CardContent className="p-8">
                <CardTitle >
                        <p className="pl-24 pb-8">{product.name}</p>
                        <CardDescription className="text-2xl">
                            {product.price}
                        </CardDescription>
                    </CardTitle>
                    <CardDescription className="w-1/2">
                        {product.description}
                    </CardDescription>
                    <CardFooter className="h-full">
                    <Button className="">Comprar</Button>
                </CardFooter>
                </CardContent>
                
            </Card>
        </Layout>
    </>
}