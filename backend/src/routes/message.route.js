import express from "express"
import { getMessages, getUsers, sendMessage } from "../controllers/message.controller.js"
import { protectedRoute } from "../middleware/auth.middleware.js"

const router = express.Router()

router.get("/users", protectedRoute, getUsers)
router.get("/:id", protectedRoute, getMessages)

router.post('/send/:id', protectedRoute, sendMessage)

export default router