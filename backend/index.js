import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from './routes/UserRoute.js'
import UserModal from "./models/UserModel.js";
const app = express();
app.use(express.json());
app.use(cors());

app.use('/user', userRoute)




const DbUrl = "mongodb+srv://Mazen:Mazen1234@cluster0.gobr9.mongodb.net/Graduation?retryWrites=true&w=majority"

mongoose
    .connect(DbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("database works fine");
    });
mongoose.connection.on("connected", () => {
    console.log("database connected");
});

app.get('/',(req,res)=>{
    res.send('Server is running on port 5000');
})

app.post("/testAdd",async (req,res)=>{
    const username = "mazen"
    const password = "mazen"
    const email = "mazen@gmail"

    const user = new UserModal({
        username:username,
        password:password,
        email:email
    }) 

    await user.save()
    res.send(user)
})


app.listen(5000, () => {
    console.log("Server is running on port 5000");
    
})