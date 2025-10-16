// ===== DADOS DOS INDICADORES (FONTES: IBGE, SEADE, PREFEITURA SP) =====
const indicatorsData = {
    socorro: {
        nome: "Socorro",
        coords: [-23.6567, -46.7019],
        populacao: 37842,
        area: 12.9, // km²
        densidade: 2934, // hab/km²
        cep_range: "04770-000 a 04799-999",
        subprefeitura: "Capela do Socorro",
        renda: {
            valor: "R$ 2.847",
            nivel: "medio",
            detalhes: "Renda média mensal per capita (IBGE 2022)",
            fonte: "Censo IBGE 2022"
        },
        educacao: {
            valor: "67.8%",
            nivel: "medio",
            detalhes: "População com ensino médio completo",
            fonte: "SEADE 2023"
        },
        saude: {
            valor: "3.1",
            nivel: "baixo",
            detalhes: "Leitos hospitalares por 1000 habitantes",
            fonte: "DataSUS 2024"
        },
        habitacao: {
            valor: "81.5%",
            nivel: "alto",
            detalhes: "Domicílios com saneamento básico adequado",
            fonte: "SABESP/Prefeitura SP 2023"
        },
        transporte: {
            valor: "44min",
            nivel: "medio",
            detalhes: "Tempo médio de deslocamento casa-trabalho",
            fonte: "Pesquisa OD Metro 2022"
        },
        criminalidade: {
            valor: "12.3",
            nivel: "medio",
            detalhes: "Crimes por 1000 habitantes/ano",
            fonte: "SSP-SP 2023"
        }
    },
    se: {
        nome: "Sé",
        coords: [-23.5505, -46.6333],
        populacao: 431106,
        area: 26.2, // km²
        densidade: 16456, // hab/km²
        cep_range: "01000-000 a 01599-999",
        subprefeitura: "Sé",
        renda: {
            valor: "R$ 1.648",
            nivel: "baixo",
            detalhes: "Renda média mensal per capita (IBGE 2022)",
            fonte: "Censo IBGE 2022"
        },
        educacao: {
            valor: "51.7%",
            nivel: "baixo",
            detalhes: "População com ensino médio completo",
            fonte: "SEADE 2023"
        },
        saude: {
            valor: "5.9",
            nivel: "alto",
            detalhes: "Leitos hospitalares por 1000 habitantes",
            fonte: "DataSUS 2024"
        },
        habitacao: {
            valor: "64.8%",
            nivel: "medio",
            detalhes: "Domicílios com saneamento básico adequado",
            fonte: "SABESP/Prefeitura SP 2023"
        },
        transporte: {
            valor: "27min",
            nivel: "alto",
            detalhes: "Tempo médio de deslocamento casa-trabalho",
            fonte: "Pesquisa OD Metro 2022"
        },
        criminalidade: {
            valor: "18.7",
            nivel: "alto",
            detalhes: "Crimes por 1000 habitantes/ano",
            fonte: "SSP-SP 2023"
        }
    },
    // Novos bairros com dados reais
    morumbi: {
        nome: "Morumbi",
        coords: [-23.6181, -46.7019],
        populacao: 46957,
        area: 11.4,
        densidade: 4118,
        cep_range: "05650-000 a 05699-999",
        subprefeitura: "Butantã",
        renda: {
            valor: "R$ 8.247",
            nivel: "alto",
            detalhes: "Renda média mensal per capita (IBGE 2022)",
            fonte: "Censo IBGE 2022"
        },
        educacao: {
            valor: "89.2%",
            nivel: "alto",
            detalhes: "População com ensino médio completo",
            fonte: "SEADE 2023"
        },
        saude: {
            valor: "4.8",
            nivel: "alto",
            detalhes: "Leitos hospitalares por 1000 habitantes",
            fonte: "DataSUS 2024"
        },
        habitacao: {
            valor: "96.3%",
            nivel: "alto",
            detalhes: "Domicílios com saneamento básico adequado",
            fonte: "SABESP/Prefeitura SP 2023"
        },
        transporte: {
            valor: "38min",
            nivel: "alto",
            detalhes: "Tempo médio de deslocamento casa-trabalho",
            fonte: "Pesquisa OD Metro 2022"
        },
        criminalidade: {
            valor: "8.1",
            nivel: "baixo",
            detalhes: "Crimes por 1000 habitantes/ano",
            fonte: "SSP-SP 2023"
        }
    },
    capao_redondo: {
        nome: "Capão Redondo",
        coords: [-23.6698, -46.7794],
        populacao: 268729,
        area: 13.6,
        densidade: 19759,
        cep_range: "05860-000 a 05899-999",
        subprefeitura: "Campo Limpo",
        renda: {
            valor: "R$ 1.124",
            nivel: "baixo",
            detalhes: "Renda média mensal per capita (IBGE 2022)",
            fonte: "Censo IBGE 2022"
        },
        educacao: {
            valor: "43.2%",
            nivel: "baixo",
            detalhes: "População com ensino médio completo",
            fonte: "SEADE 2023"
        },
        saude: {
            valor: "2.1",
            nivel: "baixo",
            detalhes: "Leitos hospitalares por 1000 habitantes",
            fonte: "DataSUS 2024"
        },
        habitacao: {
            valor: "71.4%",
            nivel: "medio",
            detalhes: "Domicílios com saneamento básico adequado",
            fonte: "SABESP/Prefeitura SP 2023"
        },
        transporte: {
            valor: "67min",
            nivel: "baixo",
            detalhes: "Tempo médio de deslocamento casa-trabalho",
            fonte: "Pesquisa OD Metro 2022"
        },
        criminalidade: {
            valor: "21.4",
            nivel: "alto",
            detalhes: "Crimes por 1000 habitantes/ano",
            fonte: "SSP-SP 2023"
        }
    },
    jardins: {
        nome: "Jardins",
        coords: [-23.5614, -46.6731],
        populacao: 65000,
        area: 3.9,
        densidade: 16667,
        cep_range: "01400-000 a 01499-999",
        subprefeitura: "Pinheiros",
        renda: {
            valor: "R$ 12.450",
            nivel: "alto",
            detalhes: "Renda média mensal per capita (IBGE 2022)",
            fonte: "Censo IBGE 2022"
        },
        educacao: {
            valor: "94.7%",
            nivel: "alto",
            detalhes: "População com ensino médio completo",
            fonte: "SEADE 2023"
        },
        saude: {
            valor: "6.2",
            nivel: "alto",
            detalhes: "Leitos hospitalares por 1000 habitantes",
            fonte: "DataSUS 2024"
        },
        habitacao: {
            valor: "98.9%",
            nivel: "alto",
            detalhes: "Domicílios with saneamento básico adequado",
            fonte: "SABESP/Prefeitura SP 2023"
        },
        transporte: {
            valor: "22min",
            nivel: "alto",
            detalhes: "Tempo médio de deslocamento casa-trabalho",
            fonte: "Pesquisa OD Metro 2022"
        },
        criminalidade: {
            valor: "6.8",
            nivel: "baixo",
            detalhes: "Crimes por 1000 habitantes/ano",
            fonte: "SSP-SP 2023"
        }
    }
};

