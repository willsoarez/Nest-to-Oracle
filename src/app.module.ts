import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OracleModule } from './database/oracle.module';

@Module({
  
  imports: [OracleModule],
  controllers: [],
  providers: [],
  
})

export class AppModule {}