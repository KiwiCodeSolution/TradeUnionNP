"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { inter } from "@/app/[locale]/(client)/fonts";

const DATA = [
  { year: 2016, value: 322 },
  { year: 2017, value: 545 },
  { year: 2018, value: 723 },
  { year: 2019, value: 528 },
  { year: 2020, value: 445 },
  { year: 2021, value: 527 },
  { year: 2022, value: 404 },
  { year: 2023, value: 860 },
  { year: 2024, value: 1169 },
  { year: 2025, value: 1282 },
];

const BAR_WIDTH = 48;
const GAP = 20;
const PADDING_X = 20;
const CHART_TOP = 34;
const BASELINE = 250;
const MAX_VALUE = Math.max(...DATA.map(d => d.value));

const CHART_WIDTH = PADDING_X * 2 + DATA.length * BAR_WIDTH + (DATA.length - 1) * GAP;
const CHART_HEIGHT = BASELINE + 30;

const AppealsByYearChart = () => {
  const t = useTranslations("Protection");
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full bg-white rounded-lg p-6 md:p-8 xl:p-12 mt-6">
      <p className={`${inter.className} text-black-100 text-xl font-bold mb-6 text-center md:text-left`}>
        {t(`appeals_chart_title`)}
      </p>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
          className="mx-auto block"
          style={{ minWidth: `${CHART_WIDTH * 0.85}px`, maxWidth: `${CHART_WIDTH}px` }}
          role="img"
          aria-label={t(`appeals_chart_title`)}
        >
          <line
            x1={PADDING_X - 4}
            y1={BASELINE}
            x2={CHART_WIDTH - PADDING_X + 4}
            y2={BASELINE}
            stroke="#EEEEEE"
            strokeWidth="2"
          />

          {DATA.map((d, i) => {
            const barHeight = (d.value / MAX_VALUE) * (BASELINE - CHART_TOP);
            const x = PADDING_X + i * (BAR_WIDTH + GAP);
            const y = BASELINE - barHeight;
            const isActive = activeIndex === i;

            return (
              <g
                key={d.year}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                className="cursor-pointer"
              >
                <rect x={x} y={CHART_TOP} width={BAR_WIDTH} height={BASELINE - CHART_TOP} fill="transparent" />
                <rect
                  x={x}
                  y={y}
                  width={BAR_WIDTH}
                  height={barHeight}
                  rx="4"
                  fill="#ED1C24"
                  opacity={isActive ? 1 : 0.85}
                />
                <text
                  x={x + BAR_WIDTH / 2}
                  y={y - 8}
                  textAnchor="middle"
                  className={`${inter.className}`}
                  fontSize="15"
                  fontWeight={isActive ? 700 : 600}
                  fill="#333333"
                >
                  {d.value}
                </text>
                <text
                  x={x + BAR_WIDTH / 2}
                  y={BASELINE + 22}
                  textAnchor="middle"
                  className={`${inter.className}`}
                  fontSize="13"
                  fill="#666666"
                >
                  {d.year}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default AppealsByYearChart;
