import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    address: string;

    @Column({ nullable: true })
    service: string;

    @Column({ nullable: true })
    numberOfEmployees: number;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true })
    type: string;

    @ManyToOne(() => User, user => user.companies)
    user: User;
}