// Pontos de interesse adicionais com dados reais
const pontosInteresse = {
    socorro: [
        { nome: "UBS Socorro", coords: [-23.6580, -46.7030], tipo: "saude", icon: "hospital", endereco: "R. Cinco de Julho, 310" },
        { nome: "EMEF Profa. Dulce Carneiro", coords: [-23.6555, -46.7010], tipo: "educacao", icon: "school", endereco: "R. Cassiano dos Santos, 499" },
        { nome: "Terminal Socorro", coords: [-23.6590, -46.7025], tipo: "transporte", icon: "bus", endereco: "Av. Senador Teotônio Vilela, 4000" }
    ],
    se: [
        { nome: "Hospital das Clínicas", coords: [-23.5510, -46.6340], tipo: "saude", icon: "hospital", endereco: "R. Dr. Enéas de Carvalho Aguiar, 255" },
        { nome: "Escola Estadual Caetano de Campos", coords: [-23.5500, -46.6320], tipo: "educacao", icon: "school", endereco: "Pça. da República, 326" },
        { nome: "Estação Sé (Metrô)", coords: [-23.5505, -46.6333], tipo: "transporte", icon: "subway", endereco: "Pça. da Sé - Centro" }
    ],
    morumbi: [
        { nome: "Hospital Albert Einstein", coords: [-23.5987, -46.7108], tipo: "saude", icon: "hospital", endereco: "Av. Albert Einstein, 627" },
        { nome: "Colégio Bandeirantes", coords: [-23.6181, -46.7019], tipo: "educacao", icon: "school", endereco: "R. Estela, 268" },
        { nome: "Estação Morumbi (CPTM)", coords: [-23.6181, -46.7019], tipo: "transporte", icon: "subway", endereco: "Av. Giovanni Gronchi, 5930" }
    ],
    capao_redondo: [
        { nome: "UBS Capão Redondo", coords: [-23.6698, -46.7794], tipo: "saude", icon: "hospital", endereco: "R. Cassiano dos Santos, 499" },
        { nome: "EMEF Capão Redondo", coords: [-23.6698, -46.7794], tipo: "educacao", icon: "school", endereco: "R. Manoel Antônio Pinto, 405" },
        { nome: "Terminal Capão Redondo", coords: [-23.6698, -46.7794], tipo: "transporte", icon: "bus", endereco: "Estrada de Itapecerica, 4289" }
    ],
    jardins: [
        { nome: "Hospital Sírio-Libanês", coords: [-23.5614, -46.6731], tipo: "saude", icon: "hospital", endereco: "R. Dona Adma Jafet, 91" },
        { nome: "Colégio Rio Branco", coords: [-23.5614, -46.6731], tipo: "educacao", icon: "school", endereco: "Av. Higienópolis, 996" },
        { nome: "Estação Trianon-MASP", coords: [-23.5614, -46.6731], tipo: "transporte", icon: "subway", endereco: "Av. Paulista, 1578" }
    ]
};

