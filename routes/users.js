const {v4: uuidv4} = require('uuid');

const express = require('express');
const router = express.Router();

const {getUsers,createUser,findUser,deleteUser,updateUser} = require('../controllers/users.js');

router.get('/',getUsers);

router.post('/',createUser);

router.get('/:id',findUser)

router.delete('/:id',deleteUser)

router.patch('/:id',updateUser)



module.exports = router; 