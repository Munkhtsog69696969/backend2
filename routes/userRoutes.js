const express=require("express");

const {body,validationResult}=require("express-validator");

const router=express.Router();

const {getUsers}=require("../controllers/userController");
const {createUser}=require("../controllers/userController");
const {getSpecificUser}=require("../controllers/userController");
const {loginUser}=require("../controllers/userController");
const {updateUser}=require("../controllers/userController");

router
    .get("/users",getUsers)
    .post("/users",createUser)
    .get("/users/:id",getSpecificUser)
    .post("/login",loginUser)
    .put("/users/:id",updateUser)
exports.userRoutes=router;