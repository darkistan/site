/**
 * Зовнішні посилання, які використовуються у кількох секціях сайту.
 */

/** Username бота без символу @ */
export const TELEGRAM_USERNAME = "sddesk_bot";

/**
 * Відкрити чат із ботом у встановленому Telegram (без попередньо заповненого тексту).
 * Довідка: https://core.telegram.org/api/links
 */
export const TELEGRAM_LINK = `tg://resolve?domain=${TELEGRAM_USERNAME}`;

/** Web-посилання на бота (якщо клієнт не обробляє tg://). */
export const TELEGRAM_WEB_LINK = `https://t.me/${TELEGRAM_USERNAME}`;
