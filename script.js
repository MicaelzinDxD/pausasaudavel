// Função para Navegar entre as abas do Menu Inferior
function mudarAba(idAba, botaoClicado) {
    // Esconde todas as abas
    document.querySelectorAll('.tab-content').forEach(aba => {
        aba.classList.remove('active');
    });
    // Remove o 'active' de todos os botões do menu
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Mostra a aba escolhida e destaca o botão
    document.getElementById(idAba).classList.add('active');
    botaoClicado.classList.add('active');
}

// ==========================================
// FUNÇÕES DA CALCULADORA DE ÁGUA
// ==========================================
function calcularAgua() {
    let peso = document.getElementById("inputPeso").value;
    let boxResultado = document.getElementById("resultadoAgua");
    
    if (peso > 0) {
        let mlTotal = peso * 35; // 35ml por kg
        let litros = (mlTotal / 1000).toFixed(1);
        let copos = Math.round(mlTotal / 250); // Copos de 250ml
        
        document.getElementById("textoMeta").innerText = litros + " Litros / dia";
        document.getElementById("textoCopos").innerText = "Isso equivale a " + copos + " copos de 250ml.";
        
        boxResultado.classList.remove('hidden');
    } else {
        alert("Por favor, digite um peso válido!");
    }
}

// ==========================================
// FUNÇÕES DO CRONÔMETRO (TIMER POMODORO)
// ==========================================
let tempoIntervalo;
let tempoRestante = 0;

function iniciarTimer(minutos) {
    pararTimer(); // Zera se já tiver um rodando
    tempoRestante = minutos * 60;
    
    let statusText = minutos === 25 ? "Modo Foco (Trabalho)" : "Modo Descanso (Pausa)";
    document.getElementById("statusTimer").innerText = statusText;
    
    atualizarDisplay();
    
    tempoIntervalo = setInterval(() => {
        tempoRestante--;
        atualizarDisplay();
        
        if (tempoRestante <= 0) {
            pararTimer();
            alert("O tempo acabou! Hora de trocar de atividade.");
        }
    }, 1000);
}

function pararTimer() {
    clearInterval(tempoIntervalo);
    document.getElementById("tempoDisplay").innerText = "00:00";
    document.getElementById("statusTimer").innerText = "Parado";
}

function atualizarDisplay() {
    let min = Math.floor(tempoRestante / 60);
    let seg = tempoRestante % 60;
    // Formata para colocar o ZERO na frente se for menor que 10
    min = min < 10 ? "0" + min : min;
    seg = seg < 10 ? "0" + seg : seg;
    document.getElementById("tempoDisplay").innerText = min + ":" + seg;
}

// ==========================================
// FUNÇÕES DE EXERCÍCIOS / ERGONOMIA
// ==========================================
function mostrarPerfil(perfil) {
    // Esconde os dois
    document.getElementById('perfil-ti').classList.add('hidden');
    document.getElementById('perfil-camareira').classList.add('hidden');
    
    // Mostra o clicado
    if (perfil === 'ti') {
        document.getElementById('perfil-ti').classList.remove('hidden');
    } else {
        document.getElementById('perfil-camareira').classList.remove('hidden');
    }
}