# Prompts & Guia de Engenharia de Prompt para Google Stitch (`stitch.withgoogle.com`)
## Infraestrutura Clínica & CRM Médico TROPHÉ
### Design System: G-Med Minimal MedTech (Tokens: Lime `#DAFB59`, Indigo `#6179FA`, Onyx `#1B1E27`, Canvas `#F1F3F9`)
### 100% dos Textos, Métricas e Rótulos em Português do Brasil (pt-BR)

Este documento foi construído atuando como **Engenheiro de Prompt & Webdesigner Sênior**. Cada prompt foi calibrado tecnicamente com terminologia exata de UI/UX, tokens de cores extraídos diretamente do design system, hierarquia de componentes e especificações estéticas para que o **Google Stitch** gere mockups com fidelidade cirúrgica.

---

## 1. Configuração Global no Modal do Stitch

No modal de setup inicial do Google Stitch:
1. **Arquivo de Design System:** Faça upload ou cole o conteúdo do [DESIGN.md](file:///c:/Users/Lucas/Desktop/TROPH%C3%89/consultorio-cheio/DESIGN.md).
2. **Logo da Aplicação:** Anexe o arquivo de logo com fundo transparente da TROPHÉ.
3. **Instruções Adicionais (System Instruction):**
   ```text
   Adote com rigor a linguagem visual do DESIGN.md: estilo G-Med Modern MedTech em Light Mode (#F1F3F9) com cartões brancos (#FFFFFF, raio 20px, bordas #CBD1E1). Acentos estéticos em Hyper Lime (#DAFB59) para botões principais de ação e badges herói, Azul Índigo (#6179FA) para seleções ativas e badges clínicas, e Dark Onyx (#1B1E27) para pílulas de menu ativo. Tipografia limpa no estilo Urbanist/SF Pro Display. Todo o conteúdo, dados, tabelas, nomes de pacientes brasileiros, procedimentos e moeda (R$) estritamente em Português do Brasil (pt-BR).
   ```

---

## 2. Master Prompt Unificado (Ecossistema Completo com 9 Telas)

> **Uso:** Utilize este prompt no campo principal de criação caso queira que o Stitch gere a interface completa com navegação e as 9 telas interligadas.

```text
Crie uma aplicação web desktop SaaS médica de altíssimo padrão para a Infraestrutura de Crescimento e CRM Clínico TROPHÉ, seguindo fielmente a linguagem visual do Design System G-Med e os tokens do DESIGN.md.

Estrutura Global do App Shell:
- Fundo do canvas em ardósia clara acetinada (#F1F3F9), cartões e módulos brancos puros (#FFFFFF) com cantos generosamente arredondados (raio de 20px) e bordas suaves de 1px (#CBD1E1).
- Barra Lateral de Ícones à Esquerda (largura 72px, fundo branco): topo com o logotipo circular TROPHÉ, 9 ícones de navegação em contorno com fundo circular suave (44px), estado ativo em Dark Onyx (#1B1E27) com ícone branco, e ícones inferiores de configurações e perfil.
- Cabeçalho Superior: Saudação acolhedora 'Bom dia, Dr. Rodrigo · TROPHÉ Medical Growth', seletor de data 'Dezembro 2023 / Últimos 30 Dias', campo de busca arredondado, botão de notificações com badge, avatar do médico e pílulas de navegação superior (pílula ativa em Dark Onyx #1B1E27 com texto branco, inativas em fundo branco com texto #64748B).
- Botão de Destaque Superior: Pílula em Hyper Lime (#DAFB59) com texto preto ônix '#1B1E27' exibindo '+ Novo Paciente' ou ação contextual da tela.
- Idioma & Moeda: 100% em Português do Brasil (pt-BR), valores em Reais (R$), datas no padrão brasileiro e nomes de pacientes humanizados.

As 9 Telas Integradas no Sistema:
1. Dashboard Executivo & Score Clínico: Card herói vertical em Hyper Lime (#DAFB59) com foto da médica especialista, badge escura flutuante '4.9 de 5.0 ★★★★★', mini-gráfico de barras das consultas com mês de pico em azul índigo (#6179FA); cards de métricas ('Faturamento: R$ 86.400', 'Receita Recuperada: R$ 22.800', 'Taxa de Presença: 96,2%'); lista de consultas do dia com avatares e horários; minicalendário mensal com dia selecionado em círculo azul.
2. Pipeline Kanban de Pacientes: 4 colunas em tom sutil (#F8FAFC) com cartões brancos ('Novos Contatos Meta & Google', 'Triagem Anti-Curioso', 'Avaliação Confirmada', 'Procedimento Fechado'). Cards com foto, nome do paciente brasileiro, chip de procedimento ('Harmonização Facial R$ 2.400', 'Implante R$ 4.800') e badge de SLA 'Atendido em 38s'.
3. Central WhatsApp & Playbook da Recepção: Layout triplo com lista de pacientes à esquerda com badges azuis de não-lidas, chat central com mensagens humanizadas e anexo de ultrassom/laudo, e painel lateral direito 'Playbook da Secretária' com botões rápidos ('⚡ Enviar Rota Google Maps', '💬 Explicar Valor sem Assustar no Preço', '📅 Confirmar 24h antes').
4. Agenda Médica No-Show Shield: Grade semanal completa de segunda a domingo (08:00 às 18:00), blocos de consulta com cantos arredondados e fotos dos pacientes, checkmarks verdes de confirmação ('✓ Confirmado WhatsApp'), slots de almoço/folga em textura de listras diagonais suaves, e topo com resumo de consultas presenciais e online.
5. Construtor Visual de Automações: Canvas com malha pontilhada suave conectando nós brancos com bordas arredondadas e linhas curvas azuis (#6179FA): [Anúncio Instagram] -> [Filtro Anti-Curioso] -> [Acolhimento WhatsApp 30s] -> [Lembrete com Rota Maps 24h] -> [Pesquisa NPS].
6. Diretório de Pacientes & Segmentação LTV: Barra de filtros com chips ('Todos os Pacientes 354', 'Pacientes VIP LTV > R$ 5.000', 'Sem Retorno há 180 dias'). Tabela estilizada em cartões com foto, nome, idade, ID (#2635-09), próxima visita, histórico de visitas, contatos e botões de ação rápida.
7. Prontuário Médico & Exames Laboratoriais: Visão detalhada do paciente com card de sinais vitais (Altura 168 cm, Peso 58 kg, IMC 20, Pressão 120/80 mmHg), card de exames com miniatura de ultrassom abdominal e laudos para download, histórico de doenças e aba de prescrições ativas.
8. Prescrição & Plano de Tratamento: Modal/painel com lista de medicamentos atuais (Gastoenteril 200mg, Omeprazol), seletor visual de dosagem (1x, 2x), frequência, relação com refeições, turno com ícones de Sol (Dia) e Lua (Noite), e botão de submissão em Hyper Lime '#DAFB59' '+ Adicionar Medicamento'.
9. Relatório Executivo de ROI & Equação Kelvin Cleto: Comparativo financeiro em 3 blocos: 'Custo de Equipe Interna (R$ 8.500/mês)' vs 'Investimento TROPHÉ (R$ 3.500 setup + R$ 1.500/mês)', card central com destaque demonstrando economia de 58% e gráfico circular provando que '2 Pacientes Particulares pagam 100% da infraestrutura'.

Estética: Moderna, minimalista, limpa, cirúrgica e humanizada. Paleta #F1F3F9, #FFFFFF, #DAFB59, #6179FA, #1B1E27. Tipografia Urbanist/SF Pro.
```

---

## 3. Prompts Individuais de Alta Precisão (As 9 Telas do CRM)

Utilize os prompts abaixo para gerar, iterar ou refinar cada tela individualmente com o máximo nível de detalhamento visual:

### [TELA 01] Dashboard Executivo & Saúde Clínica
```text
Role: Senior MedTech UI/UX Designer.
Interface: Executive Clinic Growth & Medical Dashboard, Desktop Web App.
Design System: G-Med Minimalist Aesthetic. Light Mode.
Palette: Slate Canvas (#F1F3F9), Pure White Cards (#FFFFFF, radius 20px, border 1px #CBD1E1), Hyper Lime accents (#DAFB59), Soft Indigo (#6179FA), Dark Onyx (#1B1E27).
Typography: Urbanist / SF Pro Display, clean, balanced hierarchy.
Layout:
- Left persistent icon rail (72px width): TROPHÉ logo icon on top, outline circular navigation icons, settings at bottom.
- Top Header: Pill navigation segmented control ('Visão Geral' active in Dark Onyx with white text, 'Agendamentos', 'Pacientes', 'Telemedicina' in white/slate). Top right with search pill, notification bell, and doctor profile avatar.
- Main Grid:
  * Left Hero Card in Hyper Lime (#DAFB59): Cutout photo of smiling female doctor with stethoscope, overlay floating black pill with '4.9 de 5.0 ★★★★★', total consultations counter '256 Pacientes', and a sleek vertical bar chart showing monthly consultations with peak month highlighted in vibrant indigo (#6179FA).
  * Center Section: Stat summary cards ('Faturamento Total: R$ 86.400,00' with emerald green trend chip '+14%', 'Receita Recuperada: R$ 22.800,00' in soft purple/indigo, 'Taxa de Comparecimento: 96,2%'). Below, 'Consultas de Hoje' widget with patient avatar stack (+3), cards with patient photo, Brazilian name ('Jane Dominique, 21 anos'), procedure tag, and time badge ('10:00 - 10:30').
  * Right Section: Interactive monthly calendar widget ('Dezembro 2023') with active date marked with a solid blue circle (#6179FA), and a 3D medical illustration card ('Conferência Médica 2024' with translucent blue DNA helix and molecular spheres).
Language: All labels, numbers (R$), patient names, and metrics strictly in Portuguese BR (pt-BR). Ultra-clean, modern, pristine medical SaaS interface.
```

### [TELA 02] Pipeline Kanban de Aquisição & Triagem de Pacientes
```text
Role: Senior MedTech UI/UX Designer.
Interface: Clinical Patient Acquisition Kanban Pipeline Board, Desktop Web App.
Design System: G-Med Minimalist Aesthetic. Light Mode.
Palette: Canvas (#F1F3F9), Card Surface (#FFFFFF, radius 18px), Subtle Background (#F8FAFC), Hyper Lime (#DAFB59), Indigo (#6179FA), Onyx (#1B1E27).
Typography: Urbanist, semi-bold headers, crisp tabular numbers.
Layout:
- Left icon rail (72px) with TROPHÉ emblem. Top pill navigation with 'Pacientes' active in Dark Onyx.
- Sub-header: Title 'Funil de Novos Pacientes & Triagem', filter pills ('Todos os Canais', 'Meta Ads', 'Google Busca'), metrics bar ('38 Novos Contatos', '24 Avaliações Confirmadas', 'R$ 52.400 em Tratamentos em Aberto'), and primary CTA pill in Hyper Lime (#DAFB59) '+ Novo Contato'.
- Kanban Columns (4 columns with soft grey-blue surface #F8FAFC, rounded corners 16px):
  1. 'Novos Contatos (Meta & Google)' [Badge: 12]
  2. 'Triagem Anti-Curioso' [Badge: 8]
  3. 'Avaliação Confirmada' [Badge: 11]
  4. 'Procedimento Fechado' [Badge: 7]
- Patient Cards inside columns: Crisp white container cards (#FFFFFF, radius 16px, subtle border #CBD1E1). Each card includes:
  * High-res circular patient avatar, full Brazilian name (e.g., 'Mariana Guimarães', 'Lucas Silveira').
  * Procedure pill tag in soft indigo (#EBEFFE with text #6179FA): 'Harmonização Facial R$ 2.400', 'Implante Protocolo R$ 4.800', 'Lentes em Resina R$ 3.600'.
  * SLA response pill with green dot: 'Atendido em 38s'.
  * Origin indicator icon: Instagram camera icon or Google icon.
Language: 100% Portuguese BR (pt-BR). High-end, clutter-free medical CRM design.
```

### [TELA 03] Central de Atendimento WhatsApp & Playbook da Recepção
```text
Role: Senior MedTech UI/UX Designer.
Interface: Multi-channel Medical WhatsApp Inbox & Receptionist Playbook, Desktop SaaS.
Design System: G-Med Minimalist Aesthetic. Light Mode.
Palette: Canvas (#F1F3F9), White Cards (#FFFFFF, radius 20px), Hyper Lime (#DAFB59), Soft Blue/Indigo (#6179FA), Dark Onyx (#1B1E27), Emerald Green (#10B981).
Typography: Urbanist, clear messaging bubble typography.
Layout:
- Left icon rail (72px). Top bar with active pill 'Atendimento & WhatsApp'.
- Three-Column Split Workspace:
  * Left Pane (Conversations List, 320px): Search bar, patient contact cards with avatar, name ('Melissa Davidson', 'Jane Dominique'), last message preview, timestamp, and unread count badge in vibrant blue (#6179FA). Top SLA badge: 'Tempo Médio de Resposta: 42s' with emerald green pulse dot.
  * Center Pane (Active Chat View): Clean conversation stream. Patient message inquiring about procedure scheduling. Secretary response welcoming the patient with procedure values. Embedded ultrasound image card with rounded corners and download/zoom icon. Message input bar at bottom with attachment paperclip and send button in Hyper Lime (#DAFB59).
  * Right Pane (Playbook da Secretária & Ações Rápidas, 300px): Clean white panel titled 'Playbook da Recepção'. One-click template action buttons with subtle grey background and hover state:
    - '⚡ Enviar Rota Google Maps (Blindagem de Falta)'
    - '💬 Explicar Valor sem Assustar no Preço'
    - '📅 Confirmar Consulta Nobre 24h Antes'
    - '⭐ Solicitar Avaliação 5 Estrelas no Google'
Language: 100% Portuguese BR (pt-BR). Clean, humanized, conversational clinical workflow.
```

### [TELA 04] Agenda Médica Inteligente & No-Show Shield (Anti-Falta)
```text
Role: Senior MedTech UI/UX Designer.
Interface: Weekly Clinical Calendar & No-Show Prevention Shield, Desktop Web App.
Design System: G-Med Minimalist Aesthetic. Light Mode.
Palette: Slate Canvas (#F1F3F9), White Card Surfaces (#FFFFFF, radius 20px), Indigo (#6179FA), Hyper Lime (#DAFB59), Dark Onyx (#1B1E27), Light Stripes for breaks.
Typography: Urbanist / SF Pro Display.
Layout:
- Left icon rail (72px). Top pill navigation with 'Agendamentos' active in Dark Onyx.
- Sub-Header Stat Badges: Row of 4 capsule widgets: '34 Consultas Totais' (white), '26 Presenciais' (lime accent #DAFB59), '8 Telemedicina' (indigo accent #6179FA), '2/34 Concluídas Hoje' (emerald green check). Right CTA button in Hyper Lime (#DAFB59) '+ Novo Agendamento'.
- Date Range Bar: 'Semana de 4 a 10 de Dezembro 2023', day switcher with current active day ('Seg 4') highlighted in solid indigo (#6179FA) with white bold text.
- Weekly Calendar Grid (Mon to Sun, 08:00 to 18:00):
  * Appointment blocks: Floating white cards (#FFFFFF, radius 12px) placed in time slots (e.g. 10:00 - 10:30) with patient avatar, name ('Jane Dominique'), consultation icon (in-person person icon or telemedicine camera icon), and confirmation checkmark badge '✓ Rota Maps Enviada'.
  * Interval & Lunch blocks: Styled with elegant light-grey diagonal stripes texture ('Almoço').
  * Weekend/Day-off columns: Light diagonal texture with subtle label 'Folga / Plantão'.
  * Bottom right promo/conference card: 3D blue DNA helix render card with date '16 Jan 2024'.
Language: 100% Portuguese BR (pt-BR). Seamless, organized, executive medical schedule.
```

### [TELA 05] Construtor Visual de Automações & Réguas Clínicas
```text
Role: Senior MedTech UI/UX Designer.
Interface: Visual Flow Automation Builder for Medical Clinics, Desktop Web Canvas.
Design System: G-Med Minimalist Aesthetic. Light Mode.
Palette: Dot-grid Canvas (#F1F3F9 with subtle dots), White Nodes (#FFFFFF, radius 18px, border 1px #CBD1E1), Smooth Wire Connections (#6179FA), Hyper Lime (#DAFB59).
Typography: Urbanist, clean node labels and status chips.
Layout:
- Top Header: Title 'Réguas de Automação & Blindagem de Comparecimento', status pill 'Fluxo Ativo · 1.420 Execuções este mês', zoom controls (+ / - / 100%), and button in Hyper Lime (#DAFB59) '+ Adicionar Gatilho'.
- Interactive Node-Graph Canvas:
  * Node 1 (Trigger): 'Novo Lead Meta / Instagram Ads' with social icon and green active dot.
  * Connected via smooth curved Bézier wire (#6179FA) to Node 2.
  * Node 2 (Condition / Qualifier): 'Filtro Anti-Curioso: Procedimento Particular (Sim/Não)'.
  * Branch connected to Node 3 (Action): 'Acolhimento WhatsApp em 30 Segundos' (template humanizado da recepção).
  * Connected to Node 4 (Time Delay & Reminder): 'Lembrete Inteligente 48h & 24h com Link do Google Maps da Clínica'.
  * Connected to Node 5 (Post-Consultation): 'Pesquisa de Satisfação NPS 5 Estrelas após 48h'.
- Node Card Details: White rounded cards (#FFFFFF) with subtle drop shadows, icon headers, status tags ('Ativo e Rodando' in soft green #ECFDF5), and execution counters.
Language: 100% Portuguese BR (pt-BR). Intuitive, modern visual workflow engineering.
```

### [TELA 06] Diretório de Pacientes & Segmentação LTV
```text
Role: Senior MedTech UI/UX Designer.
Interface: Patient Directory & Lifetime Value (LTV) Segmentation, Desktop SaaS Table.
Design System: G-Med Minimalist Aesthetic. Light Mode.
Palette: Canvas (#F1F3F9), Table Row Cards (#FFFFFF, radius 14px), Hyper Lime (#DAFB59), Soft Indigo (#6179FA), Onyx (#1B1E27).
Typography: Urbanist, tabular numbers, clean data hierarchy.
Layout:
- Left icon rail (72px). Top pill navigation with 'Pacientes' active in Dark Onyx.
- Sub-Header Bar: Title 'Lista de Pacientes', counter badge '354 Pacientes Totais', sort dropdown ('Todos os Períodos'), search input with magnifying glass, and primary CTA button in Hyper Lime (#DAFB59) '+ Adicionar Novo Paciente'.
- Segment Filter Pills: Horizontal row of capsules ('Todos 354', 'Pacientes VIP LTV > R$ 5k', 'Retornos Pendentes', 'Sem Consulta há 180 dias').
- Modern Card-Style Data Table:
  * Headers: Paciente, ID / Prontuário, Próxima Consulta, Última Consulta, Telefone, E-mail, LTV Total, Ações.
  * Row 1: Avatar of Jane Dominique (21 anos), ID #2635-09, next visit badge in soft green '20 Dez 2023', last visit '12 Dez 2023', phone '+55 11 98765-4321', email 'jane@email.com', LTV 'R$ 7.200,00', right icons for medical chart, lab tests, and WhatsApp call.
  * Row 2: Jacob Jones (34 anos), ID #2345-02, next visit '26 Dez 2023', last visit '26 Nov 2023', LTV 'R$ 4.800,00'.
  * Row 3: Savannah Nguyen (42 anos), ID #2357-90, next visit '15 Dez 2023', LTV 'R$ 12.400,00' with VIP gold badge.
- Bottom Pagination: Rounded stepper '< 1 de 15 >'.
Language: 100% Portuguese BR (pt-BR). Pristine, professional medical record directory.
```

### [TELA 07] Prontuário Clínico, Sinais Vitais & Exames Laboratoriais
```text
Role: Senior MedTech UI/UX Designer.
Interface: Comprehensive Patient Medical Record & Lab Results Dashboard, Desktop Web App.
Design System: G-Med Minimalist Aesthetic. Light Mode.
Palette: Canvas (#F1F3F9), White Cards (#FFFFFF, radius 20px), Indigo (#6179FA), Hyper Lime (#DAFB59), Onyx (#1B1E27).
Typography: Urbanist, clean clinical data presentation.
Layout:
- Left icon rail (72px). Breadcrumb: 'Lista de Pacientes > Jane Dominique (31 anos, ID #2635-09)'. Top right button in Hyper Lime (#DAFB59) '+ Novo Registro Clínico'.
- Patient Overview Banner (Left Column): Circular patient avatar, full name, demographics (Feminino, 19 Abr 1992, São Paulo - SP), contacts. Below, 4 Vital Signs Metric Cards:
  * Height card: '168 cm' with height icon.
  * Weight card: '58 kg' with scale icon.
  * BMI card: '20 IMC' with body icon.
  * Blood pressure card: '120/80 mmHg' with heart rate icon.
- Center Column (Laboratory & Imaging Tests):
  * Card 'Exames Laboratoriais': Preview card of abdominal ultrasound scan with zoom button, accompanied by blood test status list ('Hemograma Completo', 'Proteínas Totais', 'Glicose', 'Albumina') with download icons and date '20 Março 2023'.
  * Card 'Histórico de Consultas': Timeline list of visits with consultation type (Presencial / Telemedicina), reason ('Dor abdominal', 'Check-up'), and attached records.
- Right Column (Clinical History & Disease Records): Card 'Histórico Clínico' with diagnosis tags ('Gastrite Crônica'), patient complaint notes, and clinical evolution summary.
Language: 100% Portuguese BR (pt-BR). High-precision, elegant medical record view.
```

### [TELA 08] Prescrição Médica & Plano de Tratamento Inteligente
```text
Role: Senior MedTech UI/UX Designer.
Interface: Medical Treatment Plan & Prescription Modal / Manager, Desktop SaaS Interface.
Design System: G-Med Minimalist Aesthetic. Light Mode.
Palette: Canvas (#F1F3F9), Crisp White Form Cards (#FFFFFF, radius 20px), Hyper Lime (#DAFB59), Indigo (#6179FA), Onyx (#1B1E27), Pill 3D floating elements.
Typography: Urbanist, form labels in slate (#64748B), bold active values.
Layout:
- Screen displaying the Patient Record with an overlaid or prominent side card titled 'Plano de Tratamento & Prescrição':
  * Section 'Medicamentos Atuais (3)': White row cards with pill icon, medication name and dosage:
    1. 'Gastoenteril 200mg - 2x ao dia' (Day sun icon)
    2. 'Domperidona 100mg - 1x à noite' (Night moon icon)
    3. 'Omeprazol 40mg - 1x em jejum' (Sun icon)
  * Action Button: Wide button in Hyper Lime (#DAFB59) with text 'Gerar Receita Digital com Assinatura'.
- Attached Modal 'Adicionar Novo Medicamento':
  * Medication search input with dropdown selector ('Gastoenteril 200mg').
  * Grid of segmented controls:
    - Dosagem: '1 comprimido' / '2 comprimidos'
    - Frequência: '2x ao dia'
    - Horário: 'Diário'
    - Relação: 'Após as refeições'
    - Turno: Toggle pill with Sun icon ('Dia') and Moon icon ('Noite').
    - Data de Início: '5 Dez 2023' | Duração: '1 semana'.
  * Bottom Submit CTA: Full-width button in Hyper Lime (#DAFB59) with bold text '+ Adicionar Medicamento'.
- Visual Details: Ambient soft lighting, floating 3D white pharmaceutical tablet pills on canvas background.
Language: 100% Portuguese BR (pt-BR). Humanized, clean, error-prevention medical UI.
```

### [TELA 09] Relatório Executivo de ROI & Equação Kelvin Cleto
```text
Role: Senior MedTech UI/UX Designer.
Interface: Clinical ROI & Financial Feasibility Dashboard, Desktop Executive Web App.
Design System: G-Med Minimalist Aesthetic. Light Mode.
Palette: Canvas (#F1F3F9), White Cards (#FFFFFF, radius 20px), Hyper Lime (#DAFB59), Vibrant Indigo (#6179FA), Dark Onyx (#1B1E27), Emerald Green (#10B981).
Typography: Urbanist, large executive metric numbers.
Layout:
- Left icon rail (72px). Top pill navigation with 'Relatórios & ROI' active in Dark Onyx.
- Executive Header: Title 'Demonstração de Viabilidade Financeira · Equação Kelvin Cleto', subtitle 'Comprovação Matemática: Como 2 novos procedimentos cobrem 100% da infraestrutura TROPHÉ'.
- Three-Column Comparative Value Matrix:
  * Card 1 (Custo Tradicional de Equipe Interna): White card with red/amber subtle accent. Line items: Gestor de Tráfego Dedicado (R$ 2.500/mês), Especialista de Scripts & WhatsApp (R$ 2.000/mês), Software CRM & API Oficial (R$ 800/mês), Treinamento de Recepção (R$ 3.200/mês). Total: 'R$ 8.500,00/mês' in bold.
  * Card 2 (Investimento na Infraestrutura TROPHÉ): Featured white card with Hyper Lime border (#DAFB59) and highlight badge 'Modelo de Alta Eficiência': Setup único R$ 3.500 + R$ 1.500/mês. Pill badge in emerald green (#ECFDF5 with text #10B981) 'Economia Imediata de 58% no 1º Trimestre'.
  * Card 3 (Ponto de Equilíbrio Real & Retorno): Radial progress circle showing '2 Pacientes = 100% Pago'. Ticket médio de procedimentos da clínica (R$ 2.400 cada). Projeção: '12 novos pacientes atraídos = R$ 28.800 de retorno bruto gerado'.
- Bottom Stat Banner: White card across full width showing 'Prejuízo Médio Estancado em Consultórios: R$ 26.000,00/mês recuperados através de blindagem contra faltas e SLA de atendimento em 40 segundos'.
Language: 100% Portuguese BR (pt-BR). Persuasive, mathematically clear executive presentation.
```
