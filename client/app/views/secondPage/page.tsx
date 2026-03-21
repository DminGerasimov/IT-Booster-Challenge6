'use client'
import { useRouter } from "next/navigation"

export default function SecondPage() {
    const router = useRouter()
    return (
        <>
           <div className="w-100 mx-25 my-10">       
                <h1>Why do we use it?</h1>
                It is a long established fact that a reader will be distracted
                 by the readable content of a page when looking at its layout. 
                 The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                 as opposed to using 'Content here, content here', making it look like readable English. 
                 Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
                 and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                 Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </div>
            <button 
                onClick={() => {router.push('/')}}
                className="p-4 py-1 mx-50 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >Home page</button>
        </>
    )
}
