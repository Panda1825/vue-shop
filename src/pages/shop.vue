<template>
  <div class="main">
    <h2>店铺列表</h2>
    <div
      class="shopitem"
      v-for="item in shoplist"
      :key="item.id"
      @click="gofoodlist(item)"
    >
      <div class="imgbox">
        <img :src="item.img" />
      </div>
      <div class="message">
        <div class="header">
          <div class="title">{{ item.name }}</div>
          <div class="addr">{{ item.addr }}</div>
          <div class="center">
            <div class="describe">{{ item.describe }}</div>
            <div class="lable">
              <div>{{ item.lable.lable1 }}</div>
              <div>{{ item.lable.lable2 }}</div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="price">{{ item.food.sales }}<span>/人</span></div>
          <div class="phone">电话：{{ item.phone }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  data() {
    return {
      shoplist: [],
    };
  },
  methods: {
    getshoplist() {
      // Toast.loading({
      //   message: "加载中...",
      //   forbidClick: true,
      // });
      axios
        .get(`http://localhost:5000/shoplist`)
        .then((res) => {
          this.shoplist = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    gofoodlist(item) {
      this.$router.push({
        path: "/food",
        query: {
          id: item.id,
        },
      });
    },
  },
  mounted() {
    this.getshoplist();
  },
};
</script>

<style lang="less" scoped>
.main {
  overflow: hidden;
}
h2 {
  font-size: 20px;
  color: #333;
  margin: 10px 10px;
}
.shopitem {
  display: flex;
  height: 125px;
  width: 370px;
  border-top: 1px solid #ddd8ce;
  margin: 0 auto;
  padding: 8px;
  .imgbox {
    height: 100px;
    width: 100px;
    img {
      height: 100px;
      width: 100px;
    }
  }
  .message {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    font-family: PingFangSC-Regular;
    .title {
      color: #333333;
      font-size: 18px;
      letter-spacing: 0.28px;
      font-weight: 500;
    }
    .addr {
      color: #666666;
      letter-spacing: 0.2px;
      font-size: 13px;
      margin-top: 2px;
    }
    .describe {
      color: #666666;
      font-size: 14px;
      padding: 5px 0;
    }
    .price {
      color: #f60;
      font-size: 20px;
      span {
        color: #f60;
        font-size: 17px;
      }
    }
  }
}
.footer {
  display: flex;
  .phone {
    color: #666;
    font-size: 14px;
    line-height: 30px;
    margin-left: 7px;
    padding-top: 2px;
  }
}
.center {
  display: flex;
  align-items: center;
  .lable {
    display: flex;
    align-items: center;
    font-size: 13px;
    margin: 0 15px;
    color: rgb(255, 75, 16);
    background-color: rgb(251, 244, 228);
    div {
      padding: 0 3px;
    }
  }
}
</style>