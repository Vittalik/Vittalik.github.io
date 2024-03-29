import express from "express"
import { getUsers, deleteUser } from "../controllers/user.js";

//import { addPost } from "../controllers/post.js"

const router = express.Router()

router.get("/", getUsers);
router.delete("/:id", deleteUser)
//router.get("/admin", verifyAdmin)

//router.get("/test", addPost)

export default router