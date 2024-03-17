import express from 'express';
import   { createComment, getPostComments }  from '../controllers/comment.controller.js';
import { verifyToken } from "../utils/verifyUser.js"

const router = express.Router();

router.post('/create', verifyToken, createComment);
router.get('/getPostComments/:postId', getPostComments);


// The function we have written in the post and get like createComment and getPostComment are written in the controller file like comment.controller

export default router;