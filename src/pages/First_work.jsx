import { useState } from 'react' 

function First_work() {
  const [count, setCount] = useState(0)

  return ( 
    <> 

    <div className='bg-blue-500 p-3 flex justify-between  text-white gap-3' >  
      <img src="https://thumbs.dreamstime.com/z/vector-illustration-mickey-mouse-old-type-jpg-eps-vector-illustration-mickey-mouse-137965016.jpg" alt="Image" className='h-8 flex justify-start' />
     
     <div className=' flex gap-4 list-none items-center' > 
      <li> contact </li>
      <li> Address </li>
      <li> Setting </li>
     </div>
    </div> 

    <div className='w-full h-72 bg-cyan-300 text-white ' > Hiii  </div>

    <h1 className='bg-green-400 flex justify-center rounded-lg border-none p-3 m-2 shadow-2xl text-white hover:bg-purple-500 text-3xl'> Hello we are here </h1>
      
      <div>
        <h1 className='bg-green-400 flex justify-center rounded-lg border-none p-3 m-2 shadow-2xl text-2xl hover:bg-blue-400 '> How can we Help you !!</h1>
      </div>



    </>
  )
}

export default First_work

