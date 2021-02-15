import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import "./dropzone.css";

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width:'700px',
  height:'400px',
  backgroundColor:'white',
  padding: 4,
  boxSizing: 'border-box',
  marginLeft:'auto',
  marginRight:'auto',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
  marginLeft:'auto',
  marginRight:'auto',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
};


const ImgDropzone = (props) => {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <div className="thumb" key={file.name}>
      <div style={thumbInner} style={{width:props.width,height:props.height}}>
        <img style={{marginLeft:'auto',marginRight:'auto'}}
          src={file.preview}
          style={{width:props.width,height:props.height}}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p style={{margin:'auto',padding:'10px'}}>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );
}

export default ImgDropzone;