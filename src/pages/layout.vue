<template>
  <div>
    <router-view></router-view>
    <van-tabbar route border fixed placeholder >
      <van-tabbar-item replace to="/shop" icon="shop-o">店铺</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>