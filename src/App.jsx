import React from 'react'
import {Switch,Route} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Parallax from './Parallex';
import AllDemo from './AllDemo';
import Agency from './Agency';
import Corporate from './Corporate';
import Portfolio from './Portfolio';
import New from './New';
import Gallery from './Gallery';
import NavBar from './NavBar';
import Features from './Features';
import Question from './Question';
import Footer from './Footer';


const App =() => {
   
    return (
    <div>
        <Parallax/>
        <div className="home pt-5 mb-5" style={{zIndex:1}}>
            <h1 className="mb-4 homeHeading" data-aos="fade-down-right" data-aos-duration="1500">Home Demo</h1>
            <h4 className="para  col-12 " data-aos="fade-down-right" data-aos-duration="1500">Choose one of styles or cutomize easily your site following your ideas.
            More demos are coming soon. </h4>
            <NavBar/>

            <Switch>
                <Route component={AllDemo} path='/' exact/>
                <Route component={Agency} path='/agency' exact/>
                <Route component={Corporate} path='/corporate' exact/>
                <Route component={Portfolio} path='/portfolio' exact/>
                <Route component={Gallery} path='/gallery' exact/>
                <Route component={New} path='/new' exact/>
            </Switch>
            <Features/>
            <Question/>
            <Footer/>
        </div>
    </div>
    )
};

export default App
