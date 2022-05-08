import { Column, Entity } from 'typeorm';

@Entity('imagem')
class Image {
  @Column()
  dados: string;

  @Column()
  tipo: string;
}

export { Image };
