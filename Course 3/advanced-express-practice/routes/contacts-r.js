
let express = require('express');
let router = express.Router();
let { list, show, create, update, remove } = require('../controllers/contacts-c');


router.get('/contacts', list);
router.get('/contacts/:id', show);
router.post('/contacts', create);
router.put('/contacts/:id', update);
router.delete('/contacts/:id', remove);

module.exports = router;