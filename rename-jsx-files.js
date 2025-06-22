// rename-jsx-files.js
import { readdir, readFile, rename, stat } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directory = path.join(__dirname, 'src');

async function renameJsToJsx(dir) {
  const files = await readdir(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const fileStat = await stat(fullPath);
    if (fileStat.isDirectory()) {
      await renameJsToJsx(fullPath);
    } else if (file.endsWith('.js')) {
      const content = await readFile(fullPath, 'utf8');
      if (content.includes('<') && content.includes('/>')) {
        const newPath = fullPath.replace(/\.js$/, '.jsx');
        await rename(fullPath, newPath);
        console.log(`Renamed: ${file} → ${path.basename(newPath)}`);
      }
    }
  }
}

renameJsToJsx(directory).catch(console.error);
