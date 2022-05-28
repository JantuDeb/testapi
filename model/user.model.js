import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//hooks - encrypt password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
  });
  
  //validate password method
  userSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  
  //create JWT token
  userSchema.methods.getJwtToken = function () {
      console.log("jwt");
    return jwt.sign({ id: this._id }, "secret", {
      expiresIn: "30d",
    });
  };


export default mongoose.model("User", userSchema)
