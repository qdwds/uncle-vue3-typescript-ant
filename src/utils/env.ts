export function isDev(): boolean {
  return import.meta.env.DEV;
}

//  url
export const baseURL: string | undefined = import.meta.env.VITE_APP_API_URL;