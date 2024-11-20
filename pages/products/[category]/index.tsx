import { getBranches } from "@/app/admin/home/_service/CompanyService";
import { getNavItems } from "@/app/admin/home/_service/MenuNavService";
import { getProductsByCategory } from "@/app/admin/home/_service/ProductsService";
import Branch from "@/model/BranchModel";
import Item from "@/model/Item";
import { MenuNavItem } from "@/model/MenuNavItem";
import { Breadcrumbs } from "@/pages/home/_components/BreadCrumbs";
import HomeSection from "@/pages/home/_components/HomeSection";
import Layout from "@/pages/home/_components/LayoutTemplate";
import { ItemDto } from "@/pages/home/_dtos/ItemDto";



export async function getServerSideProps({ params }:{params:{category:string}}) {
    const products = await getProductsByCategory(params.category)as Item[];
    const branches = (await getBranches()).map(b=>({id:b.id,city:b.city}))
    const items = (await getNavItems()).map(i=>({title:i.title,link:i.link, subItems:[], id:i.id}));
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
            category:params.category,
            branches,
            items
        },
            
    };
};


export default function CategoryPage({items, products, category, branches }:{items:MenuNavItem[], branches:Branch[],products:ItemDto[], category:string}){
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
    return <Layout items={items} newBranches={branches}>
        <Breadcrumbs items={breadCrumbs}/>
        <div className="w-7/12 place-self-center">
        
        <h1 className="place-self-center m-8 text-3xl">{category}</h1>
        <HomeSection flag={true} gap={'20'} items={products} className="shadow-sm"/>
        </div>
    </Layout>
}