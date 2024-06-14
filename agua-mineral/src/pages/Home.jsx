import React from 'react'
import '../css/App.css'
import NavBar from '../components/NavBar'
import Section01 from '../components/Section01'
import Footer from '../components/Footer'
import Background from '../assets/background.png'


function Home(){
    const style = {
        backgroundImage: `url(${Background})`,
    }

    return(
        
        <div style={style}>
            
            <Section01  />
            <Footer />
        </div>


       


    )
}
export default Home