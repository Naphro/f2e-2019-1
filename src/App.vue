<template>
  <div class="container">
    <list></list>
    <clock></clock>
    <sidebar></sidebar>
  </div>
</template>

<script>
import List from './components/List'
import Sidebar from './components/Sidebar'
import Clock from './components/Clock'

export default {
  name: 'app',
  components: {
    list: List,
    sidebar: Sidebar,
    clock: Clock,
  },
}
</script>

<style scoped>
.container {
  height: 100%;
  background-color: #ffedf7;
  overflow: auto;
  position: relative;
  padding: 48px 85px;
}

.container::after {
  content: '';
  background-color: #003164;
  height: 100%;
  width: 35%;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
