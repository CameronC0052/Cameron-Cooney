const Clients = require('../models/therapists.models.js');


exports.root = (req, res) => {
    Clients.find()
    .then(therapists => {
        res.render('therapists_view',{
            results: therapists
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Therapists."
        });
    });
};

// search for quotations, matching string on quote field
exports.searchfname = (req, res) => {
    var search = req.params.s;
    console.log("Searching Therapists: "+search)
    Clients.find({ fname: new RegExp(search,"ig")})
    .then(therapists => {
        res.render('therapists_view',{
            results: therapists
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Therapists."
        });
    });
};



// Create and Save a new Quotation
exports.create = (req, res) => {
    // Validate the request
  /*  if(!req.body.content) {
        return res.status(400).send({
            message: "Therapists content cannot be empty!"
        });
    }*/

    // Create a new Quotation (using schema)
    const therapists = new Clients({
       // _id : mongoose.Types.ObjectId().toHexString(),
             title: req.body.title,
             fname: req.body.fname,
             lname: req.body.lname,
             email: req.body.email,
             mobile: req.body.mobile
    });

    // Save Quotation in the database
    therapists.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating the Therapists."
        });
    });
};

// Return all Quotations in the database
exports.findAll = (req, res) => {
    Clients.find()
    .then(therapists => {
        res.send(therapists);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Therapists."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Clients.findById(req.params._id)
    .then(therapists => {
        if(!therapists) {
            return res.status(404).send({
                message: "Therapists not found with id " + req.params._id
            });            
        }
        res.send(therapists);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Therapists not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Therapists with id " + req.params._id
        });
    });
};

// Update a Quotation identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
   /* if(!req.body.content) {
        return res.status(400).send({
            message: "Therapists content cannot be empty"
        });
    }*/

    // Find the Quotation and update it with the request body
    Clients.findByIdAndUpdate(req.params._id, {
        //_id : mongoose.Types.ObjectId().toHexString(),
             title: req.body.title,
             fname: req.body.fname,
             lname: req.body.lname,
             email: req.body.email,
             mobile: req.body.mobile
    }, //{ $set: req.body },   // $set - modify only the supplied fields
       { new: true })        // "new: true" return updated object
    .then(therapists => {
        if(!therapists) {
            return res.status(404).send({
                message: "Therapists not found with id " + req.params._id
            });
        }
        res.send(therapists);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Therapists not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Error updating Therapists with id " + req.params._id
        });
    });
};



// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Clients.findByIdAndRemove(req.params._id)
    .then(therapists => {
        if(!therapists) {
            return res.status(404).send({
                message: "Therapists not found with id " + req.params._id
            });
        }
        res.send({message: "Therapists deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Therapists not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Could not delete Therapists with id " + req.params._id
        });
    });
};
