<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(items,index) of pages" :key="index">
        <div class="home-icons">
          <div class="icon" v-for="item of items" :key="item.id">
            <div class="content">
              <div class="img">
                <img :src="item.imgUrl" :alt="item.desc">
              </div>
              <p class="icon-desc">{{item.desc}}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <!-- <swiper-slide class="b">
        <div class="home-icons">
          <div class="icon" v-for="(item,index) of iconList" :key="item.id" v-if="index >= 8">
            <div class="content">
              <div class="img">
                <img :src="item.imgUrl" :alt="item.desc">
              </div>
              <p>{{item.desc}}</p>
            </div>
          </div>
        </div>
      </swiper-slide> -->
       <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    

  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data(){
    return {
      swiperOption:{
         pagination: '.swiper-pagination',
      },
      iconList:[]
    }
  },
  computed:{
    pages(){
      const pages = []
      this.iconList.forEach((item,index) => {
        const page = Math.floor(index / 8)
        if(!pages[page]){
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  created(){
    this.$bus.$on('iconList',(res) => {
      this.iconList = res
    })
  }

}
</script>

<style lang="less" scoped >
  .home-icons{
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    width: 100%;    
    height: 0;
    padding-bottom: 50%;
    .icon{
      position: relative;
      width: 25%;
      padding-bottom: 25%;
      text-align: center;
      .content{
        position: absolute;
        top: 0;
        left: 0;
        .icon-desc{
          position: absolute;
          bottom: -10px;
          left: 0;
          right: 0;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .img{
          padding: 10px;
          
          img{
          width: 80%;
          vertical-align: middle;
          }
       
        }
      }
      
    }
  }
</style>
