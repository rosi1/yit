import React, { useState,createContext } from 'react';
import './App.css';
import Article from './components/Article';
import Form from './components/Form';
import landImg from './landscape_207075.jpg';

export const AppContext = createContext(null);

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("red");
  const [categoryName, setCategoryName] = useState("אוכל");
  const [title, setTitle] = useState("סיור קולינרי בין המסעדות");
  const [subTitle, setSubTitle] = useState(" גם אני, שעסוק כל השבוע, מתפנה לצפות בטלוויזיה רק בסופי השבוע, ונוכחתי שרוב תוכניות הטלוויזיה בכל הערוצים הן תכניות אוכל.");
  const [author, setAuthor] = useState("שירית גל");
  const [images, setImages] = useState([{image: landImg}]);
  return (
    <AppContext.Provider
     value={{backgroundColor, setBackgroundColor,categoryName, setCategoryName,title, setTitle,subTitle, setSubTitle,author, setAuthor, images, setImages}}>
       <div className="container">
       <Article />
        <Form />
       </div>
    </AppContext.Provider>
  )
}

export default App;