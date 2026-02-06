
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  

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
        <button className='bg-purple-100 px-4 py-1 rounded-l-md'>All</button>
        <button className='bg-purple-100 px-4 py-1 '>Pending</button>
        <button className='bg-purple-100 px-4 py-1 '>Submitted</button>
        <button className='bg-purple-100 px-4 py-1 rounded-r-md'>Reviewed</button>
      </div>
    </main>
    <footer>
     <Footer></Footer>
    </footer>
    </>
  )
}

export default App
