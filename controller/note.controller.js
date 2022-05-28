import Note from "../model/note.model.js";
import jwt from "jsonwebtoken";

export const createNote = async (req, res) => {
  const { title, description } = req.body;
  const token = req.header("Authorization").split(" ")[1];
  const decodedToken = jwt.decode(token);
  console.log(decodedToken);
  if (!decodedToken)
    return res.status(403).send({ success: false, message: "Invalid token" });

  try {
    const note = await Note.create({
      title,
      description,
      user: decodedToken.id,
    });
    res.send({ success: true, note });
  } catch (error) {
    res.send({ success: false, error });
  }
};



export const getNotes = async (req, res) => {
  const token = req.header("Authorization").split(" ")[1];
  const decodedToken = jwt.decode(token);
  if (!decodedToken)
    return res.status(403).send({ success: false, message: "Invalid token" });
  try {
    const notes = await Note.find({ user: decodedToken.id }).populate("user");
    console.log(notes);
    res.send({ success: true, notes });
  } catch (error) {
    res.send({ success: false, error });
  }
};
