const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5lgbjut.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 5000;

app.get('/', (req, res) => {
    res.send("hello from db it's working");
})

async function run() {
    try {

        await client.connect();
        const myDB = client.db("doctorsPortal");
        const myColl = myDB.collection("appointments");

        app.post('/addAppointment', async (req, res) => {
            const appointment = req.body;
            console.log(appointment);
            try {
                const result = await myColl.insertOne(appointment);
                if (result.insertedCount > 0) {
                    res.send({ success: true });
                } else {
                    res.send({ success: false });
                }
            } catch (err) {
                console.error(err);
                res.status(500).send({ success: false, error: err.message });
            }
            
        })

        app.post('/appointmentsByDate',async (req,res)=>{
            const date = req.body;
            console.log(date.selectedDate);
            try {
                const resultArray = await myColl.find({ date: date.selectedDate}).toArray();
                res.send(resultArray);
                console.log(resultArray);
            } catch (err) {
                console.error(err);
                res.status(500).send({ success: false, error: err.message });
            }
            
        })
        


    } finally {

    }
}
run().catch(console.dir);


app.listen(process.env.PORT || port)