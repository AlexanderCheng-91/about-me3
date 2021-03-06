import './App.css';
// import React from "react"

import LandingPage from './components/LandingPage';
import Navbar1 from './components/NavBar1';
import AboutMe from './components/AboutMe';
// import AlexCard from './components/AlexCard';
// import AlexGraph from './components/AlexGraph';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
// want to route to a "different page" for gracie blog
import BlogGracie from './components/BlogGracie';
import BlogDayInTheLife from './components/BlogDayInTheLife';
import BlogCareer from './components/BlogCareer';
import Footer from './components/Footer';

import { Col, Container } from 'reactstrap';

import { Route, Switch, withRouter } from 'react-router-dom';

function App() {
   return (
      <div className="App">
         <Container fluid style={{ padding: 0 }}>
            <Col style={{ padding: 0 }}>
               <Switch>
                  <Route exact path="/gracie">
                     <BlogGracie></BlogGracie>
                  </Route>
                  <Route exact path="/dayInTheLife">
                     <BlogDayInTheLife></BlogDayInTheLife>
                  </Route>
                  <Route exact path="/career">
                     <BlogCareer></BlogCareer>
                  </Route>
                  <Route exact path="/blogs">
                     <Blogs></Blogs>
                  </Route>
                  <Route exact path="/">
                     <LandingPage></LandingPage>
                     <Navbar1></Navbar1>
                     <AboutMe></AboutMe>
                     {/* <AlexCard></AlexCard> */}
                     {/* <AlexGraph></AlexGraph> */}
                     <Projects></Projects>
                     <Blogs></Blogs>
                     <Footer></Footer>
                  </Route>
               </Switch>
            </Col>
         </Container>
      </div>
   );
}

export default withRouter(App);
