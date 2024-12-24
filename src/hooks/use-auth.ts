export const useAuth = () => {
  const login = (email: string, password: string) => {
    localStorage.setItem('token', email)
  }
  const logout = () => {
    localStorage.removeItem('token')
  }

  const isAuthenticated = () => !!localStorage.getItem('token')

  return { login, logout, isAuthenticated }
}

export type AuthContextType = ReturnType<typeof useAuth>
