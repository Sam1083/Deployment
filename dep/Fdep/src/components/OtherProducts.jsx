import React from 'react';
import { Link } from 'react-router-dom';
import './OtherProducts.css';

const OtherProducts = () => {
  const products = [
    {
      id: 1,
      image: 'https://static-01.daraz.pk/p/3d0728f2a949dbe40832e6e2f539a990.jpg_200x200q80-product.jpg_.webp',
      title: 'Wool Gloves Fancy Winter Women Girls wool Gloves Knitting wool gloves Keep Warm Short Mitten Fingerless Lady Girl Half Finger Gloves',
      price: 'Rs. 290',
      discountPrice: 'Rs. 500',
      discountPercentage: ' -42',
    },
    {
        id: 2,
        image: 'https://static-01.daraz.pk/p/7a1153909e726f543cba63aeb4e715bf.jpg_200x200q80-product.jpg_.webp',
        title: 'T10 Ultra Smartwatch 2.09inch HD Big Screen Magnetic Wireless Charging Wacth 8 49mm Smart Watch Bluetooth Call Sleep Monitor Men Women Watch',
        price: 'Rs. 2,199 ',
        discountPrice: 'Rs. 5,199',
        discountPercentage: ' -58',
      },
      {
        id: 3,
        image: 'https://pk-live-21.slatic.net/kf/S3f0fe145db2d4e4e8202c7a47f808bd4D.jpg',
        title: 'Women Butterfly Dial Watch Brand Design Female Clock Women Steel Bracelet Watch Quartz Luxury Fashion Set With Diamonds',
        price: 'Rs. 5,073 ',
        discountPrice: 'Rs. 10,000',
        discountPercentage: ' -49.27',
      },
      {
        id: 4,
        image: 'https://static-01.daraz.pk/p/4321192acef7f3f2c6f1e0de5cc06faa.jpg_200x200q80-product.jpg_.webp ',
        title: 'Mini Flexible Foam Tripod Octopus Stand for Cell Phone Camera ',
        price: 'Rs. 179',
        discountPrice: 'Rs. 400',
        discountPercentage: ' -55',
      },
      {
        id: 5,
        image: 'https://static-01.daraz.pk/p/6096e4c0301220eb18aa1c41ab95614b.jpg_200x200q80-product.jpg_.webp',
        title: 'Personalized name rings - beautiful ring in shiny & matte finishing for men and women',
        price: 'Rs.185',
        discountPrice: 'Rs. 500',
        discountPercentage: ' -63 ',
      },
      {
        id: 6,
        image: 'https://static-01.daraz.pk/p/0fd2f09ff918a445eddbe01261872d33.jpg_200x200q80-product.jpg_.webp',
        title: 'Slim and Smart Card Holder Wallet for Men and Boys Without Button',
        price: 'Rs. 109',
        discountPrice: 'Rs. 249',
        discountPercentage: ' -56',
      },
      {
        id: 7,
        image: 'https://static-01.daraz.pk/p/19696e7df548fb239c1bec1ae99ad5a1.jpg_200x200q80-product.jpg_.webp',
        title: 'Mini Cell Phone Flexible Tripod Holder, Adjustable Mobile Phone Mount, Universal Octopus Stand for All Mobile Phones Camera',
        price: 'Rs. 189',
        discountPrice: 'Rs. 480',
        discountPercentage: ' -53 ',
      },
      {
        id: 8,
        image: 'https://static-01.daraz.pk/p/46e3ab5a6116bc63427132d3ca261ee2.jpg_200x200q80-product.jpg_.webp',
        title: 'EVENTO Wall Clock 3D 24 inch Wooden Watch DIY Design Decoration Small & Large Numeral Quartz For Home Decor Living Room And Offices And For Gifts',
        price: 'Rs. 249',
        discountPrice: 'Rs.899',
        discountPercentage: ' -72 ',
      },
      {
        id: 9,
        image: 'https://static-01.daraz.pk/p/d525f4814fccae95857524cd4f8a5d38.jpg_200x200q80-product.jpg_.webp ',
        title: 'Pack of 10-Professional Hairdressing Combs For Women And Men',
        price: 'Rs. 211',
        discountPrice: 'Rs. 399',
        discountPercentage: ' -47',
      },
    {
      id: 10,
      image: 'https://static-01.daraz.pk/p/0fe88bf17df53248ffbe545572aead3c.jpg_200x200q80-product.jpg_.webp',
      title: 'Pack of 5 plain Head scarf inner hijab cap-Muslim hijab cap-Women Islamic underscarf hijab cap in multi colors',
      price: 'Rs.369',
      discountPrice: 'Rs. 500',
      discountPercentage: ' -20',
    },
  ];

  return (
    <>
          <h1 className='JFY'>Just For You</h1>

          <div className='container ot'>
              <div className="cards" >
                  {products.map((product) => (
                      <div key={product.id} className="card" style={{ width: '12rem', marginBottom: '20px' }}>
                          <img src={product.image} className="card-img-top" alt="..." />
                          <div className="card-body">
                              <h2 className="card-title fs-6">{product.title.slice(0, 20) + "..."}</h2>
                              <h5 className="price fs-5 mt-5">{product.price}</h5>
                              <strike className='text-secondary'>{product.discountPrice}</strike>
                              <span className='text-danger'>{product.discountPercentage + "%"}</span>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          <div className='d-flex justify-content-center align-items-center mt-3'>
              <button className='loadmore'>LOAD MORE</button>
          </div>
    </>
  );
}

export default OtherProducts;
