const { Router } = require('express');
const router = Router();
// const common = require('tablas comunes entre las aplicaciones');

router.get('/', (req, res) => {
  res.send('Rutas comunes');
});



//post request
router.post('/', (req, res) => {
  res.send('Rutas comunes post');
});



//put request
router.put('/', (req, res) => {
  res.send('Rutas comunes put');
});



//delete request
router.delete('/', (req, res) => {
  res.send('Rutas comunes delete (baja lógica)');
});

module.exports = router;