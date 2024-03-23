import axios from "axios";

class ProductService {
    getAll() {
        return axios.get(`${process.env.REACT_APP_BACKEND_URL}/product`);
      }
    
      get(id) {
        return axios.get(`${process.env.REACT_APP_BACKEND_URL}/product/${id}`);
      }
}
export default new ProductService();