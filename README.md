# VX Consultoria — Médicos

Landing page React + Vite com cinco seções (hero e captação, carrossel de clientes médicos, depoimentos em vídeo, pilares e processo), layout responsivo e ícones Lucide.

## Executar

```sh
npm install
npm run dev
```

Build: `npm run build`. A hospedagem estática deve redirecionar `/obrigado` para `index.html`.

## Configuração de lançamento

Configuração atual (o `.env.example` lista só a variável opcional `VITE_LEAD_ENDPOINT`):

- Formulário → GHL: o envio vai para o webhook de entrada da automação **"LP Médicos - Formulário do site (webhook)"** (subconta VX Consultoria, pasta "0. Funil de vendas"). A URL padrão está em `src/main.jsx` (`LEAD_ENDPOINT`) e pode ser sobrescrita por `VITE_LEAD_ENDPOINT`. A automação cria/atualiza o contato (campos "Como sua clínica ou consultório é formado?", "Especialidade médica", "Faturamento mensal da clínica" e utm_*) e cria a oportunidade no funil "Vendas - Implantação Comercial", etapa "Novo Contato", com Origem da Oportunidade = Formulário e Nicho = Médico. **A automação precisa estar publicada no GHL para os leads entrarem.**
- Meta Pixel: o código do pixel `3787742848072053` está no `index.html`. PageView dispara em toda visita; Lead somente em `/obrigado` após envio confirmado, sem repetição no refresh da mesma sessão. Para trocar de pixel, altere o ID nos dois pontos do `index.html`.
- Depoimentos em vídeo: coloque os arquivos `.mp4` (e capas opcionais) em `public/depoimentos/` e preencha `src/depoimentos.js` com vídeo, capa, nome e especialidade. Item sem vídeo aparece como card claramente identificado como pendente. Use apenas depoimentos reais e autorizados; prefira vídeos verticais comprimidos (até ~15 MB cada).

Payload (JSON plano): name, first_name, last_name, phone (E.164, +55…), email, team_size, specialty, revenue, consent, source (`LP Médicos`), page_url, utm_source, utm_medium, utm_campaign, utm_content, utm_term, fbclid.

Antes do lançamento: publicar a automação no GHL e fazer um envio real de teste; revisar o consentimento e a política de privacidade da operação. Validar captação real no GHL e evento no Gerenciador de Eventos.
# vx-lp-medico
