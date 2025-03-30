import { collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { auth, db } from "../firebase-config"
import './home.css'
import { OrbitProgress } from "react-loading-indicators"
export default function Home({isAuth}) {

    const [postlist, setPostlist] = useState([])
    const postCollection = collection(db, 'posts')
    const [edit, setEdit] = useState(false)
    const [itemId, setItemID] = useState(null)
    const [newtitle, setNewTitle] = useState('')
    const [newDesc, setNewDesc] = useState('')


    const deleteBlog = async (id) => {
        const PostDoc = doc(db, 'posts' , id)
        await deleteDoc(PostDoc)
    }

    const editBlog = async (id) => {
        const postRef = doc(db, 'posts', id)
       
       await updateDoc(postRef, {
           title: newtitle,
           postText: newDesc
      })
    }

    useEffect(() => {
        const getPosts = async () => {
        const data = await getDocs(postCollection)
        setPostlist(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    
        }
        getPosts()
    },[deleteBlog])


   
    


    return(
        <div className="wrapper">
            {postlist.length === 0 ?(<p><OrbitProgress color='black' text='loading' size='large' /></p>): <div>
    {postlist.map((item) => (
        <div className="post">
            {itemId === item.id && edit ? <input className="inputtitle" value={newtitle} onChange={(e) =>setNewTitle(e.target.value) }/>: <h1>{item.title}</h1>}
            {itemId === item.id && edit ? <textarea className= 'inputdesc'value={newDesc} onChange={(e) => setNewDesc(e.target.value)} /> : <p>{item.postText}</p>}
            <p>Autor: {item.author ? item.author.name : "Unknown Author"}</p>
            {isAuth && item.author.id === auth.currentUser.uid &&(
                <>
                <button onClick={() => deleteBlog(item.id)}>Delete</button>
               { itemId === item.id &&  edit  ? <button onClick={() =>{setEdit(false) 
               editBlog(item.id)} }>Submit</button> : <button onClick={() => {
                 setNewTitle(item.title)
                 setNewDesc(item.postText)
                 setEdit(true)
                 setItemID(item.id)
               }
           

            }>Edit</button>}
                </>
                )}
        </div>
    ))}
    </div> }
        </div>
    )
}