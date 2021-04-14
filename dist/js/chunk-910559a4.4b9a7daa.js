(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-910559a4"],{"27af":function(t,a,e){"use strict";e("5f73")},"4ce0":function(t,a,e){"use strict";e("d231")},"51df":function(t,a,e){},"5f73":function(t,a,e){},"721b":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"pa-w-full pa-p-10 md:pa-p-0"},[e("div",{staticClass:"pa-flex pa-justify-center pa-items-center pa-w-full"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.favList.length,expression:"!favList.length"}],staticClass:"pa-flex pa-justify-center pa-items-center pa-w-full"},[e("div",{staticClass:"content pa-flex pa-flex-wrap pa-w-99  pa-justify-center pa-items-center"},[t._m(0),e("div",{staticClass:"right pa-w-1/2 md:pa-w-full md:pa-px-24 xs:pa-px-3 "},[e("p",{staticClass:"pa-text-3xl  pa-block pa-text-center pa-font-semibold pa-tracking-wider md:pa-text-3xl md:pa-py-6 s:pa-text-sm "},[t._v(" Your list is empty! ")]),e("router-link",{staticClass:"shop-btn pa-block  pa-text-2xl pa-p-3 pa-text-center pa-bg-yellow-500 white--text  pa-tracking-wider pa-transition pa-duration-500 md:pa-text-xl s:pa-text-sm s:pa-ml-3",attrs:{to:"/allproducts"}},[t._v("Go Shopping")])],1)])]),e("Card",{attrs:{pageItems:t.favList}})],1)])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"left img-container pa-w-1/2 pa-pr-5 md:pa-w-full md:pa-px-36 xs:pa-px-16"},[s("img",{staticClass:"pa-w-full pa-h-full pa-object-cover",attrs:{src:e("5106"),alt:""}})])}],p=e("5530"),n=e("ae8d"),r=e("2f62"),o={components:{Card:n["a"]},computed:Object(p["a"])({},Object(r["c"])("auth",["favList"])),metaInfo:{title:"Favorites List"}},c=o,l=(e("4ce0"),e("2877")),d=Object(l["a"])(c,s,i,!1,null,"a564ca50",null);a["default"]=d.exports},"7e17":function(t,a,e){"use strict";e("51df")},ae8d:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pa-flex pa-my-0 pa-mx-auto  pa-items-center pa-justify-center pa-flex-wrap pa-px-3"},t._l(t.pageItems,(function(a,s){return e("div",{directives:[{name:"tilt",rawName:"v-tilt",value:{speed:900,perspective:3e3,scale:1.1},expression:"{speed: 900, perspective: 3000,scale:1.1}"}],key:s,staticClass:"card pa-relative pa-rounded-xl pa-bg-yellow-100 pa-mr-12 pa-mb-36 pa-text-center "},[e("div",{staticClass:"img-container  pa-relative  pa-rounded-xl pa-w-48 pa-h-72"},[a.sales>750?e("div",{staticClass:"pa-rounded-full pa-bg-red-600 white--text pa-w-10  pa-text-sm pa-text-semibold pa-absolute pa-top-10 pa-right-3"},[t._v("Hot")]):t._e(),e("div",{staticClass:"pa-rounded-full pa-bg-green-500 white--text pa-w-10  pa-text-sm pa-text-semibold pa-absolute pa-top-4 pa-right-3"},[t._v("New")]),e("Heart",{attrs:{id:a.productId}}),e("router-link",{staticClass:"pa-block pa-w-full",attrs:{to:"/item/"+a.productId}},[e("img",{attrs:{src:a.image[0],alt:"product image"}})])],1),e("h4",{staticClass:"pa-text-center pa-font-bold pa-text-xl pa-mb-2"},[t._v(t._s(a.productName))]),e("p",{staticClass:"pa-text-center pa-font-semibold pa-pb-3"},[t._v("$"+t._s(a.price))]),e("button",{staticClass:"pa-absolute  pa-text-center pa-p-1 pa-transition pa-duration-300 pa-text-xl pa-font-semibold focus:pa-outline-none",on:{click:function(e){return t.add(a.productId,"1")}}},[e("i",{staticClass:"fas fa-shopping-cart"})])])})),0)},i=[],p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"heart",domProps:{innerHTML:t._s(t.icon)},on:{click:function(a){return t.addToFav(t.id)}}})},n=[],r=e("5530"),o=(e("c740"),e("2f62")),c={computed:Object(r["a"])(Object(r["a"])({},Object(o["c"])("auth",["favList"])),{},{icon:function(){var t=this,a='<i class="fas fa-heart"></i>',e=' <i class="far fa-heart"></i>',s=this.favList.findIndex((function(a){return a.productId===t.id}));return-1===s?e:a}}),props:["id"],methods:{addToFav:function(t){if(this.$store.getters["auth/token"]){var a={productId:t,favlist:this.favList},e=this.favList.findIndex((function(a){return a.productId===t}));-1===e?(this.$store.dispatch("product/addToFavActions",a),this.$toast.open({message:"Add favorites",type:"success",pauseOnHover:!0,duration:2e3})):(this.$store.dispatch("product/removeFromFav",a),this.$toast.open({message:"Remove favorites",type:"info",pauseOnHover:!0,duration:2e3}))}else this.$swal({imageUrl:"https://upload.cc/i1/2021/04/10/u0e6iX.png",title:"Oops!",text:"You need to login!",confirmButtonColor:"#000000"})}}},l=c,d=(e("27af"),e("2877")),u=Object(d["a"])(l,p,n,!1,null,"7ff8f224",null),f=u.exports,m={props:["pageItems"],components:{Heart:f},methods:{add:function(t,a){if(this.$store.getters["auth/token"]){var e={productId:t,qty:a};this.$store.dispatch("product/addActions",e)}else this.$swal({imageUrl:"https://upload.cc/i1/2021/04/10/u0e6iX.png",title:"Oops!",text:"You need to login!",confirmButtonColor:"#000000"})}}},v=m,x=(e("7e17"),Object(d["a"])(v,s,i,!1,null,"9d8c57ce",null));a["a"]=x.exports},c740:function(t,a,e){"use strict";var s=e("23e7"),i=e("b727").findIndex,p=e("44d2"),n="findIndex",r=!0;n in[]&&Array(1)[n]((function(){r=!1})),s({target:"Array",proto:!0,forced:r},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),p(n)},d231:function(t,a,e){}}]);
//# sourceMappingURL=chunk-910559a4.4b9a7daa.js.map