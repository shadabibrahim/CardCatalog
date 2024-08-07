import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./cardComp/Card";
import { Input } from "antd";
import Search from "antd/es/transfer/search";
import { toast } from "react-toastify";

const AxiosExample = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  // getProduct get request
  const fetchProductApi = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: "get",
        url: "https://dummyjson.com/products",
      });
      // console.log(response.data.products)

      setData(response.data.products);
      toast.success("Products Fetch Successfully");
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      toast.error(error);
      setLoading(false);
    }
  };
  // Post request Add Product
  // const addProduct = async () => {
  //     const response = await axios({
  //         method:"post",
  //         url:'https://dummyjson.com/products/add',
  //         data:{
  //             title:"Product 1",
  //             description:"Product 1 Description",
  //             price:100,
  //             stock:10,
  //             brand:"Brand 1",
  //             category:"Category 1"
  //         }
  //     })
  //     console.log(response)
  // }
  useEffect(() => {
    fetchProductApi();
    // addProduct();
  }, []);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <Search type="text" placeholder="filter" onChange={handleSearch} />
      {loading ? (
       <p>Loading...</p>
      ) : (
        <div className="main">
          {data
            .filter((item) =>
              item.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => {
              return (
                <Card
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  weight={item.weight}
                  image={item.images}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};
export default AxiosExample;
