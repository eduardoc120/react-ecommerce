import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';
import currencyAPI from './utils/currencyAPI';

import './assets/styles/index.css';

(async () => {
  const { GBP, EUR } = await currencyAPI();

  const initialState = {
    buyer: {},
    orders: [],
    cart: [],
    products: [
      {
        'id': 'product-1111',
        'comparisonDate': new Date(2017, 3, 27),
        'date': 'Apr 27, 2017',
        'images': [
          {
            url: 'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
            id: 'product-1-img-1'
          },
          {
            url: 'https://cdn.shopify.com/s/files/1/0883/0062/products/folded-mtns_1024x1024_bf361544-7a54-45e7-93a8-5b22a7eab0a3_1024x.jpg?v=1568940638',
            id: 'product-1-img-2'
          },
          {
            url: 'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
            id: 'product-1-img-3'
          },
          {
            url: 'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
            id: 'product-1-img-4'
          }
        ],
        'title': 'Camisa de rayas',
        'price': 25.00,
        'discountRate': 10,
        'description': '<p>Don\'t just beat the rain, join it. Our value-oriented PreCip® Jacket features our waterproof/breathable membrane and two highly technical coatings: The inner Dry Touch coating is comfortable against the skin; the outer coating is durably waterproof. 100% seam taped. Stay nimble with free-moving Angel-Wing Movement™; PitZips™ actively ventilate.</p>',
        'keyBenefits': '<ul><li>PreCip® Dry Touch Technology, Waterproof/Breathable - Waterproof / Breathable</li><li>100% Seam Taped - For Full Waterproofness</li><li>Full Visibility Roll-Up Hood with Integral Collar</li><li>PitZips™ - Underarm Zip That Extends Into the Body for Aggressive Venting</li></ul>',
        'coleccion': 'Featured Products',
        'variantes': [
          {
            'name': 'color',
            'opciones': ['Blue', 'Green', 'White'],
            'id': 'variante-1'
          },
          {
            'name': 'size',
            'opciones': ['S', 'M', 'L'],
            'id': 'variante-2'
          }
        ],
        'variantesAgotadas': [
          {
            color: 'Blue',
            size: 'S'
          },
          {
            color: 'Green',
            size: 'S'
          }
        ],
      },
      {
        'id': 'product-2222',
        'comparisonDate': new Date(2017, 3, 27),
        'date': 'Apr 27, 2017',
        'images': [
          {
            url: 'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
            id: 'product-2-img-1'
          },
          {
            url: 'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
            id: 'product-2-img-2'
          },
          {
            url: 'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
            id: 'product-2-img-3'
          },
          {
            url: 'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
            id: 'product-2-img-4'
          }
        ],
        'title': 'Zapatos dorados',
        'price': 40.00,
        'discountRate': 20,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'Featured Products',
        'variantes': [
          {
            'nombre': 'Color',
            'opciones': ['Blue', 'Green', 'White']
          },
          {
            'nombre': 'Talla',
            'opciones': ['S', 'M', 'L']
          }
        ]
      },
      {
        'id': 'product-3333',
        'comparisonDate': new Date(2017, 3, 27),
        'date': 'Apr 27, 2017',
        'images': [
          {
            url: 'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0%22,%20%22name%22:%20%22CATE%20RIGID%20BAG',
            id: 'product-3-img-1'
          },
          {
            url: 'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0%22,%20%22name%22:%20%22CATE%20RIGID%20BAG',
            id: 'product-3-img-2'
          },
          {
            url: 'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0%22,%20%22name%22:%20%22CATE%20RIGID%20BAG',
            id: 'product-3-img-3'
          },
          {
            url: 'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0%22,%20%22name%22:%20%22CATE%20RIGID%20BAG',
            id: 'product-3-img-4'
          }
        ],
        'title': 'Cartera rosada',
        'price': 35.00,
        'discountRate': 50,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'Featured Products',
        'variantes': [
          {
            'nombre': 'Color',
            'opciones': ['Blue', 'Green', 'White']
          },
          {
            'nombre': 'Talla',
            'opciones': ['S', 'M', 'L']
          }
        ]
      },
      {
        'id': 'product-4444',
        'comparisonDate': new Date(2017, 3, 27),
        'date': 'Apr 27, 2017',
        'images': [
          {
            url: 'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
            id: 'product-4-img-1'
          },
          {
            url: 'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
            id: 'product-4-img-2'
          },
          {
            url: 'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
            id: 'product-4-img-3'
          },
          {
            url: 'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
            id: 'product-4-img-4'
          }
        ],
        'title': 'Reloj negro',
        'price': 15.00,
        'discountRate': 22,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'Featured Products',
        'variantes': [
          {
            'nombre': 'Color',
            'opciones': ['Blue', 'Green', 'White']
          },
          {
            'nombre': 'Talla',
            'opciones': ['S', 'M', 'L']
          }
        ]
      },
      {
        'id': 'product-5555',
        'comparisonDate': new Date(2017, 3, 27),
        'date': 'Apr 27, 2017',
        'images': [
          {
            url: 'https://i.pinimg.com/originals/5f/79/81/5f7981e72d2b3fbea5dda305630e9f17.jpg',
            id: 'product-5-img-1'
          },
          {
            url: 'https://i.pinimg.com/originals/5f/79/81/5f7981e72d2b3fbea5dda305630e9f17.jpg',
            id: 'product-5-img-2'
          },
          {
            url: 'https://i.pinimg.com/originals/5f/79/81/5f7981e72d2b3fbea5dda305630e9f17.jpg',
            id: 'product-5-img-3'
          },
          {
            url: 'https://i.pinimg.com/originals/5f/79/81/5f7981e72d2b3fbea5dda305630e9f17.jpg',
            id: 'product-5-img-4'
          }
        ],
        'title': 'Cartera negra',
        'price': 25.00,
        'discountRate': 30,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'Featured Products',
        'variantes': [
          {
            'nombre': 'Color',
            'opciones': ['Blue', 'Green', 'White']
          },
          {
            'nombre': 'Talla',
            'opciones': ['S', 'M', 'L']
          }
        ]
      },
      {
        'id': 'product-6666',
        'comparisonDate': new Date(2017, 3, 27),
        'date': 'Apr 27, 2017',
        'images': [
          {
            url: 'https://www.differenta.com/media/produkty/51917/A-5f7f0f9218d41.jpg',
            id: 'product-6-img-1'
          },
          {
            url: 'https://www.differenta.com/media/produkty/51917/A-5f7f0f9218d41.jpg',
            id: 'product-6-img-2'
          },
          {
            url: 'https://www.differenta.com/media/produkty/51917/A-5f7f0f9218d41.jpg',
            id: 'product-6-img-3'
          },
          {
            url: 'https://www.differenta.com/media/produkty/51917/A-5f7f0f9218d41.jpg',
            id: 'product-6-img-4'
          }
        ],
        'title': 'Sueter',
        'price': 30.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'Featured Products',
        'variantes': [
          {
            'nombre': 'Color',
            'opciones': ['Blue', 'Green', 'White']
          },
          {
            'nombre': 'Talla',
            'opciones': ['S', 'M', 'L']
          }
        ]
      },
      {
        'id': 'product-7777',
        'comparisonDate': new Date(2017, 3, 27),
        'date': 'Apr 27, 2017',
        'images': [
          {
            url: 'https://masternetpty.com/wp-content/uploads/2021/05/taza-blanca-de-cera%CC%81mica.jpg',
            id: 'product-7-img-1'
          },
          {
            url: 'https://masternetpty.com/wp-content/uploads/2021/05/taza-blanca-de-cera%CC%81mica.jpg',
            id: 'product-7-img-2'
          },
          {
            url: 'https://masternetpty.com/wp-content/uploads/2021/05/taza-blanca-de-cera%CC%81mica.jpg',
            id: 'product-7-img-3'
          },
          {
            url: 'https://masternetpty.com/wp-content/uploads/2021/05/taza-blanca-de-cera%CC%81mica.jpg',
            id: 'product-7-img-4'
          }
        ],
        'title': 'Taza blanca',
        'price': 10.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'Featured Products',
        'variantes': [
          {
            'nombre': 'Color',
            'opciones': ['Blue', 'Green', 'White']
          },
          {
            'nombre': 'Talla',
            'opciones': ['S', 'M', 'L']
          }
        ]
      },
      {
        'id': 'product-8888',
        'comparisonDate': new Date(2017, 3, 27),
        'date': 'Apr 27, 2017',
        'images': [
          {
            url: 'https://www.lacuisine.pe/lgc/wp-content/uploads/2020/09/Taza-naranja-Fiesta.jpg',
            id: 'product-8-img-1'
          },
          {
            url: 'https://www.lacuisine.pe/lgc/wp-content/uploads/2020/09/Taza-naranja-Fiesta.jpg',
            id: 'product-8-img-2'
          },
          {
            url: 'https://www.lacuisine.pe/lgc/wp-content/uploads/2020/09/Taza-naranja-Fiesta.jpg',
            id: 'product-8-img-3'
          },
          {
            url: 'https://www.lacuisine.pe/lgc/wp-content/uploads/2020/09/Taza-naranja-Fiesta.jpg',
            id: 'product-8-img-4'
          }
        ],
        'title': 'Taza naranja',
        'price': 12.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'Featured Products',
        'variantes': [
          {
            'nombre': 'Color',
            'opciones': ['Blue', 'Green', 'White']
          },
          {
            'nombre': 'Talla',
            'opciones': ['S', 'M', 'L']
          }
        ]
      },
      {
        'id': 'product-9999',
        'comparisonDate': new Date(2017, 3, 27),
        'date': 'Apr 27, 2017',
        'images': [
          {
            url: 'https://www.pointmenswear.com/wp-content/uploads/2019/06/DSC07499.jpg',
            id: 'product-9-img-1'
          },
          {
            url: 'https://www.pointmenswear.com/wp-content/uploads/2019/06/DSC07499.jpg',
            id: 'product-9-img-2'
          },
          {
            url: 'https://www.pointmenswear.com/wp-content/uploads/2019/06/DSC07499.jpg',
            id: 'product-9-img-3'
          },
          {
            url: 'https://www.pointmenswear.com/wp-content/uploads/2019/06/DSC07499.jpg',
            id: 'product-9-img-4'
          }
        ],
        'title': 'Camisa azul',
        'price': 30.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'Featured Products',
        'variantes': [
          {
            'nombre': 'Color',
            'opciones': ['Blue', 'Green', 'White']
          },
          {
            'nombre': 'Talla',
            'opciones': ['S', 'M', 'L']
          }
        ]
      },
      {
        'id': 'product-10101010',
        'comparisonDate': new Date(2017, 3, 27),
        'date': 'Apr 27, 2017',
        'images': [
          {
            url: 'https://andeslandchile.cl/wp-content/uploads/2018/11/GRISC-1.jpg',
            id: 'product-10-img-1'
          },
          {
            url: 'https://andeslandchile.cl/wp-content/uploads/2018/11/GRISC-1.jpg',
            id: 'product-10-img-2'
          },
          {
            url: 'https://andeslandchile.cl/wp-content/uploads/2018/11/GRISC-1.jpg',
            id: 'product-10-img-3'
          },
          {
            url: 'https://andeslandchile.cl/wp-content/uploads/2018/11/GRISC-1.jpg',
            id: 'product-10-img-4'
          }
        ],
        'title': 'Camisa gris',
        'price': 33.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'Featured Products',
        'variantes': [
          {
            'nombre': 'Color',
            'opciones': ['Blue', 'Green', 'White']
          },
          {
            'nombre': 'Talla',
            'opciones': ['S', 'M', 'L']
          }
        ]
      },
      {
        'id': 'product-11111111',
        'comparisonDate': new Date(2017, 10, 4),
        'date': 'Nov 4, 2017',
        'images': [
          {
            url: 'https://portalropaempresas.cl/wp-content/uploads/2017/08/camisa-oxford-classic.jpg',
            id: 'product-11-img-1'
          },
          {
            url: 'https://portalropaempresas.cl/wp-content/uploads/2017/08/camisa-oxford-classic.jpg',
            id: 'product-11-img-2'
          },
          {
            url: 'https://portalropaempresas.cl/wp-content/uploads/2017/08/camisa-oxford-classic.jpg',
            id: 'product-11-img-3'
          },
          {
            url: 'https://portalropaempresas.cl/wp-content/uploads/2017/08/camisa-oxford-classic.jpg',
            id: 'product-11-img-4'
          }
        ],
        'title': 'Camisa celeste',
        'price': 29.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'Best Selling Products'
      },
      {
        'id': 'product-12121212',
        'comparisonDate': new Date(2017, 10, 4),
        'date': 'Nov 4, 2017',
        'images': [
          {
            url: 'https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/3069710.jpg',
            id: 'product-12-img-1'
          },
          {
            url: 'https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/3069710.jpg',
            id: 'product-12-img-2'
          },
          {
            url: 'https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/3069710.jpg',
            id: 'product-12-img-3'
          },
          {
            url: 'https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/3069710.jpg',
            id: 'product-12-img-4'
          }
        ],
        'title': 'Camisa blanca corta',
        'price': 27.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'Best Selling Products'
      },
      {
        'id': 'product-13131313',
        'comparisonDate': new Date(2017, 10, 4),
        'date': 'Nov 4, 2017',
        'images': [
          {
            url: 'https://www.flexi.com.mx/medias/400102-negro-comp-der.jpg?context=bWFzdGVyfGltYWdlc3wxNDM0NTd8aW1hZ2UvanBlZ3xoOTAvaDQxLzg4MDUzNzM4MDQ1NzQvNDAwMTAyLW5lZ3JvLWNvbXAtZGVyLmpwZ3w2YjQ2MDZjOGY2MmY0N2JjMzUzMWE5Njg2NTYzMmZlZmY3YzdlMWIwYTVjOTBmNTA1MjBmNTBjZDhhMTk3YWVk',
            id: 'product-13-img-1'
          },
          {
            url: 'https://www.flexi.com.mx/medias/400102-negro-comp-der.jpg?context=bWFzdGVyfGltYWdlc3wxNDM0NTd8aW1hZ2UvanBlZ3xoOTAvaDQxLzg4MDUzNzM4MDQ1NzQvNDAwMTAyLW5lZ3JvLWNvbXAtZGVyLmpwZ3w2YjQ2MDZjOGY2MmY0N2JjMzUzMWE5Njg2NTYzMmZlZmY3YzdlMWIwYTVjOTBmNTA1MjBmNTBjZDhhMTk3YWVk',
            id: 'product-13-img-2'
          },
          {
            url: 'https://www.flexi.com.mx/medias/400102-negro-comp-der.jpg?context=bWFzdGVyfGltYWdlc3wxNDM0NTd8aW1hZ2UvanBlZ3xoOTAvaDQxLzg4MDUzNzM4MDQ1NzQvNDAwMTAyLW5lZ3JvLWNvbXAtZGVyLmpwZ3w2YjQ2MDZjOGY2MmY0N2JjMzUzMWE5Njg2NTYzMmZlZmY3YzdlMWIwYTVjOTBmNTA1MjBmNTBjZDhhMTk3YWVk',
            id: 'product-13-img-3'
          },
          {
            url: 'https://www.flexi.com.mx/medias/400102-negro-comp-der.jpg?context=bWFzdGVyfGltYWdlc3wxNDM0NTd8aW1hZ2UvanBlZ3xoOTAvaDQxLzg4MDUzNzM4MDQ1NzQvNDAwMTAyLW5lZ3JvLWNvbXAtZGVyLmpwZ3w2YjQ2MDZjOGY2MmY0N2JjMzUzMWE5Njg2NTYzMmZlZmY3YzdlMWIwYTVjOTBmNTA1MjBmNTBjZDhhMTk3YWVk',
            id: 'product-13-img-4'
          }
        ],
        'title': 'Zapatos negros con marrón',
        'price': 19.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'Best Selling Products'
      },
      {
        'id': 'product-14141414',
        'comparisonDate': new Date(2017, 10, 4),
        'date': 'Nov 4, 2017',
        'images': [
          {
            url: 'https://i.pinimg.com/originals/9b/6d/46/9b6d46a89a154d4897f160c878b6d696.jpg',
            id: 'product-14-img-1'
          },
          {
            url: 'https://i.pinimg.com/originals/9b/6d/46/9b6d46a89a154d4897f160c878b6d696.jpg',
            id: 'product-14-img-2'
          },
          {
            url: 'https://i.pinimg.com/originals/9b/6d/46/9b6d46a89a154d4897f160c878b6d696.jpg',
            id: 'product-14-img-3'
          },
          {
            url: 'https://i.pinimg.com/originals/9b/6d/46/9b6d46a89a154d4897f160c878b6d696.jpg',
            id: 'product-41-img-4'
          }
        ],
        'title': 'Tacones rojos',
        'price': 45.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'Best Selling Products'
      },
      {
        'id': 'product-15151515',
        'comparisonDate': new Date(2017, 10, 4),
        'date': 'Nov 4, 2017',
        'images': [
          {
            url: 'https://www.flexi.com.mx/medias/402406-azul-comp-der.jpg?context=bWFzdGVyfGltYWdlc3w3NzgyMDN8aW1hZ2UvanBlZ3xoYjcvaDU5LzkzODk0NTg3ODQyODYvNDAyNDA2LWF6dWwtY29tcC1kZXIuanBnfGQ0YjBiNDg3MTE0NWUzYTA1ZWQxMWM3OWI1YTdhMmE0ODEwMzFiYWU2NTFmMmUwOTFiMjVmMzE2MTkxOTliZDc',
            id: 'product-15-img-1'
          },
          {
            url: 'https://www.flexi.com.mx/medias/402406-azul-comp-der.jpg?context=bWFzdGVyfGltYWdlc3w3NzgyMDN8aW1hZ2UvanBlZ3xoYjcvaDU5LzkzODk0NTg3ODQyODYvNDAyNDA2LWF6dWwtY29tcC1kZXIuanBnfGQ0YjBiNDg3MTE0NWUzYTA1ZWQxMWM3OWI1YTdhMmE0ODEwMzFiYWU2NTFmMmUwOTFiMjVmMzE2MTkxOTliZDc',
            id: 'product-15-img-2'
          },
          {
            url: 'https://www.flexi.com.mx/medias/402406-azul-comp-der.jpg?context=bWFzdGVyfGltYWdlc3w3NzgyMDN8aW1hZ2UvanBlZ3xoYjcvaDU5LzkzODk0NTg3ODQyODYvNDAyNDA2LWF6dWwtY29tcC1kZXIuanBnfGQ0YjBiNDg3MTE0NWUzYTA1ZWQxMWM3OWI1YTdhMmE0ODEwMzFiYWU2NTFmMmUwOTFiMjVmMzE2MTkxOTliZDc',
            id: 'product-15-img-3'
          },
          {
            url: 'https://www.flexi.com.mx/medias/402406-azul-comp-der.jpg?context=bWFzdGVyfGltYWdlc3w3NzgyMDN8aW1hZ2UvanBlZ3xoYjcvaDU5LzkzODk0NTg3ODQyODYvNDAyNDA2LWF6dWwtY29tcC1kZXIuanBnfGQ0YjBiNDg3MTE0NWUzYTA1ZWQxMWM3OWI1YTdhMmE0ODEwMzFiYWU2NTFmMmUwOTFiMjVmMzE2MTkxOTliZDc',
            id: 'product-15-img-4'
          }
        ],
        'title': 'Zapatos azules',
        'price': 49.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'Best Selling Products'
      },
      {
        'id': 'product-16161616',
        'comparisonDate': new Date(2017, 10, 4),
        'date': 'Nov 4, 2017',
        'images': [
          {
            url: 'https://media.andypola.es/archivos/img_articulos/DIANANUDE_A05.webp',
            id: 'product-16-img-1'
          },
          {
            url: 'https://media.andypola.es/archivos/img_articulos/DIANANUDE_A05.webp',
            id: 'product-16-img-2'
          },
          {
            url: 'https://media.andypola.es/archivos/img_articulos/DIANANUDE_A05.webp',
            id: 'product-16-img-3'
          },
          {
            url: 'https://media.andypola.es/archivos/img_articulos/DIANANUDE_A05.webp',
            id: 'product-16-img-4'
          }
        ],
        'title': 'Tacones crema',
        'price': 33.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'Best Selling Products'
      },
      {
        'id': 'product-17171717',
        'comparisonDate': new Date(2017, 10, 4),
        'date': 'Nov 4, 2017',
        'images': [
          {
            url: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ilnzrqiafjmxbqhomptg/gorra-con-cierre-a-presi%C3%B3n-jordan-pro-jumpman-snapback-LqGxfx.png',
            id: 'product-17-img-1'
          },
          {
            url: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ilnzrqiafjmxbqhomptg/gorra-con-cierre-a-presi%C3%B3n-jordan-pro-jumpman-snapback-LqGxfx.png',
            id: 'product-17-img-2'
          },
          {
            url: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ilnzrqiafjmxbqhomptg/gorra-con-cierre-a-presi%C3%B3n-jordan-pro-jumpman-snapback-LqGxfx.png',
            id: 'product-17-img-3'
          },
          {
            url: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ilnzrqiafjmxbqhomptg/gorra-con-cierre-a-presi%C3%B3n-jordan-pro-jumpman-snapback-LqGxfx.png',
            id: 'product-17-img-4'
          }
        ],
        'title': 'Gorra jordan negra',
        'price': 15.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'Best Selling Products'
      },
      {
        'id': 'product-18181818',
        'comparisonDate': new Date(2017, 10, 4),
        'date': 'Nov 4, 2017',
        'images': [
          {
            url: 'https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/3131288.jpg',
            id: 'product-18-img-1'
          },
          {
            url: 'https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/3131288.jpg',
            id: 'product-18-img-2'
          },
          {
            url: 'https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/3131288.jpg',
            id: 'product-18-img-3'
          },
          {
            url: 'https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/3131288.jpg',
            id: 'product-18-img-4'
          }
        ],
        'title': 'Gorra azul levis',
        'price': 16.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'Best Selling Products'
      },
      {
        'id': 'product-19191919',
        'comparisonDate': new Date(2017, 10, 4),
        'date': 'Nov 4, 2017',
        'images': [
          {
            url: 'https://www.bordadospanama.com/wp-content/uploads/2021/01/gorra-richardson-gris.jpg',
            id: 'product-19-img-1'
          },
          {
            url: 'https://www.bordadospanama.com/wp-content/uploads/2021/01/gorra-richardson-gris.jpg',
            id: 'product-19-img-2'
          },
          {
            url: 'https://www.bordadospanama.com/wp-content/uploads/2021/01/gorra-richardson-gris.jpg',
            id: 'product-19-img-3'
          },
          {
            url: 'https://www.bordadospanama.com/wp-content/uploads/2021/01/gorra-richardson-gris.jpg',
            id: 'product-19-img-4'
          }
        ],
        'title': 'Gorra gris',
        'price': 18.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'Best Selling Products'
      },
      {
        'id': 'product-20202020',
        'comparisonDate': new Date(2017, 10, 4),
        'date': 'Nov 4, 2017',
        'images': [
          {
            url: 'https://i.pinimg.com/originals/8b/1c/da/8b1cda90fd174ecdbd178cbd8cd1b506.jpg',
            id: 'product-20-img-1'
          },
          {
            url: 'https://i.pinimg.com/originals/8b/1c/da/8b1cda90fd174ecdbd178cbd8cd1b506.jpg',
            id: 'product-20-img-2'
          },
          {
            url: 'https://i.pinimg.com/originals/8b/1c/da/8b1cda90fd174ecdbd178cbd8cd1b506.jpg',
            id: 'product-20-img-3'
          },
          {
            url: 'https://i.pinimg.com/originals/8b/1c/da/8b1cda90fd174ecdbd178cbd8cd1b506.jpg',
            id: 'product-20-img-4'
          }
        ],
        'title': 'Gorra blanca',
        'price': 19.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'Best Selling Products'
      },
      {
        'id': 'product-21212121',
        'comparisonDate': new Date(2018, 1, 24),
        'date': 'Feb 24, 2018',
        'images': [
          {
            url: 'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
            id: 'product-21-img-1'
          },
          {
            url: 'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
            id: 'product-21-img-2'
          },
          {
            url: 'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
            id: 'product-21-img-3'
          },
          {
            url: 'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
            id: 'product-21-img-4'
          }
        ],
        'title': 'Camisa de rayas 2',
        'price': 25.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'New Arrivals'
      },
      {
        'id': 'product-22222222',
        'comparisonDate': new Date(2018, 1, 24),
        'date': 'Feb 24, 2018',
        'images': [
          {
            url: 'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
            id: 'product-22-img-1'
          },
          {
            url: 'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
            id: 'product-22-img-2'
          },
          {
            url: 'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
            id: 'product-22-img-3'
          },
          {
            url: 'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
            id: 'product-22-img-4'
          }
        ],
        'title': 'Zapatos dorados 2',
        'price': 40.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'New Arrivals'
      },
      {
        'id': 'product-23232323',
        'comparisonDate': new Date(2018, 1, 24),
        'date': 'Feb 24, 2018',
        'images': [
          {
            url: 'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0%22,%20%22name%22:%20%22CATE%20RIGID%20BAG',
            id: 'product-23-img-1'
          },
          {
            url: 'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0%22,%20%22name%22:%20%22CATE%20RIGID%20BAG',
            id: 'product-23-img-2'
          },
          {
            url: 'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0%22,%20%22name%22:%20%22CATE%20RIGID%20BAG',
            id: 'product-23-img-3'
          },
          {
            url: 'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0%22,%20%22name%22:%20%22CATE%20RIGID%20BAG',
            id: 'product-23-img-4'
          }
        ],
        'title': 'Cartera rosada 2',
        'price': 35.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'New Arrivals'
      },
      {
        'id': 'product-24242424',
        'comparisonDate': new Date(2018, 1, 24),
        'date': 'Feb 24, 2018',
        'images': [
          {
            url: 'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
            id: 'product-24-img-1'
          },
          {
            url: 'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
            id: 'product-24-img-2'
          },
          {
            url: 'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
            id: 'product-24-img-3'
          },
          {
            url: 'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
            id: 'product-24-img-4'
          }
        ],
        'title': 'Reloj negro 2',
        'price': 15.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'New Arrivals'
      },
      {
        'id': 'product-25252525',
        'comparisonDate': new Date(2018, 1, 24),
        'date': 'Feb 24, 2018',
        'images': [
          {
            url: 'https://i.pinimg.com/originals/5f/79/81/5f7981e72d2b3fbea5dda305630e9f17.jpg',
            id: 'product-25-img-1'
          },
          {
            url: 'https://i.pinimg.com/originals/5f/79/81/5f7981e72d2b3fbea5dda305630e9f17.jpg',
            id: 'product-25-img-2'
          },
          {
            url: 'https://i.pinimg.com/originals/5f/79/81/5f7981e72d2b3fbea5dda305630e9f17.jpg',
            id: 'product-25-img-3'
          },
          {
            url: 'https://i.pinimg.com/originals/5f/79/81/5f7981e72d2b3fbea5dda305630e9f17.jpg',
            id: 'product-25-img-4'
          }
        ],
        'title': 'Cartera negra 2',
        'price': 25.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'New Arrivals'
      },
      {
        'id': 'product-26262626',
        'comparisonDate': new Date(2018, 1, 24),
        'date': 'Feb 24, 2018',
        'images': [
          {
            url: 'https://www.differenta.com/media/produkty/51917/A-5f7f0f9218d41.jpg',
            id: 'product-26-img-1'
          },
          {
            url: 'https://www.differenta.com/media/produkty/51917/A-5f7f0f9218d41.jpg',
            id: 'product-26-img-2'
          },
          {
            url: 'https://www.differenta.com/media/produkty/51917/A-5f7f0f9218d41.jpg',
            id: 'product-26-img-3'
          },
          {
            url: 'https://www.differenta.com/media/produkty/51917/A-5f7f0f9218d41.jpg',
            id: 'product-26-img-4'
          }
        ],
        'title': 'Sueter 2',
        'price': 30.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'New Arrivals'
      },
      {
        'id': 'product-27272727',
        'comparisonDate': new Date(2018, 1, 24),
        'date': 'Feb 24, 2018',
        'images': [
          {
            url: 'https://masternetpty.com/wp-content/uploads/2021/05/taza-blanca-de-cera%CC%81mica.jpg',
            id: 'product-27-img-1'
          },
          {
            url: 'https://masternetpty.com/wp-content/uploads/2021/05/taza-blanca-de-cera%CC%81mica.jpg',
            id: 'product-27-img-2'
          },
          {
            url: 'https://masternetpty.com/wp-content/uploads/2021/05/taza-blanca-de-cera%CC%81mica.jpg',
            id: 'product-27-img-3'
          },
          {
            url: 'https://masternetpty.com/wp-content/uploads/2021/05/taza-blanca-de-cera%CC%81mica.jpg',
            id: 'product-27-img-4'
          }
        ],
        'title': 'Taza blanca 2',
        'price': 10.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'New Arrivals'
      },
      {
        'id': 'product-28282828',
        'comparisonDate': new Date(2018, 1, 24),
        'date': 'Feb 24, 2018',
        'images': [
          {
            url: 'https://www.lacuisine.pe/lgc/wp-content/uploads/2020/09/Taza-naranja-Fiesta.jpg',
            id: 'product-28-img-1'
          },
          {
            url: 'https://www.lacuisine.pe/lgc/wp-content/uploads/2020/09/Taza-naranja-Fiesta.jpg',
            id: 'product-28-img-2'
          },
          {
            url: 'https://www.lacuisine.pe/lgc/wp-content/uploads/2020/09/Taza-naranja-Fiesta.jpg',
            id: 'product-28-img-3'
          },
          {
            url: 'https://www.lacuisine.pe/lgc/wp-content/uploads/2020/09/Taza-naranja-Fiesta.jpg',
            id: 'product-28-img-4'
          }
        ],
        'title': 'Taza naranja 2',
        'price': 12.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'New Arrivals'
      },
      {
        'id': 'product-29292929',
        'comparisonDate': new Date(2018, 1, 24),
        'date': 'Feb 24, 2018',
        'images': [
          {
            url: 'https://www.pointmenswear.com/wp-content/uploads/2019/06/DSC07499.jpg',
            id: 'product-29-img-1'
          },
          {
            url: 'https://www.pointmenswear.com/wp-content/uploads/2019/06/DSC07499.jpg',
            id: 'product-29-img-2'
          },
          {
            url: 'https://www.pointmenswear.com/wp-content/uploads/2019/06/DSC07499.jpg',
            id: 'product-29-img-3'
          },
          {
            url: 'https://www.pointmenswear.com/wp-content/uploads/2019/06/DSC07499.jpg',
            id: 'product-29-img-4'
          }
        ],
        'title': 'Camisa azul 2',
        'price': 30.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'New Arrivals'
      },
      {
        'id': 'product-30303030',
        'comparisonDate': new Date(2018, 1, 24),
        'date': 'Feb 24, 2018',
        'images': [
          {
            url: 'https://andeslandchile.cl/wp-content/uploads/2018/11/GRISC-1.jpg',
            id: 'product-30-img-1'
          },
          {
            url: 'https://andeslandchile.cl/wp-content/uploads/2018/11/GRISC-1.jpg',
            id: 'product-30-img-2'
          },
          {
            url: 'https://andeslandchile.cl/wp-content/uploads/2018/11/GRISC-1.jpg',
            id: 'product-30-img-3'
          },
          {
            url: 'https://andeslandchile.cl/wp-content/uploads/2018/11/GRISC-1.jpg',
            id: 'product-30-img-4'
          }
        ],
        'title': 'Camisa gris 2',
        'price': 33.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': 'New Arrivals'
      },
      {
        'id': 'product-31313131',
        'comparisonDate': new Date(2016, 7, 17),
        'date': 'Aug 17, 2016',
        'images': [
          {
            url: 'https://portalropaempresas.cl/wp-content/uploads/2017/08/camisa-oxford-classic.jpg',
            id: 'product-31-img-1'
          },
          {
            url: 'https://portalropaempresas.cl/wp-content/uploads/2017/08/camisa-oxford-classic.jpg',
            id: 'product-31-img-2'
          },
          {
            url: 'https://portalropaempresas.cl/wp-content/uploads/2017/08/camisa-oxford-classic.jpg',
            id: 'product-31-img-3'
          },
          {
            url: 'https://portalropaempresas.cl/wp-content/uploads/2017/08/camisa-oxford-classic.jpg',
            id: 'product-31-img-4'
          }
        ],
        'title': 'Camisa celeste 2',
        'price': 29.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': null
      },
      {
        'id': 'product-32323232',
        'comparisonDate': new Date(2016, 7, 17),
        'date': 'Aug 17, 2016',
        'images': [
          {
            url: 'https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/3069710.jpg',
            id: 'product-32-img-1'
          },
          {
            url: 'https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/3069710.jpg',
            id: 'product-32-img-2'
          },
          {
            url: 'https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/3069710.jpg',
            id: 'product-32-img-3'
          },
          {
            url: 'https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/3069710.jpg',
            id: 'product-32-img-4'
          }
        ],
        'title': 'Camisa blanca corta 2',
        'price': 27.00,
        'discountRate': 45,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': null
      },
      {
        'id': 'product-33333333',
        'comparisonDate': new Date(2016, 7, 17),
        'date': 'Aug 17, 2016',
        'images': [
          {
            url: 'https://www.flexi.com.mx/medias/400102-negro-comp-der.jpg?context=bWFzdGVyfGltYWdlc3wxNDM0NTd8aW1hZ2UvanBlZ3xoOTAvaDQxLzg4MDUzNzM4MDQ1NzQvNDAwMTAyLW5lZ3JvLWNvbXAtZGVyLmpwZ3w2YjQ2MDZjOGY2MmY0N2JjMzUzMWE5Njg2NTYzMmZlZmY3YzdlMWIwYTVjOTBmNTA1MjBmNTBjZDhhMTk3YWVk',
            id: 'product-33-img-1'
          },
          {
            url: 'https://www.flexi.com.mx/medias/400102-negro-comp-der.jpg?context=bWFzdGVyfGltYWdlc3wxNDM0NTd8aW1hZ2UvanBlZ3xoOTAvaDQxLzg4MDUzNzM4MDQ1NzQvNDAwMTAyLW5lZ3JvLWNvbXAtZGVyLmpwZ3w2YjQ2MDZjOGY2MmY0N2JjMzUzMWE5Njg2NTYzMmZlZmY3YzdlMWIwYTVjOTBmNTA1MjBmNTBjZDhhMTk3YWVk',
            id: 'product-33-img-2'
          },
          {
            url: 'https://www.flexi.com.mx/medias/400102-negro-comp-der.jpg?context=bWFzdGVyfGltYWdlc3wxNDM0NTd8aW1hZ2UvanBlZ3xoOTAvaDQxLzg4MDUzNzM4MDQ1NzQvNDAwMTAyLW5lZ3JvLWNvbXAtZGVyLmpwZ3w2YjQ2MDZjOGY2MmY0N2JjMzUzMWE5Njg2NTYzMmZlZmY3YzdlMWIwYTVjOTBmNTA1MjBmNTBjZDhhMTk3YWVk',
            id: 'product-33-img-3'
          },
          {
            url: 'https://www.flexi.com.mx/medias/400102-negro-comp-der.jpg?context=bWFzdGVyfGltYWdlc3wxNDM0NTd8aW1hZ2UvanBlZ3xoOTAvaDQxLzg4MDUzNzM4MDQ1NzQvNDAwMTAyLW5lZ3JvLWNvbXAtZGVyLmpwZ3w2YjQ2MDZjOGY2MmY0N2JjMzUzMWE5Njg2NTYzMmZlZmY3YzdlMWIwYTVjOTBmNTA1MjBmNTBjZDhhMTk3YWVk',
            id: 'product-33-img-4'
          }
        ],
        'title': 'Zapatos negros con marrón 2',
        'price': 19.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': null
      },
      {
        'id': 'product-34343434',
        'comparisonDate': new Date(2016, 7, 17),
        'date': 'Aug 17, 2016',
        'images': [
          {
            url: 'https://i.pinimg.com/originals/9b/6d/46/9b6d46a89a154d4897f160c878b6d696.jpg',
            id: 'product-34-img-1'
          },
          {
            url: 'https://i.pinimg.com/originals/9b/6d/46/9b6d46a89a154d4897f160c878b6d696.jpg',
            id: 'product-34-img-2'
          },
          {
            url: 'https://i.pinimg.com/originals/9b/6d/46/9b6d46a89a154d4897f160c878b6d696.jpg',
            id: 'product-34-img-3'
          },
          {
            url: 'https://i.pinimg.com/originals/9b/6d/46/9b6d46a89a154d4897f160c878b6d696.jpg',
            id: 'product-34-img-4'
          }
        ],
        'title': 'Tacones rojos 2',
        'price': 45.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': null
      },
      {
        'id': 'product-35353535',
        'comparisonDate': new Date(2016, 7, 17),
        'date': 'Aug 17, 2016',
        'images': [
          {
            url: 'https://www.flexi.com.mx/medias/402406-azul-comp-der.jpg?context=bWFzdGVyfGltYWdlc3w3NzgyMDN8aW1hZ2UvanBlZ3xoYjcvaDU5LzkzODk0NTg3ODQyODYvNDAyNDA2LWF6dWwtY29tcC1kZXIuanBnfGQ0YjBiNDg3MTE0NWUzYTA1ZWQxMWM3OWI1YTdhMmE0ODEwMzFiYWU2NTFmMmUwOTFiMjVmMzE2MTkxOTliZDc',
            id: 'product-35-img-1'
          },
          {
            url: 'https://www.flexi.com.mx/medias/402406-azul-comp-der.jpg?context=bWFzdGVyfGltYWdlc3w3NzgyMDN8aW1hZ2UvanBlZ3xoYjcvaDU5LzkzODk0NTg3ODQyODYvNDAyNDA2LWF6dWwtY29tcC1kZXIuanBnfGQ0YjBiNDg3MTE0NWUzYTA1ZWQxMWM3OWI1YTdhMmE0ODEwMzFiYWU2NTFmMmUwOTFiMjVmMzE2MTkxOTliZDc',
            id: 'product-35-img-2'
          },
          {
            url: 'https://www.flexi.com.mx/medias/402406-azul-comp-der.jpg?context=bWFzdGVyfGltYWdlc3w3NzgyMDN8aW1hZ2UvanBlZ3xoYjcvaDU5LzkzODk0NTg3ODQyODYvNDAyNDA2LWF6dWwtY29tcC1kZXIuanBnfGQ0YjBiNDg3MTE0NWUzYTA1ZWQxMWM3OWI1YTdhMmE0ODEwMzFiYWU2NTFmMmUwOTFiMjVmMzE2MTkxOTliZDc',
            id: 'product-35-img-3'
          },
          {
            url: 'https://www.flexi.com.mx/medias/402406-azul-comp-der.jpg?context=bWFzdGVyfGltYWdlc3w3NzgyMDN8aW1hZ2UvanBlZ3xoYjcvaDU5LzkzODk0NTg3ODQyODYvNDAyNDA2LWF6dWwtY29tcC1kZXIuanBnfGQ0YjBiNDg3MTE0NWUzYTA1ZWQxMWM3OWI1YTdhMmE0ODEwMzFiYWU2NTFmMmUwOTFiMjVmMzE2MTkxOTliZDc',
            id: 'product-35-img-4'
          }
        ],
        'title': 'Zapatos azules 2',
        'price': 49.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': null
      },
      {
        'id': 'product-36363636',
        'comparisonDate': new Date(2016, 7, 17),
        'date': 'Aug 17, 2016',
        'images': [
          {
            url: 'https://media.andypola.es/archivos/img_articulos/DIANANUDE_A05.webp',
            id: 'product-36-img-1'
          },
          {
            url: 'https://media.andypola.es/archivos/img_articulos/DIANANUDE_A05.webp',
            id: 'product-36-img-2'
          },
          {
            url: 'https://media.andypola.es/archivos/img_articulos/DIANANUDE_A05.webp',
            id: 'product-36-img-3'
          },
          {
            url: 'https://media.andypola.es/archivos/img_articulos/DIANANUDE_A05.webp',
            id: 'product-36-img-4'
          }
        ],
        'title': 'Tacones crema 2',
        'price': 33.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': null
      },
      {
        'id': 'product-37373737',
        'comparisonDate': new Date(2016, 7, 17),
        'date': 'Aug 17, 2016',
        'images': [
          {
            url: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ilnzrqiafjmxbqhomptg/gorra-con-cierre-a-presi%C3%B3n-jordan-pro-jumpman-snapback-LqGxfx.png',
            id: 'product-37-img-1'
          },
          {
            url: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ilnzrqiafjmxbqhomptg/gorra-con-cierre-a-presi%C3%B3n-jordan-pro-jumpman-snapback-LqGxfx.png',
            id: 'product-37-img-2'
          },
          {
            url: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ilnzrqiafjmxbqhomptg/gorra-con-cierre-a-presi%C3%B3n-jordan-pro-jumpman-snapback-LqGxfx.png',
            id: 'product-37-img-3'
          },
          {
            url: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ilnzrqiafjmxbqhomptg/gorra-con-cierre-a-presi%C3%B3n-jordan-pro-jumpman-snapback-LqGxfx.png',
            id: 'product-37-img-4'
          }
        ],
        'title': 'Gorra jordan negra 2',
        'price': 15.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': null
      },
      {
        'id': 'product-38383838',
        'comparisonDate': new Date(2016, 7, 17),
        'date': 'Aug 17, 2016',
        'images': [
          {
            url: 'https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/3131288.jpg',
            id: 'product-38-img-1'
          },
          {
            url: 'https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/3131288.jpg',
            id: 'product-38-img-2'
          },
          {
            url: 'https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/3131288.jpg',
            id: 'product-38-img-3'
          },
          {
            url: 'https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/3131288.jpg',
            id: 'product-38-img-4'
          }
        ],
        'title': 'Gorra azul levis 2',
        'price': 16.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': null
      },
      {
        'id': 'product-39393939',
        'comparisonDate': new Date(2016, 7, 17),
        'date': 'Aug 17, 2016',
        'images': [
          {
            url: 'https://www.bordadospanama.com/wp-content/uploads/2021/01/gorra-richardson-gris.jpg',
            id: 'product-39-img-1'
          },
          {
            url: 'https://www.bordadospanama.com/wp-content/uploads/2021/01/gorra-richardson-gris.jpg',
            id: 'product-39-img-2'
          },
          {
            url: 'https://www.bordadospanama.com/wp-content/uploads/2021/01/gorra-richardson-gris.jpg',
            id: 'product-39-img-3'
          },
          {
            url: 'https://www.bordadospanama.com/wp-content/uploads/2021/01/gorra-richardson-gris.jpg',
            id: 'product-39-img-4'
          }
        ],
        'title': 'Gorra gris 2',
        'price': 18.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': null
      },
      {
        'id': 'product-40404040',
        'comparisonDate': new Date(2016, 7, 17),
        'date': 'Aug 17, 2016',
        'images': [
          {
            url: 'https://i.pinimg.com/originals/8b/1c/da/8b1cda90fd174ecdbd178cbd8cd1b506.jpg',
            id: 'product-40-img-1'
          },
          {
            url: 'https://i.pinimg.com/originals/8b/1c/da/8b1cda90fd174ecdbd178cbd8cd1b506.jpg',
            id: 'product-40-img-2'
          },
          {
            url: 'https://i.pinimg.com/originals/8b/1c/da/8b1cda90fd174ecdbd178cbd8cd1b506.jpg',
            id: 'product-40-img-3'
          },
          {
            url: 'https://i.pinimg.com/originals/8b/1c/da/8b1cda90fd174ecdbd178cbd8cd1b506.jpg',
            id: 'product-40-img-4'
          }
        ],
        'title': 'Gorra blanca 2',
        'price': 19.00,
        'discountRate': 0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'coleccion': null
      }
    ],
    colecciones: {
      featured: [
        {
          'id': 'product-1111',
          'comparisonDate': new Date(2017, 3, 27),
          'date': 'Apr 27, 2017',
          'images': [
            {
              url: 'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
              id: 'product-1-img-1'
            },
            {
              url: 'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
              id: 'product-1-img-2'
            },
            {
              url: 'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
              id: 'product-1-img-3'
            },
            {
              url: 'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
              id: 'product-1-img-4'
            }
          ],
          'title': 'Camisa de rayas',
          'price': 25.00,
          'discountRate': 10,
          'description': '<p>Don\'t just beat the rain, join it. Our value-oriented PreCip® Jacket features our waterproof/breathable membrane and two highly technical coatings: The inner Dry Touch coating is comfortable against the skin; the outer coating is durably waterproof. 100% seam taped. Stay nimble with free-moving Angel-Wing Movement™; PitZips™ actively ventilate.</p>',
          'keyBenefits': '<ul><li>PreCip® Dry Touch Technology, Waterproof/Breathable - Waterproof / Breathable</li><li>100% Seam Taped - For Full Waterproofness</li><li>Full Visibility Roll-Up Hood with Integral Collar</li><li>PitZips™ - Underarm Zip That Extends Into the Body for Aggressive Venting</li></ul>',
          'coleccion': 'Featured Products',
          'variantes': [
            {
              'name': 'Color',
              'opciones': ['Blue', 'Green', 'White'],
              'id': 'variante-1'
            },
            {
              'name': 'Size',
              'opciones': ['S', 'M', 'L'],
              'id': 'variante-2'
            }
          ],
          'variantesAgotadas': [
            {
              color: 'Blue',
              size: 'S'
            },
            {
              color: 'Green',
              size: 'S'
            }
          ],
        },
        {
          'id': 'product-2222',
          'comparisonDate': new Date(2017, 3, 27),
          'date': 'Apr 27, 2017',
          'images': [
            {
              url: 'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
              id: 'product-2-img-1'
            },
            {
              url: 'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
              id: 'product-2-img-2'
            },
            {
              url: 'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
              id: 'product-2-img-3'
            },
            {
              url: 'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
              id: 'product-2-img-4'
            }
          ],
          'title': 'Zapatos dorados',
          'price': 40.00,
          'discountRate': 20,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'Featured Products',
          'variantes': [
            {
              'nombre': 'Color',
              'opciones': ['Blue', 'Green', 'White']
            },
            {
              'nombre': 'Talla',
              'opciones': ['S', 'M', 'L']
            }
          ]
        },
        {
          'id': 'product-3333',
          'comparisonDate': new Date(2017, 3, 27),
          'date': 'Apr 27, 2017',
          'images': [
            {
              url: 'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0%22,%20%22name%22:%20%22CATE%20RIGID%20BAG',
              id: 'product-3-img-1'
            },
            {
              url: 'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0%22,%20%22name%22:%20%22CATE%20RIGID%20BAG',
              id: 'product-3-img-2'
            },
            {
              url: 'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0%22,%20%22name%22:%20%22CATE%20RIGID%20BAG',
              id: 'product-3-img-3'
            },
            {
              url: 'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0%22,%20%22name%22:%20%22CATE%20RIGID%20BAG',
              id: 'product-3-img-4'
            }
          ],
          'title': 'Cartera rosada',
          'price': 35.00,
          'discountRate': 50,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'Featured Products',
          'variantes': [
            {
              'nombre': 'Color',
              'opciones': ['Blue', 'Green', 'White']
            },
            {
              'nombre': 'Talla',
              'opciones': ['S', 'M', 'L']
            }
          ]
        },
        {
          'id': 'product-4444',
          'comparisonDate': new Date(2017, 3, 27),
          'date': 'Apr 27, 2017',
          'images': [
            {
              url: 'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
              id: 'product-4-img-1'
            },
            {
              url: 'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
              id: 'product-4-img-2'
            },
            {
              url: 'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
              id: 'product-4-img-3'
            },
            {
              url: 'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
              id: 'product-4-img-4'
            }
          ],
          'title': 'Reloj negro',
          'price': 15.00,
          'discountRate': 22,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'Featured Products',
          'variantes': [
            {
              'nombre': 'Color',
              'opciones': ['Blue', 'Green', 'White']
            },
            {
              'nombre': 'Talla',
              'opciones': ['S', 'M', 'L']
            }
          ]
        },
        {
          'id': 'product-5555',
          'comparisonDate': new Date(2017, 3, 27),
          'date': 'Apr 27, 2017',
          'images': [
            {
              url: 'https://i.pinimg.com/originals/5f/79/81/5f7981e72d2b3fbea5dda305630e9f17.jpg',
              id: 'product-5-img-1'
            },
            {
              url: 'https://i.pinimg.com/originals/5f/79/81/5f7981e72d2b3fbea5dda305630e9f17.jpg',
              id: 'product-5-img-2'
            },
            {
              url: 'https://i.pinimg.com/originals/5f/79/81/5f7981e72d2b3fbea5dda305630e9f17.jpg',
              id: 'product-5-img-3'
            },
            {
              url: 'https://i.pinimg.com/originals/5f/79/81/5f7981e72d2b3fbea5dda305630e9f17.jpg',
              id: 'product-5-img-4'
            }
          ],
          'title': 'Cartera negra',
          'price': 25.00,
          'discountRate': 30,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'Featured Products',
          'variantes': [
            {
              'nombre': 'Color',
              'opciones': ['Blue', 'Green', 'White']
            },
            {
              'nombre': 'Talla',
              'opciones': ['S', 'M', 'L']
            }
          ]
        },
        {
          'id': 'product-6666',
          'comparisonDate': new Date(2017, 3, 27),
          'date': 'Apr 27, 2017',
          'images': [
            {
              url: 'https://www.differenta.com/media/produkty/51917/A-5f7f0f9218d41.jpg',
              id: 'product-6-img-1'
            },
            {
              url: 'https://www.differenta.com/media/produkty/51917/A-5f7f0f9218d41.jpg',
              id: 'product-6-img-2'
            },
            {
              url: 'https://www.differenta.com/media/produkty/51917/A-5f7f0f9218d41.jpg',
              id: 'product-6-img-3'
            },
            {
              url: 'https://www.differenta.com/media/produkty/51917/A-5f7f0f9218d41.jpg',
              id: 'product-6-img-4'
            }
          ],
          'title': 'Sueter',
          'price': 30.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'Featured Products',
          'variantes': [
            {
              'nombre': 'Color',
              'opciones': ['Blue', 'Green', 'White']
            },
            {
              'nombre': 'Talla',
              'opciones': ['S', 'M', 'L']
            }
          ]
        },
        {
          'id': 'product-7777',
          'comparisonDate': new Date(2017, 3, 27),
          'date': 'Apr 27, 2017',
          'images': [
            {
              url: 'https://masternetpty.com/wp-content/uploads/2021/05/taza-blanca-de-cera%CC%81mica.jpg',
              id: 'product-7-img-1'
            },
            {
              url: 'https://masternetpty.com/wp-content/uploads/2021/05/taza-blanca-de-cera%CC%81mica.jpg',
              id: 'product-7-img-2'
            },
            {
              url: 'https://masternetpty.com/wp-content/uploads/2021/05/taza-blanca-de-cera%CC%81mica.jpg',
              id: 'product-7-img-3'
            },
            {
              url: 'https://masternetpty.com/wp-content/uploads/2021/05/taza-blanca-de-cera%CC%81mica.jpg',
              id: 'product-7-img-4'
            }
          ],
          'title': 'Taza blanca',
          'price': 10.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'Featured Products',
          'variantes': [
            {
              'nombre': 'Color',
              'opciones': ['Blue', 'Green', 'White']
            },
            {
              'nombre': 'Talla',
              'opciones': ['S', 'M', 'L']
            }
          ]
        },
        {
          'id': 'product-8888',
          'comparisonDate': new Date(2017, 3, 27),
          'date': 'Apr 27, 2017',
          'images': [
            {
              url: 'https://www.lacuisine.pe/lgc/wp-content/uploads/2020/09/Taza-naranja-Fiesta.jpg',
              id: 'product-8-img-1'
            },
            {
              url: 'https://www.lacuisine.pe/lgc/wp-content/uploads/2020/09/Taza-naranja-Fiesta.jpg',
              id: 'product-8-img-2'
            },
            {
              url: 'https://www.lacuisine.pe/lgc/wp-content/uploads/2020/09/Taza-naranja-Fiesta.jpg',
              id: 'product-8-img-3'
            },
            {
              url: 'https://www.lacuisine.pe/lgc/wp-content/uploads/2020/09/Taza-naranja-Fiesta.jpg',
              id: 'product-8-img-4'
            }
          ],
          'title': 'Taza naranja',
          'price': 12.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'Featured Products',
          'variantes': [
            {
              'nombre': 'Color',
              'opciones': ['Blue', 'Green', 'White']
            },
            {
              'nombre': 'Talla',
              'opciones': ['S', 'M', 'L']
            }
          ]
        },
        {
          'id': 'product-9999',
          'comparisonDate': new Date(2017, 3, 27),
          'date': 'Apr 27, 2017',
          'images': [
            {
              url: 'https://www.pointmenswear.com/wp-content/uploads/2019/06/DSC07499.jpg',
              id: 'product-9-img-1'
            },
            {
              url: 'https://www.pointmenswear.com/wp-content/uploads/2019/06/DSC07499.jpg',
              id: 'product-9-img-2'
            },
            {
              url: 'https://www.pointmenswear.com/wp-content/uploads/2019/06/DSC07499.jpg',
              id: 'product-9-img-3'
            },
            {
              url: 'https://www.pointmenswear.com/wp-content/uploads/2019/06/DSC07499.jpg',
              id: 'product-9-img-4'
            }
          ],
          'title': 'Camisa azul',
          'price': 30.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'Featured Products',
          'variantes': [
            {
              'nombre': 'Color',
              'opciones': ['Blue', 'Green', 'White']
            },
            {
              'nombre': 'Talla',
              'opciones': ['S', 'M', 'L']
            }
          ]
        },
        {
          'id': 'product-10101010',
          'comparisonDate': new Date(2017, 3, 27),
          'date': 'Apr 27, 2017',
          'images': [
            {
              url: 'https://andeslandchile.cl/wp-content/uploads/2018/11/GRISC-1.jpg',
              id: 'product-10-img-1'
            },
            {
              url: 'https://andeslandchile.cl/wp-content/uploads/2018/11/GRISC-1.jpg',
              id: 'product-10-img-2'
            },
            {
              url: 'https://andeslandchile.cl/wp-content/uploads/2018/11/GRISC-1.jpg',
              id: 'product-10-img-3'
            },
            {
              url: 'https://andeslandchile.cl/wp-content/uploads/2018/11/GRISC-1.jpg',
              id: 'product-10-img-4'
            }
          ],
          'title': 'Camisa gris',
          'price': 33.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'Featured Products',
          'variantes': [
            {
              'nombre': 'Color',
              'opciones': ['Blue', 'Green', 'White']
            },
            {
              'nombre': 'Talla',
              'opciones': ['S', 'M', 'L']
            }
          ]
        }
      ],
      bestSelling: [
        {
          'id': 'product-11111111',
          'comparisonDate': new Date(2017, 10, 4),
          'date': 'Nov 4, 2017',
          'images': [
            {
              url: 'https://portalropaempresas.cl/wp-content/uploads/2017/08/camisa-oxford-classic.jpg',
              id: 'product-11-img-1'
            },
            {
              url: 'https://portalropaempresas.cl/wp-content/uploads/2017/08/camisa-oxford-classic.jpg',
              id: 'product-11-img-2'
            },
            {
              url: 'https://portalropaempresas.cl/wp-content/uploads/2017/08/camisa-oxford-classic.jpg',
              id: 'product-11-img-3'
            },
            {
              url: 'https://portalropaempresas.cl/wp-content/uploads/2017/08/camisa-oxford-classic.jpg',
              id: 'product-11-img-4'
            }
          ],
          'title': 'Camisa celeste',
          'price': 29.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'Best Selling Products'
        },
        {
          'id': 'product-12121212',
          'comparisonDate': new Date(2017, 10, 4),
          'date': 'Nov 4, 2017',
          'images': [
            {
              url: 'https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/3069710.jpg',
              id: 'product-12-img-1'
            },
            {
              url: 'https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/3069710.jpg',
              id: 'product-12-img-2'
            },
            {
              url: 'https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/3069710.jpg',
              id: 'product-12-img-3'
            },
            {
              url: 'https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/3069710.jpg',
              id: 'product-12-img-4'
            }
          ],
          'title': 'Camisa blanca corta',
          'price': 27.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'Best Selling Products'
        },
        {
          'id': 'product-13131313',
          'comparisonDate': new Date(2017, 10, 4),
          'date': 'Nov 4, 2017',
          'images': [
            {
              url: 'https://www.flexi.com.mx/medias/400102-negro-comp-der.jpg?context=bWFzdGVyfGltYWdlc3wxNDM0NTd8aW1hZ2UvanBlZ3xoOTAvaDQxLzg4MDUzNzM4MDQ1NzQvNDAwMTAyLW5lZ3JvLWNvbXAtZGVyLmpwZ3w2YjQ2MDZjOGY2MmY0N2JjMzUzMWE5Njg2NTYzMmZlZmY3YzdlMWIwYTVjOTBmNTA1MjBmNTBjZDhhMTk3YWVk',
              id: 'product-13-img-1'
            },
            {
              url: 'https://www.flexi.com.mx/medias/400102-negro-comp-der.jpg?context=bWFzdGVyfGltYWdlc3wxNDM0NTd8aW1hZ2UvanBlZ3xoOTAvaDQxLzg4MDUzNzM4MDQ1NzQvNDAwMTAyLW5lZ3JvLWNvbXAtZGVyLmpwZ3w2YjQ2MDZjOGY2MmY0N2JjMzUzMWE5Njg2NTYzMmZlZmY3YzdlMWIwYTVjOTBmNTA1MjBmNTBjZDhhMTk3YWVk',
              id: 'product-13-img-2'
            },
            {
              url: 'https://www.flexi.com.mx/medias/400102-negro-comp-der.jpg?context=bWFzdGVyfGltYWdlc3wxNDM0NTd8aW1hZ2UvanBlZ3xoOTAvaDQxLzg4MDUzNzM4MDQ1NzQvNDAwMTAyLW5lZ3JvLWNvbXAtZGVyLmpwZ3w2YjQ2MDZjOGY2MmY0N2JjMzUzMWE5Njg2NTYzMmZlZmY3YzdlMWIwYTVjOTBmNTA1MjBmNTBjZDhhMTk3YWVk',
              id: 'product-13-img-3'
            },
            {
              url: 'https://www.flexi.com.mx/medias/400102-negro-comp-der.jpg?context=bWFzdGVyfGltYWdlc3wxNDM0NTd8aW1hZ2UvanBlZ3xoOTAvaDQxLzg4MDUzNzM4MDQ1NzQvNDAwMTAyLW5lZ3JvLWNvbXAtZGVyLmpwZ3w2YjQ2MDZjOGY2MmY0N2JjMzUzMWE5Njg2NTYzMmZlZmY3YzdlMWIwYTVjOTBmNTA1MjBmNTBjZDhhMTk3YWVk',
              id: 'product-13-img-4'
            }
          ],
          'title': 'Zapatos negros con marrón',
          'price': 19.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'Best Selling Products'
        },
        {
          'id': 'product-14141414',
          'comparisonDate': new Date(2017, 10, 4),
          'date': 'Nov 4, 2017',
          'images': [
            {
              url: 'https://i.pinimg.com/originals/9b/6d/46/9b6d46a89a154d4897f160c878b6d696.jpg',
              id: 'product-14-img-1'
            },
            {
              url: 'https://i.pinimg.com/originals/9b/6d/46/9b6d46a89a154d4897f160c878b6d696.jpg',
              id: 'product-14-img-2'
            },
            {
              url: 'https://i.pinimg.com/originals/9b/6d/46/9b6d46a89a154d4897f160c878b6d696.jpg',
              id: 'product-14-img-3'
            },
            {
              url: 'https://i.pinimg.com/originals/9b/6d/46/9b6d46a89a154d4897f160c878b6d696.jpg',
              id: 'product-41-img-4'
            }
          ],
          'title': 'Tacones rojos',
          'price': 45.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'Best Selling Products'
        },
        {
          'id': 'product-15151515',
          'comparisonDate': new Date(2017, 10, 4),
          'date': 'Nov 4, 2017',
          'images': [
            {
              url: 'https://www.flexi.com.mx/medias/402406-azul-comp-der.jpg?context=bWFzdGVyfGltYWdlc3w3NzgyMDN8aW1hZ2UvanBlZ3xoYjcvaDU5LzkzODk0NTg3ODQyODYvNDAyNDA2LWF6dWwtY29tcC1kZXIuanBnfGQ0YjBiNDg3MTE0NWUzYTA1ZWQxMWM3OWI1YTdhMmE0ODEwMzFiYWU2NTFmMmUwOTFiMjVmMzE2MTkxOTliZDc',
              id: 'product-15-img-1'
            },
            {
              url: 'https://www.flexi.com.mx/medias/402406-azul-comp-der.jpg?context=bWFzdGVyfGltYWdlc3w3NzgyMDN8aW1hZ2UvanBlZ3xoYjcvaDU5LzkzODk0NTg3ODQyODYvNDAyNDA2LWF6dWwtY29tcC1kZXIuanBnfGQ0YjBiNDg3MTE0NWUzYTA1ZWQxMWM3OWI1YTdhMmE0ODEwMzFiYWU2NTFmMmUwOTFiMjVmMzE2MTkxOTliZDc',
              id: 'product-15-img-2'
            },
            {
              url: 'https://www.flexi.com.mx/medias/402406-azul-comp-der.jpg?context=bWFzdGVyfGltYWdlc3w3NzgyMDN8aW1hZ2UvanBlZ3xoYjcvaDU5LzkzODk0NTg3ODQyODYvNDAyNDA2LWF6dWwtY29tcC1kZXIuanBnfGQ0YjBiNDg3MTE0NWUzYTA1ZWQxMWM3OWI1YTdhMmE0ODEwMzFiYWU2NTFmMmUwOTFiMjVmMzE2MTkxOTliZDc',
              id: 'product-15-img-3'
            },
            {
              url: 'https://www.flexi.com.mx/medias/402406-azul-comp-der.jpg?context=bWFzdGVyfGltYWdlc3w3NzgyMDN8aW1hZ2UvanBlZ3xoYjcvaDU5LzkzODk0NTg3ODQyODYvNDAyNDA2LWF6dWwtY29tcC1kZXIuanBnfGQ0YjBiNDg3MTE0NWUzYTA1ZWQxMWM3OWI1YTdhMmE0ODEwMzFiYWU2NTFmMmUwOTFiMjVmMzE2MTkxOTliZDc',
              id: 'product-15-img-4'
            }
          ],
          'title': 'Zapatos azules',
          'price': 49.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'Best Selling Products'
        },
        {
          'id': 'product-16161616',
          'comparisonDate': new Date(2017, 10, 4),
          'date': 'Nov 4, 2017',
          'images': [
            {
              url: 'https://media.andypola.es/archivos/img_articulos/DIANANUDE_A05.webp',
              id: 'product-16-img-1'
            },
            {
              url: 'https://media.andypola.es/archivos/img_articulos/DIANANUDE_A05.webp',
              id: 'product-16-img-2'
            },
            {
              url: 'https://media.andypola.es/archivos/img_articulos/DIANANUDE_A05.webp',
              id: 'product-16-img-3'
            },
            {
              url: 'https://media.andypola.es/archivos/img_articulos/DIANANUDE_A05.webp',
              id: 'product-16-img-4'
            }
          ],
          'title': 'Tacones crema',
          'price': 33.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'Best Selling Products'
        },
        {
          'id': 'product-17171717',
          'comparisonDate': new Date(2017, 10, 4),
          'date': 'Nov 4, 2017',
          'images': [
            {
              url: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ilnzrqiafjmxbqhomptg/gorra-con-cierre-a-presi%C3%B3n-jordan-pro-jumpman-snapback-LqGxfx.png',
              id: 'product-17-img-1'
            },
            {
              url: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ilnzrqiafjmxbqhomptg/gorra-con-cierre-a-presi%C3%B3n-jordan-pro-jumpman-snapback-LqGxfx.png',
              id: 'product-17-img-2'
            },
            {
              url: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ilnzrqiafjmxbqhomptg/gorra-con-cierre-a-presi%C3%B3n-jordan-pro-jumpman-snapback-LqGxfx.png',
              id: 'product-17-img-3'
            },
            {
              url: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ilnzrqiafjmxbqhomptg/gorra-con-cierre-a-presi%C3%B3n-jordan-pro-jumpman-snapback-LqGxfx.png',
              id: 'product-17-img-4'
            }
          ],
          'title': 'Gorra jordan negra',
          'price': 15.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'Best Selling Products'
        },
        {
          'id': 'product-18181818',
          'comparisonDate': new Date(2017, 10, 4),
          'date': 'Nov 4, 2017',
          'images': [
            {
              url: 'https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/3131288.jpg',
              id: 'product-18-img-1'
            },
            {
              url: 'https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/3131288.jpg',
              id: 'product-18-img-2'
            },
            {
              url: 'https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/3131288.jpg',
              id: 'product-18-img-3'
            },
            {
              url: 'https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/3131288.jpg',
              id: 'product-18-img-4'
            }
          ],
          'title': 'Gorra azul levis',
          'price': 16.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'Best Selling Products'
        },
        {
          'id': 'product-19191919',
          'comparisonDate': new Date(2017, 10, 4),
          'date': 'Nov 4, 2017',
          'images': [
            {
              url: 'https://www.bordadospanama.com/wp-content/uploads/2021/01/gorra-richardson-gris.jpg',
              id: 'product-19-img-1'
            },
            {
              url: 'https://www.bordadospanama.com/wp-content/uploads/2021/01/gorra-richardson-gris.jpg',
              id: 'product-19-img-2'
            },
            {
              url: 'https://www.bordadospanama.com/wp-content/uploads/2021/01/gorra-richardson-gris.jpg',
              id: 'product-19-img-3'
            },
            {
              url: 'https://www.bordadospanama.com/wp-content/uploads/2021/01/gorra-richardson-gris.jpg',
              id: 'product-19-img-4'
            }
          ],
          'title': 'Gorra gris',
          'price': 18.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'Best Selling Products'
        },
        {
          'id': 'product-20202020',
          'comparisonDate': new Date(2017, 10, 4),
          'date': 'Nov 4, 2017',
          'images': [
            {
              url: 'https://i.pinimg.com/originals/8b/1c/da/8b1cda90fd174ecdbd178cbd8cd1b506.jpg',
              id: 'product-20-img-1'
            },
            {
              url: 'https://i.pinimg.com/originals/8b/1c/da/8b1cda90fd174ecdbd178cbd8cd1b506.jpg',
              id: 'product-20-img-2'
            },
            {
              url: 'https://i.pinimg.com/originals/8b/1c/da/8b1cda90fd174ecdbd178cbd8cd1b506.jpg',
              id: 'product-20-img-3'
            },
            {
              url: 'https://i.pinimg.com/originals/8b/1c/da/8b1cda90fd174ecdbd178cbd8cd1b506.jpg',
              id: 'product-20-img-4'
            }
          ],
          'title': 'Gorra blanca',
          'price': 19.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'Best Selling Products'
        }
      ],
      newArrivals: [
        {
          'id': 'product-21212121',
          'comparisonDate': new Date(2018, 1, 24),
          'date': 'Feb 24, 2018',
          'images': [
            {
              url: 'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
              id: 'product-21-img-1'
            },
            {
              url: 'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
              id: 'product-21-img-2'
            },
            {
              url: 'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
              id: 'product-21-img-3'
            },
            {
              url: 'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
              id: 'product-21-img-4'
            }
          ],
          'title': 'Camisa de rayas 2',
          'price': 25.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'New Arrivals'
        },
        {
          'id': 'product-22222222',
          'comparisonDate': new Date(2018, 1, 24),
          'date': 'Feb 24, 2018',
          'images': [
            {
              url: 'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
              id: 'product-22-img-1'
            },
            {
              url: 'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
              id: 'product-22-img-2'
            },
            {
              url: 'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
              id: 'product-22-img-3'
            },
            {
              url: 'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
              id: 'product-22-img-4'
            }
          ],
          'title': 'Zapatos dorados 2',
          'price': 40.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'New Arrivals'
        },
        {
          'id': 'product-23232323',
          'comparisonDate': new Date(2018, 1, 24),
          'date': 'Feb 24, 2018',
          'images': [
            {
              url: 'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0%22,%20%22name%22:%20%22CATE%20RIGID%20BAG',
              id: 'product-23-img-1'
            },
            {
              url: 'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0%22,%20%22name%22:%20%22CATE%20RIGID%20BAG',
              id: 'product-23-img-2'
            },
            {
              url: 'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0%22,%20%22name%22:%20%22CATE%20RIGID%20BAG',
              id: 'product-23-img-3'
            },
            {
              url: 'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0%22,%20%22name%22:%20%22CATE%20RIGID%20BAG',
              id: 'product-23-img-4'
            }
          ],
          'title': 'Cartera rosada 2',
          'price': 35.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'New Arrivals'
        },
        {
          'id': 'product-24242424',
          'comparisonDate': new Date(2018, 1, 24),
          'date': 'Feb 24, 2018',
          'images': [
            {
              url: 'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
              id: 'product-24-img-1'
            },
            {
              url: 'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
              id: 'product-24-img-2'
            },
            {
              url: 'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
              id: 'product-24-img-3'
            },
            {
              url: 'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
              id: 'product-24-img-4'
            }
          ],
          'title': 'Reloj negro 2',
          'price': 15.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'New Arrivals'
        },
        {
          'id': 'product-25252525',
          'comparisonDate': new Date(2018, 1, 24),
          'date': 'Feb 24, 2018',
          'images': [
            {
              url: 'https://i.pinimg.com/originals/5f/79/81/5f7981e72d2b3fbea5dda305630e9f17.jpg',
              id: 'product-25-img-1'
            },
            {
              url: 'https://i.pinimg.com/originals/5f/79/81/5f7981e72d2b3fbea5dda305630e9f17.jpg',
              id: 'product-25-img-2'
            },
            {
              url: 'https://i.pinimg.com/originals/5f/79/81/5f7981e72d2b3fbea5dda305630e9f17.jpg',
              id: 'product-25-img-3'
            },
            {
              url: 'https://i.pinimg.com/originals/5f/79/81/5f7981e72d2b3fbea5dda305630e9f17.jpg',
              id: 'product-25-img-4'
            }
          ],
          'title': 'Cartera negra 2',
          'price': 25.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'New Arrivals'
        },
        {
          'id': 'product-26262626',
          'comparisonDate': new Date(2018, 1, 24),
          'date': 'Feb 24, 2018',
          'images': [
            {
              url: 'https://www.differenta.com/media/produkty/51917/A-5f7f0f9218d41.jpg',
              id: 'product-26-img-1'
            },
            {
              url: 'https://www.differenta.com/media/produkty/51917/A-5f7f0f9218d41.jpg',
              id: 'product-26-img-2'
            },
            {
              url: 'https://www.differenta.com/media/produkty/51917/A-5f7f0f9218d41.jpg',
              id: 'product-26-img-3'
            },
            {
              url: 'https://www.differenta.com/media/produkty/51917/A-5f7f0f9218d41.jpg',
              id: 'product-26-img-4'
            }
          ],
          'title': 'Sueter 2',
          'price': 30.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'New Arrivals'
        },
        {
          'id': 'product-27272727',
          'comparisonDate': new Date(2018, 1, 24),
          'date': 'Feb 24, 2018',
          'images': [
            {
              url: 'https://masternetpty.com/wp-content/uploads/2021/05/taza-blanca-de-cera%CC%81mica.jpg',
              id: 'product-27-img-1'
            },
            {
              url: 'https://masternetpty.com/wp-content/uploads/2021/05/taza-blanca-de-cera%CC%81mica.jpg',
              id: 'product-27-img-2'
            },
            {
              url: 'https://masternetpty.com/wp-content/uploads/2021/05/taza-blanca-de-cera%CC%81mica.jpg',
              id: 'product-27-img-3'
            },
            {
              url: 'https://masternetpty.com/wp-content/uploads/2021/05/taza-blanca-de-cera%CC%81mica.jpg',
              id: 'product-27-img-4'
            }
          ],
          'title': 'Taza blanca 2',
          'price': 10.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'New Arrivals'
        },
        {
          'id': 'product-28282828',
          'comparisonDate': new Date(2018, 1, 24),
          'date': 'Feb 24, 2018',
          'images': [
            {
              url: 'https://www.lacuisine.pe/lgc/wp-content/uploads/2020/09/Taza-naranja-Fiesta.jpg',
              id: 'product-28-img-1'
            },
            {
              url: 'https://www.lacuisine.pe/lgc/wp-content/uploads/2020/09/Taza-naranja-Fiesta.jpg',
              id: 'product-28-img-2'
            },
            {
              url: 'https://www.lacuisine.pe/lgc/wp-content/uploads/2020/09/Taza-naranja-Fiesta.jpg',
              id: 'product-28-img-3'
            },
            {
              url: 'https://www.lacuisine.pe/lgc/wp-content/uploads/2020/09/Taza-naranja-Fiesta.jpg',
              id: 'product-28-img-4'
            }
          ],
          'title': 'Taza naranja 2',
          'price': 12.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'New Arrivals'
        },
        {
          'id': 'product-29292929',
          'comparisonDate': new Date(2018, 1, 24),
          'date': 'Feb 24, 2018',
          'images': [
            {
              url: 'https://www.pointmenswear.com/wp-content/uploads/2019/06/DSC07499.jpg',
              id: 'product-29-img-1'
            },
            {
              url: 'https://www.pointmenswear.com/wp-content/uploads/2019/06/DSC07499.jpg',
              id: 'product-29-img-2'
            },
            {
              url: 'https://www.pointmenswear.com/wp-content/uploads/2019/06/DSC07499.jpg',
              id: 'product-29-img-3'
            },
            {
              url: 'https://www.pointmenswear.com/wp-content/uploads/2019/06/DSC07499.jpg',
              id: 'product-29-img-4'
            }
          ],
          'title': 'Camisa azul 2',
          'price': 30.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'New Arrivals'
        },
        {
          'id': 'product-30303030',
          'comparisonDate': new Date(2018, 1, 24),
          'date': 'Feb 24, 2018',
          'images': [
            {
              url: 'https://andeslandchile.cl/wp-content/uploads/2018/11/GRISC-1.jpg',
              id: 'product-30-img-1'
            },
            {
              url: 'https://andeslandchile.cl/wp-content/uploads/2018/11/GRISC-1.jpg',
              id: 'product-30-img-2'
            },
            {
              url: 'https://andeslandchile.cl/wp-content/uploads/2018/11/GRISC-1.jpg',
              id: 'product-30-img-3'
            },
            {
              url: 'https://andeslandchile.cl/wp-content/uploads/2018/11/GRISC-1.jpg',
              id: 'product-30-img-4'
            }
          ],
          'title': 'Camisa gris 2',
          'price': 33.00,
          'discountRate': 0,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'coleccion': 'New Arrivals'
        }
      ]
    },
    socialMediaPosts: [
      {
        image: 'https://cdn.shopify.com/s/files/1/0883/0062/products/folded-mtns_1024x1024_bf361544-7a54-45e7-93a8-5b22a7eab0a3_1024x.jpg?v=1568940638',
        caption: 'Our daily routines define us more than I think we give them credit for. These three pieces here are our go-tos and they\'ll be sure to be pieces you return to again and again.',
        id: 'socialMedia1111'
      },
      {
        image: 'https://cdn.shopify.com/s/files/1/0567/8854/9815/files/170611246_452709492650468_8720361148160826873_n_2048x.jpg?v=1620503236',
        caption: 'Our daily routines define us more than I think we give them credit for. These three pieces here are our go-tos and they\'ll be sure to be pieces you return to again and again.',
        id: 'socialMedia2222'
      },
      {
        image: 'https://cdn.shopify.com/s/files/1/0567/8854/9815/files/170611246_452709492650468_8720361148160826873_n_2048x.jpg?v=1620503236',
        caption: 'Our daily routines define us more than I think we give them credit for. These three pieces here are our go-tos and they\'ll be sure to be pieces you return to again and again.',
        id: 'socialMedia3333'
      },
      {
        image: 'https://cdn.shopify.com/s/files/1/0567/8854/9815/files/170611246_452709492650468_8720361148160826873_n_2048x.jpg?v=1620503236',
        caption: 'Our daily routines define us more than I think we give them credit for. These three pieces here are our go-tos and they\'ll be sure to be pieces you return to again and again.',
        id: 'socialMedia4444'
      },
      {
        image: 'https://cdn.shopify.com/s/files/1/0567/8854/9815/files/170611246_452709492650468_8720361148160826873_n_2048x.jpg?v=1620503236',
        caption: 'Penultimo Our daily routines define us more than I think we give them credit for. These three pieces here are our go-tos and they\'ll be sure to be pieces you return to again and again.',
        id: 'socialMedia5555'
      },
      {
        image: 'https://cdn.shopify.com/s/files/1/0567/8854/9815/files/170611246_452709492650468_8720361148160826873_n_2048x.jpg?v=1620503236',
        caption: 'Ultimo Our daily routines define us more than I think we give them credit for. These three pieces here are our go-tos and they\'ll be sure to be pieces you return to again and again.',
        id: 'socialMedia6666'
      }
    ],
    newsletterSubscribers: [],
    currency: 'USD',
    currencyRates: {
      GBP: GBP,
      EUR: EUR
    },
    blogPosts: [
      {
        title: 'Into The Woods',
        content: '<p>A café racer is a lightweight, lightly powered motorcycle optimized for speed and handling rather than comfort – and for quick rides over short distances. With bodywork and control layout recalling early-1960s Grand Prix road racing motorcycles, café racers are noted for their visual minimalism, featuring low-mounted handlebars, prominent seat cowling and elongated fuel tank – and frequently knee-grips indented in the fuel tank.</p><img src="https://cdn.shopify.com/s/files/1/1739/3447/files/iron_resin_headers_and_stopovers_0049_tanks-20_25053916485_o_1024x1024.jpg?v=1494517792" alt="avion" /><p>In 2014, journalist Ben Stewart described the café racer as a "look made popular when European kids stripped down their small-displacement bikes to zip from one café hangout to another." In 1973, American freelance writer Wallace Wyss, contributing to Popular Mechanics magazine, wrote that the term café racer was originally used derogatorily in Europe to describe a "motorcyclist who played at being an Isle of Man road racer" and was, in fact, "someone who owned a racy machine but merely parked it near his table at the local outdoor cafe."</p> <h4>TON UP</h4> <p>The term developed among British motorcycle enthusiasts of the early 1960s from Watford, and London, specifically the Rocker or "Ton-Up Boys" subculture, where the bikes were used for short, quick rides between cafés, in Watford at the Busy Bee café and the Ace Café in London. In post-war Britain, car ownership was still uncommon, but by the late 1950s the average Briton could now afford a car.So by the early 1960s the café racer\'s significance was that a bike had come to represent speed, status and rebellion, rather than mere inability to afford a car.<p>',
        autor: 'Henry Krinkle',
        comparisonDate: new Date(2017, 5, 12),
        date: 'Jun 12, 2017',
        id: 'blog-1',
        imgUrl: 'https://cdn.shopify.com/s/files/1/2090/4191/articles/Fall16_18_1400x_17056119-4223-4b7a-904d-78c567516a18.jpg?v=1497262881',
        slug: 'into-the-woods'
      },
      {
        title: 'New Tee Collection',
        content: '<p>Swell is generated when wind blows consistently over a large area of open water, called the wind\'s fetch. The size of a swell is determined by the strength of the wind and the length of its fetch and duration. Because of this, surf tends to be larger and more prevalent on coastlines exposed to large expanses of ocean traversed by intense low pressure systems.</p><img src="https://cdn.shopify.com/s/files/1/1739/3447/files/iron_resin_headers_and_stopovers_0049_tanks-20_25053916485_o_1024x1024.jpg?v=1494517792" alt="avion" /><p>In 2014, journalist Ben Stewart described the café racer as a "look made popular when European kids stripped down their small-displacement bikes to zip from one café hangout to another." In 1973, American freelance writer Wallace Wyss, contributing to Popular Mechanics magazine, wrote that the term café racer was originally used derogatorily in Europe to describe a "motorcyclist who played at being an Isle of Man road racer" and was, in fact, "someone who owned a racy machine but merely parked it near his table at the local outdoor cafe."</p> <h4>TON UP</h4> <p>The term developed among British motorcycle enthusiasts of the early 1960s from Watford, and London, specifically the Rocker or "Ton-Up Boys" subculture, where the bikes were used for short, quick rides between cafés, in Watford at the Busy Bee café and the Ace Café in London. In post-war Britain, car ownership was still uncommon, but by the late 1950s the average Briton could now afford a car.So by the early 1960s the café racer\'s significance was that a bike had come to represent speed, status and rebellion, rather than mere inability to afford a car.<p>',
        autor: 'Henry Krinkle',
        comparisonDate: new Date(2017, 5, 10),
        date: 'Jun 10, 2017',
        id: 'blog-2',
        imgUrl: 'https://cdn.shopify.com/s/files/1/2090/4191/articles/Spring16_24_1400x_3a667148-d4a0-40fd-8569-a4ba66dae187.jpg?v=1497262294',
        slug: 'new-tee-collection'
      },
      {
        title: 'The Desert Is Calling',
        content: '<p>Surfing is a surface water sport in which the wave rider, referred to as a surfer, rides on the forward or deep face of a moving wave, which is usually carrying the surfer towards the shore. Waves suitable for surfing are primarily found in the ocean, but can also be found in lakes or in rivers in the form of a standing wave or tidal bore. However, surfers can also utilize artificial waves such as those from boat wakes and the waves created in artificial wave pools.</p><img src="https://cdn.shopify.com/s/files/1/1739/3447/files/iron_resin_headers_and_stopovers_0049_tanks-20_25053916485_o_1024x1024.jpg?v=1494517792" alt="avion" /><p>In 2014, journalist Ben Stewart described the café racer as a "look made popular when European kids stripped down their small-displacement bikes to zip from one café hangout to another." In 1973, American freelance writer Wallace Wyss, contributing to Popular Mechanics magazine, wrote that the term café racer was originally used derogatorily in Europe to describe a "motorcyclist who played at being an Isle of Man road racer" and was, in fact, "someone who owned a racy machine but merely parked it near his table at the local outdoor cafe."</p> <h4>TON UP</h4> <p>The term developed among British motorcycle enthusiasts of the early 1960s from Watford, and London, specifically the Rocker or "Ton-Up Boys" subculture, where the bikes were used for short, quick rides between cafés, in Watford at the Busy Bee café and the Ace Café in London. In post-war Britain, car ownership was still uncommon, but by the late 1950s the average Briton could now afford a car.So by the early 1960s the café racer\'s significance was that a bike had come to represent speed, status and rebellion, rather than mere inability to afford a car.<p>',
        autor: 'Henry Krinkle',
        comparisonDate: new Date(2017, 3, 7),
        date: 'Apr 7, 2017',
        id: 'blog-3',
        imgUrl: 'https://cdn.shopify.com/s/files/1/2090/4191/articles/DesertTempest_13_1400x_76e3bbc3-f4a1-4e1d-a5c7-82e88b063343.jpg?v=1497263422',
        slug: 'desert-calling'
      },
      {
        title: 'Into The Woods',
        content: '<p>A café racer is a lightweight, lightly powered motorcycle optimized for speed and handling rather than comfort – and for quick rides over short distances. With bodywork and control layout recalling early-1960s Grand Prix road racing motorcycles, café racers are noted for their visual minimalism, featuring low-mounted handlebars, prominent seat cowling and elongated fuel tank – and frequently knee-grips indented in the fuel tank.</p><img src="https://cdn.shopify.com/s/files/1/1739/3447/files/iron_resin_headers_and_stopovers_0049_tanks-20_25053916485_o_1024x1024.jpg?v=1494517792" alt="avion" /><p>In 2014, journalist Ben Stewart described the café racer as a "look made popular when European kids stripped down their small-displacement bikes to zip from one café hangout to another." In 1973, American freelance writer Wallace Wyss, contributing to Popular Mechanics magazine, wrote that the term café racer was originally used derogatorily in Europe to describe a "motorcyclist who played at being an Isle of Man road racer" and was, in fact, "someone who owned a racy machine but merely parked it near his table at the local outdoor cafe."</p> <h4>TON UP</h4> <p>The term developed among British motorcycle enthusiasts of the early 1960s from Watford, and London, specifically the Rocker or "Ton-Up Boys" subculture, where the bikes were used for short, quick rides between cafés, in Watford at the Busy Bee café and the Ace Café in London. In post-war Britain, car ownership was still uncommon, but by the late 1950s the average Briton could now afford a car.So by the early 1960s the café racer\'s significance was that a bike had come to represent speed, status and rebellion, rather than mere inability to afford a car.<p>',
        autor: 'Henry Krinkle',
        comparisonDate: new Date(2017, 5, 12),
        date: 'Jun 12, 2017',
        id: 'blog-4',
        imgUrl: 'https://cdn.shopify.com/s/files/1/2090/4191/articles/Fall16_18_1400x_17056119-4223-4b7a-904d-78c567516a18.jpg?v=1497262881',
        slug: 'into-the-woods-2'
      },
      {
        title: 'New Tee Collection',
        content: '<p>Swell is generated when wind blows consistently over a large area of open water, called the wind\'s fetch. The size of a swell is determined by the strength of the wind and the length of its fetch and duration. Because of this, surf tends to be larger and more prevalent on coastlines exposed to large expanses of ocean traversed by intense low pressure systems.</p><img src="https://cdn.shopify.com/s/files/1/1739/3447/files/iron_resin_headers_and_stopovers_0049_tanks-20_25053916485_o_1024x1024.jpg?v=1494517792" alt="avion" /><p>In 2014, journalist Ben Stewart described the café racer as a "look made popular when European kids stripped down their small-displacement bikes to zip from one café hangout to another." In 1973, American freelance writer Wallace Wyss, contributing to Popular Mechanics magazine, wrote that the term café racer was originally used derogatorily in Europe to describe a "motorcyclist who played at being an Isle of Man road racer" and was, in fact, "someone who owned a racy machine but merely parked it near his table at the local outdoor cafe."</p> <h4>TON UP</h4> <p>The term developed among British motorcycle enthusiasts of the early 1960s from Watford, and London, specifically the Rocker or "Ton-Up Boys" subculture, where the bikes were used for short, quick rides between cafés, in Watford at the Busy Bee café and the Ace Café in London. In post-war Britain, car ownership was still uncommon, but by the late 1950s the average Briton could now afford a car.So by the early 1960s the café racer\'s significance was that a bike had come to represent speed, status and rebellion, rather than mere inability to afford a car.<p>',
        autor: 'Henry Krinkle',
        comparisonDate: new Date(2017, 5, 10),
        date: 'Jun 10, 2017',
        id: 'blog-5',
        imgUrl: 'https://cdn.shopify.com/s/files/1/2090/4191/articles/Spring16_24_1400x_3a667148-d4a0-40fd-8569-a4ba66dae187.jpg?v=1497262294',
        slug: 'new-tee-collection-2'
      },
      {
        title: 'The Desert Is Calling',
        content: '<p>Surfing is a surface water sport in which the wave rider, referred to as a surfer, rides on the forward or deep face of a moving wave, which is usually carrying the surfer towards the shore. Waves suitable for surfing are primarily found in the ocean, but can also be found in lakes or in rivers in the form of a standing wave or tidal bore. However, surfers can also utilize artificial waves such as those from boat wakes and the waves created in artificial wave pools.</p><img src="https://cdn.shopify.com/s/files/1/1739/3447/files/iron_resin_headers_and_stopovers_0049_tanks-20_25053916485_o_1024x1024.jpg?v=1494517792" alt="avion" /><p>In 2014, journalist Ben Stewart described the café racer as a "look made popular when European kids stripped down their small-displacement bikes to zip from one café hangout to another." In 1973, American freelance writer Wallace Wyss, contributing to Popular Mechanics magazine, wrote that the term café racer was originally used derogatorily in Europe to describe a "motorcyclist who played at being an Isle of Man road racer" and was, in fact, "someone who owned a racy machine but merely parked it near his table at the local outdoor cafe."</p> <h4>TON UP</h4> <p>The term developed among British motorcycle enthusiasts of the early 1960s from Watford, and London, specifically the Rocker or "Ton-Up Boys" subculture, where the bikes were used for short, quick rides between cafés, in Watford at the Busy Bee café and the Ace Café in London. In post-war Britain, car ownership was still uncommon, but by the late 1950s the average Briton could now afford a car.So by the early 1960s the café racer\'s significance was that a bike had come to represent speed, status and rebellion, rather than mere inability to afford a car.<p>',
        autor: 'Henry Krinkle',
        comparisonDate: new Date(2017, 3, 7),
        date: 'Apr 7, 2017',
        id: 'blog-6',
        imgUrl: 'https://cdn.shopify.com/s/files/1/2090/4191/articles/DesertTempest_13_1400x_76e3bbc3-f4a1-4e1d-a5c7-82e88b063343.jpg?v=1497263422',
        slug: 'desert-calling-2'
      },
      {
        title: 'Into The Woods',
        content: '<p>A café racer is a lightweight, lightly powered motorcycle optimized for speed and handling rather than comfort – and for quick rides over short distances. With bodywork and control layout recalling early-1960s Grand Prix road racing motorcycles, café racers are noted for their visual minimalism, featuring low-mounted handlebars, prominent seat cowling and elongated fuel tank – and frequently knee-grips indented in the fuel tank.</p><img src="https://cdn.shopify.com/s/files/1/1739/3447/files/iron_resin_headers_and_stopovers_0049_tanks-20_25053916485_o_1024x1024.jpg?v=1494517792" alt="avion" /><p>In 2014, journalist Ben Stewart described the café racer as a "look made popular when European kids stripped down their small-displacement bikes to zip from one café hangout to another." In 1973, American freelance writer Wallace Wyss, contributing to Popular Mechanics magazine, wrote that the term café racer was originally used derogatorily in Europe to describe a "motorcyclist who played at being an Isle of Man road racer" and was, in fact, "someone who owned a racy machine but merely parked it near his table at the local outdoor cafe."</p> <h4>TON UP</h4> <p>The term developed among British motorcycle enthusiasts of the early 1960s from Watford, and London, specifically the Rocker or "Ton-Up Boys" subculture, where the bikes were used for short, quick rides between cafés, in Watford at the Busy Bee café and the Ace Café in London. In post-war Britain, car ownership was still uncommon, but by the late 1950s the average Briton could now afford a car.So by the early 1960s the café racer\'s significance was that a bike had come to represent speed, status and rebellion, rather than mere inability to afford a car.<p>',
        autor: 'Henry Krinkle',
        comparisonDate: new Date(2017, 5, 12),
        date: 'Jun 12, 2017',
        id: 'blog-7',
        imgUrl: 'https://cdn.shopify.com/s/files/1/2090/4191/articles/Fall16_18_1400x_17056119-4223-4b7a-904d-78c567516a18.jpg?v=1497262881',
        slug: 'into-the-woods-3'
      },
      {
        title: 'New Tee Collection',
        content: '<p>Swell is generated when wind blows consistently over a large area of open water, called the wind\'s fetch. The size of a swell is determined by the strength of the wind and the length of its fetch and duration. Because of this, surf tends to be larger and more prevalent on coastlines exposed to large expanses of ocean traversed by intense low pressure systems.</p><img src="https://cdn.shopify.com/s/files/1/1739/3447/files/iron_resin_headers_and_stopovers_0049_tanks-20_25053916485_o_1024x1024.jpg?v=1494517792" alt="avion" /><p>In 2014, journalist Ben Stewart described the café racer as a "look made popular when European kids stripped down their small-displacement bikes to zip from one café hangout to another." In 1973, American freelance writer Wallace Wyss, contributing to Popular Mechanics magazine, wrote that the term café racer was originally used derogatorily in Europe to describe a "motorcyclist who played at being an Isle of Man road racer" and was, in fact, "someone who owned a racy machine but merely parked it near his table at the local outdoor cafe."</p> <h4>TON UP</h4> <p>The term developed among British motorcycle enthusiasts of the early 1960s from Watford, and London, specifically the Rocker or "Ton-Up Boys" subculture, where the bikes were used for short, quick rides between cafés, in Watford at the Busy Bee café and the Ace Café in London. In post-war Britain, car ownership was still uncommon, but by the late 1950s the average Briton could now afford a car.So by the early 1960s the café racer\'s significance was that a bike had come to represent speed, status and rebellion, rather than mere inability to afford a car.<p>',
        autor: 'Henry Krinkle',
        comparisonDate: new Date(2017, 5, 10),
        date: 'Jun 10, 2017',
        id: 'blog-8',
        imgUrl: 'https://cdn.shopify.com/s/files/1/2090/4191/articles/Spring16_24_1400x_3a667148-d4a0-40fd-8569-a4ba66dae187.jpg?v=1497262294',
        slug: 'new-tee-collection-3'
      },
      {
        title: 'New Tee Collection',
        content: '<p>Swell is generated when wind blows consistently over a large area of open water, called the wind\'s fetch. The size of a swell is determined by the strength of the wind and the length of its fetch and duration. Because of this, surf tends to be larger and more prevalent on coastlines exposed to large expanses of ocean traversed by intense low pressure systems.</p><img src="https://cdn.shopify.com/s/files/1/1739/3447/files/iron_resin_headers_and_stopovers_0049_tanks-20_25053916485_o_1024x1024.jpg?v=1494517792" alt="avion" /><p>In 2014, journalist Ben Stewart described the café racer as a "look made popular when European kids stripped down their small-displacement bikes to zip from one café hangout to another." In 1973, American freelance writer Wallace Wyss, contributing to Popular Mechanics magazine, wrote that the term café racer was originally used derogatorily in Europe to describe a "motorcyclist who played at being an Isle of Man road racer" and was, in fact, "someone who owned a racy machine but merely parked it near his table at the local outdoor cafe."</p> <h4>TON UP</h4> <p>The term developed among British motorcycle enthusiasts of the early 1960s from Watford, and London, specifically the Rocker or "Ton-Up Boys" subculture, where the bikes were used for short, quick rides between cafés, in Watford at the Busy Bee café and the Ace Café in London. In post-war Britain, car ownership was still uncommon, but by the late 1950s the average Briton could now afford a car.So by the early 1960s the café racer\'s significance was that a bike had come to represent speed, status and rebellion, rather than mere inability to afford a car.<p>',
        autor: 'Henry Krinkle',
        comparisonDate: new Date(2017, 5, 10),
        date: 'Jun 10, 2017',
        id: 'blog-9',
        imgUrl: 'https://cdn.shopify.com/s/files/1/2090/4191/articles/Spring16_24_1400x_3a667148-d4a0-40fd-8569-a4ba66dae187.jpg?v=1497262294',
        slug: 'new-tee-collection-24'
      },
      {
        title: 'The Desert Is Calling',
        content: '<p>Surfing is a surface water sport in which the wave rider, referred to as a surfer, rides on the forward or deep face of a moving wave, which is usually carrying the surfer towards the shore. Waves suitable for surfing are primarily found in the ocean, but can also be found in lakes or in rivers in the form of a standing wave or tidal bore. However, surfers can also utilize artificial waves such as those from boat wakes and the waves created in artificial wave pools.</p><img src="https://cdn.shopify.com/s/files/1/1739/3447/files/iron_resin_headers_and_stopovers_0049_tanks-20_25053916485_o_1024x1024.jpg?v=1494517792" alt="avion" /><p>In 2014, journalist Ben Stewart described the café racer as a "look made popular when European kids stripped down their small-displacement bikes to zip from one café hangout to another." In 1973, American freelance writer Wallace Wyss, contributing to Popular Mechanics magazine, wrote that the term café racer was originally used derogatorily in Europe to describe a "motorcyclist who played at being an Isle of Man road racer" and was, in fact, "someone who owned a racy machine but merely parked it near his table at the local outdoor cafe."</p> <h4>TON UP</h4> <p>The term developed among British motorcycle enthusiasts of the early 1960s from Watford, and London, specifically the Rocker or "Ton-Up Boys" subculture, where the bikes were used for short, quick rides between cafés, in Watford at the Busy Bee café and the Ace Café in London. In post-war Britain, car ownership was still uncommon, but by the late 1950s the average Briton could now afford a car.So by the early 1960s the café racer\'s significance was that a bike had come to represent speed, status and rebellion, rather than mere inability to afford a car.<p>',
        autor: 'Henry Krinkle',
        comparisonDate: new Date(2017, 3, 7),
        date: 'Apr 7, 2017',
        id: 'blog-10',
        imgUrl: 'https://cdn.shopify.com/s/files/1/2090/4191/articles/DesertTempest_13_1400x_76e3bbc3-f4a1-4e1d-a5c7-82e88b063343.jpg?v=1497263422',
        slug: 'desert-calling-23'
      },
      {
        title: 'Into The Woods',
        content: '<p>A café racer is a lightweight, lightly powered motorcycle optimized for speed and handling rather than comfort – and for quick rides over short distances. With bodywork and control layout recalling early-1960s Grand Prix road racing motorcycles, café racers are noted for their visual minimalism, featuring low-mounted handlebars, prominent seat cowling and elongated fuel tank – and frequently knee-grips indented in the fuel tank.</p><img src="https://cdn.shopify.com/s/files/1/1739/3447/files/iron_resin_headers_and_stopovers_0049_tanks-20_25053916485_o_1024x1024.jpg?v=1494517792" alt="avion" /><p>In 2014, journalist Ben Stewart described the café racer as a "look made popular when European kids stripped down their small-displacement bikes to zip from one café hangout to another." In 1973, American freelance writer Wallace Wyss, contributing to Popular Mechanics magazine, wrote that the term café racer was originally used derogatorily in Europe to describe a "motorcyclist who played at being an Isle of Man road racer" and was, in fact, "someone who owned a racy machine but merely parked it near his table at the local outdoor cafe."</p> <h4>TON UP</h4> <p>The term developed among British motorcycle enthusiasts of the early 1960s from Watford, and London, specifically the Rocker or "Ton-Up Boys" subculture, where the bikes were used for short, quick rides between cafés, in Watford at the Busy Bee café and the Ace Café in London. In post-war Britain, car ownership was still uncommon, but by the late 1950s the average Briton could now afford a car.So by the early 1960s the café racer\'s significance was that a bike had come to represent speed, status and rebellion, rather than mere inability to afford a car.<p>',
        autor: 'Henry Krinkle',
        comparisonDate: new Date(2017, 5, 12),
        date: 'Jun 12, 2017',
        id: 'blog-11',
        imgUrl: 'https://cdn.shopify.com/s/files/1/2090/4191/articles/Fall16_18_1400x_17056119-4223-4b7a-904d-78c567516a18.jpg?v=1497262881',
        slug: 'into-the-woods-32'
      },
      {
        title: 'New Tee Collection',
        content: '<p>Swell is generated when wind blows consistently over a large area of open water, called the wind\'s fetch. The size of a swell is determined by the strength of the wind and the length of its fetch and duration. Because of this, surf tends to be larger and more prevalent on coastlines exposed to large expanses of ocean traversed by intense low pressure systems.</p><img src="https://cdn.shopify.com/s/files/1/1739/3447/files/iron_resin_headers_and_stopovers_0049_tanks-20_25053916485_o_1024x1024.jpg?v=1494517792" alt="avion" /><p>In 2014, journalist Ben Stewart described the café racer as a "look made popular when European kids stripped down their small-displacement bikes to zip from one café hangout to another." In 1973, American freelance writer Wallace Wyss, contributing to Popular Mechanics magazine, wrote that the term café racer was originally used derogatorily in Europe to describe a "motorcyclist who played at being an Isle of Man road racer" and was, in fact, "someone who owned a racy machine but merely parked it near his table at the local outdoor cafe."</p> <h4>TON UP</h4> <p>The term developed among British motorcycle enthusiasts of the early 1960s from Watford, and London, specifically the Rocker or "Ton-Up Boys" subculture, where the bikes were used for short, quick rides between cafés, in Watford at the Busy Bee café and the Ace Café in London. In post-war Britain, car ownership was still uncommon, but by the late 1950s the average Briton could now afford a car.So by the early 1960s the café racer\'s significance was that a bike had come to represent speed, status and rebellion, rather than mere inability to afford a car.<p>',
        autor: 'Henry Krinkle',
        comparisonDate: new Date(2017, 5, 10),
        date: 'Jun 10, 2017',
        id: 'blog-12',
        imgUrl: 'https://cdn.shopify.com/s/files/1/2090/4191/articles/Spring16_24_1400x_3a667148-d4a0-40fd-8569-a4ba66dae187.jpg?v=1497262294',
        slug: 'new-tee-collection-31'
      }
    ],
    currentPost: null,
    currentProduct: null
  };
  
  const store = createStore(reducer, initialState);
  
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

})()
