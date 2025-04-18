// script.js

const exerciciosSemana = {
  segunda: [
    {
      nome: "Supino inclinado",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/supino_inclinado.gif",
    },
    {
      nome: "Cruxifixo",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/crucifixo.gif",
    },
    {
      nome: "Supino reto",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/supino_reto.gif",
    },
    {
      nome: "CrossOver",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/crossover.webp",
    },
    {
      nome: "Desenvolvimento na máquina",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/desenvolvimento-maquina.gif",
    },
    {
      nome: "Elevação frontal polia",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/elevacao-frontal.gif",
    },
    {
      nome: "Tripceps corda",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/tripceps-corda.gif",
    },
    {
      nome: "Mergulho maquina",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/mergulho-maquina.gif",
    },
    {
      nome: "Abdominal Crunch",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/crunch_basic.gif",
    },
    {
      nome: "Prancha abdominal",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/prancha.webp",
    },
    {
      nome: "Abdominal invertido",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/abdominal_infra_solo.gif",
    },
    {
      nome: "Prancha lateral oblíquo",
      tipo: "abdomen",
      series: "3x side",
      gif: "gift/prancha-lateral.gif",
    },
    {
      nome: "Elevação pélvica",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/original.webp",
    },
    {
      nome: "cat cow pose",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/cat-cow.gif",
    },
  ],
  terca: [
    {
      nome: "Puxada aberta",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/puxada-aberta.webp",
    },
    {
      nome: "Puxada Triângulo",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/puxada-triangulo.webp",
    },
    {
      nome: "Remada baixa",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/remada-baixa.gif",
    },
    {
      nome: "Remada curvada",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/Remada-curvada.webp",
    },
    {
      nome: "Crucifixo invertido",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/crucifixo-invertido.gif",
    },
    {
      nome: "Rosca alternada sentada",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/rosca-alternada-sentado.gif",
    },
    {
      nome: "Rosca direta polia",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/rosca-direta-polia.gif",
    },
    {
      nome: "Rosca martelo",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/Rosca-martelo.webp",
    },
    {
      nome: "Elevação das pernas",
      tipo: "abdomen",
      series: "4x12",
      gif: "gift/elevacao-pernas.webp",
    },
    {
      nome: "Russian twist",
      tipo: "abdomen",
      series: "4x12",
      gif: "gift/russian-twist.webp",
    },
    {
      nome: "Abdominal bicicleta",
      tipo: "abdomen",
      series: "4x12",
      gif: "gift/abdominal-bicicleta.gif",
    },
    {
      nome: "Prancha com toque no ombro",
      tipo: "abdomen",
      series: "4x12",
      gif: "gift/Prancha-toque-ombro.gif",
    },
    {
      nome: "Butterfly Yoga Flaps",
      tipo: "abdomen",
      series: "4x12",
      gif: "gift/butterfly-yoga-flaps.gif",
    },
    {
      nome: "Frog Crunch",
      tipo: "abdomen",
      series: "4x12",
      gif: "gift/frog-crunch.gif",
    },
  ],
  quarta: [
    {
      nome: " Agachamento no Smith",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/agachamento-smith.webp",
    },
    {
      nome: "Leg Press",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/leg-press.gif",
    },
    {
      nome: "Cadeira Extensora",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/cadeira-extensora.gif",
    },
    {
      nome: "Mesa Flexora",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/mesa-flexora.gif",
    },
    {
      nome: "Afundo",
      tipo: "musculacao",
      series: "4x12 cada lado",
      gif: "gift/afundo.webp",
    },
    {
      nome: "Agachamento búlgaro",
      tipo: "musculacao",
      series: "4x12 cada lado",
      gif: "gift/bulgaro.webp",
    },
    {
      nome: "Levantamento terra",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/Levantamento-terra.webp",
    },
    {
      nome: "Elevação de panturrilhas sentado",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/elevacao-panturrilhas-sentado.gif",
    },

    {
      nome: "Adução de quadril na máquina",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/audutora.webp",
    },
    {
      nome: "Flexão de braços",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/flexao-de-bracos.webp",
    },
    {
      nome: "Prancha lateral com elevação de perna",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/prancha-lateral-com-elevacao-de-perna.webp",
    },
    {
      nome: "Hollow Rock",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/hollow-rock.webp",
    },
    {
      nome: "Toque de torção de caranguejo",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/caranguejo.gif",
    },
    {
      nome: "Alongamento de sapo",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/Alongamento-sapo.gif",
    },
    {
      nome: "Ponte de abdução das pernas",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/ponte-com-abducao-de-pernas.webp",
    },
  ],
  quinta: [
    {
      nome: "Flexão com os Pés Elevados",
      tipo: "musculacao",
      series: "3x10",
      gif: "gift/flexao_pe_elevado.gif",
    },
    {
      nome: "Abdominal Invertido",
      tipo: "abdomen",
      series: "3x15",
      gif: "gift/invertido.gif",
    },
  ],
  sexta: [
    {
      nome: "Flexão Explosiva",
      tipo: "musculacao",
      series: "3x8",
      gif: "gift/flexao_explosiva.gif",
    },
    {
      nome: "Abdominal Canivete",
      tipo: "abdomen",
      series: "3x12",
      gif: "gift/canivete.gif",
    },
  ],
  sabado: [
    {
      nome: "Flexão Arqueada",
      tipo: "musculacao",
      series: "3x10 cada lado",
      gif: "gift/flexao_arqueada.gif",
    },
    {
      nome: "Prancha com Toque de Ombro",
      tipo: "abdomen",
      series: "3x20",
      gif: "gift/prancha_ombro.gif",
    },
  ],
};

