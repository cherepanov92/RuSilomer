/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  images: {
    unoptimized: true, // Отключаем оптимизацию изображений для статического экспорта
  },
  
  // Для GitHub Pages с подпапкой (не корневой домен) нужен basePath
  basePath: '/RuSilomer',
  
  // Asset prefix должен совпадать с basePath для статических файлов
  assetPrefix: '/RuSilomer',
  
  // Отключаем трайлинг слэш для чистых URL
  trailingSlash: false,
}

module.exports = nextConfig
