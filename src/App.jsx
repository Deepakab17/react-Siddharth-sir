import Navbar from "./Navbar"
import { Footer1,Footer2 } from "./Footer"
import logo from './assets/captain.jpg'
let App=()=>{

  return(

    <div>
      <Navbar/> <br/>
    <h1 style={{color:"royalblue",background:"black"}}>Hello World</h1>
     
     <img src={logo} alt="" />
     <Footer1/>
     <Footer2/>
    </div>
  )

}

export default App