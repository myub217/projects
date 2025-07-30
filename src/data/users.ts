// src/data/users.ts
export interface User {
  passwordHash: string;
  role: "admin" | "user";
}

export const users: Record<string, User> = {
  admin2517: {
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