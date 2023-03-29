import React from 'react'

const contacts = [
    {
        "name": "Darted",
        "icon": "https://www.flaticon.com/svg/static/icons/svg/25/25231.svg",
        "link": "https://www.darted.com"
    },
    {
        "name": "Email",
        "icon": "https://www.flaticon.com/svg/static/icons/svg/732/732200.svg",
        "link": "mailto:darted@gmail.com"
    },
    {
        "name": "Twitter",
        "icon": "https://www.flaticon.com/svg/static/icons/svg/733/733579.svg",
        "link": "https://twitter.com/darted"
    },
]


export default function Contact() {
    return (
        <div className="">
            <div className="flex flex-col justify-center items-center h-screen">
                <div>
                    <h1 className="text-5xl font-bold text-white">Contact</h1>
                    <br></br>
                    
                    <h2 className="text-2xl font-bold text-white">Contact us for more information</h2>
                    <br></br>
                    <div className="grid grid-cols-3 gap-4">
                        {contacts.map((contact) => (
                            <div className="bg-slate-300 rounded-md p-6">
                                
                         </div>
                            ))}

                       
                    </div>
                </div>
            </div>                    
        </div>
    )
}
