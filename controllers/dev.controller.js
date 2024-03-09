const Dev = require('../models/dev.model');


module.exports.createDev = async (request, response) => {
    const {  devName, devAvatar, devBio, devHTML, devJS, dvCSS, devNode, devMongo } = request.body;
    if (!devName || !devAvatar || !devBio) {
        response.status(400).json({ message: 'Missing fields, all are mandatory!' });
    } else {
        Dev.create({
            devName, devAvatar, devBio, devHTML, devJS, dvCSS, devNode, devMongo
        })
            .then(() => response.json({
                devName,
                devAvatar,
                devBio,
                devHTML,
                devJS,
                dvCSS,
                devNode,
                devMongo
            }))
            .catch(err => response.status(400).json(err));

    }
}


module.exports.getAllDevs = (_, response) => {
    Dev.find({})
        .then(users => response.json(users))
        .catch(err => response.json(err))
}


