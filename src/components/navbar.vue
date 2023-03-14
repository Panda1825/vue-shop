<template>
  <div>
    <van-nav-bar
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>
/deep/ .van-nav-bar__text {
    color: #ff4b10 !important;
    font-size: 16px;
 
  }
 /deep/ .van-nav-bar .van-icon {
    color: #ff4b10 !important;
    font-size: 20px;
  }

</style>