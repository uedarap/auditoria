<template>
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

    export default defineComponent({
        name: "PaginaAuditoria",
        data() {
            return {
                columns: [
                    { name: 'acao-realizada', align: 'left', label: 'Ação Realizada', field: 'acao-realizada', sortable: true },
                    { name: 'data-alteracao', align: 'left', label: 'Data de Alteração', field: 'data-alteracao', sortable: true },
                    { name: 'id-usuario', align: 'left', label: 'Id Usuário', field: 'acao-realizada', sortable: true },
                    { name: 'nome-usuario', align: 'left', label: 'Nome Usuário', field: 'nome-usuario', sortable: true }
                ],
                rows: []
            }
        }
    })

</script>