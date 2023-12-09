// Icons
import { aliases, fa } from 'vuetify/iconsets/fa-svg'

// Styles
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

const erwachsen = {
  kids: false,
  colors: {
    background: '#FFFFFF',
    surface: "#f6f6f6",
    surface2: "#E19300",
    primary: "#3f51b5",
    secondary: "#E19300",
    error: "#f44336",
    info: "#2196F3",
    success: "#4caf50",
    warning: "#fb8c00",
  },
};


export default createVuetify({
  theme: {
    defaultTheme: "erwachsen",
    themes: {
      erwachsen,
    },
  }, //   Theme
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },  //  Icons
});