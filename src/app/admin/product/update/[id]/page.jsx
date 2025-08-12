"use client"
import axios from 'axios';
import { X } from 'lucide-react';
import { CldUploadWidget } from 'next-cloudinary';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const page = ({params}) => {
  const {id} = params
  console.log(id)
const router = useRouter()
      const [formData, setFormData] = useState({
        title:"",
        desc:"",
        price:"",
        category:"",
        stock:""
    })
    const [ option,setOption] = useState([])
    
      const catFetch = async () => {
        try {
          
          const res = await axios.get("/api/category");
          setOption(res.data.getCategory);
        } catch (err) {
          console.error(err);
          setError("Failed to fetch categories.");
        } 
      };
    
      const singleProduct = async () => {
        try {
          const res = await axios.get(`/api/product/${id}`)

          console.log(res)
          if(res.data.success){
            setFormData(res.data.single)
            setTempImages(res.data.single.images)
          }
        } catch (error) {
          toast.error("falid to fetch previous data")
          console.log(error)
        }
      }
    
      useEffect(() => {
        catFetch();
        singleProduct()
      }, []);

    const [tempImages, setTempImages] = useState([]);
      

          const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({ ...prev, [name]: value }));}

            const [loading, setLoading] = useState(false);

            const handleSubmit = async (e) => {
                e.preventDefault();
                try {
                    
                    setLoading(true);
                    const res = await axios.put(`/api/product/${id}`,{
                        ...formData,
                        images:tempImages
                    })

                    if (res?.data.success) {
        toast.success("Submitted successfully");
        setTimeout(() => {
          router.push("/admin/product");
        }, 1000);
      } else {
        toast.error("Submission failed. Please try again.");
      }
                } catch (error) {
                    
                }finally{
                    setLoading(false);
                }
        
            }


  return (

        <>
      <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-blue-400">
        <div className="w-full max-w-2xl p-8 shadow-xl bg-white">
          <h2 className="text-blue-600 font-extrabold text-4xl text-center mb-8">Add Product</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <lable htmlFor="name" value="Product Name" className="text-lg" />
              <input
                id="name"
                type="text"
                name="title"
                placeholder="Name"
                onChange={handleChange}
                value={formData.title}
                required
                shadow
                sizing="lg"
              />
            </div>
            <div>
              <lable htmlFor="stock" value="Stock" className="text-lg" />
              <input
                id="stock"
                type="number"
                name="stock"
                placeholder="Stock"
                onChange={handleChange}
                value={formData.stock}
                required
                shadow
                sizing="lg"
              />
            </div>
            <div>
              <lable htmlFor="category" value="Category" className="text-lg" />
              <select
                id="category"
                name="category"
                onChange={handleChange}
                value={formData.category}
                required
                sizing="lg"
              >
                <option value="">Select category</option>
                {option?.map((v) => (
                  <option key={v._id} value={v._id}>
                    {v.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <lable htmlFor="price" value="Price" className="text-lg" />
              <input
                id="price"
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                required
                shadow
                sizing="lg"
              />
            </div>
            <div>
              <lable htmlFor="desc" value="Description" className="text-lg" />
              <textarea
                id="desc"
                name="desc"
                placeholder="Description"
                onChange={handleChange}
                value={formData.desc}
                required
                rows={4}
                className='w-full'
                shadow
              />
            </div>
            <div>
              <lable htmlFor="images" value="Images" className="text-lg" />
              <div className="mt-2">
                <CldUploadWidget
                  uploadPreset="cartify"
                  onSuccess={(results) => {
                    if (results.info?.secure_url && results.event === "success") {
                      setTempImages((prevImages) => [...prevImages, results.info.secure_url]);
                    }
                  }}
                  options={{ multiple: true }}
                >
                  {({ open }) => (
                    <button
                      color="info"
                      type="button"
                      onClick={open}
                      className="font-bold"
                    >
                      Upload Images
                    </button>
                  )}
                </CldUploadWidget>
              </div>
            </div>
            {tempImages.length > 0 && (
              <div className="flex flex-wrap gap-4 mt-4">
                {tempImages.map((img, index) => (
                  <div key={index} className="relative w-[120px] h-[120px]">
                    <img
                      src={img}
                      alt={`Uploaded ${index}`}
                      className="w-full h-full object-cover rounded-lg border border-gray-200 shadow"
                    />
                    <button
                      color="failure"
                      size="xs"
                      onClick={() => setTempImages((prevImages) => prevImages.filter((_, i) => i !== index))}
                      className="absolute top-1 right-1 rounded-full p-1"
                      type="button"
                    >
                      <X/>
                    </button>
                  </div>
                ))}
              </div>
            )}
            <button
              type="submit"
              color="blue"
              size="lg"
              className="mt-6 font-bold text-lg bg-black text-white p-3"
              disabled={loading}
            >
              {loading ? "loading..." : null}
              {loading ? "Submitting..." : "Update Product"}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default page
