import {Routes, Route} from 'react-router-dom'
import './App.css';
import  Navbar from './features/pages/navbar'
import  Footer from './features/pages/footer'

function App() {
  return (
    <div className="App">
      <div className='mb-5 '>
      <Navbar/>
      </div>

    
      <div className='mt-10'>
        <Footer/>
      </div>
        
      



    </div>
  );
}

export default App;
