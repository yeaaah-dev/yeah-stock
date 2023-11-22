import { useNavigate, useParams } from "react-router-dom";
import { DataProducts } from "../../components/dataProducts";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function EditScreen() {
  const [newProductValue, setNewProductValue] = useState({});
  const navigate = useNavigate();

  const { id } = useParams();

  function goToHome() {
    navigate("/");
  }

  function toastInstance(message) {
    const config = {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
    };

    function success() {
      toast.success(message, config);
    }

    function error() {
      toast.error(message, config);
    }

    return {
      success,
      error,
    };
  }

  async function editProduct(product) {
    const { success } = toastInstance("Product edited successfully!");
    const { error } = toastInstance("The product has not been edited!");
    try {
      await axios.put(`http://localhost:3004/products/${id}`, product);
      success();
      setTimeout(() => goToHome(), 3000);
    } catch (err) {
      error();
    }
  }

  async function deleteProduct() {
    const { success } = toastInstance("Product deleted successfully!");
    const { error } = toastInstance("The product has not been deleted!");

    try {
      await axios.delete(`http://localhost:3004/products/${id}`);
      success();
      setTimeout(() => goToHome(), 3000);
    } catch (err) {
      console.error(err);
      error();
    }
  }

  useEffect(() => {
    axios.get(`http://localhost:3004/products/${id}`).then(({ data }) => {
      setNewProductValue(data);
    });
  }, [id]);

  return (
    <DataProducts
      editProduct={editProduct}
      newProductValue={newProductValue}
      toastInstance={(message) => toastInstance(message)}
      isEdit
      onDeleteProduct={deleteProduct}
    />
  );
}
