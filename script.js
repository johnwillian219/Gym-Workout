// Objetos com os exercícios semanais para homens e mulheres
const exerciciosSemana = {
  segunda: [
    {
      nome: "Agachamento búlgaro",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/bulgaro.webp",
    },
    {
      nome: "Leg Press Horizontal",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/leg-press-horizontal.gif",
    },
    {
      nome: "Cadeira Extensora",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/cadeira-extensora.gif",
    },
    {
      nome: "Levantamento terra",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/Levantamento-terra.webp",
    },
    {
      nome: "Levantamento stiff",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/levantamento-stiff.gif",
    },
    {
      nome: "Mesa Flexora",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/mesa-flexora.gif",
    },
    {
      nome: "Elevação de panturrilhas",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/elevacao-panturrilhas-sentado.gif",
    },
    {
      nome: "Passada andando",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/passada-andando.gif",
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
      nome: "Prancha lateral",
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
      nome: "Cat cow pose",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/cat-cow.gif",
    },
  ],
  terca: [
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
      nome: "Desenvolvimento",
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
      nome: "Elevação das pernas",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/elevacao-pernas.webp",
    },
    {
      nome: "Russian twist",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/russian-twist.webp",
    },
    {
      nome: "Abdominal bicicleta",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/abdominal-bicicleta.gif",
    },
    {
      nome: "Prancha com toque no ombro",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/Prancha-toque-ombro.gif",
    },
    {
      nome: "Butterfly Yoga Flaps",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/butterfly-yoga-flaps.gif",
    },
    {
      nome: "Frog Crunch",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/frog-crunch.gif",
    },
  ],
  quarta: [
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
      nome: "Crucifixo invertido",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/crucifixo-invertido.gif",
    },
    {
      nome: "Rosca alternada",
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
      nome: "Remada curvada",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/Remada-curvada.webp",
    },
    {
      nome: "Flexão de braços",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/flexao-de-bracos.webp",
    },
    {
      nome: "Prancha lateral perna",
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
      nome: "Toque de caranguejo",
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
      nome: "Ponte de abdução",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/ponte-com-abducao-de-pernas.webp",
    },
  ],
  quinta: [
    {
      nome: "Cadeira Extensora",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/cadeira-extensora.gif",
    },
    {
      nome: "Agachamento no Smith",
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
      nome: "Afundo",
      tipo: "musculacao",
      series: "4x12 cada lado",
      gif: "gift/afundo.webp",
    },
    {
      nome: "Adução de quadril",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/audutora.webp",
    },
    {
      nome: "Mesa Flexora",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/mesa-flexora.gif",
    },
    {
      nome: "Elevação de panturrilhas",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/elevacao-panturrilhas-sentado.gif",
    },
    {
      nome: "Prancha com flexão",
      tipo: "abdomen",
      series: "4 x 60s",
      gif: "gift/prancha-com-flexao.webp",
    },
    {
      nome: "Flexão de braços",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/flexao-de-bracos.webp",
    },
    {
      nome: "Abdominal vertical",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/abdominal-vertical.webp",
    },
    {
      nome: "Polichinelos",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/polichinelos.webp",
    },
    {
      nome: "Chute lateral",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/chute-lateral.gif",
    },
    {
      nome: "Alongamento barco",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/alongamento-barco.gif",
    },
  ],
  sexta: [
    {
      nome: "Remada unilateral",
      tipo: "musculacao",
      series: "4x20",
      gif: "gift/remada-unilateral.webp",
    },
    {
      nome: "Fly inverso",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/fly-inverso.webp",
    },
    {
      nome: "Cruxifixo",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/crucifixo.gif",
    },
    {
      nome: "Supino vertical",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/supino-vertical.gif",
    },
    {
      nome: "Desenvolvimento",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/desenvolvimento.gif",
    },
    {
      nome: "Elevação lateral polia",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/elevacao-lateral-na-polia.gif",
    },
    {
      nome: "Rosca francesa",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/rosca-francesa.gif",
    },
    {
      nome: "Rosca Z Supinada",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/rosca-z-supinada.gif",
    },
    {
      nome: "Abdominal em V",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/abdominal-em-v.gif",
    },
    {
      nome: "Abdominal vertical",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/abdominal-invertido-vertical.gif",
    },
    {
      nome: "Burpee",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/burpee.webp",
    },
    {
      nome: "Abdominal reverso",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/abdominal-reverso.webp",
    },
    {
      nome: "Starfish Crunch",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/starfish-crunch.gif",
    },
    {
      nome: "Alongamento abdominal",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/alongamento-abidominal.gif",
    },
  ],
  sabado: [
    {
      nome: "Remada curvada",
      tipo: "musculacao",
      series: "4x15",
      gif: "gift/remada-curvada-h.webp",
    },
    {
      nome: "Supino reto",
      tipo: "musculacao",
      series: "4x15",
      gif: "gift/supino-reto-h.webp",
    },
    {
      nome: "Extensão de tríceps",
      tipo: "musculacao",
      series: "4x15",
      gif: "gift/tripceps.webp",
    },
    {
      nome: "Rosca martelo",
      tipo: "musculacao",
      series: "4x15",
      gif: "gift/Rosca-martelo.webp",
    },
    {
      nome: "Desenvolvimento Arnold",
      tipo: "musculacao",
      series: "4x15",
      gif: "gift/desenvolvimento-arnold.webp",
    },
    {
      nome: "Agachamento",
      tipo: "musculacao",
      series: "4x15",
      gif: "gift/agachamento-h.webp",
    },
    {
      nome: "Afundo",
      tipo: "musculacao",
      series: "4x15",
      gif: "gift/afundo.webp",
    },
    {
      nome: "Remada renegada",
      tipo: "musculacao",
      series: "4x15",
      gif: "gift/remada-renegada.gif",
    },
    {
      nome: "Panturrilha em pé",
      tipo: "musculacao",
      series: "4x15",
      gif: "gift/panturrilha-h.gif",
    },
    {
      nome: "Abdominal Crunch",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/crunch_basic.gif",
    },
    {
      nome: "Flexão de braços",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/flexao-de-bracos.webp",
    },
    {
      nome: "Ponte de abdução",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/ponte-com-abducao-de-pernas.webp",
    },
    {
      nome: "Toque de caranguejo",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/caranguejo.gif",
    },
    {
      nome: "Frog Crunch",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/frog-crunch.gif",
    },
    {
      nome: "Prancha abdominal",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/prancha.webp",
    },
  ],
};

