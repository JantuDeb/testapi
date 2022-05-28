import express from "express";
import { createNote, getNotes } from "../controller/note.controller.js";
const router = express.Router()

router.route("/notes").post(createNote).get(getNotes)

export default router;

