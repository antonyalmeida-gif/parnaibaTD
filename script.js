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

// ============ SISTEMA DE UPGRADES ============
const NIVEIS_UPGRADE = [
{ nome: "I",   multDano: 1.0,  multRange: 1.0,  multSpa: 1.0,  custoMult: 0.0, corBorda: "#aaa" },
{ nome: "II",  multDano: 1.4,  multRange: 1.25, multSpa: 0.85, custoMult: 0.6, corBorda: "#00ff88" },
{ nome: "III", multDano: 1.9,  multRange: 1.55, multSpa: 0.70, custoMult: 0.9, corBorda: "#ffd700" }
];

function calcularCustoUpgrade(personagem, nivelAtual) {
if (nivelAtual >= NIVEIS_UPGRADE.length - 1) return Infinity;
const proxNivel = NIVEIS_UPGRADE[nivelAtual + 1];
return Math.floor(personagem.custo * proxNivel.custoMult);
}

function aplicarUpgrade(torre) {
const nivel = NIVEIS_UPGRADE[torre.nivel];
const personagemBase = personagens.find(p => p.id === torre.idPersonagem);
torre.danoBase = personagemBase.dano;
torre.rangeBase = personagemBase.range;
torre.spaBase = personagemBase.spa;
torre.dano = Math.floor(personagemBase.dano * nivel.multDano);
torre.range = Math.floor(personagemBase.range * nivel.multRange);
torre.spa = +(personagemBase.spa * nivel.multSpa).toFixed(2);
}

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
arrastando: null,
posicaoMouse: null,
mouseNoCanvas: false
};

