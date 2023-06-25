import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ModalDokumentasi from './modal/ModalDokumentasi';

const Dokumentasi = () => {
    const [dataDokumentasi, setDataDokumentasi] = useState([]);
    const [showModalDokumentasi, setShowModalDokumentasi] = useState(false)
    const [action, setAction] = useState();
    const [id, setId] = useState(0);
    const [subTopicId, setSubTopicId] = useState()

    const location = useLocation();
    const param = new URLSearchParams(location.search);
    const idSubTopic = param.get('query');
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    const getData = () => {
        setSubTopicId(idSubTopic)
        const token = localStorage.getItem('token')
        axios.get(BASE_URL + `dokumentasi/${idSubTopic}`, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => {
                console.log(res.data.data);
                setDataDokumentasi(res.data.data)
            })
            .catch(err => {
                console.log(err.message);
                console.log(err.response.data);
            })
    }
    useEffect(() => {
        getData();
    }, [])

    const handlerHideModal = () => {
        setShowModalDokumentasi(false);
    }
    const handlerAdd = () => {
        setAction('insert')
        setShowModalDokumentasi(true);
    }
    return (
        <>
            {showModalDokumentasi
                ? <ModalDokumentasi id={0} subTopicId={subTopicId} action={action} handlerHideModal={handlerHideModal} onSubmit={getData} />
                : []}
            <div className='flex'>
                <h1 className='text-xl font-semibold mb-4 italic'>Dokumentasi Kamu</h1>
                <div
                    onClick={handlerAdd}
                    className='px-5 py-2 text-white mx-5 rounded-md bg-gradient-to-l from-emerald-500 to-emerald-900 mb-4'>
                    Add One
                </div>
            </div>
            <div className='flex gap-x-2'>
                {dataDokumentasi.map((item, index) => (
                    < Link href={`/Dokumentasi?query=${item.id}`}>
                        <div className="hover:scale-105 transition ease-in-out duration-500 bg-secondary-dark-bg text-emerald-500 uppercase rounded-md p-0.5 mb-4" key={index}>
                            <div className="bg-navy shadow drop-shadow-lg rounded-md p-5 text-center">
                                <h1 className='text-xl font-semibold text-green tracking-wide'>{item.nama}</h1>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Dokumentasi