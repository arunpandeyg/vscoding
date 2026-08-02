import mongoose from 'mongoose';



const Connection = async (username, password) => {
    const URL = `mongodb+srv://arunpandey:ArunPandey@practice.egs516e.mongodb.net/crudp?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('database connected successfully.');
    } catch (error) {
        console.log(`error, while connecting the database `, +error);
    }
}

export default Connection;