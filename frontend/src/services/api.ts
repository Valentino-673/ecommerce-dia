import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001';

export const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
  },
});

api.interceptors.request.use((config) => {
  if (config.data != null) {
    config.headers.set('Content-Type', 'application/json');
  }
  return config;
});

export type EstadoBackend = {
  status: string;
  message: string;
};

export async function obtenerEstadoBackend() {
  const { data } = await api.get<EstadoBackend>('/api/health');
  return data;
}
