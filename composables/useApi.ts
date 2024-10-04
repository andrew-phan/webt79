export default async function useApi(endpoint: string, options: any = {}) {
  const config = useRuntimeConfig();

  return await $fetch(`${config.public.apiBase}/${endpoint}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${options.token || ""}`,
      ...options.headers,
    },
  });

}
