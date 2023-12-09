<template>
    <v-footer class="footer" color="surface2">
        <v-row justify="center" no-gutters>
            <v-btn v-for="link in links" :key="link" variant="text" class="mx-2" rounded="xl">
                <router-link :to="{ name: link }">{{ link }}</router-link>
            </v-btn>
            <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong>Hochschule Harz</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<style>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>

<script>
export default {
    name: 'FooterComponent',

    data: () => ({
        links: [
            'home',
            //'Co2-Rechner',
            //'Über uns',
            //'Impressum',
            'about'
        ],
    }),
}
</script>