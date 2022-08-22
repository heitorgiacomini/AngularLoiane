FROM node:lts-alpine as angular
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/requests-http /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
##############
##############
##############
# FROM node:lts-alpine as angular
# ENV NODE_ENV=production
# WORKDIR /app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"] /app
# RUN npm install --production --silent && mv node_modules ../
# COPY . .
# CMD ["npm", "build"]

# # FROM node:lts-alpine as angular
# # ENV NODE_ENV=production
# # WORKDIR /app
# # COPY package.json /app
# # RUN npm install --silent
# # COPY . .
# # RUN npm run build
# # # RUN npm run-script build
# # #  RUN ./node_modules/.bin/ng build --configuration production

# FROM nginx:alpine
# VOLUME /var/cache/nginx
# # COPY --from=angular /dist/request-http /usr/share/nginx/html
# COPY --from=angular app/dist/request-http /usr/share/nginx/html
# COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

#docker build -t request-http .
#docker run -p 8082:80 request-http



#############
#############
# FROM node:lts-alpine as angular
# ENV NODE_ENV=production
# WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
# COPY . .
# CMD ["npm", "build"]
# #O EXPOSE 3000
# #O RUN chown -R node /usr/src/app
# #O USER node


# # FROM node:lts-alpine as angular
# # ENV NODE_ENV=production
# # WORKDIR /app
# # COPY package.json /app
# # RUN npm install --silent
# # COPY . .
# # RUN npm run build
# # # RUN npm run-script build
# # #  RUN ./node_modules/.bin/ng build --configuration production

# FROM nginx:alpine
# VOLUME /var/cache/nginx
# COPY --from=angular /dist/request-http /usr/share/nginx/html
# # COPY --from=angular app/dist/request-http /usr/share/nginx/html
# COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# #docker build -t request-http .
# #docker run -p 8082:80 request-http


