import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './';
import { User } from './users/user.entity';
import { Company } from './companies/company.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5000,
            username: 'postgres',
            password: 'admin',
            database: 'nest_database',
            entities: [User, Company],
            synchronize: true,
        }),
        UsersModule,
        CompaniesModule,
    ],
})
export class AppModule {}
