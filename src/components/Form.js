import React,{useContext} from 'react';
import './Form.css';
import { AppContext } from '../App';
import Images from './Images';

const Form = () => {
    const {setBackgroundColor, categoryName, setCategoryName, setTitle, setSubTitle, setAuthor} = useContext(AppContext);

  return (
    <div className="container">
        <div className="update-fields">
        <Images />
        <div className="dropdown-title">צבע רקע - שם קטגוריה</div>
          <select className="dropdown-colors" onChange={(e) => setBackgroundColor(e.target.value)}>
            <option value="red">אדום</option>
            <option value="green">ירוק</option>
            <option value="blue">כחול</option>
            <option value="orange">כתום</option>
            <option value="violet">סגול</option>
          </select>
        <div className="category-title">שם קטגוריה</div>
        <input type="text" placeholder={categoryName} onChange={(e) => setCategoryName(e.target.value)}/>
        <div className="l-title">כותרת</div>
        <textarea rows="1" onChange={(e) => setTitle(e.target.value)}></textarea>
        <div className="sub-title">כותרת משנה</div>
        <textarea rows="2" onChange={(e) => setSubTitle(e.target.value)}></textarea>
        <div className="author-name">שם מחבר</div>
        <input type="text" onChange={(e) => setAuthor(e.target.value)}/>
      </div>
    </div>
  )
}

export default Form;