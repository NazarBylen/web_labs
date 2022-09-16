const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

const fs = require('fs').promises;

async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath);
        return JSON.parse(data);
    } catch (error) {
        throw new Error(`Got an error trying to read the file: ${filePath}`);
    }
}

app.use(cors())
app.get('*', cors(corsOptions))
app.post('*', cors(corsOptions))
app.patch('*', cors(corsOptions))
app.delete('*', cors(corsOptions))

app.get('/gems', async (req, res) => {
    try{
        const data = await readFile("./data.json");
        res.status(200).json(data);
    } catch (error){
        console.log(error);
        res.status(400).json({
            body: error.message,
        });
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})