"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

type CounterProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  format?: (n: number) => string;
  className?: string;
};

function Counter({ to, prefix = "", suffix = "", decimals = 0, format, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const mv = useMotionValue(0);
  const out = useTransform(mv, (v) => {
    if (format) return format(v);
    return `${prefix}${v.toFixed(decimals)}${suffix}`;
  });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 1.6, ease: [0.16, 1, 0.3, 1] });
    return controls.stop;
  }, [inView, to, mv]);

  useEffect(() => {
    return out.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
  }, [out]);

  return <span ref={ref} className={className}>{format ? format(0) : `${prefix}0${suffix}`}</span>;
}

const fmtNum = (v: number) => Math.round(v).toLocaleString("es-CO");
const fmtMoneyM = (v: number) => `$${v.toFixed(2)}M`;
const fmtMoney = (v: number) => `$${Math.round(v).toLocaleString("es-CO")}`;

const insights = [
  {
    tone: "red" as const,
    label: "Alerta",
    body: (
      <>
        <strong>68% de anuncios detenidos (35 de 51).</strong> La mayoría figura como
        &quot;not_delivering&quot;, lo que indica presupuesto subutilizado, fatiga creativa o
        restricciones de Meta sin resolver. El algoritmo no puede optimizar con tan pocos anuncios
        activos.
      </>
    ),
  },
  {
    tone: "red" as const,
    label: "Alerta",
    body: (
      <>
        <strong>Presupuesto bajo utilizado en múltiples conjuntos.</strong> Anuncios como CARRETE
        CLOSET GLAM, FLYER HARMONY y FLYER LUXURY muestran la advertencia de presupuesto bajo
        utilizado — Meta no está invirtiendo el monto configurado.
      </>
    ),
  },
  {
    tone: "amber" as const,
    label: "Oport.",
    body: (
      <>
        <strong>LUXURY es el anuncio estrella</strong> con 2.498 conversaciones y costo por
        resultado de $228 COP — muy por debajo del promedio. Este formato y creativo merece
        presupuesto adicional y replicación en otras colecciones.
      </>
    ),
  },
  {
    tone: "amber" as const,
    label: "Oport.",
    body: (
      <>
        <strong>JAZMIN y FIORELLA CLOSET con clasificación &quot;Por encima del promedio&quot;</strong>{" "}
        en calidad y conversiones. Son los activos más rentables del catálogo con costos por
        conversación de $51 y $53 COP respectivamente.
      </>
    ),
  },
  {
    tone: "green" as const,
    label: "Bien",
    body: (
      <>
        <strong>480K visualizaciones mensuales en Pinterest</strong> y 1.2K seguidores evidencian
        una audiencia orgánica sólida. La pauta puede beneficiarse directamente de este
        reconocimiento de marca pre-existente.
      </>
    ),
  },
];

const respuestaFeatures = [
  "Respuestas automáticas a DMs de campañas activas",
  "Calificación de prospectos y captura de datos",
  "Escalado inteligente a humano cuando se requiere",
  "Retroalimentación humana para mejorar respuestas",
  "Seguimiento de leads calientes en el pipeline",
];
const metricasFeatures = [
  "Análisis de rendimiento por anuncio en tiempo real",
  "Alertas automáticas de presupuesto bajo o bajo rendimiento",
  "Recomendaciones de optimización basadas en datos",
  "Reportes semanales y mensuales automatizados",
  "Comparativas de CPR, alcance y conversiones",
];
const agenteMetricas = [
  "Monitoreo continuo de CPR, alcance y conversiones",
  "Detección de anuncios con bajo rendimiento o detenidos",
  "Análisis de fatiga creativa y frecuencia",
  "Sugerencias de presupuesto basadas en datos históricos",
  "Dashboard actualizado cada hora con métricas clave",
];
const agenteRespuesta = [
  "Respuesta automática a comentarios y DMs de Meta Ads",
  "Personalización por línea de producto (Luxury, Jazmin, etc.)",
  "Aprendizaje continuo con corrección humana del equipo",
  "Registro y seguimiento de conversaciones de prospectos",
  "Activación disponible desde el día 1 sin costo adicional",
];

