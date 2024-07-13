import Games from './Games';
import Hero from './Hero';
import './home.css'
const  Home=()=> {

    
  return (
    <>
      <div className='home container'>
          
          <Hero/>
          <Games/>
      </div>

    </>
  );
}
export default Home;
