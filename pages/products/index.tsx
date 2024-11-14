import { getProducts } from "@/app/admin/home/_service/ProductsService";
import { useRouter } from "next/router";
import HomeSection from "../home/_components/HomeSection";
import Layout from "../home/_components/Layout";
import { ItemDto } from "../home/_dtos/ItemDto";
import { CategoryEnum } from "@/app/_enums/Enums";
import Item from "@/model/Item";
import { useEffect } from "react";
import { Breadcrumbs } from "../home/_components/BreadCrumbs";


export async function getServerSideProps({ query }) {
    const category:string = query.category || '' as string;
    const productss:Item[] = await getProducts() as Item[];
    
    const serializedProducts:ItemDto[] = productss.map((p)=>{return p.mapToDto(true)as ItemDto}) as ItemDto[]
    console.log(serializedProducts)
    return {
        props:{
            category,
            products:serializedProducts
        },
            
    };
};




export default function ProductsPage({ category, products }: {category:string, products:ItemDto[]}) {
    const router = useRouter();

    // Redirect to the correct category page only if category is valid
    useEffect(() => {
        if (category && Object.values(CategoryEnum).map(e=>e.toString()).includes(category)) {
            // Redirect to a default route if the category doesn't exist
            router.push("/products/"+category);  // Or wherever you want to redirect
        }
    }, [category, router]);

    const breadCrumbs = [
        {
            name:'Home',
            link:'/home'
        }
    ]

    return (
        <Layout>
            <Breadcrumbs items={breadCrumbs}/>
            <h1 className="justify-self-center text-3xl m-8">Todos os Produtos</h1>
            <div className="place-self-center w-7/12">
            <HomeSection 
                className="shadow-sm"
                flag={true}
                gap={"20"}
                items={products}
            />
            </div>
        </Layout>
    );
}