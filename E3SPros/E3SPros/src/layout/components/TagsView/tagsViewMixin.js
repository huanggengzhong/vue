export const tagsViewMixin = {
  props: {
  },
  watch: {
  },
  created() {
  },
  computed: {
    visitedViews() {
      return this.$store.state.tagsView.visitedViews
    }
  },
  methods: {
    closeCurrentView() { // 关闭当前页面
      var view = this.$route
      this.closeView(view)
    },
    closeView(view) { // 当前指定页面，view为页面路由对象，关键信息为name,path
      this.$store.dispatch('tagsView/delView', view).then(({ visitedViews }) => {
        this.toLastView(visitedViews, view)
      })
    },
    toLastView(visitedViews, view) { // 关闭当前页面后打开一个页面
      const latestView = visitedViews.slice(-1)[0]
      if (latestView) {
        this.$router.push(latestView)
      } else {
        // now the default is to redirect to the home page if there is no tags-view,
        // you can adjust it according to your needs.
        if (view.name === 'Dashboard') {
          // to reload home page
          this.$router.replace({ path: '/redirect' + view.fullPath })
        } else {
          this.$router.push('/')
        }
      }
    }
  }
}
