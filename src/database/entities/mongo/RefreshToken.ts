import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';

@Entity('RefreshToken')
class RefreshToken {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  idUsuario: number;

  @Column()
  token: string;

  @Column()
  dataExpiracao: Date;

  @CreateDateColumn()
  dataCriacao: Date;
}

export { RefreshToken };
