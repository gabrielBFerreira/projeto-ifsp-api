import { Product } from '../../database/entities/mysql/Product';
import { PicturesRepository } from '../../database/repositories/mongo/PicturesRepository';
import { ProductsRepository } from '../../database/repositories/mysql/ProductsRepository';

interface IRequest {
  idCategoria?: string;
}

interface IResponse {
  produtos: Product[];
}

export class ListProductsService {
  public async run({ idCategoria }: IRequest): Promise<IResponse> {
    const productsRepository = new ProductsRepository();
    const picturesRepository = new PicturesRepository();

    const { products } = await productsRepository.listProducts({
      idCategoria: Number(idCategoria) || undefined,
    });

    const picturesPromise = products.map(async (product) => {
      const { pictures } = await picturesRepository.findByProductId(product.id);

      const productWithPictures = product;

      productWithPictures.figuras = pictures;

      return productWithPictures;
    });

    const productsWithPictures = await Promise.all(picturesPromise);
    return { produtos: productsWithPictures };
  }
}
