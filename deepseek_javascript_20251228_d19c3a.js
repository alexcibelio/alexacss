// Banco de dados das questões e gabarito
const questoesDB = [
    // Questão 1
    {
        numero: 1,
        texto: "A base da ética própria do servidor público é dirigida precipuamente a ele como pessoa, de modo que não é considerado impróprio que ele receba para si algo que só lhe seja ofertado por causa da sua condição de servidor público.",
        resposta: "E",
        tema: "Ética do Servidor Público"
    },
    {
        numero: 2,
        texto: "É defeso aos servidores da ANAC receber presentes, tais como brindes e hospitalidades, oferecidos por quem tenha interesse em decisão sua ou de colegiado do qual participe.",
        resposta: "C",
        tema: "Direitos e Deveres dos Servidores"
    },
    {
        numero: 3,
        texto: "O acordo do CORSIA (Mecanismo de Compensação de Emissões da Aviação), adotado pelo Brasil, obriga o país a iniciar o monitoramento das emissões e compensá-las a partir de 2050.",
        resposta: "E",
        tema: "Política de Sustentabilidade"
    },
    {
        numero: 4,
        texto: "A ANAC tem por atribuição institucional o trato dos diversos aspectos da segurança de voo e o controle do espaço aéreo.",
        resposta: "E",
        tema: "Introdução ao Transporte Aéreo"
    },
    {
        numero: 5,
        texto: "Podemos citar, como eventos impulsores das concessões aeroportuárias no Brasil, os preparativos para a Copa do Mundo de 2014 e os Jogos Olímpicos de 2016.",
        resposta: "C",
        tema: "Introdução ao Transporte Aéreo"
    },
    {
        numero: 6,
        texto: "A 1.ª Liberdade do Ar garante o direito de sobrevoo e de pouso em território estrangeiro.",
        resposta: "E",
        tema: "Acordos de Serviços Aéreos"
    },
    {
        numero: 7,
        texto: "Capacidade é o número de voos que as empresas podem operar, usualmente calculado em frequências semanais.",
        resposta: "C",
        tema: "Acordos de Serviços Aéreos"
    },
    {
        numero: 8,
        texto: "SARP (Standard and Recomended Practices) são normas e recomendações estabelecidas pela Organização da Aviação Civil Internacional (OACI) para balizar como cada autoridade de aviação civil no mundo tratará de temas relacionados à aviação.",
        resposta: "C",
        tema: "Sistema de Aviação Civil Internacional"
    },
    {
        numero: 9,
        texto: "A composição do conselho da Organização da Aviação Civil Internacional (OACI) para o triênio de 2022 a 2025 é dividida em 3 partes: o Brasil integra a I, a Argentina, a II e o Chile, a III.",
        resposta: "E",
        tema: "Sistema de Aviação Civil Internacional"
    },
    {
        numero: 10,
        texto: "O conceito de Continuous Monitoring Approach – USOAP CMA utiliza uma abordagem baseada no risco e visa proporcionar uma supervisão intermitente da implementação das normas de segurança.",
        resposta: "E",
        tema: "USOAP"
    },
    {
        numero: 11,
        texto: "O Sistema de Aviação Civil Brasileiro foi instituído com a finalidade de organizar as atividades necessárias ao funcionamento e ao desenvolvimento da aviação civil, por meio de ações coordenadas de regulação, controle, fiscalização, orientação e incentivo.",
        resposta: "C",
        tema: "Sistema de Aviação Civil Brasileiro"
    },
    {
        numero: 12,
        texto: "O Centro de Investigação e Prevenção de Acidentes Aeronáuticos (CENIPA), que surgiu com o intuito de promover a prevenção de acidentes aeronáuticos seguindo a filosofia baseada no trinômio 'o homem, o meio e o avião', substituiu investigações por inquéritos.",
        resposta: "C",
        tema: "Sistema de Aviação Civil Brasileiro"
    },
    {
        numero: 13,
        texto: "A Política Nacional de Transportes (PNT) é um exemplo de política generalista, enquanto a Política Nacional de Aviação Civil (PNAC) é a política específica para a aviação civil.",
        resposta: "C",
        tema: "Política de Aviação Civil"
    },
    {
        numero: 14,
        texto: "Uma das competências da Secretaria de Aviação Civil é propor a política nacional de transportes no setor de aviação civil, bem como as ações governamentais a ela relacionadas e, no que couber, com o Ministério da Defesa.",
        resposta: "E",
        tema: "Política de Aviação Civil"
    },
    {
        numero: 15,
        texto: "A teoria regulatória institucionalista, além de observar os interesses públicos ou privados que influenciam a regulação, analisa o funcionamento de cada tipo de organização, as instituições que regem as regras do jogo e a própria dinâmica do ambiente regulado.",
        resposta: "C",
        tema: "Teoria Regulatória"
    },
    {
        numero: 16,
        texto: "As motivações de natureza econômica para embasar a ação regulatória consistem na existência de monopólios ou de possibilidade de abusos de poder de mercado, na presença de externalidades e na simetria de informações.",
        resposta: "E",
        tema: "Teoria Regulatória"
    },
    {
        numero: 17,
        texto: "O surgimento do Estado regulador brasileiro acompanhou a necessidade observada pela sociedade de tornar os ambientes de negócio mais competitivos, estáveis e com melhores condições de receberem mais investimento privado.",
        resposta: "C",
        tema: "Papel das Agências Reguladoras"
    },
    {
        numero: 18,
        texto: "As agências de regulação, até a década de 1930, focaram primeiramente nas questões como a segurança, a saúde ocupacional e o meio ambiente.",
        resposta: "E",
        tema: "Papel das Agências Reguladoras"
    },
    {
        numero: 19,
        texto: "As companhias aéreas de baixo custo oferecem uma ampla gama de serviços aos passageiros, incluindo várias classes de cabine, serviços de bordo, acesso a áreas exclusivas em aeroportos e programas de fidelidade.",
        resposta: "E",
        tema: "Governança Regulatória no Transporte Aéreo"
    },
    {
        numero: 20,
        texto: "No Brasil, não há restrições quanto ao controle de empresas aéreas nacionais por capital estrangeiro, e as empresas aéreas têm liberdade para estudar o mercado e escolher como, onde e quando vão realizar suas operações.",
        resposta: "E",
        tema: "Governança Regulatória no Transporte Aéreo"
    },
    // ... Continuaria com todas as 120 questões
];

