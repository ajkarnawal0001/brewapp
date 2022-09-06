import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MyId, randomUrl, searchUrl } from '../Redux/actionType'
import { Search } from '../SearchBar/Search'
import  './Home.css'
import Modal from 'react-modal'
import { customStyles, ModelImage } from './ModelStyle'
import { RightCarousel } from '../Carousel/RightCarousel'
import { Typography } from '@material-ui/core'
import { Buttons } from './Buttons'

export const Home = () => {
    const [page,setPage] = useState(1) 
    const [query,setQuery] = useState("")
    const [photo,setPhoto] = useState([]) //storing photos in array
    const [loading,setLoading] = useState(false) //
    const [currentImage,setCurrenetImage] = useState(null)
    const [scroll,setscroll] = useState(true)


    useEffect(()=>{
        fetchPhotos(page,query)
        // console.log(scroll);
        if(scroll===true){
            document.body.style.overflow = 'unset';
        }else{
            document.body.style.overflow = 'unset';
        }
    },[page,query,scroll])

    const fetchPhotos = async(page,query)=>{
        setLoading(true)
        let url;
        if(query){
            url = `${searchUrl}${MyId}&page=${page}&query=${query}`
        }else{
            url = `${randomUrl}${MyId}&page=${page}`
        }
        axios.get(url)
        .then((res)=>{
            let data = res.data
            setPhoto((oldPhoto)=>{
                if(query && page===1){
                    return [...data.results]
                }else if(query && page){
                    return [...oldPhoto,...data.results]
                }
                else{
                    return [...oldPhoto,...data]
                }
            })
            setLoading(false)
        }).catch((err)=>{
            setLoading(false)
        })
    }

    useEffect(()=>{
        const event = window.addEventListener("scroll",()=>{
            if((!loading && window.innerHeight + window.scrollY) >= document.body.scrollHeight-2){
                setPage((oldPage)=>{
                    return oldPage+1
                })
            }
        })
        return () => window.removeEventListener("scroll",event)
    },[])
    const openModel= (item)=>{
    setCurrenetImage(item.urls.raw)   
    }
    const handleSearch = (payload)=>{
        setQuery(payload)
        setPage(1)
    }
    return (
        <Cont>
            <Modal isOpen={!!currentImage} onRequestClose={()=>setCurrenetImage(null)} style={customStyles}>
            <ModelImage src={currentImage} alt="Sorry"/>
            </Modal>
            <Search handleSearch={handleSearch} />
            <Buttons handleSearch={handleSearch}/>
            <RightCarousel className="carousel"/>
            <div className="js-grid hover14 column masonry" >
            {(photo&&(
                photo.map((item,i)=>(
                    <div key={i} onClick={()=>openModel(item)} className="item">
                    <figure>
                    <GridImage src={item.urls.small} alt="" />
                        </figure>
                        <DetailBox>
                        <Typography variant='h4' color='white' style={{
                                color:"white",
                                margin:"7px 10px"
                            }}>
                                User: {item.user.name}
                                <br />
                                Location: {item.user.location}

                            </Typography>
                            <Typography variant='h5' color='white' style={{
                                color:"white",
                                margin:"7px 10px"
                            }}>
                                Likes: {item.likes}

                            </Typography>
                            </DetailBox>           
                </div>
                ))
                ))}
                </div>
        </Cont>
    )
}
const Cont = styled.div`
    width:100%;
    margin:2rem auto;

`
const GridImage = styled.img`
    object-fit:cover;
    width:90%;
    height:300px;
    margin-top:3vh;
`
const DetailBox = styled.div`
    position: relative;
    height: 100px;
    background-color:#3a3a3a;
    width:90%;
    top:-30px;
`
