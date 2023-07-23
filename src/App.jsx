import './App.css';
import React from 'react';

// comment out to test

// import LandingPage from './components/LandingPage';
// import Navbar1 from './components/NavBar1';
import AboutMe from './components/AboutMe';
// import Blogs from './components/Blogs';
// import BlogGracie from './components/BlogGracie';
// import BlogDayInTheLife from './components/BlogDayInTheLife';
// import BlogCareer from './components/BlogCareer';
// import Footer from './components/Footer';

//forgot why I commented this out
//import AlexCard from './components/AlexCard';
// import AlexGraph from './components/AlexGraph';

// commented out the cauousel
// import Projects from './components/Projects';

// old commented out code
// want to route to a "different page" for gracie blog

import { Col, Container } from 'reactstrap';

import { Route, Switch, withRouter} from 'react-router-dom';

function App() {
   return (
      <div className="App">
         <Container fluid style={{ padding: 0 }}>
            <Col style={{ padding: 0 }}>
               <AboutMe/>
               {/* <Switch > */}
                  {/* <Route exact path="/gracie"> */}
                     {/* <BlogGracie></BlogGracie> */}
                  {/* </Route> */}
                  {/* <Route exact path="/dayInTheLife"> */}
                     {/* <BlogDayInTheLife></BlogDayInTheLife> */}
                  {/* </Route> */}
                  {/* <Route exact path="/career"> */}
                     {/* <BlogCareer></BlogCareer> */}
                  {/* </Route> */}
                  {/* <Route exact path="/blogs"> */}
                     {/* <Blogs></Blogs> */}
                  {/* </Route> */}
                  {/* <Route exact path="/"> */}
                     {/* <LandingPage></LandingPage> */}
                     {/* <Navbar1></Navbar1> */}
                     {/* <AboutMe></AboutMe> */}

                     {/* <AlexCard></AlexCard> */}
                     {/* <AlexGraph></AlexGraph> */}
                     {/* <Projects></Projects> */}
                     
                     {/* <Blogs></Blogs> */}
                     {/* <Footer></Footer> */}
                  {/* </Route> */}
               {/* </Switch> */}
               
            </Col>
         </Container>
      </div>
   );
}

export default withRouter(App);
