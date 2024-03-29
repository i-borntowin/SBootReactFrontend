import React, { useEffect, useState } from "react";
import productService from "../service/product.service";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService
      .getAllProducts()
      .then((res) => {
        console.log(res.data);
        setProductList(res.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  const deleteProduct = (id) => {
    productService
      .deleteProduct(id)
      .then((res) => {
        setMsg("Deleted Successfully");
        init();
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  // const init = () => {};
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header fs-3 text-center">
                All Product List
                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              </div>

              <div className="card-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Sl No</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((p, num) => (
                      <tr>
                        <td>{num + 1}</td>
                        <td>{p.productName}</td>
                        <td>{p.description}</td>
                        <td>{p.price}</td>
                        <td>{p.status}</td>
                        <td>
                          <Link
                            to={"editProduct/" + p.id}
                            className="btn btn-small btn-primary"
                          >
                            Edit
                          </Link>
                          <Link
                            onClick={() => deleteProduct(p.id)}
                            className="btn btn-small btn-danger ms-1"
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
