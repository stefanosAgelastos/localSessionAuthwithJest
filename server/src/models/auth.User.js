import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, unique: false, required: true }
});

// Defining Schema methods
userSchema.methods = {
  verifyPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

// Defining hooks for pre-saving
userSchema.pre("save", function(next) {
  console.log("hashing password for: "+this.username);
  this.password = this.hashPassword(this.password);
  next();
});

const User = mongoose.model("User", userSchema);
export default User;
