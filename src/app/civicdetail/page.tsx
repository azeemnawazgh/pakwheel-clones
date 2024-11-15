import Link from "next/link"
export default function civicdetail(){
    return(
        <div className="justify-center items-center text-center ">
            <h1 className="justify-center items-center text-center font-bold text-4xl">Honda Civic 2024 Price in Pakistan, Images, Reviews & Specs</h1>
            <div className="justify-items-center items-center align-middle">
            <img src="civic.png" alt="" />
            </div>

        <div>
            <h1 className="text-center font-bold text-blue-600 text-4xl">Features & Specs:</h1>
            <p className="text-center font-serif py-4">The Honda Civic 2024 offers a range of comfortable and convenient features to enhance the driving experience. The Standard and Oriel variants come with an electric power steering wrapped in urethane, while the RS variant boasts a luxurious leather-wrapped steering wheel. All variants are equipped with a steering wheel that offers tilt and telescopic adjustment and convenient steering switches for easy control. Behind the steering wheel, you'll find a 7-inch TFT multi-information instrument display that provides essential vehicle information. The seats in the Civic are wrapped in high-grade fabric and offer height adjustment, ensuring optimal comfort for all occupants. The front and rear armrests come with cup holders, providing convenient storage for beverages. Additionally, the Civic offers power windows, power door locks, and interior lighting for added convenience. Other notable features include a front USB port, trunk lid lining, self-opening trunk, and trunk hinge cover. In terms of entertainment, the Standard and Oriel variants are equipped with a 7-inch MP5 touch screen and four speakers, while the RS variant boasts a larger 9-inch Android-based entertainment system with navigation. The RS variant's entertainment system supports a front camera, a dynamic rear camera, and a webcam for enhanced visibility and convenience. Finally, all variants of the Civic feature dual-zone automatic air conditioning with rear ventilation, ensuring a comfortable cabin environment for all passengers.


</p>
<button className="bg-blue-500 font-bold text-black px-4 text-2xl rounded-lg py-2 m-9 "><Link href="/thankyou">CHECK OUT</Link></button>
        </div>
        </div>
    )
};