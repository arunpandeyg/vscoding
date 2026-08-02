import mongoose from "mongoose";
import autoIncreament from 'mongoose-auto-increment';


const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String
});
autoIncreament.initialize(mongoose.connection);
userSchema.plugin(autoIncreament.plugin, 'user');

const user = mongoose.model('user', userSchema);
export default user;

