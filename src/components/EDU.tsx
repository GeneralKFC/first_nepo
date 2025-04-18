import React, { useEffect, useRef, useState } from "react";
const BASE_URL='https://jsonplaceholder.typicode.com';

interface Post{
    id:number;
    title: string;
}

function APITEST(){
    const [isLoading,setisLoading]=useState(false);
    const [Error,setError]=useState();
    const [post,setPost]=useState<Post[]>([]);
    const [page,setPage]=useState(0);
    const abortControllerRef=useRef<AbortController | null>(null);
    useEffect(()=>{
        const fetchPost= async()=>{
            abortControllerRef.current?.abort();
            abortControllerRef.current=new AbortController();
            setisLoading(true);
            try{
                const responce=await fetch(`${BASE_URL}/posts?page=${page}`,
                    {signal:abortControllerRef.current?.signal,}
                );
                const posts=await responce.json() as Post[];
                setPost(posts);
            }catch(error:any){
                if(error.name==="AbortError"){
                    console.log("Aborted");
                    return;
                }
                setError(error);
            }finally{
                setisLoading(false);
            }
        }
        fetchPost();
    },[page]);

    if(Error){
        return<div>Something wrong, please try again</div>
    }
    return(
    <div>
        <h1>Data Fetching in React</h1>
        <button onClick={()=>setPage(page+1)}>Increase Page ({page})</button>
        {isLoading && <div>Loading...</div>}
        {!isLoading &&
        (<ul>
            {post.map((post)=>{
                return <li key={post.id}>{post.title}</li>
            })}
        </ul>)
        }
            
    </div>
    )
}
export default APITEST