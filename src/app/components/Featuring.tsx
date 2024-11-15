import Link from "next/link"
export default function Featuring(){
    return(
        <div>
            <h1 className="text-black text-left font-bold">Featured New Car</h1>

            <div>
               <li> Popular</li>
               <li> Upcoming</li>
               <li>New Launch</li>
                </div>
            

            <div className="flex justify-center items-center">
            <h1 className="text-blue-500 font-medium"></h1>
             <div>
            <img src="civic.png" alt="" />
            <button className="text-blue-500 font-medium text-balance"><Link href="/civicdetail">Civic Honda</Link></button>
            <h1 className="text-blue-500 font-medium">58 Lac Rupees</h1>
             </div>
            
            
            

            <div>
            <img src="Corolla-X.png" alt="" />
            <button className="text-blue-500 font-medium"><Link href="/corolladetail">Corolla-X</Link></button>
            <h1 className="text-blue-500 font-medium">30 Lac Rupees</h1>
            </div>
            
            <div>
            <img src="Honda_City.png" alt="" />
            <button className="text-blue-500 font-medium"><Link href="/citydetail">Honda City</Link></button>
            <h1 className="text-blue-500 font-medium">40 Lac Rupees</h1>
            </div>
           
           <div>
            <img src="Suzuki_Alto_-_PNG.png" alt="" />
            <button className="text-blue-500 font-medium"> <Link href="/altodetail">Suzuki Alto</Link></button>
            <h1 className="text-blue-500 font-medium">35 Lac Rupees</h1>
            </div>
           </div>
        </div>
       
    )
};