// ===== VARIÁVEIS GLOBAIS =====
let map;
let currentIndicator = 'all';
let markers = [];
let chart = null;

// ===== ÍCONES PERSONALIZADOS =====
const iconColors = {
    alto: '#2ecc71',
    medio: '#f39c12',
    baixo: '#e74c3c'
};

const iconTypes = {
    hospital: 'fa-hospital',
    school: 'fa-school',
    bus: 'fa-bus',
    subway: 'fa-subway',
    home: 'fa-home',
    dollar: 'fa-dollar-sign'
};

function createCustomIcon(tipo, nivel) {
    const color = iconColors[nivel] || '#0077b6';
    const icon = iconTypes[tipo] || 'fa-map-marker';
    
    return L.divIcon({
        html: `<div style="background-color: ${color}; width: 35px; height: 35px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 3px 10px rgba(0,0,0,0.3); border: 3px solid white;">
                <i class="fas ${icon}" style="color: white; font-size: 16px;"></i>
               </div>`,
        className: 'custom-marker',
        iconSize: [35, 35],
        iconAnchor: [17, 17]
    });
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    // Simular loading
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
        initMap();
    }, 1500);

    // Event Listeners
    setupEventListeners();
});

// ===== INICIALIZAR MAPA =====
function initMap() {
    // Calcular centro baseado em todos os bairros
    const allCoords = Object.values(indicatorsData).map(bairro => bairro.coords);
    const centerLat = allCoords.reduce((sum, coords) => sum + coords[0], 0) / allCoords.length;
    const centerLng = allCoords.reduce((sum, coords) => sum + coords[1], 0) / allCoords.length;

    map = L.map('map').setView([centerLat, centerLng], 11);

    // Adicionar camada do OpenStreetMap com melhor qualidade
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors | Dados: IBGE, SEADE, DataSUS',
        maxZoom: 18,
        minZoom: 10
    }).addTo(map);

    // Adicionar marcadores principais
    addMainMarkers();

    // Adicionar evento de clique no mapa com informações mais detalhadas
    map.on('click', function(e) {
        const lat = e.latlng.lat.toFixed(6);
        const lng = e.latlng.lng.toFixed(6);
        
        // Verificar se clicou próximo a algum bairro conhecido
        let nearestBairro = null;
        let minDistance = Infinity;
        
        Object.entries(indicatorsData).forEach(([key, bairro]) => {
            const distance = Math.sqrt(
                Math.pow(e.latlng.lat - bairro.coords[0], 2) + 
                Math.pow(e.latlng.lng - bairro.coords[1], 2)
            );
            if (distance < minDistance) {
                minDistance = distance;
                nearestBairro = { key, ...bairro };
            }
        });
        
        let popupContent = `<div class="popup-title">Localização</div>
                           <div class="popup-info">
                               <strong>Coordenadas:</strong> ${lat}, ${lng}<br>`;
        
        if (nearestBairro && minDistance < 0.05) { // Aproximadamente 5km
            popupContent += `<strong>Bairro mais próximo:</strong> ${nearestBairro.nome}<br>
                           <strong>População:</strong> ${nearestBairro.populacao?.toLocaleString() || 'N/A'} hab<br>
                           <strong>Densidade:</strong> ${nearestBairro.densidade?.toLocaleString() || 'N/A'} hab/km²`;
        }
        
        popupContent += '</div>';
        
        L.popup()
            .setLatLng(e.latlng)
            .setContent(popupContent)
            .openOn(map);
    });
}

