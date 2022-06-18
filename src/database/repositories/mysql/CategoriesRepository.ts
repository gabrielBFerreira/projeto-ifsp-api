import { Repository } from 'typeorm';

import { mysqlConnection } from '../../configs/mysql';
import { Category } from '../../entities/mysql/Category';

class CategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = mysqlConnection.getRepository(Category);
  }

  async listCategories(): Promise<{ categories: Category[] }> {
    const categories = await this.repository.find();

    return { categories };
  }
}

export { CategoriesRepository };
