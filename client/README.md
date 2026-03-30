#  <h1 align="center">IT-Booster Challenge 6</h1>

## Клиент. Упаковываем Next JS + Nginx

  <p>Развёрнут Next Js проект.</p>
  <p>Через Dockerfile + docker compose собран образ для запуска Next Js + Nginx в качестве прокси сервера с маппингом в 80 порт localhost'a.</p>
  <p>В контейекр проброшена volume(ro) с nginx.conf в корне проекта.</p>

- Настройка проекта

```bash
$ git clone https://github.com/DminGerasimov/IT-Booster-Challenge6.git
$ cd IT-Booster-Challenge6/client
$ npm ci
```

- Сборка образа клиента
```bash
$ docker compose build --no-cache && docker compose up -d

```

- В браузере открываем <a href=http://localhost/>страницу, переходим по кнопке, вводим текс, отправляем на уже запущенный сервер конвертации текскта в pdf (Nest Js)  </a>
- Если подключиться к контейнеру Nest Js,
```bash
$ docker run -it nestapp-serv sh
$ ls
```
то в корне проекта найдём файлы pdf.