// GABARITO COMPLETO (para verificação)
const gabaritoCompleto = {
    1: "E", 2: "C", 3: "E", 4: "E", 5: "C", 
    6: "E", 7: "C", 8: "C", 9: "E", 10: "E",
    11: "C", 12: "C", 13: "C", 14: "E", 15: "C",
    16: "E", 17: "C", 18: "E", 19: "E", 20: "E",
    21: "E", 22: "C", 23: "C", 24: "C", 25: "C",
    26: "E", 27: "C", 28: "E", 29: "C", 30: "E",
    31: "E", 32: "C", 33: "E", 34: "C", 35: "E",
    36: "C", 37: "E", 38: "C", 39: "E", 40: "C",
    41: "C", 42: "C", 43: "E", 44: "C", 45: "C",
    46: "C", 47: "C", 48: "E", 49: "C", 50: "C",
    51: "E", 52: "C", 53: "C", 54: "C", 55: "C",
    56: "E", 57: "C", 58: "C", 59: "C", 60: "E",
    61: "C", 62: "E", 63: "E", 64: "C", 65: "C",
    66: "C", 67: "C", 68: "E", 69: "E", 70: "E",
    71: "C", 72: "C", 73: "E", 74: "E", 75: "E",
    76: "E", 77: "C", 78: "C", 79: "E", 80: "E",
    81: "E", 82: "C", 83: "E", 84: "C", 85: "E",
    86: "C", 87: "E", 88: "C", 89: "C", 90: "C",
    91: "E", 92: "E", 93: "C", 94: "E", 95: "E",
    96: "E", 97: "C", 98: "E", 99: "C", 100: "E",
    101: "E", 102: "C", 103: "C", 104: "C", 105: "E",
    106: "E", 107: "C", 108: "C", 109: "C", 110: "E",
    111: "C", 112: "E", 113: "E", 114: "C", 115: "C",
    116: "E", 117: "E", 118: "E", 119: "C", 120: "C"
};

// Variáveis de estado
let questoesRespondidas = {};
let modoRevisao = false;
let tempoInicio = null;
let timerInterval = null;
let questaoAtual = 1;
let questoesPorPagina = 10;
let questoesFiltradas = [];
let filtroAtivo = false;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    inicializarAplicacao();
    iniciarTemporizador();
    carregarQuestoes();
    configurarEventos();
});

