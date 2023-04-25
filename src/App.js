import './App.css';
import logo from './assets/xcursions_logo.png';
import luggages from './assets/first_image.png';

function App() {
  return (
    <div>
      <div className="bg-[url('./assets/girl_laughing.png')] background bg-gray-300 bg-blend-darken h-screen px-14 py-6 text-white">
        <div className='flex justify-between items-center'>
          <img className='h-5' src={logo} alt="logo" />
          <div className='flex w-96 justify-evenly text-sm'>
            <p>Save & Travel</p>
            <p>About us</p>
            <p>FAs</p>
          </div>
          <button className='bg-[#0983FF] rounded-md p-3 text-xs w-28'>Join waitlist</button>
        </div>
        <div className="w-full mt-48">
          <p className='text-7xl w-3/5 font-bold'>Discover A Better Way To Travel</p>
          <p className='w-2/5 mt-6'>
            Find your dream holiday destinations, get great hotel deals, and save for your next travel, all 
            in one space
          </p>
          <p className='text-xs font-semibold mt-10'>Join Ope, Andy, and 3189 others on the waitlist</p>
          <div className='mt-2 flex'>
            <input type="text" className='rounded-md outline-none h-9 w-72 placeholder:italic placeholder:text-xs p-2 text-xs text-black' placeholder='Enter email address'/>
            <button className='bg-[#0983FF] h-9 w-36 rounded-md mx-5 text-sm font-semibold p-1'>Join waitlist</button>
          </div>
        </div>
      </div>
      <div className='h-screen bg-slate-100 flex items-center px-14'>
        <div>
          <p className='font-bold text-4xl text-[#2B2945]'>Save & Travel On The Go</p>
          <p className='text-[#2B2945] mt-4'>
            Save towards multiple tour destinations.
            Automate your savings & reach your travel goals faster.
            No Charges. No Penalties. Absolutely Free.
          </p>
        </div>
        <img src={luggages} alt="luggages" className='h-4/5 w-4/5'/>
      </div>
    </div>
  );
}

export default App;
