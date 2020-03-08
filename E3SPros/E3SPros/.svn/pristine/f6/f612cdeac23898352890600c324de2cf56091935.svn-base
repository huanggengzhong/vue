<template>
  <section
    class="app-main"
    id="AppMain"
  >
    <breadcrumb class="breadcrumb-container" />
    <!-- <transition name="fade-transform" mode="out-in"> -->
    <transition mode="out-in">
      <keep-alive>
        <router-view
          :key="key"
          ref="refRouterView"
        />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import watermark from "@/utils/watermark";
import { mapGetters } from "vuex";

export default {
  name: "AppMain",
  components: {
    Breadcrumb
  },
  data() {
    return {
      searcheHeight: 0,
      // 由外部页面控制需要减去的其它高度
      otherHeight: null,
      // 由外部控制需要叠加的层深
      deepCount: 0
    };
  },
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews;
    },
    key() {
      // 保证不同页面的 key 不相同，否则不会重新渲染（触发钩子）
      return this.$route.path;
    }
  },
  mounted() {
    // window.addEventListener('resize', () => {
    //   this.setTableHeight(this.otherHeight, this.deepCount);
    // });
    var dlrCode = this.$store.getters.dlrCode || "null";
    var userName = this.$store.getters.userName || "null";
    // watermark.set(dlrCode + '-' + userName + '-' + this.$utils.parseTime(new Date(), '{y}{m}{d}'));
  },
  methods: {
    setTableHeight(otherHeight, paramDeepCount) {
      this.otherHeight = otherHeight;
      this.deepCount = paramDeepCount || 0;
      this.$nextTick(() => {
        var deepCount =
          this.$utils.getPathDeep(this.$route.path) + this.deepCount;
        var refRouterView = this.$refs.refRouterView;
        while (
          deepCount > 0 &&
          refRouterView.$children &&
          refRouterView.$children.length > 0
        ) {
          refRouterView = refRouterView.$children[0];
          deepCount--;
        }

        // 网格高度自适应设置（当网格页面定义了tableMarginHeight参数则不使用此方法设置）
        if (refRouterView.tableHeight && !refRouterView.tableMarginHeight) {
          // 网页窗口高度
          var routerViewTableHeight = window.innerHeight;
          // 减去查询按钮区域高度
          if (refRouterView.$refs.searcheHeight) {
            routerViewTableHeight -=
              refRouterView.$refs.searcheHeight.offsetHeight;
          }
          // 减去查询查询条件标题区域高度
          if (refRouterView.$refs.conTitleHeight) {
            routerViewTableHeight -=
              refRouterView.$refs.conTitleHeight.offsetHeight;
          }
          // 减去查询查询条件区域高度
          if (refRouterView.$refs.conHeight) {
            routerViewTableHeight -= refRouterView.$refs.conHeight.offsetHeight;
          }
          // 减去查询结果标题区域高度
          if (refRouterView.$refs.resultTitleHeight) {
            routerViewTableHeight -=
              refRouterView.$refs.resultTitleHeight.offsetHeight;
          }
          // 减去分页区域高度
          if (refRouterView.$refs.paginationHeight) {
            if (refRouterView.$refs.paginationHeight.offsetHeight) {
              routerViewTableHeight -=
                refRouterView.$refs.paginationHeight.offsetHeight;
            } else {
              routerViewTableHeight -=
                refRouterView.$refs.paginationHeight.$el.offsetHeight;
            }
          }
          // 减去其它区域高度（页头搜索栏高度+底部tags高度 等）
          routerViewTableHeight -=
            otherHeight === null || otherHeight === undefined
              ? 90
              : otherHeight;
          // 得到网格固定高度（用于设置自适应滚动条）
          refRouterView.tableHeight = routerViewTableHeight;
        }
      });
    }
  }
};
</script>
