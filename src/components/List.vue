<template>
  <div class="form">
    <input class="form__input" type="text" placeholder="add a new mission…" />
    <list-now />
    <div class="list-items">
      <list-item />
      <list-item />
      <list-item />
      <p class="more">more</p>
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem'
import ListNow from './ListNow'
export default {
  name: 'List',
  components: {
    'list-item': ListItem,
    'list-now': ListNow,
  },
}
</script>

<style scoped>
.form {
  width: 445px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.form__input {
  width: 100%;
  height: 56px;
  border: none;
  padding: 16px;
  font-size: 16px;
  text-transform: uppercase;
}

.form .form__input:focus {
  outline: none;
}

.form__input::placeholder {
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
  color: #ff4384;
}

.more {
  margin: 0;
  text-align: right;
  font: Bold 16px/19px Roboto;
  letter-spacing: 0;
  color: rgba(255, 67, 132, 1);
  text-transform: uppercase;
}
</style>
