

import {CategoriesPost,ProductsPost,FavoritesPost,SliderPost} from "../../models/catalog/index.js"




//..get only id and name from categories 
const getCategories = async (req ,res)=>{
    try {
        const categroies = await CategoriesPost.find({}, { _id: 1, name: 1 }); // only list id and name
        res.status(200).json(categroies);
    } catch (error) {
        res.status(404).json({
            message:error.message,
        })
    }
}

//..create categories
const addCategories = async (req ,res)=>{
    const newCategory = new CategoriesPost(req.body);
    try {
       const saved = await newCategory.save();
       res.json(saved);
    } catch (error) {
        res.status(409).json({
            message:error.message,
        })
    }
}

//..get category details
const getCategoriesDetails = async (req ,res)=>{
    try {
        const categroiesDetail = await CategoriesPost.findById({_id:req.params.id});
        res.status(200).json(categroiesDetail);
    } catch (error) {
        res.status(404).json({
            message:error.message,
        })
    }
}


//..get products of the category
const getProductsOfTheCategory = async (req ,res)=>{
    try {
        const productofcategory = await ProductsPost.find({category:req.params.id},{category:0});
        res.status(200).json(productofcategory);
    } catch (error) {
        res.status(404).json({
            message:error.message,
        })
    }
}

//..create product
const addProduct = async (req ,res)=>{
    const newProduct = new ProductsPost(req.body);
    try {
       const saved = await newProduct.save();
       res.json(saved);
    } catch (error) {
        res.status(409).json({
            message:error.message,
        })
    }
}

//..get getProduct 
const getProductDetails = async (req ,res)=>{
    try {
        const product = await ProductsPost.findById({_id:req.params.id},{category:0});
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({
            message:error.message,
        })
    }
}

 //  updtae product isFavorite

 const updateProductFavorite = async (req,res)=>{
    const product = await ProductsPost.findById({_id:req.params.id},{category:0});
    const filter = { _id:req.params.id};
    const options = { upsert: true };
    const updateDoc = {
        $set: {
            isFavorite:product.isFavorite == true?false:true
        },
      };
    const uproduct = await ProductsPost.findByIdAndUpdate(filter,updateDoc,options);
    try {
        res.status(200).json(uproduct);
     } catch (error) {
         res.status(409).json({
             message:error.message,
         })
     }
 }

 const getFavorites = async (req ,res)=>{
    try {
        const favorites = await ProductsPost.find({isFavorite:true},{category:0}); // only list id and name
        res.status(200).json(favorites);
    } catch (error) {
        res.status(404).json({
            message:error.message,
        })
    }
}


const addFavorite=async (req,res)=>{
    const newFavorite = new FavoritesPost(req.body);
    
    try {
       const saved = await newFavorite.save();
       res.json(saved);
    } catch (error) {
        res.status(409).json({
            message:error.message,
        })
    }
}
const getSlider=async (req,res)=>{
    try {
        const sliders = await SliderPost.find({}, { _id: 0});
        res.status(200).json(sliders);
    } catch (error) {
        res.status(404).json({
            message:error.message,
        })
    }
}
const createSlider=async (req,res)=>{
    const newSlide = new SliderPost(req.body);
    
    try {
       const saved = await newSlide.save();
       res.json(saved);
    } catch (error) {
        res.status(409).json({
            message:error.message,
        })
    }
}

export {getCategories,addCategories,getCategoriesDetails,getProductsOfTheCategory,
    addProduct,getProductDetails,updateProductFavorite,
    getFavorites, addFavorite, getSlider,createSlider}







