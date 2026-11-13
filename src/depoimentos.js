// Depoimentos em vídeo exibidos na seção "Depoimentos".
// Coloque os arquivos em public/depoimentos/ e preencha cada item abaixo.
// - video: caminho do .mp4 (ex.: '/depoimentos/dra-fulana.mp4'). Vazio = card marcado como pendente.
// - poster: imagem de capa opcional (ex.: '/depoimentos/dra-fulana.jpg'). Sem ela, usa o primeiro quadro do vídeo.
// - name e specialty: como o médico autorizou ser identificado.
// Use apenas depoimentos reais e autorizados. Adicione ou remova itens à vontade.
export const depoimentos = [
  { video: '/depoimentos/dra-nathalia-matos.mp4', poster: '', name: 'Dra. Nathália Matos', specialty: 'Dermatologia · Manaus' },
  { video: '/depoimentos/gmed-santa-clara.mp4', poster: '/depoimentos/gmed-santa-clara.jpg', name: 'Lucimar', specialty: 'CEO · Grupo Médico Santa Clara' },
];

// Prints de conversas (WhatsApp) exibidas na mesma faixa, depois dos vídeos. Somente de médicos e de equipes de clínicas.
// Origem: "VX LP/vx-landingpage-main/public/uploads" (proof2.jpeg, proof3.webp e proof4.jpeg), já sem nome e foto.
// - src: caminho da imagem em public/depoimentos/. w e h: dimensões reais do arquivo.
// - tag: selo sobre a imagem. caption e label: legenda do card.
// - fit: 'contain' mostra a print inteira sobre um fundo desfocado dela mesma (para prints mais largas que o card);
//   sem isso a miniatura preenche o card e é recortada a partir do topo.
export const prints = [
  { src: '/depoimentos/print-104k-metade-do-mes.jpeg', w: 928, h: 1600, tag: '+R$104k', caption: '104k até ontem, na metade do mês', label: 'Conversa com médica cliente', alt: 'Print de conversa no WhatsApp em que a médica escreve: 104k até ontem, metade do mês.' },
  { src: '/depoimentos/print-100k-consultorio.webp', w: 1161, h: 1264, tag: 'R$100.520', caption: 'Saí da prefeitura: 100% consultório', label: 'Conversa com médica cliente', alt: 'Print de conversa no WhatsApp em que a médica escreve: saí da prefeitura, 100% fulltime consultório, fechamos hoje em R$100.520.', fit: 'contain' },
  { src: '/depoimentos/print-feedback-treinamento.jpeg', w: 739, h: 1433, tag: 'Feedback', caption: 'O paciente fechou o procedimento', label: 'Conversa com equipe de clínica', alt: 'Print de conversa no WhatsApp com feedback de uma atendente de clínica sobre o treinamento: ela retomou o contato com um paciente e ele fechou o procedimento.' },
];
