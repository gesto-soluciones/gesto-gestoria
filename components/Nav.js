import { useEffect, useState } from "react"
import { RiVipDiamondLine, RiFacebookFill, RiInstagramLine } from "react-icons/ri"
import { FiMenu } from "react-icons/fi"
import { IoClose } from "react-icons/io5"
import Link from "next/link"
import { motion } from "framer-motion"

const Nav = () => {

    const [ navPos, setNavPos ] = useState("top")
    const [ menu, setMenu ] = useState(false)
    const variants = {
        open:{
            opacity:1, x: 0
        },
        closed: { 
            opacity:1, x: "100%" 
        }
    }

    const handleScroll = () => {
        if(window.scrollY >= 60){
            setNavPos("bellow")
        }else{
            setNavPos("top")
        }
    }
    
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
    },[])

    return ( 
        <>
            <div className={`flex items-center justify-between transition-all text-white fixed w-full px-10 pb-4 top-0 z-50 ${navPos === "top" ? "bg-transparent pt-6" : "bg-main pt-4"}`}>
                <Link href="/">
                    <div className="flex items-center hover:text-secondary transition-colors cursor-pointer">
                        <RiVipDiamondLine size={25}/>
                        <p className="font-heading font-medium text-xl ml-3">Gesto</p>
                    </div>
                </Link>
                <div className="md:hidden flex">
                    <button onClick={ () => setMenu(menu => !menu) } title="menu"> 
                        {
                            menu ? 
                            <IoClose size={25}/>
                            :
                            <FiMenu size={25}/>

                        }
                    </button>
                </div>
                <motion.div 
                    animate={ menu ? "open" : "closed" }
                    variants={ variants }
                    transition={ { duration: 0.5 } }    
                    className="md:hidden fixed bg-main font-sans text-white/80 w-full h-screen top-0 right-0 mt-14 pl-10"
                >
                    <div className="flex flex-col gap-y-2 pt-4">
                        <a
                            href="#services" 
                            onClick={ () => setMenu(menu => !menu)} 
                            className="text-white/80 hover:text-white cursor-pointer"
                        >
                            Servicios
                        </a>
                        <a
                            href="#details" 
                            onClick={ () => setMenu(menu => !menu)} 
                            className="text-white/80 hover:text-white cursor-pointer"
                        >
                            Detalles
                        </a>
                        <a
                            href="#testimonials" 
                            onClick={ () => setMenu(menu => !menu)} 
                            className="text-white/80 hover:text-white cursor-pointer"
                        >
                            Clientes
                        </a>
                        <a
                            href="#contact" 
                            onClick={ () => setMenu(menu => !menu)} 
                            className="text-white/80 hover:text-white cursor-pointer"
                        >
                            Contacto
                        </a>
                        <div className="flex gap-x-2">
                            <a className="rounded-full p-1 bg-secondary hover:bg-white hover:text-secondary transition-colors cursor-pointer"><RiFacebookFill size={15}/></a>
                            <a className="rounded-full p-1 bg-secondary hover:bg-white hover:text-secondary transition-colors cursor-pointer"><RiInstagramLine size={15}/></a>                               
                        </div>
                    </div>
                </motion.div>
                <div className="md:flex hidden font-sans gap-x-4 items-center">
                        <a
                            href="#services" 
                            onClick={ () => setMenu(menu => !menu)} 
                            className="text-white/80 hover:text-white cursor-pointer"
                        >
                            Servicios
                        </a>
                        <a
                            href="#details" 
                            onClick={ () => setMenu(menu => !menu)} 
                            className="text-white/80 hover:text-white cursor-pointer"
                        >
                            Detalles
                        </a>
                        <a
                            href="#testimonials" 
                            onClick={ () => setMenu(menu => !menu)} 
                            className="text-white/80 hover:text-white cursor-pointer"
                        >
                            Clientes
                        </a>
                        <a
                            href="#contact" 
                            onClick={ () => setMenu(menu => !menu)} 
                            className="text-white/80 hover:text-white cursor-pointer"
                        >
                            Contacto
                        </a>
                    <a className="rounded-full p-1 bg-secondary hover:bg-white hover:text-secondary transition-colors cursor-pointer"><RiFacebookFill size={15}/></a>
                    <a className="rounded-full p-1 bg-secondary hover:bg-white hover:text-secondary transition-colors cursor-pointer -ml-2"><RiInstagramLine size={15}/></a>
                </div>
            </div>
        </>
     );
}
 
export default Nav;