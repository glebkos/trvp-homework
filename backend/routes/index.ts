const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settingsController.ts');
const profileController = require('../controllers/profileController.ts');

router.get('/settings', settingsController.settingsGet);
router.post('/settings', settingsController.settingsUpdate);

router.get('/profiles', profileController.profilesGet);
router.post('/profiles', profileController.profilesAdd);

module.exports = router;
