# VX Consultoria — Médicos

Landing page React + Vite com cinco seções (hero e captação, carrossel de clientes médicos, depoimentos em vídeo, pilares e processo), layout responsivo e ícones Lucide.

## Executar

```sh
npm install
npm run dev
```

Build: `npm run build`. A hospedagem estática deve redirecionar `/obrigado` para `index.html`.

## Configuração de lançamento

Copie `.env.example` para `.env.local` e configure:

- `VITE_LEAD_ENDPOINT`: endpoint público de captação que aceite POST JSON e CORS. Use um backend/webhook que encaminhe os dados ao GHL. Nunca inclua tokens privados no frontend. O backend deve validar campos, limitar requisições e retornar sucesso apenas após registrar o lead.
- `VITE_META_PIXEL_ID`: ID numérico do pixel. PageView é inicializado na visita; Lead somente em `/obrigado` após envio confirmado, sem repetição no refresh da mesma sessão.
- Depoimentos em vídeo: coloque os arquivos `.mp4` (e capas opcionais) em `public/depoimentos/` e preencha `src/depoimentos.js` com vídeo, capa, nome e especialidade. Item sem vídeo aparece como card claramente identificado como pendente. Use apenas depoimentos reais e autorizados; prefira vídeos verticais comprimidos (até ~15 MB cada).

Payload: name, phone, email, team_size, specialty, revenue, consent, source (`vx-medicos`), tracking (UTMs e fbclid). Sem endpoint, o formulário informa indisponibilidade e não simula envio. O formulário inclui estrutura da clínica ou consultório e especialidade médica.

Antes do lançamento: inserir logo oficial, depoimentos em vídeo autorizados (ou remover os cards pendentes), endpoint e pixel; revisar o consentimento e a política de privacidade da operação. Validar captação real no GHL e evento no Gerenciador de Eventos.
# vx-lp-medico
