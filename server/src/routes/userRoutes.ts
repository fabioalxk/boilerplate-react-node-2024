import { Router } from "express";

import { createUser } from "../controllers/userController/createUser";
import { deleteUser } from "../controllers/userController/deleteUser";
import { getUser } from "../controllers/userController/getUser";
import { getUsers } from "../controllers/userController/getUsers";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.delete("/:id", deleteUser);

export default router;
