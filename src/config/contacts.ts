/**
 * Контактні телефони та email — єдине джерело для Footer, CTA тощо.
 */

export const CONTACT_EMAIL = "it@clouds.ua";

export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;

/** Відображуваний номер і посилання tel: (E.164 без пробілів). */
export const CONTACT_PHONES = [
  { display: "0662982806", tel: "+380662982806" },
  { display: "0966517884", tel: "+380966517884" },
] as const;
