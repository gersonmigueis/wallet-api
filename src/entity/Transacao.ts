import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Conta } from './Conta';
import { Categoria } from './Categoria';

@Entity()
 class Transacao {

  constructor(valor: number, tipo: 'income' | 'outcome', observacao: string, idContaId: Conta, categoria: Categoria) {
    this.valor = valor;
    this.tipo = tipo;
    this.observacao = observacao;
    this.idContaId = idContaId;
    this.categoria = categoria;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  valor: number;

  @Column()
  tipo: string;

  @Column()
  observacao: string;
  
  @ManyToOne(() => Conta)
  idContaId: Conta;

  @ManyToOne(type => Categoria)
  @JoinColumn()
  categoria: Categoria;

  @CreateDateColumn()
  created_at: Date; 

  @CreateDateColumn()
  updated_at: Date;
}

export default Transacao;
