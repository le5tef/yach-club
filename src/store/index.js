import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [
      {
        id: 1,
        title: 'Мы открылись',
        subtitle: 'Буквально вчера',
        isMain: true,
        media: [
          require('../assets/image/test2.jpg'),
        ]
      },
      {
        id: 2,
        title: 'У нас круто!',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum turpis augue, sit amet auctor eros dapibus sit amet. Mauris dignissim augue sit amet ornare sagittis. Cras pellentesque convallis ornare. Proin faucibus euismod nibh, quis aliquam turpis. Maecenas eu odio ornare, maximus ex vitae, sollicitudin velit. Quisque id tellus varius nisl egestas pharetra. In odio felis, tincidunt in blandit eget, gravida ut justo. Cras quis porttitor nunc, nec sollicitudin tellus.',
        isMain: false,
        media: [
          require('../assets/image/1.jpg'), require('../assets/image/4.jpg')
        ]
      },
      {
        id: 3,
        title: 'Новое меню в нашем ресторане',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum turpis augue, sit amet auctor eros dapibus sit amet. Mauris dignissim augue sit amet ornare sagittis. Cras pellentesque convallis ornare. Proin faucibus euismod nibh, quis aliquam turpis. Maecenas eu odio ornare, maximus ex vitae, sollicitudin velit. Quisque id tellus varius nisl egestas pharetra. In odio felis, tincidunt in blandit eget, gravida ut justo. Cras quis porttitor nunc, nec sollicitudin tellus.',
        isMain: false,
        media: [
          require('../assets/image/2.jpg'), require('../assets/image/5.jpg')
        ]
      },
      {
        id: 4,
        title: 'Поступление новых яхт',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum turpis augue, sit amet auctor eros dapibus sit amet. Mauris dignissim augue sit amet ornare sagittis. Cras pellentesque convallis ornare. Proin faucibus euismod nibh, quis aliquam turpis. Maecenas eu odio ornare, maximus ex vitae, sollicitudin velit. Quisque id tellus varius nisl egestas pharetra. In odio felis, tincidunt in blandit eget, gravida ut justo. Cras quis porttitor nunc, nec sollicitudin tellus.',
        isMain: false,
        media: [
          require('../assets/image/3.jpg')
        ]
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    filteredPosts(state) {
      return state.posts.filter(x => !x.isMain)
    },
    mainPost(state) {
      return state.posts.filter(x => x.isMain)
    },

  }
})
