import axios from "axios";

class ProductService {
    getAll() {
        return axios.get(`http://localhost:3001/product`);
      }
    
      get(id) {
        return axios.get(`http://localhost:3001/product/${id}`);
      }
}
export default new ProductService();