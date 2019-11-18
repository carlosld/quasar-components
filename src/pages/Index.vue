<template>
  <div class="q-pa-md q-gutter-sm">
    <q-editor
      v-model="editor"
      :definitions="{
        save: {
          tip: 'Save your work',
          icon: 'save',
          label: 'Save',
          handler: saveWork
        }
      }"
      :toolbar="[
        ['bold', 'italic', 'strike', 'underline'],
        ['upload', 'save']
      ]"
    />
    <div
      v-if="tasks.length == 0"
      class="flex flex-center"
    >
      <p class="text-h6">Sin notas</p>
    </div>
    <q-card
      flat
      bordered
      class="row justify-between"
      v-for="(item, index) in tasks"
      :key="index"
    >
      <q-card-section
        v-html="item.texto"
        class="col"
        :class="item.estado ? 'tachar' : ''"
      >
      </q-card-section>
      <q-btn
        flat
        color="blue"
        @click="item.estado = !item.estado"
      >Acción</q-btn>
      <q-btn
        flat
        color="red"
        @click="eliminar(index)"
      >Eliminar</q-btn>
      <q-space />
    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      editor: '',
      tasks: []
    }
  },
  methods: {
    saveWork () {
      this.tasks.push({
        texto: this.editor,
        estado: false
      })
      this.$q.notify({
        message: 'Saved your text to local storage',
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done'
      })
    },
    eliminar (index) {
      this.$q.dialog({
        title: 'Cuidado!',
        message: 'Desea eliminar la nota?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.tasks.splice(index, 1)
      })
    }
  }
}
</script>

<style>
.tachar {
  text-decoration: line-through;
}
</style>
