import { getProductsByCategory } from "@/app/admin/home/_service/ProductsService";
import Item from "@/model/Item";
import { Breadcrumbs } from "@/pages/home/_components/BreadCrumbs";
import HomeSection from "@/pages/home/_components/HomeSection";
import Layout from "@/pages/home/_components/Layout";
import { ItemDto } from "@/pages/home/_dtos/ItemDto";



export async function getServerSideProps({ params }:{params:{category:string}}) {
    const products = await getProductsByCategory(params.category)as Item[];
    
    const serializedProducts = products.map(product=>{
        const serializedProductDto = {
            item:{
            id: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
            description: product.description,
            imageUrl: product.imageUrl
        },
        show:true
    };
        return serializedProductDto;
    })
    console.log(serializedProducts)
    
    return {
        props:{
            products:serializedProducts,
            category:params.category
        },
            
    };
};

export default function CategoryPage({ products, category }:{products:ItemDto[], category:string}){
    const breadCrumbs = [
        {
            name:'Home',
            link:'/home'
        },
        {
            name:'Produtos',
            link:'/products'
        }
        
    ]
    return <Layout>
        <Breadcrumbs items={breadCrumbs}/>
        <div className="w-7/12 place-self-center">
        
        <h1 className="place-self-center m-8 text-3xl">{category}</h1>
        <HomeSection flag={true} gap={'20'} items={products} className="shadow-sm"/>
        </div>
    </Layout>
}