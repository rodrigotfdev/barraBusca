import React, { useState } from "react";
import { productData } from "./ProductData";
import { BsCartFill } from "react-icons/bs";
import { SlMagnifier } from "react-icons/sl";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
      <Home search={search} />
    </div>
  );
}

function Navbar({ search, setSearch }) {
  return (
    <div className="nav flex text-neutral-50 justify-around p-8 bg-black items-center">
      <a>
        <img src="../logo/logoAncora.png" alt="Company Logo" />
      </a>
      <div className="search flex w-9/12 h-11 justify-center font-bold">
        <input
          type="text"
          placeholder="Pesquise aqui o seu produto"
          className="w-10/12 p-1 mx-5 text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>
          <SlMagnifier className="hover:text-red-500" />
        </button>
      </div>
      <button>
        <BsCartFill className="text-3xl hover:text-red-500" />
      </button>
    </div>
  );
}

function Home({ search }) {
  const produtoFiltrado = productData.filter((produto) =>
    produto.productName.includes(search)
  );

  return (
    <div>
      {produtoFiltrado.length === 0 ? (
        <p>Nenhum resultado encontrado.</p>
      ) : (
        <ul className="products-list justify-center my-20">
          {produtoFiltrado.map((product) => (
            <ProductItem productObj={product} key={product.id} />
          ))}
        </ul>
      )}
    </div>
  );
}

function ProductItem({ productObj }) {
  const { productName, price, photoName } = productObj;

  return (
    <li className="product">
      <div className="product-card w-72 p-2.5 rounded-lg flex flex-col relative items-center bg-white">
        <div className="product-card-img">
          <img src={photoName} alt={photoName} className="w-48 h-64 my-8" />
        </div>
        <div className="product-card-details w-full h-16 text-center my-4">
          <h2 className="font-bold">{productName}</h2>
        </div>
        <div className="product-card-buy relative bottom-0 w-11/12 text-center h-28">
          <div className="product-price w-full h-8 bg-price-green rounded-xl absolute bottom-10">
            <span id="full" className="align-middle text-white font-bold">
              R$ {price}
            </span>
          </div>
          <div className="product-buy-now">
            {/* Adicione aqui o botão de compra ou link para detalhes do produto se necessário */}
          </div>
        </div>
      </div>
    </li>
  );
}