const exerciciosSemanaFeminino = {
  segunda: [
    {
      nome: "Cadeira extensora",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-cadeira-extensora.gif",
    },
    {
      nome: "Agachamento livre",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-agachamento-com-barra.webp",
    },
    {
      nome: "Leg Press",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-leg-press.gif",
    },
    {
      nome: "Afundo",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-afundo.gif",
    },
    {
      nome: "Abdução de quadril na máquina",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-abducao-de-quadril-maquina.webp",
    },

    {
      nome: "Mesa Flexora",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-mesa-flexora.gif",
    },
    {
      nome: "Panturrilhas",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-panturrilhas.gif",
    },

    {
      nome: "Coice de glúteo",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/female-coice.webp",
    },
    {
      nome: "Ponte de abdução",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/ponte-com-abducao-de-pernas.webp",
    },
    {
      nome: "Elevação das pernas",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/elevacao-pernas.webp",
    },
    {
      nome: "Abdominal bicicleta",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/abdominal-bicicleta.gif",
    },
    {
      nome: "Alongamento barco",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/alongamento-barco.gif",
    },
    {
      nome: "Polichinelos",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/polichinelos.webp",
    },
  ],
  terca: [
    {
      nome: "Supino reto",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-supino-reto.webp",
    },
    {
      nome: "Supino inclinado",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/supino_inclinado.gif",
    },
    {
      nome: "Crucifixo",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-cruxifixo.gif",
    },
    {
      nome: "Desenvolvimento",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/desenvolvimento-maquina.gif",
    },
    {
      nome: "Elevação frontal",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-elevacao-frontal.gif",
    },
    {
      nome: "Elevação lateral polia",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/elevacao-lateral-na-polia.gif",
    },
    {
      nome: "Tripceps na polia",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-tripceps-corda.webp",
    },
    {
      nome: "Mergulho maquina",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-mergulho-maquina.webp",
    },

    {
      nome: "Coice para glúteos",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/female-coice-para-gluteos.webp",
    },
    {
      nome: "Rotação para trás ajoelhada",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/female-rotacao-para-atras-ajoelhada.gif",
    },
    {
      nome: "Bird Dog",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/female-bird-dog.webp",
    },
    {
      nome: "Prancha abdominal",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/female-prancha.jpg",
    },
    {
      nome: "Prancha lateral",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/female-prancha-lateral.jpg",
    },
    {
      nome: "Prone cobra",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/female-prone-cobra.gif",
    },
  ],
  quarta: [
    {
      nome: "Elevação Pélvica",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-elevacao-pelvica.gif",
    },
    {
      nome: "Agachamento búlgaro",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-agachamento-bulgaro.gif",
    },

    {
      nome: "Levantamento terra Sumo",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-levantamento-terra-sumo.webp",
    },
    {
      nome: "Agachamento sumô",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-agachamento-com-barra.webp",
    },
    {
      nome: "Coice na polia",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-coice-na-polia.webp",
    },
    {
      nome: "Stiff",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-stiff.gif",
    },
    {
      nome: "Tríceps apoiado no banco",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/female-triceps-no-banco.webp",
    },
    {
      nome: "Agachamento",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/female-agachamento.gif",
    },
    {
      nome: "Agachamento com pistola",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/female-agachamento-com-pistola.gif",
    },
    {
      nome: "Agachamento do sapo",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/female-agachamento-do-sapo.gif",
    },
    {
      nome: "Arm crunch",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/female-arm-crunch.gif",
    },
    {
      nome: "Abdominais tipo canivete",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/female-abdominais-tipo-canivete.gif",
    },
  ],
  quinta: [
    {
      nome: "Puxada aberta",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/puxada-aberta.webp",
    },
    {
      nome: "Remada unilateral",
      tipo: "musculacao",
      series: "4x20",
      gif: "gift/female-remada-unilateral.gif",
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
      nome: "Bíceps maquina apoiada",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-bíceps-maquina-apoiada.webp",
    },
    {
      nome: "Rosca direta com barra W",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-rosca-direta-com-barra-w.gif",
    },
    {
      nome: "Abdominal",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-abdominais.gif",
    },

    {
      nome: "Puxada em pé",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/female-puxada-em-pe.webp",
    },
    {
      nome: "Alpinista",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/female-ALPINISTA.gif",
    },
    {
      nome: "Abdominal bicicleta",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/abdominal-bicicleta.gif",
    },
    {
      nome: "Prancha com pernas alternadas",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/female-prancha-com-pernas-alternadas.gif",
    },
    {
      nome: "Alongamento de isquiotibiais",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/female-alongamento-de-isquiotibiais.gif",
    },
    {
      nome: "Polichinelos",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/polichinelos.webp",
    },
  ],
  sexta: [
    {
      nome: "Agachamento sumô",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-agachamento-com-barra.webp",
    },
    {
      nome: "Leg Press",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-leg-press.gif",
    },
    {
      nome: "Cadeira extensora",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-cadeira-extensora.gif",
    },
    {
      nome: "Mesa Flexora",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-mesa-flexora.gif",
    },
    {
      nome: "Stiff",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-stiff.gif",
    },

    {
      nome: "Afundo",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-afundo.gif",
    },
    {
      nome: "Abdução de quadril na máquina",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-abducao-de-quadril-maquina.webp",
    },
    {
      nome: "Panturrilhas",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-panturrilhas.gif",
    },
    {
      nome: "Elevação pélvica",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/female-elevacao-pelvica-halteres.gif",
    },
    {
      nome: "Box jumps",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/Box jumps.webp",
    },
    {
      nome: "Afundo",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/female-afundo-livre.webp",
    },
    {
      nome: "Burpees",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/Burpees.webp",
    },
    {
      nome: "Pranchas",
      tipo: "abdomen",
      series: "4x60s",
      gif: "gift/Pranchas.gif",
    },
    {
      nome: "Coice de glúteo",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/female-coice.webp",
    },
  ],
  sabado: [
    {
      nome: "Ponte de abdução",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/ponte-com-abducao-de-pernas.webp",
    },
    {
      nome: "Prone cobra",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/female-prone-cobra.gif",
    },
    {
      nome: "Puxada em pé",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/female-puxada-em-pe.webp",
    },
    {
      nome: "Alongamento de isquiotibiais",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/female-alongamento-de-isquiotibiais.gif",
    },
    {
      nome: "Coice de glúteo",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/female-coice.webp",
    },
    {
      nome: "Elevação das pernas",
      tipo: "abdomen",
      series: "4x20",
      gif: "gift/elevacao-pernas.webp",
    },
    {
      nome: "Remada alta",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-remada-alta.webp",
    },
    {
      nome: "Rosca alternada",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/rosca-alternada-sentado.gif",
    },
    {
      nome: "Elevação frontal",
      tipo: "musculacao",
      series: "4x12",
      gif: "gift/female-elevacao-frontal.gif",
    },
    {
      nome: "Box jumps",
      tipo: "musculacao",
      series: "4x20",
      gif: "gift/Box jumps.webp",
    },
    {
      nome: "Remada unilateral",
      tipo: "musculacao",
      series: "4x20",
      gif: "gift/remada-unilateral.webp",
    },
    {
      nome: "Polichinelos",
      tipo: "musculacao",
      series: "4x20",
      gif: "gift/polichinelos.webp",
    },
  ],
};

