# 🗺️ Mapa da Desigualdade - São Paulo

## 📋 Descrição do Projeto

O **Mapa da Desigualdade** é um projeto educativo interativo que visualiza e compara indicadores socioeconômicos entre as regiões **Socorro** e **Sé** na cidade de São Paulo. O objetivo é demonstrar as disparidades urbanas através de um mapa digital, estimulando reflexões sobre políticas públicas e desenvolvimento social.

Este projeto foi desenvolvido como trabalho acadêmico para a disciplina de **Geografia Urbana**, utilizando tecnologias web modernas para criar uma experiência educativa e acessível.

---

## 🎯 Objetivos

- **Visualizar** diferenças socioeconômicas entre regiões de São Paulo
- **Comparar** indicadores como renda, educação, saúde, habitação e transporte
- **Educar** sobre desigualdade urbana de forma interativa
- **Estimular** reflexões sobre políticas públicas e desenvolvimento social
- **Demonstrar** o uso de tecnologias web para fins educacionais

---

## 🚀 Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilização moderna com variáveis CSS e animações
- **JavaScript (ES6+)** - Lógica de interação e manipulação do DOM

### Bibliotecas e APIs
- **[Leaflet.js 1.9.4](https://leafletjs.com/)** - Biblioteca de mapas interativos
- **[OpenStreetMap](https://www.openstreetmap.org/)** - Fonte de dados cartográficos
- **[Chart.js 4.4.0](https://www.chartjs.org/)** - Gráficos comparativos
- **[Font Awesome 6.4.0](https://fontawesome.com/)** - Ícones vetoriais
- **[Google Fonts (Poppins)](https://fonts.google.com/)** - Tipografia moderna
- **Geolocation API** - Localização do usuário

---

## 📁 Estrutura de Arquivos

```
projeto-dais/
│
├── index.html          # Estrutura principal do site
├── style.css           # Estilos e design responsivo
├── script.js           # Lógica e interatividade
└── README.md           # Documentação (este arquivo)
```

---

## 🎨 Funcionalidades

### 1. **Mapa Interativo**
- Visualização de São Paulo com foco nas regiões Socorro e Sé
- Marcadores personalizados com ícones temáticos
- Zoom, arrastar e navegação fluida
- Popups informativos ao clicar nos marcadores
- Exibição de coordenadas ao clicar no mapa

### 2. **Indicadores Sociais**
Cinco categorias de análise:

#### 📊 Renda Média
- **Socorro**: R$ 2.850/mês per capita
- **Sé**: R$ 1.650/mês per capita

#### 🏫 Educação
- **Socorro**: 68% com ensino médio completo
- **Sé**: 52% com ensino médio completo

#### 🏥 Saúde
- **Socorro**: 3.2 leitos/1000 habitantes
- **Sé**: 5.8 leitos/1000 habitantes

#### 🏠 Habitação
- **Socorro**: 82% com saneamento básico
- **Sé**: 65% com saneamento básico

#### 🚇 Transporte Público
- **Socorro**: 45 minutos (tempo médio de deslocamento)
- **Sé**: 28 minutos (tempo médio de deslocamento)

### 3. **Painel de Controle**
- **Botões de filtro** por indicador
- **Campo de busca** de bairros
- **Legenda visual** com cores explicativas
- **Botão de reset** para visão geral

### 4. **Painel de Estatísticas**
- Comparação lado a lado entre Socorro e Sé
- Gráficos dinâmicos (Chart.js)
- Atualização automática ao selecionar indicadores

### 5. **Recursos Adicionais**
- **Modo Claro/Escuro** - Alternância de tema
- **Geolocalização** - Botão "Minha Localização"
- **Modal Informativo** - Sobre o projeto
- **Notificações** - Feedback visual para ações
- **Design Responsivo** - Funciona em desktop, tablet e mobile
- **Loading Screen** - Animação de carregamento

---

## 📖 Tutorial de Uso

### Passo 1: Abrir o Projeto
1. Baixe todos os arquivos do projeto
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Aguarde o carregamento do mapa (2-3 segundos)

### Passo 2: Explorar o Mapa
1. **Arrastar**: Clique e arraste para mover o mapa
2. **Zoom**: Use a roda do mouse ou os botões +/- no mapa
3. **Clicar em marcadores**: Veja informações detalhadas em popups
4. **Clicar no mapa**: Veja as coordenadas do ponto

### Passo 3: Filtrar por Indicador
1. No painel lateral esquerdo, clique em um dos botões:
   - 🌐 **Visão Geral** - Mostra todos os dados
   - 💵 **Renda Média** - Foca em dados econômicos
   - 🎓 **Educação** - Mostra escolas e níveis educacionais
   - ❤️ **Saúde** - Exibe hospitais e leitos
   - 🏠 **Habitação** - Dados de saneamento
   - 🚇 **Transporte** - Tempo de deslocamento
2. O mapa atualiza automaticamente com marcadores temáticos
3. O painel direito mostra estatísticas específicas

### Passo 4: Buscar Bairros
1. Digite "Socorro" ou "Sé" no campo de busca
2. Pressione **Enter** ou clique no botão **→**
3. O mapa centraliza no bairro e abre o popup
4. Uma notificação confirma a busca

### Passo 5: Comparar Dados
1. Observe o painel direito com estatísticas
2. Veja o gráfico comparativo na parte inferior
3. Alterne entre indicadores para ver diferentes comparações

### Passo 6: Usar Recursos Extras
- **🌙 Modo Escuro**: Clique no ícone de lua no cabeçalho
- **📍 Minha Localização**: Clique no botão no canto inferior direito do mapa
- **ℹ️ Sobre**: Clique no ícone de informação no cabeçalho
- **🔄 Reset**: Clique em "Resetar Visão" no painel lateral

---

## 🎓 Como Funciona (Aspectos Técnicos)

### Inicialização
1. **Loading Screen**: Exibe animação enquanto carrega recursos
2. **Mapa Leaflet**: Inicializa centrado entre Socorro e Sé
3. **Marcadores**: Adiciona pontos com ícones personalizados
4. **Event Listeners**: Configura interações do usuário
5. **Gráficos**: Renderiza Chart.js com dados iniciais

### Fluxo de Interação
```
Usuário clica em indicador
    ↓
JavaScript atualiza variável currentIndicator
    ↓
Função updateIndicator() é chamada
    ↓
Marcadores são recriados com novos ícones
    ↓
Estatísticas são atualizadas no painel
    ↓
Gráfico é redesenhado com novos dados
```

### Busca de Bairros
```
Usuário digita e pressiona Enter/clica botão
    ↓
Função searchNeighborhood() normaliza texto
    ↓
Remove acentos e converte para minúsculas
    ↓
Compara com "socorro" ou "sé"
    ↓
Se encontrado: centraliza mapa e abre popup
    ↓
Exibe notificação de sucesso/erro
```

### Responsividade
- **Desktop (>1200px)**: Layout com 3 colunas
- **Tablet (768px-1200px)**: Layout empilhado
- **Mobile (<768px)**: Otimizado para toque

---

## 🎨 Paleta de Cores

### Tema Claro
- **Primária**: `#0077b6` (Azul)
- **Secundária**: `#00b4d8` (Azul claro)
- **Fundo**: `#f1f1f1` (Cinza claro)
- **Cards**: `#ffffff` (Branco)
- **Texto**: `#333333` (Cinza escuro)

### Tema Escuro
- **Primária**: `#00b4d8` (Azul claro)
- **Fundo**: `#1a1a1a` (Preto)
- **Cards**: `#2d2d2d` (Cinza escuro)
- **Texto**: `#f1f1f1` (Branco)

### Indicadores
- **Alto**: `#2ecc71` (Verde)
- **Médio**: `#f39c12` (Laranja)
- **Baixo**: `#e74c3c` (Vermelho)

---

## 📊 Dados e Fontes

### Origem dos Dados
Os dados utilizados são baseados em:
- **IBGE** - Instituto Brasileiro de Geografia e Estatística
- **Prefeitura de São Paulo** - Dados abertos
- **Instituto Cidades Sustentáveis** - Mapa da Desigualdade 2024

### Coordenadas Geográficas
- **Socorro**: Latitude -23.6567, Longitude -46.7019
- **Sé**: Latitude -23.5505, Longitude -46.6333

### Pontos de Interesse
Cada região possui 3 pontos mapeados:
- 1 unidade de saúde (UBS/Hospital)
- 1 instituição de ensino (Escola/EMEF)
- 1 terminal de transporte (Terminal/Estação)

---

## 🔧 Instalação e Execução

### Requisitos
- Navegador moderno (Chrome, Firefox, Edge, Safari)
- Conexão com internet (para carregar bibliotecas CDN)
- Nenhuma instalação de servidor necessária

### Método 1: Execução Local
1. Baixe todos os arquivos do projeto
2. Mantenha a estrutura de pastas
3. Abra `index.html` diretamente no navegador

### Método 2: Servidor Local (Opcional)
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# Acesse: http://localhost:8000
```

### Método 3: VS Code Live Server
1. Instale a extensão "Live Server"
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

---

## 📱 Compatibilidade

### Navegadores Suportados
- ✅ Google Chrome 90+
- ✅ Mozilla Firefox 88+
- ✅ Microsoft Edge 90+
- ✅ Safari 14+
- ✅ Opera 76+

### Dispositivos
- ✅ Desktop (Windows, macOS, Linux)
- ✅ Tablet (iPad, Android)
- ✅ Smartphone (iOS, Android)

### Recursos Necessários
- JavaScript habilitado
- Geolocalização (opcional, para "Minha Localização")
- Resolução mínima: 320px de largura

---

## 🐛 Solução de Problemas

### Mapa não carrega
- Verifique sua conexão com internet
- Aguarde alguns segundos (loading screen)
- Recarregue a página (F5)

### Busca não funciona
- Certifique-se de digitar "Socorro" ou "Sé"
- Pressione Enter ou clique no botão →
- Aguarde o mapa carregar completamente

### Botão "Minha Localização" não funciona
- Permita acesso à localização no navegador
- Verifique se está usando HTTPS ou localhost
- Alguns navegadores bloqueiam em HTTP

### Gráficos não aparecem
- Verifique conexão com internet (Chart.js via CDN)
- Abra o Console (F12) para ver erros
- Recarregue a página

---

## 📝 Estrutura do Código

### HTML (index.html)
```html
- Header (cabeçalho fixo)
- Container principal
  ├── Sidebar (painel lateral)
  │   ├── Campo de busca
  │   ├── Botões de indicadores
  │   └── Legenda
  ├── Map Container (mapa)
  └── Stats Panel (estatísticas)
- Modal (sobre o projeto)
- Footer (rodapé)
```

### CSS (style.css)
```css
- Variáveis CSS (cores, temas)
- Reset e estilos globais
- Loading screen
- Header e navegação
- Layout responsivo (Grid)
- Sidebar e controles
- Mapa e marcadores
- Painel de estatísticas
- Modal
- Notificações
- Animações
- Media queries
```

### JavaScript (script.js)
```javascript
- Dados dos indicadores (objeto)
- Pontos de interesse (array)
- Variáveis globais
- Funções de inicialização
- Funções de mapa (Leaflet)
- Funções de UI
- Funções de busca
- Funções de gráficos (Chart.js)
- Event listeners
```

---

## 🎯 Conceitos Educacionais Abordados

### Geografia Urbana
- **Segregação espacial**: Diferenças entre centro e periferia
- **Infraestrutura urbana**: Distribuição desigual de serviços
- **Mobilidade urbana**: Tempo de deslocamento e acesso

### Indicadores Sociais
- **Renda**: Desigualdade econômica
- **Educação**: Acesso ao conhecimento
- **Saúde**: Disponibilidade de atendimento
- **Habitação**: Condições de moradia
- **Transporte**: Acessibilidade e tempo

### Reflexões Propostas
- Como a localização afeta oportunidades?
- Por que existem diferenças entre regiões?
- Qual o papel das políticas públicas?
- Como reduzir desigualdades urbanas?

---

## 📚 Referências e Créditos

### Dados
- [Instituto Cidades Sustentáveis - Mapa da Desigualdade 2024](https://institutocidadessustentaveis.shinyapps.io/mapadesigualdadesaopaulo2024)
- [IBGE - Censo e Estatísticas](https://www.ibge.gov.br/)
- [Prefeitura de São Paulo - Dados Abertos](https://dados.prefeitura.sp.gov.br/)

### Tecnologias
- [Leaflet.js Documentation](https://leafletjs.com/reference.html)
- [Chart.js Documentation](https://www.chartjs.org/docs/)
- [OpenStreetMap](https://www.openstreetmap.org/)
- [Font Awesome Icons](https://fontawesome.com/icons)

### Inspiração
- Projeto baseado no Mapa da Desigualdade do Instituto Cidades Sustentáveis
- Design inspirado em dashboards modernos de dados

---

## 👨‍💻 Desenvolvimento

### Autor
**Richard Pimentel**  
Estudante - SESI Carapicuíba  
Disciplina: Geografia Urbana  
Ano: 2025

### Metodologia de Desenvolvimento
1. **Pesquisa**: Coleta de dados socioeconômicos
2. **Planejamento**: Definição de funcionalidades
3. **Design**: Criação da interface (UI/UX)
4. **Implementação**: Codificação HTML/CSS/JS
5. **Testes**: Validação em diferentes dispositivos
6. **Documentação**: Criação deste README

### Tempo de Desenvolvimento
- **Planejamento**: 2 horas
- **Design**: 3 horas
- **Codificação**: 8 horas
- **Testes**: 2 horas
- **Total**: ~15 horas

---

## 🔮 Melhorias Futuras

### Funcionalidades Planejadas
- [ ] Adicionar mais bairros de São Paulo
- [ ] Integrar dados em tempo real via API
- [ ] Exportar comparações em PDF
- [ ] Adicionar gráficos de linha temporal
- [ ] Implementar filtros múltiplos
- [ ] Criar quiz educativo
- [ ] Adicionar camadas de calor (heatmap)
- [ ] Integrar com Google Maps

### Otimizações Técnicas
- [ ] Minificar CSS e JavaScript
- [ ] Implementar Service Worker (PWA)
- [ ] Adicionar testes automatizados
- [ ] Melhorar acessibilidade (WCAG)
- [ ] Otimizar imagens e ícones

---

## 📄 Licença

Este projeto foi desenvolvido para fins **educacionais** e **não comerciais**.

### Uso Permitido
- ✅ Uso em trabalhos acadêmicos
- ✅ Apresentações educacionais
- ✅ Estudo e aprendizado
- ✅ Modificação para fins educacionais

### Uso Restrito
- ❌ Comercialização
- ❌ Redistribuição sem créditos
- ❌ Uso em projetos comerciais

### Créditos Obrigatórios
Ao usar este projeto, mencione:
> "Mapa da Desigualdade - Desenvolvido por Richard Pimentel (SESI Carapicuíba, 2025)"

---

## 📞 Contato e Suporte

### Dúvidas sobre o Projeto
- Consulte este README
- Verifique a seção "Solução de Problemas"
- Abra o Console do navegador (F12) para ver erros

### Sugestões e Melhorias
- Documente bugs encontrados
- Sugira novas funcionalidades
- Compartilhe feedback sobre usabilidade

---

## 🏆 Agradecimentos

- **SESI Carapicuíba** - Instituição de ensino
- **Professor(a) de Geografia** - Orientação acadêmica
- **Instituto Cidades Sustentáveis** - Dados e inspiração
- **Comunidade Open Source** - Bibliotecas utilizadas
- **OpenStreetMap Contributors** - Dados cartográficos

---

## 📊 Estatísticas do Projeto

- **Linhas de Código**: ~1.500
- **Arquivos**: 3 (HTML, CSS, JS)
- **Bibliotecas Externas**: 4
- **Funcionalidades**: 15+
- **Indicadores Mapeados**: 5
- **Regiões Comparadas**: 2
- **Pontos de Interesse**: 6

---

## ✅ Checklist de Entrega

### Arquivos Necessários
- [x] `index.html` - Estrutura do site
- [x] `style.css` - Estilos e design
- [x] `script.js` - Funcionalidades
- [x] `README.md` - Documentação completa

### Funcionalidades Implementadas
- [x] Mapa interativo (Leaflet.js)
- [x] Marcadores personalizados
- [x] Filtros por indicador
- [x] Busca de bairros
- [x] Painel de estatísticas
- [x] Gráficos comparativos (Chart.js)
- [x] Modo claro/escuro
- [x] Geolocalização
- [x] Design responsivo
- [x] Notificações visuais
- [x] Modal informativo
- [x] Loading screen

### Testes Realizados
- [x] Desktop (Chrome, Firefox, Edge)
- [x] Tablet (iPad, Android)
- [x] Mobile (iPhone, Android)
- [x] Modo claro e escuro
- [x] Todas as funcionalidades
- [x] Responsividade

---

## 🎓 Conclusão

O **Mapa da Desigualdade** é uma ferramenta educacional que combina tecnologia e geografia para visualizar disparidades urbanas em São Paulo. Através de um mapa interativo, gráficos e dados comparativos, o projeto estimula reflexões sobre desigualdade social e a importância de políticas públicas inclusivas.

Este projeto demonstra como tecnologias web simples (HTML, CSS, JavaScript) podem criar experiências educativas poderosas e acessíveis, sem necessidade de backend ou infraestrutura complexa.

---

**Desenvolvido com 💙 por Richard Pimentel - SESI Carapicuíba | 2025**

---

*Última atualização: Janeiro de 2025*
#   g e o g r a f i a  
 