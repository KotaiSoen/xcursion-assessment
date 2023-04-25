import './App.css';
import logo from './assets/xcursions_logo.png';
import luggages from './assets/first_image.png';
import aeroplane from './assets/second_image.png';
import people from './assets/third_image.png';
import gray_logo from './assets/xcursions_logo_gray.png';

function App() {
  return (
    <div>
      <div className="bg-[url('./assets/girl_laughing.png')] background bg-gray-300 bg-blend-darken h-screen md:px-14 px-3 py-6 text-white">
        <div className='flex md:flex-row flex-col md:justify-between md:items-center'>
          <img className='md:h-5 md:w-32 w-20' src={logo} alt="logo" />
          <div className='flex md:flex-row flex-col w-96 justify-evenly text-sm'>
            <p>Save & Travel</p>
            <p>About us</p>
            <p>FAs</p>
          </div>
          <button className='bg-[#0983FF] rounded-md md:p-3 p-1 text-xs md:w-28 w-16'>Join waitlist</button>
        </div>
        <div className="w-full md:mt-48 mt-12">
          <p className='md:text-7xl text-2xl w-3/5 font-bold'>Discover A Better Way To Travel</p>
          <p className='w-4/5 mt-6'>
            Find your dream holiday destinations, get great hotel deals, and save for your next travel, all
            in one space
          </p>
          <p className='text-xs font-semibold mt-10'>Join Ope, Andy, and 3189 others on the waitlist</p>
          <div className='mt-2 flex'>
            <input type="text" className='rounded-md outline-none h-9 w-72 placeholder:italic placeholder:text-xs p-3 text-xs text-black' placeholder='Enter email address' />
            <button className='bg-[#0983FF] h-9 w-36 rounded-md mx-5 text-sm font-semibold p-1'>Join waitlist</button>
          </div>
        </div>
      </div>
      <div className='h-screen bg-slate-100 flex items-center md:px-14 px-3'>
        <div>
          <p className='font-bold text-4xl text-[#2B2945]'>Save & Travel On The Go</p>
          <p className='text-[#2B2945] mt-4'>
            Save towards multiple tour destinations.
            Automate your savings & reach your travel goals faster.
            No Charges. No Penalties. Absolutely Free.
          </p>
        </div>
        <img src={luggages} alt="luggages" className='h-4/5 w-4/5' />
      </div>
      <div className="flex items-center md:px-14 px-3 h-screen justify-between">
        <img src={aeroplane} className='h-4/5 w-1/2' alt="travel" />
        <div className='w-2/5'>
          <p className='font-bold text-[#2B2945] text-4xl'>Access Vacation Options in One Click</p>
          <p className='text-[#2B2945] mt-7'>
            With our wide range of budget-friendly deals you will be exploring the world
            discovering your inner adventurer without burning a hole in your pocket.
          </p>
          <p className='text-[#2B2945] mt-5'>No stress. No Hassles. Just maximum enjoyment!</p>
        </div>
      </div>
      <div className="flex items-center md:px-14 px-3 bg-slate-100 h-screen justify-between relative">
        <div className='w-2/5'>
          <p className='font-bold text-[#2B2945] text-4xl'>Book hotels across the globe</p>
          <p className='text-[#2B2945] mt-7'>
            Hotel booking hassles are old news here.
            Find your next stay with Xcursions. From hotels to short lets,
            to apartments for all your vacations, we've got you covered.
          </p>
        </div>
        <img src={people} alt="" className='h-4/5 w-4/5' />
        <div className='rounded-2xl bg-[#0983FF] self-center absolute h-44 -bottom-20 left-36 right-36 flex flex-col text-white justify-center items-center'>
          <p className='font-bold text-3xl'>The Most Rewarding Way to Travel</p>
          <p className='text-sm mt-2'>Join waitlist to gain early access when we launch the webapp</p>
          <div className='mt-4 flex'>
            <input type="text" className='rounded-md outline-none h-9 w-72 placeholder:italic placeholder:text-xs p-3 text-xs text-black' placeholder='Enter email address' />
            <button className='h-9 w-36 border-2 border-white rounded-md mx-5 text-sm font-semibold p-1'>Join Waitlist</button>
          </div>
        </div>
      </div>
      <div className="flex pt-40 md:px-14 px-3 justify-between">
        <div className='w-60'>
          <img src={gray_logo} alt="logo" className='h-5 w-28' />
          <p className='text-xs mt-4'>
            At xcursions, we are removing barriers to having
            a premium travel experience. Our travel processes are
            timely, and are handled by experts, to give you the
            experience you truly deserve. Travelling just got easier!
          </p>
        </div>
        <div className='flex flex-col w-56'>
          <p className='font-semibold text-sm'>Company</p>
          <p className='text-xs mt-4'>About</p>
          <p className='text-xs mt-1'>FAQs</p>
          <p className='text-xs mt-1'>Contact Us</p>
        </div>
        <div className='flex flex-col w-32'>
          <div className='flex justify-between w-full'>
            <img className='h-5 w-5' src="https://th.bing.com/th?id=OIP.b5oDvUVU5UVN4cefTJGq3wHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="linkedIn logo" />
            <img className='h-5 w-5' src="https://th.bing.com/th?id=OIP.P3GJZi8Z-DGPx1JS3u5yOgHaGl&w=265&h=235&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="twitter logo" />
            <img className='h-5 w-5' src="https://www.bing.com/th?id=OIP.KfBTN7JqRMZKI-YcYEbn_AHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="instagram logo" />
          </div>
          <p className='text-xs mt-8'>xcursionsng@gmail.com</p>
          <p className='text-xs mt-2'>+234 816 827 7417</p>
        </div>
      </div>
      <p className='mt-28 text-center text-xs mb-8'>Copyright©2023 | All rights reserved</p>
    </div>
  );
}

export default App;
