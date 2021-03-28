<template>
  <div class="demo">
    <h1 class="demo__text">This is an demo page</h1>
    <h2 class="demo__text">User story 使用者故事建議</h2>

    <ol class="list">
      <li>我可以看到最佳組別投稿數排名、總平均秒數排名</li>
      <li>我可以看到個人排名，若頁數過多，請用分頁來設計</li>
      <li>我能在每個參賽者中看到每個人的留言、YT 連結、分鐘數</li>
      <li>篩選排序方式：可依投遞時間、秒數(由低到高)</li>
    </ol>
  <div class="chooseOption">
  <input type="text" @change="textChangeHandler" class="search" placeholder="請輸入您的搜尋條件" v-model="searchText">
  <select name="" id="" class="choose">
    <option value="" disabled selected>請選擇</option>
    <option value="">最佳組別排名</option>
    <option value="">總秒數排名</option>
    <option value="">投遞時間</option>
    <option value="">完成秒數由低至高</option>
  </select>
  </div>
  <div class="apear"  :key="index" v-for="(item,index) in filterList">
     <ul>
      <li >slack名稱: <span class="apear__name">{{item.slackName}}</span></li>
      <li>團隊：{{item.jsGroup}}</li>
      <li v-if="item.youtubeUrl !=='' ">影音連結：<a :href="item.youtubeUrl">前往連結</a></li>
      <li v-else>影音連結：<a href="#">並未提供</a></li>
      <li>程式碼區塊：<a :href="item.codepenUrl">前往連結</a></li>
      <li class="apear__space">完成時間 :  {{item.practiceMinute}}分{{item.practiceSecond}}秒</li>
      <li v-if="item.message" class="apear__content">留言：
        {{item.message}}
      </li>
      <li class="apear__time">投遞時間：
        {{item.timestamp}}
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      datalist:[],
      searchText:'',
      filterList:[],
    }
  },
  methods:{

    getData(val){

      // axios.get(val).then((res)=>{
      //   console.log(res)
      // }).catch((error)=>{
      //   console.log(error)
      // })
        fetch(val,{method:'get'}).then((res)=>{
          return  res.json();
        }).then((res)=>{
          this.datalist = res;
          let groupNum;
          this.datalist.forEach((data,index)=>{
            if(data['jsGroup'].length==1){
              groupNum = `0${data['jsGroup']}`
            }else{
              groupNum = data['jsGroup']
            }
            this.datalist[index]['jsGroup']=groupNum;
          });
          this.filterList  = this.datalist
        })
    },
    textChangeHandler(){
      this.filterList = this.datalist.filter((data)=>{
        let keyword= this.searchText.toLowerCase().trim();
        let key = false;
        (data.slackName.toLowerCase().includes(keyword)) ? (key = true): '';
        (data.jsGroup.toLowerCase().includes(keyword)) ? (key = true): '';
        return key;
      })
      return this.filterList;
    },





  },
  mounted(){
    this.getData('https://raw.githubusercontent.com/hexschool/js-traninging-week6API/main/data.json');
  },
}
</script>






<style scoped>
.demo{
  max-width: 1400px;
  text-align: left;
  margin: 0 auto;
  line-height: 1.5;
}
.demo__text{
  text-align: center;
}
.list{
  margin: 0;
}
.apear{
  margin-top: 50px;
  width: 100%;
  background-color: rgba(192, 192, 192, 0.719);
}
.apear>ul{
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-weight: 700;
  flex-wrap: wrap;
 
}
.apear li{
  flex-grow: 1;
  max-width: 200px;
  display: flex;
  align-items: center;
}
.apear a{
   text-decoration: none;
   color: red;
   font-size: 12px;
}
.apear li.apear__content{
  max-width: 100%;
  font-size: 20px;
  margin: 0px 20px;
  color: rgb(251, 40, 40);
  text-shadow: 1px 1px 1px black;

}
.apear li.apear__time{
   font-size: 12px;
  text-shadow: 1px 1px 1px black;
}
.apear__name{
  color: firebrick;
}
.chooseOption{
  margin-top: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
}
.search,.choose{
  padding: 10px;
  outline: none;
  color: black;
  font-size: 16px;
  margin-right: 50px;
  border: 1px double black;
  border-radius: 5px;
}

a.router-link-active {
  color: #b97742;
}
</style>