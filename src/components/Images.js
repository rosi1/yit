import React,{useContext, useState} from 'react';
import { AppContext } from '../App';
import ImageUploading from "react-images-uploading";
import './Images.css';


const Images = () => {
    const {images, setImages} = useContext(AppContext);
    const [inputFields, setInputFields] = useState([{}])

    const addImgField = () => {
        setInputFields(prev => [...prev, {}])
    };

    const deleteField = (index) => {
        const inputList = [...inputFields]
        const chosenImgs = [...images]
        console.log(index)
        inputList.splice(index, 1);
        chosenImgs.splice(index + 1, 1);
        
        console.log("inputList",inputList)
        console.log("chosenImgs",chosenImgs)
        setInputFields(inputList);
        setImages(chosenImgs);   
    };

    const addImg = (e,index) => {
        setImages(prev => [...prev, {image: `${e.target.value}`}]);
    };

    
  return (
    <div>
        <div className="images">תמונות</div>
            {
                inputFields.map((item,index) => {
                    return(
                        <div className="img-fields" key={index}>
                            <input id={index} type="text" onKeyDown={(e) => e.key === 'Enter' ? addImg(e, index) : null}/>
                            <button onClick={() => deleteField(index)} className="btn btn-danger">מחק</button>
                        </div>
                      )
                  })
                }
        <button onClick={() => addImgField()} className="btn btn-primary">הוסף תמונה</button>
    </div>
  )
}

export default Images;