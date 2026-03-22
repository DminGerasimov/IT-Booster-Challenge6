#  <h1 align="center">IT-Booster Challenge 4</h1>

## Сервер. Упаковываем Nest JS + postgres + redis

  <p>Через Dockerfile развёрнут Nest Js проект, с двумя энпойнтами '/up', '/down.</p>
  <p>Через Dockerfile + docker compose собран образ для запуска Nest Js + postgres + redis (GUI).</p>
  <p>В контейер проброшена volume(ro) с redis.conf в корне проекта (login & password) и volume(rw) для хранения на диске базы redis.</p>
  <p>В контейер проброшена volume(rw) для хранения на диске базы postgres.</p>

- Настройка проекта

```bash
$ cd IT-Booster-Challenge4/server
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

- Запускаем docker (Docker desktop) на локальной машине. Настраиваем сервис Docker на работу через ТСР:  
   - на Docker desktop - в настройках - галочка Expose daemon on tcp://localhost:2375 without TLS  
   - на unix -  в файле /etc/docker/daemon.json правим на  
  ```json
  {
    "hosts": ["unix:///var/run/docker.sock", "tcp://0.0.0.0:2375"]
  }
  ```
  далее,
  ```bash
  $ sudo systemctl restart docker
  $ sudo ufw allow 2375/tcp
  ```

- В браузере открываем эндпойнт <a href=http://localhost:3000/up>http://localhost:3000/up. </a> Ждём запуска контейнера с образа alpine:latest.  
Если в локальном репозитарии нет образа alpine, ждём пока скачается и снова идём на эндпойнт <a href=http://localhost:3000/up>http://localhost:3000/up.</a>

Смотрим в докере контейнеры:
```bash
$ docker container ls
```
- В браузере открываем эндпойнт <a href=http://localhost:3000/down>http://localhost:3000/down. </a> Ждём Остановки контейнера(ов) с образа alpine.



## Документация и ссылки

Ознакомьтесь с несколькими ресурсами, которые могут пригодиться при работе с Docker, Dockerode, Next JS, Nest JS. :

- [Next JS](https://nextjs.org/docs).
- [Nest JS](https://docs.nestjs.com).
- [Docker API](https://docs.docker.com/reference/api/engine).
- [Dockerode](https://github.com/apocas/dockerode).
- [Explore networking how-tos on Docker Desktop](https://docs.docker.com/desktop/features/networking/networking-how-tos/).
