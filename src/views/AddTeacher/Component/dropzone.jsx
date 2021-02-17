// import React, { useEffect, useState } from 'react';
// import { useDropzone } from 'react-dropzone';
// import "./dropzone.css";

// const thumbsContainer = {
//     display: 'flex',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginTop: 16,
//     height:'240px',
//     backgroundColor:'#BFC0C0',
// };

// const thumbInner = {
//     display: 'flex',
//     minWidth: 0,
//     overflow: 'hidden',
//     marginLeft: 'auto',
//     marginRight: 'auto',
// };

// const img = {
//     display: 'block',
//     width: 'auto',
//     height: '100%',
// };


// const ImgDropzone = (props) => {
//     const [files, setFiles] = useState([]);
//     const { getRootProps, getInputProps } = useDropzone({
//         accept: 'image/*',
//         onDrop: acceptedFiles => {
//             setFiles(acceptedFiles.map(file => Object.assign(file, {
//                 preview: URL.createObjectURL(file)
//             })));
//         }
//     });

//     const thumbs = files.map(file => (
//         <div className="thumb" key={file.name}>
//             <div style={thumbInner} style={{ width: props.width, height: props.height }}>
//                 <img style={{ marginLeft: 'auto', marginRight: 'auto'}}
//                     src={file.preview}
//                     style={{ width: props.width, height: props.height }}
//                 />
//             </div>
//         </div>
//     ));

//     useEffect(() => () => {
//         // Make sure to revoke the data uris to avoid memory leaks
//         files.forEach(file => URL.revokeObjectURL(file.preview));
//     }, [files]);

//     return (
//         <section className="container">
//             <aside style={thumbsContainer}>
//                 {thumbs}
//             </aside>
//             <input {...getInputProps()} />
//             <div {...getRootProps({ className: 'dropzone' })}>
//                 <img width="40px" height="40px" style={{marginTop:'20px'}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDMyIDMyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNiAxYTE1IDE1IDAgMSAwIDE1IDE1IDE1LjAxNyAxNS4wMTcgMCAwIDAgLTE1LTE1em0tNC4zMDcgOS44OTMgMy42LTMuNmExIDEgMCAwIDEgMS40MTYgMGwzLjYgMy42YTEgMSAwIDEgMSAtMS40MTQgMS40MTRsLTEuODk1LTEuODkzdjguNzg2YTEgMSAwIDEgMSAtMiAwdi04Ljc4NmwtMS44OTMgMS44OTNhMSAxIDAgMSAxIC0xLjQxNC0xLjQxNHptMTEuNjA3IDExLjEwN2ExIDEgMCAwIDEgLTEgMWgtMTIuNmExIDEgMCAwIDEgLTEtMXYtMi44YTEgMSAwIDAgMSAyIDB2MS44aDEwLjZ2LTEuOGExIDEgMCAwIDEgMiAweiIgZmlsbD0iIzYzYjk5NSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" />
//             </div>

//         </section>
//     );
// }

// export default ImgDropzone;

import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
// import '../css/dropzone.css'

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'relative',
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 5,
    border: '1px solid #eaeaea',
    width: '35vh',
    height: '35vh',
    boxSizing: 'border-box',
    backgroundColor: '#CCCCCC',
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%',
};

const dropContainer = {
    width: '35vh',
    height: '35vh',
    borderRadius: 5,
    backgroundColor: 'ghostwhite',
    margin:'auto',
}


function DropZone(props) {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/jpeg , image/png',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    alt=""
                    style={img}
                />
            </div>
        </div>
    ));

    const remove = file => () => {
        const newFiles = [...files]
        newFiles.splice(newFiles.indexOf(file), 1)
        setFiles(newFiles)
    }


    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <div>
            <section>
                {files.length === 0 ? <div style={dropContainer} {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <div>
                        <h4 style={{ paddingTop: "80px", color: "#696663",width:'80%' }} >ลากวางรูปภาพจากคอมพิวเตอร์ หรือ คลิกที่นี่เพื่อเลือกรูปภาพ</h4>
                    </div>

                </div>
                    :
                    <div>
                        <div style={dropContainer}>
                            <div style={thumbsContainer}>
                                {thumbs}
                            </div>
                        </div>

                    </div>

                }
            </section>

            <button style={{ backgroundColor: props.bgColor, border: 'none', boxShadow: 'none', marginTop: '10px' }} variant="contained" onClick={remove(1)}>
                <DeleteIcon style={{ fontSize: 40, color: '#63B995' }} />
            </button>
        </div>
    );
}
export default DropZone;