function inicializarAplicacao() {
    tempoInicio = new Date();
    questoesRespondidas = JSON.parse(localStorage.getItem('anac_respostas')) || {};
    atualizarEstatisticas();
}

function iniciarTemporizador() {
    const timerElement = document.getElementById('timer');
    
    timerInterval = setInterval(() => {
        const agora = new Date();
        const diferenca = agora - tempoInicio;
        const minutos = Math.floor(diferenca / 60000);
        const segundos = Math.floor((diferenca % 60000) / 1000);
        
        timerElement.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    }, 1000);
}

function carregarQuestoes() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    
    const inicio = (questaoAtual - 1) * questoesPorPagina;
    const fim = inicio + questoesPorPagina;
    
    let questoesParaMostrar = filtroAtivo ? questoesFiltradas : questoesDB;
    
    for (let i = inicio; i < fim && i < questoesParaMostrar.length; i++) {
        const questao = questoesParaMostrar[i];
        criarCartaoQuestao(questao, container);
    }
    
    atualizarNavegacao();
}

function criarCartaoQuestao(questao, container) {
    const respostaUsuario = questoesRespondidas[questao.numero];
    const respostaCorreta = gabaritoCompleto[questao.numero];
    
    const questaoDiv = document.createElement('div');
    questaoDiv.className = 'question-card fade-in';
    questaoDiv.id = `questao-${questao.numero}`;
    
    if (respostaUsuario === respostaCorreta) {
        questaoDiv.classList.add('correct');
    } else if (respostaUsuario && respostaUsuario !== respostaCorreta) {
        questaoDiv.classList.add('wrong');
    } else if (respostaUsuario) {
        questaoDiv.classList.add('answered');
    }
    
    const status = respostaUsuario ? 
        (respostaUsuario === respostaCorreta ? 'Acertou' : 'Errou') : 
        'Não respondida';
    
    questaoDiv.innerHTML = `
        <div class="question-header">
            <div class="question-number">
                <div class="q-number">${questao.numero}</div>
                <span class="q-status ${status.toLowerCase().replace(' ', '')}">${status}</span>
            </div>
            <span class="question-theme">${questao.tema || 'Geral'}</span>
        </div>
        
        <div class="question-text">${questao.texto}</div>
        
        <div class="question-controls">
            <select class="answer-select" id="select-${questao.numero}" 
                ${respostaUsuario && !modoRevisao ? 'disabled' : ''}>
                <option value="">Selecione sua resposta</option>
                <option value="C" ${respostaUsuario === 'C' ? 'selected' : ''}>C - CERTO</option>
                <option value="E" ${respostaUsuario === 'E' ? 'selected' : ''}>E - ERRADO</option>
            </select>
            
            <button class="btn-check" onclick="verificarQuestao(${questao.numero})" 
                ${respostaUsuario && !modoRevisao ? 'disabled' : ''}>
                <i class="fas fa-check"></i> Verificar
            </button>
            
            ${respostaUsuario ? `
                <div class="result-display ${respostaUsuario === respostaCorreta ? 'result-correct' : 'result-wrong'}">
                    <i class="fas ${respostaUsuario === respostaCorreta ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                    Sua resposta: ${respostaUsuario} 
                    ${respostaUsuario !== respostaCorreta ? 
                        `<span class="correct-answer-display"> (Correta: ${respostaCorreta})</span>` : 
                        ''}
                </div>
            ` : ''}
        </div>
    `;
    
    container.appendChild(questaoDiv);
}

