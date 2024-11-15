
export default function detail(){
    return(
      
        <div>
  
          <h1 className="text-3xl font-bold text-center uppercase py-9">Enter Your Details</h1>
          <form className="mt-10 flex gap-5 justify-center items-center flex-col bg-gray-600 h-96">
              <input type="email" className=" p-2 rounded-2xl w-2/5 border border-red-800 placeholder:ENTER YOUR EMAIL"/>
              <input type="password" className=" p-2 rounded-2xl w-2/5 border border-red-800 placeholder:Enter Your Password"/>
  
              <button className=" rounded-lg py-3 px-8 bg-blue-400 text-black">Place Your Order</button>
          </form>
        </div>
      )
    };