export default function Proposal() {
  return (
    <div className="shell">
      <motion.div
        className="page"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="dot-grid" />
        <motion.div
          className="accent-line"
          initial={{ scaleX: 0, transformOrigin: "0% 50%" }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        />
        <div className="doc">
          <motion.div
            className="header"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.div className="header-left" variants={fadeUp}>
              <div className="aic-badge">AIC Studio · Agencia de IA</div>
              <span className="separator">·</span>
              <div className="aic-badge" style={{ color: "rgba(255,255,255,0.20)" }}>
                Propuesta Comercial
              </div>
            </motion.div>
            <motion.div className="header-right" variants={fadeUp}>
              <div>Ref. AIC-MOD-2026</div>
              <div>Válida hasta: 17 May · 2026</div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={stagger}
          >
            <motion.div className="hero-eyebrow" variants={fadeUp}>
              Para Modulartess · Tocadores · Bello, Antioquia
            </motion.div>
            <motion.h1 className="hero-title" variants={fadeUp}>
              Inteligencia Artificial<br />para tus Campañas.
            </motion.h1>
            <motion.div className="hero-sub" variants={fadeUp}>
              Gestión de campañas Meta Ads · Potenciada por 2 agentes IA · 24h
            </motion.div>
            <motion.p className="hero-desc" variants={fadeUp}>
              Gestionamos tus campañas publicitarias de Meta Ads (Instagram + Facebook) con un
              equipo humano potenciado por dos agentes de IA especializados. Tras analizar 51
              anuncios activos y $1.683.059 COP de inversión mensual, detectamos oportunidades
              concretas para reducir costo por conversación y reactivar el presupuesto detenido.
            </motion.p>
            <motion.a
              href="mailto:aicstudioai@gmail.com?subject=Iniciar%20propuesta%20AIC-MOD-2026"
              className="cta"
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Iniciar propuesta →
            </motion.a>
          </motion.div>

          <motion.div
            className="section"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={stagger}
          >
            <motion.div className="section-label" variants={fadeUp}>
              <span className="section-num">01</span> Diagnóstico de campañas · Abr 12 – May 11,
              2026
            </motion.div>
            <motion.div className="section-title" variants={fadeUp}>
              Lo que revelan tus datos.
            </motion.div>
            <motion.div className="section-body" variants={fadeUp}>
              348 anuncios en gestión · $1.683.059 COP gastados · 30 días de datos.
            </motion.div>

            <motion.div className="metrics-grid" variants={fadeUp}>
              <MetricCell label="Gasto total" note="COP · 30 días">
                <Counter to={1.68} decimals={2} format={fmtMoneyM} />
              </MetricCell>
              <MetricCell label="Impresiones" note="Total periodo">
                <Counter to={613252} format={fmtNum} />
              </MetricCell>
              <MetricCell label="Alcance real" note="Cuentas de Meta">
                <Counter to={402514} format={fmtNum} />
              </MetricCell>
              <MetricCell label="Conversaciones" note="Contactos totales" tone="warn">
                <Counter to={4594} format={fmtNum} />
              </MetricCell>
              <MetricCell label="Nuevos contactos" note="Prospectos nuevos" tone="ok">
                <Counter to={4115} format={fmtNum} />
              </MetricCell>
              <MetricCell label="Anuncios activos" note="De 51 registrados" tone="ok">
                <Counter to={15} />
              </MetricCell>
              <MetricCell label="Detenidos" note="Not delivering" tone="danger">
                <Counter to={35} />
              </MetricCell>
              <MetricCell label="Costo / conv." note="COP promedio" tone="warn">
                <Counter to={366} format={fmtMoney} />
              </MetricCell>
            </motion.div>

            <motion.div className="insight-list" variants={stagger}>
              {insights.map((it, i) => (
                <motion.div
                  className="insight"
                  variants={fadeUp}
                  key={i}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 220, damping: 22 }}
                >
                  <div className={`insight-icon ${it.tone}`}>{it.label}</div>
                  <div className="insight-text">{it.body}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="page"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-5% 0px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="dot-grid" />
        <div className="accent-line" />
        <div className="doc">
          <div className="header">
            <div className="header-left">
              <div className="aic-badge">AIC Studio · Propuesta Modulartess</div>
            </div>
            <div className="header-right">
              <div>Ref. AIC-MOD-2026</div>
              <div>Página 2 de 2</div>
            </div>
          </div>

          <motion.div
            className="section"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={stagger}
          >
            <motion.div className="section-label" variants={fadeUp}>
              <span className="section-num">02</span> Lo que proponemos
            </motion.div>
            <motion.div className="section-title" variants={fadeUp}>
              Gestión de campañas Meta Ads potenciada con IA.
            </motion.div>
            <motion.div className="section-body" variants={fadeUp}>
              El núcleo del servicio es la gestión profesional de tus campañas de Meta Ads —
              creación, segmentación, optimización y reporte — apoyada por dos agentes IA
              especializados que trabajan 24h con retroalimentación humana constante.
            </motion.div>

            <motion.div className="service-grid" variants={stagger}>
              <ServiceCard
                badge={{ label: "Primer mes gratis", tone: "free" }}
                title="Agente de Respuesta"
                subtitle="Atención al público en tiempo real · Instagram & WhatsApp"
                features={respuestaFeatures}
              />
              <ServiceCard
                featured
                badge={{ label: "Incluido en plan", tone: "included" }}
                title="Agente de Métricas"
                subtitle="Análisis de campañas con IA · Reportes automáticos"
                features={metricasFeatures}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="section"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={stagger}
          >
            <motion.div className="section-label" variants={fadeUp}>
              <span className="section-num">03</span> Capacidades de los agentes
            </motion.div>
            <motion.div className="section-title" variants={fadeUp}>
              Dos agentes IA dedicados a tus campañas Meta Ads.
            </motion.div>
            <motion.div className="section-body" variants={fadeUp}>
              Cada agente está entrenado para una función específica dentro de la gestión publicitaria.
              Trabajan en paralelo, 24 horas, supervisados por el equipo AIC Studio.
            </motion.div>

            <motion.div className="agents-row" variants={stagger}>
              <AgentCard
                title="Agente MÉTRICAS · Meta Ads IA"
                role="Análisis de campaña · Optimización en vivo · Alertas"
                features={agenteMetricas}
              />
              <AgentCard
                title="Agente RESPUESTA · Público IA"
                role="Conversaciones · Calificación · Retroalimentación humana"
                features={agenteRespuesta}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="section"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={stagger}
          >
            <motion.div className="section-label" variants={fadeUp}>
              <span className="section-num">04</span> Inversión mensual
            </motion.div>

            <motion.div className="price-block" variants={fadeUp}>
              <div className="price-left">
                <div className="price-label">Gestión mensual Meta Ads</div>
                <div className="price-value">
                  <Counter to={3600000} format={fmtMoney} />
                </div>
                <div className="price-period">COP + IVA · facturado mensualmente</div>
              </div>
              <div className="price-right">
                <div className="price-includes">Incluye</div>
                <div className="include-item">Gestión integral de campañas Meta Ads</div>
                <div className="include-item">Agente IA de Métricas · 24h</div>
                <div className="include-item">Optimización en vivo basada en datos</div>
                <div className="include-item">Equipo AIC Studio supervisando estrategia</div>
                <div className="include-item" style={{ color: "#4ade80" }}>
                  Agente IA de Respuesta · Primer mes SIN COSTO
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="validity"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="validity-dot" />
            Propuesta válida por 5 días · Fecha límite: 17 de mayo de 2026 · Para iniciar escríbenos
            a aicstudioai@gmail.com
          </motion.div>

          <div className="footer">
            <div className="footer-left">
              <div className="footer-brand">AIC Studio</div>
              <div>Muñoz e Inversiones · Medellín, Colombia</div>
              <div>aicstudioai@gmail.com</div>
            </div>
            <div className="footer-right">
              <div>Gestión Meta Ads · IA Conversacional</div>
              <div>Instagram Ads · Facebook Ads · WhatsApp</div>
              <div style={{ marginTop: 4, color: "rgba(255,255,255,0.15)" }}>
                AIC-MOD-2026 · Confidencial
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function MetricCell({
  label,
  note,
  tone,
  children,
}: {
  label: string;
  note: string;
  tone?: "warn" | "ok" | "danger";
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="metric-cell"
      variants={fadeUp}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <div className="metric-label">{label}</div>
      <div className={`metric-value${tone ? ` ${tone}` : ""}`}>{children}</div>
      <div className="metric-note">{note}</div>
    </motion.div>
  );
}

function ServiceCard({
  badge,
  title,
  subtitle,
  features,
  featured,
}: {
  badge: { label: string; tone: "free" | "included" };
  title: string;
  subtitle: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <motion.div
      className={`service-card${featured ? " featured" : ""}`}
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
    >
      <div className={`service-badge ${badge.tone}`}>{badge.label}</div>
      <div className="service-title">{title}</div>
      <div className="service-subtitle">{subtitle}</div>
      <div className="feature-list">
        {features.map((f, i) => (
          <motion.div
            className="feature"
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * i, duration: 0.4 }}
          >
            {f}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function AgentCard({
  title,
  role,
  features,
}: {
  title: string;
  role: string;
  features: string[];
}) {
  return (
    <motion.div
      className="agent-card"
      variants={fadeUp}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
    >
      <div className="agent-name">
        <motion.div
          className="agent-dot"
          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        {title}
      </div>
      <div className="agent-role">{role}</div>
      <div className="agent-features">
        {features.map((f, i) => (
          <motion.div
            className="agent-feat"
            key={i}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.04 * i, duration: 0.4 }}
          >
            {f}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
