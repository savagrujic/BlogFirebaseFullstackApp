import { useEffect, useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { auth,db } from "../firebase-config"
import { useNavigate } from "react-router"
export default function Home({isAuth}) {
    let navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [postText, setPostText] = useState('')
    
    const postCollectionRef = collection(db, 'posts')
    const createPost = async () => {

        await addDoc(postCollectionRef, {
            title, 
            postText, 
            author: {name:auth.currentUser.displayName , id:auth.currentUser.uid }})
        navigate('/')
    }

    useEffect(() => {
        if(!isAuth) {
            navigate('/login')
        }
    })
    return(
    
    <div className="wrapper">
        <div className="postcont">
            <h1>Create a Post</h1>
            <p>Title</p>
            <input placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
             />
            <p>Post:</p>
            <textarea
            placeholder="Text..."
            onChange={(e) => setPostText(e.target.value)}
            /><br></br>
            <button onClick={createPost}>Submit</button>
        </div>
    </div>

)
}