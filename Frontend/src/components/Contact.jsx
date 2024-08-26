import React from 'react'
import Navbar from './Navbar'

export default function Contact() {
  return (
    <>
        <Navbar/>
        <div className="bg-slate-500">
            <div className="flex flex-col h-screen justify-center items-center">
                <h1 className="relative mr-56 text-lg font-bold">Contact Us</h1>
                <div className="mt-4 space-y-2">
                        <span>Name</span>
                        <br/>
                        <input type="name" placeholder="Enter your name" className="w-80 px-3 py-1 border rounded-md outline-none" />
                        <br/>
                        
                    </div>
                    <div className="mt-4 space-y-2">
                        <span>Email</span>
                        <br/>
                        <input type="email" placeholder="Enter your email" className="w-80 px-3 py-1 border rounded-md outline-none" />
                        <br/>
                    </div>
                    <div className="mt-4 space-y-2">
                        <span>Message</span>
                        <br/>
                        <textarea placeholder="Type your message" rows={4} className="w-80 px-3 py-1 border rounded-md outline-none" />
                    </div>
                    <div className="relative mr-60 mt-3">
                        <button className="bg-blue-600 p-2 rounded-md">Submit</button>
                    </div>
                </div>
        </div>
    </>
  )
}
