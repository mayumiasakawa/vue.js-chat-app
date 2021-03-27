<template>
  <div id="app">
    <header class="header">
      <h1>Chat App</h1>
      <!-- ログイン時にはフォームログアウトボタンを表示 -->
      <div v-if="user.uid" key="login">
        {{ user.displayName }}
        <button type="button" @click="doLogout">ログアウト</button>
      </div>
      <!-- 未ログイン時にはログインボタンを表示 -->
      <div v-else key="logout">
        <button type="button" @click="doLogin">ログイン</button>
      </div>
    </header>

    <!-- Firebaseから取得したリストを描画（トランジション付き） -->
    <transition-group name="chat" tag="div" class="list content">
      <section v-for="{ key, name, image, message} in chat" :key="key" class="item">
        <div class="item-image"><img :src="image" width="40" height="40"></div>
        <div class="item-detail">
          <div class="item-name">{{ name }}</div>
          <div class="item-message">
            <nl2br tag="div" :text="message">
          </div>
        </div>
      </section>
    </transition-group>

  <!-- 入力フォーム -->
  <form action="" @submit.prevent="doSend" class="form">
    <textarea
      v-model="input"
      :disabled="!user.uid"
      @keydown.enter.exact.prevent="doSend"></textarea>
    <button type="submit" :disabled="!user.uid" class="send-button">Send</button>
  </form>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
