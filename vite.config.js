import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Página de agradecimento: o app decide o que mostrar pelo caminho (/obrigado), mas uma hospedagem estática
// só entrega esse endereço se existir um arquivo para ele. Depois do build, copia dist/index.html para
// dist/obrigado/index.html, com título próprio e fora dos buscadores.
function obrigadoPage() {
  let outDir = 'dist';
  return {
    name: 'obrigado-page',
    apply: 'build',
    configResolved(config) { outDir = resolve(config.root, config.build.outDir); },
    closeBundle() {
      const html = readFileSync(resolve(outDir, 'index.html'), 'utf8')
        .replace(/<title>.*?<\/title>/, '<title>Recebemos seu contato | VX Consultoria</title><meta name="robots" content="noindex"/>');
      mkdirSync(resolve(outDir, 'obrigado'), { recursive: true });
      writeFileSync(resolve(outDir, 'obrigado/index.html'), html);
    },
  };
}

export default defineConfig({ plugins: [react(), obrigadoPage()] });
