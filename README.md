[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/gtp0On7_)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15237223&assignment_repo_type=AssignmentRepo)

### Jak uruchomić projekt 

1. Klonujemy repo 

2. Wchodzimy do odpowiedniego folderu 

3. Uruchamiamy kontener mongo

```sh
docker run -d \
    -p 27017:27017 \
    --name test-mongo \
    -v data-vol:/data/db \
    mongo:latest
```

4. Uruchamiamy kontener keycloak

```sh 
docker run -d \
    -p 8080:8080 \
    -e KEYCLOAK_ADMIN=admin \
    -e KEYCLOAK_ADMIN_PASSWORD=admin \
    -v keycloak:/opt/keycloak/data/ \
    quay.io/keycloak/keycloak:21.0.2 start-dev
```

5. Pobieramy zależności i uruchamiamy backend 

```sh
cd backend
pip install requirements.txt
python3 main.py
```

6. Pobieramy zależności i uruchamiamy frontend
```sh
cd frontend
npm install
npm run start
```

7. Server będzie dostępny pod 'http://locahost:5000/' a client pod 'http://localhost:3000/'
