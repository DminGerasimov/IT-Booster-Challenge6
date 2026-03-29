#  <h1 align="center">IT-Booster Challenge 6</h1>

## Сервер. Упаковываем Nest JS + redis

  <p>Через Dockerfile развёрнут Nest Js проект, с двумя энпойнтами '/createjob', '/checkjobs.</p>
  <p>Через Dockerfile + docker compose собран образ для запуска Nest Js + redis (GUI).</p>
  <p>В контейер проброшена volume(ro) с redis.conf в корне проекта (login & password) и volume(rw) для хранения на диске базы redis.</p>

- Настройка проекта

```bash
$ cd IT-Booster-Challenge6/server
$ npm ci
```

- Сборка образа server'a
```bash
$ docker compose build
$ docker compose up -d
```
Разрешаем докеру доступ к локальной папке для redis.


- В браузере открываем <a href=http://localhost:8080/>GUI Redis. </a>  
Логин:admin_user и пароль:your_secure_password - лежат в репозитарие только для учебных целей.  
Не забываем про .env & docker secrets в проде.

- Далее идём в клиент, создаём задание в очередь, смотрим, что оно исполнилось.
