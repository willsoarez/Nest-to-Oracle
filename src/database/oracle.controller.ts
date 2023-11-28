import { Controller, Get } from '@nestjs/common';
import { OracleService } from 'src/database/oracle.service';

@Controller('<controller-for-here>')
export class QueryExampleController {
  constructor(private readonly oracleService: OracleService) {}

  @Get('<example-return>')
  async QueryDatatable(): Promise<any[]> {
    try {
      const results = await this.oracleService.QueryExample();
      return results;
    } catch (error) {
      // Lidar com erros
      console.error(error);
      throw error;
    }
  }
}