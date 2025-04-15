import Home from "./components/Home"
// import './App.css'

function App() {

  return (
    <>
    
     <div className="flex flex-col items-center justify-center min-h-screen ">
     <header className='mb-4 text-center'>
        <h1 className='text-4xl font-bold '>AI Image Enhancer</h1>
        <p className='text-lg '>Enhance your images with AI technology!</p>
     </header>
      <Home />
   <p className='text-sm text-center mt-4'>
      <span className='text-sm'>Disclaimer: </span>
      <span className='text-sm'>This is a demo application. </span>
      <br />
      <span className='text-sm'>Please upload an image for enhancement.</span>
      <br />
      <span className='text-sm'>The enhanced image will be available for download.</span>
      <br />
      <span className="text-sm">file should be jpg or png format.</span>
   </p>
      <footer>
        <p className='text-sm  mt-2'>&copy; 2025 My Website</p>
     </footer>
     </div>
    </>
  )
}

export default App
