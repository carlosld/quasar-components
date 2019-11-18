<template>
  <div class="q-pa-md q-gutter-sm">
    <h3>Aavatar</h3>
    <p>Se usa para indicar una operación <strong>ajax</strong> en ejecución. Se recomienda usar <strong>Loading Bar Plugin</strong> en su lugar.</p>

    <q-ajax-bar
      ref="bar"
      position="bottom"
      color="accent"
      size="10px"
      skip-hijack
    />

    <q-btn
      color="primary"
      label="Simular operación Ajax"
      @click="trigger"
    />
  </div>
</template>

<script>
export default {
  methods: {
    // we manually trigger it (this is not needed if we
    // don't skip Ajax calls hijacking)
    trigger () {
      const bar = this.$refs.bar

      bar.start()

      this.timer = setTimeout(() => {
        if (this.$refs.bar) {
          this.$refs.bar.stop()
        }
      }, Math.random() * 3000 + 1000)
    }
  }
}
</script>
