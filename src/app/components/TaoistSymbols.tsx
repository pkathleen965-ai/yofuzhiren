"use client";

import { motion } from "framer-motion";

// 太极图标
export function TaijiSymbol({ className = "", size = 60 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
    >
      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M50 2 A24 24 0 0 1 50 50 A24 24 0 0 0 50 98 A48 48 0 0 1 50 2"
        fill="currentColor"
      />
      <circle cx="50" cy="26" r="8" fill="white" />
      <circle cx="50" cy="74" r="8" fill="currentColor" />
    </svg>
  );
}

// 八卦符号
export function BaguaSymbol({ className = "", size = 60 }: { className?: string; size?: number }) {
  const trigrams = [
    { name: "乾", lines: [1, 1, 1] }, // ☰
    { name: "兑", lines: [0, 1, 1] }, // ☱
    { name: "离", lines: [1, 0, 1] }, // ☲
    { name: "震", lines: [0, 0, 1] }, // ☳
    { name: "巽", lines: [1, 1, 0] }, // ☴
    { name: "坎", lines: [0, 1, 0] }, // ☵
    { name: "艮", lines: [1, 0, 0] }, // ☶
    { name: "坤", lines: [0, 0, 0] }, // ☷
  ];

  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
      <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="2" />
      {trigrams.map((trigram, i) => {
        const angle = (i * 45 - 90) * (Math.PI / 180);
        const x = 100 + 70 * Math.cos(angle);
        const y = 100 + 70 * Math.sin(angle);
        return (
          <g key={i} transform={`translate(${x}, ${y})`}>
            {trigram.lines.map((line, j) => (
              <rect
                key={j}
                x={-12}
                y={-15 + j * 10}
                width={line ? 24 : 10}
                height={4}
                fill="currentColor"
              />
            ))}
          </g>
        );
      })}
    </svg>
  );
}

// 云纹装饰
export function CloudPattern({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 60" className={className} preserveAspectRatio="none">
      <path
        d="M0 30 Q25 10 50 30 T100 30 T150 30 T200 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.3"
      />
      <path
        d="M0 40 Q25 20 50 40 T100 40 T150 40 T200 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.2"
      />
    </svg>
  );
}

// 符文装饰
export function RuneSymbol({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <text
        x="50"
        y="70"
        textAnchor="middle"
        fontSize="60"
        fill="currentColor"
        fontFamily="serif"
      >
        符
      </text>
    </svg>
  );
}

// 装饰性分隔线
export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
      <TaijiSymbol size={24} className="text-amber-600" />
      <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
    </div>
  );
}

// 悬浮装饰元素
export function FloatingElements() {
  return (
    <>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-amber-400/20 pointer-events-none"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          {i % 3 === 0 && <TaijiSymbol size={40 + i * 10} />}
          {i % 3 === 1 && <BaguaSymbol size={35 + i * 8} />}
          {i % 3 === 2 && <RuneSymbol className="w-10 h-10" />}
        </motion.div>
      ))}
    </>
  );
}
