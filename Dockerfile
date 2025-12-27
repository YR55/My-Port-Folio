# ---------- Step 1: Build React App ----------
FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# 👇 pass env vars at build time
ARG REACT_APP_EMAILJS_SERVICE_ID
ARG REACT_APP_EMAILJS_TEMPLATE_ID
ARG REACT_APP_EMAILJS_PUBLIC_KEY

ENV REACT_APP_EMAILJS_SERVICE_ID=$REACT_APP_EMAILJS_SERVICE_ID
ENV REACT_APP_EMAILJS_TEMPLATE_ID=$REACT_APP_EMAILJS_TEMPLATE_ID
ENV REACT_APP_EMAILJS_PUBLIC_KEY=$REACT_APP_EMAILJS_PUBLIC_KEY

RUN npm run build



# ---------- Step 2: Serve with Nginx ----------
FROM nginx:alpine

# remove default nginx config
RUN rm -rf /usr/share/nginx/html/*

# copy build output to nginx
COPY --from=build /app/build /usr/share/nginx/html

# expose port
EXPOSE 80

# start nginx
CMD ["nginx", "-g", "daemon off;"]
