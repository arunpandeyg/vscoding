import express from 'express';
import mongoose from 'mongoose';
import app from express();
import foodModule from './module/food';

app.use(express.json());
//arunpandeyntl
//Jjb0oUC0DFf0SrO2
mongoose.connect('mongodb://arunpandeyntl:Jjb0oUC0DFf0SrO2@ac-xhy88ig-shard-00-00.e75sgce.mongodb.net:27017,ac-xhy88ig-shard-00-01.e75sgce.mongodb.net:27017,ac-xhy88ig-shard-00-02.e75sgce.mongodb.net:27017/crud?replicaSet=atlas-6qvufb-shard-0&ssl=true&authSource=admin', {
    useNewUrlParser: true,
});

app.get('/', async(req, res) => {
    const food = new foodModule({
        foodName: 'FriedRice',
        daysSinceIAte: 3        
            
    });
    try{
            await food.save();

        }catch(err) {
            console.log(err);F
        }
})

const port = process.env.PORT || 8080;

app.listen(port, () => `Server running on port ${port} 🔥`);