// src/data/users.ts
<<<<<<< HEAD
// ✅ User data with hashed passwords and role typing, clean and scalable

export interface User {
  passwordHash: string;
  role: 'admin' | 'user';
=======
export interface User {
  passwordHash: string;
  role: "admin" | "user";
>>>>>>> bbe22dc9 (update)
}

export const users: Record<string, User> = {
  admin2517: {
<<<<<<< HEAD
    passwordHash: '46c883f81adcbad298233e4fc0b3d84c66a4ad686d2af7153f888663f6c1d84b',
    role: 'admin',
  },

  JPKYETONKEY201: {
    passwordHash: '22becba9ac05f53d1dea3afb1cf9e7c71096598e3e138b678746ee33e53e3111',
    role: 'user',
  },
  JPKYETONKEY222: {
    passwordHash: '1c8d401732c1f993d2602ca537f7c40bc95ec90cfe96b5efb7fb8c5f4ddbbd37',
    role: 'user',
  },
  JPKYETONKEY233: {
    passwordHash: 'e867bba904e46f9e17a91d9dc319420f5fce59e40a5be31ddc97185f501ee10b',
    role: 'user',
  },
  JPKYETONKEY244: {
    passwordHash: 'fcbd99454edac0060823fc0dc73f62fe9d6c77ff1f554638e91477ebf3009551',
    role: 'user',
  },
  JPKYETONKEY255: {
    passwordHash: '496a06b7f065c12dae0449d1edaf56d4e0ee8a5d3a42fa89b5ee5e28d87d2614',
    role: 'user',
  },
  JPKYETONKEY266: {
    passwordHash: '72c725742b0a3577c7553d25ffc1711cc3dd05cf30b469409382153ee66dd7a4',
    role: 'user',
  },
  JPKYETONKEY277: {
    passwordHash: '224c1d62c70bd7de1352449b4a447fe4bc4af85f10a06d46d313dfb57e847610',
    role: 'user',
  },
  JPKYETONKEY288: {
    passwordHash: 'bd9334e1fe94a3fd642afd8b4832d637c4640095110d6efd26bc70d10c383f86',
    role: 'user',
  },
  JPKYETONKEY299: {
    passwordHash: '0e16c8432679bc51d23bdc7c9417008c126dcda3d5868b5fb878e6daac716d16',
    role: 'user',
  },
  JPKYETONKEY300: {
    passwordHash: '42adc3026e068b28392cbdee6a70394c03a3a60caa94f94a42fe8e51032770a8',
    role: 'user',
  },
  JPusertest01: {
    passwordHash: 'd5154a7beb5c6f9948a8dffdc9c6748e47ce9a40be9744e2296123d7e1347f88',
    role: 'user',
  },
};

/* 
🔐 LINE Official Account / LIFF Settings
==========================================

VITE_LINE_LIFF_ID=462fqtfc
VITE_LINE_OA_URL=https://lin.ee/BTTcGDx
VITE_LINE_MANAGER_INVITE=https://manager.line.biz/invitation/V6SNepg1Q17MLT0V82KeWYegeXCfW0
*/

export const envConfig = {
  LINE_LIFF_ID: import.meta.env.VITE_LINE_LIFF_ID ?? '',
  LINE_OA_URL: import.meta.env.VITE_LINE_OA_URL ?? '',
  LINE_MANAGER_INVITE: import.meta.env.VITE_LINE_MANAGER_INVITE ?? '',
};
=======
    passwordHash: "$2a$10$PNuKh.CcJ6fYSOIBg74z.uoj3KIGz6LNfIxI.Dpk3A84tO8evgPJm",
    role: "admin",
  },
  JPKYETONKEY201: {
    passwordHash: "$2a$10$EhUi94aWAo35My9vJPvORuR9BKVNd1Gl3ThasdgfY.nN1f6AJbvMS",
    role: "user",
  },
  JPKYETONKEY222: {
    passwordHash: "$2a$10$GlEqhFQfA5h7RGKLxJP3leSo/.h0wf0MzkzlqffHmvK2iZQFNSbUy",
    role: "user",
  },
  JPKYETONKEY233: {
    passwordHash: "$2a$10$AUuI4d20CcItbKorlGiA1.t0POhieoB4KgNYZ3LWIqpeY/5SKTnfW",
    role: "user",
  },
  JPKYETONKEY244: {
    passwordHash: "$2a$10$CTIRaY548rjmN4Bg6uHUYeIAc1qINZbFA/R09VRHGJUvTAZv1HDMW",
    role: "user",
  },
  JPKYETONKEY255: {
    passwordHash: "$2a$10$ufVUjHcDuPOF3XRz6lVFc.bc31LDVbrr0lTOATTqKu63Txg7sPUr.",
    role: "user",
  },
  JPKYETONKEY266: {
    passwordHash: "$2a$10$ROGKN6soGzb5pd0RlELELeJhvYO3PSmKmpgkboo7S9MxQ6JhvAmge",
    role: "user",
  },
  JPKYETONKEY277: {
    passwordHash: "$2a$10$dXeSuUcMbE.pHGRhzw/fyeAflHz2pg.GoXRjJ4B.oY1jhEVBUR4Um",
    role: "user",
  },
  JPKYETONKEY288: {
    passwordHash: "$2a$10$yQYqEkKMcMBfY9jZDB/Ht.cjvN5Yi8UZOAyIl4.fVf4GPtSmWuRDW",
    role: "user",
  },
  JPKYETONKEY299: {
    passwordHash: "$2a$10$Uu2P06GjJ77mGBTJH6bto.qPu0LR9Bb1eRK5sGO13LEssvWkA/OnS",
    role: "user",
  },
  JPKYETONKEY300: {
    passwordHash: "$2a$10$2ECQ0Rgp7nDvqIwuosAm5OcvWYVs28.zAmf8roiG6AbDk7B9dEm.2",
    role: "user",
  },
  JPusertest01: {
    passwordHash: "$2a$10$K1AlHXRVz82kqFIkz0SyhO8fOK5XaQyb2NS9tIBVOH/W/vGCkRHRy",
    role: "user",
  },
};
>>>>>>> bbe22dc9 (update)
