import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Modalsubtopic from './modal/ModalSubTopic';

const SubTopic = () => {
    const [dataSubTopic, setDataSubTopic] = useState([]);
    const [showModalTopic, setShowModalTopic] = useState(false)
    const [action, setAction] = useState();
    const [id, setId] = useState();
    const [topicId, setTopicId] = useState()

    const location = useLocation();
    const param = new URLSearchParams(location.search);
    const idTopic = param.get('query');
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    
    const getData = () => {
        setTopicId(idTopic)
        const token = localStorage.getItem('token')
        axios.get(BASE_URL + `sub_topic/${idTopic}`, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => {
                console.log(res.data.data);
                setDataSubTopic(res.data.data)
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
        setShowModalTopic(false);
    }
    const handlerAdd = () => {
        setAction('insert')
        setShowModalTopic(true);
    }

    return (
        <>
            {showModalTopic
                ? <Modalsubtopic id={0} topicId={topicId} action={action} handlerHideModal={handlerHideModal} onSubmit={getData} />
                : []}
            <div className='flex'>
                <h1 className='text-xl font-semibold mb-4 italic'>Sub Topic Kamu</h1>
                <div
                    onClick={handlerAdd}
                    className='px-5 py-2 text-white mx-5 rounded-md bg-gradient-to-l from-emerald-500 to-emerald-900 mb-4'>
                    Add One
                </div>
            </div>
            <div className='flex gap-x-2'>
                {dataSubTopic.map((item, index) => (
                    < Link to={{
                        pathname: '/subtopic/dokumentasi',
                        search: `?query=${item.id}`,
                    }}>
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

export default SubTopic