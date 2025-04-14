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
      nome: "Flexão Diamante",
      tipo: "musculacao",
      series: "3x12",
      gif: "gift/flexao_diamante.gif",
    },
    {
      nome: "Prancha",
      tipo: "abdomen",
      series: "3x30s",
      gif: "gift/prancha.gif",
    },
  ],
  quarta: [
    {
      nome: "Flexão com Toque no Ombro",
      tipo: "musculacao",
      series: "3x10 cada lado",
      gif: "gift/flexao_ombro.gif",
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
      nome: "Abdominal Bicicleta",
      tipo: "abdomen",
      series: "3x20",
      gif: "gift/bicicleta.gif",
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
  <div class="gif-cobertura"></div>
</div>

        </div>
      `;
    });
  }

  if (musculacao.length) {
    container.innerHTML += `<h2>Musculação</h2>`;
    musculacao.forEach((ex) => {
      container.innerHTML += `
        <div class="exercicio">
          <input type="checkbox" />
          <p><strong>${ex.nome}:</strong> ${ex.series}</p>
          <div class="gif-container">
  <img src="${ex.gif}" alt="${ex.nome}" />
  <div class="gif-cobertura"></div>
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

const dias = [
  "domingo",
  "segunda",
  "terca",
  "quarta",
  "quinta",
  "sexta",
  "sabado",
];
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
