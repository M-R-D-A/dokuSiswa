import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const SubTopic = () => {
    const [dataSubTopic, setDataSubTopic] = useState([]);

    const location = useLocation();
    const param = new URLSearchParams(location.search);
    const id = param.get('query');
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    const getData = () => {
        const token = localStorage.getItem('token')
        axios.get(BASE_URL + `sub_topic/${id}`, { headers: { Authorization: `Bearer ${token}` } })
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
    return (
        <>
            <h1 className='text-xl font-semibold mb-4 italic'>Topic Kamu</h1>
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