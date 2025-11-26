import { getToken } from "./auth";

const BASE_URL = "http://localhost:8080";

export async function apiFetch<T = unknown>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getToken();

  const publicRoutes = ["/auth/login", "/gym-owner"];

  const shouldSendToken = token && !publicRoutes.includes(endpoint);

  const headers = {
    "Content-Type": "application/json",
    ...(shouldSendToken && { Authorization: `Bearer ${token}` }),
    ...(options.headers || {}),
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Erro na requisição");
  }

  return response.json() as Promise<T>;
}
