import './index.css'
import Navbar from './NavBar'
import ShowItem from './Showitems'
import { useState } from "react";
import WhishList from './WhishList';
import Card from './Card';
import Select from './Select';


const Home = () =>{
    const [deleteIcon, setDeleteIcon] = useState(false);
    const [deleteIconForCard, setDeleteIconForCard] = useState(false);
    const SelectAllCards =() =>{
        if (deleteIconForCard===false)
        setDeleteIconForCard(true);
        else
        setDeleteIconForCard(false);

    }
    return(
        <>
            <Navbar/>
            <Select cardSelect={SelectAllCards}/> 
            <ShowItem deleteicon={deleteIcon} setDelete={setDeleteIcon} deleteiconforCard={deleteIconForCard} />
            
        </>
    )
}



export default Home;