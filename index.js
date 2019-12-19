require('express-group-routes')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.json())

//controllers
const categoriesController = require('./controllers/categories')
const articleController = require('./controllers/articles')
const commentController = require('./controllers/comment')



app.group("/api/v1", (router) => {

    // categories API
    router.get('/categories', categoriesController.index)
    router.get('/category/:id', categoriesController.show)    
    router.post('/category', categoriesController.store)    
    router.patch('/category/:id', categoriesController.update)    
    router.delete('/category/:id', categoriesController.delete)

    router.get('/category/:id/articles', categoriesController.showArticle)

    //Article API
    router.get('/articles', articleController.index)  
    router.get('/article/:id', articleController.show)    
    router.post('/article', articleController.store)    
    router.patch('/article/:id', articleController.update)    
    router.delete('/article/:id', articleController.delete)
    router.get('/article_popular', articleController.popularDesc)  

    // User API
    router.get('/users', articleController.index)    
    router.get('/user/:id', articleController.show)    
    router.post('/user', articleController.store)    
    router.patch('/article/:id', articleController.update)    
    router.delete('/article/:id', articleController.delete)

    // Comments API
    // User API
    router.get('/comments', commentController.index)    
    router.get('/comments/:id', commentController.show)    
    router.post('/comment', commentController.store)    
    router.patch('/comment/:id', commentController.update)    
    router.delete('/comment/:id', commentController.delete)


})

app.listen(port, () => console.log(`Listening on port ${port}!`))