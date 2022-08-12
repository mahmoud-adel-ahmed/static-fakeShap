import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { products } from "../products";
import { selected_product } from "../redux/actions/productAction";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  let { product } = useSelector((state) => state);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    dispatch(selected_product(products[id - 1]));
  }, []);

  let { img, desc, price, title } = product;
  return (
    <section>
      <div className="details">
        <div className="image">
          <img src={`.${img}`} alt="img" />
        </div>
        <div className="content">
          <h3 className="title">{title}</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            facilis reprehenderit expedita deserunt in molestias, ea
            consequuntur temporibus, cum officiis possimus totam porro! Quaerat,
            eum? Cupiditate dolorem vitae rem corrupti!
          </p>
          <h3 className="desc">desc: {desc}</h3>
          <h3 className="price">price: {price}</h3>
          <button className="btn" onClick={() => navigate("/")}>
            back home
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
