import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { postAdded } from "./postsSlice";
import selectAllUsers from "../../features/users/usersSlice"
function AddFormPost() {
    let dispatch = useDispatch()


    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const users = useSelector((state)=> state.users)

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setContent(e.target.value)
    let onSavePostClicked =()=>{
        if(title && content){
            dispatch(postAdded(title,content,userId))
            setTitle('')
            setContent('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) 

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))
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
                 <label htmlFor="postAuthor">Author:</label>
                 <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {userOptions}
                 </select>

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
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    );
}

export default AddFormPost;