// ============ DESENHO PROCEDURAL DE PERSONAGENS ============
function desenharPersonagem(ctx, tipo, x, y, tamanho = 22, corBase = null) {
ctx.save();
ctx.translate(x, y);
const s = tamanho / 22;
ctx.fillStyle = 'rgba(0,0,0,0.3)';
ctx.beginPath();
ctx.ellipse(0, tamanho * 0.9, tamanho * 0.7, tamanho * 0.2, 0, 0, Math.PI * 2);
ctx.fill();
switch(tipo) {
case 'pescador':
ctx.fillStyle = corBase || '#8B4513';
ctx.beginPath();
ctx.arc(0, 2*s, 14*s, 0, Math.PI*2);
ctx.fill();
ctx.fillStyle = '#1e3a5f';
ctx.fillRect(-10*s, 0, 20*s, 10*s);
ctx.fillStyle = '#fff';
for (let i = 0; i < 3; i++) ctx.fillRect(-10*s, i*3*s, 20*s, 1*s);
const gradCabeca = ctx.createRadialGradient(-3*s, -8*s, 2*s, 0, -5*s, 10*s);
gradCabeca.addColorStop(0, '#f4c89a');
gradCabeca.addColorStop(1, '#c68a5c');
ctx.fillStyle = gradCabeca;
ctx.beginPath();
ctx.arc(0, -5*s, 8*s, 0, Math.PI*2);
ctx.fill();
ctx.fillStyle = '#d4a574';
ctx.beginPath();
ctx.ellipse(0, -12*s, 12*s, 3*s, 0, 0, Math.PI*2);
ctx.fill();
ctx.fillStyle = '#b8860b';
ctx.beginPath();
ctx.arc(0, -14*s, 7*s, 0, Math.PI*2);
ctx.fill();
ctx.strokeStyle = '#4a2c17';
ctx.lineWidth = 2*s;
ctx.beginPath();
ctx.moveTo(8*s, 0);
ctx.lineTo(18*s, -15*s);
ctx.stroke();
ctx.strokeStyle = '#fff';
ctx.lineWidth = 0.5*s;
ctx.beginPath();
ctx.moveTo(18*s, -15*s);
ctx.lineTo(15*s, 10*s);
ctx.stroke();
break;
case 'jangadeiro':
ctx.fillStyle = '#8B4513';
ctx.fillRect(-15*s, 5*s, 30*s, 8*s);
ctx.fillStyle = '#654321';
for (let i = 0; i < 4; i++) ctx.fillRect(-15*s + i*8*s, 5*s, 1*s, 8*s);
ctx.strokeStyle = '#3e2723';
ctx.lineWidth = 2*s;
ctx.beginPath();
ctx.moveTo(0, 5*s);
ctx.lineTo(0, -15*s);
ctx.stroke();
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
ctx.fillStyle = '#f4c89a';
ctx.beginPath();
ctx.arc(-8*s, -2*s, 4*s, 0, Math.PI*2);
ctx.fill();
ctx.fillStyle = corBase || '#D2691E';
ctx.fillRect(-11*s, 2*s, 6*s, 6*s);
break;
case 'caranguejo':
const gradCarang = ctx.createRadialGradient(-3*s, -2*s, 2*s, 0, 0, 12*s);
gradCarang.addColorStop(0, '#ff8c69');
gradCarang.addColorStop(1, corBase || '#FF6347');
ctx.fillStyle = gradCarang;
ctx.beginPath();
ctx.ellipse(0, 0, 12*s, 9*s, 0, 0, Math.PI*2);
ctx.fill();
ctx.fillStyle = 'rgba(139,0,0,0.4)';
for (let i = 0; i < 5; i++) {
ctx.beginPath();
ctx.arc((i*5-10)*s, (i%2*4-2)*s, 1.5*s, 0, Math.PI*2);
ctx.fill();
}
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
ctx.fillStyle = corBase || '#FF6347';
ctx.beginPath();
ctx.ellipse(-14*s, 2*s, 5*s, 3*s, -0.3, 0, Math.PI*2);
ctx.fill();
ctx.beginPath();
ctx.ellipse(14*s, 2*s, 5*s, 3*s, 0.3, 0, Math.PI*2);
ctx.fill();
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
ctx.fillStyle = corBase || '#228B22';
ctx.beginPath();
ctx.arc(0, 4*s, 12*s, 0, Math.PI*2);
ctx.fill();
ctx.fillStyle = '#1a1a1a';
ctx.fillRect(-12*s, 4*s, 24*s, 3*s);
ctx.fillStyle = '#ffd700';
ctx.fillRect(-2*s, 4*s, 4*s, 3*s);
ctx.fillStyle = '#ffd700';
ctx.beginPath();
ctx.moveTo(0, -2*s);
ctx.lineTo(-3*s, 1*s);
ctx.lineTo(-2*s, 4*s);
ctx.lineTo(2*s, 4*s);
ctx.lineTo(3*s, 1*s);
ctx.closePath();
ctx.fill();
ctx.fillStyle = '#f4c89a';
ctx.beginPath();
ctx.arc(0, -6*s, 7*s, 0, Math.PI*2);
ctx.fill();
ctx.fillStyle = '#1a3a1a';
ctx.beginPath();
ctx.ellipse(0, -10*s, 9*s, 3*s, 0, 0, Math.PI*2);
ctx.fill();
ctx.fillRect(-7*s, -14*s, 14*s, 5*s);
ctx.fillStyle = '#ffd700';
ctx.beginPath();
ctx.arc(0, -12*s, 2*s, 0, Math.PI*2);
ctx.fill();
break;
case 'canoeiro':
ctx.fillStyle = '#654321';
ctx.beginPath();
ctx.ellipse(0, 8*s, 16*s, 5*s, 0, 0, Math.PI*2);
ctx.fill();
ctx.fillStyle = '#8B4513';
ctx.beginPath();
ctx.ellipse(0, 7*s, 14*s, 3*s, 0, 0, Math.PI*2);
ctx.fill();
ctx.fillStyle = corBase || '#4682B4';
ctx.fillRect(-5*s, -2*s, 10*s, 10*s);
ctx.fillStyle = '#f4c89a';
ctx.beginPath();
ctx.arc(0, -6*s, 5*s, 0, Math.PI*2);
ctx.fill();
ctx.fillStyle = '#2c3e50';
ctx.beginPath();
ctx.arc(0, -9*s, 5*s, Math.PI, 0);
ctx.fill();
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
ctx.fillStyle = '#556B2F';
ctx.beginPath();
ctx.ellipse(-10*s, 8*s, 4*s, 3*s, 0, 0, Math.PI*2);
ctx.ellipse(10*s, 8*s, 4*s, 3*s, 0, 0, Math.PI*2);
ctx.ellipse(-10*s, -5*s, 4*s, 3*s, 0, 0, Math.PI*2);
ctx.ellipse(10*s, -5*s, 4*s, 3*s, 0, 0, Math.PI*2);
ctx.fill();
ctx.fillStyle = '#6b8e23';
ctx.beginPath();
ctx.arc(0, -12*s, 5*s, 0, Math.PI*2);
ctx.fill();
ctx.fillStyle = '#000';
ctx.beginPath();
ctx.arc(-2*s, -13*s, 1*s, 0, Math.PI*2);
ctx.arc(2*s, -13*s, 1*s, 0, Math.PI*2);
ctx.fill();
const gradCasco = ctx.createRadialGradient(-3*s, -3*s, 2*s, 0, 0, 14*s);
gradCasco.addColorStop(0, '#8B7355');
gradCasco.addColorStop(1, corBase || '#556B2F');
ctx.fillStyle = gradCasco;
ctx.beginPath();
ctx.ellipse(0, 0, 14*s, 11*s, 0, 0, Math.PI*2);
ctx.fill();
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
ctx.fillStyle = '#FF7F50';
ctx.beginPath();
ctx.arc(-5*s, 5*s, 2*s, 0, Math.PI*2);
ctx.arc(-2*s, 7*s, 2*s, 0, Math.PI*2);
ctx.fill();
ctx.fillStyle = corBase || '#FF7F50';
ctx.fillRect(2*s, -3*s, 10*s, 12*s);
ctx.fillStyle = '#f4c89a';
ctx.beginPath();
ctx.arc(7*s, -8*s, 5*s, 0, Math.PI*2);
ctx.fill();
ctx.fillStyle = '#fff';
ctx.beginPath();
ctx.arc(7*s, -11*s, 5*s, Math.PI, 0);
ctx.fill();
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
ctx.fillStyle = corBase || '#9370DB';
ctx.beginPath();
ctx.arc(0, 4*s, 12*s, 0, Math.PI*2);
ctx.fill();
ctx.fillStyle = '#4b0082';
ctx.fillRect(-10*s, -2*s, 5*s, 12*s);
ctx.fillRect(5*s, -2*s, 5*s, 12*s);
ctx.fillStyle = '#f4c89a';
ctx.beginPath();
ctx.arc(0, -6*s, 7*s, 0, Math.PI*2);
ctx.fill();
ctx.fillStyle = '#d2b48c';
ctx.beginPath();
ctx.ellipse(0, -11*s, 10*s, 3*s, 0, 0, Math.PI*2);
ctx.fill();
ctx.fillRect(-6*s, -16*s, 12*s, 6*s);
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

// ============ DESENHO DE INIMIGOS ============
function desenharInimigo(ctx, inimigo) {
const { x, y, tipo, vida, vidaMax } = inimigo;
ctx.save();
ctx.translate(x, y);
ctx.fillStyle = 'rgba(0,0,0,0.3)';
ctx.beginPath();
ctx.ellipse(0, 14, 12, 4, 0, 0, Math.PI*2);
ctx.fill();
switch(tipo) {
case 'lixo':
const gradLixo = ctx.createRadialGradient(-3, -3, 2, 0, 0, 14);
gradLixo.addColorStop(0, '#6a6a6a');
gradLixo.addColorStop(1, '#2a2a2a');
ctx.fillStyle = gradLixo;
ctx.beginPath();
ctx.arc(0, 0, 13, 0, Math.PI*2);
ctx.fill();
ctx.fillStyle = '#1a1a1a';
ctx.beginPath();
ctx.moveTo(-3, -12);
ctx.lineTo(3, -12);
ctx.lineTo(2, -15);
ctx.lineTo(-2, -15);
ctx.closePath();
ctx.fill();
ctx.fillStyle = 'rgba(139,90,43,0.6)';
ctx.beginPath();
ctx.arc(-4, 2, 3, 0, Math.PI*2);
ctx.arc(5, -3, 2, 0, Math.PI*2);
ctx.arc(2, 6, 2.5, 0, Math.PI*2);
ctx.fill();
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
ctx.fillStyle = 'rgba(255,255,0,0.4)';
ctx.beginPath();
ctx.arc(-3, -5, 3, 0, Math.PI*2);
ctx.fill();
ctx.fillStyle = '#000';
ctx.font = 'bold 10px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('☠', 0, 2);
break;
case 'residuo':
const gradBar = ctx.createLinearGradient(-10, 0, 10, 0);
gradBar.addColorStop(0, '#4a4a4a');
gradBar.addColorStop(0.5, '#8a8a8a');
gradBar.addColorStop(1, '#3a3a3a');
ctx.fillStyle = gradBar;
ctx.fillRect(-10, -12, 20, 24);
ctx.fillStyle = '#2a2a2a';
ctx.fillRect(-11, -10, 22, 2);
ctx.fillRect(-11, 8, 22, 2);
ctx.fillStyle = '#ff0';
ctx.beginPath();
ctx.arc(0, 0, 6, 0, Math.PI*2);
ctx.fill();
ctx.fillStyle = '#000';
ctx.beginPath();
ctx.arc(0, 0, 2, 0, Math.PI*2);
ctx.fill();
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
const gradPet = ctx.createRadialGradient(-3, -3, 2, 0, 0, 15);
gradPet.addColorStop(0, '#4a0080');
gradPet.addColorStop(0.4, '#1a0033');
gradPet.addColorStop(1, '#000');
ctx.fillStyle = gradPet;
ctx.beginPath();
ctx.arc(0, 0, 14, 0, Math.PI*2);
ctx.fill();
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

// ============ CENÁRIOS REALISTAS ============
function desenharCenario(ctx, canvas, fase) {
const w = canvas.width, h = canvas.height;
// Fundo base específico por tema
switch(fase.tema) {
case 'delta':  desenharDelta(ctx, w, h); break;
case 'praia':  desenharBarraGrande(ctx, w, h); break;
case 'coqueiro': desenharCoqueiro(ctx, w, h); break;
case 'igreja': desenharIgreja(ctx, w, h); break;
case 'porto':  desenharPorto(ctx, w, h); break;
case 'morro':  desenharMorro(ctx, w, h); break;
case 'lagoa':  desenharLagoa(ctx, w, h); break;
default:       desenharDelta(ctx, w, h);
}
// Desenhar caminho por cima
desenharCaminho(ctx, fase);
// Indicadores de início/fim
desenharIndicadores(ctx, fase);
}

// ----- DELTA DO PARNAÍBA: manguezais, rios barrentos -----
function desenharDelta(ctx, w, h) {
// Água barrenta do delta (fundo)
const gradAgua = ctx.createLinearGradient(0, 0, 0, h);
gradAgua.addColorStop(0, '#3a6b4a');
gradAgua.addColorStop(0.5, '#4a7c5a');
gradAgua.addColorStop(1, '#2d5a3a');
ctx.fillStyle = gradAgua;
ctx.fillRect(0, 0, w, h);
// Reflexos de água
ctx.strokeStyle = 'rgba(255,255,255,0.08)';
ctx.lineWidth = 1;
for (let i = 0; i < 40; i++) {
const y = (i * 37) % h;
ctx.beginPath();
ctx.moveTo(0, y);
ctx.lineTo(w, y);
ctx.stroke();
}
// Ilhas de mangue (manchas verdes escuras)
const ilhas = [
{x: 80, y: 80, r: 60}, {x: 300, y: 50, r: 50}, {x: 550, y: 90, r: 70},
{x: 780, y: 60, r: 55}, {x: 150, y: 500, r: 65}, {x: 450, y: 520, r: 60},
{x: 700, y: 530, r: 55}, {x: 850, y: 480, r: 50}, {x: 250, y: 280, r: 45},
{x: 600, y: 320, r: 50}
];
ilhas.forEach(il => {
const grad = ctx.createRadialGradient(il.x, il.y, 5, il.x, il.y, il.r);
grad.addColorStop(0, '#1e4d2b');
grad.addColorStop(0.7, '#2d6b3a');
grad.addColorStop(1, 'rgba(45,90,58,0)');
ctx.fillStyle = grad;
ctx.beginPath();
ctx.arc(il.x, il.y, il.r, 0, Math.PI*2);
ctx.fill();
});
// Raízes de mangue (traços finos)
ctx.strokeStyle = 'rgba(60,40,20,0.6)';
ctx.lineWidth = 1.5;
ilhas.forEach(il => {
for (let i = 0; i < 8; i++) {
const ang = (i / 8) * Math.PI * 2;
const rx = il.x + Math.cos(ang) * (il.r * 0.7);
const ry = il.y + Math.sin(ang) * (il.r * 0.7);
ctx.beginPath();
ctx.moveTo(rx, ry);
ctx.quadraticCurveTo(rx + Math.cos(ang)*10, ry + Math.sin(ang)*10,
rx + Math.cos(ang)*18, ry + Math.sin(ang)*18);
ctx.stroke();
}
});
// Folhagem dos mangues (pontinhos verdes)
ctx.fillStyle = '#3a7d3a';
ilhas.forEach(il => {
for (let i = 0; i < 25; i++) {
const ang = Math.random() * Math.PI * 2;
const dist = Math.random() * il.r * 0.8;
const fx = il.x + Math.cos(ang) * dist;
const fy = il.y + Math.sin(ang) * dist;
ctx.beginPath();
ctx.arc(fx, fy, 2 + Math.random()*2, 0, Math.PI*2);
ctx.fill();
}
});
// Pássaros no céu
ctx.fillStyle = 'rgba(255,255,255,0.7)';
for (let i = 0; i < 6; i++) {
const bx = (i * 170 + 50) % w;
const by = 30 + (i * 20) % 80;
ctx.beginPath();
ctx.moveTo(bx, by);
ctx.quadraticCurveTo(bx - 4, by - 3, bx - 8, by);
ctx.moveTo(bx, by);
ctx.quadraticCurveTo(bx + 4, by - 3, bx + 8, by);
ctx.lineWidth = 1.5;
ctx.strokeStyle = 'rgba(255,255,255,0.7)';
ctx.stroke();
}
}

// ----- BARRA GRANDE: praia, mar turquesa, kitesurf -----
function desenharBarraGrande(ctx, w, h) {
// Céu
const gradCeu = ctx.createLinearGradient(0, 0, 0, h * 0.35);
gradCeu.addColorStop(0, '#87ceeb');
gradCeu.addColorStop(1, '#b0e0e6');
ctx.fillStyle = gradCeu;
ctx.fillRect(0, 0, w, h * 0.35);
// Mar turquesa
const gradMar = ctx.createLinearGradient(0, h * 0.35, 0, h * 0.7);
gradMar.addColorStop(0, '#20b2aa');
gradMar.addColorStop(0.5, '#40e0d0');
gradMar.addColorStop(1, '#48d1cc');
ctx.fillStyle = gradMar;
ctx.fillRect(0, h * 0.35, w, h * 0.35);
// Ondas do mar
ctx.strokeStyle = 'rgba(255,255,255,0.5)';
ctx.lineWidth = 2;
for (let i = 0; i < 8; i++) {
const y = h * 0.35 + i * (h * 0.35 / 8);
ctx.beginPath();
for (let x = 0; x < w; x += 10) {
const yy = y + Math.sin(x * 0.05 + i) * 3;
if (x === 0) ctx.moveTo(x, yy);
else ctx.lineTo(x, yy);
}
ctx.stroke();
}
// Areia clara
const gradAreia = ctx.createLinearGradient(0, h * 0.7, 0, h);
gradAreia.addColorStop(0, '#f4e4bc');
gradAreia.addColorStop(1, '#e6d5a8');
ctx.fillStyle = gradAreia;
ctx.fillRect(0, h * 0.7, w, h * 0.3);
// Textura de areia (pontinhos)
ctx.fillStyle = 'rgba(180,150,100,0.3)';
for (let i = 0; i < 300; i++) {
const x = (i * 137) % w;
const y = h * 0.7 + (i * 241) % (h * 0.3);
ctx.beginPath();
ctx.arc(x, y, 1, 0, Math.PI*2);
ctx.fill();
}
// Pipas de kitesurf no céu
const pipas = [
{x: 150, y: 80, cor: '#ff4444'},
{x: 350, y: 60, cor: '#ffdd00'},
{x: 600, y: 100, cor: '#44aaff'},
{x: 800, y: 70, cor: '#ff44ff'}
];
pipas.forEach(p => {
// Pipa (triângulo)
ctx.fillStyle = p.cor;
ctx.beginPath();
ctx.moveTo(p.x, p.y);
ctx.lineTo(p.x - 12, p.y + 15);
ctx.lineTo(p.x + 12, p.y + 15);
ctx.closePath();
ctx.fill();
ctx.strokeStyle = '#fff';
ctx.lineWidth = 1;
ctx.stroke();
// Linha até a água
ctx.strokeStyle = 'rgba(255,255,255,0.4)';
ctx.lineWidth = 0.5;
ctx.beginPath();
ctx.moveTo(p.x, p.y + 15);
ctx.quadraticCurveTo(p.x + 20, h * 0.5, p.x + 30, h * 0.7);
ctx.stroke();
});
// Palmeiras na praia
for (let i = 0; i < 5; i++) {
desenharPalmeira(ctx, 80 + i * 200, h * 0.72, 0.8);
}
}

function desenharPalmeira(ctx, x, y, escala = 1) {
// Tronco curvo
ctx.strokeStyle = '#6b4423';
ctx.lineWidth = 5 * escala;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.quadraticCurveTo(x + 5 * escala, y - 30 * escala, x + 3 * escala, y - 60 * escala);
ctx.stroke();
// Textura do tronco
ctx.strokeStyle = 'rgba(0,0,0,0.3)';
ctx.lineWidth = 1;
for (let i = 0; i < 5; i++) {
const ty = y - i * 12 * escala;
ctx.beginPath();
ctx.moveTo(x - 3 * escala, ty);
ctx.lineTo(x + 3 * escala, ty);
ctx.stroke();
}
// Folhas
const topoX = x + 3 * escala;
const topoY = y - 60 * escala;
ctx.fillStyle = '#2d5016';
for (let i = 0; i < 7; i++) {
const ang = (i / 7) * Math.PI * 2;
const fx = topoX + Math.cos(ang) * 25 * escala;
const fy = topoY + Math.sin(ang) * 15 * escala;
ctx.beginPath();
ctx.moveTo(topoX, topoY);
ctx.quadraticCurveTo(
topoX + Math.cos(ang) * 15 * escala,
topoY + Math.sin(ang) * 8 * escala,
fx, fy
);
ctx.quadraticCurveTo(
topoX + Math.cos(ang) * 15 * escala,
topoY + Math.sin(ang) * 8 * escala + 3 * escala,
topoX, topoY
);
ctx.fill();
}
// Coquinhos
ctx.fillStyle = '#4a2c17';
for (let i = 0; i < 3; i++) {
ctx.beginPath();
ctx.arc(topoX + (i-1) * 3 * escala, topoY + 3 * escala, 2 * escala, 0, Math.PI*2);
ctx.fill();
}
}

// ----- PRAIA DO COQUEIRO: coqueirais -----
function desenharCoqueiro(ctx, w, h) {
// Céu
const gradCeu = ctx.createLinearGradient(0, 0, 0, h * 0.4);
gradCeu.addColorStop(0, '#87ceeb');
gradCeu.addColorStop(1, '#b0e0e6');
ctx.fillStyle = gradCeu;
ctx.fillRect(0, 0, w, h * 0.4);
// Mar ao fundo
const gradMar = ctx.createLinearGradient(0, h * 0.4, 0, h * 0.6);
gradMar.addColorStop(0, '#4a90c4');
gradMar.addColorStop(1, '#5fb3d6');
ctx.fillStyle = gradMar;
ctx.fillRect(0, h * 0.4, w, h * 0.2);
// Ondas
ctx.strokeStyle = 'rgba(255,255,255,0.4)';
ctx.lineWidth = 1.5;
for (let i = 0; i < 5; i++) {
const y = h * 0.4 + i * 10;
ctx.beginPath();
for (let x = 0; x < w; x += 8) {
const yy = y + Math.sin(x * 0.06 + i) * 2;
if (x === 0) ctx.moveTo(x, yy);
else ctx.lineTo(x, yy);
}
ctx.stroke();
}
// Areia
const gradAreia = ctx.createLinearGradient(0, h * 0.6, 0, h);
gradAreia.addColorStop(0, '#f4e4bc');
gradAreia.addColorStop(1, '#d4b886');
ctx.fillStyle = gradAreia;
ctx.fillRect(0, h * 0.6, w, h * 0.4);
// Textura de areia
ctx.fillStyle = 'rgba(180,150,100,0.3)';
for (let i = 0; i < 400; i++) {
const x = (i * 137) % w;
const y = h * 0.6 + (i * 241) % (h * 0.4);
ctx.beginPath();
ctx.arc(x, y, 1, 0, Math.PI*2);
ctx.fill();
}
// Fileiras de coqueiros
for (let i = 0; i < 7; i++) {
desenharPalmeira(ctx, 60 + i * 130, h * 0.65, 1.1);
}
// Barracas de praia (pequenas construções)
for (let i = 0; i < 3; i++) {
const bx = 200 + i * 250;
const by = h * 0.75;
// Teto de palha
ctx.fillStyle = '#a0522d';
ctx.beginPath();
ctx.moveTo(bx - 20, by);
ctx.lineTo(bx, by - 15);
ctx.lineTo(bx + 20, by);
ctx.closePath();
ctx.fill();
// Base
ctx.fillStyle = '#d4a574';
ctx.fillRect(bx - 15, by, 30, 15);
}
}

// ----- IGREJA: arquitetura colonial -----
function desenharIgreja(ctx, w, h) {
// Céu
const gradCeu = ctx.createLinearGradient(0, 0, 0, h * 0.5);
gradCeu.addColorStop(0, '#87ceeb');
gradCeu.addColorStop(1, '#c8e0f0');
ctx.fillStyle = gradCeu;
ctx.fillRect(0, 0, w, h * 0.5);
// Chão de pedra da praça
const gradChao = ctx.createLinearGradient(0, h * 0.5, 0, h);
gradChao.addColorStop(0, '#a89078');
gradChao.addColorStop(1, '#8b7355');
ctx.fillStyle = gradChao;
ctx.fillRect(0, h * 0.5, w, h * 0.5);
// Pedras do calçamento (padrão)
ctx.strokeStyle = 'rgba(0,0,0,0.2)';
ctx.lineWidth = 1;
for (let y = h * 0.5; y < h; y += 20) {
for (let x = 0; x < w; x += 30) {
const offset = (Math.floor(y / 20) % 2) * 15;
ctx.strokeRect(x + offset, y, 28, 18);
}
}
// Prédios coloniais ao fundo
const predios = [
{x: 50, w: 120, h: 130, cor: '#f5deb3'},
{x: 180, w: 100, h: 110, cor: '#ffe4b5'},
{x: 620, w: 110, h: 120, cor: '#f5deb3'},
{x: 740, w: 130, h: 115, cor: '#ffe4b5'}
];
predios.forEach(p => {
const py = h * 0.5 - p.h + 30;
// Parede
ctx.fillStyle = p.cor;
ctx.fillRect(p.x, py, p.w, p.h);
// Telhado
ctx.fillStyle = '#8b4513';
ctx.beginPath();
ctx.moveTo(p.x - 5, py);
ctx.lineTo(p.x + p.w / 2, py - 25);
ctx.lineTo(p.x + p.w + 5, py);
ctx.closePath();
ctx.fill();
// Janelas
ctx.fillStyle = '#4a6fa5';
for (let i = 0; i < 3; i++) {
ctx.fillRect(p.x + 15 + i * 30, py + 30, 15, 25);
}
// Porta
ctx.fillStyle = '#654321';
ctx.fillRect(p.x + p.w/2 - 10, py + p.h - 35, 20, 35);
});
// Igreja principal (centro)
const ix = w/2 - 70;
const iy = h * 0.5 - 180;
// Corpo da igreja
ctx.fillStyle = '#fff8dc';
ctx.fillRect(ix, iy, 140, 180);
// Torre central
ctx.fillStyle = '#fff8dc';
ctx.fillRect(ix + 50, iy - 60, 40, 60);
// Cruz no topo
ctx.fillStyle = '#ffd700';
ctx.fillRect(ix + 67, iy - 85, 6, 25);
ctx.fillRect(ix + 60, iy - 75, 20, 6);
// Telhado da igreja
ctx.fillStyle = '#8b4513';
ctx.beginPath();
ctx.moveTo(ix - 10, iy);
ctx.lineTo(ix + 70, iy - 40);
ctx.lineTo(ix + 150, iy);
ctx.closePath();
ctx.fill();
// Porta principal
ctx.fillStyle = '#654321';
ctx.beginPath();
ctx.moveTo(ix + 55, iy + 180);
ctx.lineTo(ix + 55, iy + 130);
ctx.arc(ix + 70, iy + 130, 15, Math.PI, 0);
ctx.lineTo(ix + 85, iy + 180);
ctx.closePath();
ctx.fill();
// Janelas da igreja
ctx.fillStyle = '#4a6fa5';
ctx.beginPath();
ctx.arc(ix + 35, iy + 60, 10, 0, Math.PI*2);
ctx.arc(ix + 105, iy + 60, 10, 0, Math.PI*2);
ctx.fill();
// Relógio na torre
ctx.fillStyle = '#fff';
ctx.beginPath();
ctx.arc(ix + 70, iy - 35, 12, 0, Math.PI*2);
ctx.fill();
ctx.strokeStyle = '#000';
ctx.lineWidth = 1;
ctx.stroke();
// Ponteiros
ctx.beginPath();
ctx.moveTo(ix + 70, iy - 35);
ctx.lineTo(ix + 70, iy - 43);
ctx.moveTo(ix + 70, iy - 35);
ctx.lineTo(ix + 76, iy - 35);
ctx.stroke();
}

// ----- PORTO DOS TATUÍS: píer, barcos -----
function desenharPorto(ctx, w, h) {
// Água escura do porto
const gradAgua = ctx.createLinearGradient(0, 0, 0, h);
gradAgua.addColorStop(0, '#2c4a6b');
gradAgua.addColorStop(0.5, '#1e3a5f');
gradAgua.addColorStop(1, '#0f2540');
ctx.fillStyle = gradAgua;
ctx.fillRect(0, 0, w, h);
// Ondulações da água
ctx.strokeStyle = 'rgba(255,255,255,0.1)';
ctx.lineWidth = 1;
for (let i = 0; i < 30; i++) {
const y = (i * 23) % h;
ctx.beginPath();
for (let x = 0; x < w; x += 15) {
const yy = y + Math.sin(x * 0.08 + i) * 2;
if (x === 0) ctx.moveTo(x, yy);
else ctx.lineTo(x, yy);
}
ctx.stroke();
}
// Margem/terra no topo
const gradTerra = ctx.createLinearGradient(0, 0, 0, 80);
gradTerra.addColorStop(0, '#5a4a3a');
gradTerra.addColorStop(1, '#3a2a1a');
ctx.fillStyle = gradTerra;
ctx.fillRect(0, 0, w, 60);
// Píer de madeira
ctx.fillStyle = '#8b6f47';
ctx.fillRect(0, h * 0.4, w, 40);
// Tábuas do píer
ctx.strokeStyle = 'rgba(0,0,0,0.4)';
ctx.lineWidth = 1;
for (let x = 0; x < w; x += 25) {
ctx.beginPath();
ctx.moveTo(x, h * 0.4);
ctx.lineTo(x, h * 0.4 + 40);
ctx.stroke();
}
// Postes do píer
ctx.fillStyle = '#654321';
for (let x = 50; x < w; x += 150) {
ctx.fillRect(x, h * 0.4 + 40, 8, 50);
}
// Barcos de pesca
const barcos = [
{x: 150, y: h * 0.6, cor: '#c92a2a'},
{x: 400, y: h * 0.75, cor: '#1e5f8a'},
{x: 700, y: h * 0.65, cor: '#d4a017'}
];
barcos.forEach(b => {
// Casco
ctx.fillStyle = b.cor;
ctx.beginPath();
ctx.moveTo(b.x - 35, b.y);
ctx.lineTo(b.x + 35, b.y);
ctx.lineTo(b.x + 25, b.y + 15);
ctx.lineTo(b.x - 25, b.y + 15);
ctx.closePath();
ctx.fill();
// Faixa branca
ctx.fillStyle = '#fff';
ctx.fillRect(b.x - 30, b.y + 2, 60, 3);
// Mastro
ctx.strokeStyle = '#3e2723';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(b.x, b.y);
ctx.lineTo(b.x, b.y - 30);
ctx.stroke();
// Bandeirola
ctx.fillStyle = '#ff4444';
ctx.beginPath();
ctx.moveTo(b.x, b.y - 30);
ctx.lineTo(b.x + 10, b.y - 25);
ctx.lineTo(b.x, b.y - 20);
ctx.closePath();
ctx.fill();
// Reflexo na água
ctx.fillStyle = 'rgba(0,0,0,0.2)';
ctx.beginPath();
ctx.ellipse(b.x, b.y + 20, 30, 4, 0, 0, Math.PI*2);
ctx.fill();
});
// Gaivotas
ctx.strokeStyle = 'rgba(255,255,255,0.8)';
ctx.lineWidth = 1.5;
for (let i = 0; i < 5; i++) {
const gx = (i * 180 + 100) % w;
const gy = 30 + (i * 15) % 50;
ctx.beginPath();
ctx.moveTo(gx, gy);
ctx.quadraticCurveTo(gx - 5, gy - 4, gx - 10, gy);
ctx.moveTo(gx, gy);
ctx.quadraticCurveTo(gx + 5, gy - 4, gx + 10, gy);
ctx.stroke();
}
}

// ----- MORRO DO MEIO: elevação verde -----
function desenharMorro(ctx, w, h) {
// Céu
const gradCeu = ctx.createLinearGradient(0, 0, 0, h * 0.4);
gradCeu.addColorStop(0, '#87ceeb');
gradCeu.addColorStop(1, '#b0d8e8');
ctx.fillStyle = gradCeu;
ctx.fillRect(0, 0, w, h * 0.4);
// Nuvens
ctx.fillStyle = 'rgba(255,255,255,0.8)';
[[100, 50], [350, 30], [650, 60], [820, 40]].forEach(([x, y]) => {
ctx.beginPath();
ctx.arc(x, y, 15, 0, Math.PI*2);
ctx.arc(x + 15, y, 20, 0, Math.PI*2);
ctx.arc(x + 35, y, 15, 0, Math.PI*2);
ctx.fill();
});
// Morro ao fundo (elevação)
const gradMorro = ctx.createLinearGradient(0, h * 0.3, 0, h * 0.7);
gradMorro.addColorStop(0, '#6b8e23');
gradMorro.addColorStop(0.5, '#556B2F');
gradMorro.addColorStop(1, '#3d5a1f');
ctx.fillStyle = gradMorro;
ctx.beginPath();
ctx.moveTo(0, h * 0.7);
ctx.quadraticCurveTo(w * 0.25, h * 0.3, w * 0.5, h * 0.45);
ctx.quadraticCurveTo(w * 0.75, h * 0.6, w, h * 0.5);
ctx.lineTo(w, h);
ctx.lineTo(0, h);
ctx.closePath();
ctx.fill();
// Vegetação no morro (árvores pequenas)
ctx.fillStyle = '#2d5016';
for (let i = 0; i < 40; i++) {
const x = (i * 53) % w;
const yBase = h * 0.5 + Math.sin(x * 0.01) * 50;
const y = yBase + (i * 37) % (h * 0.4);
ctx.beginPath();
ctx.arc(x, y, 5 + (i % 3) * 2, 0, Math.PI*2);
ctx.fill();
}
// Árvores maiores
for (let i = 0; i < 8; i++) {
const x = 50 + i * 120;
const y = h * 0.55 + (i % 2) * 30;
desenharArvore(ctx, x, y, 1.2);
}
// Chão gramado
const gradGrama = ctx.createLinearGradient(0, h * 0.75, 0, h);
gradGrama.addColorStop(0, '#556B2F');
gradGrama.addColorStop(1, '#3d5a1f');
ctx.fillStyle = gradGrama;
ctx.fillRect(0, h * 0.75, w, h * 0.25);
// Textura de grama
ctx.strokeStyle = 'rgba(0,0,0,0.15)';
ctx.lineWidth = 1;
for (let i = 0; i < 150; i++) {
const x = (i * 97) % w;
const y = h * 0.75 + (i * 131) % (h * 0.25);
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x + 2, y - 4);
ctx.stroke();
}
}

function desenharArvore(ctx, x, y, escala = 1) {
// Tronco
ctx.fillStyle = '#5a3a1a';
ctx.fillRect(x - 3 * escala, y, 6 * escala, 20 * escala);
// Copa
ctx.fillStyle = '#2d5016';
ctx.beginPath();
ctx.arc(x, y - 5 * escala, 15 * escala, 0, Math.PI*2);
ctx.fill();
ctx.fillStyle = '#3d6b1f';
ctx.beginPath();
ctx.arc(x - 5 * escala, y, 10 * escala, 0, Math.PI*2);
ctx.arc(x + 5 * escala, y, 10 * escala, 0, Math.PI*2);
ctx.fill();
}

// ----- LAGOA DO PORTINHO: dunas e lagoa -----
function desenharLagoa(ctx, w, h) {
// Céu com pôr do sol suave
const gradCeu = ctx.createLinearGradient(0, 0, 0, h * 0.4);
gradCeu.addColorStop(0, '#ffb88c');
gradCeu.addColorStop(0.5, '#ffd8a8');
gradCeu.addColorStop(1, '#ffe4bc');
ctx.fillStyle = gradCeu;
ctx.fillRect(0, 0, w, h * 0.4);
// Dunas douradas (ao fundo)
const gradDuna = ctx.createLinearGradient(0, h * 0.3, 0, h * 0.6);
gradDuna.addColorStop(0, '#f4c87a');
gradDuna.addColorStop(1, '#daa520');
ctx.fillStyle = gradDuna;
ctx.beginPath();
ctx.moveTo(0, h * 0.6);
ctx.quadraticCurveTo(w * 0.15, h * 0.35, w * 0.3, h * 0.5);
ctx.quadraticCurveTo(w * 0.45, h * 0.65, w * 0.6, h * 0.45);
ctx.quadraticCurveTo(w * 0.8, h * 0.3, w, h * 0.55);
ctx.lineTo(w, h);
ctx.lineTo(0, h);
ctx.closePath();
ctx.fill();
// Textura das dunas (linhas de areia)
ctx.strokeStyle = 'rgba(180,130,60,0.4)';
ctx.lineWidth = 1;
for (let i = 0; i < 15; i++) {
const y = h * 0.4 + i * 15;
ctx.beginPath();
for (let x = 0; x < w; x += 10) {
const yy = y + Math.sin(x * 0.02 + i) * 5;
if (x === 0) ctx.moveTo(x, yy);
else ctx.lineTo(x, yy);
}
ctx.stroke();
}
// Lagoa cristalina (centro)
const gradLagoa = ctx.createRadialGradient(w/2, h * 0.7, 30, w/2, h * 0.7, 200);
gradLagoa.addColorStop(0, '#40e0d0');
gradLagoa.addColorStop(0.5, '#20b2aa');
gradLagoa.addColorStop(1, '#008b8b');
ctx.fillStyle = gradLagoa;
ctx.beginPath();
ctx.ellipse(w/2, h * 0.7, 280, 100, 0, 0, Math.PI*2);
ctx.fill();
// Reflexos na lagoa
ctx.strokeStyle = 'rgba(255,255,255,0.4)';
ctx.lineWidth = 1.5;
for (let i = 0; i < 8; i++) {
const y = h * 0.65 + i * 10;
ctx.beginPath();
for (let x = w/2 - 250; x < w/2 + 250; x += 15) {
const yy = y + Math.sin(x * 0.05 + i) * 2;
if (x === w/2 - 250) ctx.moveTo(x, yy);
else ctx.lineTo(x, yy);
}
ctx.stroke();
}
// Vegetação ao redor da lagoa
ctx.fillStyle = '#3d6b1f';
for (let i = 0; i < 30; i++) {
const ang = (i / 30) * Math.PI * 2;
const rx = w/2 + Math.cos(ang) * (290 + Math.random() * 20);
const ry = h * 0.7 + Math.sin(ang) * (110 + Math.random() * 10);
ctx.beginPath();
ctx.arc(rx, ry, 4 + Math.random() * 3, 0, Math.PI*2);
ctx.fill();
}
// Palmeiras isoladas
desenharPalmeira(ctx, 100, h * 0.55, 0.9);
desenharPalmeira(ctx, 800, h * 0.55, 0.9);
}

// ----- DESENHO DO CAMINHO (comum a todos os temas) -----
function desenharCaminho(ctx, fase) {
const caminho = fase.caminho;
// Borda escura
ctx.strokeStyle = 'rgba(0,0,0,0.6)';
ctx.lineWidth = 50;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.beginPath();
ctx.moveTo(caminho[0].x, caminho[0].y);
for (let i = 1; i < caminho.length; i++) ctx.lineTo(caminho[i].x, caminho[i].y);
ctx.stroke();
// Cor principal (varia por tema)
const coresCaminho = {
delta: '#c9a961',
praia: '#f4e4bc',
coqueiro: '#e8d4a0',
igreja: '#a89078',
porto: '#8b6f47',
morro: '#a0522d',
lagoa: '#f4c87a'
};
ctx.strokeStyle = coresCaminho[fase.tema] || '#c9a961';
ctx.lineWidth = 44;
ctx.beginPath();
ctx.moveTo(caminho[0].x, caminho[0].y);
for (let i = 1; i < caminho.length; i++) ctx.lineTo(caminho[i].x, caminho[i].y);
ctx.stroke();
// Textura de pedras/areia no caminho
ctx.fillStyle = 'rgba(0,0,0,0.2)';
for (let i = 0; i < caminho.length - 1; i++) {
const a = caminho[i];
const b = caminho[i+1];
const dist = Math.hypot(b.x - a.x, b.y - a.y);
const passos = Math.floor(dist / 12);
for (let j = 0; j < passos; j++) {
const t = j / passos;
const px = a.x + (b.x - a.x) * t + (Math.sin(j*7) * 10);
const py = a.y + (b.y - a.y) * t + (Math.cos(j*11) * 10);
ctx.beginPath();
ctx.arc(px, py, 1.5, 0, Math.PI*2);
ctx.fill();
}
}
// Textura clara
ctx.fillStyle = 'rgba(255,255,255,0.15)';
for (let i = 0; i < caminho.length - 1; i++) {
const a = caminho[i];
const b = caminho[i+1];
const dist = Math.hypot(b.x - a.x, b.y - a.y);
const passos = Math.floor(dist / 18);
for (let j = 0; j < passos; j++) {
const t = j / passos;
const px = a.x + (b.x - a.x) * t + (Math.cos(j*5) * 8);
const py = a.y + (b.y - a.y) * t + (Math.sin(j*9) * 8);
ctx.beginPath();
ctx.arc(px, py, 2, 0, Math.PI*2);
ctx.fill();
}
}
}

function desenharIndicadores(ctx, fase) {
const inicio = fase.caminho[0];
const fim = fase.caminho[fase.caminho.length - 1];
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
function voltarParaFases() {
renderizarFases();
mostrarTela('tela-fases');
}

// ============ SELEÇÃO DE PERSONAGENS ============
function renderizarPersonagens() {
const grade = document.getElementById('grade-personagens');
grade.innerHTML = '';
personagens.forEach(p => {
const card = document.createElement('div');
card.className = 'card-personagem';
if (estado.personagensEscolhidos.find(e => e.id === p.id)) card.classList.add('selecionado');
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
card.innerHTML = `${concluida ? `<div class="trofeu-badge">${f.trofeu}</div>` : ''}
<div class="icone-fase">${f.icone}</div>
<div class="nome-fase">${f.nome}</div>
<div class="descricao-fase">${f.desc}</div>
<div class="dificuldade-fase">💪 ${f.dificuldade}</div>
${!desbloqueada ? '<div style="margin-top:10px;font-size:1.5em;">🔒</div>' : ''}`;
if (desbloqueada) card.onclick = () => iniciarFase(f.id);
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
const canvasPrev = document.createElement('canvas');
canvasPrev.width = 50;
canvasPrev.height = 50;
canvasPrev.className = 'torre-preview';
const ctxPrev = canvasPrev.getContext('2d');
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
document.getElementById('info-torre').innerHTML = `<strong>${personagem.nome}</strong> selecionado<br>Solte no mapa para posicionar<br><small>🟢 Verde = pode posicionar | 🔴 Vermelho = não pode</small>`;
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
const novaTorre = {
x: x,
y: y,
idPersonagem: personagem.id,
tipo: personagem.tipo,
nome: personagem.nome,
dano: personagem.dano,
range: personagem.range,
spa: personagem.spa,
cor: personagem.cor,
custo: personagem.custo,
custoTotalInvestido: personagem.custo,
nivel: 0,
cooldown: 0,
angulo: 0,
tempoDisparo: 0
};
aplicarUpgrade(novaTorre);
estado.torres.push(novaTorre);
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
const nivelInfo = NIVEIS_UPGRADE[torre.nivel];
const estrelas = '★'.repeat(torre.nivel + 1) + '☆'.repeat(2 - torre.nivel);
document.getElementById('tsi-nome').textContent = `${torre.nome}`;
document.getElementById('tsi-estrelas').textContent = estrelas;
document.getElementById('tsi-nivel').textContent = `Nível ${nivelInfo.nome}`;
document.getElementById('tsi-stats').innerHTML =
`⚔️ Dano: ${torre.dano}<br>` +
`🎯 Range: ${torre.range}<br>` +
`⚡ SPA: ${torre.spa.toFixed(2)}s<br>` +
`💰 Investido: ${torre.custoTotalInvestido}`;
// Preview do próximo upgrade
const upgradeDiv = document.getElementById('upgrade-preview');
const btnUpgrade = document.getElementById('btn-upgrade');
if (torre.nivel >= NIVEIS_UPGRADE.length - 1) {
upgradeDiv.innerHTML = '<strong style="color:#ffd700;">✨ NÍVEL MÁXIMO!</strong>';
btnUpgrade.style.display = 'none';
} else {
const proxNivel = NIVEIS_UPGRADE[torre.nivel + 1];
const personagemBase = personagens.find(p => p.id === torre.idPersonagem);
const novoDano = Math.floor(personagemBase.dano * proxNivel.multDano);
const novoRange = Math.floor(personagemBase.range * proxNivel.multRange);
const novoSpa = +(personagemBase.spa * proxNivel.multSpa).toFixed(2);
const custoUp = calcularCustoUpgrade(personagemBase, torre.nivel);
upgradeDiv.innerHTML =
`<strong style="color:#00ff88;">⬆️ Upgrade Nível ${proxNivel.nome}:</strong><br>` +
`⚔️ ${torre.dano} <span class="seta">→</span> ${novoDano}<br>` +
`🎯 ${torre.range} <span class="seta">→</span> ${novoRange}<br>` +
`⚡ ${torre.spa.toFixed(2)}s <span class="seta">→</span> ${novoSpa}s<br>` +
`💰 Custo: <strong>${custoUp}</strong>`;
btnUpgrade.style.display = 'inline-block';
btnUpgrade.disabled = estado.dinheiro < custoUp;
btnUpgrade.textContent = `⬆️ Upgrade (${custoUp}💰)`;
}
}

function desselecionarTorre() {
estado.torreSelecionadaObj = null;
document.getElementById('torre-selecionada-info').style.display = 'none';
}

function fazerUpgrade() {
const torre = estado.torreSelecionadaObj;
if (!torre) return;
if (torre.nivel >= NIVEIS_UPGRADE.length - 1) return;
const personagemBase = personagens.find(p => p.id === torre.idPersonagem);
const custo = calcularCustoUpgrade(personagemBase, torre.nivel);
if (estado.dinheiro < custo) return;
estado.dinheiro -= custo;
torre.custoTotalInvestido += custo;
torre.nivel++;
aplicarUpgrade(torre);
atualizarHUD();
renderizarListaTorres();
mostrarInfoTorre(torre);
// Efeito visual de upgrade
criarParticulas(torre.x, torre.y, '#ffd700', 20);
document.getElementById('info-torre').innerHTML = `✨ ${torre.nome} melhorado para nível ${NIVEIS_UPGRADE[torre.nivel].nome}!`;
}

function venderTorreSelecionada() {
if (!estado.torreSelecionadaObj) return;
const valor = Math.floor(estado.torreSelecionadaObj.custoTotalInvestido * 0.5);
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
if (!estado.pausado) atualizar(delta);
desenhar(ctx, canvas);
estado.animacaoId = requestAnimationFrame(loop);
}
estado.animacaoId = requestAnimationFrame(loop);
}

function atualizar(delta) {
const fase = estado.faseAtual;
estado.tempoDesdeUltimoSpawn += delta;
const intervaloSpawn = Math.max(0.4, 1.5 - estado.ondeAtual * 0.08);
if (estado.tempoDesdeUltimoSpawn >= intervaloSpawn && estado.inimigosSpawnados < estado.totalInimigosOnda) {
spawnInimigo();
estado.tempoDesdeUltimoSpawn = 0;
}
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
estado.torres.forEach(torre => {
torre.cooldown -= delta;
torre.tempoDisparo = Math.max(0, torre.tempoDisparo - delta);
if (torre.cooldown <= 0) {
const alvo = encontrarAlvo(torre);
if (alvo) {
atirar(torre, alvo);
torre.cooldown = torre.spa;
torre.tempoDisparo = 0.15;
torre.angulo = Math.atan2(alvo.y - torre.y, alvo.x - torre.x);
}
}
});
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
estado.particulas.forEach(p => {
p.vida -= delta;
p.x += p.vx * delta;
p.y += p.vy * delta;
p.vy += 50 * delta;
});
estado.inimigos = estado.inimigos.filter(i => i.vivo);
estado.projeteis = estado.projeteis.filter(p => p.ativo);
estado.particulas = estado.particulas.filter(p => p.vida > 0);
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
desenharCenario(ctx, canvas, fase);
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
estado.torres.forEach(t => {
if (t.tempoDisparo > 0) {
ctx.fillStyle = `rgba(255,255,0,${t.tempoDisparo * 3})`;
ctx.beginPath();
ctx.arc(t.x, t.y, 28, 0, Math.PI*2);
ctx.fill();
}
// Base circular com cor do nível
const nivelInfo = NIVEIS_UPGRADE[t.nivel];
const gradBase = ctx.createRadialGradient(t.x - 5, t.y - 5, 3, t.x, t.y, 26);
gradBase.addColorStop(0, 'rgba(255,255,255,0.3)');
gradBase.addColorStop(1, 'rgba(0,0,0,0.5)');
ctx.fillStyle = gradBase;
ctx.beginPath();
ctx.arc(t.x, t.y, 26, 0, Math.PI*2);
ctx.fill();
// Borda colorida pelo nível
ctx.strokeStyle = nivelInfo.corBorda;
ctx.lineWidth = 3;
ctx.beginPath();
ctx.arc(t.x, t.y, 26, 0, Math.PI*2);
ctx.stroke();
desenharPersonagem(ctx, t.tipo, t.x, t.y, 22, t.cor);
// Estrelas do nível (acima da torre)
if (t.nivel > 0) {
ctx.fillStyle = '#ffd700';
ctx.font = 'bold 12px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
const estrelas = '★'.repeat(t.nivel);
ctx.fillText(estrelas, t.x, t.y - 30);
}
// Seleção
if (estado.torreSelecionadaObj === t) {
ctx.strokeStyle = '#fff';
ctx.lineWidth = 2;
ctx.setLineDash([5, 5]);
ctx.beginPath();
ctx.arc(t.x, t.y, 30, 0, Math.PI*2);
ctx.stroke();
ctx.setLineDash([]);
}
});
estado.inimigos.forEach(i => {
if (!i.vivo) return;
desenharInimigo(ctx, i);
});
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
estado.particulas.forEach(p => {
const alpha = p.vida / p.vidaMax;
ctx.fillStyle = p.cor;
ctx.globalAlpha = alpha;
ctx.beginPath();
ctx.arc(p.x, p.y, p.tamanho * alpha, 0, Math.PI*2);
ctx.fill();
ctx.globalAlpha = 1;
});
if (estado.arrastando && estado.mouseNoCanvas && estado.posicaoMouse) {
const valido = podePosicionar(estado.posicaoMouse.x, estado.posicaoMouse.y);
ctx.fillStyle = valido ? 'rgba(0,255,0,0.15)' : 'rgba(255,0,0,0.15)';
ctx.strokeStyle = valido ? 'rgba(0,255,0,0.8)' : 'rgba(255,0,0,0.8)';
ctx.lineWidth = 2;
ctx.setLineDash([5, 5]);
ctx.beginPath();
ctx.arc(estado.posicaoMouse.x, estado.posicaoMouse.y, estado.arrastando.range, 0, Math.PI*2);
ctx.fill();
ctx.stroke();
ctx.setLineDash([]);
ctx.globalAlpha = 0.7;
desenharPersonagem(ctx, estado.arrastando.tipo, estado.posicaoMouse.x, estado.posicaoMouse.y, 22, estado.arrastando.cor);
ctx.globalAlpha = 1;
ctx.fillStyle = valido ? '#00ff00' : '#ff0000';
ctx.font = 'bold 20px Arial';
ctx.textAlign = 'center';
ctx.fillText(valido ? '✓' : '✗', estado.posicaoMouse.x, estado.posicaoMouse.y - 30);
}
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