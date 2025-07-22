// src/components/SecretRoom/GoldPriceGraph.tsx

import React, { useEffect, useState, useRef } from 'react'
import Chart from 'chart.js/auto'

interface GoldData {
  timestamp: number
  buy: number
  sell: number
}

const GoldPriceGraph: React.FC = () => {
  const [data, setData] = useState<GoldData[]>([])
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstanceRef = useRef<Chart | null>(null)

  const fetchGoldPrice = async () => {
    try {
      const res = await fetch('https://thai-gold-api.herokuapp.com/latest')
      const json = await res.json()
      const newPoint: GoldData = {
        timestamp: Date.now(),
        buy: json.buy,
        sell: json.sell,
      }
      setData(prev => [...prev.slice(-29), newPoint])
    } catch (err) {
      console.error('📉 Fetch gold price error:', err)
    }
  }

  useEffect(() => {
    fetchGoldPrice()
    const interval = setInterval(fetchGoldPrice, 60000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!chartRef.current) return

    const ctx = chartRef.current.getContext('2d')
    if (!ctx) return

    chartInstanceRef.current?.destroy()

    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map(d => new Date(d.timestamp).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })),
        datasets: [
          {
            label: 'ราคาซื้อ',
            data: data.map(d => d.buy),
            borderColor: '#facc15', // yellow-400
            backgroundColor: 'transparent',
            tension: 0.3,
            pointRadius: 2,
          },
          {
            label: 'ราคาขาย',
            data: data.map(d => d.sell),
            borderColor: '#fb923c', // orange-400
            backgroundColor: 'transparent',
            tension: 0.3,
            pointRadius: 2,
          },
        ],
      },
      options: {
        responsive: true,
        animation: false,
        plugins: {
          legend: {
            labels: { color: '#444' },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'เวลา',
              color: '#333',
            },
            ticks: {
              color: '#666',
              maxRotation: 0,
              autoSkip: true,
            },
          },
          y: {
            title: {
              display: true,
              text: 'บาท/ทองคำ',
              color: '#333',
            },
            ticks: {
              color: '#666',
              callback: (value: number | string) => `${value} ฿`,
            },
          },
        },
      },
    })
  }, [data])

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow rounded-xl p-6 mt-6">
      <h2 className="text-xl font-bold text-center text-gray-800 mb-4">📈 ราคาทองคำ (อัปเดตทุก 1 นาที)</h2>
      <canvas ref={chartRef} height={320} />
    </div>
  )
}

export default GoldPriceGraph