import React from "react";
import Home from '../../Pages/Home';
import Contact from '../../Pages/Contact';
import Projects from '../../Pages/Projects';
import Resume from '../../Pages/Resume';

const Container=({currentPage}) => {
    const renderPage = () => {
        if (currentPage === 'Home') {
          return <Home />;
        }
        if (currentPage === 'Projects') {
          return <Projects />;
        }
        if (currentPage === 'Resume') {
          return <Resume />;
        }
        return <Contact />;
      };
    
    return (
        <main style={{backgroundColor: "gray", height: "100vh"}}>
            {renderPage()}
        </main>
    )
}
export default Container