import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Conta } from './Conta';
import { Categoria } from './Categoria';

@Entity()
export class Transacao {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  valor: number;

  @Column()
  tipo: string;

  @Column()
  observacao: string;
  
  @ManyToOne(() => Conta)
  id_conta: Conta;

  @ManyToOne(() => Categoria)
  id_categoria: Categoria;

  @CreateDateColumn()
  created_at: Date; 

  @CreateDateColumn()
  updated_at: Date;

}