// Objetos com os grupos musculares para homens e mulheres
const gruposMuscularesSemana = {
  segunda: "Pernas-Completo",
  terca: "(Push): Peito, Ombro e Tríceps",
  quarta: "(Pull): Costas e Bíceps",
  quinta: "(Lower): Inferiores-completo",
  sexta: "(Upper): Superiores-completo",
  sabado: "(Full): Total",
};

const gruposMuscularesSemanaFeminino = {
  segunda: "Pernas-Completo",
  terca: "(Push): Peito, Ombro e Tríceps",
  quarta: "Gluteos e Posteriores",
  quinta: "(Pull): Costas e Bíceps",
  sexta: "(Lower): Inferiores-completo",
  sabado: "(Full): Total",
};

const dias = [
  "domingo",
  "segunda",
  "terca",
  "quarta",
  "quinta",
  "sexta",
  "sabado",
];

let generoAtivo = localStorage.getItem("generoAtivo") || "masculino";

function setGenero(genero) {
  generoAtivo = genero;
  localStorage.setItem("generoAtivo", genero);
  atualizarBotoesGenero();
  const diaAtivo =
    document
      .querySelector(".menu button.ativo")
      ?.getAttribute("onclick")
      ?.match(/'([^']+)'/)?.[1] || "segunda";
  mostrarDia(diaAtivo);
}

