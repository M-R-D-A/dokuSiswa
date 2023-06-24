import React, { useContext, useState } from 'react'
import AuthContext from '../context/auth-context';
import axios from 'axios';

const LoginSiswa = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const ctx = useContext(AuthContext);

  const [nama, setNama] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    console.log(BASE_URL)
    e.preventDefault();

    let data = {
      nama: nama,
      password: password
    }

    axios.post(BASE_URL + `siswa/auth`, data)
      .then(res => {
        console.log(res.data)
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