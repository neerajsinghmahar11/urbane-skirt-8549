import { border } from '@chakra-ui/styled-system'
import React from 'react'
import './Home.css';
// import { Grid, GridItem } from '@chakra-ui/react'

const Home = () => {
    return (
        <div>
        <div>
            <div className='ImgHead' style={{marginTop: "50px", height: "600px", overflow: "hidden", backgroundImage: "url('https://media.blueapron.com/assets/registration/homepage/desktop-splash-v2.webp?height=800&quality=90&format=pjpg')" }} >
                <div style={{marginTop:"180px",marginLeft:"50px",width:"400px"}}>
                <h1 style={{fontFamily:"sans-serif",fontSize:"50px",fontWeight:"600",color:"#0f346c"}}>The meal kit that puts quality first</h1>
                <button style={{marginTop:"30px",fontFamily:"sans-serif",backgroundColor:"#0f346c",color:"white", borderRadius:"20px",padding:"10px 25px",fontWeight:"700"}}>GET COOKING</button>
                </div>
            </div>
        </div>

        <h1 style={{textAlign:"center",fontSize:"40px",fontWeight:"600",marginTop:"40px",color:"#0f346c"}}>465+ million meals shipped</h1>
        <div className='ReasonHome' style={{margin:"auto"}}><p style={{textAlign:"center",fontSize:"20px"}}>See why home cooks stick with the original American meal kit.</p></div>
        
        <div className='Features' style={{marginTop:"50px"}}>
            <div style={{textAlign:"center"}}>
                <img src="https://media.blueapron.com/assets/registration/homepage/chef-experience.webp?height=374&quality=90" alt="" />
                <h2 style={{fontWeight:"650"}}>5 decades of top restaurant experience</h2>
                <p style={{margin:"auto"}}>Our chefs bring high standards to crafting your meals.</p>
            </div>
            
            <div style={{textAlign:"center"}}>
                <img src="https://media.blueapron.com/assets/registration/homepage/chef-experience.webp?height=374&quality=90" alt="" />
                <h2 style={{fontWeight:"650"}}>Fresher ingredients faster</h2>
                <p style={{margin:"auto"}}>80% of ingredients come directly from producers.</p>
            </div>
            
            <div style={{textAlign:"center"}}>
                <img src="https://media.blueapron.com/assets/registration/homepage/chef-experience.webp?height=374&quality=90" alt="" />
                <h2 style={{fontWeight:"650"}}>You're busy, so we're flexible</h2>
                <p style={{margin:"auto"}}>Get boxes on your schedule. Skip, pause, or cancel anytime.</p>
            </div>
            
        </div>
        
        <p style={{textAlign:"center",marginTop:"50px"}}><span>Get started for as little as</span><span style={{fontWeight:"600"}}>$7.99 per serving</span></p>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"auto",margin:"auto"}}>
        <button style={{marginTop:"30px",fontFamily:"sans-serif",backgroundColor:"#0f346c",color:"white", borderRadius:"20px",padding:"10px 25px",fontWeight:"700"}}>GET COOKING</button>
        </div>


        <h1 style={{textAlign:"center",fontSize:"40px",fontWeight:"600",marginTop:"30px",color:"#0f346c",letterSpacing:"3px"}}>CHOOSE FROM</h1>
        <h1 style={{textAlign:"center",fontSize:"40px",fontWeight:"700",color:"#0f346c"}}>60+ weekly options</h1>
        
        
        
        <div className='Choose'  style={{marginTop:"50px"}}>
            <div>
                <img src="https://media.blueapron.com/assets/registration/homepage/craft.webp?width=300&amp;height=300&amp;quality=90" alt="" />
                <h2 style={{fontWeight:"650"}}>5 decades of top restaurant experience</h2>
                <p style={{width:"80%",margin:"auto"}}>Our chefs bring high standards to crafting your meals.</p>
            </div>
            
            <div style={{textAlign:"center"}}>
                <img src="https://media.blueapron.com/assets/registration/homepage/wellness.webp?width=300&amp;height=300&amp;quality=90" alt="" />
                <h2 style={{fontWeight:"650"}}>5 decades of top restaurant experience</h2>
                <p style={{width:"80%",margin:"auto"}}>Our chefs bring high standards to crafting your meals.</p>
            </div>
            
            <div style={{textAlign:"center"}}>
                <img src="https://media.blueapron.com/assets/registration/homepage/family-friendly.webp?width=300&amp;height=300&amp;quality=90" alt="" />
                <h2 style={{fontWeight:"650"}}>5 decades of top restaurant experience</h2>
                <p style={{width:"80%",margin:"auto"}}>Our chefs bring high standards to crafting your meals.</p>
            </div>
            <div style={{textAlign:"center"}}>
                <img src="https://media.blueapron.com/assets/registration/homepage/craft.webp?width=300&amp;height=300&amp;quality=90" alt="" />
                <h2 style={{fontWeight:"650"}}>5 decades of top restaurant experience</h2>
                <p style={{width:"80%",margin:"auto"}}>Our chefs bring high standards to crafting your meals.</p>
            </div>
            
            <div style={{textAlign:"center"}}>
                <img src="https://media.blueapron.com/assets/registration/homepage/wellness.webp?width=300&amp;height=300&amp;quality=90" alt="" />
                <h2 style={{fontWeight:"650"}}>5 decades of top restaurant experience</h2>
                <p style={{width:"80%",margin:"auto"}}>Our chefs bring high standards to crafting your meals.</p>
            </div>
            
            <div style={{textAlign:"center"}}>
                <img src="https://media.blueapron.com/assets/registration/homepage/family-friendly.webp?width=300&amp;height=300&amp;quality=90" alt="" />
                <h2 style={{fontWeight:"650"}}>5 decades of top restaurant experience</h2>
                <p style={{width:"80%",margin:"auto"}}>Our chefs bring high standards to crafting your meals.</p>
            </div>
            <div style={{textAlign:"center"}}>
                <img src="https://media.blueapron.com/assets/registration/homepage/craft.webp?width=300&amp;height=300&amp;quality=90" alt="" />
                <h2 style={{fontWeight:"650"}}>5 decades of top restaurant experience</h2>
                <p style={{width:"80%",margin:"auto"}}>Our chefs bring high standards to crafting your meals.</p>
            </div>
            
            <div style={{textAlign:"center"}}>
                <img src="https://media.blueapron.com/assets/registration/homepage/wellness.webp?width=300&amp;height=300&amp;quality=90" alt="" />
                <h2 style={{fontWeight:"650"}}>5 decades of top restaurant experience</h2>
                <p style={{width:"80%",margin:"auto"}}>Our chefs bring high standards to crafting your meals.</p>
            </div>
            
            <div style={{textAlign:"center"}}>
                <img src="https://media.blueapron.com/assets/registration/homepage/family-friendly.webp?width=300&amp;height=300&amp;quality=90" alt="" />
                <h2 style={{fontWeight:"650"}}>5 decades of top restaurant experience</h2>
                <p style={{width:"80%",margin:"auto"}}>Our chefs bring high standards to crafting your meals.</p>
            </div>
            
            <div style={{textAlign:"center"}}>
                <img src="https://media.blueapron.com/assets/registration/homepage/family-friendly.webp?width=300&amp;height=300&amp;quality=90" alt="" />
                <h2 style={{fontWeight:"650"}}>5 decades of top restaurant experience</h2>
                <p style={{width:"8 0%",margin:"auto"}}>Our chefs bring high standards to crafting your meals.</p>
            </div>
            
        </div>

        
        <div  style={{display:"flex",alignItems:"center",justifyContent:"center",width:"auto",margin:"auto"}}>
        <button style={{marginTop:"30px",fontFamily:"sans-serif",backgroundColor:"#0f346c",color:"white", borderRadius:"20px",padding:"10px 25px",fontWeight:"700"}}>BROWSE OUR MENUS</button>
        </div>
        </div>

    )
}

export default Home