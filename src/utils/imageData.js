// imageData.js
const fs = require("fs");
const path = require("path");

// Function to get file names from a directory
const getFileNamesFromDir = (dir) => {
  return fs.readdirSync(dir);
};

const imagesDir = path.join(process.cwd(), "public", "images");
const imageNames = getFileNamesFromDir(imagesDir);

// Create a nested object with dot-separated keys and image paths as values
const images = imageNames.reduce((acc, imageName) => {
  const imagePath = `/images/${imageName}`;
  const key = imageName.split(".")[0]; // Remove the file extension to use as the key
  acc[key] = imagePath;
  return acc;
}, {});

export default images;
