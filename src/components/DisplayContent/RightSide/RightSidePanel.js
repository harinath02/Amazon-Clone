import React, { useEffect, useState } from 'react'
import '../RightSide/RightSide.css'
import Product from './Product';
import { Link } from "react-router-dom";



function RightSidePanel(props) {

  const [ListOfProduct, setListOfProduct] = useState([]);

  useEffect(() => {
    
    let list = [
      {
        id: 123456543,
        name: "iphone 10",
        rating: "24563",
        price: "79236",
        image:
          "https://ik.imagekit.io/amazonclone2/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1682165364604",
      },
      {
        id: 54342265,
        name: "iphone 11",
        rating: "74563",
        price: "87236",
        image:
          "https://ik.imagekit.io/amazonclone2/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1682165365777",
      },
      {
        id: 123453456543,
        name: "iphone 12",
        rating: "64563",
        price: "95236",
        image:
          "https://ik.imagekit.io/amazonclone2/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1682165365554",
      },
      {
        id: 12344545456543,
        name: "iphone 13",
        rating: "84563",
        price: "175236",
        image:
          "https://ik.imagekit.io/amazonclone2/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_.webp?updatedAt=1682165363638",
      },
      {
        id: 123465656543,
        name: "iphone 12",
        rating: "34565",
        price: "76543",
        image:
          "https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578",
      },
      {
        id: 2356346363,
        name: "iphone 12",
        rating: "637357",
        price: "50999",
        image:
          "https://ik.imagekit.io/amazon123/71i2XhHU3pL._AC_UL640_FMwebp_QL65__bSvBM9yyu9E.webp?updatedAt=1628852293583",
      },
    ];

    setListOfProduct(list);
    
  },[]);

  return (
    <div className="RightSide_main">
      {/* <Product
        rating="24563"
        price="75236"
        name="iphone 11"
        image="https://ik.imagekit.io/amazonclone2/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1682165365554"
      ></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product> */}

      {
        ListOfProduct.map((item) => {
          return (
            <Link to={`/order/${item.id}`} key={item.id}>
              <div>
                <Product definition={item} />
              </div>
            </Link>
          );
        })
      }
    </div>
  );
}

export default RightSidePanel;