function mostrarDia(dia) {
  const container = document.getElementById("conteudo-dia");
  const dados = exerciciosSemana[dia];

  const abdomen = dados.filter((ex) => ex.tipo === "abdomen");
  const musculacao = dados.filter((ex) => ex.tipo === "musculacao");

  container.innerHTML = "";

  if (abdomen.length) {
    container.innerHTML += `<h2>Abdômen & Elevação</h2>`;
    abdomen.forEach((ex) => {
      container.innerHTML += `
        <div class="exercicio">
          <input type="checkbox" />
          <p><strong>${ex.nome}:</strong> ${ex.series}</p>
          <div class="gif-container">
  <img src="${ex.gif}" alt="${ex.nome}" />
</div>

        </div>
      `;
    });
  }
  const gruposMuscularesSemana = {
    segunda: "(Push): Peito, Ombro e Tríceps",
    terca: "(Pull): Costas e Bíceps",
    quarta: "Pernas-Completo",
    quinta: "(Upper): Superiores-completo",
    sexta: "(Lower): Inferiores-completo",
    sabado: "(Full): Total",
  };

  if (musculacao.length) {
    const grupoMuscular = gruposMuscularesSemana[dia] || "";
    container.innerHTML += `<h2>Musculação: ${grupoMuscular}</h2>`;

    musculacao.forEach((ex) => {
      container.innerHTML += `
        <div class="exercicio">
          <input type="checkbox" />
          <p><strong>${ex.nome}:</strong> ${ex.series}</p>
          <div class="gif-container">
  <img src="${ex.gif}" alt="${ex.nome}" />
</div>

        </div>
      `;
    });
  }

  document.querySelectorAll(".menu button").forEach((btn) => {
    btn.classList.remove("ativo");
  });
  const btnAtivo = document.querySelector(`.menu button[onclick*="${dia}"]`);
  if (btnAtivo) btnAtivo.classList.add("ativo");
}

const dias = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta"];
const hoje = new Date().getDay();
const diaHoje = dias[hoje] === "domingo" ? "segunda" : dias[hoje];
mostrarDia(diaHoje);

// Modo escuro
const botaoModoEscuro = document.getElementById("toggle-dark-mode");
botaoModoEscuro.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Ativar fundo verde ao marcar checkbox
document
  .querySelectorAll(".exercicio input[type='checkbox']")
  .forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const container = this.closest(".exercicio");
      if (this.checked) {
        container.classList.add("checked");
      } else {
        container.classList.remove("checked");
      }
    });
  });

