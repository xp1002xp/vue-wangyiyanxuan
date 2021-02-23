<template>
  <div id="category">
    <!-- 头部搜索 -->
    <div class="header-search-login">
        <div class="searchInput">
          <i class="iconfont icon-fangdajing"></i>
          <input type="text" placeholder="搜索商品, 共51057款好物" />
        </div>
    </div>

    <!-- 商品列表区域 -->
    <div class="good-wrap">
      <div class="left-wrap">
        <LeftCateList></LeftCateList>
      </div>
      <div class="middle-line"></div>
      <div class="right-warp">
        <div class="right-content">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftCateList from '@/pages/Category/LeftCateList/LeftCateList'
export default {
  name: '',
  components:{
    LeftCateList
  }
}
</script>

<style lang="stylus" >
@import '../../common/stylus/mixins.styl'
#category
  .header-search-login 
    display flex
    width 100%
    height 90px
    padding 15px
    box-sizing border-box
    background-color #fff
    .searchInput
      width 100%
      height 60px
      text-align center
      background #ededed
      position relative
      margin 0 15px
      border-radius 10px
      .iconfont
          font-size 31px
          position absolute
          left 25%
          top 25%
          collor #717171
        input
          font-size 30px
          border-radius 10px
          height 60px
          width 380px
          background #ededed
          margin-left 100px
          outline none
  // 商品列表区域
  .good-wrap
    display flex
    width 100%
    height 100%
    border-top 1px solid #eee
    margin-top 5px
      .left-wrap
        width 162px
        height calc(100vh - 250px)
        margin 40px 0 30px 0
        overflow hidden
      .middle-line
        width 2px
        height calc(100vh)
        background-color #eee
      .right-warp
        width calc(100vw - 163px)
        height calc(100vh - 250px)
        margin-top 30px 
        overflow hidden
        .right-content
          width 100%
          min-height calc(100vh - 249px)
          padding 0 30px 30px
          box-sizing border-box
</style>
