import { getProducts } from "./ProductsService";




async function getHomeBestSeller(){
    return (await getProducts()).filter(i=>i.isBestSeller)
}