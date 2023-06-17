import { useEffect } from "react"
import { fetchDataFromApi } from "./utils/api"
import { getApiConfiguration } from "./store/homeSlice"
import { useSelector, useDispatch } from 'react-redux'

import {BrowserRouter,Route, Routes} from "react-router-dom"

import Home from "./pages/home/home"
import Explore from "./pages/explore/explore"
import Details from "./pages/details/details"
import PageNotFound from "./pages/404/pageNotFound"
import SearchResult from "./pages/searchResult/searchResult"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"


function App() {

  const dispatch=useDispatch();
  const {url} = useSelector((state)=>state.home);
  console.log(url);
  
  useEffect(()=>{
    Testing()
  },[])

  const Testing =()=>{
    fetchDataFromApi('/movie/popular')
    .then((response)=>{
      console.log(response);
      dispatch(getApiConfiguration(response));
    })
  } 
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
