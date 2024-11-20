import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Sidebar from "./SideBar";

export default function SideBarComponent({children}: {children:React.ReactNode}) {
  return (
    <SidebarProvider>
      <Sidebar/>
      <SidebarTrigger />
      
      <div className="ml-24 mr-24 mt-24">
        
        {children}
        </div>
    </SidebarProvider>
  );
}
