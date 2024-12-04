const express = require('express');
const path = require('path');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Serve the HTML file for the index page
router.get('/', (req, res) => {
    itemController.getAllItems(req, res, (items) => {
        res.sendFile(path.join(__dirname, '../views/index.html'));
    });
});

// API routes
router.post('/add', itemController.createItem);
router.post('/update', itemController.updateItem);
router.post('/delete', itemController.deleteItem);

module.exports = router;
