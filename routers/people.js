const express = require('express');
const router = express.Router();
const peopleControllers = require('../controllers/people');

router.get("/people", peopleControllers.list);
router.get("/people/:id", peopleControllers.show);
router.post("/people", peopleControllers.create);
router.put("/people/:id", peopleControllers.update);
router.delete("/people/:id", peopleControllers.remove);  

module.exports = router;