"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const page = ({params}) => {
    const[product,setProduct]=useState({})
    const {id}= params
          const singleProduct = async () => {
            try {
              const res = await axios.get(`/api/product/${id}`)
    
              console.log(res)
              if(res.data.success){
                setProduct(res.data.single)
                
              }
            } catch (error) {
              toast.error("falid to fetch previous data")
              console.log(error)
            }
          }
          useEffect(() => {
                  singleProduct()
                }, []);
                console.log(product)

  return (
    <div>
      {product.title}
    </div>
  )
}

export default page
