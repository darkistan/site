/**
 * Зовнішні посилання, які використовуються у кількох секціях сайту.
 */

export const TELEGRAM_USERNAME = "ping_8_8_8";

/**
 * Готовий текст для першого повідомлення в Telegram.
 */
export const TELEGRAM_PREFILL_TEXT =
  "Привіт! Потрібна консультація щодо ІТ-підтримки та/або міграції у хмару.";

/**
 * Посилання в Telegram з чернеткою повідомлення.
 *
 * ВАЖЛИВО: `t.me/<username>?text=...` не гарантує prefill для приватних контактів у вебі.
 * Офіційний deep-link `tg://resolve?...&text=...` відкриває встановлений Telegram із чернеткою.
 * Довідка: https://core.telegram.org/api/links
 */
export const TELEGRAM_LINK = `tg://resolve?domain=${TELEGRAM_USERNAME}&text=${encodeURIComponent(
  TELEGRAM_PREFILL_TEXT,
)}&profile`;

/**
 * Запасний web-link (без гарантії prefill) — якщо Telegram не встановлений.
 */
export const TELEGRAM_WEB_LINK = `https://t.me/${TELEGRAM_USERNAME}`;
