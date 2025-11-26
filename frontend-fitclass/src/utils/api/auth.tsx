export function getToken(): string | null {
  return localStorage.getItem("token");
}

export function saveToken(token: string): void {
  localStorage.setItem("token", token);
}

export function getRole(): string | null {
  return localStorage.getItem("userRole");
}

export function saveRole(role: string): void {
  localStorage.setItem("userRole", role);
}

export function removeToken(): void {
  localStorage.removeItem("token");
}

export function isAuthenticated(): boolean {  
  return !!getToken();
}