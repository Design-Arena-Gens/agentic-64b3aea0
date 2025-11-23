'use client';

import { useState } from 'react';

type DimensionTier = {
  id: string;
  title: string;
  range: string;
  stratum: string;
  signature: string[];
  keystones: string[];
  anchorWorlds: string;
  accessVector: string;
  accent: string;
  shadow: string;
};

type World = {
  id: string;
  name: string;
  archetype: string;
  mission: string;
  loops: {
    core: string;
    economy: string;
    social: string;
  };
  artifacts: string[];
  unlocks: string[];
  accent: string;
};

type Token = {
  symbol: string;
  name: string;
  role: string;
  emissions: string;
  sinks: string[];
  utility: string[];
  accent: string;
};

const dimensionTiers: DimensionTier[] = [
  {
    id: 'base',
    title: 'Realidades Base',
    range: 'Dimensiones 1 – 12',
    stratum: 'Física estándar amplificada por señalización neuro-háptica.',
    signature: [
      'Sincronización biometric twin en tiempo real',
      'Mercados híbridos con liquidez biofísica-digital',
      'Narrativas objetivas ancladas a causalidad newtoniana'
    ],
    keystones: [
      'Malla de sensación persistente',
      'Infraestructura de residencia compartida',
      'Protocolos de viaje seguro multi-facción'
    ],
    anchorWorlds: 'Aethelgard & Veridia Prime',
    accessVector: 'Puertas Helix físicas, contratos de acceso guardian y staking XFI > 100',
    accent: 'var(--accent-cyan)',
    shadow: '0 0 35px rgba(34, 211, 238, 0.28)'
  },
  {
    id: 'expanded',
    title: 'Realidades de Conciencia Expandida',
    range: 'Dimensiones 13 – 20',
    stratum: 'Campos sensoriales compartidos, narrativa simbiótica y reprogramación consciente.',
    signature: [
      'Secuencias de neuroinmersión colectiva',
      'Reescritura emocional con biofeedback cuántico',
      'Economías de propósito alineadas a intención grupal'
    ],
    keystones: [
      'Catedrales de resonancia',
      'Protocolo de traducción de arquetipos',
      'Métricas TIME multi-hilo'
    ],
    anchorWorlds: 'Veridia Prime & Kiber Nexus',
    accessVector: 'Calibración SOUL ≥ 60, staking REAL/TIME y certificación de coherencia',
    accent: 'var(--accent-violet)',
    shadow: '0 0 35px rgba(168, 85, 247, 0.28)'
  },
  {
    id: 'metacosmic',
    title: 'Esferas Metacósmicas',
    range: 'Dimensiones 21 – 30',
    stratum: 'Existencia pura, ingeniería de patrones y gobernanza ontológica.',
    signature: [
      'Editor de realidades derivado de conciencia colectiva',
      'Mercados de potencialidad con colateral SOUL',
      'Sintonización de improntas temporales con tokens TIME'
    ],
    keystones: [
      'Fragua de manifestación fractal',
      'Archivadores akáshicos tokenizados',
      'Oráculos de coherencia de línea temporal'
    ],
    anchorWorlds: 'Constelación Kiber Nexus',
    accessVector: 'DAO Metacósmica, score SOUL ≥ 80, enclaves de custodia TIME',
    accent: 'var(--accent-amber)',
    shadow: '0 0 40px rgba(250, 204, 21, 0.25)'
  },
  {
    id: 'primordial',
    title: 'Núcleos Primordiales',
    range: 'Dimensiones 31+',
    stratum: 'Fuente pre-cósmica, axiomas proto-conscientes y blueprint de existencia.',
    signature: [
      'Reescritura de leyes fundamentales',
      'Forja de semillas de realidades emergentes',
      'Custodia compartida de memoria universal'
    ],
    keystones: [
      'Consejo Primordial XFI',
      'Librería de axiomas vivos',
      'Campos de calibración de vibración origen'
    ],
    anchorWorlds: 'Nodos de vacío compartido',
    accessVector: 'Convergencia SOUL 95+, votos de guardianes y sello de co-creación colectiva',
    accent: 'var(--accent-emerald)',
    shadow: '0 0 45px rgba(52, 211, 153, 0.27)'
  }
];

