import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import Card from "primevue/card";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

import '@/assets/styles.scss';
import '@/assets/tailwind.css';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
app.use(ToastService);

app.component('Card', Card);
app.component('Toolbar', Toolbar);
app.component('Button', Button);
app.component('Menubar', Menubar);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.use(PrimeVue);

app.use(router)
app.use(ConfirmationService);

app.mount('#app');
