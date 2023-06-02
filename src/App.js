import React, {useState} from "react"
import './App.css';
import Header from './components/Header';
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("Home")
  const handlePageChange = (page) => setCurrentPage(page);

  return (
   <main>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Container currentPage={currentPage} />
      <Footer />
   </main>
  )
}

export default App;
