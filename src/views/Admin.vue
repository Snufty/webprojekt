<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <h1 id="header">My Programs</h1>
        <v-btn outlined color="hvid" class="mt-2 mb-2" text to="/AddNew"
          >Add New Program</v-btn
        >
        <div id="info" class="pa-2">
          <v-simple-table id="menu_table">
            <template v-slot:default>
              <thead>
                <tr>
                  <th id="th_text" class="text-left" style="width: 70%">
                    Program Name
                  </th>
                  <th class="text-left" style="width: 100px"></th>
                  <th id="th_text" class="text-left" style="width: 100px">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in menuItems" :key="item.name">
                  <td>
                    <!-- <router-link v-bind:to="'/' + "> -->

                    <router-link
                      v-bind:to="{
                        name: 'Exercise',
                        params: {
                          userId: item.uuid,
                          exerciseName: item.name,
                          indi_exercise_name: item.indi_exercise_name,
                        },
                      }"
                    >
                      <span id="td_name">{{ item.name }}</span>
                    </router-link>
                    <br />
                    <span id="menu_item_description">{{
                      item.description
                    }}</span>
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
        <div id="hardcode">
          <v-card class="mt-4">
            <v-card-text>
              <div class="mb-3">Program Name</div>
              <hr />

              <!--
                <router-link :to="item.urlname">
                <div class="mt-3 font-weight-bold">Legs</div></router-link
              >
               -->

              <router-link to="/Legs">
                <div class="mt-3 font-weight-bold">Legs</div></router-link
              >
            </v-card-text>
          </v-card>
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
      menuItems: [],
      uuid: "",
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
          urlName: menuItemData.urlName,
        });
        console.log("test", this.menuItems);
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
      } else {
        this.basket.push({
          name: item.name,
          price: item.price,
          quantity: 1,
          uuid: item.uuid,
        });
      }
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

.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr:last-child
  > th {
  font-size: 1em;
  font-weight: bold;
}

.v-card__subtitle,
.v-card__text {
  font-size: 1.5em;
}

#header {
  font-size: 1.5em;
}

a,
#menu_nav {
  text-decoration: none;
}
</style>