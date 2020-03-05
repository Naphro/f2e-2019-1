<template>
  <div class="clock__ring" :class="statusName">
    <div class="clock__progress">
      <div class="left-magnitude">
        <div class="left-magnitude__value" :style="leftDegree"></div>
      </div>
      <div class="right-magnitude">
        <div class="right-magnitude__value" :style="rightDegree"></div>
      </div>
    </div>
    <div class="clock__disc" :class="statusName">
      <div class="btn" :class="statusName" @click="onChangeStatus">
        <div class="btn__decoration" :class="statusName"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  WORK_SECONDS,
  STATUS_WORK_PAUSE,
  STATUS_WORK_RUNNING,
  STATUS_REST_PAUSE,
  STATUS_REST_RUNNING,
  REST_SECONDS,
} from '../constant'
import { isRest } from '../utils'

export default {
  name: 'Clock',
  props: ['task', 'onChangeStatus'],
  computed: {
    statusName() {
      switch (this.task.status) {
        case STATUS_WORK_PAUSE:
          return 'work-pause'
        case STATUS_WORK_RUNNING:
          return 'work-running'
        case STATUS_REST_PAUSE:
          return 'rest-pause'
        case STATUS_REST_RUNNING:
          return 'rest-running'
        default:
          return ''
      }
    },
    leftDegree() {
      const { status, remain } = this.task
      const degree = this.getDegree(status, remain)
      return {
        backgroundColor: isRest(status) ? '#00a7ff' : '#ff4384',
        transform: `rotate(${degree < 180 ? 180 : degree}deg)`,
      }
    },
    rightDegree() {
      const { status, remain } = this.task
      const degree = this.getDegree(status, remain)
      return {
        backgroundColor: isRest(status) ? '#00a7ff' : '#ff4384',
        transform: `rotate(${degree > 180 ? 0 : degree - 180}deg)`,
      }
    },
  },
  methods: {
    getDegree(status, remain) {
      if (status === STATUS_WORK_PAUSE || status === STATUS_WORK_RUNNING) {
        return Math.ceil(((WORK_SECONDS - remain) * 360) / WORK_SECONDS)
      } else {
        return Math.ceil(((REST_SECONDS - remain) * 360) / REST_SECONDS)
      }
    },
  },
}
</script>

<style scoped lang="scss">
.clock {
  &__ring {
    width: 540px;
    height: 540px;
    border-radius: 50%;
    position: absolute;
    z-index: 1;
    right: calc(35% - 268px);
    top: calc(50% - 270px);
    overflow: hidden;
    border-width: 4px;
    border-style: solid;

    &.work-pause,
    &.work-running {
      border-color: #ff4384;
    }

    &.rest-pause,
    &.rest-running {
      border-color: #00a7ff;
    }
  }

  &__progress {
    width: 100%;
    height: 100%;
    display: flex;
  }
}

.left-magnitude {
  width: 50%;
  height: 100%;
  overflow: hidden;

  &__value {
    width: 100%;
    height: 100%;
    background-color: #ff4384;
    transform-origin: right center;
    transform: rotate(-180deg);
  }
}

.right-magnitude {
  width: 50%;
  height: 100%;
  overflow: hidden;

  &__value {
    width: 100%;
    height: 100%;
    background-color: #ff4384;
    transform-origin: left center;
    transform: rotate(-180deg);
  }
}

.clock__disc {
  width: 508px;
  height: 508px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-width: 4px;
  border-style: solid;

  &.work-pause {
    background-color: #ff4384;
    border-color: #ff4384;
  }

  &.rest-pause {
    background-color: #00a7ff;
    border-color: #00a7ff;
  }

  &.work-running {
    background-color: #ffffff;
    border-color: #ff4384;
  }

  &.rest-running {
    background-color: #ffffff;
    border-color: #00a7ff;
  }
}

.btn {
  width: 96px;
  height: 96px;
  padding: 4px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;

  &.work-pause,
  &.rest-pause {
    background-image: url('../assets/svg/baseline-play_circle_filled_white-48px.svg');
  }

  &.work-running {
    background-image: url('../assets/svg/baseline-pause_circle_filled-24px-pink.svg');
  }

  &.rest-running {
    background-image: url('../assets/svg/baseline-pause_circle_filled-24px-blue.svg');
  }
}

.btn__decoration {
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translateX(100%);
  &.work-pause,
  &.rest-pause {
    background-image: url('../assets/svg/baseline-stop-24px-white.svg');
  }

  &.work-running {
    background-image: url('../assets/svg/baseline-stop-24px-pink.svg');
  }

  &.rest-running {
    background-image: url('../assets/svg/baseline-stop-24px-blue.svg');
  }
}
</style>
