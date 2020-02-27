<template>
  <div class="sidebar">
    <ul class="list">
      <li class="list__item icon-list"></li>
      <li class="list__item icon-draw"></li>
      <li class="list__item icon-music"></li>
    </ul>
    <span class="title">POMODORO</span>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<style scoped>
.sidebar {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  padding: 48px 85px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.list {
  margin: 0;
  padding: 0;
}

.list__item {
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  width: 36px;
  height: 36px;
  margin-bottom: 48px;
}

.icon-list {
  background-image: url('../assets/svg/baseline-list-24px.svg');
}

.icon-draw {
  background-image: url('../assets/svg/baseline-assessment-24px.svg');
}

.icon-music {
  background-image: url('../assets/svg/baseline-library_music-24px.svg');
}

.title {
  font-family: Futura;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  display: block;
  transform-origin: right bottom;
  transform: rotateZ(90deg) translateY(100%);
}
</style>
