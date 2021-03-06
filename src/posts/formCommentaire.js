import React, { useState } from 'react';
import {Services} from "../http-services/servicesPosts";

export const  FormCommentaire = props => {

    const [currentCommentaire, updateCurrentCommentaireDescription] = useState('');


    const onTextInputChange = (element) =>{
        updateCurrentCommentaireDescription(element.target.value);
    }

    const sendPost = () => {
        const newCommantaire = {
            content: currentCommentaire,
            post_id: props.id
        }
        Services.postCommantaire(newCommantaire)
            .catch(error => {
                    alert(error.response.data.content)
                }
            )
        updateCurrentCommentaireDescription('')

    }

    return <>
        <form>
            <input
                placeholder={"votre commantaire"}
                onChange={onTextInputChange}
                value={currentCommentaire}
                type="text" />
        </form>
        <button onClick={sendPost}>Valider</button>
    </>
}