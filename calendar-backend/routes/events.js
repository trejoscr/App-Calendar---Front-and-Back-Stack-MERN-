/* 
    Rutas de eventos
    host + /api/events
*/

const {Router} = require('express');
const {check} = require('express-validator');
const {isDate} = require('../helpers/isDate');
const {validarCampos} = require('../middleware/validar-campos');
const {validarJWT} = require('../middleware/validar-jwt');
const {getEventos, crearEvento, actualizarEvento, eliminarEvento} = require('../controllers/events');

const router = Router();

router.use(validarJWT);

// Obtener eventos
router.get('/', getEventos);

// crear un nuevo evento
router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalizacion es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento
);

// actualizar evento
router.put(
    '/:id',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalizacion es obligatoria').custom(isDate),
        validarCampos
    ],
    actualizarEvento);

// borrar evento
router.delete('/:id', eliminarEvento);

module.exports = router;