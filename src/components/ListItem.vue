<template>
  <div class="list-item">
    <div class="list-item__check"></div>
    <span class="list-item__text">the third thing to do today</span>
    <a href="#" class="list-item__btn"></a>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
}
</script>

<style scoped>
.list-item {
  width: 100%;
  height: 33px;
  border-bottom: 1px solid rgba(0, 49, 100, 0.2);
  margin-bottom: 9px;
  padding-bottom: 8px;
}

.list-item__btn {
  display: block;
  width: 24px;
  height: 24px;
  background-image: url('../assets/svg/baseline-play_circle_outline-24px.svg');
  background-repeat: no-repeat;
  background-size: contain;
  float: right;
  vertical-align: middle;
}

.list-item__text {
  text-align: left;
  font: Bold 16px/24px Roboto;
  letter-spacing: 0;
  color: rgba(0, 49, 100, 1);
  text-transform: uppercase;
  vertical-align: top;
}

.list-item__check {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url('../assets/svg/radio_button_unchecked-24px.svg');
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 4px;
}
</style>
