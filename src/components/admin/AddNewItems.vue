<template>
  <v-container>
    <v-row no-gutters>
      <v-col offset-md="1" md="5">
        <h1>Add New Program</h1>
        <div id="info" class="pa-2">
          <v-text-field
            label="Program Name"
            required
            v-model="name"
          ></v-text-field>
          <v-btn color="success" class="mr-2" flat @click="addNewMenuItem()"
            >Add Item</v-btn
          >
          <v-btn color="error" flat>Cancel</v-btn>
        </div>
      </v-col>

      <!-- 
      <v-col offset-md="1" md="4">
        <h1>Preview</h1>
        <div id="info" class="pa-2">
          <v-simple-table id="menu-table">
            <thead>
              <tr>
                <th class="text-left" style="width: 70%">Name</th>
                <th class="text-left" style="width: 100px">Price DKK</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span id="td_name">{{ name }}</span
                  ><br />
                  <span id="menu_item_description">{{ description }}</span>
                </td>
                <td id="preview_menuitem_price">{{ price }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
      </v-col>
      -->
    </v-row>
  </v-container>
</template>

<script>
import { dbMenuAdd } from "../../../firebase";

export default {
  data() {
    return {
      name: "",
      description: "",
      price: "",
    };
  },
  methods: {
    addNewMenuItem() {
      dbMenuAdd.add({
        name: this.name,
        description: this.description,
        price: this.price,
      });
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