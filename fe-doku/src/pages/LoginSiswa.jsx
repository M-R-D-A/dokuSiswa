import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../context/auth-context";

const LoginSiswa = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");
  const ctx = useContext(AuthContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      nama: nama,
      password: password
    }

    axios.post(BASE_URL + `siswa/auth`, data)
      .then((res) => {
        const data = res.data.data;

        console.log(res)
        console.log("name" + data.nama)
        console.log("id siswa" + data.id)
        localStorage.setItem('siswa_id', data.id)
        localStorage.setItem('token', res.data.token)
        if (res.data.logged) {
            ctx.onLogin(data.nama, data.role)
        }
        if (data.role === 'siswa') {
          window.location.href = '/';
        }
        console.log('isLoggedIn')
        // console.log(ctx.isLoggedIn)
      })
      .catch(error => {
        console.log(error.message)
      })
  }
  return (
    <div className='w-full h-screen bg-main-bg'>
      {/* konten utama */}
      <div className='min-h-full py-20'>
        <div className='flex justify-center items-center'>
          <div className='text-white flex bg-secondary-dark-bg rounded-md shadow-lg flex-col justify-center items-center text-center p-5'>

            <h1 className='text-xl font-semibold mb-12'>Login Siswa</h1>

            <form action='POST' onSubmit={handleSubmit} >
              {/* wrraper username */}
              <div className='hover:bg-gradient-to-r from-[#16D4FC] to-[#9A4BE9] rounded-md p-0.5 w-full mb-4'>
                <div className='text-black bg-darkblue rounded-md flex items-center gap-x-3'>
                  <input className='w-full rounded-md px-3 bg-darkblue focus:outline-none border-b-2 border-gray focus:border-purple transition ease-in-out duration-300' placeholder='nama' type='text' value={nama} onChange={(e) => setNama(e.target.value)} />
                </div>
              </div>

              {/* wrraper password */}
              <div className='hover:bg-gradient-to-r from-[#16D4FC] to-[#9A4BE9] rounded-md p-0.5 w-full mb-4'>
                <div className='text-black bg-darkblue rounded-md flex items-center gap-x-3'>
                  <input className='w-full rounded-md px-3 bg-darkblue focus:outline-none border-b-2 border-gray focus:border-purple transition ease-in-out duration-300' placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>

            </form>

            {/* forget password */}
            <button className='text-[15px] tracking-wider text-gray italic hover:text-white duration-300 transition ease-in-out mb-5'>Forget Password?</button>

            <form className='w-full' action="POST" onSubmit={handleSubmit}>

              {/* button submit */}
              <button type='submit' className='bg-purple-600 py-1.5 w-full lg:w-1/2 rounded-md text-lg font-semibold hover:scale-105 transition ease-in-out duration-300'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSiswa