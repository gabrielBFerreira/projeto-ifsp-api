import { Product } from '../../database/entities/mysql/Product';
import { ProductsRepository } from '../../database/repositories/mysql/ProductsRepository';

interface IRequest {
  nome: string;
  descricao: string;
  marca: string;
  tamanho: string;
  estilo: string;
  cores: string;
  preco: number;
  idCategoria: number;
}

interface IResponse {
  produto: Product;
}

export class CreateProductService {
  public async run({
    nome,
    descricao,
    marca,
    tamanho,
    estilo,
    cores,
    preco,
    idCategoria,
  }: IRequest): Promise<IResponse> {
    const productsRepository = new ProductsRepository();

    const { product } = await productsRepository.createProduct({
      nome,
      descricao,
      marca,
      tamanho,
      estilo,
      cores,
      preco,
      idCategoria,
    });

    return { produto: product };
  }
}
