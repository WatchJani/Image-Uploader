const { Router } = require('express');

const textEditorController = require('../controllers/textEditorController');

const { upload } = require('../utils/uploadImage');

const router = Router();

router.post('/images', upload.single('image'), textEditorController.upload_Post);

module.exports = router;
