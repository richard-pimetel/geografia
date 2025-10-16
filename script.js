// ===== DADOS DOS INDICADORES =====
const indicatorsData = {
    socorro: {
        nome: "Socorro",
        coords: [-23.6567, -46.7019],
        renda: {
            valor: "R$ 2.850",
            nivel: "medio",
            detalhes: "Renda média mensal per capita"
        },
        educacao: {
            valor: "68%",
            nivel: "medio",
            detalhes: "População com ensino médio completo"
        },
        saude: {
            valor: "3.2",
            nivel: "baixo",
            detalhes: "Leitos hospitalares por 1000 habitantes"
        },
        habitacao: {
            valor: "82%",
            nivel: "alto",
            detalhes: "Domicílios com saneamento básico"
        },
        transporte: {
            valor: "45min",
            nivel: "medio",
            detalhes: "Tempo médio de deslocamento"
        }
    },
    se: {
        nome: "Sé",
        coords: [-23.5505, -46.6333],
        renda: {
            valor: "R$ 1.650",
            nivel: "baixo",
            detalhes: "Renda média mensal per capita"
        },
        educacao: {
            valor: "52%",
            nivel: "baixo",
            detalhes: "População com ensino médio completo"
        },
        saude: {
            valor: "5.8",
            nivel: "alto",
            detalhes: "Leitos hospitalares por 1000 habitantes"
        },
        habitacao: {
            valor: "65%",
            nivel: "medio",
            detalhes: "Domicílios com saneamento básico"
        },
        transporte: {
            valor: "28min",
            nivel: "alto",
            detalhes: "Tempo médio de deslocamento"
        }
    }
};

// Pontos de interesse adicionais
const pontosInteresse = {
    socorro: [
        { nome: "UBS Socorro", coords: [-23.6580, -46.7030], tipo: "saude", icon: "hospital" },
        { nome: "EMEF Socorro", coords: [-23.6555, -46.7010], tipo: "educacao", icon: "school" },
        { nome: "Terminal Socorro", coords: [-23.6590, -46.7025], tipo: "transporte", icon: "bus" }
    ],
    se: [
        { nome: "Hospital Municipal da Sé", coords: [-23.5510, -46.6340], tipo: "saude", icon: "hospital" },
        { nome: "Escola Estadual Centro", coords: [-23.5500, -46.6320], tipo: "educacao", icon: "school" },
        { nome: "Estação Sé (Metrô)", coords: [-23.5505, -46.6333], tipo: "transporte", icon: "subway" }
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
    // Criar mapa centrado entre Socorro e Sé
    const centerLat = (indicatorsData.socorro.coords[0] + indicatorsData.se.coords[0]) / 2;
    const centerLng = (indicatorsData.socorro.coords[1] + indicatorsData.se.coords[1]) / 2;

    map = L.map('map').setView([centerLat, centerLng], 12);

    // Adicionar camada do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(map);

    // Adicionar marcadores principais
    addMainMarkers();

    // Adicionar evento de clique no mapa
    map.on('click', function(e) {
        const lat = e.latlng.lat.toFixed(4);
        const lng = e.latlng.lng.toFixed(4);
        
        L.popup()
            .setLatLng(e.latlng)
            .setContent(`<div class="popup-title">Coordenadas</div>
                        <div class="popup-info">
                            <strong>Latitude:</strong> ${lat}<br>
                            <strong>Longitude:</strong> ${lng}
                        </div>`)
            .openOn(map);
    });
}

// ===== ADICIONAR MARCADORES PRINCIPAIS =====
function addMainMarkers() {
    clearMarkers();

    // Marcador Socorro
    const socorroMarker = L.marker(indicatorsData.socorro.coords, {
        icon: createCustomIcon('home', 'medio')
    }).addTo(map);
    
    socorroMarker.bindPopup(createPopupContent('socorro', currentIndicator));
    markers.push(socorroMarker);

    // Marcador Sé
    const seMarker = L.marker(indicatorsData.se.coords, {
        icon: createCustomIcon('home', 'baixo')
    }).addTo(map);
    
    seMarker.bindPopup(createPopupContent('se', currentIndicator));
    markers.push(seMarker);

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
    let content = `<div class="popup-title">${data.nome}</div><div class="popup-info">`;

    if (indicador === 'all') {
        content += `
            <strong>Renda Média:</strong> ${data.renda.valor}<br>
            <strong>Educação:</strong> ${data.educacao.valor}<br>
            <strong>Saúde:</strong> ${data.saude.valor} leitos/1000 hab<br>
            <strong>Habitação:</strong> ${data.habitacao.valor}<br>
            <strong>Transporte:</strong> ${data.transporte.valor}
        `;
    } else {
        const indicadorData = data[indicador];
        content += `
            <strong>${indicadorData.detalhes}:</strong><br>
            ${indicadorData.valor}
        `;
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

    if (indicator === 'all') {
        socorroStats.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">Renda:</span>
                <span class="stat-value">${indicatorsData.socorro.renda.valor}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Educação:</span>
                <span class="stat-value">${indicatorsData.socorro.educacao.valor}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Saúde:</span>
                <span class="stat-value">${indicatorsData.socorro.saude.valor}</span>
            </div>
        `;

        seStats.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">Renda:</span>
                <span class="stat-value">${indicatorsData.se.renda.valor}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Educação:</span>
                <span class="stat-value">${indicatorsData.se.educacao.valor}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Saúde:</span>
                <span class="stat-value">${indicatorsData.se.saude.valor}</span>
            </div>
        `;
    } else {
        const socorroData = indicatorsData.socorro[indicator];
        const seData = indicatorsData.se[indicator];

        socorroStats.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">${socorroData.detalhes}:</span>
                <span class="stat-value">${socorroData.valor}</span>
            </div>
        `;

        seStats.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">${seData.detalhes}:</span>
                <span class="stat-value">${seData.valor}</span>
            </div>
        `;
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
        labels = ['Renda', 'Educação', 'Saúde', 'Habitação', 'Transporte'];
        socorroValues = [2850, 68, 3.2, 82, 45];
        seValues = [1650, 52, 5.8, 65, 28];
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

// ===== BUSCAR BAIRRO =====
function searchNeighborhood(query) {
    if (!map) {
        alert('Aguarde o mapa carregar completamente.');
        return;
    }

    query = query.toLowerCase().trim();

    // Remover acentos para facilitar busca
    const normalizeString = (str) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    };

    const normalizedQuery = normalizeString(query);

    // Buscar Socorro
    if (normalizedQuery.includes('socorro')) {
        map.setView(indicatorsData.socorro.coords, 14);
        if (markers.length > 0 && markers[0]) {
            markers[0].openPopup();
        }
        showNotification('Socorro encontrado!', 'success');
    } 
    // Buscar Sé
    else if (normalizedQuery === 'se' || normalizedQuery === 'sé' || normalizedQuery.includes('se')) {
        map.setView(indicatorsData.se.coords, 14);
        if (markers.length > 1 && markers[1]) {
            markers[1].openPopup();
        }
        showNotification('Sé encontrado!', 'success');
    } 
    // Nenhum bairro encontrado
    else if (query) {
        showNotification('Bairro não encontrado. Tente "Socorro" ou "Sé".', 'error');
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
