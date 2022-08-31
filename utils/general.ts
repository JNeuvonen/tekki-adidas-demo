export const DUMMY_DATA = {
  'Back to school': [
    {
      description: 'Essentials logo Backpack',
      imageUrl:
        'https://assets.adidas.com/images/w_600,f_auto,q_auto/9ec7bfc0fdfa4770877bac860119113d_9366/Essentials_Logo_Backpack_Black_GN2014_01_standard.jpg',
      price: 30,
      tags: ['Tennis'],
      bundleDeal: true,
    },
  ],

  'New Arrivals': [
    {
      description: 'Essentials logo Backpack',
      imageUrl:
        'https://assets.adidas.com/images/w_600,f_auto,q_auto/9ec7bfc0fdfa4770877bac860119113d_9366/Essentials_Logo_Backpack_Black_GN2014_01_standard.jpg',
      price: 30,
      tags: ['Tennis'],
      bundleDeal: true,
    },
  ],

  'Coming soon': [
    {
      description: 'Essentials logo Backpack',
      imageUrl:
        'https://assets.adidas.com/images/w_600,f_auto,q_auto/9ec7bfc0fdfa4770877bac860119113d_9366/Essentials_Logo_Backpack_Black_GN2014_01_standard.jpg',
      price: 30,
      tags: ['Tennis'],
      bundleDeal: true,
    },
  ],
}

const IMAGE_ENDPOINTS = {
  'Back to school': [
    'https://assets.adidas.com/images/w_600,f_auto,q_auto/9ec7bfc0fdfa4770877bac860119113d_9366/Essentials_Logo_Backpack_Black_GN2014_01_standard.jpg',
    'https://assets.adidas.com/images/w_600,f_auto,q_auto/891570bd27d34ae9a81fac0200fc7566_9366/Run_60s_2.0_Shoes_Black_FZ0961_01_standard.jpg',
    'https://assets.adidas.com/images/w_600,f_auto,q_auto/574bda03f44a43778b70aead012a9ffb_9366/Adicolor_Backpack_Green_HK2624_01_standard.jpg',
  ],

  'New Arrivals': [
    'https://assets.adidas.com/images/w_600,f_auto,q_auto/87ecb55483cc4195a500aeef00f4751c_9366/Superstar_360_2.0_Boots_Black_GX9079_01_standard.jpg',
    'https://assets.adidas.com/images/w_600,f_auto,q_auto/6328d03ec0df489bb273ae2f00399dac_9366/Busenitz_Shoes_Blue_GY6902_01_standard.jpg',
    'https://assets.adidas.com/images/w_600,f_auto,q_auto/9f253f8424364e0497d3ae9200872b11_9366/Astir_Shoes_White_GW9752_01_standard.jpg',
  ],

  'Coming soon': [
    'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/9fb7e9f128424c58a032ae9201300bf7_9366/Solarcontrol_Shoes_Beige_GX9221_01_standard.jpg',
    'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/6c64c89e570f44e79df4ae6f012e27ce_9366/Supernova_2_TME_Shoes_White_GX1674_01_standard.jpg',
    'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/8b8bd41668e84a648fa3adfa0007dd8d_9366/NMD_S1_RYAT_Brown_GV6638_01_standard.jpg',
  ],
}

export const populateWithDummyData = (entries: number) => {
  const DUMMY_DATA = {
    'Back to school': [],
    'New Arrivals': [],
    'Coming soon': [],
  }
  const populateType = (
    category: 'Back to school' | 'New Arrivals' | 'Coming soon'
  ) => {
    for (let i = 0; i < entries; i++) {
      const random = Math.floor(Math.random() * 3)
      let price = Math.floor(Math.random() * 200)
      price = Math.max(price, 30)
      const image = IMAGE_ENDPOINTS[category][random]
      const item: any = {}
      item['description'] = 'Essentials logo Backpack'
      item['imageUrl'] = image
      item['price'] = price
      item['tags'] = ['Tennis']
      item['bundleDeal'] = true

      //@ts-ignore
      DUMMY_DATA[category].push(item)
    }
  }

  populateType('Back to school')
  populateType('New Arrivals')
  populateType('Coming soon')

  return DUMMY_DATA
}
