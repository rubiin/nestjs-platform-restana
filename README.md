<div align="center">

# nestjs-platform-restana [WIP]

</div>

Nest.js adapter for restana

## Install

```sh
npm i nestjs-platform-restana
yarn add nestjs-platform-restana
pnpm i nestjs-platform-restana

```

## Usage:

```typescript
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { RestanaHttpAdapter,NestRestanaApplication } from 'nestjs-platform-restana'

async function bootstrap() {
  const app = await NestFactory.create<NestRestanaApplication>(AppModule, new RestanaHttpAdapter())
  await app.listen(3000)
}
bootstrap()
```

[npm-url]: https://npmjs.com/package/nestjs-platform-restana
[github-actions]: https://github.com/rubiin/nestjs-platform-restana/actions
[cov-img]: https://img.shields.io/coveralls/github/rubiin/nestjs-platform-restana/?style=for-the-badge&color=hotpink
[cov-url]: https://coveralls.io/github/rubiin/nestjs-platform-restana
