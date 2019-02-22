Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
		<div class="product">

			<div class="product-image">
				<img :src="image">
			</div>

			<div class="product-info">
				<h1>{{ title }}</h1>
				<p v-if="inStock">In Stock</p>
				<p v-if="onSale">{{ onSaleNotice }}</p>
				<p v-else :class="{ noStock: !inStock }">Out of Stock</p>
                <p>User is premium: {{ premium }}</p>

				<ul>
					<li v-for="detail in details">{{ detail }}</li>
				</ul>

				<div v-for="(variant, index) in variants"
						class="color-box"
						:style="{ backgroundColor: variant.variantColor }"
						@mouseover="updateProduct(index)">
				</div>

				<p>{{ description }}</p>
				<p><a :href="moreProductsLink">{{ MoreProductsText }}</a><p>

					<button v-on:click="addToCart"
									:disabled="!inStock"
									:class="{ disabledButton: !inStock }">Add to Cart</button>
					<button v-on:click="subtractFromCart">Subtract from Cart</button>

					<div class="cart">
						<p>Cart({{ cart }})</p>
					</div>

			</div>
		</div>
    `,
      data() {
          return {
              brand: 'Vue Mastery',
              product: 'Socks',
              inventory: 9,
              onSale: true,
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
          }
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
        },
        onSaleNotice() {
          if (this.onSale) {
            return this.brand + ' ' + this.product + ' is on Sale!'
          }
        }
      }
})

Vue.component('product-details', {
    props: {}
})


var app = new Vue({
  el: '#app',
  data: {
      premium: true
  }
})