function atualizarBotoesGenero() {
  document.querySelectorAll(".man, .women").forEach((btn) => {
    btn.classList.remove("ativo");
    if (btn.classList.contains(generoAtivo === "masculino" ? "man" : "women")) {
      btn.classList.add("ativo");
    }
  });
}

function mostrarDia(dia) {
  const container = document.getElementById("conteudo-dia");
  if (!container)
    return console.error("Elemento '#conteudo-dia' não encontrado");

  console.log(`Mostrando exercícios para ${dia} (${generoAtivo})`);
  const dados =
    (generoAtivo === "masculino" ? exerciciosSemana : exerciciosSemanaFeminino)[
      dia
    ] || [];
  const abdomen = dados.filter((ex) => ex.tipo === "abdomen");
  const musculacao = dados.filter((ex) => ex.tipo === "musculacao");

  container.innerHTML = "";

  if (abdomen.length) {
    container.innerHTML += `<h2>Abdômen & Elevação</h2>`;
    abdomen.forEach((ex, index) => {
      const id = `${generoAtivo}-${dia}-abdomen-${index}`;
      container.innerHTML += `
        <div class="exercicio">
          <input type="checkbox" id="${id}" />
          <p><strong>${ex.nome}:</strong> ${ex.series}</p>
          <div class="gif-container">
            <img src="${ex.gif}" alt="${ex.nome}" />
          </div>
        </div>
      `;
    });
  }

  if (musculacao.length) {
    const grupoMuscular =
      generoAtivo === "masculino"
        ? gruposMuscularesSemana[dia]
        : gruposMuscularesSemanaFeminino[dia] || "";
    container.innerHTML += `<h2>Musculação: ${grupoMuscular}</h2>`;
    musculacao.forEach((ex, index) => {
      const id = `${generoAtivo}-${dia}-musculacao-${index}`;
      container.innerHTML += `
        <div class="exercicio">
          <input type="checkbox" id="${id}" />
          <p><strong>${ex.nome}:</strong> ${ex.series}</p>
          <div class="gif-container">
            <img src="${ex.gif}" alt="${ex.nome}" />
          </div>
        </div>
      `;
    });
  }

  carregarCheckboxes();
  atualizarEstadoExercicios();
  atualizarMenuAtivo(dia);
  atualizarProgressoDia(dia);

  document
    .querySelectorAll("#conteudo-dia input[type='checkbox']")
    .forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        salvarCheckboxes();
        atualizarEstadoExercicios();
        atualizarProgressoDia(dia);
      });
    });
}

function atualizarEstadoExercicios() {
  document
    .querySelectorAll(".exercicio input[type='checkbox']")
    .forEach((checkbox) => {
      const container = checkbox.closest(".exercicio");
      container.classList.toggle("checked", checkbox.checked);
    });
}

