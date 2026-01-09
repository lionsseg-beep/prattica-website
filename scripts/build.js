import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho para o executável do vite dentro de node_modules
// Usamos node para executar o script JS do vite diretamente, evitando o binário shell
const vitePath = path.resolve(__dirname, '../node_modules/vite/bin/vite.js');

console.log('Iniciando build personalizado...');
console.log(`Usando Vite em: ${vitePath}`);

try {
  // Executa o build do frontend usando node para chamar o vite.js
  console.log('Executando: node vite build');
  execSync(`node "${vitePath}" build`, { stdio: 'inherit' });
  
  // Executa o build do backend com esbuild
  console.log('Executando build do servidor...');
  execSync('npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', { stdio: 'inherit' });
  
  console.log('Build concluído com sucesso!');
} catch (error) {
  console.error('Erro durante o build:', error);
  process.exit(1);
}
