var router = require('express').Router();
var PRESIDENTSCLASS = require('../mongodb/mongoose_connection');
module.exports = router;

router.get('/', do_homepage);

function do_homepage(req, res) {
    console.log('do_homepage');
    res.render('index');
}

router.get('/api/v1/read', do_read);
router.post('/api/v1/create', do_create);
router.put('/api/v1/update', do_update);
router.delete('/api/v1/delete/:_id', do_delete);

function do_read(req, res) {
    console.log('reading all records');
    PRESIDENTSCLASS.find().then(function (results) {
        console.log(results);
        res.json(results);
    })
}

function do_create(req, res) {
    console.log('creating record');
    console.log(req.body);
    var data = {
        president: req.body.president,
        birth_year: req.body.birth_year,
        death_year: req.body.death_year,
        took_office: req.body.took_office,
        took_office: req.body.took_office,
        party: req.body.party
    }
    var employee = new PRESIDENTSCLASS(data);
    president.save().then(function (result) {
        console.log(result);
        res.json({
            message: 'backend saved!'
        })
    });
}

function do_update(req, res) {
    console.log('updating record');
    console.log(req.body);

    var update = {
        $set: {
            _id: req.body._id,
            president: req.body.president,
            birth_year: req.body.birth_year,
            death_year: req.body.death_year,
            took_office: req.body.took_office,
            took_office: req.body.took_office,
            party: req.body.party
        }
    }
    PRESIDENTSCLASS.findByIdAndUpdate(req.body._id, update).then(function (result) {
        console.log(result);
        res.json({
            message: 'backend updated!'
        })
    });
}

function do_delete(req, res) {
    console.log('deleting all records');
    console.log(req.params._id);

    PRESIDENTSCLASS.findByIdAndRemove(req.params._id).then(function (result) {
        console.log(result);
        res.json({
            message: 'backend deleted!'
        })
    });
};