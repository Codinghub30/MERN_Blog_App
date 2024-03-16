import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true,

    },
    profilePicture:{
        type: String,
        default: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A785%2F0*Ggt-XwliwAO6QURi.jpg&tbnid=d6qG3bzgfg4ymM&vet=12ahUKEwiUkuyy5_aEAxW6yzgGHdqnDR0QMyhHegUIARCTAg..i&imgrefurl=https%3A%2F%2Fmedium.com%2F%40KaitlinZhang%2Ftop-11-tips-to-take-the-perfect-profile-photo-with-example-portraits-55b9e1950b0&docid=6CVZdROVq4QIQM&w=785&h=1165&q=profile%20pic&ved=2ahUKEwiUkuyy5_aEAxW6yzgGHdqnDR0QMyhHegUIARCTAg",
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
 }, {timestamps:true})

const User = mongoose.model('User', userSchema);

export default User;