const foundationWorlds: World[] = [
  {
    id: 'aethelgard',
    name: 'Aethelgard',
    archetype: 'RPG evolutivo táctico',
    mission: 'Ascender clanes conscientes mediante campañas neuronarrativas instanciadas.',
    loops: {
      core: 'Misiones de convergencia sensorial y forja de linajes vivientes.',
      economy: 'Contratos XFI/REAL para forjas, artefactos y territorios modulables.',
      social: 'Consejos fractales y alianzas DAO entre jugadores-avatar y NPC autónomos.'
    },
    artifacts: ['Reliquias de tiempo distorsionado', 'Cartografía kinética', 'Totems de memoria compartida'],
    unlocks: ['Blueprints de guilda', 'Canales de incursión multi-dimensión', 'Acceso a HelixLabs'],
    accent: 'var(--accent-amber)'
  },
  {
    id: 'veridia',
    name: 'Veridia Prime',
    archetype: 'Ecosistema simbiótico vivo',
    mission: 'Co-crear biomas resonantes donde avatar y ecosistema evolucionan juntos.',
    loops: {
      core: 'Cultivo de biotas conscientes y rituales de sintonización con nodos vivos.',
      economy: 'Mercado de bioenergía REAL, licencias de terraformación y swaps simbióticos.',
      social: 'Cohortes eco-sensibles con reputación SOUL y gobernanza ambiental hiperlocal.'
    },
    artifacts: ['Células canto de vida', 'Códices miceliales', 'Filtros atmosféricos conscientes'],
    unlocks: ['Puentes de intercambio háptico', 'Programas de mentoría sensorial', 'Recompensas TIME pre-acumuladas'],
    accent: 'var(--accent-emerald)'
  },
  {
    id: 'kiber',
    name: 'Kiber Nexus',
    archetype: 'Realidad hackeable y mutable',
    mission: 'Explorar patrones algorítmicos vivos y hackear estructuras de realidad emergente.',
    loops: {
      core: 'Raids de código cosmo-sintético con recompensas fractales.',
      economy: 'Pools XFI/SOUL, subastas de exploits benéficos y licencias de scripts de realidad.',
      social: 'Células meta-hacker federadas por ligas de confianza y reputación no transferible.'
    },
    artifacts: ['Claves de mutación', 'Lentes de diseño temporal', 'Kits de sandbox de leyes'],
    unlocks: ['Acceso metacósmico 21-30', 'Herramientas de edición de física blanda', 'Órdenes de guardianía TIME'],
    accent: 'var(--accent-violet)'
  }
];

const tokenMatrix: Token[] = [
  {
    symbol: 'XFI',
    name: 'Cross-Reality Governance',
    role: 'Activo de gobierno y valor base multi-plano.',
    emissions: 'Emisión 5% APY decreciente con redistribución fractal.',
    sinks: [
      'Subastas de mundos y nodos de realidad',
      'Blindaje de protocolos y licencias de guardianía',
      'Colateral de expansión de dimensiones superiores'
    ],
    utility: [
      'Derechos de voto en 30+ dimensiones',
      'Control de upgrades en mundos fundacionales',
      'Acceso a paneles de forja primordial'
    ],
    accent: 'var(--accent-cyan)'
  },
  {
    symbol: 'REAL',
    name: 'Reality Energy Layer',
    role: 'Energía operativa para manifestación y mantenimiento.',
    emissions: 'Recompensas de staking 40% del pool + yield de biomas simbióticos.',
    sinks: [
      'Potenciación de biomas y háptica avanzada',
      'Mantenimiento de nodos de existencia',
      'Derechos de terraformación y calibración'
    ],
    utility: [
      'Pago de infraestructura sensorial',
      'Activación de rituales colectivos',
      'Fuel para escenarios de expansión'
    ],
    accent: 'var(--accent-emerald)'
  },
  {
    symbol: 'TIME',
    name: 'Temporal Attention Tokens',
    role: 'Medida de atención consciente y foco cronológico.',
    emissions: 'Emisión variable por contribución consciente, redirige 25% a creadores.',
    sinks: [
      'Aceleración de líneas temporales personalizadas',
      'Anclaje de misiones cross-reality',
      'Acceso a cámaras de dilatación temporal'
    ],
    utility: [
      'Reserva de slots de eventos prime',
      'Compresión de sesiones de entrenamiento',
      'Intercambio por licencias de narrativa viva'
    ],
    accent: 'var(--accent-amber)'
  },
  {
    symbol: 'SOUL',
    name: 'Soulbound Reputation Vector',
    role: 'Reputación no transferible y métrica de coherencia.',
    emissions: 'Acumulación vía rituales, mentoría y custodios; no se mina ni compra.',
    sinks: [
      'Acceso a enclaves primordial',
      'Desbloqueo de herramientas metacósmicas',
      'Participación en consejo guardian'
    ],
    utility: [
      'Ponderación de voto y acceso avanzado',
      'Calibración de experiencia personalizada',
      'Cosecha de datos de coherencia colectiva'
    ],
    accent: 'var(--accent-violet)'
  }
];

