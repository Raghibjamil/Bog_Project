import { useEffect } from "react"
import { useSelector } from "react-redux"

 

function ProfileBtn() {

  useEffect(() => {

    console.log('Loaded Profile.jsx')

    return () => {
      // console.clear();
    }
  }, [])

  const authSlice = useSelector((state) => state.auth.userData)
  
    return authSlice ? (
   <div className="flex items-center justify-center m-[30px] rounded-lg ">
  <div className=" w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 rounded-lg h-[200px] bg-gray-900 text-white hover:bg-white hover:text-black duration-500">
    <h1 className="text-2xl font-semibold mb-4">User Details:-</h1>
    <div class="flex flex-wrap flex-col">
      <p className="w-full text-xl font-semibold mb-2">Name:- {authSlice.name}</p>
      <p className="w-full text-xl font-semibold mb-2 ">Email:- {authSlice.email}</p>
    </div>
  </div>
</div>

  ) : null
}

export default ProfileBtn