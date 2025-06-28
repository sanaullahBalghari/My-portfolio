import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@/assets/css/index.css'
import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Works from './components/Project/Works.jsx'
import ServicesSection from './components/Services/Services.jsx'
import Contact from './components/Contact/Contac.jsx'
import ThemeWrapper from './layout/ThemeWrapper.jsx';


const router=createBrowserRouter(
  createRoutesFromElements(

    <Route  path='/' element={<Layout/>} >

      <Route path='' element={<Home/>} />
      {/* <Route path='/about' element={<About/>}/>
      </Route> */}

      <Route path='/about' element={<About/>} />
      <Route path='/works' element={<Works/>} />
      <Route path='/services' element={<ServicesSection/>} />
      <Route path='/contact' element={<Contact/>} />
      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <PrimeReactProvider>
    <StrictMode>
      <RouterProvider router={router}>

     
      </RouterProvider>
    </StrictMode>,
  </PrimeReactProvider>
)
