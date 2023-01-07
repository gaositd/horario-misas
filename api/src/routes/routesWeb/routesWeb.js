const { Router } = require('express');
const router = Router();
// const common = require('tablas comunes entre las aplicaciones');

router.get('/', (req, res) => {
  res.send('Rutas web get');
});




//post request
router.post('/', (req, res) => {
  res.send('Rutas web post');
});



//put request
router.put('/', (req, res) => {
  res.send('Rutas web put');
});



//delete request
router.delete('/', (req, res) => {
  res.send('Rutas web delete (baja lógica)');
});


module.exports = router;