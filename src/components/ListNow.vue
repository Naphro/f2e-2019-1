<template>
  <div class="container">
    <div class="now">
      <div class="now__check"></div>
      <div class="now__info">
        <div class="now__title">the First thing to do today</div>
        <div class="now__circles"></div>
      </div>
    </div>
    <div class="remain">25:00</div>
  </div>
</template>

<script>
export default {
  name: 'ListNow',
}
</script>

<style scoped lang="scss">
.container {
  padding-bottom: 48px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.now {
  height: 48px;

  &__check {
    width: 48px;
    height: 48px;
    border: 2px solid #003164;
    border-radius: 50%;
    float: left;
  }

  &__info {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 64px;
  }

  &__title {
    font: Bold 24px/28px Roboto;
    letter-spacing: 0;
    color: #003164;
    text-transform: uppercase;
  }

  &__circles {
    width: 12px;
    height: 12px;
    border: 1px solid #ff4384;
    border-radius: 50%;
  }
}

.remain {
  margin-left: -5px;
  font-size: 176px;
  font-weight: bold;
  color: #ff4384;
  height: 206px;
  line-height: 206px;
}
</style>
