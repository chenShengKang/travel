<template>
  <div>
    <swiper :options="swiperOption" v-if="list.length > 0">
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

    </swiper>
    

  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props:{
    list:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      swiperOption:{
         pagination: '.swiper-pagination',
      },
      iconList:[
        // {id:'001',desc:'景点门票', imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
        // {id:'002',desc:'踏青赏花', imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png'},
        // {id:'003',desc:'文字动物园', imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/4c8956a3f5cf0a90f3c6801115fb9fb3.png'},
        // {id:'004',desc:'温州必游', imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'},
        // {id:'005',desc:'云顶草上世界', imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png'},
        // {id:'006',desc:'雁荡山', imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png'},
        // {id:'007',desc:'温州乐园', imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png'},
        // {id:'008',desc:'动植物园', imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png'},
        // {id:'009',desc:'白丈祭', imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/811d606236784ca9617fb81a058dee3f.png'},
        // {id:'010',desc:'永嘉书院', imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png'},

      ]
    }
  },
  computed:{
    pages(){
      const pages = []
      this.list.forEach((item,index) => {
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
