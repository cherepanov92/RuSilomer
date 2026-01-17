## NEXT.JS

Версия Ноды v14.4.0

**Устанавливаем зависимости**

yarn install

**Режим разработки**

npm run dev

**Запускаем проект**

npm run build

npm run start

Сайт будет доступен На порту http://localhost:3000

## Документация
Как работать с либой, можно почитать тут https://nextjs.org/docs

=======
# rusilomer_frontend

## Деплой на GitHub Pages

Проект настроен для автоматического деплоя на GitHub Pages через GitHub Actions.

### Настройка GitHub Pages

1. Перейдите в настройки репозитория на GitHub: `Settings` → `Pages`
2. В разделе **Source** выберите:
   - **Source**: `GitHub Actions` (не Deploy from a branch)
3. Если используете кастомный домен (rusilomer.ru):
   - Введите домен в поле **Custom domain**
   - GitHub автоматически создаст CNAME файл (у вас уже есть `public/CNAME`)

### Автоматический деплой

При каждом push в ветку `master` автоматически:
- Собирается проект (`yarn build`)
- Деплоится на GitHub Pages

Workflow файл: `.github/workflows/deploy.yml`

### Ручной деплой

Можно запустить деплой вручную через GitHub Actions:
1. Перейдите в `Actions` → `Deploy to GitHub Pages`
2. Нажмите `Run workflow`

### Важно

- Если используете кастомный домен, `basePath` в `next.config.js` должен быть пустым (уже настроено)
- Если НЕ используете кастомный домен, измените `basePath` в `next.config.js` на `'/RuSilomer'`
- После первого деплоя сайт будет доступен по адресу: `https://cherepanov92.github.io/RuSilomer/` (или ваш кастомный домен)