import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components'
import { Toaster } from "react-hot-toast";

function App() {
  const [loading, setLoading] = useState(true)
  const [userName, setUserName] = useState('')
  const dispatch = useDispatch()

  const userAuth = useSelector((state) => state.auth)
  // console.log('userAuth: ', userAuth)

  // useEffect(() => {
  //   setLoading(true)
  //   if (userAuth.status === true) {
  //     authService.getCurrentUser()
  //       .then((userData) => {
  //         if (userData) {
  //           dispatch(login({ userData }))
  //           setUserName(userAuth.userData)
  //         } else {
  //             // If no user data, logout
  //           dispatch(logout())
  //         }
  //       })
  //       .finally(() => setLoading(false))
      
  //   } else {
  //     // console.log("logout when we refresh");
  //     dispatch(logout())
  //     setLoading(false)
  //     setUserName('')
  //   }

  //   // return () => {
  //   //   // setLoading(false)
  //   //   // dispatch(logout())
  //   //   if(userAuth.status === false) setUserName('')
  //   //   // setUserName('')
  //   // }
    
  // }, [])
  
  useEffect(() => {
    authService
      ?.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);


  // console.log('username: ', userName)

  return !loading ? (
    <>
    <div>
    <Toaster position="top-center"/>
  </div>
  <div className='min-h-screen flex flex-wrap content-between'>
    <div className='w-full block border-2'>
      <Header />
      <main className="min-h-[400px] ">
      <h2 className='text-2xl pt-4 font-bold text-center'>{userAuth.status === true ? ('Welcome, '+ userAuth.userData.name) : ''}</h2>
        <Outlet />
      </main>
      <Footer />
    </div>
  
  </div>
  </>
  ) : null
}

export default App
