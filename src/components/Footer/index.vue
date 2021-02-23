<template>
  <div class="footer">
    <div
      class="item"
      :class="{ active: $route.path === '/home' }"
      @click="goto('/home')"
    >
      <i class="iconfont icon-index1 "></i>
      <span>首页</span>
    </div>
    <div
      class="item"
      :class="{ active: $route.path === '/category' }"
      @click="goto('/category')"
    >
      <i class="iconfont icon-fenlei-active"></i>
      <span>分类</span>
    </div>
    <div
      class="item"
      :class="{ active: $route.path === '/shop' }"
      @click="goto('/shop')"
    >
      <i class="iconfont icon-icon09"></i>
      <span>值得买</span>
    </div>
    <div
      class="item"
      :class="{ active: $route.path === '/shopCart' }"
      @click="goto('/shopCart')"
    >
      <i class="iconfont icon-gouwuche-copy"></i>
      <span>购物车</span>
    </div>
    <div
      class="item"
      :class="{ active: $route.path === '/login' }"
      @click="goto('/login')"
    >
      <i class="iconfont icon-renwu"></i>
      <span>个人</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  methods: {
    goto(path) {
      path !== this.$route.path && this.$router.replace(path);
    },
  },
};
</script>

<style lang="stylus">
@import "../../common/stylus/mixins.styl"
.footer
  display flex
  border-top 1px solid #d9d9d9
  position fixed
  left 0
  bottom 0
  width 100%
  height 98px
  background-color #fff
  z-index 111
  .item
    display flex
    flex-direction column
    width 20%
    height 98px
    text-align center
    &.active
      color #b4282d
    .iconfont
      font-size 40px
      line-height 60px
</style>
