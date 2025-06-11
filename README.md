# SaasStarter

## Stack

- ▲ [Next.js](https://nextjs.org/) for webapp
- 🖼 [Chakra UI](https://chakra-ui.com/) for UI components
- 📦 [Prisma](https://www.prisma.io/) for database
- 💰 [Stripe](https://stripe.com/) for payments

## Getting Started

Install dependencies:

```bash
npm install
```

You can use Docker to run a local postgres database and maildev server (accessible at http://localhost:1080):

```bash
docker-compose up -d
```

Create .env.local:

```bash
cp .env.example .env.local
```

Update environment variable values:

| Environment Variable | Explanation                                                                                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DATABASE_URL         | The connection string for your PostgreSQL database. It will be `postgresql://gawasa:gawasa@localhost:5432/gawasa` if you are using the provided docket setup. |

Run migrations

```bash
yarn prisma:migrate:dev
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
