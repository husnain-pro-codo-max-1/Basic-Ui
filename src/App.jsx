import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img from './images/nature.jpg'
import ic from './images/ic.svg'
import dna from './images/downarrow.svg'
import book from './images/books.svg'
import ai from './images/ai.png'
import mike from './images/mike.png'
import check from './images/checked.png'
import com from './images/com.jpg'
import ofice from './images/office.jpg'
import pc   from    './images/pcp.jpg';


function App() {
  return (
    // <>       <--main div-->
    <>
          <div className="h-[460px] w-full  flex relative"> 



          <div  className='bg-[#702963] h-[450px] w-[500px]  bg-gradient-to-r  to-transparent  skew-x-[-30deg] ml-32 absolute'>
        
          </div>


<div className='absolute right-[720px] top-32  w-[500px]  pl-2 text-center  flex-col '>
  
  <h1 className='font-bold text-4xl text-white mt-4 ml-[21px]'>We are here to solve <br/> your business problem</h1>
  
  <p className='text-sm font-bold text-white mt-6 ml-10 mr-16 '>Lorem ipsum dolor sit amet consectetur adipisicing <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br />  elit.
   Non quia i repellat voluptate rem minus expedita!</p>
  
  <button className='bg-white text-black rounded-2xl px-3 py-2 inline-block  mt-8  mr-52'>Let`s Out Started <img src={ic}  className='w-4 h-4 inline-block font-bold'/> </button>

</div>

      <div>
      <img src={pc} className='h-[300px] w-[900px] mt-24  z-[-1]  absolute right-0 '/> 
      </div>    


<div className='absolute  w-[30px] h-8 bottom-2 right-[760px] '> <img src={dna}/> </div>



<nav className='flex absolute  w-full justify-center mt-8 items-center '>
<div><h1 className='text-white italic text-2xl mr-11'> Reponsess</h1></div>
<div><ul className='mr-40 flex gap-3 font-bold'>
  <li className='inline-block text-white'>Messages</li>
  <li className='inline-block text-white'>About us</li>
  <li className='inline-block text-white'>Contact</li>
  <li className='inline-block text-white'>Work</li>
  <li className='inline-block text-white'>Blog</li>
</ul>
</div>
<div  className='mr-11 flex gap-4 '>
<button className='bg-blue-950 text-white rounded-2xl px-4 py-2'>Get Started</button>
<button className='bg-gray-400 rounded-2xl px-4 py-2'>Sign In</button>
</div>

</nav>
          </div>

<main className=' mt-16'>
 
  <div className='ml-[450px] text-blue-950'>
    <h1 className='text-3xl font-bold'>What Services We Offer</h1></div>
    
    <div className='ml-[360px] mt-4'>
  <p className=''>Lorem ipsum dolor sit amet, adipisicing elit. Aperiam, eos? Lorem ipsum </p>
  </div> 
  
  <div className='ml-[420px] mt-2'>
   <p> dolor sit amet consectetur adipisicing elit. Praesentium</p>
  </div>
</main>

{/* card  */}



<main className=' h-64 w-[1100px] mt-20 m-auto'>

<div className='w-1/3 border-2 rounded-md inline-block h-[250px] bg-[#702963] p-12'>
<img  className='h-10 w-10'  src={mike} />
<h1  className='mt-2 text-white text-2xl'>Digital Marketing</h1>
<p className='mt-2 text-white'>
Lorem ipsum dolor sit.hello <br/>
Lorem ipsum dolor sit.hello <br/>
Lorem ipsum dolor sit.hello <br/>
</p>
</div>

<div className='w-1/3 border-2  rounded-md inline-block  h-[250px] bg-white p-12'>
<img  className='h-10 w-10'  src={book} />
<h1 className='mt-2 text-2xl'>Design & Code</h1>
<p className='mt-2'>
Lorem ipsum dolor sit.hello <br/>
Lorem ipsum dolor sit.hello<br/>
Lorem ipsum dolor sit.hello <br/>
</p>
</div>

<div className='w-1/3 border-2 rounded-md inline-block  h-[250px] bg-[#702963] p-12'>
<img  className='h-10 w-10 '  src={ai} />
<h1 className='mt-2 text-white text-2xl'>Creative Solution</h1>
<p className='mt-2 text-white'>
Lorem ipsum dolor sit.hello <br/>
Lorem ipsum dolor sit.hello  <br/>
Lorem ipsum dolor sit.hello <br/>
</p>
</div>


</main>


{/* hero  */}


<div  className='w-[1100px] mt-20 h-[350px] m-auto flex gap-32 relative'> 


<div className='w-3/6  pl-4'>
<h1 className='text-2xl font-bold pt-2 text-blue-950'> One Of The Best Digital Agency <br />Since 2001</h1>

<p className='pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p> 
<p className='pt-1'> Lorem ipsum dolor sit amet, consectetur adipisicing.</p> 
<p className='pt-1'> Lorem ipsum dolor sit amet, consectetur adipisicing. </p>

<div className='pt-2'>
<img src={check} className='w-4 h-4 inline-block  mr-2' alt="" />
<p className='inline-block '> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem</p>
</div>

<div className='pt-2'>
<img src={check} className='w-4 h-4 inline-block mr-2' alt="" />
<p className='inline-block'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,</p>
</div>

<div className='pt-2'>
<img src={check}  className='w-4 h-4 inline-block mr-2' alt="" />
<p className='inline-block'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,</p>
</div>
<button className='bg-blue-950  px-4 py-2 rounded-2xl text-white mt-6'>Leran More</button>

</div>


<div className='w-2/5   mr-6 absolute right-1 '>
  <img src={com} alt="" className='h-[310px]'/>
</div>



<div className='w-36 h-36  border-b-[#702963] border-r-[#702963] border-b-[80px]  border-r-[80px] 
border-t-white border-l-white border-t-[80px]  border-l-[90px] -z-10 absolute right-0 bottom-0'></div>


</div>



{/* 2nd hero section  */}


<div  className='w-[1100px] mt-40 h-[350px] m-auto flex gap-32 relative'> 


<div className='w-2/5  pl-6'>
  <img src={com} alt="" className='h-[320px]'/>



</div>


<div className='w-3/6  mr-6 absolute right-1 '>


<h1 className='text-2xl font-bold pt-2 text-blue-950'> We ensure the succcess of your<br />Business</h1>

<p className='pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p> 
<p className='pt-1'> Lorem ipsum dolor sit amet, consectetur adipisicing.</p> 
<p className='pt-1'> Lorem ipsum dolor sit amet, consectetur adipisicing. </p>

<div className='pt-2'>
{/* <img src={check} className='w-4 h-4 inline-block  mr-2' alt="" /> */}
<p className='inline-block '> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem</p>
</div>

<div className='pt-2'>
{/* <img src={check} className='w-4 h-4 inline-block mr-2' alt="" /> */}
<p className='inline-block'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,</p>
</div>

<div className='pt-2'>
{/* <img src={check}  className='w-4 h-4 inline-block mr-2' alt="" /> */}
<p className='inline-block'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,</p>
</div>
<button className='bg-blue-950  px-4 py-2 rounded-2xl text-white mt-6'>Leran More</button>

</div>





<div className='w-36 h-36  border-b-[#702963] border-r-white border-b-[80px]  border-r-[80px] 
border-t-white border-l-[#702963]  border-t-[80px]  border-l-[90px] -z-10 absolute left-0 bottom-0'></div>


</div>




   </>

  )
}

export default App
