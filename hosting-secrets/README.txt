Секрети для Telegram (Хостинг Україна / cloud-pro.com.ua)

1) У файловому менеджері підніміться з каталогу www на рівень вище (каталог cloud-pro.com.ua).

2) Створіть папку: .secrets

3) Створіть файл: telegram.php

4) Скопіюйте вміст з hosting-secrets/telegram.local.php.example і підставте:
   - TELEGRAM_TOKEN
   - TELEGRAM_CHAT_IDS (можна кілька через кому)

5) Переконайтесь, що файл НЕ лежить у www/ (веб-корінь).

Примітка: у репозиторії лежить лише .example-файл. Реальний telegram.php на сервері не комітимо.
