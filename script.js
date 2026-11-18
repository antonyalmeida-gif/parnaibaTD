// ============ DADOS DOS PERSONAGENS ============
const personagens = [
    { id: 1, nome: "Pescador", dano: 15, range: 120, spa: 1.0, custo: 150, cor: "#8B4513",
      desc: "Pescador experiente do Delta", tipo: "pescador" },
    { id: 2, nome: "Jangadeiro", dano: 30, range: 90, spa: 1.8, custo: 250, cor: "#D2691E",
      desc: "Mestre das jangadas, dano pesado", tipo: "jangadeiro" },
    { id: 3, nome: "Caranguejo", dano: 8, range: 70, spa: 0.4, custo: 100, cor: "#FF6347",
      desc: "Pequeno mas muito rápido", tipo: "caranguejo" },
    { id: 4, nome: "Guarda Ambiental", dano: 20, range: 160, spa: 1.2, custo: 200, cor: "#228B22",
      desc: "Alcance excelente, protege o Delta", tipo: "guarda" },
    { id: 5, nome: "Canoeiro", dano: 12, range: 110, spa: 0.6, custo: 180, cor: "#4682B4",
      desc: "Ágil e preciso nos rios", tipo: "canoeiro" },
    { id: 6, nome: "Tartaruga Marinha", dano: 40, range: 140, spa: 2.5, custo: 300, cor: "#556B2F",
      desc: "Lenta, mas devastadora", tipo: "tartaruga" },
    { id: 7, nome: "Catador de Camarão", dano: 5, range: 60, spa: 0.25, custo: 80, cor: "#FF7F50",
      desc: "Barato e extremamente rápido", tipo: "catador" },
    { id: 8, nome: "Guia Turístico", dano: 18, range: 150, spa: 1.0, custo: 220, cor: "#9370DB",
      desc: "Conhece cada canto da região", tipo: "guia" }
];

// ============ PONTOS TURÍSTICOS ============
const fases = [
    {
        id: 1, nome: "Delta do Parnaíba", icone: "🌊",
        desc: "O maior delta das Américas!",
        dificuldade: "Fácil", ondas: 5, dinheiroInicial: 650,
        tema: "delta",
        caminho: [{x:0,y:300},{x:150,y:300},{x:150,y:150},{x:400,y:150},{x:400,y:450},{x:650,y:450},{x:650,y:200},{x:900,y:200}],
        trofeu: "🏆"
    },
    {
        id: 2, nome: "Praia de Barra Grande", icone: "🏖️",
        desc: "Kitesurf e águas cristalinas",
        dificuldade: "Fácil", ondas: 6, dinheiroInicial: 700,
        tema: "praia",
        caminho: [{x:0,y:100},{x:200,y:100},{x:200,y:400},{x:500,y:400},{x:500,y:200},{x:750,y:200},{x:750,y:500},{x:900,y:500}],
        trofeu: "🎖️"
    },
    {
        id: 3, nome: "Praia do Coqueiro", icone: "🌴",
        desc: "Tradição e belezas naturais",
        dificuldade: "Médio", ondas: 7, dinheiroInicial: 750,
        tema: "coqueiro",
        caminho: [{x:0,y:500},{x:150,y:500},{x:150,y:250},{x:350,y:250},{x:350,y:100},{x:600,y:100},{x:600,y:400},{x:900,y:400}],
        trofeu: "🥇"
    },
    {
        id: 4, nome: "Igreja N. S. da Parnaíba", icone: "⛪",
        desc: "Patrimônio histórico da cidade",
        dificuldade: "Médio", ondas: 8, dinheiroInicial: 800,
        tema: "igreja",
        caminho: [{x:450,y:0},{x:450,y:150},{x:200,y:150},{x:200,y:350},{x:700,y:350},{x:700,y:150},{x:450,y:150},{x:450,y:600}],
        trofeu: "🏅"
    },
    {
        id: 5, nome: "Porto dos Tatuís", icone: "⚓",
        desc: "Tradição pesqueira local",
        dificuldade: "Difícil", ondas: 9, dinheiroInicial: 850,
        tema: "porto",
        caminho: [{x:0,y:300},{x:100,y:300},{x:100,y:100},{x:300,y:100},{x:300,y:500},{x:500,y:500},{x:500,y:200},{x:700,y:200},{x:700,y:450},{x:900,y:450}],
        trofeu: "🎗️"
    },
    {
        id: 6, nome: "Morro do Meio", icone: "⛰️",
        desc: "Visão panorâmica do Delta",
        dificuldade: "Difícil", ondas: 10, dinheiroInicial: 900,
        tema: "morro",
        caminho: [{x:0,y:50},{x:200,y:50},{x:200,y:250},{x:400,y:250},{x:400,y:450},{x:600,y:450},{x:600,y:150},{x:800,y:150},{x:800,y:550},{x:900,y:550}],
        trofeu: "🏆"
    },
    {
        id: 7, nome: "Lagoa do Portinho", icone: "🌅",
        desc: "Dunas e lagoas paradisíacas",
        dificuldade: "Extremo", ondas: 12, dinheiroInicial: 1000,
        tema: "lagoa",
        caminho: [{x:0,y:300},{x:100,y:150},{x:200,y:450},{x:300,y:100},{x:400,y:500},{x:500,y:200},{x:600,y:400},{x:700,y:100},{x:800,y:500},{x:900,y:300}],
        trofeu: "👑"
    }
];

// ============ ESTADO DO JOGO ============
let estado = {
    personagensEscolhidos: [],
    fasesConcluidas: [],
    faseAtual: null,
    jogoAtivo: false,
    pausado: false,
    vida: 100,
    dinheiro: 0,
    ondaAtual: 0,
    torres: [],
    inimigos: [],
    projeteis: [],
    particulas: [],
    torreSelecionadaObj: null,
    inimigosSpawnados: 0,
    totalInimigosOnda: 0,
    tempoDesdeUltimoSpawn: 0,
    animacaoId: null,
    ultimoTempo: 0,
    // Drag and drop
    arrastando: null,
    posicaoMouse: null,
    mouseNoCanvas: false
};

// ============ CACHE DE DESENHOS ============
const cacheDesenhos = {};

function criarCanvasTemporario(w, h) {
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    return c;
}