function verificarQuestao(numero) {
    const select = document.getElementById(`select-${numero}`);
    const respostaUsuario = select.value;
    
    if (!respostaUsuario) {
        mostrarToast('Selecione uma resposta antes de verificar!', 'warning');
        return;
    }
    
    const respostaCorreta = gabaritoCompleto[numero];
    const questaoDiv = document.getElementById(`questao-${numero}`);
    
    // Atualizar estado
    questoesRespondidas[numero] = respostaUsuario;
    localStorage.setItem('anac_respostas', JSON.stringify(questoesRespondidas));
    
    // Atualizar visual
    questaoDiv.className = 'question-card fade-in';
    if (respostaUsuario === respostaCorreta) {
        questaoDiv.classList.add('correct');
    } else {
        questaoDiv.classList.add('wrong');
    }
    
    // Atualizar controles
    const controlsDiv = questaoDiv.querySelector('.question-controls');
    controlsDiv.innerHTML = `
        <select class="answer-select ${respostaUsuario === respostaCorreta ? 'correct-answer' : 'wrong-answer'}" 
                disabled>
            <option value="${respostaUsuario}" selected>
                ${respostaUsuario} - ${respostaUsuario === 'C' ? 'CERTO' : 'ERRADO'}
            </option>
        </select>
        
        <div class="result-display ${respostaUsuario === respostaCorreta ? 'result-correct' : 'result-wrong'}">
            <i class="fas ${respostaUsuario === respostaCorreta ? 'fa-check-circle' : 'fa-times-circle'}"></i>
            Sua resposta: ${respostaUsuario} 
            ${respostaUsuario !== respostaCorreta ? 
                `<span class="correct-answer-display"> (Correta: ${respostaCorreta})</span>` : 
                ''}
        </div>
    `;
    
    // Atualizar estatísticas
    atualizarEstatisticas();
    
    // Mostrar feedback
    if (respostaUsuario === respostaCorreta) {
        mostrarToast(`Questão ${numero}: Resposta correta!`, 'success');
        questaoDiv.classList.add('pulse');
        setTimeout(() => questaoDiv.classList.remove('pulse'), 2000);
    } else {
        mostrarToast(`Questão ${numero}: Resposta incorreta. A correta é ${respostaCorreta}`, 'error');
        questaoDiv.classList.add('shake');
        setTimeout(() => questaoDiv.classList.remove('shake'), 500);
    }
}

function atualizarEstatisticas() {
    const totalQuestoes = 120;
    const respondidas = Object.keys(questoesRespondidas).length;
    const corretas = Object.keys(questoesRespondidas).filter(num => 
        questoesRespondidas[num] === gabaritoCompleto[num]
    ).length;
    const desempenho = respondidas > 0 ? Math.round((corretas / respondidas) * 100) : 0;
    
    // Atualizar contadores
    document.getElementById('answered-count').textContent = respondidas;
    document.getElementById('correct-count').textContent = corretas;
    document.getElementById('performance').textContent = `${desempenho}%`;
    
    // Atualizar barra de progresso
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        const progresso = (respondidas / totalQuestoes) * 100;
        progressBar.style.width = `${progresso}%`;
    }
}

function verificarTodasQuestoes() {
    let naoRespondidas = [];
    
    for (let i = 1; i <= 120; i++) {
        if (!questoesRespondidas[i]) {
            const select = document.getElementById(`select-${i}`);
            if (select && select.value) {
                verificarQuestao(i);
            } else {
                naoRespondidas.push(i);
            }
        }
    }
    
    if (naoRespondidas.length > 0) {
        mostrarToast(`${naoRespondidas.length} questões não foram respondidas`, 'warning');
    } else {
        mostrarToast('Todas as questões foram verificadas!', 'success');
    }
    
    atualizarEstatisticas();
}

function redefinirQuestionario() {
    if (confirm('Tem certeza que deseja redefinir todas as respostas? Todo o progresso será perdido.')) {
        questoesRespondidas = {};
        localStorage.removeItem('anac_respostas');
        modoRevisao = false;
        tempoInicio = new Date();
        clearInterval(timerInterval);
        iniciarTemporizador();
        carregarQuestoes();
        atualizarEstatisticas();
        mostrarToast('Questionário redefinido com sucesso!', 'success');
    }
}

function alternarModoRevisao() {
    modoRevisao = !modoRevisao;
    const btn = document.getElementById('toggle-mode-btn');
    
    if (modoRevisao) {
        btn.innerHTML = '<i class="fas fa-eye-slash"></i> Modo Normal';
        btn.classList.remove('btn-info');
        btn.classList.add('btn-danger');
        mostrarToast('Modo revisão ativado - Você pode alterar respostas', 'info');
    } else {
        btn.innerHTML = '<i class="fas fa-eye"></i> Modo Revisão';
        btn.classList.remove('btn-danger');
        btn.classList.add('btn-info');
        mostrarToast('Modo normal ativado', 'info');
    }
    
    carregarQuestoes();
}

