# Dockerfile for Rehearsal Scheduler
FROM node:18-alpine
WORKDIR /app
COPY ./backend ./backend
COPY ./frontend ./frontend
RUN cd backend && npm install
RUN cd ../frontend && npm install
EXPOSE 5000
CMD ["node", "backend/server.js"]
