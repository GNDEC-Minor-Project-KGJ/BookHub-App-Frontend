import { useState, useContext, createContext, useEffect } from 'react';
import axios from 'axios';

const NewArrivalsContext = createContext();

let NewArrivalsProvider = ({ children }) => {
  const [newArrivalsProductList, setNewArrivalsProductList] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const productsAvailableData = await axios.get(
          `http://localhost:8000/api/top-rated`
        );
        setNewArrivalsProductList([
          ...productsAvailableData.data.newArrivalList,
        ]);
      })();
    } catch (error) {
      console.log('Error : ', error);
    }
  }, []);

  return (
    <NewArrivalsContext.Provider
      value={{
        newArrivalsProductList,
        setNewArrivalsProductList,
      }}
    >
      {children}
    </NewArrivalsContext.Provider>
  );
};

let useNewArrivals = () => useContext(NewArrivalsContext);

export { NewArrivalsProvider, useNewArrivals };
