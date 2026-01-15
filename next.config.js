/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
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
