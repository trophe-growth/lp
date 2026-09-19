# DESIGN.md · TROPHÉ Medical Growth Engine
> **Design System Specification & UI/UX Guidelines**
> Baseado no Design System **G-Med / MedTech Minimal**, customizado para a infraestrutura clínica de alta performance da **TROPHÉ**.

---

## 1. Visão Geral & Filosofia de Design

O ecossistema **TROPHÉ** adota uma estética cirúrgica, moderna, humanizada e de alta tecnologia ("Clean Modern MedTech"), inspirada no design system da **G-Med**.
O objetivo é transmitir **confiança médica**, **clareza visual instantânea**, **serenidade clínica** e **modernidade executiva**, eliminando atrito cognitivo para secretárias, gestores e médicos.

### Princípios Fundamentais
1. **Luz e Respiração (Airy & Elevated):** Telas predominantemente em Light Mode com fundo suave (`#F1F3F9` / `#FFFFFF`), contrastes nítidos e muito respiro (whitespace).
2. **Harmonia de Destaques Funcionais:** 
   - **Hyper Lime / Neon Citron (`#DAFB59`):** Acento dinâmico de alta energia para CTAs principais (`+ Add / Criar`), badges de status em foco e destaques de ação imediata.
   - **Soft Vibrant Indigo/Blue (`#6179FA`):** Cor primária de conexão, links interativos, avatares ativos, tags de agendamento e caminhos de fluxo.
   - **Slate Dark / Deep Onyx (`#1B1E27` / `#23262F`):** Pílulas ativas de navegação, tipografia de alto contraste e modais de alto impacto.
3. **Superfícies Ultra-Arredondadas (Soft Squircle / Pill Geometry):** 
   - Bordas curvas com raios generosos (16px a 24px para cards; 9999px para botões, abas e chips de status).
4. **Humanização Visual e Micro-gráficos 3D:**
   - Fotos reais e acolhedoras de profissionais de saúde em recortes circulares ou cartões orgânicos.
   - Renderizações 3D translúcidas sutis (cápsulas, fitas de DNA, moléculas) para ilustrar notas, eventos e módulos técnicos.
5. **Localização Rigorosa:** 100% dos textos, labels, botões e valores em **Português do Brasil (pt-BR)** (`R$`, datas no formato `dd/mm/aaaa` ou `16 Jan 2024`, números telefônicos brasileiros).

---

## 2. Design Tokens & Paleta de Cores Oficial

Extraído diretamente da especificação gráfica do design system G-Med:

### 2.1 Superfícies e Fundos
| Token | Hex | Aplicação |
|---|---|---|
| `--bg-canvas` | `#F1F3F9` | Fundo geral da aplicação (slate ultra-claro suave) |
| `--surface-card` | `#FFFFFF` | Fundo principal de cartões, tabelas e janelas |
| `--surface-subtle` | `#F8FAFC` | Fundo secundário de inputs, colunas kanban e células |
| `--border-subtle` | `#CBD1E1` | Bordas refinadas de 1px em cards, divisores e linhas |
| `--border-light` | `rgba(203, 209, 225, 0.45)` | Delimitações de células de tabelas e slots de agenda |

### 2.2 Cores de Marca & Destaques de Ação
| Token | Hex | Aplicação |
|---|---|---|
| `--color-lime` | `#DAFB59` | **Destaque Primário / Neon Citron**: Botões principais (`+ Adicionar`), badges ativas, scores de destaque |
| `--color-lime-hover` | `#C8EB42` | Estado de hover em botões lime |
| `--color-indigo` | `#6179FA` | **Azul/Índigo Primário**: Abas ativas secundárias, badges de procedimentos, botões de mídia, links |
| `--color-indigo-soft` | `#EBEFFE` | Fundo para badges e ícones em azul índigo |
| `--color-dark-onyx` | `#1B1E27` | Pílulas ativas de navegação principal, botões escuros, tipografia primária |
| `--color-charcoal` | `#23262F` | Superfícies escuras secundárias e cards de modo escuro/noturno |

### 2.3 Cores Semânticas de Apoio
| Token | Hex | Aplicação |
|---|---|---|
| `--color-success` | `#10B981` | SLA < 45s, consultas concluídas, presença confirmada, checkmarks |
| `--color-success-bg` | `#ECFDF5` | Fundo de badges de confirmação e sucesso |
| `--color-warning` | `#F59E0B` | Pacientes em espera, retornos pendentes, avisos de confirmação |
| `--color-danger` | `#EF4444` | Faltas, desmarcações, perdas de contato, SLA estourado |

