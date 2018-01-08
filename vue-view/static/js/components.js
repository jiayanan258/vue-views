var Main=Vue.component('Main', {
    template: `
<div class="contain">
<div class="left">
<router-view name="left"></router-view>
</div>
<div class="right">
<router-view name="right"></router-view>
</div>
</div>`
})
var Left=Vue.component('Left',{
      template:`
      <div class="contain">
       <ul v-for="item in data">
            <router-link :to="'#'+item.id" :id="'a'+item.id">{{item.title}}</router-link>
              <li v-for="item1 in item.child">
                  <router-link :to="'#'+item1.id" :id="'a'+item1.id">{{item1.title}}</router-link>
              </li>
        </ul>
</div>`,
    data(){
          return{
             means:[]
          }
    },
    computed:{
        data(){
            var arr=[];
            for(let i in this.means) {
                if (this.means[i].pid == '0') {
                    arr.push(this.means[i])
                    }else{
                    for(let j in arr) {
                        if (arr[j].id == this.means[i].pid) {
                            if (arr[j].child) {
                                arr[j].child.push(this.means[i])
                            } else {
                                arr[j].child = [];
                                arr[j].child.push(this.means[i])
                            }
                        }
                    }
                }
            }
            return arr;
        }
    },
    mounted(){
        fetch('./left.txt').then(function (e) {
            return e.json();
        }).then((e)=>{
            this.means=e;
        })
    },
})

// var num = (this.$route.hash.slice(1));
// var pos = (document.querySelector("#a"+num).offsetTop-40);
// console.log(document.querySelector("#a"+num).offsetTop-40)
// function animate () {
//     if (TWEEN.update()) {
//         requestAnimationFrame(animate)
//     }
// }
// new TWEEN.Tween({ number: document.querySelector(".right").scrollTop})
//     .easing(TWEEN.Easing.Quadratic.Out)
//     .to({ number: pos }, 500)
//     .onUpdate(function () {
//         document.querySelector(".right").scrollTop = this.number.toFixed(0)
//     })
//     .start()
// animate()
var Right=Vue.component('Right',{
      template:`
      <div v-html="means" class="markdown-body">
      <router-view></router-view>
</div>`,
    data(){
          return{
             means:'',
          }
    },
    mounted(){
        fetch('./html.txt').then(function (e) {
            return e.text();
        }).then((e)=>{
            this.means=e;
        })
    },
    watch: {
        $route: function() {
            var num = (this.$route.hash.slice(1));
        var pos = (document.querySelector(`.${"a"+num}`).offsetTop);
        function animate () {
    if (TWEEN.update()) {
        requestAnimationFrame(animate)
    }
}
new TWEEN.Tween({ number: document.querySelector(".right").scrollTop})
    .easing(TWEEN.Easing.Quadratic.Out)
    .to({ number: pos }, 500)
    .onUpdate(function () {
        document.querySelector(".right").scrollTop = this.number.toFixed(0)
    })
    .start()
animate()
        }
    }
})
var Query=Vue.component('Query',{
    template:`
    <div class="contain" style="position: absolute;top: 64px">
          bngjhnfgjhn<br>
          bngjhnfgjhn<br>
          bngjhnfgjhn<br>
          bngjhnfgjhn<br>
          bngjhnfgjhn<br>
     </div>
      `,

})