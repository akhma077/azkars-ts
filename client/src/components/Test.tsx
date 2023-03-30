import * as React from "react";

const Test = () => {
  const [contentsObj, setContentsObj] = React.useState<any>({
    234: {
      title: "Тетрадь",
      price: 1,
      id: 1213,
      favourites: false,
    },
    23423: {
      title: "Тетрадь",
      price: 2,
      id: 1211234531233,
      favourites: true,
    },
    223434: {
      title: "Тетрадь",
      price: 3,
      id: 12342341213,
      favourites: false,
    },
    223234434: {
      title: "Тетрадь",
      price: 4,
      id: 134223513,
      favourites: false,
    },
    24223534: {
      title: "Тетрадь",
      price: 5,
      id: 1224353413,
      favourites: true,
    },
    2342345: {
      title: "Тетрадь",
      price: 6,
      id: 112424323312213,
      favourites: true,
    },
    234444: {
      title: "Тетрадь",
      price: 1,
      id: 234231213,
      favourites: false,
    },
    23434: {
      title: "Тетрадь",
      price: 2,
      id: 121143231233,
      favourites: true,
    },
    11234: {
      title: "Тетрадь",
      price: 3,
      id: 123441234342341213,
      favourites: false,
    },
    232224: {
      title: "Тетрадь",
      price: 4,
      id: 134213423,
      favourites: false,
    },
    313234: {
      title: "Тетрадь",
      price: 5,
      id: 234,
      favourites: true,
    },
  });

  const fn = (key: any) => {
    setContentsObj({
      ...contentsObj,
      [key[0]]: { ...key[1], price: key[1].id },
    });
  };
  // сортировка элементов по частоте встречаемости

  const fruitBasket = [
    "banana",
    "cherry",
    "orange",
    "apple",
    "cherry",
    "orange",
    "apple",
    "banana",
    "cherry",
    "orange",
    "fig",
  ];
  const count = fruitBasket.reduce((obj: any, item) => {
    // obj[item] = (obj[item] ? obj[item] : 0) + ;
    // return obj;
  }, {});

  console.log(count);

  return (
    <div className={"style.shop_content"}>
      {Object.values(contentsObj).map((item: any) => (
        <div
          style={{
            border: "1px solid teal",
            display: "inline-block",
            textAlign: "center",
          }}
        >
          <button
            style={{ height: 40, width: 200 }}
            onClick={() => setContentsObj((prev: any) => ({ ...prev }))}
          >
            Send {item.id}
          </button>
          <div style={{ background: "black", height: 200, width: 200 }}></div>
          <h1>{item.title}</h1>
          <h4>{item.price}</h4>
        </div>
      ))}
    </div>
  );
};

export default Test;
