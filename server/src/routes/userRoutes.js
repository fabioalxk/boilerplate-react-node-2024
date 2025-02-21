import { Router } from "express";

import { createUser } from "../controllers/userController/createUser.js";
import { deleteUser } from "../controllers/userController/deleteUser.js";
import { getUser } from "../controllers/userController/getUser.js";
import { getUsers } from "../controllers/userController/getUsers.js";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.delete("/:id", deleteUser);
 

export default router;
