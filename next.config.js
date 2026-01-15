/** @type {import('next').NextConfig} */
const nextConfig = {
  // Для Next.js 9.5 используем статический экспорт
  // output: 'export' доступен только с Next.js 13+
  // Вместо этого используем next export после build
  
  // Настройки для статического экспорта
  images: {
    unoptimized: true, // Отключаем оптимизацию изображений для статического экспорта
  },
  
  // Для кастомного домена basePath должен быть пустым
  basePath: '',
  
  // Asset prefix не нужен для корневого домена
  assetPrefix: '',
  
  // Отключаем трайлинг слэш для чистых URL
  trailingSlash: false,
}

module.exports = nextConfig
