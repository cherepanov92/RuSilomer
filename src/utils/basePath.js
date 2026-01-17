/**
 * Единая утилита для определения basePath
 * В development всегда пустой, в production использует переменную окружения
 */
export const getBasePath = () => {
  if (process.env.NODE_ENV === 'development') {
    return ''
  }
  return process.env.NEXT_PUBLIC_BASE_PATH || ''
}

/**
 * Генерирует абсолютный URL для изображений
 */
export const getAbsoluteUrl = (path) => {
  const basePath = getBasePath()
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://cherepanov92.github.io'
  return `${baseUrl}${basePath}${path}`
}

/**
 * Возвращает стандартное изображение для OpenGraph метатегов
 */
export const getOpenGraphImage = (alt = 'Русский Силомер') => {
  return [
    {
      url: getAbsoluteUrl('/images/main_first.jpeg'),
      width: 1200,
      height: 630,
      alt: alt,
    },
  ]
}
