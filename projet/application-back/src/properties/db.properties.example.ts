export const dbProperties: any = {
  type: '',
  host: '',
  port: 0,
  username: '',
  password: '',
  database: '',
  synchronize: false,
  logging: false,
  entities: ['src/**/**.entity{.ts,.js}'],
  migrations: ['migrations/**/*{.ts,.js}'],
  cli: {
    "migrationsDir": "src/migrations"
  },
  subscribers: [],
};