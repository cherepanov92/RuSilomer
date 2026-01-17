/** @type {import('next').NextConfig} */
// В development basePath пустой
// В production: если USE_BASE_PATH=true, то используем для GitHub Pages, иначе пустой для локального тестирования
const isProduction = process.env.NODE_ENV === 'production'
const useBasePath = process.env.USE_BASE_PATH === 'true'
const basePath = (isProduction && useBasePath) ? '/RuSilomer' : ''

const nextConfig = {
  // Статический экспорт только для production (для GitHub Pages)
  output: isProduction ? 'export' : undefined,
  
  images: {
    unoptimized: true, // Отключаем оптимизацию изображений для статического экспорта
  },
  
  // Для GitHub Pages с подпапкой (не корневой домен) нужен basePath
  basePath: basePath,
  
  // Asset prefix должен совпадать с basePath для статических файлов
  assetPrefix: basePath,
  
  // Отключаем трайлинг слэш для чистых URL
  trailingSlash: false,
  
  // Переменные окружения для использования в коде
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_BASE_URL: 'https://cherepanov92.github.io',
  },
}

module.exports = nextConfig
