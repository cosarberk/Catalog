
import mongoose  from "mongoose";



const Schemas = {
    "CategoriesSchema":mongoose.Schema({

        name:{
            type:String,
            required : true
        },
        description:{
            type:String,
            required:true,
        }
    
    }).set('toJSON', {
        virtuals: true
    }),
 
    "ProductsSchema":mongoose.Schema({

        name:{
            type:String,
            required : true
        },
        description:{
            type:String,
            required:true,
        },
        category:{
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:true,
        },
        isFavorite:{
            type:Boolean,
            default:false,
            required:true,
        }
    
    
    }).set('toJSON', {
        virtuals: true
    }),
    "FavoriteSchema":mongoose.Schema({

        productId:{
            type:String,
            required : true
        },
    
    }).set('toJSON', {
        virtuals: true
    }),
    "SliderSchema":mongoose.Schema({
        image:{
            type:String,
            required : true
        },

        productId:{
            type:String,
            required : true
        },
    
    }).set('toJSON', {
        virtuals: true
    }),

}


const CategoriesPost = mongoose.model("Categories",Schemas.CategoriesSchema);
const ProductsPost = mongoose.model("Products",Schemas.ProductsSchema);
const FavoritesPost = mongoose.model("Favorites",Schemas.FavoriteSchema);
const SliderPost = mongoose.model("Slider",Schemas.SliderSchema);

export  {CategoriesPost,ProductsPost,FavoritesPost,SliderPost}