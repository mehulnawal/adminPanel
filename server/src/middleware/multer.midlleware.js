import multer from 'multer';
import path from 'path';
import fs from 'fs';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {

        const destFolder = path.join(process.cwd(), "public", "images");

        if (!fs.existsSync(destFolder)) {
            fs.mkdirSync(destFolder, { recursive: true });
        }

        cb(null, destFolder)
    },

    filename: (req, file, cb) => {

        const uniqueName = "userProfile_" + Date.now() + path.extname(file.originalname);
        cb(null, uniqueName)
    },
})

const fileFilter = (req, file, cb) => {
    const allowedFiles = ['image/png', 'image/jpg', 'image/jpeg'];

    if (!allowedFiles.includes(file.mimetype))
        return cb(new Error("Only .jpg, .png, .jpeg images are allowed!"), false);

    cb(null, true);
}

export const upload = multer(
    {
        storage,
        fileFilter,
        limits: {
            fileSize: 5 * 1024 * 1024 //5MB
        }
    }
)