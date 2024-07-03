const express = require('express');
const { signup, login, getUsers, updateUsers, deleteUsers } = require('../controllers/userController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/get', getUsers);
router.put('/update/:ID', updateUsers);
router.delete('/delete/:ID', deleteUsers);



module.exports = router;