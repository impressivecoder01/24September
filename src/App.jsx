
import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  
  const [toggleStatus, setToggleStatus] = useState("All")
  // console.log(toggleStatus)

  return (
    <>
    <nav>
     <Navbar></Navbar>
    </nav>
    <main className='grid grid-cols-3 gap-4'>
      <div className='flex flex-col items-center justify-center text-white font-bold text-2xl bg-gray-600 h-[250px]'>
        <h1>Pending</h1>
        <p>0</p>
      </div>
      <div className='flex flex-col items-center justify-center  text-white font-bold text-2xl bg-gray-600 h-[250px]'>
        <h1>Review</h1>
        <p>0</p>
      </div>
      <div className='flex flex-col items-center justify-center  text-white font-bold text-2xl bg-gray-600 h-[250px]'>
        <h1>Submit</h1>
        <p>0</p>
      </div>

      <div className='flex'>
        <button onClick={() =>setToggleStatus('All') } className={`toggle-btn rounded-l-md ${toggleStatus== 'All' && 'bg-purple-400! text-white' }`}>All</button>
        <button onClick={() =>setToggleStatus('Pending') } className={`toggle-btn ${toggleStatus == 'Pending' && 'bg-purple-400! text-white'}`}>Pending</button>
        <button onClick={() =>setToggleStatus('Submitted') } className={`toggle-btn ${toggleStatus == 'Submitted' && 'bg-purple-400! text-white'}`}>Submitted</button>
        <button onClick={() =>setToggleStatus('Reviewed') } className={`toggle-btn rounded-r-md ${toggleStatus == 'Reviewed' && 'bg-purple-400! text-white'}`}>Reviewed</button>
      </div>
    </main>
    <footer>
     <Footer></Footer>
    </footer>
    </>
  )
}

export default App
