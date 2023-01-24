import { createServer, Factory, Model } from 'miragejs';
import { faker } from '@faker-js/faker';

export const paginateData = (data, page = 1, rows = 8) => {
  const lastPage = Math.ceil(data.length / rows);

  if (page > lastPage) {
    page = lastPage;
  }

  const start = (page - 1) * rows;

  const end = start + rows;

  const dataSliced = data.slice(start, end);

  return {
    count: data.length,
    products: dataSliced,
  };
};

export function makeServer({ environment = 'test' } = {}) {
  const server = createServer({
    environment,

    models: {
      product: Model,
    },

    factories: {
      product: Factory.extend({
        name() {
          return faker.commerce.productName();
        },
        brand() {
          return faker.commerce.product();
        },
        description() {
          return faker.commerce.productDescription();
        },
        price() {
          return faker.commerce.price();
        },
      }),
    },

    seeds(server) {
      server.createList('product', 40);
    },

    routes() {
      this.namespace = '';
      this.get(
        'products',
        async (schema, req) => {
          const { page, rows } = req.queryParams;

          return paginateData(await schema.products.all().models, +page, +rows);
        },
        { timing: 3000 },
      );
      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