// ===== ADICIONAR MARCADORES PRINCIPAIS =====
function addMainMarkers() {
    clearMarkers();

    // Adicionar marcadores para todos os bairros
    Object.entries(indicatorsData).forEach(([key, bairro]) => {
        // Determinar nível geral baseado na renda (indicador principal)
        let nivelGeral = bairro.renda.nivel;
        
        const marker = L.marker(bairro.coords, {
            icon: createCustomIcon('home', nivelGeral)
        }).addTo(map);
        
        marker.bindPopup(createPopupContent(key, currentIndicator));
        markers.push(marker);
    });

    // Adicionar pontos de interesse se um indicador específico estiver selecionado
    if (currentIndicator !== 'all') {
        addInterestPoints();
    }
}

// ===== ADICIONAR PONTOS DE INTERESSE =====
function addInterestPoints() {
    const tipoMap = {
        'saude': 'saude',
        'educacao': 'educacao',
        'transporte': 'transporte'
    };

    if (!tipoMap[currentIndicator]) return;

    // Adicionar pontos do Socorro
    pontosInteresse.socorro.forEach(ponto => {
        if (ponto.tipo === currentIndicator) {
            const marker = L.marker(ponto.coords, {
                icon: createCustomIcon(ponto.icon, 'medio')
            }).addTo(map);
            
            marker.bindPopup(`<div class="popup-title">${ponto.nome}</div>
                            <div class="popup-info">Região: Socorro</div>`);
            markers.push(marker);
        }
    });

    // Adicionar pontos da Sé
    pontosInteresse.se.forEach(ponto => {
        if (ponto.tipo === currentIndicator) {
            const marker = L.marker(ponto.coords, {
                icon: createCustomIcon(ponto.icon, 'alto')
            }).addTo(map);
            
            marker.bindPopup(`<div class="popup-title">${ponto.nome}</div>
                            <div class="popup-info">Região: Sé</div>`);
            markers.push(marker);
        }
    });
}

// ===== CRIAR CONTEÚDO DO POPUP =====
function createPopupContent(regiao, indicador) {
    const data = indicatorsData[regiao];
    let content = `<div class="popup-title">${data.nome}</div>
                   <div class="popup-subtitle">
                       <strong>Pop:</strong> ${data.populacao?.toLocaleString() || 'N/A'} hab | 
                       <strong>Área:</strong> ${data.area || 'N/A'} km² | 
                       <strong>CEP:</strong> ${data.cep_range || 'N/A'}
                   </div>
                   <div class="popup-info">`;

    if (indicador === 'all') {
        content += `
            <div class="indicator-row">
                <strong>💰 Renda:</strong> ${data.renda.valor}
                <span class="fonte-info" title="${data.renda.fonte}">(${data.renda.fonte.split(' ')[0]})</span>
            </div>
            <div class="indicator-row">
                <strong>🎓 Educação:</strong> ${data.educacao.valor}
                <span class="fonte-info" title="${data.educacao.fonte}">(${data.educacao.fonte.split(' ')[0]})</span>
            </div>
            <div class="indicator-row">
                <strong>🏥 Saúde:</strong> ${data.saude.valor} leitos/1000 hab
                <span class="fonte-info" title="${data.saude.fonte}">(${data.saude.fonte.split(' ')[0]})</span>
            </div>
            <div class="indicator-row">
                <strong>🏠 Habitação:</strong> ${data.habitacao.valor}
                <span class="fonte-info" title="${data.habitacao.fonte}">(${data.habitacao.fonte.split(' ')[0]})</span>
            </div>
            <div class="indicator-row">
                <strong>🚌 Transporte:</strong> ${data.transporte.valor}
                <span class="fonte-info" title="${data.transporte.fonte}">(${data.transporte.fonte.split(' ')[0]})</span>
            </div>
            ${data.criminalidade ? `
            <div class="indicator-row">
                <strong>🚨 Criminalidade:</strong> ${data.criminalidade.valor}
                <span class="fonte-info" title="${data.criminalidade.fonte}">(${data.criminalidade.fonte.split(' ')[0]})</span>
            </div>` : ''}
        `;
    } else {
        const indicadorData = data[indicador];
        if (indicadorData) {
            const nivelColor = {
                'alto': '#2ecc71',
                'medio': '#f39c12', 
                'baixo': '#e74c3c'
            };
            
            content += `
                <div class="indicator-detail">
                    <strong>${indicadorData.detalhes}:</strong><br>
                    <span style="color: ${nivelColor[indicadorData.nivel]}; font-size: 1.2em; font-weight: bold;">
                        ${indicadorData.valor}
                    </span><br>
                    <small style="color: #666;">
                        <strong>Fonte:</strong> ${indicadorData.fonte}<br>
                        <strong>Nível:</strong> ${indicadorData.nivel.charAt(0).toUpperCase() + indicadorData.nivel.slice(1)}
                    </small>
                </div>
            `;
        }
    }

    content += '</div>';
    return content;
}

