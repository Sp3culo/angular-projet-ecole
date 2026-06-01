# Angular

Master IL 

2023 / 2025

Group IGS - Ipi Toulouse, France
___

- [Valentin](https://github.com/Tatin66) 
- [Clément](https://github.com/Speculool) 
- [Myriam](https://github.com/MyDen2)
- [Priscilla](https://github.com/SekmSet)

> use develop branch

## Configure JWT

You can change the JWT secret key in this following files: 
- `application-back/src/auth/auth.module.ts`
- `application-back/src/auth/jwt.strategy.ts`

## Configure database 

Create your table in SQL and set your database properties

>💡 **Set your DB environment**
> 
> Copy / Paste `application-back/src/properties/db.properties.example.ts`
> 
> And rename file into `application-back/src/properties/db.properties.ts`

Execute migrations, install dependencies first in `application-back` side 

```bash
  npm run typeorm migration:run -- -d src/data-source.ts
```

## Launch applications
Open two terminal :

```bash
cd project
```

### 💻 Application front
___

_Angular JS_

```bash
cd application-front
```

```bash
# /projet/application-front
npm i
```

```bash
# /projet/application-front
# Launch application
ng serve

# or 

npm run start
```

➡️ Running on port 4200

### 💻 Application back
___

_NestJS_

```bash
cd appliation-back
```

```bash
# projet/application-back
npm i 
```

```bash
# projet/application-back
# Launch application
npm run start
```

➡️ Running on port 3000

## Database

If you want to be admin to have access to `http://localhost:4200/general-knowledge/create` page

Make you admin directly in database

| 1    | 0     |
|------|-------|
| True | False |   

> If you are login, you need to log out first you to login again


## PWA

>**Requires**
>- Need to have Apache or nginx server install in your machine

```bash
# /projet/application-front
ng build
```
Use your application without internet connection

Copy the "dist" folder to the root of your WAMP/XAMPP to access it.