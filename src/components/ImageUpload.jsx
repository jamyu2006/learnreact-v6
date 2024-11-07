import React, { useRef, useState } from "react";
import DefaultImage from '../assets/wad.jpg'
import EditIcon from '../assets/Edit--Streamline-Tabler.svg'
import "../index.css"

/*
export default function ImageUpload() {
    return (
        <div>ImageUpload</div>
    )
}
*/

const ImageUpload = () => {
    const [imgUrl, setImgUrl] = useState(DefaultImage);
    const fileUploadRef = useRef();

    return (
        <div>
            <img 
                src={imgUrl}
                alt="Avatar"
                className="image-container"
            />
            <form id="form" encType="multipart/form-data">
                <button 
                    type="submit" 
                    onClick={(event) => {
                        event.preventDefault();
                        fileUploadRef.current.click();
                    }}
                    className="edit-button">
                    <img
                        src={EditIcon}
                        alt="Edit"
                    />
                </button>
                <input 
                    type="file"
                    id="file"
                    ref={fileUploadRef}
                    onChange={()=>{
                        const uploadedFile = fileUploadRef.current.files[0];
                        const cachedURL = URL.createObjectURL(uploadedFile);
                        setImgUrl(cachedURL);
                    }}
                    hidden
                />
            </form>
        </div>
    )
}

export default ImageUpload