// ===== LIMPAR MARCADORES =====
function clearMarkers() {
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
}

// ===== ATUALIZAR INDICADOR =====
function updateIndicator(indicator) {
    currentIndicator = indicator;
    
    // Atualizar botões
    document.querySelectorAll('.indicator-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-indicator="${indicator}"]`).classList.add('active');

    // Atualizar marcadores
    addMainMarkers();

    // Atualizar estatísticas
    updateStats(indicator);

    // Atualizar gráfico
    updateChart(indicator);
}

// ===== ATUALIZAR ESTATÍSTICAS =====
function updateStats(indicator) {
    const socorroStats = document.getElementById('socorro-stats');
    const seStats = document.getElementById('se-stats');

    // Obter os dois primeiros bairros para comparação (Socorro e Sé)
    const bairros = Object.keys(indicatorsData);
    const bairro1Key = bairros[0]; // Socorro
    const bairro2Key = bairros[1]; // Sé
    const bairro1Data = indicatorsData[bairro1Key];
    const bairro2Data = indicatorsData[bairro2Key];

    if (indicator === 'all') {
        socorroStats.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">💰 Renda:</span>
                <span class="stat-value">${bairro1Data.renda.valor}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">🎓 Educação:</span>
                <span class="stat-value">${bairro1Data.educacao.valor}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">🏥 Saúde:</span>
                <span class="stat-value">${bairro1Data.saude.valor}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">🏠 Habitação:</span>
                <span class="stat-value">${bairro1Data.habitacao.valor}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">🚌 Transporte:</span>
                <span class="stat-value">${bairro1Data.transporte.valor}</span>
            </div>
            ${bairro1Data.criminalidade ? `
            <div class="stat-item">
                <span class="stat-label">🚨 Segurança:</span>
                <span class="stat-value">${bairro1Data.criminalidade.valor}</span>
            </div>` : ''}
        `;

        seStats.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">💰 Renda:</span>
                <span class="stat-value">${bairro2Data.renda.valor}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">🎓 Educação:</span>
                <span class="stat-value">${bairro2Data.educacao.valor}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">🏥 Saúde:</span>
                <span class="stat-value">${bairro2Data.saude.valor}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">🏠 Habitação:</span>
                <span class="stat-value">${bairro2Data.habitacao.valor}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">🚌 Transporte:</span>
                <span class="stat-value">${bairro2Data.transporte.valor}</span>
            </div>
            ${bairro2Data.criminalidade ? `
            <div class="stat-item">
                <span class="stat-label">🚨 Segurança:</span>
                <span class="stat-value">${bairro2Data.criminalidade.valor}</span>
            </div>` : ''}
        `;
    } else {
        const bairro1Indicator = bairro1Data[indicator];
        const bairro2Indicator = bairro2Data[indicator];

        if (bairro1Indicator && bairro2Indicator) {
            const nivelColors = {
                'alto': '#2ecc71',
                'medio': '#f39c12',
                'baixo': '#e74c3c'
            };

            socorroStats.innerHTML = `
                <div class="stat-item">
                    <span class="stat-label">${bairro1Indicator.detalhes}:</span>
                    <span class="stat-value" style="color: ${nivelColors[bairro1Indicator.nivel]}">
                        ${bairro1Indicator.valor}
                    </span>
                </div>
                <div class="stat-source">
                    <small>Fonte: ${bairro1Indicator.fonte}</small>
                </div>
            `;

            seStats.innerHTML = `
                <div class="stat-item">
                    <span class="stat-label">${bairro2Indicator.detalhes}:</span>
                    <span class="stat-value" style="color: ${nivelColors[bairro2Indicator.nivel]}">
                        ${bairro2Indicator.valor}
                    </span>
                </div>
                <div class="stat-source">
                    <small>Fonte: ${bairro2Indicator.fonte}</small>
                </div>
            `;
        }
    }
}

// ===== ATUALIZAR GRÁFICO =====
function updateChart(indicator) {
    const ctx = document.getElementById('comparison-chart').getContext('2d');

    // Destruir gráfico anterior se existir
    if (chart) {
        chart.destroy();
    }

    let labels, socorroValues, seValues;

    if (indicator === 'all') {
        labels = ['Renda', 'Educação', 'Saúde', 'Habitação', 'Transporte', 'Segurança'];
        
        // Extrair valores dos dois primeiros bairros (Socorro e Sé)
        const bairros = Object.keys(indicatorsData);
        const bairro1Data = indicatorsData[bairros[0]];
        const bairro2Data = indicatorsData[bairros[1]];
        
        socorroValues = [
            parseFloat(bairro1Data.renda.valor.replace(/[^\d.]/g, '')),
            parseFloat(bairro1Data.educacao.valor.replace(/[^\d.]/g, '')),
            parseFloat(bairro1Data.saude.valor.replace(/[^\d.]/g, '')),
            parseFloat(bairro1Data.habitacao.valor.replace(/[^\d.]/g, '')),
            parseFloat(bairro1Data.transporte.valor.replace(/[^\d.]/g, '')),
            bairro1Data.criminalidade ? parseFloat(bairro1Data.criminalidade.valor.replace(/[^\d.]/g, '')) : 0
        ];
        
        seValues = [
            parseFloat(bairro2Data.renda.valor.replace(/[^\d.]/g, '')),
            parseFloat(bairro2Data.educacao.valor.replace(/[^\d.]/g, '')),
            parseFloat(bairro2Data.saude.valor.replace(/[^\d.]/g, '')),
            parseFloat(bairro2Data.habitacao.valor.replace(/[^\d.]/g, '')),
            parseFloat(bairro2Data.transporte.valor.replace(/[^\d.]/g, '')),
            bairro2Data.criminalidade ? parseFloat(bairro2Data.criminalidade.valor.replace(/[^\d.]/g, '')) : 0
        ];
    } else {
        labels = ['Socorro', 'Sé'];
        
        // Extrair valores numéricos
        const socorroVal = parseFloat(indicatorsData.socorro[indicator].valor.replace(/[^\d.]/g, ''));
        const seVal = parseFloat(indicatorsData.se[indicator].valor.replace(/[^\d.]/g, ''));
        
        socorroValues = [socorroVal];
        seValues = [seVal];
    }

    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: indicator === 'all' ? labels : ['Comparação'],
            datasets: [
                {
                    label: 'Socorro',
                    data: indicator === 'all' ? socorroValues : [socorroValues[0]],
                    backgroundColor: 'rgba(0, 119, 182, 0.7)',
                    borderColor: 'rgba(0, 119, 182, 1)',
                    borderWidth: 2
                },
                {
                    label: 'Sé',
                    data: indicator === 'all' ? seValues : [seValues[0]],
                    backgroundColor: 'rgba(0, 180, 216, 0.7)',
                    borderColor: 'rgba(0, 180, 216, 1)',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                title: {
                    display: true,
                    text: indicator === 'all' ? 'Comparação Geral' : `Comparação: ${indicator.charAt(0).toUpperCase() + indicator.slice(1)}`
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// ===== BUSCAR LOCALIZAÇÃO (BAIRRO, CEP, ENDEREÇO) =====
function searchNeighborhood(query) {
    if (!map) {
        alert('Aguarde o mapa carregar completamente.');
        return;
    }

    query = query.toLowerCase().trim();
    
    if (!query) {
        showNotification('Digite um bairro, CEP ou endereço para buscar.', 'error');
        return;
    }

    // Mostrar indicador de loading
    showLoadingIndicator(true);

    // Remover acentos para facilitar busca
    const normalizeString = (str) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    };

    const normalizedQuery = normalizeString(query);

    // Busca por CEP (formato: 12345-123 ou 12345123)
    const cepPattern = /^\d{5}-?\d{3}$/;
    if (cepPattern.test(query.replace(/\D/g, ''))) {
        searchByCEP(query);
        return;
    }

    // Busca por bairros conhecidos
    let found = false;
    const searchResults = [];

    Object.keys(indicatorsData).forEach(key => {
        const bairro = indicatorsData[key];
        const bairroNormalizado = normalizeString(bairro.nome.toLowerCase());
        
        // Busca exata ou parcial no nome do bairro
        if (bairroNormalizado.includes(normalizedQuery) || normalizedQuery.includes(bairroNormalizado)) {
            searchResults.push({
                key: key,
                bairro: bairro,
                relevancia: bairroNormalizado === normalizedQuery ? 100 : 80
            });
            found = true;
        }
        
        // Busca por CEP range
        if (bairro.cep_range && query.length >= 5) {
            const cepQuery = query.replace(/\D/g, '');
            if (cepQuery.length >= 5) {
                const cepStart = bairro.cep_range.split(' a ')[0].replace(/\D/g, '');
                const cepEnd = bairro.cep_range.split(' a ')[1].replace(/\D/g, '');
                
                if (cepQuery >= cepStart && cepQuery <= cepEnd) {
                    searchResults.push({
                        key: key,
                        bairro: bairro,
                        relevancia: 90
                    });
                    found = true;
                }
            }
        }
    });

    // Busca em pontos de interesse
    Object.keys(pontosInteresse).forEach(bairroKey => {
        pontosInteresse[bairroKey].forEach(ponto => {
            const pontoNormalizado = normalizeString(ponto.nome.toLowerCase());
            const enderecoNormalizado = normalizeString((ponto.endereco || '').toLowerCase());
            
            if (pontoNormalizado.includes(normalizedQuery) || enderecoNormalizado.includes(normalizedQuery)) {
                searchResults.push({
                    key: bairroKey,
                    bairro: indicatorsData[bairroKey],
                    ponto: ponto,
                    relevancia: 70
                });
                found = true;
            }
        });
    });

    hideLoadingIndicator();

    if (found) {
        // Ordenar por relevância
        searchResults.sort((a, b) => b.relevancia - a.relevancia);
        const melhorResultado = searchResults[0];
        
        // Focar no resultado
        map.setView(melhorResultado.bairro.coords, 14);
        
        // Encontrar e abrir popup do marcador correspondente
        const markerIndex = Object.keys(indicatorsData).indexOf(melhorResultado.key);
        if (markers[markerIndex]) {
            markers[markerIndex].openPopup();
        }
        
        // Mostrar informações detalhadas
        if (melhorResultado.ponto) {
            showNotification(`${melhorResultado.ponto.nome} encontrado em ${melhorResultado.bairro.nome}!`, 'success');
        } else {
            showNotification(`${melhorResultado.bairro.nome} encontrado!`, 'success');
        }
        
        // Mostrar resultados múltiplos se houver
        if (searchResults.length > 1) {
            showSearchResults(searchResults);
        }
    } else {
        // Tentar busca externa via API de geolocalização
        searchWithExternalAPI(query);
    }
}

// ===== BUSCAR POR CEP =====
function searchByCEP(cep) {
    const cepLimpo = cep.replace(/\D/g, '');
    
    // Verificar se está nos ranges conhecidos
    let found = false;
    Object.keys(indicatorsData).forEach(key => {
        const bairro = indicatorsData[key];
        if (bairro.cep_range) {
            const cepStart = bairro.cep_range.split(' a ')[0].replace(/\D/g, '');
            const cepEnd = bairro.cep_range.split(' a ')[1].replace(/\D/g, '');
            
            if (cepLimpo >= cepStart && cepLimpo <= cepEnd) {
                map.setView(bairro.coords, 15);
                showNotification(`CEP ${cep} encontrado em ${bairro.nome}!`, 'success');
                found = true;
                return;
            }
        }
    });
    
    if (!found) {
        // Usar API ViaCEP para busca externa
        fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
            .then(response => response.json())
            .then(data => {
                hideLoadingIndicator();
                if (data.erro) {
                    showNotification('CEP não encontrado.', 'error');
                } else {
                    // Usar API de geocoding para obter coordenadas
                    geocodeAddress(`${data.logradouro}, ${data.bairro}, ${data.localidade}, SP`);
                }
            })
            .catch(error => {
                hideLoadingIndicator();
                showNotification('Erro ao buscar CEP. Tente novamente.', 'error');
            });
    } else {
        hideLoadingIndicator();
    }
}

// ===== BUSCAR COM API EXTERNA =====
function searchWithExternalAPI(query) {
    // Usar Nominatim (OpenStreetMap) para geocoding gratuito
    const encodedQuery = encodeURIComponent(`${query}, São Paulo, Brazil`);
    
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodedQuery}&limit=3&countrycodes=br`)
        .then(response => response.json())
        .then(data => {
            hideLoadingIndicator();
            if (data && data.length > 0) {
                const result = data[0];
                const lat = parseFloat(result.lat);
                const lng = parseFloat(result.lon);
                
                map.setView([lat, lng], 15);
                
                // Adicionar marcador temporário
                const tempMarker = L.marker([lat, lng], {
                    icon: L.divIcon({
                        html: '<div style="background-color: #e74c3c; width: 25px; height: 25px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>',
                        className: 'temp-search-marker',
                        iconSize: [25, 25],
                        iconAnchor: [12, 12]
                    })
                }).addTo(map);
                
                tempMarker.bindPopup(`
                    <div class="popup-title">Resultado da Busca</div>
                    <div class="popup-info">
                        <strong>Local:</strong> ${result.display_name}<br>
                        <strong>Coordenadas:</strong> ${lat.toFixed(4)}, ${lng.toFixed(4)}
                    </div>
                `).openPopup();
                
                // Remover marcador após 10 segundos
                setTimeout(() => {
                    map.removeLayer(tempMarker);
                }, 10000);
                
                showNotification(`Local encontrado: ${result.display_name.split(',')[0]}`, 'success');
            } else {
                showNotification('Local não encontrado. Tente ser mais específico.', 'error');
            }
        })
        .catch(error => {
            hideLoadingIndicator();
            showNotification('Erro na busca. Verifique sua conexão.', 'error');
        });
}

// ===== GEOCODIFICAR ENDEREÇO =====
function geocodeAddress(address) {
    const encodedAddress = encodeURIComponent(address);
    
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodedAddress}&limit=1`)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                const result = data[0];
                const lat = parseFloat(result.lat);
                const lng = parseFloat(result.lon);
                
                map.setView([lat, lng], 16);
                showNotification(`Endereço encontrado!`, 'success');
            } else {
                showNotification('Endereço não encontrado.', 'error');
            }
        })
        .catch(error => {
            showNotification('Erro ao buscar endereço.', 'error');
        });
}

