import { useEffect, useState } from "react";
import axios from 'axios'

export default function useCategory(){
    const [categories , setCategories] = useState([])

    const getCateories = async()=>{
        try {
            const {data} = await axios.get('/api/v1/category/categories')
            setCategories(data?.category)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getCateories()
    },[])

    return categories;
}