
1. Для запуска проекта `npm run start`.
2. Для сборки production версии `npm run build`

Исходные файлы лежат в `./dist/`.

Для реализации некоторого функционала приложения, было принято решение использовать ES6, как самый удобный вариант без сторонних обвязок приложения.

Для генерации HTML страниц – шаблонизатор Pug, как один из наиболее распространенных инструментов, позволяющий сократить код приложения, увеличить читаемость, поддержку, а так же время на разработку.

Для стилизации – Sass. Причиной выбора этого инструмента стал ряд факторов, таких как:
 - Использование миксинов с целью автоматизации разработки.
 - Использование ондой цветовой гаммы на всём проекте.
 - Эстэтичный код на выходе.
 - Простота разработки.

Для сборки проекта используется webpack.