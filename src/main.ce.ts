import App from './App.vue';
import AuditoriaCeVue from './pages/Auditoria.ce.vue';
import { createApp, defineCustomElement, h, getCurrentInstance } from 'vue';
import { Quasar } from 'quasar';



const app = createApp(AuditoriaCeVue);

app.use(Quasar, { plugins: {} });

const appComponent = defineCustomElement({
    render: () => h(AuditoriaCeVue),
    styles: AuditoriaCeVue.styles,
    props: {},
    setup() {
        const instance = getCurrentInstance();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        Object.assign(instance?.appContext, app._context);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        Object.assign(instance?.provides, app._context.provides);
      },
});

customElements.define('pagina-auditoria', appComponent);





// import * as Vue from 'vue';
// import PaginaAuditoriaComponent from './pages/Auditoria.ce.vue';

// const PaginaAuditoria = Vue.defineCustomElement(PaginaAuditoriaComponent);

// customElements.define('pagina-auditoria', PaginaAuditoria);