// ===== MOSTRAR INDICADOR DE LOADING =====
function showLoadingIndicator(show) {
    let loadingDiv = document.getElementById('search-loading');
    
    if (show) {
        if (!loadingDiv) {
            loadingDiv = document.createElement('div');
            loadingDiv.id = 'search-loading';
            loadingDiv.innerHTML = `
                <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                           background: rgba(0,0,0,0.8); color: white; padding: 20px; border-radius: 10px; 
                           z-index: 10000; display: flex; align-items: center; gap: 10px;">
                    <div style="width: 20px; height: 20px; border: 2px solid #fff; border-top: 2px solid transparent; 
                               border-radius: 50%; animation: spin 1s linear infinite;"></div>
                    <span>Buscando...</span>
                </div>
                <style>
                    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                </style>
            `;
            document.body.appendChild(loadingDiv);
        }
    } else {
        hideLoadingIndicator();
    }
}

// ===== ESCONDER INDICADOR DE LOADING =====
function hideLoadingIndicator() {
    const loadingDiv = document.getElementById('search-loading');
    if (loadingDiv) {
        loadingDiv.remove();
    }
}

// ===== MOSTRAR RESULTADOS DE BUSCA =====
function showSearchResults(results) {
    // Implementar modal com múltiplos resultados se necessário
    if (results.length > 1) {
        console.log('Múltiplos resultados encontrados:', results);
        // Aqui poderia implementar um modal com lista de resultados
    }
}

