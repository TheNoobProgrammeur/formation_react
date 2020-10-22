import React from 'react';
import {Services} from "../http-services/servicesPosts";

export const  SuppresionPost = props => {

    const post = props.posts_del

    const actionDeleteCommantaire =  () => {
        post.comments.map((commantaire, index) => (
           Services.deleteCommantaire(commantaire.id).catch(error => {
               alert(error.response.data.content)
           })
        ))
    }

    const actionDeletePost = () => {

         var promise = new Promise(actionDeleteCommantaire)
        promise.finally(
            Services.deletePost(post.id).catch(error => {
                alert(error.response.data.content)
            }),
            console.log('Posts suprimer')
        )
    }

    return <>
        <button onClick={actionDeletePost} >
            Suprimer
        </button>
    </>
}
