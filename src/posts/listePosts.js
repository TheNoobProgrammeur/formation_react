import React, { useState } from 'react';
import {Services} from "../http-services/servicesPosts";
import {FormCommentaire} from "./formCommentaire";
import {SuppresionPost} from "./suppresionPost";


export const ListePost = () => {

    const [postsList, updatePostsList] = useState([]);

    Services.getAllPosts().then(
        result => {
            updatePostsList(result.data)
        }
    )

    return <>
        <h3>Liste des posts</h3>

        <div  className="mb-3" >
            <ul  className="list-group">
                {postsList.map((posts,index)=>
                    (
                        <li key={index} className="list-group-item">
                           id : {posts.id} <br />
                            content : {posts.content} <br />
                            comments : <ul> {posts.comments.map((commantaire,index) =>
                            (
                                <li>
                                    {commantaire.content}
                                </li>
                            )
                        )} </ul><br />
                        <FormCommentaire id={posts.id}/><br />
                        <SuppresionPost posts_del={posts} />
                        </li>
                    )
                )}
            </ul>
        </div>
    </>
}