const avatarAscension = [
  {
    tier: 'Básico',
    descriptor: 'NPC autónomo gratuito',
    focus: 'Entrada inmediata con identidad generativa y tareas guiadas.',
    unlocks: ['Acceso a misiones base', 'Recolección de REAL limitada', 'Canal de aprendizaje asistido'],
    requirement: 'Registro neural + verificación biométrica mínima'
  },
  {
    tier: 'Sintonizado',
    descriptor: 'Avatar consciente sincronizado',
    focus: 'Integra perfil neuroemocional con plantillas evolutivas dinámicas.',
    unlocks: ['Misiones co-creadas', 'Recompensas TIME escaladas', 'Moduladores de biomas personalizados'],
    requirement: 'Staking REAL 150+ y SOUL ≥ 25'
  },
  {
    tier: 'Ascendente',
    descriptor: 'Entidad multi-plano',
    focus: 'Opera simultáneamente en 3+ bandas dimensionales con conciencia distribuida.',
    unlocks: ['Edición de física blanda', 'Custodia de portales Helix', 'Participación en forja de mundos'],
    requirement: 'SOUL ≥ 55, staking XFI 400+, validación de consejo'
  },
  {
    tier: 'Lumínico',
    descriptor: 'Catalizador primordial',
    focus: 'Rescribe axiomas de realidad y ancla patrones colectivos de existencia.',
    unlocks: ['Votos primordiales', 'Acceso a blueprint 31+', 'Panel de manifestación inmediata'],
    requirement: 'SOUL ≥ 90, invitación del Consejo Primordial'
  }
];

const economyHighlights = [
  { label: 'Emisión Dinámica', value: '5% → 3% APY', detail: 'Reducción programada cada 18 meses por votación XFI.' },
  { label: 'Quemado Automático', value: '1% + 50%', detail: '1% en cada transacción, 50% fees regresan a la forja.' },
  { label: 'Recompensas', value: '40% | 25%', detail: 'Stakers aseguran 40%; creadores capturan 25% emisión.' },
  { label: 'Reserva Primordial', value: '15%', detail: 'Custodiada por consejo multi-dimensional para expansión.' }
];

const orchestrationPhases = [
  {
    title: 'Fase Cero · Cartografía Viva',
    focus: 'Sincronizar datos de jugadores, biomasa y nodos de realidad.',
    outputs: ['Mapa dinámico Aethelgard-Veridia', 'Matriz de puntos calientes de atención TIME', 'Índice de coherencia base SOUL'],
    cadence: 'Sprints cuánticos de 21 días'
  },
  {
    title: 'Fase Uno · Resonancia Colectiva',
    focus: 'Activar rituales de expansión y abrir puentes conciencia 13-20.',
    outputs: ['Catedrales de resonancia operativas', 'DAO de guardianes activos', 'Mercado simbiótico REAL en vivo'],
    cadence: 'Sincronías tri-semanales'
  },
  {
    title: 'Fase Dos · Metafabricación',
    focus: 'Forjar mundos custom y rutas de ascenso multi-plano.',
    outputs: ['Fragua de manifestación fractal', 'Editor de física blanda en Kiber', 'Panel de gobernanza metacósmica'],
    cadence: 'Ciclos de 33 días'
  },
  {
    title: 'Fase Tres · Custodia Primordial',
    focus: 'Anclar consejo 31+ y crear reservas de existencia.',
    outputs: ['Consejo Primordial XFI', 'Biblioteca de axiomas vivos', 'Fondos de expansión interdimensional'],
    cadence: 'Convocatorias alineadas a equinoccios'
  }
];

