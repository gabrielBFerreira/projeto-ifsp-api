import { Product } from '../../database/entities/mysql/Product';
import { PicturesRepository } from '../../database/repositories/mongo/PicturesRepository';
import { ProductsRepository } from '../../database/repositories/mysql/ProductsRepository';

interface IResponse {
  produtos: Product[];
}

export class ListProductsService {
  public async run(): Promise<IResponse> {
    const productsRepository = new ProductsRepository();
    const picturesRepository = new PicturesRepository();

    const { products } = await productsRepository.listProducts();

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
