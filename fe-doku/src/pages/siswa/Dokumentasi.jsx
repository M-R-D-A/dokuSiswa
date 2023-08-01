import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ModalDokumentasi from './modal/ModalDokumentasi';
import ModalTag from './modal/ModalTag';

const Dokumentasi = () => {
    const [dataDokumentasi, setDataDokumentasi] = useState([]);
    const [showModalDokumentasi, setShowModalDokumentasi] = useState(false)
    const [showModalTag, setShowModalTag] = useState(false)
    const [action, setAction] = useState();
    const [id, setId] = useState(0);
    const [siswaId, setSiswaId] = useState(0);
    const [subTopicId, setSubTopicId] = useState()

    const location = useLocation();
    const param = new URLSearchParams(location.search);
    const idSubTopic = param.get('query');
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    const getData = () => {
        setSubTopicId(idSubTopic)
        const token = localStorage.getItem('token')
        const idSiswa = localStorage.getItem('siswa_id')
        setSiswaId(idSiswa)
        axios.get(BASE_URL + `dokumentasi/sub/${idSubTopic}`, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => {
                console.log(res);
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
    const handlerHideModalTag = () => {
        setShowModalTag(false);
    }
    const handlerAddTag = () => {
        setAction('insert')
        setShowModalTag(true);
    }
    return (
        <>
            {showModalDokumentasi
                ? <ModalDokumentasi id={0} subTopicId={subTopicId} data={dataDokumentasi} action={action} handlerHideModal={handlerHideModal} onSubmit={getData} />
                : []}
            <div className='flex gap-x-3'>
                {/* <h1 className='text-xl font-semibold mb-4 italic'>DOKUMENTASI</h1> */}
                <div
                    onClick={handlerAdd}
                    className='px-5 py-2 text-white mx-1 rounded-full bg-gradient-to-l from-emerald-500 to-emerald-900 mb-4'>
                    DOKUMENTASI
                </div>
                <div
                    onClick={handlerAddTag}
                    className='px-5 py-2 text-white mx-1 rounded-full bg-gradient-to-l from-yellow-500 to-yellow-900 mb-4'>
                    TAG
                </div>
            </div>
            {showModalTag
                ? <ModalTag id={0} subTopicId={idSubTopic} siswaId={siswaId} action={action} handlerHideModal={handlerHideModalTag} onSubmit={getData} />
                : []}
            {/* <div className='flex'>
                <h1 className='text-xl font-semibold mb-4 italic'>Tag</h1>

            </div> */}
            <div className='grid grid-cols-2 mx-5 sm:grid-cols-4 lg:grid-cols-6 gap-x-2 md:gap-x-5 gap-y-3'>
                {dataDokumentasi.map((item, index) => (
                    < Link
                        key={index}
                        className='w-35 h-40 sm:w-full bg-secondary-dark-bg lg:w-full hover:scale-105 transition ease-in-out duration-500 text-white uppercase rounded-md mb-4'
                        to={{
                            pathname: '/topic/sub/doku/edit',
                            search: `?query=${encodeURIComponent(JSON.stringify({ id: item.id, nama: item.nama }))}`,
                        }}>
                        <div className='p-2'>
                            <div className="bg-navy shadow drop-shadow-lg rounded-md  text-xs">{item?.nama}
                            </div>
                            <div className='md:px-2 py-1 text-center text-xs rounded-full text-white' style={{ backgroundColor: item.tag?.background }}>
                                {item.tag?.nama}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Dokumentasi