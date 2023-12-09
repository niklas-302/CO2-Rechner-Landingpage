
  <template>
    <v-app-bar :elevation="0" color="surface">
        <v-col class="v-col-1">
            <v-row justify="space-around" no-gutters>
            <img 
                :src="require('@/assets/3792_11_1_g.jpeg')" 
                alt="logo Tourismus" 
                :style="{ height: '53px', width: 'auto' }"
            />
            </v-row>
        </v-col>

        <v-col class="v-col-10"/>

        <v-col class="v-col-1 bg-surface2" align="center">
            <v-row justify="space-around" align="center" no-gutters>
                <font-awesome-icon icon="fa-solid fa-circle-user" size="2xl" />
                <font-awesome-icon icon="fa-solid fa-bars" size="2xl" />
            </v-row>
        </v-col>
    </v-app-bar>
  </template>


<style></style>

<script>
export default {
    name: 'HeaderComponent',
}
</script>