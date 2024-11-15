import Link from "next/link";
export default function Navbar(){
    return(
        <ul className="flex gap-20 h-13 bg-black text-white text-center py-2">
            <img className="h-10 w-20" src="https://static.pakwheels.com/2012/12/pakwheels-logo.png" alt="" />
            <li> <Link href="/">New Car</Link></li>
            <li><Link href="/">Used Car</Link></li>
            <li><Link href="/">Auto Store</Link></li>
            <li><Link href="/">Bike</Link></li>
            <li><Link href="/">Video</Link></li>
            <li><Link href="/">Foums</Link></li>
            <li><Link href="/">Blog</Link></li>
            <li><Link href="/">More</Link></li>

            <button className=" rounded-md px-5 bg-red-700 text-white">Post An Ad</button>

        </ul>
    )
};