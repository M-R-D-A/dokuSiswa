import axios from 'axios'
import React, { useEffect, useState } from 'react'
const BASE_URL = process.env.REACT_APP_BASE_URL;

const ModalTag = (props) => {
    const [name, setName] = useState('');
    const dataColor = ['#FF6A81', '#6CE1AE', '#48B8F1', '#BC5EF6', '#FB934E', '#E9E059']

    const [background, setBackground] = useState('');
    const [text, setText] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }



    const handleSave = (e) => {
        e.preventDefault();

        console.log('hai')
        console.log(props)

        const token = localStorage.getItem('token')

        let form = {
            siswa_id: props.siswaId,
            sub_topic_id: props.subTopicId,
            background: background,
            text: 'text-white',
            nama: name,
        }

        if (props.action === 'insert') {
            axios.post(BASE_URL + `tag`, form, { headers: { Authorization: `Bearer ${token}` } })
                .then(res => {
                    console.log(res);
                    props.onSubmit();
                    props.handlerHideModal();
                })
                .catch(err => {
                    console.log(err.message);
                })
        } else if (props.action === 'update') {
            console.log('update')
            console.log(`id Topic : ${props.id}`)
            axios.put(BASE_URL + `tag/${props.id}`, form, { headers: { Authorization: `Bearer ${token}` } })
                .then(res => {
                    props.onSubmit();
                    console.log(res.data.message);
                })
                .catch(err => {
                    console.log(err.message);
                })
        }
    }

    return (
        <>
            {/* Main modal */}
            <div className="fixed flex justify-center top-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0">
                <div className="relative w-full h-full max-w-2xl md:h-auto">

                    {/* Modal content */}
                    <div className="relative bg-main-dark-bg text-white rounded-lg shadow">

                        <form action="POST" onSubmit={handleSave}>

                            {/* Modal header */}
                            <div className="flex justify-center p-4">
                                {(() => {
                                    if (props.action === 'insert') {
                                        return (
                                            <h1 className="text-2xl font-semibold text-purple-500  text-center">
                                                Tambah Tag
                                            </h1>
                                        )
                                    } else if (props.action === 'update') {
                                        return (
                                            <h1 className="text-2xl font-semibold text-purple-500  text-center">
                                                Edit Tag
                                            </h1>
                                        )
                                    }
                                })()}
                                <button type="button" className="p-1.5 inline-flex items-center absolute right-5" onClick={() => props.handlerHideModal()}>
                                    <svg className="w-7 h-7 fill-white hover:fill-purple duration-300" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                </button>
                            </div>

                            {/* Modal body */}
                            <div className="px-6 py-2 space-y-3">

                                {/* Input nama */}
                                <div className="flex flex-row space-x-3 w-full">
                                    <div className="w-2/6 flex justify-between">
                                        <span>Nama</span>
                                        <span>:</span>
                                    </div>
                                    <div className="w-4/6">
                                        <input className='w-full bg-secondary-dark-bg rounded-md focus:outline-none px-2'
                                            type="text"
                                            value={name}
                                            onChange={handleNameChange}
                                            required
                                        >
                                        </input>
                                    </div>
                                </div>
                            </div>

                            <h1 className='px-5 pt-2 text-lg text-white'>Pilih Warna Tag</h1>
                            <div className='flex  p-5 gap-x-2'>
                                {dataColor.map((item, index) => (
                                    <div
                                        onClick={() => setBackground(item)}
                                        className={
                                            background === item
                                                ? 'w-1/4 px-5 py-2 border-white border-2 rounded-full text-center'
                                                : 'w-1/4 px-5 py-2 hover:border-white border-2 border-transparent rounded-full text-center'
                                        }
                                        style={{ backgroundColor: item }}>
                                        {index + 1}
                                    </div>
                                ))}
                            </div>

                            {/* Modal footer */}
                            <div className="flex items-center justify-end p-6 space-x-2">
                                <button className="text-red-500 hover:text-white bg-white hover:bg-red-500 duration-300 font-medium rounded-lg px-5 py-2.5 text-center">Cancel</button>
                                {props.action === 'insert'
                                    ? <button onClick={handleSave} className="text-green-500 hover:text-white bg-white hover:bg-green-500 duration-300 rounded-lg font-medium px-5 py-2.5 focus:z-10">Tambah</button>
                                    : <button onClick={handleSave} className="text-yellow-500 hover:text-white bg-white hover:bg-yellow-500 duration-300 rounded-lg font-medium px-5 py-2.5 focus:z-10">Edit</button>
                                }
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <div className="bg-black opacity-70 fixed inset-0 z-40"></div>
        </>
    )
}

export default ModalTag