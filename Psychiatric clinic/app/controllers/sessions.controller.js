const Clients = require('../models/sessions.model.js');


// Default message for /
exports.root= (req, res) => {
    console.log("My Sessions App.")
    return res.status(200).send({
        message: "My Sessions App."
    });
};

// Create and Save a new Quotation
exports.create = (req, res) => {
    // Validate the request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Sessions content cannot be empty!"
        });
    }

    // Create a new Quotation (using schema)
    const clients = new Clients({
       // _id : mongoose.Types.ObjectId().toHexString(),
       sessionnumber:req.body.sessionnumber,
       clients:req.body.clients,
       therapists:req.body.therapists,
       duration:req.body.duration,
       type:req.body.type,
       issueflag:req.body.issueflag,
       sessionnotes:req.body.sessionnotes
    });

    // Save Quotation in the database
    clients.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating the Sessions."
        });
    });
};

// Return all Quotations in the database
exports.findAll = (req, res) => {
    Clients.find()
    .then(clients => {
        res.send(clients);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Sessions."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Clients.findById(req.params.clientsId)
    .then(clients => {
        if(!clients) {
            return res.status(404).send({
                message: "Sessions not found with id " + req.params.clientsId
            });            
        }
        res.send(clients);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Sessions not found with id " + req.params.clientsId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Sessions with id " + req.params.clientsId
        });
    });
};

// Update a Quotation identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Sessions content cannot be empty"
        });
    }

    // Find the Quotation and update it with the request body
    Clients.findByIdAndUpdate(req.params.clientsId, {
        //_id : mongoose.Types.ObjectId().toHexString(),
        sessionnumber:req.body.sessionnumber,
        clients:req.body.clients,
        therapists:req.body.therapists,
        duration:req.body.duration,
        type:req.body.type,
        issueflag:req.body.issueflag,
        sessionnotes:req.body.sessionnotes
    }, { $set: req.body },   // $set - modify only the supplied fields
       { new: true })        // "new: true" return updated object
    .then(clients => {
        if(!clients) {
            return res.status(404).send({
                message: "Sessions not found with id " + req.params.clientsId
            });
        }
        res.send(clients);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Sessions not found with id " + req.params.clientsId
            });                
        }
        return res.status(500).send({
            message: "Error updating Sessions with id " + req.params.clientsId
        });
    });
};

// Update a Quotation identified by the quotationId in the request
exports.updateQuote = (req, res) => {
    // Validate Request
    if(!req.body.clients) {
        return res.status(400).send({
            message: "Sessions content cannot be empty"
        });
    }

    // Find the Quotation and update it with the request body
    Clients.findByIdAndUpdate(req.params.clientsId, {
        fname: req.body.fname
    },
       { new: true })  // "new: true" return updated object
    .then(clients => {
        if(!clients) {
            return res.status(404).send({
                message: "Sessions not found with id " + req.params.clientsId
            });
        }
        res.send(clients);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Sessions not found with id " + req.params.clientsId
            });                
        }
        return res.status(500).send({
            message: "Error updating Sessions with id " + req.params.quotationId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Clients.findByIdAndRemove(req.params.clientsId)
    .then(clients => {
        if(!clients) {
            return res.status(404).send({
                message: "Sessions not found with id " + req.params.clientsId
            });
        }
        res.send({message: "Sessions deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Sessions not found with id " + req.params.clientsId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Sessions with id " + req.params.clientsId
        });
    });
};

// Default message for /
exports.root= (req, res) => {
    console.log("My TherapistsApp. Use the app to manage your favourite quotations!")
    return res.status(200).send({
        message: "My Therapists App. Use the app to manage your favourite quotations!"
    });
};