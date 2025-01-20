const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

//Setting static forlder
app.use(express.static(path.join(__dirname,'public')))



const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`))