import { RiFacebookFill, RiInstagramLine, RiMailLine } from "react-icons/ri"

const Footer = () => {
    return ( 
        <>
            <section className="text-slate-800/80 w-full mt-32 pt-16 pb-4 bg-slate-100 text-white">
                <div className="flex w-full gap-4 justify-center">
                    <a href="#contact" target="_blank" className="rounded-full p-3 hover:bg-main hover:text-white bg-white text-main cursor-pointer transition-colors shadow-md">
                        <RiFacebookFill size={25}/>
                    </a>
                    <a href="#contact" target="_blank" className="rounded-full p-3 hover:bg-main hover:text-white bg-white text-main cursor-pointer transition-colors shadow-md">
                        <RiInstagramLine size={25}/>
                    </a>
                    <a href="mailto:gesto.solucionesok@gmail.com" className="rounded-full p-3 hover:bg-main hover:text-white bg-white text-main cursor-pointer transition-colors shadow-md">
                        <RiMailLine size={25}/>
                    </a>
                </div>
                <div>
                    <p className="text-sm font-sans w-full text-center mt-16 text-slate-800/60">Copyright © Gesto</p>
                    <p className="text-sm font-sans w-full text-center mt-2 text-slate-800/60">Website made by: Martín Planiscig</p>
                </div>
            </section>
        </>
     );
}
 
export default Footer;