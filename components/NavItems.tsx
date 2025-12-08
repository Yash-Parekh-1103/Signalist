//we used hook so we have to use 'use client' directive
'use client'

import {NAV_ITEMS} from "@/lib/constants";
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavItems = () => {

    //we use usePathname hook coming from next navigation
    const pathname = usePathname()

    const isActive = (path: string) => {

        if(path === "/") return pathname ==='/';

        return pathname.startsWith(path);


    }



    return (
       <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">

           {
               NAV_ITEMS.map(
                   ({href , label}) => (

                       <li key={href}>
                           <Link href={href} className={`hover:text-yellow-500 transition-colors ${
                               
                               // if link is active
                               isActive(href) ? 'text-gray-500' : ''
                           }`}>
                               {label}
                           </Link>
                       </li>
                   ))}

       </ul>
    )
}
export default NavItems
