import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const CategoryProduct = () => {
    const [products , setProducts] = useState([])
    const [category , setCategory] = useState([])
    const navigate = useNavigate()
    const params = useParams()
    const getProductsByCat = async()=>{
        try {
             const {data} = await axios.get(`/api/v1/product/product-category/${params.slug}`)
             setProducts(data?.products)
             setCategory(data?.category)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
      if(params?.slug)  getProductsByCat()
    },[params?.slug])
  return (
    <Layout>
    <div className="container mt-3">
        <h4 className='text-center'>{category?.name}</h4>
        <div className="row">
        <div className="col-md-10 offset-1">
            
            <div className="d-flex flex-wrap">
            {products.map(p =>(
                
                  <div  className="card m-2 " style={{width: '18rem'}} onClick={(e)=>
                    navigate(`/product/${p.slug}`)
                  }  >
                    <img  src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name} /> 
                    <div className="card-body link-cursor " >
                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-text">{p.description.substring(0,30)}</p>
                        <p className="card-text">${p.price}</p>
                     
                       
                    </div>
                    </div>
             
              ))}
            </div>
            {/* <div className="text-center m-2 p-3">
              {products && products.length <total &&(
                <button className=' btn btn-outline-secondary' onClick={(e)=>{
                  e.preventDefault()
                  setPage(page+1)
                }}>
                  {loading ? "Loading.." : "Load More"}
                </button>
              )}
            </div> */}
          </div>
        </div>
        </div>
    </Layout>
  )
}

export default CategoryProduct
