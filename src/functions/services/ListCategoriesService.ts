import { Category } from '../../database/entities/mysql/Category';
import { CategoriesRepository } from '../../database/repositories/mysql/CategoriesRepository';

interface IResponse {
  categorias: Category[];
}

export class ListCategoriesService {
  public async run(): Promise<IResponse> {
    const categoriesRepository = new CategoriesRepository();

    const { categories } = await categoriesRepository.listCategories();

    return { categorias: categories };
  }
}
