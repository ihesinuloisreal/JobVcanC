
import './App.css'

import Header from './component/header/header.component';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './usersPage/home/home';
import News from './usersPage/news/news';
import Footer from './component/footer/footer.component';
import SocialHandle from './component/social/social-handle.component';



function App() {

  return (
    <>
    <SocialHandle/>
      <Header/>
    <Container>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/news' element={<News/>} />
      </Routes>
    </Container>
    <Footer/>
    </>
  )
}

export default App
