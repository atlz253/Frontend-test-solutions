export default {
  getFetchFailMessage: (statusCode: string) => `Не удалось получить данные с API: ${statusCode}`
} as const;