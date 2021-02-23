<template>
  <div class="home">
    <!-- 顶部容器 -->
    <div class="header">
      <!-- 头部区域logo search button -->
      <div class="headerTop">
        <img
          class="logo"
          src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
          alt=""
        />
        <div class="search">
          <i class="iconfont icon-fangdajing"></i>
          <input type="text" placeholder="搜索商品, 共51057款好物" />
        </div>
        <div class="btn">登录</div>
      </div>
      <!-- 导航区域 -->
      <div class="nav" ref="bscroll">
        <ul>
          <li
            class="navItem"
            v-for="(item, index) in indexData.indexCateModule"
            :key="index"
            @click="changeNavIndex(index)"
            :class="{ active: navIndex === index }"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
    <!-- 更多内容 -->
    <div class="moreArrow" @click="handleArrow">
      <i
        class="iconfont"
        :class="changeArrow ? 'icon-gengduo-shangla' : 'icon-gengduoxia'"
      ></i>
    </div>
    <!-- 隐藏容器 -->
    <div class="hidden" v-show="isShow">
      <div class="hiddenTop" @click="isShow = true">
        <div class="hiddenTxt">全部频道</div>
        <ul class="hiddenList">
          <li
            class="hiddenItem"
            v-for="(item, index) in indexData.indexCateModule"
            :key="index"
            @click="changeNavIndex(index)"
            :class="{ active: navIndex === index }"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div
        class="hiddenBottom"
        @click="(isShow = false), (changeArrow = false)"
      ></div>
    </div>
    <!-- 轮播图 -->
    <div class="banner">
      <swiper
        :options="{
          loop: true, // 循环模式选项
          autoplay: {
            disableOnInteraction: false, // 用户操作后, 恢复自动轮播
          }, // 自动轮播
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }"
      >
        <swiper-slide
          v-for="(banner, index) in indexData.focusList"
          :key="banner.id"
        >
          <img
            class="bannerItem"
            :src="banner.picUrl"
            style="height: 185px;width:100%;"
          />
        </swiper-slide>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 三个图标 -->
    <div class="policyList">
      <div
        class="policyItem"
        v-for="(policyItem, index) in indexData.policyDescList"
        :key="policyItem.desc"
      >
        <img class="policyImg" :src="policyItem.icon" alt="" />
        <span class="content">{{ policyItem.desc }}</span>
      </div>
    </div>
    <!-- 10个图标区 -->
    <div class="kingkongList" v-if="indexData.kingKongModule">
      <div
        class="kingkongItem"
        v-for="(item, index) in indexData.kingKongModule.kingKongList"
        :key="item.L1Id"
      >
        <img class="kingImg" :src="item.picUrl" alt="" />
        <span class="kingContent">{{ item.text }}</span>
      </div>
    </div>
    <!-- 新人首单区域 -->
    <div class="promotion">
      <div class="floorTop">
        <img
          class="floorTopImg"
          src="https://yanxuan.nosdn.127.net/b2b424826a63b41dc28610c4dee2747e.gif?imageView&quality=75"
          alt=""
        />
      </div>
      <div class="floorList">
        <img
          class="floorListImg"
          src="https://yanxuan.nosdn.127.net/90c4bbd354efa2fae176c6af0dd373ea.png?quality=75&type=webp&imageView&thumbnail=375x0"
          alt=""
        />
        <img
          class="floorListImg"
          src="https://yanxuan.nosdn.127.net/20afdacdf258b39ea1a3f6b7f096411b.png?quality=75&type=webp&imageView&thumbnail=375x0"
          alt=""
        />
      </div>
    </div>
    <!-- 新人专享区域 -->
    <div class="newPeople">
      <div class="newPopleTxt">
        <span>新人专享礼</span>
      </div>
      <div class="newPeopleContent">
        <!-- 左侧 -->
        <div class="newLeft">
          <div class="newLeftTxt">
            <span>新人专享礼包</span>
          </div>
          <div class="newImg">
            <img
              src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"
              alt=""
            />
          </div>
        </div>
        <!-- 右侧 -->
        <div class="newRight">
          <div class="newRightContent1">
            <div class="rightTitle">
              <span class="bigTitle">福利社</span><br />
              <span class="smallTitle">今日特价</span>
            </div>
            <div class="smallImg">
              <div class="count">
                <span class="price1">¥129</span><br />
                <span class="price2"><del>¥149</del></span>
              </div>
              <img
                src="https://yanxuan-item.nosdn.127.net/1f9a7aa686d95005f1c299750b5a6bb8.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt=""
              />
            </div>
          </div>
          <div class="newRightContent2">
            <div class="rightTitle">
              <span class="bigTitle">新人拼团</span><br />
              <span class="smallTitle">1元起包邮</span>
            </div>
            <div class="smallImg">
              <div class="count">
                <span class="price1">¥48</span><br />
                <span class="price2"><del>¥69</del></span>
              </div>
              <img
                src="https://yanxuan-item.nosdn.127.net/74662d24f6d217b520178c5a6d031457.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 类目热销榜 -->
    <div class="category-hotSell-module">
      <div class="hotSell-module-title">类目热销榜</div>
      <div class="hotSell-module-content">
        <!-- 顶部两张图 -->
        <div class="content-top">
          <!-- 左边图片 -->
          <div class="content-top-left">
            <div class="text"><span>热销榜</span></div>
            <div class="img-wrap">
              <img
                src="https://yanxuan-item.nosdn.127.net/91a264d84fed57f97c48dc107370e941.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt=""
              />
            </div>
          </div>
          <!-- 右边图片 -->
          <div class="content-top-right">
            <div class="text"><span>好评榜</span></div>
            <div class="img-wrap">
              <img
                src="https://yanxuan-item.nosdn.127.net/bb7450ac3c152ea389a20e53fcdb8cd8.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt=""
              />
            </div>
          </div>
        </div>
        <!-- 下面图片列表 -->
        <div class="content-bottom">
          <ul v-if="indexData.categoryHotSellModule">
            <li
              v-for="(item, index) in indexData.categoryHotSellModule
                .categoryList"
              :key="index"
            >
              <div class="title">
                <span>{{ item.categoryName }}</span>
              </div>
              <div class="img-wrap">
                <img :src="item.showPicUrl" alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 新品首发 -->
    <div class="newItem-first">
      <div class="newItem-title">
        <div class="newItem">
          <span>新品首发</span>
        </div>
        <div class="more">更多 ></div>
      </div>
      <div class="newItem-content">
        <ul>
          <li v-for="(item, index) in indexData.newItemList" :key="index">
            <div class="img-wrap">
              <img :src="item.primaryPicUrl" alt="" />
            </div>
            <div class="good">
              <div ref="title" class="desc">
                <span>{{ item.name }}</span>
              </div>
              <div class="price">
                <span>￥{{ item.retailPrice }}</span>
              </div>
              <div class="tag">
                <span>{{ item.itemTagList[0].name }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 超值专区 -->
    <div class="sceneLightShoppingGuideModule">
      <ul v-if="indexData.sceneLightShoppingGuideModule">
        <li
          v-for="(item, index) in indexData.sceneLightShoppingGuideModule.slice(
            2,
            4
          )"
          :key="item.desc"
        >
          <div class="title">
            <span>{{ item.styleItem.title }}</span> <br />
            <span>{{ item.styleItem.desc }}</span>
          </div>
          <div class="pic">
            <img :src="item.styleItem.picUrlList[1]" alt="" />
            <img :src="item.styleItem.picUrlList[1]" alt="" />
          </div>
        </li>
      </ul>
    </div>
    <!-- 底部区域 -->
    <div class="footer-wrap">
      <div class="footer-top">
        <div><a href="###">下载App</a></div>
        <div><a href="###">电脑版</a></div>
      </div>
      <div class="copyright">
        <span>网易公司版权所有 © 1997-2021</span><br />
        <span>食品经营许可证：JY13301080111719</span>
      </div>
    </div>
    <!-- 回到顶部 -->
    <transition name="topTag">
      <div class="go-top" v-if="isShowGoTop" @click="backTop()"></div>
    </transition>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState } from "vuex";
