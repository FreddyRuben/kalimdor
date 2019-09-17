const multer = require('multer');

const storage = multer.diskStorage({
    destination: 'upload',
    filename: (req, file, cb) => {
     cb(null, 'video.mp4.mkv')   
    }
});

module.exports = multer({storage});