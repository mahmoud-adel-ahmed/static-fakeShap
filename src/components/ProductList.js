import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { set_products } from "../redux/actions/productAction";
import { products } from "../products";

const ProductList = () => {
  let { allProducts } = useSelector((state) => state);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(set_products(products));
  }, []);

  return (
    <section>
      <div className="products">
        {allProducts.map((product) => {
          let { id, img, desc, price, title } = product;
          return (
            <Link to={`/product/${id}`} key={id}>
              <div className="product">
                <img src={img} alt="img" />
                <div className="content">
                  <h3 className="title">{title}</h3>
                  <h3 className="price">price: {price}</h3>
                  <p className="desc">desc: {desc}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;
