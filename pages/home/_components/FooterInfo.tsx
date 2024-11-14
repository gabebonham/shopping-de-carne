import Link from "next/link";




export default function FooterInfo({header, items, className}:{header:string,items:{title:string, link:string}[], className:string}){
    return <div className={""+className}>
        <h1 className='text-bold text-lg'>{header}</h1>
        {items.map((i)=><Link className="text-sm" href={i.link}>
          {i.title}
        </Link>)}
    </div>
}