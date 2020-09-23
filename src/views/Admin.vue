<template>
  <v-container>
    <v-row no-gutters>
      <v-col offset-md="1" md="5">
        <h1>Menu Items</h1>
        <v-btn color="orange" outlined small text to="/AddNew">Add New Item</v-btn>
        <div id="info" class="pa-2">
          <v-simple-table id="menu_table">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left" style="width:70%;">Name of item</th>
                  <th class="text-left" style="width:100px;">Price</th>
                  <th class="text-left" style="width:100px;">Add To Basket</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in menuItems" :key="item.name">
                  <td>
                    <span id="td_name">{{ item.name }}</span>
                    <br />
                    <span id="menu_item_description">{{ item.description }}</span>
                  </td>
                  <td>{{ item.price }}</td>
                  <td>
                    <v-btn text small @click="deleteItem(item.id)">
                      <v-icon color="error">delete</v-icon>
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
        <div id="info" class="pa-2">right</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { dbMenuAdd } from "../../firebase";
export default {
  data() {
    return {
      basket: [],
      menuItems: [],
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
    deleteItem(id) {
      dbMenuAdd
        .doc(id)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    },
    addToBasket(item) {
      if (this.basket.find((itemInArray) => item.name === itemInArray.name)) {
        item = this.basket.find(
          (itemInArray) => item.name === itemInArray.name
        );
        this.increaseQtn(item);
      } else {
        this.basket.push({
          name: item.name,
          price: item.price,
          quantity: 1,
        });
      }
    },
    increaseQtn(item) {
      item.quantity++;
    },
    decreaseQtn(item) {
      item.quantity--;
      if (item.quantity === 0) {
        this.basket.splice(this.basket.indexOf(item), 1);
      }
    },
  },
  computed: {
    subTotal() {
      var subCost = 0;
      for (var items in this.basket) {
        var individualItem = this.basket[items];
        subCost += individualItem.quantity * individualItem.price;
      }
      return subCost;
    },
    total() {
      var deliveryPrice = 10;
      var totalCost = this.subTotal;
      return totalCost + deliveryPrice;
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
  color: map-get($colorz, error);
  font-size: 13px;
}

#backet_checkout {
  font-size: 14px;
}

#backet_checkout p:first-child {
  line-height: 6px;
}
</style>