// nodeScript.js
const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'task_automation');

// Create the directory if it doesn't exist
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// Create three text files with content
for (let i = 1; i <= 3; i++) {
    fs.writeFileSync(path.join(dirPath, `file${i}.txt`), `Content for file ${i}`);
}

// Concatenate content of the three files
const concatenatedContent = fs.readdirSync(dirPath)
    .filter(file => file.startsWith('file'))
    .map(file => fs.readFileSync(path.join(dirPath, file), 'utf-8'))
    .join('\n');

// Write the concatenated content to a new file
fs.writeFileSync(path.join(dirPath, 'concatenated.txt'), concatenatedContent);

// Print the content of "concatenated.txt" to the console
console.log(concatenatedContent);

// Delete "file1.txt," "file2.txt," and "file3.txt"
for (let i = 1; i <= 3; i++) {
    fs.unlinkSync(path.join(dirPath, `file${i}.txt`));
}
