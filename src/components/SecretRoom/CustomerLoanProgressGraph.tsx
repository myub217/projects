// src/components/SecretRoom/CustomerLoanProgressGraph.tsx

import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const CustomerLoanProgressGraph: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstanceRef = useRef<Chart | null>(null)

  // -------------------------------
  // Loan Summary Configuration
  // -------------------------------
  const goal = 6_000_000
  // UOB และ TMB ได้อนุมัติ 85% ของเป้าคนละ 85%
  const uobPercent = 85
  const tmbPercent = 85

  const uobApproved = Math.round(goal * (uobPercent / 100))
  const tmbApproved = Math.round(goal * (tmbPercent / 100))
  const totalApproved = uobApproved + tmbApproved
  const remaining = Math.max(goal * 2 - totalApproved, 0) // สมมติเป้า 2 เท่ารวม

  const banks = [
    {
      name: 'UOB',
      amount: uobApproved,
      color: '#0284c7',
    },
    {
      name: 'TMB',
      amount: tmbApproved,
      color: '#16a34a',
    },
    {
      name: 'KTB (รอผล)',
      amount: remaining,
      color: '#f59e0b',
    },
  ]

  // -------------------------------
  // Chart Rendering
  // -------------------------------
  useEffect(() => {
    if (!chartRef.current) return
    const ctx = chartRef.current.getContext('2d')
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
            text: `📊 สถานะสินเชื่อ: Parinya`,
            color: '#1e293b',
            font: { size: 20, weight: 'bold' },
            padding: { bottom: 8 },
          },
          subtitle: {
            display: true,
            text: `เป้าหมาย: ${goal.toLocaleString()} บาท/ธนาคาร | ได้อนุมัติแล้ว: UOB ${uobApproved.toLocaleString()} บาท (${uobPercent}%), TMB ${tmbApproved.toLocaleString()} บาท (${tmbPercent}%)`,
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
              label: ctx => ` ${ctx.label}: ${ctx.formattedValue.toLocaleString()} บาท`,
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
      },
    })
  }, [uobApproved, tmbApproved, goal])

  // -------------------------------
  // Render
  // -------------------------------
  return (
    <div className="w-full max-w-3xl mx-auto bg-white shadow-xl rounded-2xl px-6 py-8 mt-10">
      <canvas ref={chartRef} height={320} />
    </div>
  )
}

export default CustomerLoanProgressGraph