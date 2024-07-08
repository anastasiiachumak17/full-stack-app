
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    phone_number: string;

    @Column()
    last_name: string;

    @Column()
    first_name: string;

    @Column()
    nick_name: string;

    @Column()
    description: string;

    @Column()
    position: string;
}