function atualizarProgressoDia(dia) {
  const checkboxes = document.querySelectorAll(
    "#conteudo-dia input[type='checkbox']"
  );
  const marcados = Array.from(checkboxes).filter((cb) => cb.checked).length;
  const total = checkboxes.length;

  const porcentagem = total ? Math.round((marcados / total) * 100) : 0;

  const barra = document.getElementById(`barra-${dia}`);
  if (barra) {
    barra.style.setProperty("--before-width", `${porcentagem}%`);

    const spanPorcentagem = barra.querySelector(".porcentagem");
    if (spanPorcentagem) {
      spanPorcentagem.textContent = `${porcentagem}%`;
    }
  }

  const dataHoje = new Date().toISOString().split("T")[0];
  let historico = JSON.parse(localStorage.getItem("historicoTreino")) || [];

  historico.push({ data: dataHoje, dia, porcentagem });
  historico = historico.slice(-150); // Mantém apenas os últimos 150 registros
  localStorage.setItem("historicoTreino", JSON.stringify(historico));

  atualizarSemanasEMeses();
}

// Event listener para mudanças nos checkboxes
document.addEventListener("change", () => {
  const btnAtivo = document.querySelector(".menu button.ativo");
  if (btnAtivo) {
    const dia = btnAtivo.getAttribute("onclick")?.match(/'([^']+)'/)?.[1];
    if (dia) atualizarProgressoDia(dia);
  }
});

// Atualiza as barras de progresso das semanas e meses
function atualizarSemanasEMeses() {
  const historico = JSON.parse(localStorage.getItem("historicoTreino")) || [];
  const hoje = new Date();

  // SEMANAS - cálculo preciso por período
  const semanas = [
    { inicio: 0, fim: 6, total: 0, count: 0 }, // Semana 1: últimos 7 dias (0-6 dias atrás)
    { inicio: 7, fim: 13, total: 0, count: 0 }, // Semana 2: 7-13 dias atrás
    { inicio: 14, fim: 20, total: 0, count: 0 }, // Semana 3: 14-20 dias atrás
    { inicio: 21, fim: 27, total: 0, count: 0 }, // Semana 4: 21-27 dias atrás
  ];

  // MESES - cálculo por mês real
  const meses = {};
  const mesesOrdenados = [];

  historico.forEach(({ data, porcentagem }) => {
    const dataTreino = new Date(data);
    const diasPassados = Math.floor(
      (hoje - dataTreino) / (1000 * 60 * 60 * 24)
    );

    // Preenche semanas
    semanas.forEach((semana) => {
      if (diasPassados >= semana.inicio && diasPassados <= semana.fim) {
        semana.total += porcentagem;
        semana.count++;
      }
    });

    // Preenche meses (últimos 5 meses)
    if (diasPassados < 150) {
      // ~5 meses
      const chaveMes = `${dataTreino.getFullYear()}-${dataTreino.getMonth()}`;
      if (!meses[chaveMes]) {
        meses[chaveMes] = {
          total: 0,
          count: 0,
          nome: dataTreino.toLocaleString("pt-BR", { month: "long" }),
          diasPassados: diasPassados, // Para ordenação
        };
        mesesOrdenados.push(chaveMes);
      }
      meses[chaveMes].total += porcentagem;
      meses[chaveMes].count++;
    }
  });

  // Ordena meses do MAIS RECENTE para o MAIS ANTIGO
  mesesOrdenados.sort((a, b) => meses[a].diasPassados - meses[b].diasPassados);

  // ATUALIZA SEMANAS NA INTERFACE
  semanas.forEach((semana, index) => {
    const barra = document.getElementById(`semana-${index + 1}`);
    if (!barra) return;

    // Só mostra progresso se houver 3 ou mais registros
    const media =
      semana.count >= 3 ? Math.round(semana.total / semana.count) : 0;
    barra.style.setProperty("--before-width", `${media}%`);

    const span = barra.querySelector(".porcentagem");
    if (span) {
      span.textContent = semana.count >= 3 ? `${media}%` : "0%";
    }
  });

  // ATUALIZA MESES NA INTERFACE (apenas 5 mais recentes)
  for (let i = 0; i < 5; i++) {
    const barra = document.getElementById(`mes-${i + 1}`);
    if (!barra) continue;

    const mesData = mesesOrdenados[i];
    const mesInfo = mesData ? meses[mesData] : null;

    // Nome do mês
    const spanNome = barra.querySelector(".nome");
    if (spanNome) {
      spanNome.textContent = mesInfo?.nome || getNomeMes(i);
    }

    // Porcentagem
    const spanPerc = barra.querySelector(".porcentagem");
    const media =
      mesInfo?.count >= 3 ? Math.round(mesInfo.total / mesInfo.count) : 0;
    barra.style.setProperty("--before-width", `${media}%`);

    if (spanPerc) {
      spanPerc.textContent = mesInfo?.count >= 3 ? `${media}%` : "0%";
    }
  }
}

