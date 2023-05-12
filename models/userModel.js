import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    email:{
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"],
    },
    username:{
        type: String,
    },
    image:{
        type: String,
    }
});

// If the model already exists, use that model, otherwise create a new model
//this is due to nextjs being serverless and the model being created multiple times
const User = models.User || model("User", userSchema);

export default User;