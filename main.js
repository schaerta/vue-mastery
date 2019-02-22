var app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    inventory: 9,
    description: 'Beautiful and soft.',
    selectedVariant: 0,
    details: ["80% cotton", "20% polyester"],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: "./img/socks_green.jpeg",
        variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: "./img/socks_blue.jpeg",
        variantQuantity: 0
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
    updateProduct(index) {
      this.selectedVariant = index;
    }
  },

  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    }
  }
})
