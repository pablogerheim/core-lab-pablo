import express from 'express';
import vehiclesController from '../controllers/vehicles.controller.js';

const router = express.Router();

router.get('/', vehiclesController.getVehicles);
router.patch('/', vehiclesController.patchVehicles);
router.post('/', vehiclesController.createVehicle);
router.put('/', vehiclesController.updateVehicle);
router.get('/:id', vehiclesController.getVehicles);
router.delete('/:id', vehiclesController.deleteVehicle);

export default router;
