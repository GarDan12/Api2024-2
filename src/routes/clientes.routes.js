import {Router} from 'express';
import {getClientes, getclientesxid, postCliente, putCliente, patchCliente, deleteCliente} from '../controladores/clientesCtrl.js';

const router = Router();

// Armar nuestras rutas

router.get('/clientes', getClientes); // Select
router.get('/clientes/:id', getclientesxid); // Select por id
router.post('/clientes', postCliente); // Insertar
router.put('/clientes/:id', putCliente); // Update completo
router.patch('/clientes/:id', patchCliente); // Update parcial
router.delete('/clientes/:id', deleteCliente); // Eliminar

export default router;
