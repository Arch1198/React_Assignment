import './index.css'
import Navbar from './NavBar'
import ShowItem from './Showitems'
import { useState } from "react";
import WhishList from './WhishList';
//import Card from './Card';
import Select from './Select';

import AddItemForm from './features/AddItemForm';

const newData = { 
    image:"",
    title: "",
    description: "",
    availableSizes: "",
    price: "",
  };
 
  

const Home = () =>{
    const [deleteIcon, setDeleteIcon] = useState(false);
    const [deleteIconForCard, setDeleteIconForCard] = useState(false);
    const [submittedItem,setSubmittedItem] = useState(newData);
    const [submitFlag, setSubmitFlag] = useState(false);
    const SelectAllCards =() =>{
        if (deleteIconForCard===false)
        setDeleteIconForCard(true);
        else
        setDeleteIconForCard(false);

    }
    return(
        <> 
            <Navbar/>
            <AddItemForm  submitflagfunc = {setSubmitFlag} submititem ={submittedItem} setsubmit ={setSubmittedItem}/>
            <Select cardSelect={SelectAllCards}/> 
            <ShowItem  submitflag = {setSubmitFlag} varsubmit = {submitFlag} submititeminform = {submittedItem} deleteicon={deleteIcon} setDelete={setDeleteIcon} deleteiconforCard={deleteIconForCard} />
            
        </>
    )
}



export default Home;