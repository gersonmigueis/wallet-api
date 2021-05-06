import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Categoria {

    constructor(descricao: string) {
        this.descricao = descricao;
    }
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao: string;

}