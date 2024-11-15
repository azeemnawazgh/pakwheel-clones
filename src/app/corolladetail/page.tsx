import Link from "next/link"
export default function corolladetail(){
    return(
        <div className="justify-center items-center text-center ">
            <h1 className="justify-center items-center text-center font-bold text-4xl">Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs</h1>
            <div className="justify-items-center items-center align-middle">
            <img src="Corolla-X.png" alt="" />
            </div>

        <div>
            <h1 className="text-center font-bold text-blue-600 text-4xl">Features & Specs:</h1>
            <p className="text-center font-serif py-4">The 11th generation Corolla 2024 is the latest in Pakistan. It had its design reimagined with a futuristic exterior and more spacious interior. Its production started in 2013, and it went through two face-lifts, one in 2017 and the other in 2024. The latest 11th generation Toyota Corolla comes in six different variants. 

The 1.3L variants of the 11th generation Toyota Corolla were discontinued in 2019. Pakistan is one of the few countries where the 1.3L variant was introduced, which was a huge hit but IMC discontinued it and replaced it with Toyota Yaris. Meanwhile, Toyota Corolla received a face-lift in 2017 initially and then again in 2021. 

The 2017 upgrades included minor changes such as chrome addition to front and rear bumper along with seatbelt alert, auto-dimming rear view mirror and straightforward infotainment options. The 2024 modifications in Toyota Altis X 1.6 Special Edition only came as refreshers as there were no major changes introduced. Instead, a choice of beige and all black interior has been provided.
</p>
<button className="bg-blue-500 font-bold text-black px-4 text-2xl rounded-lg py-2 m-9 "><Link href="/thankyou">CHECK OUT</Link></button>
        </div>
        </div>
    )
};