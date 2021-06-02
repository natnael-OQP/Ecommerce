import image1 from  './images/shop-img/hats/brown-brim.png';
import image2 from  "./images/shop-img/hats/blue-beanie.png";
import image3 from  "./images/shop-img/hats/brown-cowboy.png";
import image4 from  "./images/shop-img/hats/grey-brim.png";
import image5 from  "./images/shop-img/hats/green-beanie.png";
import image6 from  "./images/shop-img/hats/palm-tree-cap.png";
import image7 from  "./images/shop-img/hats/red-beanie.png";
import image8 from  "./images/shop-img/hats/wolf-cap.png";
import image9 from  "./images/shop-img/hats/blue-snapback.png";
import image10 from "./images/shop-img/sneakers/adidas-nmd.png"; 
import image11 from "./images/shop-img/sneakers/yeezy.png";
import image12 from "./images/shop-img/sneakers/black-converse.png";
import image13 from "./images/shop-img/sneakers/white-nike-high-tops.png";
import image14 from "./images/shop-img/sneakers/nikes-red.png";
import image15 from "./images/shop-img/sneakers/nike-brown.png";
import image16 from "./images/shop-img/sneakers/nike-funky.png";
import image17 from "./images/shop-img/sneakers/timberlands.png";
import image18 from "./images/shop-img/jackets/black-shearling.png";
import image19 from "./images/shop-img/jackets/blue-jean-jacket.png";
import image20 from "./images/shop-img/jackets/grey-jean-jacket.png";
import image21 from "./images/shop-img/jackets/brown-shearling.png";
import image22 from "./images/shop-img/jackets/brown-trench.png";
import image23 from "./images/shop-img/womens/blue-tank.png";
import image24 from "./images/shop-img/womens/floral-blouse.png";
import image25 from "./images/shop-img/womens/floral-skirt.png";
import image26 from "./images/shop-img/womens/red-polka-dot-dress.png";
import image27 from "./images/shop-img/womens/striped-sweater.png";
import image28 from "./images/shop-img/womens/yellow-track-suit.png";
import image29 from "./images/shop-img/womens/white-vest.png";
import image30 from "./images/shop-img/mens/camo-vest.png";
import image31 from "./images/shop-img/mens/floral-shirt.png";
import image32 from "./images/shop-img/mens/long-sleeve.png";
import image33 from "./images/shop-img/mens/pink-shirt.png";
import image34 from "./images/shop-img/mens/roll-up-jean-shirt.png";
import image35 from "./images/shop-img/mens/polka-dot-shirt.png";

const SHOP_DATA = [
    // hats
    {
      id: 1,
      title: 'Hats',
      routeName: 'hats',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          // imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
          imageUrl: image1,
          price: 25
        },
        {
          id: 2,
          name: 'Blue Beanie',
          // imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
          imageUrl: image2 ,
          price: 18
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          // imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
          imageUrl: image3 ,
          price: 35
        },
        {
          id: 4,
          name: 'Grey Brim',
          // imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
          imageUrl: image4 ,
          price: 25
        },
        {
          id: 5,
          name: 'Green Beanie',
          // imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
          imageUrl: image5 ,
          price: 18
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          // imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
          imageUrl: image6 ,
          price: 14
        },
        {
          id: 7,
          name: 'Red Beanie',
          // imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
          imageUrl: image7 ,
          price: 18
        },
        {
          id: 8,
          name: 'Wolf Cap',
          // imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          imageUrl: image8 ,
          price: 14
        },
        {
          id: 9,
          name: 'Blue Snapback',
          // imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          imageUrl: image9 ,
          price: 16
        }
      ]
    },
    // Sneakers
    {
      id: 2,
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 10,
          name: 'Adidas NMD',
          // imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          imageUrl: image10 ,
          price: 220
        },
        {
          id: 11,
          name: 'Adidas Yeezy',
          // imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
          imageUrl: image11 ,
          price: 280
        },
        {
          id: 12,
          name: 'Black Converse',
          // imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
          imageUrl: image12 ,
          price: 110
        },
        {
          id: 13,
          name: 'Nike White AirForce',
          // imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
          imageUrl: image13 ,
          price: 160
        },
        {
          id: 14,
          name: 'Nike Red High Tops',
          // imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          imageUrl: image14 ,
          price: 160
        },
        {
          id: 15,
          name: 'Nike Brown High Tops',
          // imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          imageUrl: image15 ,
          price: 160
        },
        {
          id: 16,
          name: 'Air Jordan Limited',
          // imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          imageUrl: image16 ,
          price: 190
        },
        {
          id: 17,
          name: 'Timberlands',
          // imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          imageUrl: image17 ,
          price: 200
        }
      ]
    },
    // Jackets
    {
      id: 3,
      title: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 18,
          name: 'Black Jean Shearling',
          // imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          imageUrl: image18 ,
          price: 125
        },
        {
          id: 19,
          name: 'Blue Jean Jacket',
          // imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
          imageUrl: image19 ,
          price: 90
        },
        {
          id: 20,
          name: 'Grey Jean Jacket',
          // imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
          imageUrl: image20 ,
          price: 90
        },
        {
          id: 21,
          name: 'Brown Shearling',
          // imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
          imageUrl: image21 ,
          price: 165
        },
        {
          id: 22,
          name: 'Tan Trench',
          // imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          imageUrl: image22 ,
          price: 185
        }
      ]
    },
    // Womens
    {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 23,
          name: 'Blue Tanktop',
          // imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          imageUrl: image23 ,
          price: 25
        },
        {
          id: 24,
          name: 'Floral Blouse',
          // imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
          imageUrl: image24 ,
          price: 20
        },
        {
          id: 25,
          name: 'Floral Dress',
          // imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
          imageUrl: image25 ,
          price: 80
        },
        {
          id: 26,
          name: 'Red Dots Dress',
          // imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
          imageUrl: image26 ,
          price: 80
        },
        {
          id: 27,
          name: 'Striped Sweater',
          // imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          imageUrl: image27 ,
          price: 45
        },
        {
          id: 28,
          name: 'Yellow Track Suit',
          // imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          imageUrl: image28 ,
          price: 135
        },
        {
          id: 29,
          name: 'White Blouse',
          // imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          imageUrl: image29 ,
          price: 20
        }
      ]
    },
    // mens
    {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 30,
          name: 'Camo Down Vest',
          // imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          imageUrl: image30 ,
          price: 325
        },
        {
          id: 31,
          name: 'Floral T-shirt',
          // imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
          imageUrl: image31 ,
          price: 20
        },
        {
          id: 32,
          name: 'Black & White Longsleeve',
          // imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          imageUrl: image32 ,
          price: 25
        },
        {
          id: 33,
          name: 'Pink T-shirt',
          // imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
          imageUrl: image33 ,
          price: 25
        },
        {
          id: 34,
          name: 'Jean Long Sleeve',
          // imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          imageUrl: image34 ,
          price: 40
        },
        {
          id: 35,
          name: 'Burgundy T-shirt',
          // imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          imageUrl: image35 ,
          price: 25
        }
      ]
    }
  ]  

export default SHOP_DATA;