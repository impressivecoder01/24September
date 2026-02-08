
import { Suspense, useState } from 'react'
import './App.css'
import Container from './components/Container'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ToggleBtn from './components/ToggleBtn'
import Management from './components/Management'

function App() {
   const [toggleStatus, setToggleStatus] = useState("All")
  
  const fetchIssues = async()=>{
    const result = await fetch('https://jsonplaceholder.typicode.com/posts')
    return result.json()
  }

  const fetchPromise = fetchIssues()
  return (
    <>
    <nav>
     <Navbar></Navbar>
    </nav>
    <main >
      <Suspense>

      <Management fetchPromise={fetchPromise}></Management>
      </Suspense>

      {/* <Container>

      </Container> */}
      <ToggleBtn toggleStatus={toggleStatus} setToggleStatus={setToggleStatus}></ToggleBtn>
      
    </main>
    <footer>
     <Footer></Footer>
    </footer>
    </>
  )
}

export default App
