import React, { useState } from 'react';
import {Services} from "../http-services/servicesPosts";

export const  FormPost = props => {

    const [currentPostDescription, updateCurrentPostDescription] = useState('');


    const onTextInputChange = (element) =>{
        updateCurrentPostDescription(element.target.value);
    }

    const sendPost = () => {
        const newPost = {
            content: currentPostDescription
        }
        Services.postPosts(newPost)
            .catch(error => {
                alert(error.response.data.content)
            }
        )
    }

    return <>
        <form>
            <input
                placeholder={"indiquez la description de votre post"}
                onChange={onTextInputChange}
                type="text" />
        </form>
        <button onClick={sendPost}>Valider</button>
        <button onClick={props.test}>Annuler</button>
    </>
}