import mongoose from "mongoose";

const UserObject = {
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
};

const userSchema = new mongoose.Schema(UserObject, { timestamps: true });
const User = mongoose.models("User", userSchema);

export default User;
