(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43a738f4"],{"0851":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"newAlbum"},[a("h1",[t._v(t._s(t.$t("home.newAlbum")))]),a("div",{staticClass:"playlist-row"},[a("div",{staticClass:"playlists"},t._l(t.albums,(function(e){return a("div",{key:e.id,staticClass:"item"},[a("Cover",{attrs:{id:e.id,type:"album",url:t._f("resizeImage")(e.picUrl),hoverEffect:!0,showBlackShadow:!0}}),a("div",{staticClass:"text"},[a("div",{staticClass:"name"},[t._v(t._s(e.name))]),a("div",{staticClass:"info"},[t._v(t._s(e.artist.name))])])],1)})),0)])])},i=[],o=a("e498"),n=a("323e"),r=a.n(n),l=a("3020"),u={data:function(){return{albums:[]}},components:{Cover:l["a"]},created:function(){var t=this;Object(o["d"])({area:"EA",limit:100}).then((function(e){t.albums=e.albums,r.a.done()}))}},c=u,d=(a("78c2"),a("2877")),y=Object(d["a"])(c,s,i,!1,null,"12989328",null);e["default"]=y.exports},"28ef":function(t,e,a){},"2c46":function(t,e,a){"use strict";var s=a("862d"),i=a.n(s);i.a},3020:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cover",class:{"cover-hover":t.coverHover},on:{mouseover:function(e){t.focus=!0},mouseleave:function(e){t.focus=!1},click:function(e){t.clickCoverToPlay?t.play():t.goTo()}}},[a("div",{staticClass:"cover-container"},[a("div",{staticClass:"shade"},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.focus,expression:"focus"}],staticClass:"play-button",style:t.playButtonStyles,on:{click:function(e){return e.stopPropagation(),t.play()}}},[a("svg-icon",{attrs:{"icon-class":"play"}})],1)]),a("img",{style:t.imageStyles,attrs:{src:t.imageUrl}}),t.coverHover||t.alwaysShowShadow?a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.focus||t.alwaysShowShadow,expression:"focus || alwaysShowShadow"}],staticClass:"shadow",style:t.shadowStyles})]):t._e()],1)])},i=[],o=(a("a9e3"),{props:{id:{type:Number,required:!0},type:{type:String,required:!0},imageUrl:{type:String,required:!0},fixedSize:{type:Number,default:0},playButtonSize:{type:Number,default:22},coverHover:{type:Boolean,default:!0},alwaysShowPlayButton:{type:Boolean,default:!0},alwaysShowShadow:{type:Boolean,default:!1},clickCoverToPlay:{type:Boolean,default:!1},shadowMargin:{type:Number,default:12},radius:{type:Number,default:12}},data:function(){return{focus:!1}},computed:{imageStyles:function(){var t={};return 0!==this.fixedSize&&(t.width=this.fixedSize+"px",t.height=this.fixedSize+"px"),"artist"===this.type&&(t.borderRadius="50%"),t},playButtonStyles:function(){var t={};return t.width=this.playButtonSize+"%",t.height=this.playButtonSize+"%",t},shadowStyles:function(){var t={};return t.backgroundImage="url(".concat(this.imageUrl,")"),"artist"===this.type&&(t.borderRadius="50%"),t}},methods:{play:function(){var t=this.$store.state.player,e={album:t.playAlbumByID,playlist:t.playPlaylistByID,artist:t.playArtistByID};e[this.type].bind(t)(this.id)},goTo:function(){this.$router.push({name:this.type,params:{id:this.id}})}}}),n=o,r=(a("2c46"),a("2877")),l=Object(r["a"])(n,s,i,!1,null,"f1a38860",null);e["a"]=l.exports},"78c2":function(t,e,a){"use strict";var s=a("28ef"),i=a.n(s);i.a},"862d":function(t,e,a){}}]);
//# sourceMappingURL=chunk-43a738f4.6909680c.js.map