### 2.4 Hierarquia de Texto
| Token | Hex | Aplicação |
|---|---|---|
| `--text-primary` | `#1B1E27` | Títulos, métricas principais, nomes de pacientes (alto contraste) |
| `--text-secondary` | `#64748B` | Subtítulos, labels descritivas, horários e metadados |
| `--text-muted` | `#94A3B8` | Cabeçalhos de tabelas, contadores desativados e placeholders |

---

## 3. Tipografia & Escala Visual

* **Família Tipográfica Principal:** `'Urbanist', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif`
* **Características:** Traços geométricos limpos, cantos levemente arredondados nos glifos, moderna, legibilidade cirúrgica.

### Escala de Tamanhos & Pesos
- **Display / H1:** `34px` · Bold (`700` ou `800`) · Tracking `-0.02em` · Cor `#1B1E27`
- **Títulos de Seção / H2:** `24px` · SemiBold (`600`) · Cor `#1B1E27`
- **Subtítulos / H3:** `20px` · SemiBold (`600`) · Cor `#1B1E27`
- **Cards e Headers de Widgets:** `16px` · Medium (`500`) a SemiBold (`600`)
- **Corpo Regular:** `14px` · Regular (`400`) · Altura de linha `1.5` · Cor `#23262F`
- **Textos Secundários & Metadados:** `12px` · Medium (`500`) · Cor `#64748B`
- **Micro Chips & Rótulos de Status:** `11px` · SemiBold (`600`) · Tracking `0.02em`

---

## 4. Arquitetura do App Shell & Layout Unificado (Referência Hugo SaaS + G-Med)

Todas as telas do sistema seguem estritamente a mesma arquitetura de casca (App Shell), garantindo consistência total e sensação de sistema real integrado:

```
+------------------+-----------------------------------------------------------------------------------------+
| [LOGO TROPHÉ]    | TROPHÉ OS / [Breadcrumb da Tela Atual]       [Buscar no sistema...]   [Lista/Grade] [🔔] [CTA]  |
| CRM Médico       |-----------------------------------------------------------------------------------------+
|------------------| FILTROS RÁPIDOS & MÉTRICAS SECUNDÁRIAS (Status, Tags, SlA)                              |
| VISÃO GERAL      |-----------------------------------------------------------------------------------------|
| • Dashboard   (●)|                                                                                         |
| • Agenda Sem. (14)|  CANVAS PRINCIPAL (#F4F6FB)                                                             |
| • Funil Kanban(38)|  - Grid de KPIs Compactos (Cards brancos #FFFFFF, bordas 1px #E2E8F0, raio 14px)        |
| • WhatsApp   (3★)|  - Área Operacional Densa (Tabela de Consultas / Grade Semanal / Colunas Kanban)        |
| GESTÃO CLÍNICA   |  - Tipografia nítida (Inter / Urbanist) com proporções contidas e micro-espaçamentos      |
| • Prontuários    |                                                                                         |
| • Automações     |                                                                                         |
| • Resgate        |                                                                                         |
|------------------|                                                                                         |
| [Dr. Rodrigo M.] |                                                                                         |
+------------------+-----------------------------------------------------------------------------------------+
```

