<template>
  <div>
    <Navbar></Navbar>
    <div class="foodlist">
      <div class="imgbox">
        <img :src="foodlist.img" />
        <div class="desc">
          <div class="title">{{ foodlist.foodname }}</div>
          <div class="mark">【单人套餐】 {{ foodlist.mark }}</div>
        </div>
      </div>
      <div class="price">
        <div class="sales">{{ foodlist.sales }} <span>已优惠95%</span></div>
        <button class="btn">立即抢购</button>
      </div>
      <div class="tag">
        <div v-show="foodlist.NTS">
          <van-icon name="passed" />此产品为当期新品
        </div>
        <div v-show="foodlist.recommend">
          <van-icon name="diamond-o" />此产品为当期推荐
        </div>
      </div>
      <div class="grade">
        <div class="star">
          <van-rate
            v-model="value"
            :size="20"
            color="#ff4b10"
            void-color="#eee"
            allow-half
            void-icon="star"
          />
          <span>{{ foodlist.grade }}</span>
        </div>
        <div class="pingjia"><span>217762人评价</span></div>
      </div>
      <div class="label">
        <div class="vtag">
          <van-tag plain type="warning" size="large">上菜快</van-tag>
          <van-tag plain type="success" size="large">不用排队</van-tag>
          <van-tag plain type="warning" size="large">约会圣地</van-tag>
          <van-tag plain type="warning" size="large">停车方便</van-tag>
        </div>
        <div class="vtag">
          <van-tag plain type="primary" size="large">现做现买</van-tag>
          <van-tag plain type="success" size="large">有萌宠</van-tag>
          <van-tag plain type="primary" size="large">约会圣地</van-tag>
          <van-tag plain type="warning" size="large">店内消毒</van-tag>
        </div>
        <div class="vtag">
          <van-tag plain type="warning" size="large">上菜快</van-tag>
          <van-tag plain type="primary" size="large">不用排队</van-tag>
          <van-tag plain type="success" size="large">下午茶</van-tag>
          <van-tag plain type="warning" size="large">约会圣地</van-tag>
        </div>
      </div>
      <div class="degree">
        <div class="select">选择口味</div>
        <div class="radio">
          <van-radio-group v-model="radio">
            <van-radio
              v-for="item in foodlist.label"
              :key="item.id"
              :name="item.id"
              >{{ item.name }}<span>剩余份数</span
              ><span>({{ item.num }})份</span></van-radio
            >
          </van-radio-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
import axios from "axios";
export default {
  data() {
    return {
      foodlist: {},
      value: 0,
      radio: "",
    };
  },
  components: { Navbar },
  methods: {
    getfoodlist() {
      let id = this.$route.query.id;
      axios
        .get(`http://localhost:5000/foodslist?id=${id}`)
        .then((res) => {
          console.log(res.data);
          this.foodlist = res.data[0];
          this.value = res.data[0].grade;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    selectid(id) {
      this.radio = id;
    },
  },
  mounted() {
    this.getfoodlist();
  },
};
</script>

<style lang="less" scoped>
.foodlist {
  .imgbox {
    position: relative;
    color: #fff;
    img {
      width: 100%;
      height: 227px;
    }
    .desc {
      position: absolute;
      left: 10px;
      bottom: 20px;
      .title {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 10px;
      }
      .mark {
        font-size: 16px;
      }
    }
  }
  .price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    height: 60px;
    border-bottom: 1px solid #ddd8ce;
    .sales {
      color: #ff4b10;
      font-size: 25px;
      font-weight: 700;
      span {
        font-size: 14px;
        color: #9999b3;
        font-weight: 400;
      }
    }
  }
  .tag {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    font-size: 16px;
    color: #6bbd00;
  }
  .grade {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    height: 45px;
    border-top: 1px solid #ddd8ce;
    border-bottom: 1px solid #ddd8ce;
    .star {
      span {
        color: #ff4b10;
        font-size: 14px;
        margin-left: 10px;
      }
    }
    .pingjia {
      color: #999;
      font-size: 14px;
    }
  }
  .label {
    width: 100%;
    height: 135px;
    padding: 10px 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-bottom: 1px solid #ddd8ce;
    .vtag {
      .van-tag--large {
        margin-right: 10px;
        font-size: 15px;
        padding: 8px;
      }
    }
  }
  .degree {
    font-size: 18px;
  }
  .select {
    height: 45px;
    width: 100%;
    border-bottom: 1px solid #ddd8ce;
    font-size: 16px;
    line-height: 45px;
    padding-left: 10px;
    color: #333;
  }
  .radio {
    margin-top: 10px;
    span {
        font-size: 14px;
        color: #666;
      &:first-child {
        margin-left: 20px;
        font-size: 14px;
        color: #666;
      }
    }
  }
  .van-radio {
    margin: 10px 0;
  }
}
.btn {
  width: 130px;
  height: 40px;
  color: #fff;
  background-color: #FF4B10;
  border: none;
  font-size: 18px;
  font-weight: 500;
  border-radius: 6px;
}
</style>