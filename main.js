var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    inventory: 9,
    description: 'Beautiful and soft.',
    image: './img/socks_green.jpeg',
    details: ["80% cotton", "20% polyester"],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: "./img/socks_green.jpeg"
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: "./img/socks_blue.jpeg"
      }
    ],
    cart: 0,
    moreProductsLink: 'https://www.ecosia.org/',
    MoreProductsText: 'Search for more products...'
  },

  methods: {
    addToCart() {
      this.cart += 1;
    },
    subtractFromCart() {
      this.cart -= 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage
    }
  }
})
