import Head from 'next/head'
import Image from 'next/image'
import { RiVipDiamondLine } from "react-icons/ri"
import { IoBriefcase } from "react-icons/io5"
import Nav from '../components/Nav'
import Stars from "../components/RatingStars"
import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {

  const [ width, setWidth ] = useState(0)
  const carousel = useRef()

  useEffect(()=>{
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  },[])

  return (
    <div>
      <Head>
        <title>Gesto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav/>
        <section className='relative overflow-hidden py-32 w-full h-[55rem] bg-main text-white'>
          <div className="ocean">
            <div className="wave"></div>
            <div className="wave"></div>
          </div> 
          <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-20 mt-10 md:mt-16'>
            <div className='text-center md:text-left w-fit sm:w-[28rem] px-5 lg:px-0'>
              <h1 className='text-4xl font-heading font-bold'>En <span className='cursor-pointer hover:text-secondary font-medium'>Gesto</span> te asesoramos y gestionamos tus trámites por vos.</h1>
              <p className='mt-4 font-sans text-lg'>Sin complicaciones, fácil y rápido. Enterate cómo:</p>
                <a href="#services">
                  <button className='mt-4 border border-secondary rounded-3xl py-3 px-8 font-sans bg-secondary hover:bg-transparent hover:text-secondary transition-all'>Servicios</button>
                </a>
            </div>
            <div className="-mt-10 hidden lg:block">
              <RiVipDiamondLine stroke={2} size={400} />
            </div>
          </div>
        </section>
        <section className='py-28 text-slate-800/80 w-11/12 lg:w-[40vw] text-center mx-auto'>
          <span id="about" className='relative top-[-250px]'></span>
          <h2 className='text-2xl mb-4 font-semibold font-heading text-main'>Expertos en gestiones administrativas en diversos trámites.</h2>
          <p className='font-sans text-lg mb-4'>&quot;Actuamos con responsabilidad, compromiso, seriedad y sobre todo con  amplios conocimientos en los procedimientos para agilizar los trámites, brindando asesoramiento técnico a las personas.&quot;</p>
          <div className='w-full flex justify-center mb-2'>
            <div className='rounded-full border-[3px] border-main w-fit p-4'>
              <RiVipDiamondLine className='text-main' size={35} />
            </div>
          </div>
            <p className='font-sans text-lg font-semibold'>Gesto Team</p>
        </section>
        <section className='mb-32 w-11/12 md:w-[30rem] lg:w-[60rem] xl:w-[75vw] mx-auto text-slate-800/80'>
          <span id="services" className='relative top-[-250px]'></span>
          <div className='w-full text-center my-10'>
            <h3 className='text-secondary font-semibold font-heading'>SERVICIOS</h3>
            <h2 className='text-slate-800/80 font-semibold font-heading text-xl'>Qué ofrecemos:</h2>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <div className='text-slate-800/90 flex flex-col items-center gap-y-4 h-[30rem] bg-slate-50 shadow-lg p-12'>
              <div className='rounded-full border-2 border-secondary p-3 mt-4'>
                <IoBriefcase className='text-main' size={40}/>
              </div>
              <h3 className='font-heading text-lg font-semibold'>Statewide Services</h3>
              <div>
                <p className='font-sans'>
                  Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.
                </p>
              </div>
              <ul className='w-full font-sans list-disc ml-8'>
                <li className='text-main'><div className='text-slate-800/80'>Unlimited Bandwidth</div></li>
                <li className='text-main'><div className='text-slate-800/80'>Encrypted Connection</div></li>
                <li className='text-main'><div className='text-slate-800/80'>Yes Traffic Logs</div></li>
              </ul>
              <div className='w-full h-full flex flex-col-reverse'>
                <a href="#contact">
                  <button className='w-full py-1 rounded-xl shadow-lg border text-main border-main hover:bg-main transition-colors hover:text-white'>Contáctanos</button>
                </a>
              </div>
            </div>
            <div className='text-slate-800/90 flex flex-col items-center gap-y-4 h-[30rem] bg-slate-50 shadow-lg p-12'>
              <div className='rounded-full border-2 border-secondary p-3 mt-4'>
                <IoBriefcase className='text-main' size={40}/>
              </div>
              <h3 className='font-heading text-lg font-semibold'>Statewide Services</h3>
              <div>
                <p className='font-sans'>
                  Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.
                </p>
              </div>
              <ul className='w-full font-sans list-disc ml-8'>
                <li className='text-main'><div className='text-slate-800/80'>Unlimited Bandwidth</div></li>
                <li className='text-main'><div className='text-slate-800/80'>Encrypted Connection</div></li>
                <li className='text-main'><div className='text-slate-800/80'>Yes Traffic Logs</div></li>
              </ul>
              <div className='w-full h-full flex flex-col-reverse'>
                <a href="#contact">
                  <button className='w-full py-1 rounded-xl shadow-lg bg-secondary hover:bg-[#d6c50a] transition-all text-white hover:mb-1'>Contáctanos</button>
                </a>
              </div>
            </div>
            <div className='text-slate-800/90 flex flex-col items-center gap-y-4 h-[30rem] bg-slate-50 shadow-lg p-12'>
              <div className='rounded-full border-2 border-secondary p-3 mt-4'>
                <IoBriefcase className='text-main' size={40}/>
              </div>
              <h3 className='font-heading text-lg font-semibold'>Statewide Services</h3>
              <div>
                <p className='font-sans'>
                  Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.
                </p>
              </div>
              <ul className='w-full font-sans list-disc ml-8'>
                <li className='text-main'><div className='text-slate-800/80'>Unlimited Bandwidth</div></li>
                <li className='text-main'><div className='text-slate-800/80'>Encrypted Connection</div></li>
                <li className='text-main'><div className='text-slate-800/80'>Yes Traffic Logs</div></li>
              </ul>
              <div className='w-full h-full flex flex-col-reverse'>
                <a href="#contact">
                  <button className='w-full py-1 rounded-xl shadow-lg border text-main border-main hover:bg-main transition-colors hover:text-white'>Contáctanos</button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className='w-11/12 lg:w-[60rem] xl:w-[75rem] mx-auto text-slate-800/80'>
          <span id="details" className='relative top-[-250px]'></span>
          <div className='w-full text-center mb-16 mt-10'>
            <h3 className='text-secondary font-semibold font-heading'>Detalles</h3>
            <h2 className='text-slate-800/80 font-semibold font-heading text-xl'>¿Por qué Gesto?</h2>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='h-[20rem] w-full relative p-10'>
              <Image src="/assets/computer.svg" alt="" layout='fill'/>
            </div>
            <div className='p-14 flex flex-col items-center justify-center'>
              <h2 className='w-full mb-4 text-2xl font-heading text-slate-800/90 font-semibold'>Easy to download</h2>
              <p className='font-sans'>It takes no more than 10 minutes to download the framework, set it up and start working on your project. You ll see impressive results in a couple of hours</p>
              <ul className='w-full flex flex-col gap-2 font-sans mt-4'>
                <li><span className='font-semibold'>For startups</span> which have less data and operations</li>
                <li><span className='font-semibold'>For big companies</span> with a lot of data and daily inputs</li>
              </ul>
            </div>
          </div>
        </section>
        <section className='my-8 lg:my-16 grid grid-cols-1 lg:grid-cols-2 w-11/12 lg:w-[60rem] xl:w-[75rem] mx-auto text-slate-800/80'>
          <div className='p-14 flex flex-col items-center justify-center'>
            <h2 className='w-full mb-4 text-2xl font-heading text-slate-800/90 font-semibold'>Easy to download</h2>
            <p className='font-sans'>It takes no more than 10 minutes to download the framework, set it up and start working on your project. You ll see impressive results in a couple of hours</p>
            <ul className='w-full flex flex-col gap-2 font-sans mt-4'>
              <li><span className='font-semibold'>For startups</span> which have less data and operations</li>
              <li><span className='font-semibold'>For big companies</span> with a lot of data and daily inputs</li>
            </ul>
          </div>
          <div className='h-[20rem] w-full relative p-10'>
            <Image alt="" src="/assets/cloud.svg" layout='fill'/>
          </div>
        </section>
        <section className="mt-32 mb-32 px-5 lg:px-16 xl:px-40 text-slate-800/90">
          <span id="testimonials" className='relative top-[-250px]'></span>
          <div className='w-full text-center my-10'>
            <h3 className='text-secondary font-semibold font-heading'>TESTIMONIOS</h3>
            <h2 className='text-slate-800/80 font-semibold font-heading text-xl'>Clientes contentos</h2>
          </div>
            <motion.div 
                ref={ carousel } 
                whileTap={{ cursor:"grabbing" }}
                className="cursor-grab overflow-hidden w-full"
            >
                <motion.div 
                    className="flex lg:mt-10 p-6 gap-x-16"
                    dragConstraints={{ right:0, left:-width }}
                    drag="x"
                >
                    <motion.div className="flex flex-col gap-y-3 rounded-md shadow-lg p-8 h-full w-[25rem] min-w-[25rem] lg:w-[35rem] lg:min-w-[35rem] text-slate-800/90"> 
                        <h2 className="font-heading font-semibold text-2xl ">David H.</h2>
                        <Stars filled={4}/>
                        <p className="font-medium font-sans">Who else offers a 30 Day Trial? The answer is no one else does. Not all supplements work for everyone, so allowing a trial period is a good business practice.</p>
                    </motion.div>
                    <motion.div className="flex flex-col gap-y-3 rounded-md shadow-lg p-8 h-full w-[25rem] min-w-[25rem] lg:w-[35rem] lg:min-w-[35rem] text-slate-800/90"> 
                        <h2 className="font-heading font-semibold text-2xl ">David H.</h2>
                        <Stars filled={4}/>
                        <p className="font-medium font-sans">Who else offers a 30 Day Trial? The answer is no one else does. Not all supplements work for everyone, so allowing a trial period is a good business practice.</p>
                    </motion.div>
                    <motion.div className="flex flex-col gap-y-3 rounded-md shadow-lg p-8 h-full w-[25rem] min-w-[25rem] lg:w-[35rem] lg:min-w-[35rem] text-slate-800/90"> 
                        <h2 className="font-heading font-semibold text-2xl ">David H.</h2>
                        <Stars filled={4}/>
                        <p className="font-medium font-sans">Who else offers a 30 Day Trial? The answer is no one else does. Not all supplements work for everyone, so allowing a trial period is a good business practice.</p>
                    </motion.div>
                    <motion.div className="flex flex-col gap-y-3 rounded-md shadow-lg p-8 h-full w-[25rem] min-w-[25rem] lg:w-[35rem] lg:min-w-[35rem] text-slate-800/90"> 
                        <h2 className="font-heading font-semibold text-2xl ">David H.</h2>
                        <Stars filled={4}/>
                        <p className="font-medium font-sans">Who else offers a 30 Day Trial? The answer is no one else does. Not all supplements work for everyone, so allowing a trial period is a good business practice.</p>
                    </motion.div>
                    <motion.div className="flex flex-col gap-y-3 rounded-md shadow-lg p-8 h-full w-[25rem] min-w-[25rem] lg:w-[35rem] lg:min-w-[35rem] text-slate-800/90"> 
                        <h2 className="font-heading font-semibold text-2xl ">David H.</h2>
                        <Stars filled={4}/>
                        <p className="font-medium font-sans">Who else offers a 30 Day Trial? The answer is no one else does. Not all supplements work for everyone, so allowing a trial period is a good business practice.</p>
                    </motion.div>
                    <motion.div className="flex flex-col gap-y-3 rounded-md shadow-lg p-8 h-full w-[25rem] min-w-[25rem] lg:w-[35rem] lg:min-w-[35rem] text-slate-800/90"> 
                        <h2 className="font-heading font-semibold text-2xl ">David H.</h2>
                        <Stars filled={4}/>
                        <p className="font-medium font-sans">Who else offers a 30 Day Trial? The answer is no one else does. Not all supplements work for everyone, so allowing a trial period is a good business practice.</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
        <section className='my-8 lg:my-16 w-11/12 lg:w-[60rem] xl:w-[75rem] mx-auto text-slate-800/80'>
          <span id="contact" className='relative top-[-250px]'></span>
          <div className='w-full text-center my-10'>
            <h3 className='text-secondary font-semibold font-heading'>CONTACTO</h3>
            <h2 className='text-slate-800/80 font-semibold font-heading text-xl'>Resolvamos ese problema</h2>
          </div>
          <Contact />    
        </section>
        <Footer/>
      </main>
    </div>
  )
}