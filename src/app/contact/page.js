import { useState, useEffect } from 'react'
export default function Contact() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    
    return (
        <>
            
            <h2 className="text-center text-3xl w-full">Get In Touch</h2>
            <p className="text-center margin-0 mx-auto w-2/3">
                lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem
                ipsumlorem ipsumlorem ipsumlorem ipsum ipsumlorem ipsumloremipsumloremipsumloremipsu
                mloremipsumloremipsumlorem
            </p>
            

            <div className="flex mt-16">
                <div className="md:w-3/4 border">
                    <div className="bg-white p-10 rounded-xl">
                        <h3 className="text-2xl py-2">Leave a massage</h3>
                        <div className="flex gap-6">
                            <div> 
                                <label>Name</label>
                                <input type="text" className="border my-input-text"/>
                            </div>
                            <div className="w-full">
                                <label>Email</label>
                                <input type="text" className="border my-input-text w-full"/>
                            </div>
                        </div>
                        <div className="w-full">
                            <label>Subject</label>
                            <input type="text" className="my-input-text w-full"/>
                        </div>
                        <div className="w-full">
                            <label>Message</label>
                            <textarea className="border my-input-text w-full"></textarea>
                        </div>
                        <div className="w-full py-2">
                            <button className="mx-1 h-9 items-center justify-center px-4 rounded-md bg-amber-500">
                                <label>Send Massage</label>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/3 border">Kanan</div>
            </div>
        </>
    );
  }