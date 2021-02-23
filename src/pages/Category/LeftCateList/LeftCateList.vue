<template>
  <div id="LeftContainer" ref="bscroll">
    <ul class="navList">
      <li class="active">
        <span>推荐专区</span>
      </li>
      <li>
        <span>推荐专区</span>
      </li>
      <li>
        <span>推荐专区</span>
      </li>
      <li>
        <span>推荐专区</span>
      </li>
      <li>
        <span>推荐专区</span>
      </li>
      <li>
        <span>推荐专区</span>
      </li>
      <li>
        <span>推荐专区</span>
      </li>
      <li>
        <span>推荐专区</span>
      </li>
      <li>
        <span>推荐专区</span>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "LeftCateList",
  mounted() {
    //获取一级分类列表数据
    this.getCategory1List()

    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.bscroll, {
        click: true,
        scrollY: true,
      });
    });
  },
  methods:{
    getCategory1List(){
      this.$store.dispatch('getCategory1List')
    }
  },
};
</script>

<style lang="stylus" >
#LeftContainer {
  // height: 100%;
  // width: 100%;
 
  .navList {
    padding-top: 40px;
    padding-bottom: 48px;
    box-sizing: border-box;
    width: 100%;
    // height: 1999px;

    li {
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      margin-top: 40px;
      font-size: 28px;
      border-left: 6px solid #fff;
      box-sizing: border-box;
      padding-left: 23px;

      >a {
        color: #333;
      }

      &:first-child {
        margin-top: 0;
      }

      &.active {
        color: #ab2b2b;
        border-left: 6px solid #ab2b2b;
        box-sizing: border-box;

        >a {
          color: #ab2b2b;
        }
      }

      span {
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
