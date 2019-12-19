const models = require('../models')
const Articles = models.articles
const Categories = models.categories
const Users = models.users
const Comment = models.comment

exports.index = (req, res) => {
    Articles.findAll(
        { 
            include: [
                {model: Categories, as: "category"},
                {model:Users, as : 'createdBy'},
                {model:Comment, as:'comments'}
            ]  
        }).then(articles=>res.send(articles))
}

//order data DESC and limit
exports.popularDesc = (req, res) => {
    Articles.findAll(
        { 
            include: [
                {model: Categories, as: "category"},
                {model:Users, as : 'createdBy'}
            ], order : [
                ['createdAt','DESC'],
                ['id','ASC']     // sort by coloumn_name
            ], limit: 5
        }).then(articles=>res.send(articles))
}

exports.show = (req, res) => {
    Articles.findOne({where: {id: req.params.id},
                        include: [
                            {model:Categories, as : 'category'},
                        ]
                    }).then(articles=> res.send(articles))
}

exports.store = (req, res) => {
    Articles.create(req.body).then(articles=> {
        res.send({
            message: "success",
            articles
        })
    })
}

exports.update = (req, res) => {
    Articles.update(
        req.body,
        {where: {id: req.params.id}}
    ).then(articles=> {
        res.send({
            message: "success",
            articles
        })
    })
}

exports.delete = (req, res) => {
    Articles.destroy({where: {id: req.params.id}}).then(articles=> {
        res.send({
            message: "success",
            articles
        })
    })
}