// Helper function para obter nome do mês com offset
function getNomeMes(offset) {
  const data = new Date();
  data.setMonth(data.getMonth() - offset);
  return data.toLocaleString("pt-BR", { month: "long" });
}

// Inicializa ao carregar a página com 0% em todas as barras
document.addEventListener("DOMContentLoaded", () => {
  // Força todas as barras a 0% inicialmente
  for (let i = 1; i <= 4; i++) {
    const barra = document.getElementById(`semana-${i}`);
    if (barra) {
      barra.style.setProperty("--before-width", "0%");
      const span = barra.querySelector(".porcentagem");
      if (span) span.textContent = "0%";
    }
  }

  for (let i = 1; i <= 5; i++) {
    const barra = document.getElementById(`mes-${i}`);
    if (barra) {
      barra.style.setProperty("--before-width", "0%");
      const spanNome = barra.querySelector(".nome");
      const spanPerc = barra.querySelector(".porcentagem");
      if (spanNome) spanNome.textContent = getNomeMes(i - 1);
      if (spanPerc) spanPerc.textContent = "0%";
    }
  }

  // Limpa o histórico se necessário para testes
  // Comente a linha abaixo após verificar que o problema foi resolvido
  // localStorage.removeItem("historicoTreino");

  atualizarSemanasEMeses();
});

//botao semanal e mensal
// Alternar entre progresso semanal e mensal
document.addEventListener("DOMContentLoaded", () => {
  const semanal = document.getElementById("progresso-semanal");
  const mensal = document.getElementById("progresso-mensal");

  const botaoSemanal = semanal.querySelector(".alternar-progresso");
  const botaoMensal = mensal.querySelector(".alternar-progresso");

  botaoSemanal.addEventListener("click", () => {
    semanal.style.display = "none";
    mensal.style.display = "block";
  });

  botaoMensal.addEventListener("click", () => {
    mensal.style.display = "none";
    semanal.style.display = "block";
  });
});

//botao progresso
const btnProgresso = document.getElementById("abrir-progresso");
const aside = document.querySelector("aside");
const layout = document.querySelector(".layout");

btnProgresso.addEventListener("click", () => {
  aside.classList.toggle("oculto");
  layout.classList.toggle("sozinho");
});

//botao flutuante
const botaoFlutuante = document.getElementById("botao-flutuante");

botaoFlutuante.addEventListener("click", () => {
  aside.classList.toggle("mostrar");
});

// Drag para mobile
let offsetX, offsetY;

botaoFlutuante.addEventListener("mousedown", (e) => {
  offsetX = e.clientX - botaoFlutuante.getBoundingClientRect().left;
  offsetY = e.clientY - botaoFlutuante.getBoundingClientRect().top;

  function mouseMoveHandler(e) {
    botaoFlutuante.style.left = `${e.clientX - offsetX}px`;
    botaoFlutuante.style.top = `${e.clientY - offsetY}px`;
  }

  function mouseUpHandler() {
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  }

  document.addEventListener("mousemove", mouseMoveHandler);
  document.addEventListener("mouseup", mouseUpHandler);
});
