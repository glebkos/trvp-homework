const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settingsController.ts');
const profileController = require('../controllers/profileController.ts');
const managerController = require('../controllers/managerController.ts');
const clientsController = require('../controllers/clientController.ts');

router.get('/settings', settingsController.settingsGet);
router.post('/settings', settingsController.settingsUpdate);

router.get('/profiles', profileController.profilesGet);
router.get('/profiles/:id', profileController.profileGet);
router.post('/profiles', profileController.profilesAdd);
router.delete('/profiles/:id', profileController.profilesDelete);

router.get('/manager/list', managerController.managerListGet);
router.get('/manager/:id', managerController.managerGet);
router.post('/manager/create', managerController.managerAdd);
router.post('/manager/:id', managerController.managerUpdate);
router.delete('/manager/:id', managerController.managerDelete);

router.get('/clients', clientsController.clientsGet);
router.get('/clients/:id', clientsController.clientGet);
router.post('/clients/create', clientsController.clientsAdd);
router.post('/clients/:id', clientsController.clientsUpdate);
router.delete('/clients/:id', clientsController.clientsDelete);

module.exports = router;