function mostrarResultados() {
    const modal = document.getElementById('results-modal');
    const respondidas = Object.keys(questoesRespondidas).length;
    const corretas = Object.keys(questoesRespondidas).filter(num => 
        questoesRespondidas[num] === gabaritoCompleto[num]
    ).length;
    const erradas = respondidas - corretas;
    const taxa = respondidas > 0 ? Math.round((corretas / respondidas) * 100) : 0;
    
    // Calcular tempo
    const agora = new Date();
    const diferenca = agora - tempoInicio;
    const minutos = Math.floor(diferenca / 60000);
    const segundos = Math.floor((diferenca % 60000) / 1000);
    const tempoFormatado = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    
    // Atualizar modal
    document.getElementById('final-score').textContent = corretas;
    document.getElementById('score-percentage').textContent = `${Math.round((corretas / 120) * 100)}%`;
    document.getElementById('modal-answered').textContent = respondidas;
    document.getElementById('modal-correct').textContent = corretas;
    document.getElementById('modal-wrong').textContent = erradas;
    document.getElementById('modal-time').textContent = tempoFormatado;
    document.getElementById('modal-rate').textContent = `${taxa}%`;
    
    // Gerar recomendações
    const recomendacoesDiv = document.getElementById('recommendations-list');
    recomendacoesDiv.innerHTML = '';
    
    const recomendacoes = gerarRecomendacoes(corretas, taxa, erradas);
    recomendacoes.forEach(rec => {
        const div = document.createElement('div');
        div.className = 'recommendation-item';
        div.innerHTML = `
            <i class="fas ${rec.icone}"></i>
            <span>${rec.texto}</span>
        `;
        recomendacoesDiv.appendChild(div);
    });
    
    // Mostrar modal
    modal.style.display = 'flex';
}

function gerarRecomendacoes(corretas, taxa, erradas) {
    const recomendacoes = [];
    
    if (taxa < 60) {
        recomendacoes.push({
            icone: 'fa-book',
            texto: 'Revisar os conteúdos com menor taxa de acerto'
        });
    }
    
    if (erradas > 30) {
        recomendacoes.push({
            icone: 'fa-redo',
            texto: 'Refazer as questões que você errou'
        });
    }
    
    if (corretas < 72) { // Menos de 60%
        recomendacoes.push({
            icone: 'fa-clock',
            texto: 'Dedique mais tempo ao estudo das áreas mais cobradas'
        });
    } else if (corretas < 96) { // Entre 60-80%
        recomendacoes.push({
            icone: 'fa-chart-line',
            texto: 'Continue estudando, você está no caminho certo!'
        });
    } else { // Acima de 80%
        recomendacoes.push({
            icone: 'fa-trophy',
            texto: 'Excelente desempenho! Revise apenas os detalhes'
        });
    }
    
    recomendacoes.push({
        icone: 'fa-calendar',
        texto: `Próximo simulado recomendado: ${new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR')}`
    });
    
    return recomendacoes;
}