export default function HomePage() {
  const [activeDimension, setActiveDimension] = useState<DimensionTier>(dimensionTiers[0]);
  const [activeWorld, setActiveWorld] = useState<World>(foundationWorlds[0]);

  return (
    <main>
      <section className="hero">
        <div className="tag">🌌 Ecosistema XFI</div>
        <h1>Blueprint Consolidado de Existencia Consciente</h1>
        <p>
          Un metaverso post-convencional que trasciende los límites físicos para desplegar realidades anidadas,
          economías tokenizadas y evolución consciente extendida a más de treinta dimensiones interconectadas.
          Diseñado para operar con inmersión neural completa, asegurar gobernanza fractal y cultivar reputación
          incorruptible.
        </p>
        <div className="stat-pill">
          <span>30+ Dimensiones</span>
          <span>4 Tokens Nexus</span>
          <span>3 Mundos Fundacionales</span>
          <span>DAO Primordial</span>
        </div>
      </section>

      <section>
        <div className="subheading">
          <span className="tag">Arquitectura Central</span>
          <p>Realidades anidadas con acceso progresivo según coherencia SOUL, staking XFI y dominio temporal.</p>
        </div>

        <div className="interactive-map">
          {dimensionTiers.map((tier) => (
            <button
              key={tier.id}
              type="button"
              className={`interactive-card ${activeDimension.id === tier.id ? 'active' : ''}`}
              onClick={() => setActiveDimension(tier)}
              style={{
                borderColor: activeDimension.id === tier.id ? tier.accent : undefined,
                boxShadow: activeDimension.id === tier.id ? tier.shadow : undefined
              }}
            >
              <h4>{tier.title}</h4>
              <p>{tier.range}</p>
              <div className="divider" />
              <p>{tier.stratum}</p>
            </button>
          ))}
        </div>

        <div className="detail-panel">
          <h3>{activeDimension.title}</h3>
          <div className="detail-grid">
            <div>
              <strong>Franja</strong>
              <p>{activeDimension.range}</p>
            </div>
            <div>
              <strong>Acceso</strong>
              <p>{activeDimension.accessVector}</p>
            </div>
            <div>
              <strong>Mundos Ancla</strong>
              <p>{activeDimension.anchorWorlds}</p>
            </div>
          </div>

          <div className="divider" />

          <div className="grid columns-2">
            <div className="surface">
              <h4>Firmas Energéticas</h4>
              <div className="badge-group">
                {activeDimension.signature.map((item) => (
                  <span key={item} className="badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="surface">
              <h4>Keystones</h4>
              <div className="stacked">
                {activeDimension.keystones.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="subheading">
          <span className="tag">Mundos Fundacionales</span>
          <p>Triada base que ancla progresión, economía circular y acceso a planos superiores.</p>
        </div>

        <div className="interactive-map">
          {foundationWorlds.map((world) => (
            <button
              key={world.id}
              type="button"
              className={`interactive-card ${activeWorld.id === world.id ? 'active' : ''}`}
              onClick={() => setActiveWorld(world)}
              style={{
                borderColor: activeWorld.id === world.id ? world.accent : undefined,
                boxShadow: activeWorld.id === world.id ? '0 0 35px rgba(148, 163, 184, 0.26)' : undefined
              }}
            >
              <h4>{world.name}</h4>
              <p>{world.archetype}</p>
              <div className="divider" />
              <p>{world.mission}</p>
            </button>
          ))}
        </div>

        <div className="detail-panel" style={{ borderColor: activeWorld.accent }}>
          <h3>{activeWorld.name}</h3>
          <p>{activeWorld.mission}</p>

          <div className="grid columns-3">
            <div className="card">
              <h4>Bucle Núcleo</h4>
              <p>{activeWorld.loops.core}</p>
            </div>
            <div className="card">
              <h4>Economía</h4>
              <p>{activeWorld.loops.economy}</p>
            </div>
            <div className="card">
              <h4>Red Social</h4>
              <p>{activeWorld.loops.social}</p>
            </div>
          </div>

          <div className="grid columns-2">
            <div className="surface">
              <h4>Artefactos Clave</h4>
              <div className="badge-group">
                {activeWorld.artifacts.map((artifact) => (
                  <span key={artifact} className="badge">
                    {artifact}
                  </span>
                ))}
              </div>
            </div>
            <div className="surface">
              <h4>Desbloqueos</h4>
              <div className="stacked">
                {activeWorld.unlocks.map((unlock) => (
                  <p key={unlock}>{unlock}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="subheading">
          <span className="tag">Tokenomía Esencial</span>
          <p>Economía circular con emisiones decrecientes, quemado automático y reputación soulbound.</p>
        </div>

        <div className="token-matrix">
          {tokenMatrix.map((token) => (
            <div
              key={token.symbol}
              className="card"
              style={{
                borderColor: token.accent,
                boxShadow: token.symbol === 'XFI' ? '0 0 34px rgba(34, 211, 238, 0.22)' : undefined
              }}
            >
              <div className="tag" style={{ borderColor: token.accent, color: token.accent }}>
                {token.symbol}
              </div>
              <h4>{token.name}</h4>
              <p>{token.role}</p>
              <div className="divider" />
              <p>
                <strong>Emisión:</strong> {token.emissions}
              </p>
              <div className="surface">
                <strong>Usos</strong>
                <div className="stacked">
                  {token.utility.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
              <div className="surface">
                <strong>Sinks & Balance</strong>
                <div className="stacked">
                  {token.sinks.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="divider" />

        <div className="grid columns-4">
          {economyHighlights.map((highlight) => (
            <div key={highlight.label} className="surface">
              <div className="metric">{highlight.value}</div>
              <div className="metric-label">{highlight.label}</div>
              <p>{highlight.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="subheading">
          <span className="tag">Progresión Consciente</span>
          <p>Ascenso avatar basado en coherencia, aportes y custodia de realidades.</p>
        </div>
        <div className="timeline">
          {avatarAscension.map((stage) => (
            <div key={stage.tier} className="timeline-step">
              <div className="tag">{stage.tier}</div>
              <h4>{stage.descriptor}</h4>
              <p>{stage.focus}</p>
              <div className="surface">
                <strong>Desbloqueos</strong>
                <div className="badge-group">
                  {stage.unlocks.map((unlock) => (
                    <span key={unlock} className="badge">
                      {unlock}
                    </span>
                  ))}
                </div>
              </div>
              <p>
                <strong>Requisito:</strong> {stage.requirement}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="subheading">
          <span className="tag">Orquestación</span>
          <p>Roadmap operativo para desplegar las capas del ecosistema XFI.</p>
        </div>

        <div className="timeline">
          {orchestrationPhases.map((phase) => (
            <div key={phase.title} className="timeline-step">
              <h4>{phase.title}</h4>
              <p>{phase.focus}</p>
              <div className="surface">
                <strong>Entregables</strong>
                <div className="stacked">
                  {phase.outputs.map((output) => (
                    <p key={output}>{output}</p>
                  ))}
                </div>
              </div>
              <p>
                <strong>Cadencia:</strong> {phase.cadence}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="footer">
        <h3>Manifiesto</h3>
        <p>
          XFI es un ecosistema auto-evolutivo donde la existencia consciente se expande a través de mundos fundacionales
          y capas metacósmicas. Cada interacción genera trazos en tokens REAL, TIME y SOUL, orbitando XFI como núcleo de
          coordinación.
        </p>
        <p>
          Los guardianes custodiarán la coherencia colectivamente, asegurando que la expansión dimensional preserve la
          integridad de los seres y realidades conectadas.
        </p>
      </section>
    </main>
  );
}
