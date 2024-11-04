import {Router} from 'express';
import multer from 'multer';
import {getProductos, getproductosxid, postProducto, putProducto, patchProducto, deleteProducto} from '../controladores/productos.Ctrl.js';

//configurar multer para almacenar las imagenes
const router = Router();

// Configure multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage }); // Initialize multer with storage configuration

// Armar nuestras rutas

router.get('/productos', getProductos); // Select
router.get('/productos/:id', getproductosxid);
router.get('/productos', upload.single('image',postProducto)); // Select // Select por id
router.post('/productos', postProducto); // Insertar
router.put('/productos/:id', putProducto); // Update completo
router.patch('/productos/:id', patchProducto); // Update parcial
router.delete('/productos/:id', deleteProducto); // Eliminar

export default router;
