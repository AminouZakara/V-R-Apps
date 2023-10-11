import React from 'react'

const App = () => {
  return (
    <div className=''>
      <div className='Header bg-orange-500 flex justify-center items-center h-20 text-white text-4xl'>
        <h1> Tailwind CSS </h1>
      </div>

      
       
      
      <div className="body mt-10">
        <div className="container bg-white pt-10
                flex justify-center items-center
                ">
          <div className="gradient text-orange-700 
                bg-green-300 w-56 h-36
                flex justify-center items-center
                rounded-md shadow-xl
                bg-gradient-to-b from-orange-600 via-white to-green-600
                ">
            <h3 className='bg-white px-3 rounded-full w-16 h-16  
                  flex justify-center items-center 
                  font-bold text-md
                  text-gradient-to-b from-orange-400 to-green-400
                  '
                  
                  
                  >  NIGER  </h3>
          </div>
        </div>
      </div>
      
    
      
      <div className="Web-Page bg-gray-500 pb-1">
        <div className="page-container 
                        bg-gray-400 m-10 
                        text-gray-800
                        grid grid-cols-3 gap-3 
                        ">
          <div className="NavbarSec col-span-full p-5 bg-gray-100 rounded"> Navbar </div>
          <div className="Banner col-span-full p-5 bg-gray-100 rounded"> Banner </div>
          <div className="Content col-span-2 p-5 bg-gray-100 rounded"> Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, labore ea deleniti eaque sit eveniet dicta aspernatur? Porro, maiores excepturi. </div>
          <div className="Adds p-5 bg-gray-100 rounded"> Adds </div>
          <div className="Footer col-span-full p-5 bg-gray-100 rounded"> Footer </div>
        </div>
      </div>
      
      
      <div className="Challenge flex flex-wrap h-screen  ">
        <div className="bg-green-100 w-1/3 h-1/3 flex justify-center items-center">1</div>
        <div className="bg-green-200 w-1/3 h-1/3 flex justify-center items-center">2</div>
        <div className="bg-green-300 w-1/3 h-1/3 flex justify-center items-center">3</div>
        <div className="bg-green-400 w-1/3 h-1/3 flex justify-center items-center">4</div>
        <div className="bg-green-500 w-1/3 h-1/3 flex justify-center items-center">5</div>
        <div className="bg-green-600 w-1/3 h-1/3 flex justify-center items-center">6</div>
        <div className="bg-green-700 w-1/3 h-1/3 flex justify-center items-center">7</div>
        <div className="bg-green-800 w-1/3 h-1/3 flex justify-center items-center">8</div>
        <div className="bg-green-900 w-1/3 h-1/3 flex justify-center items-center">9</div>
      </div>

    </div>
  )
}

export default App