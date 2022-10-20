import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addBook } from "../Features/books/booksSlice";
import { useSelector } from "react-redux";

const CallJson = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  //ERROR LLAMA DOS VECES EL CALLJSON SIEMPRE CUANDO SE SELECCIONA F5
  const getBooksAxios = async () => {
    if (books.length === 0) {
      const getAxios = await axios.get("/books.json").catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
      getAxios.data.map((book) => {
        dispatch(addBook(book));
        return;
      });
    }
  };

  useEffect(() => {
    async function getBooksUseEffect() {
      await getBooksAxios();
    }
    getBooksUseEffect();
  }, [books]);

  console.log("aca se está llamando", books);
  return <></>;
};

export default CallJson;
