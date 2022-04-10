FROM node:16.10.0
WORKDIR /api
COPY . .

#RUN npm install --global yarn
RUN yarn

ENTRYPOINT yarn dev

EXPOSE 3333
