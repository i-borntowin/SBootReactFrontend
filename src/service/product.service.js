import axios from "axios";

const API_URL = "https://thernrtechnologies.com/Product_Management_Backend/";
class productService {
  saveProduct(product) {
    return axios.post(API_URL + "/saveProduct", product);
  }

//arvindra

  getAllProducts() {
    return axios.get(API_URL + "/");
  }
  getProductById(id) {
    return axios.get(API_URL + "/" + id);
  }
  deleteProduct(id) {
    return axios.get(API_URL + "/deleteProduct/" + id);
  }
  editProduct(product) {
    return axios.post(API_URL + "/editProduct/" + product.id, product);
  }
}
export default new productService();
