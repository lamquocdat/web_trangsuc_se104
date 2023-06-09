import axios from "axios";

class ProductService {
    getAll() {
        return axios.get(`https://dialuxury.onrender.com/product`);
      }
    
      get(id) {
        return axios.get(`https://dialuxury.onrender.com/product/${id}`);
      }
}
export default new ProductService();