import type { Language } from "@/contexts/LanguageContext";

export const translations = {
  UA: {
    // Header
    nav: {
      services: "Послуги",
      benefits: "Переваги",
      process: "Як ми працюємо",
      contacts: "Контакти",
      telegram: "Telegram",
    },
    // Hero Section
    hero: {
      badge: "Надійна ІТ-підтримка",
      headline1: "Надійна ІТ-підтримка",
      headline2: "та міграція у хмару",
      subheadline:
        "Віддалене адміністрування 24/7 (за домовленістю). Оперативні виїзди у Дніпрі (за домовленістю). Відмовтеся від дорогого «заліза» — безпечно перенесемо ваші дані та 1С у хмару.",
      cta: "Розрахувати вартість у Telegram",
      stats: {
        support: "Підтримка 24/7 (за домовленістю)",
        uptime: "Час безвідмовної роботи",
      },
    },
    // Services Section
    services: {
      badge: "Наші послуги",
      title: "Комплексні ІТ-рішення",
      subtitle: "Сучасні технології для вашого бізнесу",
      card1: {
        title: "Хмарні рішення та 1С",
        description:
          "Енергонезалежна хмара для 1С і даних: ваші системи доступні з будь‑якого місця, а доступ 24/7 до даних і резервне відновлення — під контролем.",
      },
      card2: {
        title: "Адміністрування серверів",
        description: "Налаштування та моніторинг Linux/Windows.",
      },
      card3: {
        title: "Мережева інфраструктура",
        description: "Wi-Fi, маршрутизація, захищені VPN-канали.",
      },
      card4: {
        title: "Віддалена підтримка",
        description: "Щоденний helpdesk та автоматичні бекапи.",
      },
      cta: "Обговоримо ваші потреби",
      ctaQuestion: "Потрібне індивідуальне рішення?",
    },
    // Benefits Section
    benefits: {
      badge: "Чому ми",
      title: "Аутсорсинг vs. Штатний працівник",
      subtitle: "Порівняння на основі реальних даних",
      card1: {
        title: "Жодних переплат",
        description: "Ви платите лише за результат, без податків та витрат на робоче місце.",
        stat: "Економія до 60%",
      },
      card2: {
        title: "100% безперервність",
        description:
          "На відміну від штатного працівника, наша команда не хворіє і не йде у відпустку.",
        stat: "24/7/365 (за домовленістю)",
      },
      card3: {
        title: "Колективна експертиза",
        description: "Досвід цілого відділу інженерів замість однієї людини.",
        stat: "Команда експертів",
      },
      comparison: {
        inhouse: "Штатний працівник",
        outsourcing: "IT Аутсорсинг",
        salary: "Зарплата + податки",
        availability: "Доступність",
        expertise: "Експертиза",
        vacation: "Відпустки/лікарняні",
        payment: "Оплата за послуги",
        team: "Команда",
        specialist: "1 спеціаліст",
        savings: "Економія до 60%",
        savingsDesc: "в порівнянні зі штатним працівником",
      },
    },
    // Process Section
    process: {
      badge: "Процес роботи",
      title: "Seamless Onboarding",
      subtitle: "Прозорий та швидкий процес від першого контакту до постійної підтримки",
      step1: {
        title: "Заявка в Telegram",
        description: "Надішліть нам повідомлення про ваші потреби",
      },
      step2: {
        title: "Швидкий ІТ-аудит",
        description: "Аналіз вашої поточної інфраструктури",
      },
      step3: {
        title: "Міграція у хмару",
        description: "Безпечне перенесення даних та налаштування",
      },
      step4: {
        title: "Підтримка 24/7 (за домовленістю)",
        description: "Постійний моніторинг та допомога",
      },
      step: "Крок",
      timeline: "Середній час запуску: 3-5 днів",
      timelineDesc: "Більшість міграцій відбуваються без зупинки робочих процесів",
      startNow: "Почати зараз",
    },
    // CTA Section
    cta: {
      badge: "Безкоштовна консультація",
      headline1: "Готові оптимізувати",
      headline2: "ІТ-інфраструктуру",
      headline3: "та зменшити витрати?",
      subheadline:
        "Надішліть нам повідомлення в Telegram, щоб отримати індивідуальний план вартості для вашого бізнесу. Безкоштовна консультація та аудит інфраструктури включені.",
      button: "Отримати розрахунок у Telegram",
      email: "Або напишіть email",
      trust1: {
        title: "Безпека та конфіденційність",
        description: "Шифрування даних",
      },
      trust2: {
        title: "Швидка відповідь",
        description: "До 15 хвилин",
      },
      trust3: {
        title: "Для бізнесу",
        description: "Рішення для МСБ",
      },
      social: {
        companies: "компаній",
        trust: "довіряють нам",
        rating: "рейтинг",
      },
    },
    // Footer
    footer: {
      tagline: "Професійний ІТ-аутсорсинг та міграція у хмару для малого та середнього бізнесу.",
      navigation: "Навігація",
      servicesTitle: "Послуги",
      contacts: "Контакти",
      location: "Дніпро, Україна",
      locationDesc: "Виїзди по місту (за домовленістю)",
      schedule: "Пн-Пт: 9:00 - 18:00",
      support: "Підтримка 24/7 (за домовленістю)",
      rights: "Усі права захищені",
      privacy: "Політика конфіденційності",
      terms: "Умови використання",
      since: "Працюємо для вашого успіху з",
      servicesList: {
        cloud: "Хмарні рішення",
        servers: "Адміністрування серверів",
        network: "Мережева інфраструктура",
        support: "Віддалена підтримка",
        accounting: "1С у хмарі",
      },
    },
    // Clients Section
    clients: {
      badge: "Наші клієнти",
      title: "Нам довіряють",
      subtitle: "Провідні компанії України обрали наші ІТ-рішення",
      companies: "компаній",
      trustUs: "довіряють нам",
    },
  },
  RU: {
    // Header
    nav: {
      services: "Услуги",
      benefits: "Преимущества",
      process: "Как мы работаем",
      contacts: "Контакты",
      telegram: "Telegram",
    },
    // Hero Section
    hero: {
      badge: "Надежная ИТ-поддержка",
      headline1: "Надежная ИТ-поддержка",
      headline2: "и миграция в облако",
      subheadline:
        "Удаленное администрирование 24/7 (по договоренности). Оперативные выезды в Днепре (по договоренности). Откажитесь от дорогого «железа» — безопасно перенесем ваши данные и 1С в облако.",
      cta: "Рассчитать стоимость в Telegram",
      stats: {
        support: "Поддержка 24/7 (по договоренности)",
        uptime: "Время бесперебойной работы",
      },
    },
    // Services Section
    services: {
      badge: "Наши услуги",
      title: "Комплексные ИТ-решения",
      subtitle: "Современные технологии для вашего бизнеса",
      card1: {
        title: "Облачные решения и 1С",
        description: "Перенос баз данных в безопасную облачную среду.",
      },
      card2: {
        title: "Администрирование серверов",
        description: "Настройка и мониторинг Linux/Windows.",
      },
      card3: {
        title: "Сетевая инфраструктура",
        description: "Wi-Fi, маршрутизация, защищенные VPN-каналы.",
      },
      card4: {
        title: "Удаленная поддержка",
        description: "Ежедневный helpdesk и автоматические бекапы.",
      },
      cta: "Обсудим ваши потребности",
      ctaQuestion: "Нужно индивидуальное решение?",
    },
    // Benefits Section
    benefits: {
      badge: "Почему мы",
      title: "Аутсорсинг vs. Штатный сотрудник",
      subtitle: "Сравнение на основе реальных данных",
      card1: {
        title: "Никаких переплат",
        description: "Вы платите только за результат, без налогов и расходов на рабочее место.",
        stat: "Экономия до 60%",
      },
      card2: {
        title: "100% непрерывность",
        description:
          "В отличие от штатного сотрудника, наша команда не болеет и не уходит в отпуск.",
        stat: "24/7/365 (по договоренности)",
      },
      card3: {
        title: "Коллективная экспертиза",
        description: "Опыт целого отдела инженеров вместо одного человека.",
        stat: "Команда экспертов",
      },
      comparison: {
        inhouse: "Штатный сотрудник",
        outsourcing: "IT Аутсорсинг",
        salary: "Зарплата + налоги",
        availability: "Доступность",
        expertise: "Экспертиза",
        vacation: "Отпуска/больничные",
        payment: "Оплата за услуги",
        team: "Команда",
        specialist: "1 специалист",
        savings: "Экономия до 60%",
        savingsDesc: "по сравнению со штатным сотрудником",
      },
    },
    // Process Section
    process: {
      badge: "Процесс работы",
      title: "Seamless Onboarding",
      subtitle: "Прозрачный и быстрый процесс от первого контакта до постоянной поддержки",
      step1: {
        title: "Заявка в Telegram",
        description: "Отправьте нам сообщение о ваших потребностях",
      },
      step2: {
        title: "Быстрый ИТ-аудит",
        description: "Анализ вашей текущей инфраструктуры",
      },
      step3: {
        title: "Миграция в облако",
        description: "Безопасный перенос данных и настройка",
      },
      step4: {
        title: "Поддержка 24/7 (по договоренности)",
        description: "Постоянный мониторинг и помощь",
      },
      step: "Шаг",
      timeline: "Среднее время запуска: 3-5 дней",
      timelineDesc: "Большинство миграций происходят без остановки рабочих процессов",
      startNow: "Начать сейчас",
    },
    // CTA Section
    cta: {
      badge: "Бесплатная консультация",
      headline1: "Готовы оптимизировать",
      headline2: "ИТ-инфраструктуру",
      headline3: "и снизить затраты?",
      subheadline:
        "Отправьте нам сообщение в Telegram, чтобы получить индивидуальный план стоимости для вашего бизнеса. Бесплатная консультация и аудит инфраструктуры включены.",
      button: "Получить расчет в Telegram",
      email: "Или напишите email",
      trust1: {
        title: "Безопасность и конфиденциальность",
        description: "Шифрование данных",
      },
      trust2: {
        title: "Быстрый ответ",
        description: "До 15 минут",
      },
      trust3: {
        title: "Для бизнеса",
        description: "Решения для МСБ",
      },
      social: {
        companies: "компаний",
        trust: "доверяют нам",
        rating: "рейтинг",
      },
    },
    // Footer
    footer: {
      tagline: "Профессиональный ИТ-аутсорсинг и миграция в облако для малого и среднего бизнеса.",
      navigation: "Навигация",
      servicesTitle: "Услуги",
      contacts: "Контакты",
      location: "Днепр, Украина",
      locationDesc: "Выезды по городу (по договоренности)",
      schedule: "Пн-Пт: 9:00 - 18:00",
      support: "Поддержка 24/7 (по договоренности)",
      rights: "Все права защищены",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      since: "Работаем для вашего успеха с",
      servicesList: {
        cloud: "Облачные решения",
        servers: "Администрирование серверов",
        network: "Сетевая инфраструктура",
        support: "Удаленная поддержка",
        accounting: "1С в облаке",
      },
    },
    // Clients Section
    clients: {
      badge: "Наші клієнти",
      title: "Нам довіряють",
      subtitle: "Провідні компанії України обрали наші ІТ-рішення",
      companies: "компаній",
      trustUs: "довіряють нам",
    },
  },
  EN: {
    // Header
    nav: {
      services: "Services",
      benefits: "Benefits",
      process: "How We Work",
      contacts: "Contacts",
      telegram: "Telegram",
    },
    // Hero Section
    hero: {
      badge: "Reliable IT support",
      headline1: "Reliable IT support",
      headline2: "and Cloud Migration",
      subheadline:
        "Remote administration 24/7 (by agreement). On-site visits in Dnipro (by agreement). Forget about expensive hardware — we will securely migrate your data and 1C to the cloud.",
      cta: "Calculate Cost in Telegram",
      stats: {
        support: "24/7 support (by agreement)",
        uptime: "Uptime",
      },
    },
    // Services Section
    services: {
      badge: "Our Services",
      title: "Comprehensive IT Solutions",
      subtitle: "Modern technologies for your business",
      card1: {
        title: "Cloud Solutions & 1C",
        description: "Database migration to secure cloud environments.",
      },
      card2: {
        title: "Server Administration",
        description: "Setup and monitoring of Linux/Windows.",
      },
      card3: {
        title: "Network Infrastructure",
        description: "Wi-Fi, routing, secure VPN channels.",
      },
      card4: {
        title: "Remote Support",
        description: "Daily helpdesk and automatic backups.",
      },
      cta: "Let's discuss your needs",
      ctaQuestion: "Need a custom solution?",
    },
    // Benefits Section
    benefits: {
      badge: "Why Us",
      title: "Outsourcing vs. In-House Employee",
      subtitle: "Comparison based on real data",
      card1: {
        title: "No Overpayments",
        description: "You only pay for results, without taxes and workplace costs.",
        stat: "Save up to 60%",
      },
      card2: {
        title: "100% Continuity",
        description: "Unlike an in-house employee, our team never gets sick or goes on vacation.",
        stat: "24/7/365 (by agreement)",
      },
      card3: {
        title: "Collective Expertise",
        description: "Experience of an entire engineering team instead of one person.",
        stat: "Expert Team",
      },
      comparison: {
        inhouse: "In-House Employee",
        outsourcing: "IT Outsourcing",
        salary: "Salary + taxes",
        availability: "Availability",
        expertise: "Expertise",
        vacation: "Vacation/sick leave",
        payment: "Pay for services",
        team: "Team",
        specialist: "1 specialist",
        savings: "Save up to 60%",
        savingsDesc: "compared to in-house employee",
      },
    },
    // Process Section
    process: {
      badge: "Work Process",
      title: "Seamless Onboarding",
      subtitle: "Transparent and fast process from first contact to ongoing support",
      step1: {
        title: "Request via Telegram",
        description: "Send us a message about your needs",
      },
      step2: {
        title: "Quick IT Audit",
        description: "Analysis of your current infrastructure",
      },
      step3: {
        title: "Cloud Migration",
        description: "Secure data transfer and configuration",
      },
      step4: {
        title: "24/7 support (by agreement)",
        description: "Continuous monitoring and assistance",
      },
      step: "Step",
      timeline: "Average launch time: 3-5 days",
      timelineDesc: "Most migrations occur without stopping work processes",
      startNow: "Start Now",
    },
    // CTA Section
    cta: {
      badge: "Free Consultation",
      headline1: "Ready to optimize",
      headline2: "IT infrastructure",
      headline3: "and reduce costs?",
      subheadline:
        "Send us a message on Telegram to get a custom pricing plan for your business. Free consultation and infrastructure audit included.",
      button: "Get Quote in Telegram",
      email: "Or write an email",
      trust1: {
        title: "Security & Privacy",
        description: "Data encryption",
      },
      trust2: {
        title: "Fast Response",
        description: "Up to 15 minutes",
      },
      trust3: {
        title: "For Business",
        description: "SMB Solutions",
      },
      social: {
        companies: "companies",
        trust: "trust us",
        rating: "rating",
      },
    },
    // Footer
    footer: {
      tagline: "Professional IT outsourcing and cloud migration for small and medium businesses.",
      navigation: "Navigation",
      servicesTitle: "Services",
      contacts: "Contacts",
      location: "Dnipro, Ukraine",
      locationDesc: "On-site visits (by agreement)",
      schedule: "Mon-Fri: 9:00 - 18:00",
      support: "24/7 support (by agreement)",
      rights: "All rights reserved",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      since: "Working for your success since",
      servicesList: {
        cloud: "Cloud Solutions",
        servers: "Server Administration",
        network: "Network Infrastructure",
        support: "Remote Support",
        accounting: "1C in Cloud",
      },
    },
    // Clients Section
    clients: {
      badge: "Our Clients",
      title: "Trusted by Leaders",
      subtitle: "Leading Ukrainian companies chose our IT solutions",
      companies: "companies",
      trustUs: "trust us",
    },
  },
} as const satisfies Record<Language, unknown>;
