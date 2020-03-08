<template>
  <div
    id="tags-view-container"
    class="tags-view-container"
  >
    <scroll-pane
      ref="scrollPane"
      class="tags-view-wrapper"
    >
      <router-link
        v-for="tag in visitedViews"
        ref="tag"
        :key="tag.path"
        :class="isActive(tag)?'active':''"
        :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
        tag="span"
        class="tags-view-item"
        @click.middle.native="closeSelectedTag(tag)"
        @contextmenu.prevent.native="openMenu(tag,$event)"
      >
        {{ tag.title }}
        <span
          v-if="!tag.meta.affix"
          class="el-icon-close"
          @click.prevent.stop="closeSelectedTag(tag)"
        />
      </router-link>
    </scroll-pane>
    <ul
      v-show="visible"
      :style="{left:left+'px',top:top+'px'}"
      class="contextmenu"
    >
      <li @click="refreshSelectedTag(selectedTag)">刷新</li>
      <li
        v-if="!(selectedTag.meta&&selectedTag.meta.affix)"
        @click="closeSelectedTag(selectedTag)"
      >关闭</li>
      <li @click="closeOthersTags">关闭其它</li>
      <li @click="closeAllTags(selectedTag)">关闭所有</li>
    </ul>
  </div>
</template>

<script>
import ScrollPane from "./ScrollPane";
import path from "path";

