
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        { id: 1, item_name: 'Coriander', user_id: 1, category_id: 1, public: false, description: 'Coriander', lat: -41.296889, long: 174.7719502, suburb: 'Wellington', rating: 5, comments: 'Some nice stuff going on in here', season_id: 5, quantity: '1000000', image: 'data:image/jpeg;base64,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' },
        { id: 4, item_name: 'Elder', user_id: 1, category_id: 4, public: true, description: 'Hard to reach, I reccomend bringing some long handled clippers and a net', lat: -41.322432, long: 174.786959, suburb: 'Melrose', rating: 5, comments: 'S', season_id: 1, quantity: '10', image: 'https://cdn1.bigcommerce.com/n-ww20x/rgdg1pz/products/1708/images/4292/P1016160ELDER__12383.1497781668.1280.1280.jpg?c=2' },
        { id: 5, item_name: 'Blackberries', user_id: 1, category_id: 1, public: true, description: 'There are heaps along this pathway', lat: -41.323922, long: 174.782543, suburb: 'Newtown', rating: 5, comments: 'S', season_id: 1, quantity: '100', image: 'https://i.pinimg.com/600x315/58/96/2e/58962ed7f25def4add14b87c42cd8b6e.jpg' },
        { id: 6, item_name: 'Elder', user_id: 1, category_id: 4, public: true, description: 'Down the hill behind the bus shelter', lat: -41.321377, long: 174.786454, suburb: 'Melrose', rating: 5, comments: 'S', season_id: 1, quantity: '10', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSB2RsJ7d20JIyCQ1YlrLzeVprqE1-1aLJP8Qy7xTvhk7PvdU&s' },
        { id: 7, item_name: 'Elder', user_id: 1, category_id: 4, public: true, description: 'Made some delicious elderflower cordial with these, great spot', lat: -41.318935, long: 174.781540, suburb: 'Newtown', rating: 5, comments: 'S', season_id: 1, quantity: '12', image: 'https://resources.stuff.co.nz/content/dam/images/1/i/6/c/0/z/image.related.StuffLandscapeSixteenByNine.1420x800.1i0rji.png/1492731641332.jpg' },
        { id: 8, item_name: 'Fig', user_id: 1, category_id: 1, public: true, description: 'Lots of trees on the side of the road, yum!', lat: -41.331538, long: 174.772763, suburb: 'Island Bay', rating: 5, comments: 'S', season_id: 1, quantity: '20', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQos6c9bksyQvzEOEVdYj2W1NvOwYfPSFbhvOeEcNeX0wHCBd-N&s' },
        { id: 9, item_name: 'Community Garden', user_id: 1, category_id: 5, public: true, description: 'Down the alley at the end of the street, very cute. A variety of items growing', lat: -41.319374, long: 174.773226, suburb: 'Berhampore', rating: 5, comments: 'S', season_id: 5, quantity: '7', image: 'https://d1k2jfc4wnfimc.cloudfront.net/assets/decor/generalpresentation/id12761pic2.jpg?ts=131417904868855244' },
        { id: 10, item_name: 'Community garden', user_id: 1, category_id: 5, public: true, description: 'Small ish guerrilla garden down the end of the street, along a walkway to the park', lat: -41.318714, long: 174.774091, suburb: 'Berhampore', rating: 5, comments: 'S', season_id: 5, quantity: '10', image: 'https://www.greenelephant.co.nz/wp-content/uploads/2017/10/Our-organic-vegetable-garden-crops.jpg' },
        { id: 11, item_name: 'Apples!', user_id: 1, category_id: 1, public: true, description: 'There are a couple of delicious apple trees on this street, small but abundant', lat: -41.337638, long: 174.768730, suburb: 'Island Bay', rating: 5, comments: 'S', season_id: 1, quantity: '10', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUeJFUIVnoi9Ep8cuFNJbC9vUqKOL0_99noFutNNXIavFvZZJNfg&s' },
        { id: 12, item_name: 'Kawakawa Commons', user_id: 1, category_id: 5, public: true, description: 'Beutiful community garden. Small veggie patch, great bush walks with different foraging options such as fruit trees and of course kawakawa', lat: -41.329784, long: 174.785861, suburb: 'Melrose', rating: 5, comments: 'S', season_id: 5, quantity: '10', image: 'https://clearburnnaturals.nz/cms/wp-content/uploads/2019/05/Kawakawa_leaves-1200x900.jpg' },
        { id: 13, item_name: 'Pears', user_id: 1, category_id: 1, public: true, description: 'Hanging over the fence', lat: -41.337884, long: 174.770409, suburb: 'Island Bay', rating: 5, comments: 'S', season_id: 1, quantity: '10', image: 'https://www.podgardening.co.nz/img/products/fruit/Pear/Pear/pear-bunch-kel.jpg' },
        { id: 14, item_name: 'Elder', user_id: 1, category_id: 4, public: true, description: 'On the bank between the road and houses, a big tree', lat: -41.323915, long: 174.789056, suburb: 'Melrose', rating: 5, comments: 'S', season_id: 1, quantity: '10', image: 'https://i.pinimg.com/originals/10/52/c3/1052c3ef9116a412bfa1c4700df4fa30.jpg' },
        { id: 15, item_name: 'Seaweed', user_id: 1, category_id: 5, public: true, description: 'There is heaps here after a storm. Mind that you don\'t collect from the reserve area', lat: -41.339036, long: 174.793487, suburb: 'Lyall bay', rating: 5, comments: 'S', season_id: 5, quantity: '10', image: 'https://images.squarespace-cdn.com/content/59461914b6ac507c7c511495/1497767638945-29HGDB8DISB2CCW1ATLP/20130701_seaweedmoundslyallbay_0002.jpg?content-type=image%2Fjpeg' },
        { id: 16, item_name: 'Feijoa', user_id: 1, category_id: 1, public: true, description: 'This is a small tree currently (summer 2019) but has space to thrive and be abundant', lat: -41.311866, long: 174.829112, suburb: 'Worser Bay', rating: 5, comments: 'S', season_id: 2, quantity: '10', image: 'https://www.kings.co.nz/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/p/r/product_4783_20170131_160817.jpg' },
        { id: 17, item_name: 'Fig Tree', user_id: 1, category_id: 1, public: true, description: 'Over hanging large fig tree', lat: -41.320554, long: 174.802206, suburb: 'Rongotai', rating: 5, comments: 'S', season_id: 1, quantity: '10', image: 'https://www.waimeanurseries.co.nz/assets/Uploads/_resampled/FillWyI3MjAiLCI0NTAiXQ/Fig-Brunswick.jpg' },

        { id: 18, item_name: 'Fig tree', user_id: 1, category_id: 1, public: true, description: 'Over hanging tree', lat: -41.307887, long: 174.798175, suburb: 'Evans Bay', rating: 5, comments: '5', season_id: 1, quantity: '10', image: 'https://resources.stuff.co.nz/content/dam/images/1/i/6/c/0/z/image.related.StuffLandscapeSixteenByNine.1420x800.1i0rji.png/1492731641332.jpg' },
        { id: 19, item_name: 'Pear tree', user_id: 1, category_id: 1, public: true, description: 'Over hanging tree', lat: -41.301326, long: 174.798003, suburb: 'Hataitai', rating: 5, comments: '5', season_id: 5, quantity: '10', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOflbvZ-RcqtFQ-iFAgVyuhAylCk99iTIjhfB3OTD49W5MqBR&s' },
        { id: 20, item_name: 'Plum', user_id: 1, category_id: 1, public: true, description: 'Plum tree', lat: -41.291903, long: 174.791105, suburb: 'Oriental Bay', rating: 5, comments: '5', season_id: 1, quantity: '10', image: 'https://www.waimeanurseries.co.nz/assets/our-products/fruit-trees/plums/hawera/_resampled/FillWyI3MjAiLCI0NTAiXQ/Plum-Hawera-3.JPG' },
        { id: 21, item_name: 'Little veggie garden', user_id: 2, category_id: 1, public: false, description: 'Fruit trees along with a veggie patch', lat: -41.291903, long: 174.791115, suburb: 'Oriental Bay', rating: 5, comments: '5', season_id: 5, quantity: '10', image: 'https://worcesterallotment.files.wordpress.com/2010/05/globeartichoke2.jpg' },
        {
          id: 22,
          item_name: 'Grapes',
          user_id: 1,
          category_id: 1,
          public: 1,
          description: 'Yum!',
          long: 174.77159159863618,
          lat: -41.30330882218178,
          suburb: null,
          rating: null,
          comments: null,
          season_id: 1,
          quantity: 2,
          image:
            'data:image/jpeg;base64,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'
        },
        {
          id: 23,
          item_name: 'Plum',
          user_id: 1,
          category_id: 1,
          public: 1,
          description: 'Might want a latter for this tree',
          long: 174.7740967818561,
          lat: -41.303647332096055,
          suburb: null,
          rating: null,
          comments: null,
          season_id: 1,
          quantity: 2,
          image:
            'https://www.waimeanurseries.co.nz/assets/our-products/fruit-trees/plums/hawera/_resampled/FillWyI3MjAiLCI0NTAiXQ/Plum-Hawera-3.JPG'
        },
        {
          id: 24,
          item_name: 'Olives',
          user_id: 1,
          category_id: 1,
          public: 1,
          description: 'Olive tree',
          long: 174.773721272594,
          lat: -41.303764198206025,
          suburb: null,
          rating: null,
          comments: null,
          season_id: 2,
          quantity: 2,
          image:
            'https://www.daltons.co.nz/sites/default/files/styles/side_image_xs/public/olive_branches_is17173598m_crop.jpg?itok=uvfjnIcJ'
        },
        {
          id: 25,
          item_name: 'Fig',
          user_id: 1,
          category_id: 1,
          public: 1,
          description: 'Fig tree',
          long: 174.77419334138062,
          lat: -41.30342165901512,
          suburb: null,
          rating: null,
          comments: null,
          season_id: 1,
          quantity: 1,
          image:
            'https://www.waimeanurseries.co.nz/assets/Uploads/_resampled/FillWyI3MjAiLCI0NTAiXQ/Fig-Brunswick.jpg'
        },
        {
          id: 26,
          item_name: 'Plum',
          user_id: 1,
          category_id: 1,
          public: 1,
          description: 'Plums! A small tree but yum',
          long: 174.7772428917309,
          lat: -41.30915746930005,
          suburb: null,
          rating: null,
          comments: null,
          season_id: 1,
          quantity: 1,
          image:
            'https://www.waimeanurseries.co.nz/assets/our-products/fruit-trees/plums/hawera/_resampled/FillWyI3MjAiLCI0NTAiXQ/Plum-Hawera-3.JPG'
        },
        {
          id: 27,
          item_name: 'Fig',
          user_id: 1,
          category_id: 1,
          public: 1,
          description: 'Fig tree',
          long: 174.798493769346,
          lat: -41.301249631926225,
          suburb: null,
          rating: null,
          comments: null,
          season_id: 1,
          quantity: 2,
          image:
            'https://www.waimeanurseries.co.nz/assets/Uploads/_resampled/FillWyI3MjAiLCI0NTAiXQ/Fig-Brunswick.jpg'
        },
        {
          id: 28,
          item_name: 'Fig',
          user_id: 1,
          category_id: 1,
          public: 1,
          description: 'Fig tree',
          long: 174.79875394362045,
          lat: -41.30090909454635,
          suburb: null,
          rating: null,
          comments: null,
          season_id: 1,
          quantity: 1,
          image:
            'https://www.waimeanurseries.co.nz/assets/Uploads/_resampled/FillWyI3MjAiLCI0NTAiXQ/Fig-Brunswick.jpg'
        },
        {
          id: 29,
          item_name: 'Apple',
          user_id: 1,
          category_id: 1,
          public: 1,
          description: 'Apples here',
          long: 174.81424777780717,
          lat: -41.31005689679921,
          suburb: null,
          rating: null,
          comments: null,
          season_id: 1,
          quantity: 2,
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUeJFUIVnoi9Ep8cuFNJbC9vUqKOL0_99noFutNNXIavFvZZJNfg&s'
        },
        {
          id: 30,
          item_name: 'Feijoa',
          user_id: 1,
          category_id: 1,
          public: 0,
          description: 'Feijoa tree down here',
          long: 174.8152663800521,
          lat: -41.311714921955684,
          suburb: null,
          rating: null,
          comments: null,
          season_id: 2,
          quantity: 2,
          image:
            'https://www.kings.co.nz/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/p/r/product_4783_20170131_160817.jpg'
        },
        {
          id: 37,
          item_name: 'Blackberries',
          user_id: 1,
          category_id: 1,
          public: 1,
          description: 'A few bushes here, ripe for the plucking',
          long: 174.76086986659243,
          lat: -41.310107529075324,
          suburb: null,
          rating: null,
          comments: null,
          season_id: 1,
          quantity: 3,
          image: 'https://i.pinimg.com/600x315/58/96/2e/58962ed7f25def4add14b87c42cd8b6e.jpg'
        },
        { id: 38,
          item_name: 'Ginkgo',
          user_id: 1,
          category_id: 3,
          public: 1,
          description:
           'Ginkgo tree here. Makes great tea. Avoid the seeds, they are poisonous. Harvest late summer.',
          long: 174.7261058608957,
          lat: -41.285144054997915,
          suburb: null,
          rating: null,
          comments: null,
          season_id: 1,
          quantity: 2,
          image: 'https://images-na.ssl-images-amazon.com/images/I/71ZZ3gLGibL._SX466_.jpg' }
      ]);
    });
};
