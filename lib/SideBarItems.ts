import { ChartBarDecreasing, House, PackageSearch, ShoppingBasket } from "lucide-react";


const sideBarItems = [
    {
        title: 'Home',
        url: 'home',
        icon:  House
    },{
        title: 'Produtos',
        url: 'products',
        icon:  ShoppingBasket
    },{
        title: 'Categorias',
        url: 'categories',
        icon:  ChartBarDecreasing
    },{
        title: 'Franquia',
        url: 'company',
        icon:  PackageSearch
    },
]

function getSideBarItems(){
    return sideBarItems;
}

export {
    getSideBarItems
}