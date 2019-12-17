const models = require('../models')
const Categories = models.categories
// const Users = models.users

exports.index = (req, res) => {
    Categories.findAll(
    //     {
    //     include: [{
    //         model: User,
    //         as: "createdBy"
    //     }]
    // }
    ).then(categories=>res.send(categories))
}

exports.show = (req, res) => {
    Categories.findOne({where: {id: req.params.id}}).then(categories=> res.send(categories))
}

exports.store = (req, res) => {
    Categories.create(req.body).then(categories=> {
        res.send({
            message: "success",
            categories
        })
    })
}

exports.update = (req, res) => {
    Categories.update(
        req.body,
        {where: {id: req.params.id}}
    ).then(categories=> {
        res.send({
            message: "success",
            categories
        })
    })
}

exports.delete = (req, res) => {
    Categories.destroy({where: {id: req.params.id}}).then(categories=> {
        res.send({
            message: "success",
            categories
        })
    })
}