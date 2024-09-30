import Questions from "./pages/Questions"
import Home from "./pages/Home"
import Header from "./components/Header"
import {Routes, Route} from "react-router-dom"

import './App.css'

function App() {

  const apiData = [
    {
      id: 1,
      ques: "How satisfied are you with our products?"
    },
    {
      id: 2,
      ques: "How fair are the prices compared to similar retailers?"
    },
    {
      id: 3,
      ques: "How satisfied are you with the value for money of your purchase?"
    },
    {
      id: 4,
      ques: "What could we do to improve our service?"
    },
  ]

  return (
    <>
     <Header />
     <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/ques/:id" element={<Questions apiData={apiData} />}></Route>
     </Routes>
    </>
  )
}

export default App