function atualizarMenuAtivo(dia) {
  document.querySelectorAll(".menu button").forEach((btn) => {
    btn.classList.remove("ativo");
  });
  const btnAtivo = document.querySelector(
    `.menu button[onclick="mostrarDia('${dia}')"]`
  );
  if (btnAtivo) btnAtivo.classList.add("ativo");
}

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
    if (spanPorcentagem) spanPorcentagem.textContent = `${porcentagem}%`;
  }

  salvarProgressoDia(dia, porcentagem);
  atualizarSemanasEMeses();
}

function salvarProgressoDia(dia, porcentagem) {
  const dataHoje = new Date().toISOString().split("T")[0];
  let historico = JSON.parse(
    localStorage.getItem(`historicoTreino-${generoAtivo}`) || "[]"
  );

  historico = historico.filter(
    (registro) => !(registro.data === dataHoje && registro.dia === dia)
  );
  historico.push({ data: dataHoje, dia, porcentagem });
  historico = historico.slice(-150);
  localStorage.setItem(
    `historicoTreino-${generoAtivo}`,
    JSON.stringify(historico)
  );
}

function atualizarSemanasEMeses() {
  const historico = JSON.parse(
    localStorage.getItem(`historicoTreino-${generoAtivo}`) || "[]"
  );
  const hoje = new Date();
  const anoAtual = hoje.getFullYear();

  const semanas = Array.from({ length: 10 }, (_, i) => ({
    inicio: i * 7,
    fim: i * 7 + 6,
    total: 0,
    count: 0,
  }));

  const meses = Array.from({ length: 12 }, (_, i) => ({
    chave: `${anoAtual}-${i}`,
    total: 0,
    count: 0,
    nome: new Date(anoAtual, i)
      .toLocaleString("pt-BR", { month: "long" })
      .replace(/^\w/, (c) => c.toUpperCase()),
  }));

  const registrosPorDia = {};
  historico.forEach(({ data, dia, porcentagem }) => {
    const chave = `${data}-${dia}`;
    if (
      !registrosPorDia[chave] ||
      registrosPorDia[chave].porcentagem < porcentagem
    ) {
      registrosPorDia[chave] = { data, dia, porcentagem };
    }
  });

  Object.values(registrosPorDia).forEach(({ data, porcentagem }) => {
    const dataTreino = new Date(data);
    const diasPassados = Math.floor(
      (hoje - dataTreino) / (1000 * 60 * 60 * 24)
    );

    semanas.forEach((semana) => {
      if (diasPassados >= semana.inicio && diasPassados <= semana.fim) {
        semana.total += porcentagem;
        semana.count++;
      }
    });

    const chaveMes = `${dataTreino.getFullYear()}-${dataTreino.getMonth()}`;
    const mes = meses.find((m) => m.chave === chaveMes);
    if (mes) {
      mes.total += porcentagem;
      mes.count++;
    }
  });

  semanas.forEach((semana, i) => {
    const barra = document.getElementById(`semana-${i + 1}`);
    if (barra) {
      const media =
        semana.count >= 3 ? Math.round(semana.total / semana.count) : 0;
      barra.style.setProperty("--before-width", `${media}%`);
      const span = barra.querySelector(".porcentagem");
      if (span) span.textContent = semana.count >= 3 ? `${media}%` : "0%";
    }
  });

  meses.forEach((mes, i) => {
    const barra = document.getElementById(`mes-${i + 1}`);
    if (barra) {
      const media = mes.count >= 3 ? Math.round(mes.total / mes.count) : 0;
      barra.style.setProperty("--before-width", `${media}%`);
      const spanNome = barra.querySelector(".nome");
      const spanPerc = barra.querySelector(".porcentagem");
      if (spanNome) spanNome.textContent = mes.nome;
      if (spanPerc) spanPerc.textContent = mes.count >= 3 ? `${media}%` : "0%";
    }
  });
}

function salvarCheckboxes() {
  const estado = {};
  document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    estado[checkbox.id] = checkbox.checked;
  });
  localStorage.setItem(
    `checkboxesEstado-${generoAtivo}`,
    JSON.stringify(estado)
  );
}

function carregarCheckboxes() {
  const estado = JSON.parse(
    localStorage.getItem(`checkboxesEstado-${generoAtivo}`) || "{}"
  );
  document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    if (estado[checkbox.id] !== undefined) {
      checkbox.checked = estado[checkbox.id];
    }
  });
}

