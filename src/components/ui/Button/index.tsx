// src/components/ui/Button/index.tsx
// ตัวอย่างการ export Button แบบ named export

import React from 'react';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => {
  return (
    <button
      {...props}
      className={`btn ${props.className ?? ''}`}
      type={props.type ?? 'button'}
    >
      {props.children}
    </button>
  );
};

// หากต้องการเปลี่ยนเป็น default export ให้แก้เป็น

// export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
//   return (
//     <button {...props} className={`btn ${props.className ?? ''}`} type={props.type ?? 'button'}>
//       {props.children}
//     </button>
//   );
// }
