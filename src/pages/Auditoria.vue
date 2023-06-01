<template>
    <h1>Hello from Auditoria</h1>
    <div class="q-pa-md">
        <q-table
            title="Auditoria"
            :rows="rows"
            :columns="columns"
            row-key="name"
        >
        </q-table>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { QTable } from 'quasar'
    import '@quasar/extras/material-icons/material-icons.css'

    export default defineComponent({
        name: "PaginaAuditoria",
        components: {
            QTable
        },
        data() {
            return {
                rows: [{ acaoRealizada: 'Alteração de Nome', dataAlteracao: '19/01/2023', idUsuario: 20, nomeUsuario: 'Ueda'}],
                columns: [
                            { name: 'acaoRealizada', label: 'Ação Realizada', field: 'acaoRealizada', sortable: true, align: 'left' as 'left' },
                            { name: 'dataAlteracao',  label: 'Data de Alteração', field: 'dataAlteracao', sortable: true, align: 'left' as 'left' },
                            { name: 'idUsuario',  label: 'Id Usuário', field: 'acaoRealizada', sortable: true, align: 'left' as 'left' },
                            { name: 'nomeUsuario',  label: 'Nome Usuário', field: 'nomeUsuario', sortable: true, align: 'left' as 'left' }
                        ],
            }
        }
    })

</script>
<style lang="scss">
  @import '../css/index.scss';
</style>