const { Router } = require('express');
const router = Router();
// const common = require('tablas comunes entre las aplicaciones');
const getDataSurvey = require('./survey/getData.js');
const postDataSurvey = require('./survey/postData.js');
const putDataSurvey = require('./survey/putdata.js');
const deleteDataSurvey = require('./survey/deleteData.js');

router.get('/', getDataSurvey);

//post request
router.post('/', postDataSurvey);

//put request
router.put('/', putDataSurvey);

//delete request
router.delete('/', deleteDataSurvey);


module.exports = router;