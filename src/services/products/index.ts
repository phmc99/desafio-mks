import { api } from '../api';

export const getAllProducts = async (page = 1, rows = 8) => {
  const { data } = await api.get(`/products?page=${page}&rows=${rows}`);
  return data;
};
