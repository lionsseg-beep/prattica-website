import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Iniciando build...');
console.log(`Node version: ${process.version}`);

try {
  // Build frontend com vite via npx (não depende de caminho absoluto)
  console.log('Executando build do frontend (Vite)...');
  execSync('npx vite build', { stdio: 'inherit', cwd: path.resolve(__dirname, '..') });

  // Build backend com esbuild
  console.log('Executando build do servidor...');
  execSync(
    'npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist',
    { stdio: 'inherit', cwd: path.resolve(__dirname, '..') }
  );

  console.log('Build concluído com sucesso!');
} catch (error) {
  console.error('Erro durante o build:', error.message);
  process.exit(1);
}
