# Запуск сайту через NSSM (Windows Service)

Коротка інструкція, як підняти продакшн-версію локально і тримати її як службу Windows за допомогою [NSSM](https://nssm.cc/) (Non-Sucking Service Manager).

## Що робить проєкт

- **`npm run build`** — збирає статику в `dist/`.
- **`npm run preview`** — віддає `dist/` через вбудований сервер Vite на **`127.0.0.1:4173`** (не слухає всю мережу).
- Скрипт **`run-server.bat`** спочатку виконує збірку, потім запускає preview; логи пишуться в `logs\`.

Шлях до проєкту в прикладах: `e:\Projects\site` — за потреби замініть на свій.

## Вимоги

- Windows.
- Встановлені **Node.js** і **npm** (щоб `npm` був у `PATH` для облікового запису, під яким працює служба).
- **`nssm.exe`** у каталозі `C:\nssm\win64\` (повний шлях: `C:\nssm\win64\nssm.exe`).

## 1. Перевірка вручну (без NSSM)

У PowerShell або cmd:

```bat
cd /d e:\Projects\site
run-server.bat
```

У браузері: `http://127.0.0.1:4173/` — має відкриватись сайт. Зупинка: `Ctrl+C` у вікні консолі.

## 2. Створення служби через NSSM

Відкрийте **cmd або PowerShell від імені адміністратора**.

### 2.1. Встановити службу

Приклад імені служби: `CloudITWeb` (можна змінити).

```bat
C:\nssm\win64\nssm.exe install CloudITWeb "e:\Projects\site\run-server.bat"
```

### 2.2. Робочий каталог

```bat
C:\nssm\win64\nssm.exe set CloudITWeb AppDirectory "e:\Projects\site"
```

### 2.3. Логи NSSM (окремо від `logs\web-server.log`)

```bat
C:\nssm\win64\nssm.exe set CloudITWeb AppStdout "e:\Projects\site\logs\nssm-stdout.log"
C:\nssm\win64\nssm.exe set CloudITWeb AppStderr "e:\Projects\site\logs\nssm-stderr.log"
```

За потреби у NSSM увімкніть ротацію файлів логів (в GUI: **nssm edit CloudITWeb** → вкладка **I/O**).

### 2.4. Автозапуск і старт

```bat
C:\nssm\win64\nssm.exe set CloudITWeb Start SERVICE_AUTO_START
C:\nssm\win64\nssm.exe start CloudITWeb
```

## 3. Керування службою

| Дія        | Команда |
|-----------|---------|
| Запуск    | `C:\nssm\win64\nssm.exe start CloudITWeb` |
| Зупинка   | `C:\nssm\win64\nssm.exe stop CloudITWeb` |
| Перезапуск| `C:\nssm\win64\nssm.exe restart CloudITWeb` |
| Статус    | `sc query CloudITWeb` |
| Видалити  | `C:\nssm\win64\nssm.exe remove CloudITWeb confirm` |

Якщо `C:\nssm\win64` додано в `PATH`, можна викликати лише `nssm.exe` без повного шляху.

## 4. Обліковий запис служби

Якщо служба стартує під **Local System**, переконайтесь, що для цього контексту доступні **Node** і **npm** (інколи їх додають у системний `PATH` або вказують повний шлях до `npm.cmd` у NSSM).

Надійний варіант — запуск служби під користувачем, у якого вже працює `npm` у терміналі (вкладка **Log on** у `nssm edit` або відповідний параметр).

## 5. Cloudflare Tunnel

У налаштуваннях тунелю **origin** має вказувати на локальний preview:

`http://127.0.0.1:4173`

Домен у `vite.config.ts` має бути в **`preview.allowedHosts`**, інакше Vite відхилить запити з заголовком `Host` вашого піддомену.

## 6. Типові проблеми

- **Служба в «Stopped» одразу після старту** — дивіться `logs\web-server.log` та `logs\nssm-stderr.log`; часто це відсутній `npm` у PATH для служби.
- **Порт зайнятий** — зупиніть інший процес на `4173` або змініть порт у `vite.config.ts` і в `run-server.bat` узгоджено.
- **Після оновлення коду** — перезапустіть службу, щоб `run-server.bat` знову виконав `npm run build` (або зробіть окремий сценарій лише з `preview`, якщо збірку робите вручну).
