<template>
  <div
    :class="{'show':show}"
    class="header-search"
    id="header-search"
  >
    <el-select
      ref="headerSearchSelect"
      v-model="search"
      :remote-method="querySearch"
      filterable
      default-first-option
      remote
      placeholder="菜单查询"
      class="header-search-select"
      @change="change"
    >
      <el-option
        v-for="item in options"
        :key="item.path"
        :value="item"
        :label="item.title.join(' > ')"
      />
    </el-select>
  </div>
</template>

<script>
// fuse is a lightweight fuzzy-search module
// make search results more in line with expectations
import Fuse from "fuse.js";
import path from "path";
import { debuglog } from "util";

export default {
  name: "HeaderSearch",
  props: {
    isAddMenu: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  data() {
    return {
      search: "",
      options: [],
      searchPool: [],
      show: true,
      fuse: undefined
    };
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  },
  watch: {
    routes() {
      this.searchPool = this.generateRoutes(this.routes);
    },
    searchPool(list) {
      this.initFuse(list);
    },
    show(value) {
      if (value) {
        document.body.addEventListener("click", this.close);
      } else {
        document.body.removeEventListener("click", this.close);
      }
    }
  },
  mounted() {
    this.searchPool = this.generateRoutes(this.routes);
  },
  methods: {
    close() {
      this.$refs.headerSearchSelect && this.$refs.headerSearchSelect.blur();
      this.options = [];
    },
    change(val) {
      if (!this.isAddMenu) {
        this.$router.push(val.path);
        this.search = "";
        this.options = [];
      } else {
        this.$emit("getAddMenu", val);
        this.search = "";
        this.options = [];
      }
    },
    initFuse(list) {
      this.fuse = new Fuse(list, {
        shouldSort: true,
        threshold: 0.4,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          {
            name: "title",
            weight: 0.7
          },
          {
            name: "path",
            weight: 0.3
          }
        ]
      });
    },
    // Filter out the routes that can be displayed in the sidebar
    // And generate the internationalized title
    generateRoutes(routes, basePath = "/", prefixTitle = []) {
      let res = [];
      for (const router of routes) {
        // skip hidden router
        if (router.hidden) {
          continue;
        }

        const data = {
          path: path.resolve(basePath, router.path),
          title: [...prefixTitle]
        };
        const tmpTitle = data.title;
        if (router.meta && router.meta.title) {
          data.title = [...data.title, router.meta.title];
          tmpTitle = data.title;
          if (router.redirect !== "noRedirect" && router.meta.isChild) {
            // only push the routes with title
            // special case: need to exclude parent router without redirect
            res.push(data);
          }
        }

        // recursive child routes
        if (router.children) {
          const tempRoutes = this.generateRoutes(
            router.children,
            data.path,
            tmpTitle
          );
          if (tempRoutes.length >= 1) {
            res = [...res, ...tempRoutes];
          }
        }
      }
      return res;
    },
    querySearch(query) {
      if (query !== "") {
        this.options = this.fuse.search(query);
      } else {
        this.options = [];
      }
    }
  }
};
</script>


