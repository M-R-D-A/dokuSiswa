import React, { useEffect, useState } from "react"
import axios from "axios";
import './highlight.js';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import ImageResize from 'quill-image-resize-module-react';

Quill.register('modules/imageResize', ImageResize);

const EditorQuill = (props) => {
  const [value, setValue] = useState('');
  const [alert, setAlert] = useState('');
  const BASE_URL = process.env.REACT_APP_BASE_URL;


  const getData = () => {
    console.log(props)
    const token = localStorage.getItem('token')

    axios.get(BASE_URL + `dokumentasi/${props.dokumentasi}`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        console.log(res);
        setValue(res.data.data.dokumentasi);
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  const handleSave = () => {
    const token = localStorage.getItem('token')
    let form = {
      dokumentasi: value
    }
    axios.put(BASE_URL + `dokumentasi/${props.dokumentasi}`, form, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        console.log(res);
        setAlert(` -- DATA HAS BEEN UPDATED --`)
      })
      .catch(error => {
        console.log(error.message);
      })

  }

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'align',
    'code-block',
    'image',
    'video',
  ];

  let modules = {
    toolbar: [
      [{ indent: '-1' }, { indent: '+1' }],
      [{ align: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'code-block', 'image', 'video'],
    ],
    syntax: true,
    imageResize: {
      parchment: Quill.import('parchment'),
      modules: ['Resize', 'DisplaySize']
    }


  };
  useEffect(() => {
    getData();
  }, [props])

  useEffect(() => {
    let timeoutId;

    if (alert) {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setAlert(null);
      }, 2000);
    }

    // Clean up the timeout when the component unmounts or when the alert changes
    return () => {
      clearTimeout(timeoutId);
    };
  }, [alert]);

  return (
    <React.Fragment>
      <ReactQuill
        theme="bubble"
        value={value}
        onChange={setValue}
        formats={formats} // Pass the formats prop to include the 'align' format
        modules={modules}
      />
      <div className="flex ">
        <button className="p-1 w-1/6 position text-lg text-center rounded-full m-1 my-2 hover:bg-emerald-500 bg-green-500 text-white" onClick={() => handleSave()}>
          SAVE
        </button>
        <h2 className="text-sm text-center mt-3 text-green-500 capitalize">{alert}</h2>
      </div>
    </React.Fragment>
  );
}

export default EditorQuill;