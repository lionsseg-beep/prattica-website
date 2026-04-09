import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const viteJs   = path.join(root, 'node_modules', 'vite', 'bin', 'vite.js');
const esbuildJs = path.join(root, 'node_modules', 'esbuild', 'bin', 'esbuild');

console.log('Iniciando build...');
console.log(`Node: ${process.version}`);
console.log(`Vite: ${viteJs}`);

try {
  console.log('Build frontend...');
  execSync(`node "${viteJs}" build`, { stdio: 'inherit', cwd: root });

  console.log('Build servidor...');
  execSync(
    `node "${esbuildJs}" server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist`,
    { stdio: 'inherit', cwd: root }
  );

  console.log('Build concluido!');
} catch (err) {
  console.error('Erro:', err.message);
  process.exit(1);
}