function mostrarModal(tipo, callback) {
  const modal = document.getElementById("modal-confirmacao");
  const modalMensagem = document.getElementById("modal-mensagem");
  const modalSim = document.getElementById("modal-sim");
  const modalNao = document.getElementById("modal-nao");
  const modalCancelar = document.getElementById("modal-cancelar");

  if (!modal || !modalMensagem || !modalSim || !modalNao || !modalCancelar) {
    console.error("Elementos do modal não encontrados");
    return;
  }

  const mensagens = {
    dias: "Deseja reiniciar o seu progresso diário?",
    semanas: "Deseja reiniciar o seu progresso semanal?",
    meses: "Deseja reiniciar o seu progresso mensal?",
  };

  modalMensagem.textContent =
    mensagens[tipo] || "Deseja reiniciar o progresso?";
  modal.classList.remove("oculta");
  modal.classList.add("mostrar");

  const modalSimClone = modalSim.cloneNode(true);
  const modalNaoClone = modalNao.cloneNode(true);
  const modalCancelarClone = modalCancelar.cloneNode(true);
  modalSim.parentNode.replaceChild(modalSimClone, modalSim);
  modalNao.parentNode.replaceChild(modalNaoClone, modalNao);
  modalCancelar.parentNode.replaceChild(modalCancelarClone, modalCancelar);

  modalSimClone.addEventListener("click", () => {
    callback();
    modal.classList.remove("mostrar");
    modal.classList.add("oculta");
  });

  modalNaoClone.addEventListener("click", () => {
    modal.classList.remove("mostrar");
    modal.classList.add("oculta");
  });

  modalCancelarClone.addEventListener("click", () => {
    modal.classList.remove("mostrar");
    modal.classList.add("oculta");
  });
}

function resetarProgresso(tipo) {
  if (tipo === "dias") {
    dias.slice(1).forEach((dia) => {
      const barra = document.getElementById(`barra-${dia}`);
      if (barra) {
        barra.style.setProperty("--before-width", "0%");
        const span = barra.querySelector(".porcentagem");
        if (span) span.textContent = "0%";
      }
    });
    localStorage.removeItem(`historicoTreino-${generoAtivo}`);
    localStorage.removeItem(`checkboxesEstado-${generoAtivo}`);
  } else if (tipo === "semanas") {
    for (let i = 1; i <= 10; i++) {
      const barra = document.getElementById(`semana-${i}`);
      if (barra) {
        barra.style.setProperty("--before-width", "0%");
        const span = barra.querySelector(".porcentagem");
        if (span) span.textContent = "0%";
      }
    }
    localStorage.removeItem(`historicoTreino-${generoAtivo}`);
  } else if (tipo === "meses") {
    for (let i = 1; i <= 12; i++) {
      const barra = document.getElementById(`mes-${i}`);
      if (barra) {
        barra.style.setProperty("--before-width", "0%");
        const span = barra.querySelector(".porcentagem");
        if (span) span.textContent = "0%";
      }
    }
    localStorage.removeItem(`historicoTreino-${generoAtivo}`);
  }
  atualizarSemanasEMeses();
  const btnAtivo = document.querySelector(".menu button.ativo");
  if (btnAtivo) {
    const dia = btnAtivo.getAttribute("onclick")?.match(/'([^']+)'/)?.[1];
    if (dia) mostrarDia(dia);
  }
}

function alternarAside() {
  const aside = document.getElementById("aside-progresso");
  const drinks = document.getElementById("drinks");
  const comidas = document.getElementById("comidas");
  const proteinas = document.getElementById("proteinas");
  const conteudoDia = document.getElementById("conteudo-dia");

  if (!aside) {
    console.error("Elemento '#aside-progresso' não encontrado");
    return;
  }

  if (aside.classList.contains("oculta")) {
    // Mostrar o aside
    aside.classList.remove("oculta");
    aside.classList.add("mostrar");
  } else {
    // Ocultar o aside
    aside.classList.remove("mostrar");
    aside.classList.add("oculta");

    // Certifique-se de que o conteúdo ativo continua visível
    if (drinks && drinks.classList.contains("mostrar")) {
      drinks.classList.remove("oculta");
      drinks.classList.add("mostrar");
    } else if (comidas && comidas.classList.contains("mostrar")) {
      comidas.classList.remove("oculta");
      comidas.classList.add("mostrar");
    } else if (proteinas && proteinas.classList.contains("mostrar")) {
      proteinas.classList.remove("oculta");
      proteinas.classList.add("mostrar");
    } else if (conteudoDia) {
      conteudoDia.classList.remove("oculta");
      conteudoDia.classList.add("mostrar");
    }
  }
}
// Função para mostrar a página de bebidas
function mostrarDrinks() {
  const conteudoDia = document.getElementById("conteudo-dia");
  const drinks = document.getElementById("drinks");
  const comidas = document.getElementById("comidas");
  const proteinas = document.getElementById("proteinas");

  // Mostrar a div #drinks
  if (drinks) {
    drinks.classList.remove("oculta");
    drinks.classList.add("mostrar");
  }

  // Ocultar outras seções
  if (conteudoDia) conteudoDia.classList.add("oculta");
  if (comidas) comidas.classList.add("oculta");
  if (proteinas) proteinas.classList.add("oculta");
}
function mostrarProteinas() {
  const conteudoDia = document.getElementById("conteudo-dia");
  const drinks = document.getElementById("drinks");
  const comidas = document.getElementById("comidas");
  const proteinas = document.getElementById("proteinas");

  // Mostrar a div #proteinas
  if (proteinas) {
    proteinas.classList.remove("oculta");
    proteinas.classList.add("mostrar");
  }

  // Ocultar outras seções
  if (conteudoDia) conteudoDia.classList.add("oculta");
  if (drinks) drinks.classList.add("oculta");
  if (comidas) comidas.classList.add("oculta");
}