export default {
  name: "",
  data() {
    return {
      navIndex: 0,
      changeArrow: false, //表示箭头是否切换
      isShow: false, //是否显示隐藏状态
      isShowGoTop: false, //表示回到顶部的按钮是否显示
    };
  },
  mounted() {
    this.$store.dispatch("getIndexData");
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.bscroll, {
        click: true,
        scrollX: true,
      });
    });
    //console.log(window.addEventListener('scroll', this.handleScrollToTop,false))
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },

  methods: {
    //导航下标
    changeNavIndex(index) {
      this.navIndex = index;
    },
    //箭头切换回调
    handleArrow() {
      this.changeArrow = !this.changeArrow;
      this.isShow = !this.isShow;
    },
    //滚动事件
    scrollToTop() {
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 200) {
        that.isShowGoTop = true;
      } else {
        that.isShowGoTop = false;
      }
    },
    //返回顶部
    backTop() {
      let that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
  },
  computed: {
    ...mapState({
      indexData: (state) => state.home.indexData,
    }),
  },
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixins.styl';
.home
  width 100%
  margin-bottom 100px
  background-color #eee
  overflow hidden
  .header
    position fixed
    left 0
    top 0
    width 100%
    z-index 99
    .headerTop
      display flex
      width 100%
      height 90px
      padding 20px
      box-sizing border-box
      background-color #fff
      .logo
        width 140px
        height 40px
        margin 10px 0 0 10px

      .search
        position relative
        width 440px
        height 60px
        background  #ededed
        margin 0 15px
        border-radius 10px

        .iconfont
          font-size 30px
          position absolute
          left 20px
          top 25%

        input
          border-radius 10px
          height 60px
          width 380px
          background #ededed
          margin-left 60px
          outline none
      .btn
        width 80px
        height 40px
        line-height 40px
        color #b4282d
        text-align center
        border 1px solid #b4282d
        margin-top 10px
        border-radius 10px
      //导航区
    .nav
      white-space nowrap
      width 100%
      height 60px
      line-height 60px
      font-size 28px
      background-color #fff
      ul
        width 1580px
        display  flex
        .navItem
          display inline-block
          width 125px
          height 60px
          line-height 60px
          text-align center
          font-size 30px
          margin 0 15px
          &.active
            border-bottom 5px solid #dd1a21
            color #dd1a21
  //更多
  .moreArrow
    width 150px
    height 60px
    position fixed
    top 90px
    right 0
    text-align center
    line-height 60px
    color #999
    z-index 999
    background-image linear-gradient(to right, rgba(255,255,255,0) 1%, rgba(255,255,255,0.5) 4%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 40%)
  //隐藏区域
  .hidden
    width 100%
    height calc(100vh - 90px)
    position fixed
    bottom 0
    left 0
    z-index 100
    background-color rgba(0, 0, 0, 0.4)
    .hiddenTop
      width 100%
      .hiddenTxt
        width 100%
        height 60px
        line-height 60px
        font-size 28px
        padding-left 30px
        box-sizing border-box
        background-color #fff
      .hiddenList
        padding-top 24px
        width 100%
        background-color #fff
        overflow hidden
        .hiddenItem
          float left
          width 150px
          height 60px
          line-height 60px
          margin-left 30px
          margin-bottom 40px
          border 1px solid #ccc
          text-align center
          background #fafafa
          border-radius 5px
          &.active
            border 1px solid #dd1a21
            color #dd1a21
    .hiddenBottom
      width 100%
      height 100%
  //轮播图
  .banner
    margin-top 155px
    width 100%
    height 370px
    .swiper-pagination
      position absolute
      bottom 60px
      //深度选择器
      /deep/span.swiper-pagination-bullet
        width 40px
        height 5px
        border-radius 0px
        background-color #fff
  //三个图标
  .policyList
    display flex
    width 100%
    height 70px
    line-height 70px
    align-items center
    background-color #fff
    box-sizing border-box
    padding 0 15px
			.policyItem
        flex 1
        justify-content space-between
        align-items center
				.policyImg
					width 32px
					height 32px
          margin-left  5px
					vertical-align middle
				.content
					vertical-align middle
  //10个图标区
  .kingkongList
    display  flex
    width 100%
    height 375px
    background-color #fff
    flex-wrap wrap
    .kingkongItem
      width 20%
      display  flex
      flex-direction column
      align-items center
    .kingImg
      width 110px
      height 110px
      margin 20px 0
    .kingContent
      font-size 26px
  //新人首单
  .promotion
    width 100%
    .floorTop
      width 375px
      heigth 160px
      .floorTopImg
        display block
        width 750px
        height 320px
    .floorList
      display flex
      width 750px
      heigth 186px
      align-items: center;
      justify-content center
      .floorListImg
        display flex
        display inline-block
        width 345px
        height 186px
        margin 10px
  //新人专享
  .newPeople
    width 100%
    padding 0 30px 30px 30px
    box-sizing border-box
    background-color #fff
    margin 20px 0
    //大标题
    .newPopleTxt
      width 100%
      height 90px
      color #333
      font-size 32px
      text-align center
      line-height 90px
      span
        position relative
        &::before,&::after
          content ''
          display block
          position absolute
          left -48px
          top 50%
          width 30px
          height 4px
          background-color #333
        &::after
          left auto
          right -48px
    //内容区域
    .newPeopleContent
      display flex
      width 100%
      >div
        width 50%
        height 434px
        //左侧区域
      .newLeft
        background-color #F9E9CF
        margin-right 5px
        border-radius 5px
        .newLeftTxt
          width 100%
          font-size 32px
          padding 40px 0 0 40px
          box-sizing border-box
        .newImg
          width 100%
          height 258px
          margin-top 45px
          position relative
          img
            width 258px
            height 258px
            position absolute
            left 50%
            transform translate(-50%)
            top 0
      //右侧区域
      .newRight
        >div
          width 100%
          height 215px
          border-radius 5px
          box-sizing border-box
          overflow hidden
        .newRightContent1, .newRightContent2
          position relative
          padding 20px 0 0 30px
          margin-bottom 5px
          background-color #fbe2d3
          .rightTitle
              //display block
              line-height 40px
              .bigTitle
                line-height 40px
                font-size 36px
              .smallTitle
                font-size 20px
                color #666
          .smallImg
            position absolute
            right 0
            top 0
            width 200px
            heigth 200px
            padding-top 20px
            .count
              width 80px
              height 80px
              background-color #f6a447
              border-radius 50%
              position absolute
              right 30px
              top 15px
              z-index 1
              >span
                position absolute
                left 20px
                color #fff
              .price1
                top 20px
              .price2
                top 40px
            img
              width 200px
              height 200px
        .newRightContent2
          background-color #ffecc2
          .rightTitle
            .smallTitle
              background-color rgba(0,0,0,0.2)
              border-radius 5px
              color #fff
              padding 0 8px
  //类目热搜
  .category-hotSell-module
    width 100%
    padding 0 30px 20px
    box-sizing border-box
    background-color #fff
    .hotSell-module-title
      width 100%
      height 100px
      line-height 100px
      font-size 32px
    //内容顶部
    .hotSell-module-content
      width 100%
      .content-top
        display flex
        width 100%
        height 200px
        >div
          width 50%
          height 100%
          border-radius 5px
        .content-top-left, .content-top-right
          display flex
          width 50%
          background-color #f9f3e4
          padding-left 20px
          line-height 150px
          margin 0 10px 10px 0
          >div
            width 50%
            height 100%
          .text
            position relative
            font-size 28px
            &::after
              content ''
              display block
              position absolute
              left 0
              top 50%
              margin-top 10px
              width 48px
              height 4px
              background-color #666
          .img-wrap
            width 100%
            height 100%
            img
              width 100%
              height 100%
        .content-top-right
          background-color #ebeff6
          margin-right 0
      .content-bottom
        margin-top 10px
        width 100%
        ul
          width 100%
          overflow hidden
          box-sizing border-box
          li
            position relative
            width 165px
            height 180px
            float left
            border-radius 5px
            background-color #f5f5f5
            margin 0 10px 10px 0
            &:nth-child(4),&:nth-child(8)
              margin-right 0
            .title
              width 100%
              height 36px
              font-size 24px
              text-align center
              line-height 36px
              padding-top 10px
            .img-wrap
              position absolute
              left 50%
              transform translateX(-50%)
              top 50px
              width 120px
              height 120px
              text-align center
              img
                width 100%
                height 100%
  //新品首发
  .newItem-first
    width 100%
    padding 0 30px
    background-color #fff
    box-sizing border-box
    margin 20px 0
    padding-bottom 26px
    .newItem-title
      display flex
      width 100%
      height 100px
      line-height 100px
      font-size 32px
      .newItem
        flex-grow 1
      .more
        flex-grow 2
        text-align right
    .newItem-content
      width 100%
      box-sizing border-box
      ul
        width 100%
        overflow hidden
        li
          width 216px
          float left
          padding-bottom  30px
          margin-right 20px
          border-radius 5px
          &:nth-child(3),&:nth-child(6)
            margin-right 0
          >.img-wrap
            width 216px
            height 216px
            background-color #f5f5f5
            img
              width 100%
              height 100%
          .good
            width 100%
            .desc
              width 100%
              font-size 24px
              line-height 35px
              margin-top 10px
              height 66px
              overflow hidden
              text-overflow ellipsis
              display -webkit-box
              -webkit-line-clamp 2
              -webkit-box-orient vertical
              text-align justfiy
            .price
              color #dd1a21
              font-size 28px
              padding 10px 0
            .tag
              float left
              text-align center
              line-height  30px
              border 1px solid #dd1a21
              border-radius 30px
              span
                color #dd1a21
                font-size 12px
                padding 10px
  //超值区
  .sceneLightShoppingGuideModule
    width 100%
    padding 10px 30px 0
    background-color #fff
    box-sizing border-box
    magrin 20px 0
    padding-bottom 26px
    ul
      width 100%
      overflow hidden
      li
        float left
        width 342px
        margin-right 5px
        margin-bottom 5px
        padding 20px 0 0 20px
        box-sizing border-box
        background-color #f5f5f5
        .title
          span
            line-height 42px
            &:nth-child(1)
              font-size 32px
            &:nth-child(2)
              font-size 24px
              color #7f7f7f
        .pic
          display flex
          img
            width 150px
            height 150px
        &:nth-child(2)
          margin-right 0
  //底部区域
  .footer-wrap
    width 100%
    height 250px
    background #333
    padding 54px 20px 30px
    box-sizing border-box
    color #999
    text-align center
    font-size 24px
    margin-top 20px
    .footer-top
      width 100%
      height 62px
      margin-bottom 36px
      >div
        width 172px
        height 62px
        line-height 62px
        display inline-block
        border 1px solid #999
        border-radius 10px
        >a
          display block
          width 100%
          height 100%
          color #fff
      >div:nth-child(1)
        margin-right 50px
    .copyright
      width 100%
      line-height 36px
      font-size 20px
      padding-bottom 50px
  //返回顶部
  .go-top
    width 82px
    height 82px
    position fixed
    right 20px
    bottom 120px
    z-index 5
    background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-f502426678.png?imageView&type=webp')
    background-size cover
    .tagTop-enter-active,.tagTop-leave-active
      transition opacity .5s
    .tagTop-enter, .tag-leave-to
      opacity 0
</style>
