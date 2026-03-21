#  <h1 align="center">IT-Booster Challenge 4</h1>

## Клиент. Упаковываем Next JS + Nginx

  <p>Развёрнут Next Js проект, с парой станиц.</p>
  <p>Через Dockerfile + docker compose собран образ для запуска Next Js + Nginx в качестве прокси сервера с маппингом в 80 порт localhost'a.</p>
  <p>В контейекр проброшена volume(ro) с nginx.conf в корне проекта.</p>

- Настройка проекта

```bash
$ git clone https://github.com/DminGerasimov/IT-Booster-Challenge4.git
$ cd IT-Booster-Challenge4/client
$ npm ci
```

- Сборка образа клиента
```bash
$ docker compose build --no-cache && docker compose up -d

```

- В браузере открываем <a href=http://localhost/>страницу c 2-мя линками</a>
