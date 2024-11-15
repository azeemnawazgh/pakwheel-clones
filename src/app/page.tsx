// export default function Azeem(){
//   return(
//     <div>
//       <h1>Azeem Nawaz Home Work</h1>
//       <nav className="w-full bg-black h-32">
//       <div className="bg-purple-600 h-10 w-200"></div>
//       <div className="bg-red-800 h-10 w-44"></div>
//       </nav>
//     <div>
//     <div className="flex justify-center w-3/4 items-center"></div>
//     <div className="flex w-3/4 max-w-full justify-between"></div>
//     <div className="flex-row w-1/4 bg-green-500 h-96"></div>
//     <div className="flex-row w-1/4 bg-red-900 h-96"></div>
//     <div className="flex-row w-1/4 bg-pink-500 h-96"></div>
//     </div>
//     </div>
//   )
// };
import Navbar from "./components/Navbar"
import Herosec from "./components/herosec"
import Featuring from "./components/Featuring"
// import Footer from "./components/footer"

export default function Home(){
  return(
    <div>
      <Navbar/>
      <Herosec/>
      <Featuring/>
      {/* <footer/> */}
    </div>
  )
};