// ============ DESENHO PROCEDURAL DE PERSONAGENS ============
function desenharPersonagem(ctx, tipo, x, y, tamanho = 22, corBase = null) {
    ctx.save();
    ctx.translate(x, y);
    const s = tamanho / 22;

    // Sombra
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.beginPath();
    ctx.ellipse(0, tamanho * 0.9, tamanho * 0.7, tamanho * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();

    switch(tipo) {
        case 'pescador':
            // Corpo
            ctx.fillStyle = corBase || '#8B4513';
            ctx.beginPath();
            ctx.arc(0, 2*s, 14*s, 0, Math.PI*2);
            ctx.fill();
            // Camisa listrada
            ctx.fillStyle = '#1e3a5f';
            ctx.fillRect(-10*s, 0, 20*s, 10*s);
            ctx.fillStyle = '#fff';
            for (let i = 0; i < 3; i++) {
                ctx.fillRect(-10*s, i*3*s, 20*s, 1*s);
            }
            // Cabeça
            const gradCabeca = ctx.createRadialGradient(-3*s, -8*s, 2*s, 0, -5*s, 10*s);
            gradCabeca.addColorStop(0, '#f4c89a');
            gradCabeca.addColorStop(1, '#c68a5c');
            ctx.fillStyle = gradCabeca;
            ctx.beginPath();
            ctx.arc(0, -5*s, 8*s, 0, Math.PI*2);
            ctx.fill();
            // Chapéu de palha
            ctx.fillStyle = '#d4a574';
            ctx.beginPath();
            ctx.ellipse(0, -12*s, 12*s, 3*s, 0, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = '#b8860b';
            ctx.beginPath();
            ctx.arc(0, -14*s, 7*s, 0, Math.PI*2);
            ctx.fill();
            // Vara de pesca
            ctx.strokeStyle = '#4a2c17';
            ctx.lineWidth = 2*s;
            ctx.beginPath();
            ctx.moveTo(8*s, 0);
            ctx.lineTo(18*s, -15*s);
            ctx.stroke();
            // Linha
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 0.5*s;
            ctx.beginPath();
            ctx.moveTo(18*s, -15*s);
            ctx.lineTo(15*s, 10*s);
            ctx.stroke();
            break;

        case 'jangadeiro':
            // Base da jangada
            ctx.fillStyle = '#8B4513';
            ctx.fillRect(-15*s, 5*s, 30*s, 8*s);
            ctx.fillStyle = '#654321';
            for (let i = 0; i < 4; i++) {
                ctx.fillRect(-15*s + i*8*s, 5*s, 1*s, 8*s);
            }
            // Mastro
            ctx.strokeStyle = '#3e2723';
            ctx.lineWidth = 2*s;
            ctx.beginPath();
            ctx.moveTo(0, 5*s);
            ctx.lineTo(0, -15*s);
            ctx.stroke();
            // Vela triangular
            const gradVela = ctx.createLinearGradient(0, -15*s, 12*s, 5*s);
            gradVela.addColorStop(0, '#fff8dc');
            gradVela.addColorStop(1, '#d4a574');
            ctx.fillStyle = gradVela;
            ctx.beginPath();
            ctx.moveTo(0, -15*s);
            ctx.lineTo(12*s, 5*s);
            ctx.lineTo(0, 5*s);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = '#8B4513';
            ctx.lineWidth = 1*s;
            ctx.stroke();
            // Pessoa
            ctx.fillStyle = '#f4c89a';
            ctx.beginPath();
            ctx.arc(-8*s, -2*s, 4*s, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = corBase || '#D2691E';
            ctx.fillRect(-11*s, 2*s, 6*s, 6*s);
            break;

        case 'caranguejo':
            // Corpo
            const gradCarang = ctx.createRadialGradient(-3*s, -2*s, 2*s, 0, 0, 12*s);
            gradCarang.addColorStop(0, '#ff8c69');
            gradCarang.addColorStop(1, corBase || '#FF6347');
            ctx.fillStyle = gradCarang;
            ctx.beginPath();
            ctx.ellipse(0, 0, 12*s, 9*s, 0, 0, Math.PI*2);
            ctx.fill();
            // Textura do corpo (pontos)
            ctx.fillStyle = 'rgba(139,0,0,0.4)';
            for (let i = 0; i < 5; i++) {
                ctx.beginPath();
                ctx.arc((i*5-10)*s, (i%2*4-2)*s, 1.5*s, 0, Math.PI*2);
                ctx.fill();
            }
            // Olhos
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(-4*s, -5*s, 2.5*s, 0, Math.PI*2);
            ctx.arc(4*s, -5*s, 2.5*s, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.beginPath();
            ctx.arc(-4*s, -5*s, 1.2*s, 0, Math.PI*2);
            ctx.arc(4*s, -5*s, 1.2*s, 0, Math.PI*2);
            ctx.fill();
            // Pinças
            ctx.fillStyle = corBase || '#FF6347';
            ctx.beginPath();
            ctx.ellipse(-14*s, 2*s, 5*s, 3*s, -0.3, 0, Math.PI*2);
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(14*s, 2*s, 5*s, 3*s, 0.3, 0, Math.PI*2);
            ctx.fill();
            // Pernas
            ctx.strokeStyle = '#8b0000';
            ctx.lineWidth = 1.5*s;
            for (let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.moveTo(-10*s, 5*s + i*2*s);
                ctx.lineTo(-16*s, 8*s + i*2*s);
                ctx.moveTo(10*s, 5*s + i*2*s);
                ctx.lineTo(16*s, 8*s + i*2*s);
                ctx.stroke();
            }
            break;

        case 'guarda':
            // Corpo (uniforme verde)
            ctx.fillStyle = corBase || '#228B22';
            ctx.beginPath();
            ctx.arc(0, 4*s, 12*s, 0, Math.PI*2);
            ctx.fill();
            // Cinto
            ctx.fillStyle = '#1a1a1a';
            ctx.fillRect(-12*s, 4*s, 24*s, 3*s);
            ctx.fillStyle = '#ffd700';
            ctx.fillRect(-2*s, 4*s, 4*s, 3*s);
            // Distintivo
            ctx.fillStyle = '#ffd700';
            ctx.beginPath();
            ctx.moveTo(0, -2*s);
            ctx.lineTo(-3*s, 1*s);
            ctx.lineTo(-2*s, 4*s);
            ctx.lineTo(2*s, 4*s);
            ctx.lineTo(3*s, 1*s);
            ctx.closePath();
            ctx.fill();
            // Cabeça
            ctx.fillStyle = '#f4c89a';
            ctx.beginPath();
            ctx.arc(0, -6*s, 7*s, 0, Math.PI*2);
            ctx.fill();
            // Quepe
            ctx.fillStyle = '#1a3a1a';
            ctx.beginPath();
            ctx.ellipse(0, -10*s, 9*s, 3*s, 0, 0, Math.PI*2);
            ctx.fill();
            ctx.fillRect(-7*s, -14*s, 14*s, 5*s);
            // Brasão do quepe
            ctx.fillStyle = '#ffd700';
            ctx.beginPath();
            ctx.arc(0, -12*s, 2*s, 0, Math.PI*2);
            ctx.fill();
            break;

        case 'canoeiro':
            // Canoa
            ctx.fillStyle = '#654321';
            ctx.beginPath();
            ctx.ellipse(0, 8*s, 16*s, 5*s, 0, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = '#8B4513';
            ctx.beginPath();
            ctx.ellipse(0, 7*s, 14*s, 3*s, 0, 0, Math.PI*2);
            ctx.fill();
            // Pessoa
            ctx.fillStyle = corBase || '#4682B4';
            ctx.fillRect(-5*s, -2*s, 10*s, 10*s);
            // Cabeça
            ctx.fillStyle = '#f4c89a';
            ctx.beginPath();
            ctx.arc(0, -6*s, 5*s, 0, Math.PI*2);
            ctx.fill();
            // Chapéu
            ctx.fillStyle = '#2c3e50';
            ctx.beginPath();
            ctx.arc(0, -9*s, 5*s, Math.PI, 0);
            ctx.fill();
            // Remo
            ctx.strokeStyle = '#8B4513';
            ctx.lineWidth = 2*s;
            ctx.beginPath();
            ctx.moveTo(8*s, -2*s);
            ctx.lineTo(18*s, 12*s);
            ctx.stroke();
            ctx.fillStyle = '#654321';
            ctx.beginPath();
            ctx.ellipse(19*s, 13*s, 3*s, 5*s, 0.5, 0, Math.PI*2);
            ctx.fill();
            break;

        case 'tartaruga':
            // Patas
            ctx.fillStyle = '#556B2F';
            ctx.beginPath();
            ctx.ellipse(-10*s, 8*s, 4*s, 3*s, 0, 0, Math.PI*2);
            ctx.ellipse(10*s, 8*s, 4*s, 3*s, 0, 0, Math.PI*2);
            ctx.ellipse(-10*s, -5*s, 4*s, 3*s, 0, 0, Math.PI*2);
            ctx.ellipse(10*s, -5*s, 4*s, 3*s, 0, 0, Math.PI*2);
            ctx.fill();
            // Cabeça
            ctx.fillStyle = '#6b8e23';
            ctx.beginPath();
            ctx.arc(0, -12*s, 5*s, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.beginPath();
            ctx.arc(-2*s, -13*s, 1*s, 0, Math.PI*2);
            ctx.arc(2*s, -13*s, 1*s, 0, Math.PI*2);
            ctx.fill();
            // Casco
            const gradCasco = ctx.createRadialGradient(-3*s, -3*s, 2*s, 0, 0, 14*s);
            gradCasco.addColorStop(0, '#8B7355');
            gradCasco.addColorStop(1, corBase || '#556B2F');
            ctx.fillStyle = gradCasco;
            ctx.beginPath();
            ctx.ellipse(0, 0, 14*s, 11*s, 0, 0, Math.PI*2);
            ctx.fill();
            // Padrão do casco (hexágonos)
            ctx.strokeStyle = '#3e4a1f';
            ctx.lineWidth = 1.5*s;
            for (let i = 0; i < 6; i++) {
                const ang = (i / 6) * Math.PI * 2;
                const px = Math.cos(ang) * 8*s;
                const py = Math.sin(ang) * 6*s;
                ctx.beginPath();
                ctx.arc(px, py, 3*s, 0, Math.PI*2);
                ctx.stroke();
            }
            ctx.beginPath();
            ctx.arc(0, 0, 4*s, 0, Math.PI*2);
            ctx.stroke();
            break;

        case 'catador':
            // Balde
            ctx.fillStyle = '#708090';
            ctx.beginPath();
            ctx.moveTo(-12*s, 2*s);
            ctx.lineTo(-8*s, 12*s);
            ctx.lineTo(2*s, 12*s);
            ctx.lineTo(6*s, 2*s);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = '#2f4f4f';
            ctx.lineWidth = 1*s;
            ctx.stroke();
            // Camarão no balde
            ctx.fillStyle = '#FF7F50';
            ctx.beginPath();
            ctx.arc(-5*s, 5*s, 2*s, 0, Math.PI*2);
            ctx.arc(-2*s, 7*s, 2*s, 0, Math.PI*2);
            ctx.fill();
            // Pessoa
            ctx.fillStyle = corBase || '#FF7F50';
            ctx.fillRect(2*s, -3*s, 10*s, 12*s);
            // Cabeça
            ctx.fillStyle = '#f4c89a';
            ctx.beginPath();
            ctx.arc(7*s, -8*s, 5*s, 0, Math.PI*2);
            ctx.fill();
            // Lenço
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(7*s, -11*s, 5*s, Math.PI, 0);
            ctx.fill();
            // Rede
            ctx.strokeStyle = '#8B4513';
            ctx.lineWidth = 1*s;
            ctx.beginPath();
            ctx.moveTo(12*s, 0);
            ctx.lineTo(20*s, -5*s);
            ctx.stroke();
            ctx.strokeStyle = 'rgba(255,255,255,0.6)';
            ctx.beginPath();
            ctx.arc(20*s, -5*s, 5*s, 0, Math.PI*2);
            ctx.stroke();
            // Malha da rede
            for (let i = -4; i <= 4; i += 2) {
                ctx.beginPath();
                ctx.moveTo(20*s + i*s, -10*s);
                ctx.lineTo(20*s + i*s, 0);
                ctx.moveTo(15*s, -5*s + i*s);
                ctx.lineTo(25*s, -5*s + i*s);
                ctx.stroke();
            }
            break;

        case 'guia':
            // Corpo
            ctx.fillStyle = corBase || '#9370DB';
            ctx.beginPath();
            ctx.arc(0, 4*s, 12*s, 0, Math.PI*2);
            ctx.fill();
            // Colete
            ctx.fillStyle = '#4b0082';
            ctx.fillRect(-10*s, -2*s, 5*s, 12*s);
            ctx.fillRect(5*s, -2*s, 5*s, 12*s);
            // Cabeça
            ctx.fillStyle = '#f4c89a';
            ctx.beginPath();
            ctx.arc(0, -6*s, 7*s, 0, Math.PI*2);
            ctx.fill();
            // Chapéu safari
            ctx.fillStyle = '#d2b48c';
            ctx.beginPath();
            ctx.ellipse(0, -11*s, 10*s, 3*s, 0, 0, Math.PI*2);
            ctx.fill();
            ctx.fillRect(-6*s, -16*s, 12*s, 6*s);
            // Binóculos
            ctx.fillStyle = '#1a1a1a';
            ctx.beginPath();
            ctx.arc(-4*s, -5*s, 2.5*s, 0, Math.PI*2);
            ctx.arc(4*s, -5*s, 2.5*s, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = '#4169e1';
            ctx.beginPath();
            ctx.arc(-4*s, -5*s, 1.5*s, 0, Math.PI*2);
            ctx.arc(4*s, -5*s, 1.5*s, 0, Math.PI*2);
            ctx.fill();
            // Mapa na mão
            ctx.fillStyle = '#fff8dc';
            ctx.fillRect(8*s, 2*s, 8*s, 6*s);
            ctx.strokeStyle = '#8B4513';
            ctx.lineWidth = 0.5*s;
            ctx.beginPath();
            ctx.moveTo(9*s, 4*s);
            ctx.lineTo(15*s, 4*s);
            ctx.moveTo(9*s, 6*s);
            ctx.lineTo(15*s, 6*s);
            ctx.stroke();
            break;
    }
    ctx.restore();
}

// ============ DESENHO PROCEDURAL DE INIMIGOS ============
function desenharInimigo(ctx, inimigo) {
    const { x, y, tipo, vida, vidaMax } = inimigo;
    ctx.save();
    ctx.translate(x, y);

    // Sombra
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.beginPath();
    ctx.ellipse(0, 14, 12, 4, 0, 0, Math.PI*2);
    ctx.fill();

    switch(tipo) {
        case 'lixo':
            // Saco de lixo
            const gradLixo = ctx.createRadialGradient(-3, -3, 2, 0, 0, 14);
            gradLixo.addColorStop(0, '#6a6a6a');
            gradLixo.addColorStop(1, '#2a2a2a');
            ctx.fillStyle = gradLixo;
            ctx.beginPath();
            ctx.arc(0, 0, 13, 0, Math.PI*2);
            ctx.fill();
            // Amarração no topo
            ctx.fillStyle = '#1a1a1a';
            ctx.beginPath();
            ctx.moveTo(-3, -12);
            ctx.lineTo(3, -12);
            ctx.lineTo(2, -15);
            ctx.lineTo(-2, -15);
            ctx.closePath();
            ctx.fill();
            // Manchas
            ctx.fillStyle = 'rgba(139,90,43,0.6)';
            ctx.beginPath();
            ctx.arc(-4, 2, 3, 0, Math.PI*2);
            ctx.arc(5, -3, 2, 0, Math.PI*2);
            ctx.arc(2, 6, 2.5, 0, Math.PI*2);
            ctx.fill();
            // Olhos vermelhos
            ctx.fillStyle = '#ff0';
            ctx.beginPath();
            ctx.arc(-4, -2, 2, 0, Math.PI*2);
            ctx.arc(4, -2, 2, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = '#f00';
            ctx.beginPath();
            ctx.arc(-4, -2, 1, 0, Math.PI*2);
            ctx.arc(4, -2, 1, 0, Math.PI*2);
            ctx.fill();
            break;

        case 'poluicao':
            // Nuvem tóxica
            const gradPol = ctx.createRadialGradient(0, 0, 3, 0, 0, 16);
            gradPol.addColorStop(0, '#b8ff00');
            gradPol.addColorStop(0.6, '#6a9b00');
            gradPol.addColorStop(1, '#2d4a00');
            ctx.fillStyle = gradPol;
            ctx.beginPath();
            ctx.arc(-6, -2, 8, 0, Math.PI*2);
            ctx.arc(6, -2, 8, 0, Math.PI*2);
            ctx.arc(0, 4, 9, 0, Math.PI*2);
            ctx.arc(-3, -8, 6, 0, Math.PI*2);
            ctx.arc(4, -7, 6, 0, Math.PI*2);
            ctx.fill();
            // Brilho
            ctx.fillStyle = 'rgba(255,255,0,0.4)';
            ctx.beginPath();
            ctx.arc(-3, -5, 3, 0, Math.PI*2);
            ctx.fill();
            // Símbolo tóxico
            ctx.fillStyle = '#000';
            ctx.font = 'bold 10px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('☠', 0, 2);
            break;

        case 'residuo':
            // Barril tóxico
            const gradBar = ctx.createLinearGradient(-10, 0, 10, 0);
            gradBar.addColorStop(0, '#4a4a4a');
            gradBar.addColorStop(0.5, '#8a8a8a');
            gradBar.addColorStop(1, '#3a3a3a');
            ctx.fillStyle = gradBar;
            ctx.fillRect(-10, -12, 20, 24);
            // Anéis do barril
            ctx.fillStyle = '#2a2a2a';
            ctx.fillRect(-11, -10, 22, 2);
            ctx.fillRect(-11, 8, 22, 2);
            // Símbolo radioativo
            ctx.fillStyle = '#ff0';
            ctx.beginPath();
            ctx.arc(0, 0, 6, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.beginPath();
            ctx.arc(0, 0, 2, 0, Math.PI*2);
            ctx.fill();
            // Triângulos
            ctx.fillStyle = '#000';
            for (let i = 0; i < 3; i++) {
                const ang = (i / 3) * Math.PI * 2 - Math.PI/2;
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(Math.cos(ang) * 5, Math.sin(ang) * 5);
                ctx.lineTo(Math.cos(ang + 0.3) * 5, Math.sin(ang + 0.3) * 5);
                ctx.closePath();
                ctx.fill();
            }
            break;

        case 'petroleo':
            // Mancha de petróleo brilhante
            const gradPet = ctx.createRadialGradient(-3, -3, 2, 0, 0, 15);
            gradPet.addColorStop(0, '#4a0080');
            gradPet.addColorStop(0.4, '#1a0033');
            gradPet.addColorStop(1, '#000');
            ctx.fillStyle = gradPet;
            ctx.beginPath();
            ctx.arc(0, 0, 14, 0, Math.PI*2);
            ctx.fill();
            // Brilhos iridescentes
            ctx.fillStyle = 'rgba(255,0,255,0.3)';
            ctx.beginPath();
            ctx.ellipse(-4, -4, 4, 2, -0.5, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = 'rgba(0,255,255,0.3)';
            ctx.beginPath();
            ctx.ellipse(5, 3, 3, 1.5, 0.5, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = 'rgba(255,255,0,0.2)';
            ctx.beginPath();
            ctx.ellipse(-2, 5, 3, 1, 0.3, 0, Math.PI*2);
            ctx.fill();
            // Olhos malignos
            ctx.fillStyle = '#f00';
            ctx.beginPath();
            ctx.arc(-4, -1, 2, 0, Math.PI*2);
            ctx.arc(4, -1, 2, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(-4, -1, 0.8, 0, Math.PI*2);
            ctx.arc(4, -1, 0.8, 0, Math.PI*2);
            ctx.fill();
            break;
    }

    ctx.restore();

    // Barra de vida
    const largura = 30;
    const vidaPerc = vida / vidaMax;
    ctx.fillStyle = 'rgba(0,0,0,0.7)';
    ctx.fillRect(x - largura/2 - 1, y - 24, largura + 2, 6);
    const corVida = vidaPerc > 0.5 ? '#00ff00' : vidaPerc > 0.25 ? '#ffff00' : '#ff0000';
    ctx.fillStyle = corVida;
    ctx.fillRect(x - largura/2, y - 23, largura * vidaPerc, 4);
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1;
    ctx.strokeRect(x - largura/2, y - 23, largura, 4);
}

// ============ DESENHO DO CENÁRIO ============
function desenharCenario(ctx, canvas, fase) {
    // Cores do tema
    const temas = {
        delta: { fundo1: '#1e5128', fundo2: '#2d7a3e', agua: '#4a90a4', caminho: '#c9a961' },
        praia: { fundo1: '#e6c280', fundo2: '#d4a574', agua: '#5fb3d6', caminho: '#b8860b' },
        coqueiro: { fundo1: '#3d6b1f', fundo2: '#5a8a2f', agua: '#6bb6ff', caminho: '#d4a574' },
        igreja: { fundo1: '#4a4a4a', fundo2: '#6a6a6a', agua: '#888', caminho: '#b8860b' },
        porto: { fundo1: '#1e3a5f', fundo2: '#2c5282', agua: '#3a6ea5', caminho: '#8b6f47' },
        morro: { fundo1: '#556B2F', fundo2: '#6b8e23', agua: '#87ceeb', caminho: '#a0522d' },
        lagoa: { fundo1: '#cd853f', fundo2: '#daa520', agua: '#40e0d0', caminho: '#f4a460' }
    };
    const tema = temas[fase.tema] || temas.delta;

    // Gradiente de fundo
    const gradFundo = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradFundo.addColorStop(0, tema.fundo1);
    gradFundo.addColorStop(1, tema.fundo2);
    ctx.fillStyle = gradFundo;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Textura de grama/areia (pontos)
    ctx.fillStyle = 'rgba(0,0,0,0.1)';
    for (let i = 0; i < 200; i++) {
        const x = (i * 137) % canvas.width;
        const y = (i * 241) % canvas.height;
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI*2);
        ctx.fill();
    }

    // Elementos decorativos de fundo
    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    for (let i = 0; i < 8; i++) {
        const x = (i * 127 + 50) % canvas.width;
        const y = (i * 89 + 100) % canvas.height;
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, Math.PI*2);
        ctx.fill();
    }

    // Caminho - borda escura
    ctx.strokeStyle = 'rgba(0,0,0,0.5)';
    ctx.lineWidth = 48;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(fase.caminho[0].x, fase.caminho[0].y);
    for (let i = 1; i < fase.caminho.length; i++) {
        ctx.lineTo(fase.caminho[i].x, fase.caminho[i].y);
    }
    ctx.stroke();

    // Caminho - cor principal
    ctx.strokeStyle = tema.caminho;
    ctx.lineWidth = 42;
    ctx.beginPath();
    ctx.moveTo(fase.caminho[0].x, fase.caminho[0].y);
    for (let i = 1; i < fase.caminho.length; i++) {
        ctx.lineTo(fase.caminho[i].x, fase.caminho[i].y);
    }
    ctx.stroke();

    // Textura do caminho (pedrinhas)
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    for (let i = 0; i < fase.caminho.length - 1; i++) {
        const a = fase.caminho[i];
        const b = fase.caminho[i+1];
        const dist = Math.hypot(b.x - a.x, b.y - a.y);
        const passos = Math.floor(dist / 15);
        for (let j = 0; j < passos; j++) {
            const t = j / passos;
            const px = a.x + (b.x - a.x) * t + (Math.sin(j*7) * 10);
            const py = a.y + (b.y - a.y) * t + (Math.cos(j*11) * 10);
            ctx.beginPath();
            ctx.arc(px, py, 1.5, 0, Math.PI*2);
            ctx.fill();
        }
    }

    // Textura clara no caminho
    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    for (let i = 0; i < fase.caminho.length - 1; i++) {
        const a = fase.caminho[i];
        const b = fase.caminho[i+1];
        const dist = Math.hypot(b.x - a.x, b.y - a.y);
        const passos = Math.floor(dist / 20);
        for (let j = 0; j < passos; j++) {
            const t = j / passos;
            const px = a.x + (b.x - a.x) * t + (Math.cos(j*5) * 8);
            const py = a.y + (b.y - a.y) * t + (Math.sin(j*9) * 8);
            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI*2);
            ctx.fill();
        }
    }

    // Indicador de início
    const inicio = fase.caminho[0];
    const gradInicio = ctx.createRadialGradient(inicio.x, inicio.y, 5, inicio.x, inicio.y, 25);
    gradInicio.addColorStop(0, '#00ff00');
    gradInicio.addColorStop(1, 'rgba(0,255,0,0)');
    ctx.fillStyle = gradInicio;
    ctx.beginPath();
    ctx.arc(inicio.x, inicio.y, 25, 0, Math.PI*2);
    ctx.fill();
    ctx.fillStyle = '#00ff00';
    ctx.beginPath();
    ctx.arc(inicio.x, inicio.y, 18, 0, Math.PI*2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('INÍCIO', inicio.x, inicio.y);

    // Indicador de fim
    const fim = fase.caminho[fase.caminho.length - 1];
    const gradFim = ctx.createRadialGradient(fim.x, fim.y, 5, fim.x, fim.y, 25);
    gradFim.addColorStop(0, '#ff0000');
    gradFim.addColorStop(1, 'rgba(255,0,0,0)');
    ctx.fillStyle = gradFim;
    ctx.beginPath();
    ctx.arc(fim.x, fim.y, 25, 0, Math.PI*2);
    ctx.fill();
    ctx.fillStyle = '#ff0000';
    ctx.beginPath();
    ctx.arc(fim.x, fim.y, 18, 0, Math.PI*2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.fillText('FIM', fim.x, fim.y);
}

// ============ NAVEGAÇÃO ============
function mostrarTela(id) {
    document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
    document.getElementById(id).classList.add('ativa');
}

function irParaSelecaoPersonagens() {
    estado.personagensEscolhidos = [];
    renderizarPersonagens();
    mostrarTela('tela-personagens');
}

function voltarInicio() {
    mostrarTela('tela-inicial');
}

function voltarParaPersonagens() {
    mostrarTela('tela-personagens');
}

// ============ SELEÇÃO DE PERSONAGENS ============
function renderizarPersonagens() {
    const grade = document.getElementById('grade-personagens');
    grade.innerHTML = '';
    personagens.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card-personagem';
        if (estado.personagensEscolhidos.find(e => e.id === p.id)) {
            card.classList.add('selecionado');
        }
        // Canvas para preview do personagem
        const canvasPrev = document.createElement('canvas');
        canvasPrev.width = 80;
        canvasPrev.height = 80;
        canvasPrev.className = 'icone-personagem';
        const ctxPrev = canvasPrev.getContext('2d');
        desenharPersonagem(ctxPrev, p.tipo, 40, 45, 28, p.cor);

        card.innerHTML = `
            <div class="nome-personagem">${p.nome}</div>
            <p style="font-size:0.85em;opacity:0.8;margin-bottom:10px;">${p.desc}</p>
            <div class="stats-personagem">
                <div class="stat">⚔️ Dano: <span class="stat-bar"><span class="stat-fill" style="width:${(p.dano/40)*100}%"></span></span></div>
                <div class="stat">🎯 Range: <span class="stat-bar"><span class="stat-fill" style="width:${(p.range/160)*100}%"></span></span></div>
                <div class="stat">⚡ SPA: <span class="stat-bar"><span class="stat-fill" style="width:${(1/p.spa)*100/4}%"></span></span></div>
                <div class="stat">💰 Custo: ${p.custo}</div>
            </div>
        `;
        card.insertBefore(canvasPrev, card.firstChild);
        card.onclick = () => togglePersonagem(p);
        grade.appendChild(card);
    });
}

function togglePersonagem(p) {
    const idx = estado.personagensEscolhidos.findIndex(e => e.id === p.id);
    if (idx >= 0) {
        estado.personagensEscolhidos.splice(idx, 1);
    } else {
        if (estado.personagensEscolhidos.length >= 4) {
            alert('Você só pode escolher 4 personagens!');
            return;
        }
        estado.personagensEscolhidos.push(p);
    }
    document.getElementById('contador-personagens').textContent = estado.personagensEscolhidos.length;
    document.getElementById('btn-confirmar-personagens').disabled = estado.personagensEscolhidos.length !== 4;
    renderizarPersonagens();
}

function confirmarPersonagens() {
    renderizarFases();
    mostrarTela('tela-fases');
}

// ============ SELEÇÃO DE FASES ============
function renderizarFases() {
    const grade = document.getElementById('grade-fases');
    grade.innerHTML = '';
    document.getElementById('contador-trofeus').textContent = estado.fasesConcluidas.length;
    fases.forEach((f, idx) => {
        const card = document.createElement('div');
        card.className = 'card-fase';
        const concluida = estado.fasesConcluidas.includes(f.id);
        const desbloqueada = idx === 0 || estado.fasesConcluidas.includes(fases[idx-1].id);
        if (concluida) card.classList.add('concluida');
        if (!desbloqueada) card.classList.add('bloqueada');
        card.innerHTML = `
            ${concluida ? `<div class="trofeu-badge">${f.trofeu}</div>` : ''}
            <div class="icone-fase">${f.icone}</div>
            <div class="nome-fase">${f.nome}</div>
            <div class="descricao-fase">${f.desc}</div>
            <div class="dificuldade-fase">💪 ${f.dificuldade}</div>
            ${!desbloqueada ? '<div style="margin-top:10px;font-size:1.5em;">🔒</div>' : ''}
        `;
        if (desbloqueada) {
            card.onclick = () => iniciarFase(f.id);
        }
        grade.appendChild(card);
    });
}

// ============ INÍCIO DA FASE ============
function iniciarFase(idFase) {
    const fase = fases.find(f => f.id === idFase);
    estado.faseAtual = fase;
    estado.jogoAtivo = true;
    estado.pausado = false;
    estado.vida = 100;
    estado.dinheiro = fase.dinheiroInicial;
    estado.ondeAtual = 1;
    estado.torres = [];
    estado.inimigos = [];
    estado.projeteis = [];
    estado.particulas = [];
    estado.torreSelecionadaObj = null;
    estado.arrastando = null;
    estado.inimigosSpawnados = 0;
    estado.totalInimigosOnda = 5 + idFase * 2;
    estado.tempoDesdeUltimoSpawn = 0;
    estado.ultimoTempo = performance.now();

    mostrarTela('tela-jogo');
    document.getElementById('hud-fase').textContent = fase.id;
    document.getElementById('hud-onda-max').textContent = fase.ondas;
    document.getElementById('torre-selecionada-info').style.display = 'none';
    atualizarHUD();
    renderizarListaTorres();
    iniciarLoopJogo();
}

function renderizarListaTorres() {
    const lista = document.getElementById('lista-torres');
    lista.innerHTML = '';
    estado.personagensEscolhidos.forEach(p => {
        const item = document.createElement('div');
        item.className = 'torre-item';
        if (estado.dinheiro < p.custo) item.classList.add('indisponivel');

        // Canvas preview do personagem
        const canvasPrev = document.createElement('canvas');
        canvasPrev.width = 50;
        canvasPrev.height = 50;
        canvasPrev.className = 'torre-preview';
        const ctxPrev = canvasPrev.getContext('2d');
        // Fundo circular
        const grad = ctxPrev.createRadialGradient(25, 25, 5, 25, 25, 25);
        grad.addColorStop(0, 'rgba(255,255,255,0.2)');
        grad.addColorStop(1, 'rgba(0,0,0,0.3)');
        ctxPrev.fillStyle = grad;
        ctxPrev.beginPath();
        ctxPrev.arc(25, 25, 24, 0, Math.PI*2);
        ctxPrev.fill();
        desenharPersonagem(ctxPrev, p.tipo, 25, 28, 18, p.cor);

        item.innerHTML = `
            <div class="torre-info">
                <div class="torre-nome">${p.nome}</div>
                <div>⚔️${p.dano} 🎯${p.range}</div>
                <div class="torre-custo">💰 ${p.custo}</div>
            </div>
        `;
        item.insertBefore(canvasPrev, item.firstChild);

        // Drag and drop
        if (estado.dinheiro >= p.custo) {
            item.addEventListener('mousedown', (e) => iniciarArraste(e, p));
            item.addEventListener('touchstart', (e) => iniciarArrasteTouch(e, p), {passive: false});
        }

        lista.appendChild(item);
    });
}

// ============ DRAG AND DROP ============
function iniciarArraste(e, personagem) {
    e.preventDefault();
    estado.arrastando = personagem;
    document.getElementById('canvas-jogo').classList.add('arrastando');
    document.getElementById('info-torre').innerHTML = `
        <strong>${personagem.nome}</strong> selecionado<br>
        Solte no mapa para posicionar<br>
        <small>🟢 Verde = pode posicionar | 🔴 Vermelho = não pode</small>
    `;
}

function iniciarArrasteTouch(e, personagem) {
    e.preventDefault();
    estado.arrastando = personagem;
    document.getElementById('canvas-jogo').classList.add('arrastando');
}

document.addEventListener('mousemove', (e) => {
    const canvas = document.getElementById('canvas-jogo');
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);

    estado.mouseNoCanvas = (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height);
    estado.posicaoMouse = { x, y };
});

document.addEventListener('mouseup', (e) => {
    if (!estado.arrastando) return;
    const canvas = document.getElementById('canvas-jogo');
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);

    if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
        tentarPosicionarTorre(x, y, estado.arrastando);
    }

    estado.arrastando = null;
    canvas.classList.remove('arrastando');
});

document.addEventListener('touchmove', (e) => {
    if (!estado.arrastando) return;
    const canvas = document.getElementById('canvas-jogo');
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = (touch.clientX - rect.left) * (canvas.width / rect.width);
    const y = (touch.clientY - rect.top) * (canvas.height / rect.height);
    estado.posicaoMouse = { x, y };
    estado.mouseNoCanvas = (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height);
}, {passive: false});

document.addEventListener('touchend', (e) => {
    if (!estado.arrastando) return;
    if (estado.mouseNoCanvas && estado.posicaoMouse) {
        tentarPosicionarTorre(estado.posicaoMouse.x, estado.posicaoMouse.y, estado.arrastando);
    }
    estado.arrastando = null;
    document.getElementById('canvas-jogo').classList.remove('arrastando');
});

function tentarPosicionarTorre(x, y, personagem) {
    if (!podePosicionar(x, y)) {
        document.getElementById('info-torre').innerHTML = '❌ Posição inválida!';
        return;
    }
    if (estado.dinheiro < personagem.custo) {
        document.getElementById('info-torre').innerHTML = '❌ Dinheiro insuficiente!';
        return;
    }

    estado.dinheiro -= personagem.custo;
    estado.torres.push({
        x: x,
        y: y,
        idPersonagem: personagem.id,
        tipo: personagem.tipo,
        icone: personagem.icone,
        nome: personagem.nome,
        dano: personagem.dano,
        range: personagem.range,
        spa: personagem.spa,
        cor: personagem.cor,
        custo: personagem.custo,
        cooldown: 0,
        angulo: 0,
        tempoDisparo: 0
    });
    atualizarHUD();
    renderizarListaTorres();
    document.getElementById('info-torre').innerHTML = `✅ ${personagem.nome} posicionado!`;
}

function podePosicionar(x, y) {
    if (estaNoCaminho(x, y)) return false;
    if (estado.torres.some(t => Math.hypot(t.x - x, t.y - y) < 45)) return false;
    if (x < 25 || x > 875 || y < 25 || y > 575) return false;
    return true;
}

function estaNoCaminho(x, y) {
    const caminho = estado.faseAtual.caminho;
    for (let i = 0; i < caminho.length - 1; i++) {
        const a = caminho[i];
        const b = caminho[i+1];
        const dist = distanciaPontoSegmento(x, y, a.x, a.y, b.x, b.y);
        if (dist < 30) return true;
    }
    return false;
}

function distanciaPontoSegmento(px, py, x1, y1, x2, y2) {
    const A = px - x1;
    const B = py - y1;
    const C = x2 - x1;
    const D = y2 - y1;
    const dot = A * C + B * D;
    const lenSq = C * C + D * D;
    let param = -1;
    if (lenSq !== 0) param = dot / lenSq;
    let xx, yy;
    if (param < 0) { xx = x1; yy = y1; }
    else if (param > 1) { xx = x2; yy = y2; }
    else { xx = x1 + param * C; yy = y1 + param * D; }
    return Math.hypot(px - xx, py - yy);
}

// ============ CLIQUE EM TORRES EXISTENTES ============
const canvas = document.getElementById('canvas-jogo');
canvas.addEventListener('click', (e) => {
    if (estado.arrastando || estado.pausado) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);

    const torreClicada = estado.torres.find(t => Math.hypot(t.x - x, t.y - y) < 22);
    if (torreClicada) {
        estado.torreSelecionadaObj = torreClicada;
        mostrarInfoTorre(torreClicada);
    } else {
        desselecionarTorre();
    }
});

function mostrarInfoTorre(torre) {
    const div = document.getElementById('torre-selecionada-info');
    div.style.display = 'block';
    document.getElementById('tsi-nome').textContent = `${torre.nome}`;
    document.getElementById('tsi-stats').innerHTML = `
        ⚔️ Dano: ${torre.dano}<br>
        🎯 Range: ${torre.range}<br>
        ⚡ SPA: ${torre.spa.toFixed(2)}s<br>
        💰 Valor: ${torre.custo}
    `;
}

function desselecionarTorre() {
    estado.torreSelecionadaObj = null;
    document.getElementById('torre-selecionada-info').style.display = 'none';
}

function venderTorreSelecionada() {
    if (!estado.torreSelecionadaObj) return;
    const valor = Math.floor(estado.torreSelecionadaObj.custo * 0.5);
    estado.dinheiro += valor;
    estado.torres = estado.torres.filter(t => t !== estado.torreSelecionadaObj);
    estado.torreSelecionadaObj = null;
    document.getElementById('torre-selecionada-info').style.display = 'none';
    atualizarHUD();
    renderizarListaTorres();
    document.getElementById('info-torre').innerHTML = `💰 Torre vendida por ${valor} moedas!`;
}

// ============ LOOP DO JOGO ============
function iniciarLoopJogo() {
    const canvas = document.getElementById('canvas-jogo');
    const ctx = canvas.getContext('2d');

    function loop(tempoAtual) {
        if (!estado.jogoAtivo) return;
        const delta = Math.min(0.05, (tempoAtual - estado.ultimoTempo) / 1000);
        estado.ultimoTempo = tempoAtual;

        if (!estado.pausado) {
            atualizar(delta);
        }
        desenhar(ctx, canvas);
        estado.animacaoId = requestAnimationFrame(loop);
    }
    estado.animacaoId = requestAnimationFrame(loop);
}

function atualizar(delta) {
    const fase = estado.faseAtual;

    // Spawn
    estado.tempoDesdeUltimoSpawn += delta;
    const intervaloSpawn = Math.max(0.4, 1.5 - estado.ondeAtual * 0.08);
    if (estado.tempoDesdeUltimoSpawn >= intervaloSpawn && estado.inimigosSpawnados < estado.totalInimigosOnda) {
        spawnInimigo();
        estado.tempoDesdeUltimoSpawn = 0;
    }

    // Inimigos
    estado.inimigos.forEach(inimigo => {
        if (!inimigo.vivo) return;
        const alvo = fase.caminho[inimigo.pontoAlvo];
        if (!alvo) {
            estado.vida -= inimigo.dano;
            inimigo.vivo = false;
            atualizarHUD();
            if (estado.vida <= 0) finalizarFase(false);
            return;
        }
        const dx = alvo.x - inimigo.x;
        const dy = alvo.y - inimigo.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 3) {
            inimigo.pontoAlvo++;
        } else {
            inimigo.x += (dx / dist) * inimigo.velocidade * delta * 60;
            inimigo.y += (dy / dist) * inimigo.velocidade * delta * 60;
        }
    });

    // Torres
    estado.torres.forEach(torre => {
        torre.cooldown -= delta;
        torre.tempoDisparo = Math.max(0, torre.tempoDisparo - delta);
        if (torre.cooldown <= 0) {
            const alvo = encontrarAlvo(torre);
            if (alvo) {
                atirar(torre, alvo);
                torre.cooldown = torre.spa;
                torre.tempoDisparo = 0.15;
                // Calcular ângulo
                torre.angulo = Math.atan2(alvo.y - torre.y, alvo.x - torre.x);
            }
        }
    });

    // Projéteis
    estado.projeteis.forEach(p => {
        if (!p.ativo) return;
        if (!p.alvo.vivo) {
            p.ativo = false;
            return;
        }
        const dx = p.alvo.x - p.x;
        const dy = p.alvo.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 10) {
            p.alvo.vida -= p.dano;
            // Partículas de impacto
            criarParticulas(p.alvo.x, p.alvo.y, p.cor, 5);
            if (p.alvo.vida <= 0) {
                p.alvo.vivo = false;
                estado.dinheiro += p.alvo.recompensa;
                criarParticulas(p.alvo.x, p.alvo.y, p.alvo.cor, 15);
                atualizarHUD();
                renderizarListaTorres();
            }
            p.ativo = false;
        } else {
            p.x += (dx / dist) * 400 * delta;
            p.y += (dy / dist) * 400 * delta;
            // Rastro
            if (Math.random() < 0.5) {
                estado.particulas.push({
                    x: p.x, y: p.y,
                    vx: 0, vy: 0,
                    vida: 0.2, vidaMax: 0.2,
                    cor: p.cor, tamanho: 3
                });
            }
        }
    });

    // Partículas
    estado.particulas.forEach(p => {
        p.vida -= delta;
        p.x += p.vx * delta;
        p.y += p.vy * delta;
        p.vy += 50 * delta; // gravidade
    });

    // Limpar
    estado.inimigos = estado.inimigos.filter(i => i.vivo);
    estado.projeteis = estado.projeteis.filter(p => p.ativo);
    estado.particulas = estado.particulas.filter(p => p.vida > 0);

    // Próxima onda
    if (estado.inimigosSpawnados >= estado.totalInimigosOnda && estado.inimigos.length === 0) {
        if (estado.ondeAtual < estado.faseAtual.ondas) {
            estado.ondeAtual++;
            estado.inimigosSpawnados = 0;
            estado.totalInimigosOnda = 5 + estado.faseAtual.id * 2 + estado.ondeAtual * 2;
            estado.dinheiro += 100;
            atualizarHUD();
            renderizarListaTorres();
        } else {
            finalizarFase(true);
        }
    }
}

function spawnInimigo() {
    const fase = estado.faseAtual;
    const tipo = Math.floor(Math.random() * 3) + Math.floor(estado.ondeAtual / 2);
    const tipos = [
        { vida: 30, velocidade: 1.2, dano: 5, recompensa: 10, tipo: 'lixo' },
        { vida: 60, velocidade: 0.9, dano: 10, recompensa: 20, tipo: 'poluicao' },
        { vida: 100, velocidade: 0.7, dano: 15, recompensa: 30, tipo: 'residuo' },
        { vida: 200, velocidade: 0.5, dano: 25, recompensa: 60, tipo: 'petroleo' }
    ];
    const t = tipos[Math.min(tipo, tipos.length - 1)];
    const vidaTotal = t.vida + estado.ondeAtual * 5;
    estado.inimigos.push({
        x: fase.caminho[0].x,
        y: fase.caminho[0].y,
        pontoAlvo: 1,
        vida: vidaTotal,
        vidaMax: vidaTotal,
        velocidade: t.velocidade,
        dano: t.dano,
        recompensa: t.recompensa,
        tipo: t.tipo,
        cor: t.tipo === 'lixo' ? '#2a2a2a' : t.tipo === 'poluicao' ? '#6a9b00' : t.tipo === 'residuo' ? '#4a4a4a' : '#000',
        vivo: true
    });
    estado.inimigosSpawnados++;
}

function encontrarAlvo(torre) {
    let alvo = null;
    let maiorProgresso = -1;
    estado.inimigos.forEach(i => {
        if (!i.vivo) return;
        const dist = Math.hypot(i.x - torre.x, i.y - torre.y);
        if (dist <= torre.range) {
            if (i.pontoAlvo > maiorProgresso) {
                maiorProgresso = i.pontoAlvo;
                alvo = i;
            }
        }
    });
    return alvo;
}

function atirar(torre, alvo) {
    estado.projeteis.push({
        x: torre.x,
        y: torre.y,
        alvo: alvo,
        dano: torre.dano,
        cor: torre.cor,
        ativo: true
    });
}

function criarParticulas(x, y, cor, quantidade) {
    for (let i = 0; i < quantidade; i++) {
        const ang = Math.random() * Math.PI * 2;
        const vel = 50 + Math.random() * 100;
        estado.particulas.push({
            x: x, y: y,
            vx: Math.cos(ang) * vel,
            vy: Math.sin(ang) * vel - 30,
            vida: 0.5 + Math.random() * 0.5,
            vidaMax: 1,
            cor: cor,
            tamanho: 2 + Math.random() * 3
        });
    }
}

// ============ RENDERIZAÇÃO ============
function desenhar(ctx, canvas) {
    const fase = estado.faseAtual;

    // Cenário
    desenharCenario(ctx, canvas, fase);

    // Range da torre selecionada
    if (estado.torreSelecionadaObj) {
        const t = estado.torreSelecionadaObj;
        ctx.fillStyle = 'rgba(255,215,0,0.15)';
        ctx.strokeStyle = 'rgba(255,215,0,0.8)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(t.x, t.y, t.range, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
    }

    // Torres
    estado.torres.forEach(t => {
        // Flash de disparo
        if (t.tempoDisparo > 0) {
            ctx.fillStyle = `rgba(255,255,0,${t.tempoDisparo * 3})`;
            ctx.beginPath();
            ctx.arc(t.x, t.y, 28, 0, Math.PI*2);
            ctx.fill();
        }
        // Base circular
        const gradBase = ctx.createRadialGradient(t.x - 5, t.y - 5, 3, t.x, t.y, 24);
        gradBase.addColorStop(0, 'rgba(255,255,255,0.3)');
        gradBase.addColorStop(1, 'rgba(0,0,0,0.5)');
        ctx.fillStyle = gradBase;
        ctx.beginPath();
        ctx.arc(t.x, t.y, 24, 0, Math.PI*2);
        ctx.fill();
        // Desenhar personagem
        desenharPersonagem(ctx, t.tipo, t.x, t.y, 22, t.cor);
        // Borda se selecionada
        if (estado.torreSelecionadaObj === t) {
            ctx.strokeStyle = '#ffd700';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(t.x, t.y, 26, 0, Math.PI*2);
            ctx.stroke();
        }
    });

    // Inimigos
    estado.inimigos.forEach(i => {
        if (!i.vivo) return;
        desenharInimigo(ctx, i);
    });

    // Projéteis
    estado.projeteis.forEach(p => {
        if (!p.ativo) return;
        const gradProj = ctx.createRadialGradient(p.x, p.y, 1, p.x, p.y, 7);
        gradProj.addColorStop(0, '#fff');
        gradProj.addColorStop(0.5, p.cor);
        gradProj.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradProj;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 7, 0, Math.PI*2);
        ctx.fill();
    });

    // Partículas
    estado.particulas.forEach(p => {
        const alpha = p.vida / p.vidaMax;
        ctx.fillStyle = p.cor;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.tamanho * alpha, 0, Math.PI*2);
        ctx.fill();
        ctx.globalAlpha = 1;
    });

    // Preview do arraste
    if (estado.arrastando && estado.mouseNoCanvas && estado.posicaoMouse) {
        const valido = podePosicionar(estado.posicaoMouse.x, estado.posicaoMouse.y);
        // Range
        ctx.fillStyle = valido ? 'rgba(0,255,0,0.15)' : 'rgba(255,0,0,0.15)';
        ctx.strokeStyle = valido ? 'rgba(0,255,0,0.8)' : 'rgba(255,0,0,0.8)';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.arc(estado.posicaoMouse.x, estado.posicaoMouse.y, estado.arrastando.range, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
        ctx.setLineDash([]);
        // Personagem
        ctx.globalAlpha = 0.7;
        desenharPersonagem(ctx, estado.arrastando.tipo, estado.posicaoMouse.x, estado.posicaoMouse.y, 22, estado.arrastando.cor);
        ctx.globalAlpha = 1;
        // Indicador
        ctx.fillStyle = valido ? '#00ff00' : '#ff0000';
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(valido ? '✓' : '✗', estado.posicaoMouse.x, estado.posicaoMouse.y - 30);
    }

    // Pausado
    if (estado.pausado) {
        ctx.fillStyle = 'rgba(0,0,0,0.7)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ffd700';
        ctx.font = 'bold 60px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('⏸️ PAUSADO', canvas.width/2, canvas.height/2);
    }
}

// ============ HUD ============
function atualizarHUD() {
    document.getElementById('hud-vida').textContent = Math.max(0, Math.floor(estado.vida));
    document.getElementById('hud-dinheiro').textContent = estado.dinheiro;
    document.getElementById('hud-onda').textContent = estado.ondeAtual;
}

function pausarJogo() {
    estado.pausado = !estado.pausado;
    document.getElementById('btn-pausar').textContent = estado.pausado ? '▶️ Continuar' : '⏸️ Pausar';
}

function sairDaFase() {
    if (confirm('Deseja realmente sair? Progresso será perdido.')) {
        finalizarFase(false, true);
    }
}

// ============ FINALIZAÇÃO ============
function finalizarFase(vitoria, fuga = false) {
    estado.jogoAtivo = false;
    if (estado.animacaoId) cancelAnimationFrame(estado.animacaoId);

    const conteudo = document.getElementById('resultado-conteudo');
    if (vitoria) {
        if (!estado.fasesConcluidas.includes(estado.faseAtual.id)) {
            estado.fasesConcluidas.push(estado.faseAtual.id);
        }
        conteudo.className = 'resultado-conteudo vitoria';
        conteudo.innerHTML = `
            <h1>🎉 VITÓRIA! 🎉</h1>
            <div class="trofeu-grande">${estado.faseAtual.trofeu}</div>
            <h2>Você conquistou o troféu de ${estado.faseAtual.nome}!</h2>
            <p style="margin:20px 0;font-size:1.2em;">
                ❤️ Vida restante: ${Math.floor(estado.vida)}<br>
                💰 Dinheiro final: ${estado.dinheiro}
            </p>
            <button class="btn-grande" onclick="voltarParaFases()">Continuar →</button>
        `;
    } else {
        conteudo.className = 'resultado-conteudo derrota';
        conteudo.innerHTML = `
            <h1>${fuga ? '🚪 SAÍDA' : '💀 DERROTA 💀'}</h1>
            <div class="trofeu-grande">${fuga ? '🚪' : '😢'}</div>
            <h2>${fuga ? 'Você saiu da fase' : 'O Delta foi invadido!'}</h2>
            <p style="margin:20px 0;font-size:1.2em;">Tente novamente e defenda Parnaíba!</p>
            <button class="btn-grande" onclick="voltarParaFases()">Voltar ao Mapa →</button>
        `;
    }
    mostrarTela('tela-resultado');
}

// ============ INICIALIZAÇÃO ============
window.onload = () => {
    mostrarTela('tela-inicial');
};