// foo.ts

// ตัวอย่างฟังก์ชันคำนวณผลรวมของตัวเลขในอาเรย์

export function sum(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0)
}

// ตัวอย่างการใช้งาน
const data = [1, 2, 3, 4, 5]
console.log('Sum:', sum(data))
