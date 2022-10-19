const express = require('express')
const cors = require('cors')

const {getAll, getOne} = require('./catalogService')

const app = express()
const port = 3001

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors())
app.use(express.json());
app.get('*', cors(corsOptions))
app.post('*', cors(corsOptions))
app.patch('*', cors(corsOptions))
app.delete('*', cors(corsOptions))

app.get('/api/catalog/items', async (req, res) => {
    try{
        const data = await getAll(req);
        res.status(200).json(data);
    } catch (error){
        res.status(400).json({
            body: error.message,
        });
    }
})

app.get('/api/catalog/item/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const data = await getOne(id);
        res.status(200).json(data);
    } catch (error){
        res.status(400).json({
            body: error.message,
        });
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})