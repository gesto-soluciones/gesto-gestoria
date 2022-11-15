import { useState, useEffect } from "react"
import Image from "next/image"
import { useFormik } from "formik"
import * as yup from "yup"

const contactSchema = yup.object().shape({
    name: yup.string().min(4,"Mínimo 4 caracteres.").max(30,"Máximo 30 caracteres.").required("Completa este campo."),
    email:yup.string().email("Email inválido.").required("Completa este campo."),
    message: yup.string().min(4,"Mínimo 4 caracteres.").max(600,"Máximo 600 caracteres.").required("Completa este campo."),
})

const Contact = () => {

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues:{
        name:"",
        email:"",
        message:""
    },
    onSubmit:(values)=>{
       alert("mensaje enviado")
    },
    validationSchema: contactSchema
    })

    return ( 
        <>
            <div className="relative ">
                <div className="absolute z-10 -bottom-32 -right-32 h-[20rem] w-[20rem] lg:h-[30rem] lg:w-[30rem]">
                    <Image src="/assets/mail.svg" alt="" layout="fill"/>
                </div>
                <form onSubmit={ handleSubmit } className="relative z-30 flex flex-col gap-y-2 w-11/12 lg:w-[50rem] mx-auto">
                    <input
                        className="border rounded-md p-3 w-full outline-none" placeholder="Nombre"
                        onChange={ handleChange } 
                        id="name" 
                        name="name" 
                        value={ values.name }
                    />
                    { touched.name && Boolean(errors.name) && <span className="ml-4 mb-1 -mt-1 text-sm text-red-600 w-full">{ errors.name }</span> }
                    <input
                        className="border rounded-md p-3 w-full outline-none" placeholder="Email"
                        onChange={ handleChange } 
                        id="email" 
                        name="email" 
                        value={ values.email }
                        type="email"
                    />
                    { touched.email && Boolean(errors.email) && <span className="ml-4 mb-1 -mt-1 text-sm text-red-600 w-full">{ errors.email }</span> }
                    <textarea 
                        rows="6" 
                        className="border rounded-md p-3 w-full outline-none" 
                        placeholder="Mensaje"
                        onChange={ handleChange } 
                        id="message" 
                        name="message" 
                        value={ values.message }
                    />
                    { touched.message && Boolean(errors.message) && <span className="ml-4 mb-1 -mt-1 text-sm text-red-600 w-full">{ errors.message }</span> }
                    <button type="submit" className="rounded-2xl mt-2 text-white bg-secondary hover:text-secondary border border-secondary hover:bg-transparent transition-colors py-2">Enviar</button>
                </form>
            </div>
        </>
     );
}
 
export default Contact;