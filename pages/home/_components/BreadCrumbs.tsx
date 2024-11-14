import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import {ChevronRight} from 'lucide-react'
  export function Breadcrumbs({items}:{items:{link:string,name:string}[]}) {
    return (
      <Breadcrumb className="pt-12 pl-12">
        <BreadcrumbList>
        {items.map((p,i)=>
          <BreadcrumbItem>
          
          <BreadcrumbLink href={p.link}>{p.name}</BreadcrumbLink>
          <ChevronRight/>
        </BreadcrumbItem>
        
        )}
          

        </BreadcrumbList>
      </Breadcrumb>
    )
  }
  