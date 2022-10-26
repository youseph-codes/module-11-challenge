const router = require('exppress').Router();
const notesROUTES = require('./notes-routes');
router.use(notesROUTES);

module.exports = router;