import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";


function LogoutBtn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandler = () => {
        authService.logout().then(() => {
            console.log('Logout Successfully')
            dispatch(logout())
            
            navigate('/login')
            toast.success("Successfully Logout", {
                style: {
                  borderRadius: "30px",
                },
              });
        })
    }
    return (
        <button className='inline-bock px-6 py-2 duration-200 md:hover:bg-blue-300 rounded-full font-semibold hover:text-blue-500 md:hover:text-black'
        onClick={logoutHandler}
        >
            Logout
        </button>
    )
}

export default LogoutBtn