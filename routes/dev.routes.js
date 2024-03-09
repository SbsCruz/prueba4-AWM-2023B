const DevController = require('../controllers/dev.controller');

module.exports = function(app){
    app.post('/api/dev/new',  DevController.createDev);
    app.get('/api/devs', DevController.getAllDevs);

}
