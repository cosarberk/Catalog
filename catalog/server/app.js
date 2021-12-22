
import express from "express";
import bodyParser from "body-parser";
import cors from "cors"; 
import DB from "./MongoDB.js";
import { fileURLToPath } from 'url';
import { dirname,join } from 'path';


import {CategoriesRouter,ProductsRouter,
FavoriteRouter,SliderRouter} from "./routes/catalog/index.js";

// create __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());


//..Routes
app.use("/categories",CategoriesRouter)
app.use("/products",ProductsRouter)
app.use("/favorite",FavoriteRouter)
app.use("/sliders",SliderRouter)

app.use('/images', express.static(join(__dirname, 'image')))


app.get('/',(req,res)=>{

    res.send("merhba")
});


//..server starter
const RUNSERVER = ()=>{
    app.listen(PORT,()=>{
        console.log("running server")
    });
}


//..connect database and run server
DB(RUNSERVER)

