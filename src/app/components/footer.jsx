import Link from "next/link"
export default function Footer(){
    return(
        <>
            <footer className=" font-[Oswald] text-lg text-center p-4">
                
                <div className=" grid grid-cols-3 my-2 mx-auto w-fit ">
                    <Link className=" p-2 rounded-md transition-colors hover:bg-blue-100 hover:text-blue-800" href="https://dev-portfolio-denito37.vercel.app" target="_blank" rel="noopener noreferrer">
                        Portfolio   
                    </Link>
                    <Link className=" p-2 rounded-md transition-colors hover:bg-blue-100 hover:text-blue-800" href="https://github.com/Denito37" target="_blank" rel="noopener noreferrer">
                        Github
                    </Link>
                    <Link className=" p-2 rounded-md transition-colors hover:bg-blue-100 hover:text-blue-800" href="https://www.linkedin.com/in/dennes-lopez-99907618a/" target="_blank" rel="noopener noreferrer">
                        Linkedin
                    </Link>
                </div>
            </footer>
        </>
    )
}