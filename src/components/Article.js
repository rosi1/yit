import React from 'react';
import { useContext } from 'react';
import './Article.css';
import { Carousel } from 'react-carousel-minimal';
import { AppContext } from '../App';


const Article = () => {
  
  const {backgroundColor, categoryName, title, subTitle, author, images} = useContext(AppContext);

  return (
    <div className='container'>
      <div className='componenta'>
        <div className='div-img'>
          {
            images.length > 1 ? <Carousel
            data={images}
            time={1500}
            width="314px"
            height="176px"
            slideNumber={false}
            automatic={true}
            dots={true}
            slideBackgroundColor="none"
          /> : <img className='imgArea' src={images[0].image} alt=''/> 
          }
        </div>
         
        <div className='second-componenta'>
        <div style={{ backgroundColor: backgroundColor, width: "fit-content"}} className="category"><span>{categoryName}</span></div>
        <div className="title">{title}</div>
        <div className="subTitle">{subTitle}</div>
        <div className="author">{author}</div>
        </div>
      </div>
    </div>
  )
}

export default Article;