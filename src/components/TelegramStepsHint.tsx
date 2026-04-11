import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

type Props = {
  /** Додаткові класи Tailwind (вирівнювання, max-width). */
  className?: string;
};

/**
 * Коротка підказка під кнопками Telegram: спочатку «Старт», потім заявка на консультацію.
 */
export function TelegramStepsHint({ className = "" }: Props) {
  const { language } = useLanguage();
  const text = translations[language].telegramStepsHint;

  return (
    <p className={`text-xs text-gray-500 leading-snug ${className}`} role="note">
      {text}
    </p>
  );
}
