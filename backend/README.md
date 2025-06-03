# TradeFast Backend

Node.js + Express + Prisma + PostgreSQL backend for TradeFast project.

## Setup

```bash
cd backend
cp .env.example .env # edit values
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

## API

| Method | Endpoint           | Description           |
|--------|--------------------|-----------------------|
| POST   | /api/auth/register | Register new account  |
| POST   | /api/auth/login    | Login and get JWT     |
| GET    | /api/user/me       | Get current user info (auth required) |
```