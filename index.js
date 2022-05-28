require('dotenv').config()
const express =  require ('express')
const mongoose = require ('mongoose')
const app = express()

app.use (
    express.urlencoded({
        extended:true,
    }),
)

app.use (express.json())

 const parceirosRoutes = require('./routes/parceirosRoutes')

 app.use('/parceiros', parceirosRoutes)

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

// lembrar de colar a url de conexão 
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@zedeliveryapi.6bfql.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log("Conectado ao MongoDB! ")
    app.listen(3000)
})
.catch((err) => console.log(err))