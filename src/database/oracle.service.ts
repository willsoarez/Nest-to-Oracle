import { Injectable } from '@nestjs/common';
import * as oracledb from 'oracledb';

@Injectable()
export class OracleService {
  private connection: oracledb.Connection;

  async init() {
    try {
      await oracledb.initOracleClient({libDir: ".\\<folder-name-instant-client>"});
      await this.connect();
    } catch (error) {
      console.error('Error initializing OracleDB:', error.message || error);
      throw error;
    };
  };

  async connect() {
    try {
      this.connection = await oracledb.getConnection({
        user: '<your-username>',
        password: '<your-password>',
        connectString: "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST=<your-host>)(PORT = <port-access>))(CONNECT_DATA =(SERVICE_NAME='<your-service-name>')))",
      });
    } catch (error) {
      console.error('Error connecting to database:', error.message || error);
      throw error;
    };
  };

  async query(sql: string, params?: any[]): Promise<any> {
    if (!this.connection) {
      await this.connect();
    };
  
    try {
      console.log('SQL:', sql);
      console.log('Parameters:', params);
  
      const options: oracledb.ExecuteOptions = { autoCommit: true };
      const result = await this.connection.execute(sql, params, options);
      return result.rows;
    } catch (error) {
      console.error('Error executing the query:', error);
      throw error;
    };
  };

  async close() {
    if (this.connection) {
      await this.connection.close();
      this.connection = undefined;
    };
  };

  async QueryExample(): Promise<any[]> {
    const sql = 'SELECT <your-query> FROM <you-database>';
    return this.query(sql, []);
  };
};