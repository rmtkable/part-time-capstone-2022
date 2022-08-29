import React from 'react';
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
function Home() {
    return (
       <>

<div className="welcome-paragraph">
                    <h2 className="myH2">Welcome Friends!</h2>
                    <p className="myP"> 
                        
                       Welcome to Cincinnati! Home of Skyline Chilli, the Cincinnati Reds from the MBL, and the Cincinnati Bengals of the NFL. You'll find a ton of places to explore and activities to do here!<br />
                     Our city emerged in prominence as the largest city in Ohio in the late 1800's due to the amount of people starting successful businesses here taking full advantage of the usefulness provided by being right next to the Ohio River. Boasting a city population of 309,317 and with an estimated population of 2,190,209 in larger metropolitan area, theres never a lack of people to meet.
                    </p>
                </div>

       
                <div className="home-travel-widget justify-content-evenly">

<div className="travel-bg rounded">
  <iframe id="widgetIframe" src="https://www.expedia.com/marketing/widgets/searchform/widget?wtt=4&tp1=0000000&tp2=0000000&lob=H,FH,F&des=cincinnati, oh&wbi=2&olc=000000&whf=4&hfc=C7C7C7&wif=4&ifc=000000&wbc=FFCB00&wbf=4&bfc=3D3100&wws=1&sfs=H600FW300F&langid=1033" width="100%" height="100%" scrolling="no" frameBorder="0"></iframe>
</div>
</div>

        <HeroSection />
        <Footer />
       </>
    )
}





export default Home;