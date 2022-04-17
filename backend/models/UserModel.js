import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username :{
        type: String,
        required: true,
  },
  password:{
        type: String,
        required: true,
        
  },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        default: null,
    },
    location:{
        type: String,
        default: null,
    },
    skills :{
        type: Array,
        default: null,
    },
    age :{
        type: Number,
        default: null,
    },
    certificate:{
        type: Array,
        default: null,
    },
    department:{
        type: String,
      
    },
    badges:{
        type: Array,
        default: null,
    }

    
 })

const UserModal = mongoose.model("test",UserSchema)

export default UserModal;