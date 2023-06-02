import React, {useState} from "react"
import './App.css';
import Header from './components/Header';
import Container from "./components/Container";

function App() {
  const [currentPage, setCurrentPage] = useState("Home")
  const handlePageChange = (page) => setCurrentPage(page);


  return (
   <main style={{border: "2px solid red"}}>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Container currentPage={currentPage}  />
   </main>
  )
}

export default App;
