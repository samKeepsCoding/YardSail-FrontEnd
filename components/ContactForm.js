import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ContactForm = () => {

    const form = useRef()
    const notify = () => {
        toast.success('Message Sent!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_4n7w3q9','template_abncotf', form.current, 'WTTbeR4Gh5yulGH7H')
        .then((res) => {
            console.log(res.text)
            notify()
        }, (error) => {
            console.log(error.text)
        })

        e.target.reset()
    }

    
  return (
    <>
        <div className='flex justify-center items-center w-full px-3 mb-8'>
            <div className='flex flex-col justify-center w-[42rem]'>
                <h3>SEND US A MESSAGE</h3>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col text-sm font-bold text-[#444444] mt-4'>
                    <label for="title">Full Name <i className='text-red-500'>*</i></label>
                    <input type="text" name="user_name" required className='border-2 hover:border-black rounded-sm font-medium px-3 py-2 mt-2 mb-2 focus:ring-0' />

                    <label for="Email">Email Address <i className='text-red-500'>*</i></label>
                    <input type="text" name="user_email" required className='border-2 hover:border-black rounded-sm font-medium px-3 py-2 mt-2 mb-2 focus:ring-0' />

                    <label for="title">Subject<i className='text-red-500'>*</i></label>
                    <input type="text" name="user_subject" required className='border-2 hover:border-black rounded-sm font-medium px-3 py-2 mt-2 mb-2 focus:ring-0' />

                    <label for='message'>
                        Message
                        <i className='text-red-500'>*</i>
                    </label>
                    <textarea name='message' rows={6} className='border-2 p-3 hover:border-black mt-2 mb-2'>
                    </textarea>
                    <button type='submit' className='w-full rounded-md py-3 bg-black hover:bg-yellow-500 text-white'>Submit</button>

                    
                </form>
            </div>
        </div>

        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </>
  )
}

export default ContactForm