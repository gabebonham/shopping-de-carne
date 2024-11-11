import { CarouselPlugin } from "./_components/Caroussel";
import Header from "../../components/Header";
import { BreadcrumbDemo } from "@/components/BreadCrumbs";




export default function Home(){
    
    return (
        <div className="w-full">
            <Header/>
            <CarouselPlugin/>
            <BreadcrumbDemo/>
        </div>
    )
}