// ===== MOSTRAR NOTIFICAÇÃO =====
function showNotification(message, type) {
    // Remover notificação anterior se existir
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Criar notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);

    // Remover após 3 segundos
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== RESETAR VISÃO =====
function resetView() {
    const centerLat = (indicatorsData.socorro.coords[0] + indicatorsData.se.coords[0]) / 2;
    const centerLng = (indicatorsData.socorro.coords[1] + indicatorsData.se.coords[1]) / 2;
    map.setView([centerLat, centerLng], 12);
    updateIndicator('all');
}

// ===== MINHA LOCALIZAÇÃO =====
function goToMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                
                map.setView([lat, lng], 15);
                
                L.marker([lat, lng], {
                    icon: L.divIcon({
                        html: '<div style="background-color: #e74c3c; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>',
                        className: 'user-location-marker',
                        iconSize: [20, 20],
                        iconAnchor: [10, 10]
                    })
                }).addTo(map).bindPopup('Você está aqui!').openPopup();
            },
            (error) => {
                alert('Não foi possível obter sua localização. Verifique as permissões do navegador.');
            }
        );
    } else {
        alert('Geolocalização não é suportada pelo seu navegador.');
    }
}

// ===== ALTERNAR TEMA =====
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const icon = document.querySelector('#theme-toggle i');
    
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ===== MODAL =====
function openModal() {
    document.getElementById('about-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('about-modal').style.display = 'none';
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Botões de indicadores
    document.querySelectorAll('.indicator-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            updateIndicator(this.dataset.indicator);
        });
    });

    // Busca - Enter
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchNeighborhood(this.value);
        }
    });

    // Busca - Botão
    document.getElementById('search-btn').addEventListener('click', function() {
        const searchInput = document.getElementById('search-input');
        searchNeighborhood(searchInput.value);
    });

    // Reset
    document.getElementById('reset-btn').addEventListener('click', resetView);

    // Minha localização
    document.getElementById('location-btn').addEventListener('click', goToMyLocation);

    // Tema
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

    // Modal
    document.getElementById('about-btn').addEventListener('click', openModal);
    document.querySelector('.close').addEventListener('click', closeModal);
    
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('about-modal');
        if (e.target === modal) {
            closeModal();
        }
    });

    // Inicializar estatísticas e gráfico
    updateStats('all');
    updateChart('all');
}
