import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic()
  const onSubmit = async(data) => {
    console.log(data);
    //image upload then get the an url 
    const imagefile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api,imagefile,{
        headers:{
            'content-type' : 'multipart/form-data'
        }
    })
    console.log(res.data);
  };
  return (
    <div>
      <SectionTitle
        heading="add an Item"
        subHeading="What's New?"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex gap-6">
            {/* Category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">Select a Category </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="desser">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            {/* Price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
         
          </div>
             {/* Recipe Details  */}
             <label className="form-control">
              <div className="label">
                <span className="label-text">Recipe Details</span>
              </div>
              <textarea
                {...register("recipe")}
                className="textarea textarea-bordered h-24"
                placeholder="Bio"
              ></textarea>
            </label>

            <div className="form-control w-full my-6">
            <input  {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
            </div>

          <button className="btn">Add Item <FaUtensils className="ml-4"></FaUtensils></button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
