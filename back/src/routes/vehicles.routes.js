import express from 'express';
import vehiclesController from '../controllers/vehicles.controller.js';

const router = express.Router();

router.get('/', vehiclesController.getVehicles);
router.get('/:id', vehiclesController.getVehicles);
router.patch('/', vehiclesController.patchVehicles);
router.delete('/:id', vehiclesController.deleteVehicle);
router.post('/', vehiclesController.createVehicle);
router.put('/', vehiclesController.updateVehicle);

export default router;
