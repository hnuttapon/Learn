import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import "./dropzone.css";

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
  marginLeft:'auto',
  marginRight:'auto',
};


const ImgDropzone = (props) => {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      props.childToParent(acceptedFiles[0]);
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