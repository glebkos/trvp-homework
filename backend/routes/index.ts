const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settingsController.ts');

router.get('/settings', settingsController.settingsGet);
router.post('/settings', settingsController.settingsGet);

module.exports = router;