// Função para mostrar a página de comidas
function mostrarComidas() {
  const conteudoDia = document.getElementById("conteudo-dia");
  const drinks = document.getElementById("drinks");
  const comidas = document.getElementById("comidas");
  const proteinas = document.getElementById("proteinas");
  const aside = document.getElementById("aside-progresso");

  // Mostrar a div #comidas
  if (comidas) {
    comidas.classList.remove("oculta");
    comidas.classList.add("mostrar");
  }

  // Ocultar outras seções
  if (conteudoDia) conteudoDia.classList.add("oculta");
  if (drinks) drinks.classList.add("oculta");
  if (proteinas) proteinas.classList.add("oculta");

  // Não fechar o aside, se já estiver aberto
  if (aside && aside.classList.contains("mostrar")) {
    return;
  }
}

function inicializarApp() {
  const hoje = new Date().getDay();
  const diaHoje = dias[hoje] === "domingo" ? "segunda" : dias[hoje];

  [
    "historicoDias",
    "exercicios-segunda",
    "exercicios-terca",
    "exercicios-quarta",
    "exercicios-quinta",
    "exercicios-sexta",
  ].forEach((key) => {
    localStorage.removeItem(key);
  });

  for (let i = 1; i <= 10; i++) {
    const barra = document.getElementById(`semana-${i}`);
    if (barra) {
      barra.style.setProperty("--before-width", "0%");
      const span = barra.querySelector(".porcentagem");
      if (span) span.textContent = "0%";
    }
  }

  for (let i = 1; i <= 12; i++) {
    const barra = document.getElementById(`mes-${i}`);
    if (barra) {
      barra.style.setProperty("--before-width", "0%");
      const spanNome = barra.querySelector(".nome");
      const spanPerc = barra.querySelector(".porcentagem");
      if (spanNome)
        spanNome.textContent = new Date(2025, i - 1)
          .toLocaleString("pt-BR", { month: "long" })
          .replace(/^\w/, (c) => c.toUpperCase());
      if (spanPerc) spanPerc.textContent = "0%";
    }
  }

  const historico = JSON.parse(
    localStorage.getItem(`historicoTreino-${generoAtivo}`) || "[]"
  );
  if (new Set(historico.map((r) => `${r.data}-${r.dia}`)).size >= 3) {
    atualizarSemanasEMeses();
  }

  atualizarBotoesGenero();
  mostrarDia(diaHoje);
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM carregado");

  document.querySelectorAll(".man").forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("Botão masculino clicado");
      setGenero("masculino");

      // Verificar se a página de bebidas está ativa
      const drinks = document.getElementById("drinks");
      if (drinks && drinks.classList.contains("mostrar")) {
        drinks.classList.add("oculta");
        drinks.classList.remove("mostrar");
      }

      // Verificar se a página de comidas está ativa
      const comidas = document.getElementById("comidas");
      if (comidas && comidas.classList.contains("mostrar")) {
        comidas.classList.add("oculta");
        comidas.classList.remove("mostrar");
      }

      // Verificar se a página de proteínas está ativa
      const proteinas = document.getElementById("proteinas");
      if (proteinas && proteinas.classList.contains("mostrar")) {
        proteinas.classList.add("oculta");
        proteinas.classList.remove("mostrar");
      }

      // Mostrar exercícios
      const conteudoDia = document.getElementById("conteudo-dia");
      if (conteudoDia) {
        conteudoDia.classList.remove("oculta");
        conteudoDia.classList.add("mostrar");
      }

      // Mostrar o menu
      const menu = document.querySelector("nav.menu");
      if (menu) {
        menu.classList.remove("oculta");
      }

      // Exibir os exercícios do dia atual
      const hoje = new Date().getDay();
      const diaHoje = dias[hoje] === "domingo" ? "segunda" : dias[hoje];
      mostrarDia(diaHoje);
    });
  });

  document.querySelectorAll(".women").forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("Botão feminino clicado");
      setGenero("feminino");

      // Verificar se a página de bebidas está ativa
      const drinks = document.getElementById("drinks");
      if (drinks && drinks.classList.contains("mostrar")) {
        drinks.classList.add("oculta");
        drinks.classList.remove("mostrar");
      }

      // Verificar se a página de comidas está ativa
      const comidas = document.getElementById("comidas");
      if (comidas && comidas.classList.contains("mostrar")) {
        comidas.classList.add("oculta");
        comidas.classList.remove("mostrar");
      }

      // Verificar se a página de proteínas está ativa
      const proteinas = document.getElementById("proteinas");
      if (proteinas && proteinas.classList.contains("mostrar")) {
        proteinas.classList.add("oculta");
        proteinas.classList.remove("mostrar");
      }

      // Mostrar exercícios
      const conteudoDia = document.getElementById("conteudo-dia");
      if (conteudoDia) {
        conteudoDia.classList.remove("oculta");
        conteudoDia.classList.add("mostrar");
      }

      // Mostrar o menu
      const menu = document.querySelector("nav.menu");
      if (menu) {
        menu.classList.remove("oculta");
      }

      // Exibir os exercícios do dia atual
      const hoje = new Date().getDay();
      const diaHoje = dias[hoje] === "domingo" ? "segunda" : dias[hoje];
      mostrarDia(diaHoje);
    });
  });

  document
    .querySelectorAll(".abrir-progresso, .abrir-conteudo")
    .forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(
          `Botão clicado: ${
            btn.classList.contains("abrir-progresso") ? "progresso" : "conteúdo"
          }`
        );
        alternarAside(); // Apenas alterna o aside
      });
    });

  document.querySelectorAll(".toggle-dark-mode").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");
      console.log("Modo escuro:", isDark);
    });
  });

  const progressoDia = document.getElementById("progresso-dia");
  const progressoSemanal = document.getElementById("progresso-semanal");
  const progressoMensal = document.getElementById("progresso-mensal");

  const alternarProgressoButtons = [
    { id: "ver-diario", mobileId: "ver-diario-mobile", view: "dia" },
    { id: "ver-semanal", mobileId: "ver-semanal-mobile", view: "semanal" },
    { id: "ver-mensal", mobileId: "ver-mensal-mobile", view: "mensal" },
  ];

  alternarProgressoButtons.forEach(({ id, mobileId, view }) => {
    const buttons = [
      document.getElementById(id),
      document.getElementById(mobileId),
    ].filter(Boolean);
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        console.log(`Ver ${view} clicado`);
        if (progressoDia)
          progressoDia.style.display = view === "dia" ? "block" : "none";
        if (progressoSemanal)
          progressoSemanal.style.display =
            view === "semanal" ? "block" : "none";
        if (progressoMensal)
          progressoMensal.style.display = view === "mensal" ? "block" : "none";
        buttons.forEach((b) => b.classList.add("active"));
        alternarProgressoButtons
          .filter((other) => other.view !== view)
          .forEach(({ id, mobileId }) => {
            [document.getElementById(id), document.getElementById(mobileId)]
              .filter(Boolean)
              .forEach((b) => b.classList.remove("active"));
          });
      });
    });
  });

  const resetButtons = [
    { id: "btn-reset-dias", mobileId: "btn-reset-dias-mobile", tipo: "dias" },
    {
      id: "btn-reset-semana",
      mobileId: "btn-reset-semana-mobile",
      tipo: "semanas",
    },
    { id: "btn-reset-mes", mobileId: "btn-reset-mes-mobile", tipo: "meses" },
  ];

  resetButtons.forEach(({ id, mobileId, tipo }) => {
    const buttons = [
      document.getElementById(id),
      document.getElementById(mobileId),
    ].filter(Boolean);
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        console.log(`Botão reset ${tipo} clicado`);
        let secaoAtiva = "dias";
        if (progressoSemanal.style.display === "block") {
          secaoAtiva = "semanas";
        } else if (progressoMensal.style.display === "block") {
          secaoAtiva = "meses";
        }
        mostrarModal(secaoAtiva, () => resetarProgresso(tipo));
      });
    });
  });

  const btnSemanal = document.getElementById("ver-semanal");
  if (btnSemanal) {
    btnSemanal.click();
  }

  inicializarApp();
});