### 4.1 Barra Lateral Esquerda Unificada (Sidebar 220px)
- **Regra de Ouro:** O menu lateral esquerdo é **absolutamente idêntico em todas as telas**. Apenas o item ativo (`.active`) muda de estado.
- **Largura:** `220px` (min-width `220px`).
- **Topo:** Logotipo oficial da TROPHÉ ([images/trophe-logo-cropped.png](file:///c:/Users/Lucas/Desktop/TROPH%C3%89/consultorio-cheio/images/trophe-logo-cropped.png)) com fundo transparente + badge "CRM Médico".
- **Agrupamentos:**
  1. **Visão Geral:** Dashboard (ponto pulsante lime), Agenda Semanal (contador numérico), Funil Kanban (total em aberto), Central WhatsApp (badge verde de não-lidas).
  2. **Gestão Clínica:** Prontuários & LTV, Automações, Resgate de Inativos.
- **Item Ativo:** Fundo escuro ônix `#12141A`, texto branco, ícone branco e raio `10px`.
- **Rodapé:** Mini-card do profissional de saúde conectado (Dr. Rodrigo M., Clínica Matão, avatar circular e chevron).

### 4.2 Cabeçalho Superior Tech (Topbar 52px)
- **Esquerda:** Breadcrumb hierárquico limpo (`TROPHÉ OS / Nome da Tela`) + Input de busca compacto com ícone de lupa.
- **Direita:** Alternador de visão (`Lista` / `Grade`), botão de notificações com badge, e botão principal de ação em **Hyper Lime (`#DAFB59`)** com texto escuro e cantos arredondados elegantes.

### 4.3 Densidade de Informação e Ortografia (pt-BR)
- **Eliminação de elementos gigantes:** Espaçamentos reduzidos de 32px para 12px-16px, fontes de métricas ajustadas de 44px para 22px-26px, cards com respiro inteligente sem inflar.
- **Rigor Ortográfico:** 100% dos textos revisados e sem distorções (ex: "Hoje", "Sexta", "Março", "Faturamento", "Receita Recuperada", "Sinais Vitais").

---

## 5. Biblioteca de Componentes Específicos

### 5.1 Botão de Ação Primária ("Add New / Criar")
- **Visual:** Pílula totalmente arredondada (`border-radius: 9999px`), preenchimento em **Hyper Lime (`#DAFB59`)**, texto e ícone em ônix escuro (`#1B1E27`), peso SemiBold (`600`).
- Efeito hover com leve aumento de saturação (`#C8EB42`) e elevação suave.

### 5.2 Cartões de Indicador & Score Pessoal (Personal Score / Stat Widgets)
- **Container:** Fundo branco `#FFFFFF`, cantos arredondados de `20px` a `24px`, borda sutil `#CBD1E1`.
- **Card de Destaque Lime:** Cartão especial com fundo gradiente ou sólido em Hyper Lime (`#DAFB59`), foto recortada em alta resolução do especialista, badge flutuante escura com nota média (`★ 4.9 de 5.0`), mini-gráfico de barras das consultas com mês de pico destacado em azul índigo (`#6179FA`).

### 5.3 Agenda & Calendário Interativo (Schedule Grid)
- **Cabeçalho de Dias da Semana:** Chips retangulares com cantos arredondados. O dia selecionado ganha cor azul sólida (`#6179FA`) com texto branco; os demais dias mantêm fundo claro e texto escuro.
- **Blocos de Horários:** Cartões brancos flutuantes sobre a grade horária (ex: 10:00 - 10:30), com avatar do paciente, nome, tipo de consulta e checkmark verde de confirmação (`✓ Confirmado`).
- **Estados Vazios / Almoço:** Texturas sutis com listras diagonais suaves cinzas (`diagonal stripes`) indicando intervalo ou dia de folga.

### 5.4 Tabela de Pacientes & Prontuários (Patient List & Records)
- **Linhas:** Formato de cartões estendidos com cantos arredondados, fundo `#FFFFFF`, efeito hover `#F8FAFC`.
- **Colunas:** Avatar circular com foto real, nome e idade, número de ID/Prontuário (ex: `#2635-09`), data do próximo retorno com chip de ícone (pessoa para presencial, câmera para telemedicina), telefone e e-mail.
- **Ações Rápidas à Direita:** Ícones circulares sutis para histórico médico, exames laboratoriais e início de chamada/conversa.

### 5.5 Prontuário Clínico & Exames (Medical Record & Lab Tests)
- **Cards de Sinais Vitais:** Módulos compactos brancos com ícone azul sutil no topo esquerdo, label de métrica e valor grande (ex: `168 cm`, `58 kg`, `20 IMC`, `120/80 mmHg`).
- **Módulo de Exames de Imagem:** Card com pré-visualização de imagem ultrassom/radiografia em cantos arredondados, botão de zoom/ampliação e lista de laudos sanguíneos com botão de download.

### 5.6 Prescrição Médica & Plano de Tratamento (Treatment Plan)
- **Seletor de Medicamentos:** Formulário modal com fundo limpo, seletor de dosagem (`1x`, `2x`), frequência diária (`Diário`), relação com refeições (`Após refeição`), seleção de turno com ícones de Sol (Dia) e Lua (Noite), finalizado com botão Lime `+ Adicionar Medicamento`.

---

## 6. Diretivas Obrigatórias para Engenharia de Prompt (Google Stitch)

Ao usar este sistema no Google Stitch:
1. **Light Mode Nativo:** Nunca gere telas escuras inteiras; use o canvas suave `#F1F3F9` com cartões brancos `#FFFFFF`.
2. **Uso Estratégico do Lime & Indigo:** Use o Hyper Lime (`#DAFB59`) para botões de ação e cards herói, e o Índigo (`#6179FA`) para elementos interativos, tags e conexões de fluxo.
3. **Pílulas Escuras:** Aplique o padrão ônix (`#1B1E27`) na aba de menu superior ativa e em pílulas de destaque.
4. **Sem Placeholders Genéricos:** Exiba dados clínicos autênticos em português, avatares reais com fotos empáticas, valores em Reais (`R$`) e procedimentos com preços de mercado.
5. **Idioma Rigoroso:** 100% em **Português do Brasil (pt-BR)**.
