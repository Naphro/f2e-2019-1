<template>
  <div class="current-task">
    <div class="task">
      <div class="task__check"></div>
      <div class="task__info">
        <div class="task__title">{{ task.title }}</div>
        <div class="task__count">
          <div
            v-for="i in count"
            :key="i"
            class="task__count--finish"
            :class="restClass"
          ></div>
          <div class="task__count--current" :class="restClass"></div>
        </div>
      </div>
    </div>
    <div class="remain" :class="restClass">{{ mmss }}</div>
  </div>
</template>

<script>
import padStart from 'lodash/padStart'
import { isRest } from '../utils'

export default {
  name: 'CurrentTask',
  props: ['task', 'count'],
  computed: {
    mmss() {
      return (
        padStart(parseInt(this.task.remain / 60), 2, '0') +
        ':' +
        padStart(this.task.remain % 60, 2, '0')
      )
    },
    restClass() {
      return {
        rest: isRest(this.task.status),
      }
    },
  },
}
</script>

<style scoped lang="scss">
.current-task {
  padding-bottom: 48px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.task {
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

  &__count {
    display: flex;

    &--finish {
      width: 12px;
      height: 12px;
      background-color: #ff4384;
      border-radius: 50%;
      margin-right: 8px;

      &.rest {
        background-color: #00a7ff;
      }
    }

    &--current {
      width: 12px;
      height: 12px;
      border: 1px solid #ff4384;
      border-radius: 50%;

      &.rest {
        border: 1px solid #00a7ff;
      }
    }
  }
}

.remain {
  margin-left: -5px;
  font-size: 176px;
  font-weight: bold;
  color: #ff4384;
  height: 206px;
  line-height: 206px;

  &.rest {
    color: #00a7ff;
  }
}
</style>
