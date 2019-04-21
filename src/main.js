import content from './content.txt'
import Vue from 'vue'

new Vue({
  el: '#app',
  data: {
    content
  },
  template: '<h1>{{ content }}</h1>'
})
