// src/components/SecretRoom/CustomerLoanProgressGraph.tsx
// ✅ กราฟแสดงสถานะสินเชื่อของลูกค้ารายบุคคล พร้อมอนิเมชัน ละเอียด ชัดเจน ใช้งานได้จริง

import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const CustomerLoanProgressGraph: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstanceRef = useRef<Chart | null>(null)

  // เป้าหมายวงเงิน 6 ล้านบาทต่อธนาคาร
  const goal = 6_000_000
  const uobPercent = 85
  const tmbPercent = 85

  const uobApproved = Math.round(goal * (uobPercent / 100))
  const tmbApproved = Math.round(goal * (tmbPercent / 100))
  const totalApproved = uobApproved + tmbApproved
  const remaining = Math.max(goal * 2 - totalApproved, 0)

  const banks = [
    { name: 'UOB', amount: uobApproved, color: '#0284c7' },
    { name: 'TMB', amount: tmbApproved, color: '#16a34a' },
    { name: 'KTB (รอผล)', amount: remaining, color: '#f59e0b' },
  ]

  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d')
    if (!ctx) return

    chartInstanceRef.current?.destroy()

    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: banks.map(b => b.name),
        datasets: [
          {
            label: 'วงเงินอนุมัติ (บาท)',
            data: banks.map(b => b.amount),
            backgroundColor: banks.map(b => b.color),
            borderRadius: 12,
            barThickness: 56,
          },
        ],
      },
      options: {
        responsive: true,
        animation: {
          duration: 700,
          easing: 'easeOutCubic',
        },
        plugins: {
          title: {
            display: true,
            text: '📊 สถานะสินเชื่อ: Parinya',
            color: '#1e293b',
            font: { size: 20, weight: 'bold' },
            padding: { bottom: 8 },
          },
          subtitle: {
            display: true,
            text: `เป้าหมาย: ${goal.toLocaleString()} บาท/ธนาคาร | UOB ${uobApproved.toLocaleString()} (${uobPercent}%) | TMB ${tmbApproved.toLocaleString()} (${tmbPercent}%)`,
            color: '#475569',
            font: { size: 14, style: 'italic' },
            padding: { bottom: 12 },
          },
          tooltip: {
            backgroundColor: '#f9fafb',
            titleColor: '#0f172a',
            bodyColor: '#1f2937',
            borderColor: '#e2e8f0',
            borderWidth: 1,
            callbacks: {
              label: ctx => ` ${ctx.label}: ${Number(ctx.formattedValue).toLocaleString()} บาท`,
            },
          },
          legend: { display: false },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'ธนาคาร',
              color: '#334155',
              font: { size: 14, weight: 'bold' },
            },
            ticks: { color: '#475569' },
            grid: { display: false },
          },
          y: {
            beginAtZero: true,
            suggestedMax: goal * 2,
            title: {
              display: true,
              text: 'จำนวนเงิน (บาท)',
              color: '#334155',
              font: { size: 14, weight: 'bold' },
            },
            ticks: {
              color: '#475569',
              callback: val => `${(+val).toLocaleString()} บาท`,
            },
            grid: {
              color: '#f1f5f9',
              borderDash: [4, 4],
            },
          },
        },
        layout: {
          padding: {
            top: 12,
            bottom: 6,
          },
        },
      },
    })

    return () => {
      chartInstanceRef.current?.destroy()
      chartInstanceRef.current = null
    }
  }, [goal, uobApproved, tmbApproved])

  return (
    <section
      aria-label="กราฟแสดงสถานะสินเชื่อ"
      className="mx-auto mt-10 w-full max-w-3xl rounded-2xl bg-white px-6 py-8 shadow-xl"
      tabIndex={-1}
    >
      <canvas ref={chartRef} height={320} />
    </section>
  )
}

export default CustomerLoanProgressGraph
