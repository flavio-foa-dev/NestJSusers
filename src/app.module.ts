import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { FilterExceptionHTTp } from './common/filters/filter-exception-http';
import { UsersModule } from './domain/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FilterExceptionHTTp,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
