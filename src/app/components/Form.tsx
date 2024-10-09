'use client'

import { useState } from "react"
import { getFormattedDate, names, names1, names2 } from "../lib/utils"

  
export default function Form() {

    const [placeholder, setPlaceholder] = useState({
        author: 'Kyrylo Budanov',
        creationDate: getFormattedDate()
    })

    return (
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px] p-4 rounded text-gray-400 bg-gray-900">
                <h1 className="text-2xl font-extrabold text-white my-5">Create order</h1>
                <form>
                    <div className="mb-5">
                        <label htmlFor="title" className="mb-3 block text-base font-medium text-gray-400">
                            Title
                        </label>
                        <input type="text" name="title" id="title" placeholder="Title"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" disabled />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="author" className="mb-3 block text-base font-medium text-gray-400">
                            Author
                        </label>
                        <input type="text" name="author" id="author" placeholder="Author" defaultValue={placeholder.author}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" disabled />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="creation-date" className="mb-3 block text-base font-medium text-gray-400">
                            Creation Date
                        </label>
                        <input type="datetime-local" name="date" id="date" defaultValue={placeholder.creationDate}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="enterprise" className="mb-3 block text-base font-medium text-gray-400">
                        Enterprise
                        </label>
                        <input type="text" name="enterprise" id="enterprise" placeholder="Search"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="object" className="mb-3 block text-base font-medium text-gray-400">
                        Object
                        </label>
                        <input type="text" name="object" id="object" placeholder="Search"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="accession" className="mb-3 block text-base font-medium text-gray-400">
                        Accession
                        </label>
                        <input type="text" name="accession" id="accession" placeholder="Search"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="order" className="mb-3 block text-base font-medium text-gray-400">
                        Order
                        </label>
                        <input type="text" name="order" id="order" placeholder="Write order"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="should-acquainted" className="mb-3 block text-base font-medium text-gray-400">
                        Should get acquainted
                        </label>
                        <input type="text" name="should-acquainted" id="should-acquainted" placeholder="Find workers"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div className="mb-5 p-2 rounded-md border-gray-400 border-2">
                        <label htmlFor="acquainted-should" className="mb-3 block text-base font-medium text-gray-400">
                        Should get acquainted
                        </label>
                        <div id="acquainted-should" className="flex flex-row space-x-2"> 
                            {names.map(name=><span className="px-2 py-1 bg-orange-800 text-white rounded-md">{name}</span>)}
                        </div>
                    </div>
                    <div className="mb-5 p-2 rounded-md border-gray-400 border-2">
                        <label htmlFor="acquainted-active" className="mb-3 block text-base font-medium text-gray-400">
                        Acquainted
                        </label>
                        <div id="acquainted-active" className="flex flex-row space-x-2"> 
                            {names1.map(name=><span className="px-2 py-1 bg-green-800 text-white rounded-md">{name}</span>)}
                        </div>
                    </div>
                    <div className="mb-5 p-2 rounded-md border-gray-400 border-2">
                        <label htmlFor="acquainted-declined" className="mb-3 block text-base font-medium text-gray-400">
                        Acquainted with decline
                        </label>
                        <div id="acquainted-declined" className="flex flex-row space-x-2"> 
                            {names2.map(name=><span className="px-2 py-1 bg-red-800 text-white rounded-md">{name}</span>)}
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="status" className="mb-3 block text-base font-medium text-gray-400">
                            Status
                        </label>
                        <select name="status" id="status"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                            <option value="active">Active</option>
                            <option value="pending">Pending</option>
                            <option value="declined">Declined</option>
                        </select>
                    </div>

                    <div>
                        <button
                            className="hover:shadow-form w-full rounded-md bg-gray-800 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}