export default {
  components: { ScrollPane },
  data() {
    return {
      visible: false,
      top: 0,
      botton: 0,
      left: 0,
      selectedTag: {},
      affixTags: []
    };
  },
  computed: {
    visitedViews() {
      return this.$store.state.tagsView.visitedViews;
    },
    routes() {
      return []; // this.$store.state.permission.routes
    }
  },
  watch: {
    $route() {
      this.addTags();
      this.moveToCurrentTag();
    },
    visible(value) {
      if (value) {
        document.body.addEventListener("click", this.closeMenu);
      } else {
        document.body.removeEventListener("click", this.closeMenu);
      }
    }
  },
  mounted() {
    this.initTags();
    this.addTags();
  },
  methods: {
    isActive(route) {
      return route.path === this.$route.path;
    },
    filterAffixTags(routes, basePath = "/") {
      let tags = [];
      routes.forEach(route => {
        if (route.meta && route.meta.affix) {
          const tagPath = path.resolve(basePath, route.path);
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta }
          });
        }
        if (route.children) {
          const tempTags = this.filterAffixTags(route.children, route.path);
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags];
          }
        }
      });
      return tags;
    },
    initTags() {
      const affixTags = (this.affixTags = this.filterAffixTags(this.routes));
      for (const tag of affixTags) {
        // Must have tag name
        if (tag.name) {
          this.$store.dispatch("tagsView/addVisitedView", tag);
        }
      }
    },
    addTags() {
      const { name } = this.$route;
      if (name) {
        if (
          this.$store.state.tagsView.cachedViews.length <
          this.$store.state.tagsView.maxCacheCount
        ) {
          this.$store.dispatch("tagsView/addView", this.$route);
        }
      }
      return false;
    },
    moveToCurrentTag() {
      const tags = this.$refs.tag;
      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.to.path === this.$route.path) {
            this.$refs.scrollPane.moveToTarget(tag);
            // when query is different then update
            if (tag.to.fullPath !== this.$route.fullPath) {
              this.$store.dispatch("tagsView/updateVisitedView", this.$route);
            }
            break;
          }
        }
      });
    },
    refreshSelectedTag(view) {
      this.$store.dispatch("tagsView/delCachedView", view).then(() => {
        const { fullPath } = view;
        this.$nextTick(() => {
          this.$router.replace({
            path: "/redirect" + fullPath
          });
        });
      });
    },
    closeSelectedTag(view) {
      var that = this;
      this.$store
        .dispatch("tagsView/delView", view)
        .then(({ visitedViews }) => {
          if (this.isActive(view)) {
            this.toLastView(visitedViews, view);
          }
          // 清除keepAlive缓存
          that.clearKeepAliveCache(that, view);
        });
    },
    closeOthersTags(view) {
      this.$router.push(this.selectedTag);
      var that = this;
      that.clearOthersKeepAliveCache(that, this.selectedTag);
      this.$store
        .dispatch("tagsView/delOthersViews", this.selectedTag)
        .then(() => {
          this.moveToCurrentTag();
        });
    },
    closeAllTags(view) {
      var that = this;
      that.clearAllKeepAliveCache(that, view);
      this.$store.dispatch("tagsView/delAllViews").then(({ visitedViews }) => {
        if (this.affixTags.some(tag => tag.path === view.path)) {
          return;
        }
        this.toLastView(visitedViews, view);
      });
    },
    toLastView(visitedViews, view) {
      const latestView = visitedViews.slice(-1)[0];
      if (latestView) {
        this.$router.push(latestView);
      } else {
        // now the default is to redirect to the home page if there is no tags-view,
        // you can adjust it according to your needs.
        if (view.name === "Dashboard") {
          // to reload home page
          this.$router.replace({ path: "/redirect" + view.fullPath });
        } else {
          this.$router.push("/");
        }
      }
    },
    openMenu(tag, e) {
      const menuMinWidth = 105;
      const offsetLeft = this.$el.getBoundingClientRect().left; // container margin left
      const offsetWidth = this.$el.offsetWidth; // container width
      const maxLeft = offsetWidth - menuMinWidth; // left boundary
      const left = e.clientX - offsetLeft + 5; // 5: margin right

      if (left > maxLeft) {
        this.left = maxLeft;
      } else {
        this.left = left;
      }

      this.top =
        e.clientY -
        this.$el.offsetTop -
        this.$el.getBoundingClientRect().height -
        85;
      this.visible = true;
      this.selectedTag = tag;
    },
    closeMenu() {
      this.visible = false;
    },
    // 关闭其他页面清除对应的keep-alive中的缓存
    clearOthersKeepAliveCache(that, view) {
      var vnode = null;
      for (let i = 0; i < that.$parent.$children.length; i++) {
        if (that.$parent.$children[i].$vnode.tag.indexOf("-AppMain") > -1) {
          let isSet = false;
          if (that.$parent.$children[i].$vnode.componentInstance) {
            for (
              let j = 0;
              j <
              that.$parent.$children[i].$vnode.componentInstance.$children
                .length;
              j++
            ) {
              if (
                that.$parent.$children[i].$vnode.componentInstance.$children[
                  j
                ].$vnode.tag.indexOf("-breadcrumb") < 0
              ) {
                vnode =
                  that.$parent.$children[i].$vnode.componentInstance.$children[
                    j
                  ].$vnode.componentInstance.$vnode.parent;

                isSet = true;
                break;
              }
            }
          }
          if (isSet) {
            break;
          }
        }
      }

      if (vnode) {
        for (let i = 0; i < vnode.componentInstance.keys.length; i++) {
          if (vnode.componentInstance.keys[i] == undefined) {
            vnode.componentInstance.keys.splice(i, 1);
            delete vnode.componentInstance.cache[
              vnode.componentInstance.keys[i]
            ];
            break;
          }
          let arr = vnode.componentInstance.keys[i].split("-");

          let path = arr[arr.length - 1];
          if (path !== view.path) {
            delete vnode.componentInstance.cache[
              vnode.componentInstance.keys[i]
            ];
            vnode.componentInstance.keys.splice(i, 1);
          }
        }
      }
    },
    //关闭所有页面 清除所有的keep alive的缓存
    clearAllKeepAliveCache(that, view) {
      var vnode = null;
      for (let i = 0; i < that.$parent.$children.length; i++) {
        if (that.$parent.$children[i].$vnode.tag.indexOf("-AppMain") > -1) {
          let isSet = false;
          if (that.$parent.$children[i].$vnode.componentInstance) {
            for (
              let j = 0;
              j <
              that.$parent.$children[i].$vnode.componentInstance.$children
                .length;
              j++
            ) {
              if (
                that.$parent.$children[i].$vnode.componentInstance.$children[
                  j
                ].$vnode.tag.indexOf("-breadcrumb") < 0
              ) {
                vnode =
                  that.$parent.$children[i].$vnode.componentInstance.$children[
                    j
                  ].$vnode.componentInstance.$vnode.parent;

                isSet = true;
                break;
              }
            }
          }
          if (isSet) {
            break;
          }
        }
      }

      if (vnode) {
        for (let i = 0; i < vnode.componentInstance.keys.length; i++) {
          let arr = vnode.componentInstance.keys[i].split("-");
          vnode.componentInstance.cache = [];
          vnode.componentInstance.keys = [];
        }
      }
    },
    //关闭当前页面  清除当前页面的keep alive的缓存
    clearKeepAliveCache(that, view) {
      var vnode = null;
      for (let i = 0; i < that.$parent.$children.length; i++) {
        if (that.$parent.$children[i].$vnode.tag.indexOf("-AppMain") > -1) {
          let isSet = false;
          if (that.$parent.$children[i].$vnode.componentInstance) {
            for (
              let j = 0;
              j <
              that.$parent.$children[i].$vnode.componentInstance.$children
                .length;
              j++
            ) {
              if (
                that.$parent.$children[i].$vnode.componentInstance.$children[
                  j
                ].$vnode.tag.indexOf("-breadcrumb") < 0
              ) {
                vnode =
                  that.$parent.$children[i].$vnode.componentInstance.$children[
                    j
                  ].$vnode.componentInstance.$vnode.parent;

                isSet = true;
                break;
              }
            }
          }
          if (isSet) {
            break;
          }
        }
      }

      if (vnode) {
        for (let i = 0; i < vnode.componentInstance.keys.length; i++) {
          let arr = vnode.componentInstance.keys[i].split("-");
          let path = arr[arr.length - 1];
          if (path === view.path) {
            delete vnode.componentInstance.cache[
              vnode.componentInstance.keys[i]
            ];
            vnode.componentInstance.keys.splice(i, 1);
            break;
          }
        }
      }
    }
  }
};
</script>




