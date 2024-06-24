FROM node:14 as builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:1.19

COPY --from=builder /app/build /usr/share/nginx/html

COPY app.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]