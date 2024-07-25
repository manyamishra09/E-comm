import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";


const ProductDetails = () => {
  const params = useParams();
  const [cart , setCart] = useCart()
 const navigate = useNavigate()
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
 
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProducts(data?.product?._id , data?.product.category._id)
    } catch (error) {
      console.log(error);
    }
  };

  const getSimilarProducts = async(pid , cid)=>{
    try {
        const { data } = await axios.get(
            `/api/v1/product/related-product/${pid}/${cid}`
          );
          setRelatedProducts(data?.products);
    } catch (error) {
        console.log(error)
    }
  }
  
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug ]);

  useEffect(()=>{
    getSimilarProducts();
  },[])
  return (
    <Layout>
      <div className="row container mt-2">
        <div className="col-md-6">
          <img
           src= {product?._id ? `/api/v1/product/product-photo/${product._id}` : '/images/load-loading.gif'}
            className="card-img-top"
            alt={product.name}
          height="500"
          width={"350px"}
          />
        </div>
        <div className="col-md-6 ">
          <h1 className="text-center">Product Details</h1>
          <hr />
          <h6>Name : {product.name}</h6>
          <h6>Description : {product.description}</h6>
          <h6>
            Price :
            {product?.price}
          </h6>
          <h6>Category : {product?.category?.name}</h6>
          <button
          onClick={()=> {
            setCart([...cart , product])
            localStorage.setItem('cart' , JSON.stringify([...cart , product]))
            toast.success("Item added to cart")
          }}
          className="btn btn-secondary ms-1">ADD TO CART</button>
        </div>
     
      </div>
      <hr/>
      <div className="row container">
        {relatedProducts.length >0 && 
        <>
          <h5 className=" mt-2">Similar Products</h5>
    
    <div className="d-flex flex-wrap">
        {relatedProducts.map(p =>(
            
              <div className="card m-2 " style={{width: '18rem'}} onClick={(e)=>
                navigate(`/product/${p.slug}`)
              }>
                <img  src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name} /> 
                <div className="card-body link-cursor">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description.substring(0,30)}</p>
                    <p className="card-text">${p.price}</p>
                   
                </div>
                </div>
         
          ))}
        </div>
    
        </>
        
        }
      
      </div>
    </Layout>
  );
};

export default ProductDetails;