function mostrarToast(mensagem, tipo = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${tipo}`;
    
    const icones = {
        success: 'fa-check-circle',
        error: 'fa-times-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    
    toast.innerHTML = `
        <div class="toast-icon">
            <i class="fas ${icones[tipo]}"></i>
        </div>
        <div class="toast-message">${mensagem}</div>
    `;
    
    container.appendChild(toast);
    
    // Remover após 5 segundos
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 5000);
}

function configurarEventos() {
    // Botões principais
    document.getElementById('check-all-btn').addEventListener('click', verificarTodasQuestoes);
    document.getElementById('reset-btn').addEventListener('click', redefinirQuestionario);
    document.getElementById('toggle-mode-btn').addEventListener('click', alternarModoRevisao);
    document.getElementById('export-btn').addEventListener('click', exportarResultados);
    document.getElementById('filter-btn').addEventListener('click', toggleFiltro);
    
    // Navegação
    document.getElementById('prev-page-btn').addEventListener('click', () => mudarPagina(-1));
    document.getElementById('next-page-btn').addEventListener('click', () => mudarPagina(1));
    
    // Filtros
    document.getElementById('apply-filter-btn').addEventListener('click', aplicarFiltro);
    document.getElementById('clear-filter-btn').addEventListener('click', limparFiltro);
    document.getElementById('close-filter-btn').addEventListener('click', toggleFiltro);
    
    // Modal
    document.getElementById('close-results-btn').addEventListener('click', () => {
        document.getElementById('results-modal').style.display = 'none';
    });
    
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('results-modal').style.display = 'none';
        });
    });
    
    document.getElementById('review-wrong-btn').addEventListener('click', () => {
        document.getElementById('results-modal').style.display = 'none';
        filtrarErradas();
    });
    
    document.getElementById('restart-btn').addEventListener('click', () => {
        document.getElementById('results-modal').style.display = 'none';
        redefinirQuestionario();
    });
    
    // Footer buttons
    document.getElementById('download-gabarito').addEventListener('click', downloadGabarito);
    document.getElementById('print-btn').addEventListener('click', () => window.print());
    
    // Fechar modal ao clicar fora
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('results-modal');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function toggleFiltro() {
    const panel = document.getElementById('filter-panel');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

function aplicarFiltro() {
    const status = document.getElementById('filter-status').value;
    const numero = parseInt(document.getElementById('filter-number').value);
    const texto = document.getElementById('filter-text').value.toLowerCase();
    
    questoesFiltradas = questoesDB.filter(q => {
        const respostaUsuario = questoesRespondidas[q.numero];
        const respostaCorreta = gabaritoCompleto[q.numero];
        let statusMatch = true;
        
        if (status !== 'all') {
            if (status === 'correct') {
                statusMatch = respostaUsuario === respostaCorreta;
            } else if (status === 'wrong') {
                statusMatch = respostaUsuario && respostaUsuario !== respostaCorreta;
            } else if (status === 'unanswered') {
                statusMatch = !respostaUsuario;
            }
        }
        
        const numeroMatch = !numero || q.numero === numero;
        const textoMatch = !texto || q.texto.toLowerCase().includes(texto) || 
                          q.tema.toLowerCase().includes(texto);
        
        return statusMatch && numeroMatch && textoMatch;
    });
    
    filtroAtivo = true;
    questaoAtual = 1;
    carregarQuestoes();
    mostrarToast(`Filtro aplicado: ${questoesFiltradas.length} questões encontradas`, 'info');
}

function limparFiltro() {
    filtroAtivo = false;
    questoesFiltradas = [];
    document.getElementById('filter-status').value = 'all';
    document.getElementById('filter-number').value = '';
    document.getElementById('filter-text').value = '';
    questaoAtual = 1;
    carregarQuestoes();
    mostrarToast('Filtro removido', 'info');
}

function filtrarErradas() {
    questoesFiltradas = questoesDB.filter(q => {
        const respostaUsuario = questoesRespondidas[q.numero];
        const respostaCorreta = gabaritoCompleto[q.numero];
        return respostaUsuario && respostaUsuario !== respostaCorreta;
    });
    
    filtroAtivo = true;
    questaoAtual = 1;
    carregarQuestoes();
    mostrarToast(`Mostrando ${questoesFiltradas.length} questões erradas`, 'info');
}

function mudarPagina(direcao) {
    const totalQuestoes = filtroAtivo ? questoesFiltradas.length : 120;
    const totalPaginas = Math.ceil(totalQuestoes / questoesPorPagina);
    
    questaoAtual += direcao;
    
    if (questaoAtual < 1) questaoAtual = 1;
    if (questaoAtual > totalPaginas) questaoAtual = totalPaginas;
    
    carregarQuestoes();
}

function atualizarNavegacao() {
    const totalQuestoes = filtroAtivo ? questoesFiltradas.length : 120;
    const totalPaginas = Math.ceil(totalQuestoes / questoesPorPagina);
    
    document.getElementById('current-page').textContent = questaoAtual;
    document.getElementById('total-pages').textContent = totalPaginas;
    
    document.getElementById('prev-page-btn').disabled = questaoAtual === 1;
    document.getElementById('next-page-btn').disabled = questaoAtual === totalPaginas;
}

function exportarResultados() {
    const data = {
        timestamp: new Date().toISOString(),
        tempoInicio: tempoInicio,
        respostas: questoesRespondidas,
        estatisticas: {
            respondidas: Object.keys(questoesRespondidas).length,
            corretas: Object.keys(questoesRespondidas).filter(num => 
                questoesRespondidas[num] === gabaritoCompleto[num]
            ).length,
            desempenho: atualizarEstatisticas()
        }
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `anac-simulado-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    mostrarToast('Resultados exportados com sucesso!', 'success');
}

function downloadGabarito() {
    let gabaritoTexto = "GABARITO OFICIAL - ANAC 2023\n";
    gabaritoTexto += "=".repeat(50) + "\n\n";
    
    for (let i = 1; i <= 120; i++) {
        gabaritoTexto += `Questão ${i.toString().padStart(3, '0')}: ${gabaritoCompleto[i]}\n`;
    }
    
    const blob = new Blob([gabaritoTexto], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gabarito-anac-2023.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    mostrarToast('Gabarito baixado com sucesso!', 'success');
}