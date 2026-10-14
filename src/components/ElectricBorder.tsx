import React, { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import './ElectricBorder.css';

export interface ElectricBorderProps {
  children?: ReactNode;
  color?: string;
  glowColor?: string;
  speed?: number;
  chaos?: number;
  spread?: number;
  thickness?: number;
  strands?: number;
  glow?: number;
  intensity?: number;
  arcs?: number;
  flicker?: number;
  borderRadius?: number;
  offset?: number;
  active?: boolean;
  intro?: boolean;
  interactive?: boolean;
  cursorRadius?: number;
  theme?: 'dark' | 'light';
  className?: string;
  style?: CSSProperties;
}

interface Spark {
  startDist: number;
  endDist: number;
  born: number;
  life: number;
  displace: number;
}

const MARGIN = 16;
const HALF_PI = Math.PI * 0.5;

export const ElectricBorder: React.FC<ElectricBorderProps> = ({
  children,
  color = '#84CC16',
  glowColor = '#22D3EE',
  speed = 1,
  chaos = 0.5,
  spread = 0.5,
  thickness = 1.5,
  strands = 2,
  glow = 0.6,
  intensity = 1,
  arcs = 2,
  flicker = 0.3,
  borderRadius = 16,
  active = true,
  interactive = true,
  className = '',
  style,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isHoveredRef = useRef(false);
  const mousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas || !active) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    let isVisible = true;
    let width = container.offsetWidth;
    let height = container.offsetHeight;
    const sparks: Spark[] = [];

    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const canvasW = width + MARGIN * 2;
      const canvasH = height + MARGIN * 2;

      canvas.width = Math.round(canvasW * dpr);
      canvas.height = Math.round(canvasH * dpr);
      canvas.style.width = `${canvasW}px`;
      canvas.style.height = `${canvasH}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && !rafId) {
        lastTime = performance.now();
        rafId = requestAnimationFrame(render);
      }
    });
    intersectionObserver.observe(container);

    const onPointerMove = (e: PointerEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const near =
        x >= -MARGIN &&
        y >= -MARGIN &&
        x <= width + MARGIN &&
        y <= height + MARGIN;
      isHoveredRef.current = near;
      mousePosRef.current = { x, y };
    };

    const onPointerLeave = () => {
      isHoveredRef.current = false;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('pointerleave', onPointerLeave);

    // Geometry helpers for rounded rectangle perimeter
    const getPerimeterData = () => {
      const r = Math.max(0, Math.min(borderRadius, width / 2, height / 2));
      const L_top = Math.max(0, width - 2 * r);
      const L_arc = HALF_PI * r;
      const L_right = Math.max(0, height - 2 * r);
      const L_bot = L_top;
      const L_left = L_right;
      const P = L_top + L_right + L_bot + L_left + 4 * L_arc;
      return { r, L_top, L_arc, L_right, L_bot, L_left, P };
    };

    const getPointAt = (
      dist: number,
      data: ReturnType<typeof getPerimeterData>
    ) => {
      const { r, L_top, L_arc, L_right, L_bot, P } = data;
      const d = ((dist % P) + P) % P;
      const x0 = MARGIN;
      const y0 = MARGIN;

      if (d < L_top) {
        return { x: x0 + r + d, y: y0, nx: 0, ny: -1 };
      }
      if (d < L_top + L_arc) {
        const ang = -HALF_PI + (d - L_top) / (r || 1);
        return {
          x: x0 + width - r + r * Math.cos(ang),
          y: y0 + r + r * Math.sin(ang),
          nx: Math.cos(ang),
          ny: Math.sin(ang),
        };
      }
      if (d < L_top + L_arc + L_right) {
        const step = d - L_top - L_arc;
        return { x: x0 + width, y: y0 + r + step, nx: 1, ny: 0 };
      }
      if (d < L_top + 2 * L_arc + L_right) {
        const ang = (d - L_top - L_arc - L_right) / (r || 1);
        return {
          x: x0 + width - r + r * Math.cos(ang),
          y: y0 + height - r + r * Math.sin(ang),
          nx: Math.cos(ang),
          ny: Math.sin(ang),
        };
      }
      if (d < L_top + 2 * L_arc + L_right + L_bot) {
        const step = d - L_top - 2 * L_arc - L_right;
        return { x: x0 + width - r - step, y: y0 + height, nx: 0, ny: 1 };
      }
      if (d < L_top + 3 * L_arc + L_right + L_bot) {
        const ang = HALF_PI + (d - L_top - 2 * L_arc - L_right - L_bot) / (r || 1);
        return {
          x: x0 + r + r * Math.cos(ang),
          y: y0 + height - r + r * Math.sin(ang),
          nx: Math.cos(ang),
          ny: Math.sin(ang),
        };
      }
      if (d < L_top + 3 * L_arc + 2 * L_right + L_bot) {
        const step = d - L_top - 3 * L_arc - L_right - L_bot;
        return { x: x0, y: y0 + height - r - step, nx: -1, ny: 0 };
      }
      const ang = Math.PI + (d - L_top - 3 * L_arc - 2 * L_right - L_bot) / (r || 1);
      return {
        x: x0 + r + r * Math.cos(ang),
        y: y0 + r + r * Math.sin(ang),
        nx: Math.cos(ang),
        ny: Math.sin(ang),
      };
    };

    const drawLightning = (
      p1: { x: number; y: number },
      p2: { x: number; y: number },
      maxDisp: number,
      strokeClr: string,
      strWidth: number
    ) => {
      const points = [p1, p2];
      let curDisp = maxDisp;
      for (let iter = 0; iter < 3; iter++) {
        const next: { x: number; y: number }[] = [];
        for (let i = 0; i < points.length - 1; i++) {
          const a = points[i];
          const b = points[i + 1];
          const mx = (a.x + b.x) * 0.5;
          const my = (a.y + b.y) * 0.5;
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const len = Math.hypot(dx, dy) || 1;
          const nx = -dy / len;
          const ny = dx / len;
          const offset = (Math.random() - 0.5) * curDisp;
          next.push(a);
          next.push({ x: mx + nx * offset, y: my + ny * offset });
        }
        next.push(points[points.length - 1]);
        points.length = 0;
        points.push(...next);
        curDisp *= 0.5;
      }

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.strokeStyle = strokeClr;
      ctx.lineWidth = strWidth;
      ctx.stroke();
    };

    let lastTime = performance.now();
    let simTime = Math.random() * 50;

    const render = (now: number) => {
      if (!isVisible) {
        rafId = 0;
        return;
      }

      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      simTime += dt * speed;

      const canvasW = width + MARGIN * 2;
      const canvasH = height + MARGIN * 2;
      ctx.clearRect(0, 0, canvasW, canvasH);

      const pData = getPerimeterData();
      if (pData.P <= 10) {
        rafId = requestAnimationFrame(render);
        return;
      }

      const isHovered = isHoveredRef.current;
      const currentIntensity = isHovered ? intensity * 1.35 : intensity;
      const currentGlow = isHovered ? glow * 1.4 : glow;

      // 1. Draw smooth base electric glow path
      ctx.save();
      ctx.beginPath();
      const r = pData.r;
      const x0 = MARGIN;
      const y0 = MARGIN;
      ctx.roundRect(x0, y0, width, height, r);
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.35 * currentIntensity;
      ctx.lineWidth = thickness * 1.2;
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 10 * currentGlow;
      ctx.stroke();
      ctx.restore();

      if (reducedMotion) {
        rafId = 0;
        return;
      }

      // 2. Draw crackling electric lightning strands around border
      ctx.save();
      const stepSize = Math.max(8, Math.min(14, pData.P / 120));
      const totalSteps = Math.ceil(pData.P / stepSize);

      for (let s = 0; s < strands; s++) {
        const sOffset = (s * Math.PI) / strands;
        ctx.beginPath();
        const firstPt = getPointAt(0, pData);
        ctx.moveTo(firstPt.x, firstPt.y);

        for (let i = 1; i <= totalSteps; i++) {
          const dist = i * stepSize;
          const pt = getPointAt(dist, pData);
          const noise =
            Math.sin(dist * 0.05 + simTime * 7 + sOffset) *
            Math.cos(dist * 0.02 - simTime * 5);
          const jitter =
            (noise * 3.5 + (Math.random() - 0.5) * chaos * 3.5) * spread;
          ctx.lineTo(pt.x + pt.nx * jitter, pt.y + pt.ny * jitter);
        }

        ctx.closePath();
        // Strand glow
        ctx.strokeStyle = s === 0 ? color : glowColor;
        ctx.globalAlpha = (s === 0 ? 0.75 : 0.5) * currentIntensity;
        ctx.lineWidth = thickness * (s === 0 ? 1.2 : 0.85);
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = 8 * currentGlow;
        ctx.stroke();

        // White electric core on first strand
        if (s === 0) {
          ctx.strokeStyle = '#FFFFFF';
          ctx.globalAlpha = 0.55 * currentIntensity;
          ctx.lineWidth = Math.max(0.6, thickness * 0.45);
          ctx.shadowBlur = 4;
          ctx.stroke();
        }
      }
      ctx.restore();

      // 3. Electric energy surge pulses orbiting the perimeter
      ctx.save();
      const numPulses = 2;
      for (let p = 0; p < numPulses; p++) {
        const pulseCenter =
          (simTime * speed * 220 + (p * pData.P) / numPulses) % pData.P;
        const pulseLength = pData.P * 0.12;

        ctx.beginPath();
        const startD = pulseCenter - pulseLength * 0.5;
        const segSteps = 15;
        for (let j = 0; j <= segSteps; j++) {
          const curD = startD + (j / segSteps) * pulseLength;
          const pt = getPointAt(curD, pData);
          const taper = Math.sin((j / segSteps) * Math.PI);
          const jitt = (Math.random() - 0.5) * chaos * 2.5 * taper;
          if (j === 0) {
            ctx.moveTo(pt.x + pt.nx * jitt, pt.y + pt.ny * jitt);
          } else {
            ctx.lineTo(pt.x + pt.nx * jitt, pt.y + pt.ny * jitt);
          }
        }
        ctx.strokeStyle = '#FFFFFF';
        ctx.globalAlpha = 0.8 * currentIntensity;
        ctx.lineWidth = thickness * 1.5;
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = 12 * currentGlow;
        ctx.stroke();
      }
      ctx.restore();

      // 4. Occasional lightning arcs & interactive cursor sparks
      ctx.save();
      for (let i = sparks.length - 1; i >= 0; i--) {
        if (now - sparks[i].born > sparks[i].life) {
          sparks.splice(i, 1);
        }
      }

      // Spawn random sparks
      if (sparks.length < arcs && Math.random() < 0.15 * speed) {
        const start = Math.random() * pData.P;
        const span = Math.min(pData.P * 0.2, 30 + Math.random() * 50);
        sparks.push({
          startDist: start,
          endDist: start + span,
          born: now,
          life: 150 + Math.random() * 200,
          displace: 8 + Math.random() * 8,
        });
      }

      // Draw active sparks
      for (const spk of sparks) {
        const ptA = getPointAt(spk.startDist, pData);
        const ptB = getPointAt(spk.endDist, pData);
        drawLightning(
          { x: ptA.x, y: ptA.y },
          { x: ptB.x, y: ptB.y },
          spk.displace * spread,
          glowColor,
          thickness
        );
      }

      // Draw interactive lightning toward cursor if hovered
      if (isHovered && interactive) {
        const mx = mousePosRef.current.x + MARGIN;
        const my = mousePosRef.current.y + MARGIN;
        const hoverDist = (simTime * 300) % pData.P;
        const ptNear = getPointAt(hoverDist, pData);
        const distToMouse = Math.hypot(mx - ptNear.x, my - ptNear.y);
        if (distToMouse < 90) {
          drawLightning(
            { x: ptNear.x, y: ptNear.y },
            { x: mx, y: my },
            10,
            color,
            thickness * 1.2
          );
        }
      }
      ctx.restore();

      rafId = requestAnimationFrame(render);
    };

    lastTime = performance.now();
    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerleave', onPointerLeave);
    };
  }, [
    active,
    speed,
    color,
    glowColor,
    thickness,
    strands,
    glow,
    intensity,
    chaos,
    spread,
    arcs,
    flicker,
    borderRadius,
    interactive,
  ]);

  return (
    <div
      ref={containerRef}
      className={`electric-border${className ? ` ${className}` : ''}`}
      style={{ borderRadius, ...style }}
    >
      <canvas
        ref={canvasRef}
        className="electric-border__canvas"
        aria-hidden="true"
      />
      {children}
    </div>
  );
};

export default ElectricBorder;
