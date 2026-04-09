import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

console.log('Iniciando build...');
console.log(`Node version: ${process.version}`);
console.log(`Root: ${root}`);

// Localiza o vite — tenta node_modules local e npx como fallback
function findVite() {
  const candidates = [
    path.join(root, 'node_modules', 'vite', 'bin', 'vite.js'),
    path.join(root, 'node_modules', '.bin', 'vite'),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) {
      console.log(`Vite encontrado: ${c}`);
      return c;
    }
  }
  return null;
}

try {
  const viteBin = findVite();

  // Build frontend
  console.log('Executando build do frontend (Vite)...');
  if (viteBin && viteBin.endsWith('.js')) {
    // Chama direto via node — evita problema de permissão no binário shell
    execSync(`node "${viteBin}" build`, { stdio: 'inherit', cwd: root });
  } else if (viteBin) {
    // Tenta executar o binário shell com node explícito
    execSync(`node "${path.join(root, 'node_modules', 'vite', 'bin', 'vite.js')}" build`, { stdio: 'inherit', cwd: root });
  } else {
    // Fallback: npx
    execSync('npx --no-install vite build', { stdio: 'inherit', cwd: root });
  }

  // Build backend
  console.log('Executando build do servidor...');
  const esbuildBin = path.join(root, 'node_modules', '.bin', 'esbuild');
  const esbuildJs  = path.join(root, 'node_modules', 'esbuild', 'bin', 'esbuild');

  if (fs.existsSync(esbuildJs)) {
    execSync(
      `node "${esbuildJs}" server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist`,
      { stdio: 'inherit', cwd: root }
    );
  } else {
    execSync(
      `npx --no-install esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist`,
      { stdio: 'inherit', cwd: root }
    );
  }

  console.log('Build concluído com sucesso!');
} catch (error) {
  console.error('Erro durante o build:', error.message);
  process.exit(1);
}
