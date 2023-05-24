import { defineComponent, defineCustomElement } from "vue";
import VuePaginaAuditoria from "./pages/Auditoria.vue"

export const PaginaAuditoria = defineCustomElement(VuePaginaAuditoria)

export function register() {
    customElements.define("pagina-auditoria", PaginaAuditoria)
}