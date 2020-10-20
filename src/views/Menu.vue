<template>
  <v-container>
    <v-row no-gutters>
      <v-col offset-md="1" md="5">
        <h1>Menu Items</h1>
        <div id="info" class="pa-2">
          <v-simple-table id="menu_table">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left" style="width: 70%">Name of item</th>
                  <th class="text-left" style="width: 100px">Price</th>
                  <th class="text-left" style="width: 100px">Add To Basket</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in menuItems" :key="item.name">
                  <td>
                    <span id="td_name">{{ item.name }}</span>
                    <br />
                    <span id="menu_item_description">{{
                      item.description
                    }}</span>
                  </td>
                  <td>{{ item.price }}</td>
                  <td>
                    <v-btn text small @click="addToBasket(item)">
                      <v-icon color="orange">add_box</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-col>
      <v-col offset-md="1" md="4">
        <h1>Current Basket</h1>
        <div id="info" class="pa-2">
          <v-simple-table id="menu_table" v-if="basket.length > 0">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left" style="width: 30%">Quantity</th>
                  <th class="text-left" style="width: 50%">Name of Item</th>
                  <th class="text-left" style="width: 20¤">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in basket" :key="item.name">
                  <td>
                    <v-icon color="orange" @click="increaseQtn(item)"
                      >add_box</v-icon
                    >
                    {{ item.quantity }}
                    <v-icon color="orange" @click="decreaseQtn(item)"
                      >indeterminate_check_box</v-icon
                    >
                  </td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.price }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>

          <v-simple-table v-else>
            <p>The Basket is Empty</p>
          </v-simple-table>

          <v-divider></v-divider>
          <v-row id="backet_checkout" class="mt-4" style="margin: 0">
            <v-col>
              <p>Subtotal:</p>
              <p>Delivery:</p>
              <p>Total Amount:</p>
            </v-col>
            <v-col class="text-right">
              <p>{{ subTotal }} DKK</p>
              <p>10 DKK</p>
              <p>
                <b>{{ total }} DKK</b>
              </p>
            </v-col>
          </v-row>
          <v-row style="margin: 0">
            <v-spacer></v-spacer>
            <v-btn color="orange" class="pa-2 ma-1">Checkout</v-btn>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { dbMenuAdd } from "../../firebase";

export default {
  data() {
    return {
      basketDump: [],
      menuItems: [
        /*
        {
          name: "Frozen Yogurt",
          description: "Stuff",
          price: 159,
        },
        {
          name: "Ice cream sandwich",
          description: "Stuff",
          price: 237,
        },
        {
          name: "Eclair",
          description: "Stuff",
          price: 262,
        },
        {
          name: "Cupcake",
          description: "Stuff",
          price: 305,
        },
        {
          name: "Gingerbread",
          description: "Stuff",
          price: 356,
        },
        */
      ],
    };
  },
  created() {
    dbMenuAdd.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var menuItemData = doc.data();
        this.menuItems.push({
          id: doc.id,
          name: menuItemData.name,
          description: menuItemData.description,
          price: menuItemData.price,
        });
      });
    });
  },
  methods: {
    addToBasket(item) {
      this.basketDump.push({
        name: item.name,
        price: item.price,
        quantity: 1,
      });
      this.$store.commit("addBasketItems", this.basketDump);
      console.log("What is this", this.basketDump);
      this.basketDump = [];
    },
  },
  computed: {
    basket() {
      //return this.$store.state.basketItems;
      return this.$store.getters.getBasketItems;
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  @include infobox_mixin(
    5px,
    map-get($colorz, hvid),
    10px,
    5px,
    map-get($colorz, hvid)
  );
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  text-align: right;
}

.col:last-child h1 {
  text-align: left;
}

#info {
  background-color: white;
}

tr th {
  font-weight: 300;
}

#td_name {
  font-weight: bold;
}

tr td {
  padding: 10xp 10px 10px 16px;
}

#menu_item_description {
  font-style: italic;
  font-weight: 300;
  color: map-get($colorz, secondary);
  font-size: 13px;
}

#backet_checkout {
  font-size: 14px;
}

#backet_checkout p:first-child {
  line-height: 6px;
}
</style>