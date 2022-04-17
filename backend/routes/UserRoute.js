import express from "express";

let router = express.Router();
import UserModal from "../models/UserModel.js";
router.route("/register").post(async (req, res) => {
    const username=req.body.username;
    const password=req.body.password;
    const email = req.body.email;
    const department = req.body.department;
    const newUser = new UserModal({
        username: username,
        password: password,
        email: email,
        department: department
    })
    await  newUser.save();

 
})
router.route('/login').post(async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await UserModal.findOne({ username: username, password: password });
    if (user) {
        res.send(user);
    } else {
        res.send("not found");
    }
})

export default router;