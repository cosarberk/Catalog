
import express from "express";
import {getCategories,addCategories,getCategoriesDetails,getProductsOfTheCategory,
addProduct,getProductDetails,addFavorite,updateProductFavorite,getFavorites,
getSlider,createSlider} from "../../controllers/catalog/index.js"
const CategoriesRouter = express.Router(),
ProductsRouter  = express.Router(),
FavoriteRouter = express.Router(),
SliderRouter = express.Router();


//..CategoriesRouter
CategoriesRouter.get("/", getCategories);
CategoriesRouter.post("/", addCategories)
CategoriesRouter.get("/:id", getCategoriesDetails)
CategoriesRouter.get("/:id/products", getProductsOfTheCategory)
//..ProductsRouter
ProductsRouter.post("/", addProduct)
ProductsRouter.get("/:id", getProductDetails)
ProductsRouter.post("/:id/fav", updateProductFavorite) // gets favs as isFavorite option on getProductDetails

//..FavoriteRouter
FavoriteRouter.get("/",getFavorites) // closed beacuse getting favorites from updateProductFavorite
FavoriteRouter.post("/",addFavorite)
//..SliderRouter
SliderRouter.get("/",getSlider)
SliderRouter.post("/",createSlider) 

export  {CategoriesRouter,ProductsRouter,FavoriteRouter,SliderRouter};