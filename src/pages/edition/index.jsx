import { useParams } from "react-router-dom";
import { DataProducts } from "../../components/dataProducts";
import axios from "axios";
import { useEffect, useState } from "react";

export function EditScreen() {
  const [newProductValue, setNewProductValue] = useState({});

  const params = useParams();

  async function editProduct(product) {
    try {
      const { data } = await axios.put(
        `http://localhost:3004/products/${params.id}`,
        product
      );

      setNewProductValue(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    axios.get(`http://localhost:3004/products`);
  }, []);

  return (
    <DataProducts
      editProduct={editProduct}
      newProductValue={newProductValue}
      isEdit
    />
  );
}
