module.exports = (app) => {
    const clients = require('../controllers/clients.controller.js');
    const therapists = require('../controllers/therapists.controller.js');
    const sessions = require('../controllers/sessions.controller.js');
    /*
    // Default message for /
    app.get('/', clients.root);

    // Create a new Quotation
    app.post('/clients', clients.create);

    // Retrieve all Quotations
    app.get('/clients', clients.findAll);

    // Retrieve a single Quotation specified by quotationId
    app.get('/clients/:clientsId', clients.findOne);

    // Update a Quotation specified by quotationId
    app.put('/clients/:clientsId', clients.update);

    // Delete a Quotation specified by quotationId
    app.delete('/clients/:clientsId', clients.delete);*/


    //Therapists
    app.get('/', therapists.root);

    app.post('/therapists', therapists.create);

    // Retrieve all Quotations
    app.get('/therapists', therapists.findAll);

    // Retrieve a single Quotation specified by quotationId
    app.get('/therapists/:_id', therapists.findOne);

    // Update a Quotation specified by quotationId
    app.put('/therapists/:_id', therapists.update);

    // Delete a Quotation specified by quotationId
    app.delete('/therapists/:_id', therapists.delete);

    app.get('/therapists/:s', therapists.searchfname);
/*
    //Sessions
    app.get('/', sessions.root);

    app.post('/sessions', sessions.create);

    // Retrieve all Quotations
    app.get('/sessions', sessions.findAll);

    // Retrieve a single Quotation specified by quotationId
    app.get('/sessions/:sessionsId', sessions.findOne);

    // Update a Quotation specified by quotationId
    app.put('/sessions/:sessionsId', sessions.update);

    // Delete a Quotation specified by quotationId
    app.delete('/sessions/:sessionsId', sessions.delete);*/
}