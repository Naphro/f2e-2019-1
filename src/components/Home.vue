<template>
  <div class="bg" :class="restClass">
    <div class="container">
      <div class="form">
        <div class="task-new">
          <input
            type="text"
            class="task-new__input"
            placeholder="add a new mission…"
            :class="restClass"
            v-model="newTask"
          />
          <input type="button" class="task-new__button" @click="addNewTask" />
        </div>
        <current-task v-if="currentTask" :task="currentTask" :count="count" />
        <div class="list-items">
          <task-item :key="task" v-for="task in tasks" :title="task" />
          <p class="more" :class="restClass">more</p>
        </div>
      </div>
      <clock :task="currentTask" :onChangeStatus="onChangeStatus"></clock>
      <sidebar></sidebar>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar'
import Clock from './Clock'
import TaskItem from './TaskItem'
import CurrentTask from './CurrentTask'
import { isRest } from '../utils'
import {
  WORK_SECONDS,
  REST_SECONDS,
  STEP,
  STATUS_WORK_RUNNING,
  STATUS_WORK_PAUSE,
  STATUS_REST_RUNNING,
  STATUS_REST_PAUSE,
} from '../constant'

export default {
  name: 'Home',
  components: {
    sidebar: Sidebar,
    clock: Clock,
    'task-item': TaskItem,
    'current-task': CurrentTask,
  },
  props: ['task'],
  data() {
    return {
      newTask: '',
      currentTask: {
        title: '',
        status: STATUS_WORK_PAUSE,
        remain: WORK_SECONDS,
      },
      tasks: [
        'the first thing to do today',
        'the second thing to do today',
        'the third thing to do today',
        'the forth thing to do today',
      ],
      listener: null,
      count: 0,
    }
  },
  computed: {
    restClass() {
      return {
        rest: isRest(this.currentTask.status),
      }
    },
  },
  mounted() {
    this.currentTask =
      this.tasks.length > 0
        ? {
            title: this.tasks.splice(0, 1)[0],
            status: STATUS_WORK_PAUSE,
            remain: WORK_SECONDS,
          }
        : {}
  },
  methods: {
    addNewTask() {
      if (this.newTask) {
        this.tasks.push(this.newTask)
      }
      this.newTask = ''
    },
    startTask() {
      this.listener = setInterval(() => {
        if (this.currentTask.remain <= 0) {
          this.onChangeStatus()
        } else {
          this.currentTask.remain -= STEP
        }
      }, 1000)
    },
    pauseTask() {
      if (this.listener) {
        clearInterval(this.listener)
      }
    },
    onChangeStatus() {
      const { status, remain } = this.currentTask

      switch (status) {
        case STATUS_WORK_RUNNING: {
          if (remain > 0) {
            this.currentTask.status = STATUS_WORK_PAUSE
          } else {
            this.currentTask = {
              ...this.currentTask,
              status: STATUS_REST_PAUSE,
              remain: REST_SECONDS,
            }
          }
          this.pauseTask()
          break
        }
        case STATUS_WORK_PAUSE: {
          this.currentTask.status = STATUS_WORK_RUNNING
          this.startTask()
          break
        }
        case STATUS_REST_RUNNING: {
          if (remain > 0) {
            this.currentTask.status = STATUS_REST_PAUSE
          } else {
            if (this.tasks.length > 0) {
              this.currentTask = {
                title: this.tasks.splice(0, 1)[0],
                status: STATUS_WORK_PAUSE,
                remain: WORK_SECONDS,
              }
              this.count++
            }
          }
          this.pauseTask()
          break
        }
        case STATUS_REST_PAUSE: {
          this.currentTask.status = STATUS_REST_RUNNING
          this.startTask()
          break
        }
        default: {
          break
        }
      }
    },
  },
}
</script>

<style scoped lang="scss">
.bg {
  min-width: 1280px;
  height: 100%;
  background-color: #ffedf7;
  overflow: auto;
  position: relative;
  /*padding: 48px 85px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  &.rest {
    background-color: #e5f3ff;
  }

  &::after {
    content: '';
    background-color: #003164;
    height: 100%;
    width: calc((100% - 1280px) / 2 + 450px);
    min-width: 450px;
    position: absolute;
    right: 0;
    top: 0;
  }
}

.container {
  width: 1280px;
  height: 800px;
  padding: 48px 85px;
  position: relative;
}

.form {
  width: 445px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.task-new {
  width: 100%;
  height: 56px;
  padding: 16px;
  background-color: #ffffff;
  display: flex;

  &__input {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 16px;
    text-transform: uppercase;
    flex-grow: 1;

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-size: 16px;
      font-weight: bold;
      font-style: italic;
      color: #ff4384;
    }

    &.rest::placeholder {
      color: #00a7ff;
    }
  }

  &__button {
    width: 24px;
    height: 24px;
    background-image: url('../assets/svg/baseline-add-24px-pink.svg');
    border: none;
    padding: 0;

    &:hover {
      cursor: pointer;
    }

    &:focus {
      outline: none;
    }
  }
}

.more {
  margin: 0;
  text-align: right;
  font: Bold 16px/19px Roboto;
  letter-spacing: 0;
  color: #ff4384;
  text-transform: uppercase;

  &.rest {
    color: #00a7ff;
  }

  &:hover {
    /*cursor: pointer;*/
  }
}
</style>
