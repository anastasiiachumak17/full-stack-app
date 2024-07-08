import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { Company } from './company.entity';

@Controller('companies')
export class CompaniesController {
    constructor(private readonly companiesService: CompaniesService) {}

    @Get()
    findAll(): Promise<Company[]> {
        return this.companiesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Company> {
        return this.companiesService.findOne(id);
    }

    @Post()
    create(@Body() createCompanyDto: Partial<Company>): Promise<Company> {
        return this.companiesService.create(createCompanyDto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateCompanyDto: Partial<Company>): Promise<Company> {
        return this.companiesService.update(id, updateCompanyDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.companiesService.remove(id);
    }
}
