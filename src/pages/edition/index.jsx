import { useParams } from "react-router-dom";
import { DataProducts } from "../../components/dataProducts";
import axios from "axios";
import { useEffect, useState } from "react";

export function EditScreen() {
  const [newProductValue, setNewProductValue] = useState({});

  const params = useParams();

  async function editProduct(product) {
    try {
      await axios.put(
        `http://localhost:3004/products/${params.id}`,
        product
      );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    axios.get(`http://localhost:3004/products`).then(({data}) => {
      setNewProductValue(data)
    });
  }, []);

  return (
    <DataProducts
      editProduct={editProduct}
      newProductValue={newProductValue}
      isEdit
    />
  );
}
