<template>
  <div class="clock__ring">
    <div class="clock__disc">
      <div class="btn">
        <div class="btn__decoration"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clock',
}
</script>

<style scoped>
.clock__ring {
  width: 540px;
  height: 540px;
  border: 4px solid #ff4384;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  right: calc(35% - 270px);
  top: calc(50% - 270px);
}

.clock__disc {
  width: 508px;
  height: 508px;
  background-color: #ff4384;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.btn {
  width: 96px;
  height: 96px;
  padding: 4px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-image: url('../assets/svg/baseline-play_circle_filled_white-48px.svg');
  background-repeat: no-repeat;
  background-size: contain;
}

.btn__decoration {
  width: 24px;
  height: 24px;
  background-image: url('../assets/svg/baseline-stop-24px.svg');
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translateX(100%);
}
</style>
