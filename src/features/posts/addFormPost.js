import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { postAdded } from "./postsSlice";
function AddFormPost() {
    let dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value)
    let onSavePostClicked =()=>{
        if(title && content){
            dispatchEvent(postAdded({
                id: nanoid(),
                title,
                content
            }))
            setTitle('')
            setContent('')
        }
    }
    return (  
        <section>
            <h2>
                Add New Post
            </h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                /> 
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                   
                >Save Post</button>
            </form>
        </section>
    );
}

export default AddFormPost;