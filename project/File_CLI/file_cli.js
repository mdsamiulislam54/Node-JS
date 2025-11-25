const path = require('path');
const fs = require('fs');

const categories = {
    images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff", ".svg"],
    videos: [".mp4", ".mkv", ".mov", ".avi", ".wmv"],
    audios: [".mp3", ".wav", ".aac", ".amr", ".ogg"],
    documents: [".pdf", ".doc", ".docx", ".txt", ".ppt", ".pptx", ".xls", ".xlsx"],
    archives: [".zip", ".rar", ".7z", ".tar", ".gz"],
    others: []
};


const fileTypes = [
    "photo.jpg",
    "video.mp4",
    "document.pdf",
    "audio.mp3",
    "archive.zip",
    "script.js",
    "notes.txt",
    "presentation.pptx",
    "spreadsheet.xlsx",
    "image.png",
    "movie.mkv",
    "music.flac",
    "compressed.7z",
    "website.html",
    "program.py",
    "java_code.java",
    "data.csv",

];


fs.mkdir((path.join(__dirname, "organized_files")), { recursive: true }, (err) => {
    if (err) {
        console.error("Error creating directory:", err);
        return;
    }

    fileTypes.forEach((file) => {
        const ext = path.extname(file).toLocaleLowerCase();
        let category = "others";
        for (const [key, extensions] of Object.entries(categories)) {
            if (extensions.includes(ext)) {
                category = key;
                break;
            }
        }

        const categoryPath = path.join(__dirname, "organized_files", category);
        fs.mkdir((categoryPath), { recursive: true }, (err) => {
            if (err) {
                console.error("Error creating category directory:", err);
                return;
            }

            fs.writeFile((path.join(categoryPath, file)), "Sample content", (err) => {
                if (err) {
                    console.error("Error creating file:", err);
                } else {
                    console.log(`Created file: ${path.join(category, file)}`);

                }
            });

        });




    });

});
