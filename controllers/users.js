const models = require('../models')
const Articles = models.articles
const Categories = models.categories


exports.index = (req, res) => {
    Articles.findAll(
        {
            include: [{
            model: Categories,
            as: "categoryId",
        }]
    }
    ).then(articles=>res.send(articles))
}

exports.show = (req, res) => {
    Articles.findOne({where: {id: req.params.id}}).then(articles=> res.send(articles))
}

exports.store = (req, res) => {
    Articles.create(req.body).then(Users=> {
        res.send({
            message: "success",
            Users
        })
    })
}

exports.update = (req, res) => {
    Users.update(
        req.body,
        {where: {id: req.params.id}}
    ).then(Users=> {
        res.send({
            message: "success",
            Users
        })
    })
}

exports.delete = (req, res) => {
    Users.destroy({where: {id: req.params.id}}).then(Users=> {
        res.send({
            message: "success",
            Users
        })
    })
}