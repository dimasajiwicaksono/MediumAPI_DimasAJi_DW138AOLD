const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')
const cors = require('cors')




const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.json())

//controllers
const categoriesController = require('./controllers/categories')

app.group("/api/v1", (router) => {

    // API
    router.get('/categories', categoriesController.index)    
    router.get('/category/:id', categoriesController.show)    
    router.post('/category', categoriesController.store)    
    router.patch('/category/:id', categoriesController.update)    
    router.delete('/category/:id', categoriesController.delete)
})


app.listen(port, () => console.log(`Listening on port ${port}!`))