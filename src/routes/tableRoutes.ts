import { Router } from 'express';
import * as TableController from '../controllers/tableController';

const router = Router();

router.get('/', TableController.getTables);
router.get('/:id', TableController.getTable);
router.post('/', TableController.createTable);
router.put('/:id', TableController.updateTable);
router.delete('/:id', TableController.deleteTable);

export default router;
