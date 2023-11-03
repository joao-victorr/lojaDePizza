import multer from 'multer';
import path from 'path';


export const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.resolve("public/images/"));
    },
    filename: (req, file, callback) => {
        const time = new Date().getTime();

        callback(null, `${time}_${file.originalname}`);
    }
})

const upload = multer({storage})

export { upload };
