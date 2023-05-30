import * as Vue from 'vue';
import wrap from '@vue/web-component-wrapper'
import PaginaAuditoriaComponent from './pages/Auditoria.ce.vue';

const Wrapped = wrap(Vue, PaginaAuditoriaComponent)

const PaginaAuditoria = Vue.defineCustomElement(Wrapped);

customElements.define('pagina-auditoria', Wrapped);