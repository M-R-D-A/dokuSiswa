import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import EditorQuill from '../../components/editor_quill';

const Edit = () => {
    const location = useLocation();
    const param = new URLSearchParams(location.search);
    const Dokumentasi = JSON.parse(param.get('query'));
    console.log(Dokumentasi)
    const id = Dokumentasi.id;
    const nama = Dokumentasi.nama
    return (
        <div className='ml-10 p-10'>
            <div className='text-lg font-semibold italic mb-8'>Edit {nama}</div>
            <div className='rounded-md border-2 p-5 shadow-md'>
                        <EditorQuill dokumentasi={id} />
            </div>
        </div>
    )
}

export default Edit