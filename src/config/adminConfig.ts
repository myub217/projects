// ✅ src/config/adminConfig.ts – Full Auth Config (พร้อมใช้งานจริง, สมบูรณ์)

type UserMap = Record<string, string>

export const USERS: UserMap = {
  admin2517: 'myub2517',
  JPKYETONKEY201: 'CODSLOUVPJ301',
  JPKYETONKEY222: 'CODSLOUVPJ337',
  JPKYETONKEY233: 'CODSLOUVPJ379',
  JPKYETONKEY244: 'CODSLOUVPJ305',
  JPKYETONKEY255: 'CODSLOUVPJ398',
  JPKYETONKEY266: 'CODSLOUVPJ320',
  JPKYETONKEY277: 'CODSLOUVPJ341',
  JPKYETONKEY288: 'CODSLOUVPJ359',
  JPKYETONKEY299: 'CODSLOUVPJ407',
  JPKYETONKEY300: 'CODSLOUVPJ399',
  JPusertest01: 'Peudhdo5',
}

export interface AuthInput {
  username: string
  password: string
}

export const isValidUser = ({ username, password }: AuthInput): boolean => {
  const expectedPassword = USERS[username]
  return expectedPassword !== undefined && expectedPassword === password
}

export const getAllUsernames = (): string[] => Object.keys(USERS)

export const getUserPassword = (username: string): string | null => USERS[username] ?? null
