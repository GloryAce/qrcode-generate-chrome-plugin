<template>
  <div class="popup">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import QRCode from 'qrcode';
import setMessageToContentScript from './common/sendMessage';

export default {
  name: 'App',
  methods: {
    createQrcodeByUrl(url) {
      const canvas = document.getElementById('canvas');
      QRCode.toCanvas(canvas, url, err => {
        if (err) {
          console.log(err);
        } else {
          console.log('success');
        }
      })
    },
  },
  mounted() {
    setMessageToContentScript({
      cmd: 'getUrl'
    }, res => {
      this.createQrcodeByUrl(res.url);
    });
  }
}
</script>

<style>
html, body {
  margin: 0;
}

canvas {
  width: 160px;
  height: 160px;
}
</style>
