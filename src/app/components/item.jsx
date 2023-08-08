import Image from "next/image"
export default function Item({ data }){
    return(
        <div className=" bg-white p-4 m-4 max-w-xs rounded-lg grid gap-4 transition-colors border-white hover:border-slate-400 border-2 hover:border-2">
            <Image className=" mx-auto" src={data.image} alt={data.title}  width={100} height={100} />
            <h2 className=" font-semibold text-xl">
                {data.title}
            </h2>
            <p className=" text-sm text-slate-600 max-h-40 overflow-clip">
                {data.description}
            </p>
            <p className=" font-bold text-xl">
                ${data.price}
            </p>
        </div>
    )
}