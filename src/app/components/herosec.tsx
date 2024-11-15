import Link from "next/link"
export default function herosec(){
    return(
        <div>
        <div className="my-10 mx-32 p-10 border-2 border-gray-400">
        <h1 className="text-4xl font-semibold text-center py-4">Sell Your Car On PakWheels and Get The Best Price</h1>
        <div className="mx-auto flex border-gray-400 border-r-1">
         <div className="text-xl mx-auto flex flex-col gap-5">
        <h2 className="text-3xl font-semibold text-black">Post Your Ad On PakWheel</h2>
        <p>✔️ Post Your Ad For Free In 3 Easy Step</p>
        <p>✔️ Get Genuine Offers From Verified Buyers</p>
        <p>✔️ Sell Your Car Fast At The Best Price</p>
        <button className="border-red-800 bg-black px-4 py-2 rounded-lg text-white w-48"><Link href="/detail">Post</Link></button>
        </div>
        
        <div className="mx-auto border-red-600 border-r-2"></div>
        <div className="text-xl flex flex-col gap-5">
              <h2 className="text-3xl font-semibold text-black">Try PakWheels Sell It For Me</h2>
              <p>✔️ Dedicated Sales Expert To Sell Your Car</p>
              <p>✔️ We Bargain For You And Share The Best Offer</p>
              <p>✔️ We Ensured Safe And Secure Transaction</p>
              <button className="bg-red-800 px-4 py-2 rounded-lg text-white w-48"><Link href="/detail">Registor Your Car</Link></button>
        </div>
        </div>
        </div>
        </div>
    )
}