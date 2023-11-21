import { useParams } from "react-router-dom";
import { DataProducts } from "../../components/dataProducts";
import axios from "axios";
import { useEffect, useState } from "react";

export function EditScreen() {
  const [newProductValue, setNewProductValue] = useState({});

  const { id } = useParams();

  async function editProduct(product) {
    try {
      await axios.put(
        `http://localhost:3004/products/${id}`,
        product
      );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    axios.get(`http://localhost:3004/products/${id}`).then(({data}) => {
      setNewProductValue(data)
    });
  }, [id]);

  return (
    <DataProducts
      editProduct={editProduct}
      newProductValue={newProductValue}
      isEdit
    />
  );
}
