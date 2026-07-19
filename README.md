# zamokservices.com

Лендинг услуг вскрытия замков в Киеве. React + Vite, два языка интерфейса (UA/RU).

## Запуск

```bash
npm install
npm run dev      # dev-сервер на http://localhost:5173
npm run build    # продакшен-сборка в dist/
npm run preview  # локальный просмотр сборки
```

## Структура

- `src/i18n.js` — словари переводов UA/RU (плоские ключи)
- `src/LangContext.jsx` — контекст языка: выбор из `?lang=`, localStorage, обновление `<title>`/meta
- `src/config.js` — телефон, e-mail, ссылки на мессенджеры (заглушки — заменить на реальные)
- `src/components/` — секции лендинга
- `index.html` — SEO-меты, hreflang, JSON-LD (schema.org Locksmith)

## TODO перед продакшеном

- Заменить почту и ссылку на Telegram в `src/config.js` (телефон уже настоящий: +38 (063) 240-70-07)
- Подключить отправку формы заявки (`src/components/OrderForm.jsx`, помечено `TODO`)
- Добавить `og-image` и аналитику



