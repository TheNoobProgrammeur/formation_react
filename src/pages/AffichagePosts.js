import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {ListePost, FormPost} from "../posts/index";


export const AffichagePosts = props =>{

    const [formVisibility, updateVisibility] = useState(false);

    let divForm;
    if (formVisibility === true) {
        divForm = <FormPost test={changVisibility} />
    }else {
        divForm = <button onClick={changVisibility}>Add Post</button>
    }


    function changVisibility(){
        updateVisibility(!formVisibility)
    }

    return <>
        <Link to='/'>Home</Link> <br />
        {divForm}
        <ListePost/>
    </>
}