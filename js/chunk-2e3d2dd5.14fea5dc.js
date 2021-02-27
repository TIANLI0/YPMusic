(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e3d2dd5"],{"0f0a":function(t,e,a){"use strict";var r=a("4fb2"),s=a.n(r);s.a},"20e9":function(t,e,a){"use strict";var r=a("bda3"),s=a.n(r);s.a},2508:function(t,e,a){"use strict";var r=a("c19a"),s=a.n(r);s.a},2726:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cover-row",class:{"without-padding":t.withoutPadding},style:t.rowStyles},t._l(t.items,(function(e){return a("div",{key:e.id,staticClass:"item",class:{artist:"artist"===t.type}},[a("Cover",{attrs:{imageUrl:t.getImageUrl(e),type:t.type,id:e.id}}),a("div",{staticClass:"text"},[t.showPlayCount?a("div",{staticClass:"info"},[a("span",{staticClass:"play-count"},[a("svg-icon",{attrs:{"icon-class":"play"}}),t._v(t._s(t._f("formatPlayCount")(e.playCount))+" ")],1)]):t._e(),a("div",{staticClass:"title",style:{fontSize:t.subTextFontSize}},[t.isExplicit(e)?a("span",{staticClass:"explicit-symbol"},[a("ExplicitSymbol")],1):t._e(),t.isPrivacy(e)?a("span",{staticClass:"lock-icon"},[a("svg-icon",{attrs:{"icon-class":"lock"}})],1):t._e(),a("router-link",{attrs:{to:t.getTitleLink(e)}},[t._v(t._s(e.name))])],1),"artist"!==t.type&&"none"!==t.subText?a("div",{staticClass:"info"},[a("span",{domProps:{innerHTML:t._s(t.getSubText(e))}})]):t._e()])],1)})),0)},s=[],i=(a("a4d3"),a("e01a"),a("99af"),a("b0c0"),a("a9e3"),a("ac1f"),a("1276"),a("3020")),n=a("0c94"),o={name:"CoverRow",components:{Cover:i["a"],ExplicitSymbol:n["a"]},props:{items:{type:Array,required:!0},type:{type:String,required:!0},subText:{type:String,default:"null"},subTextFontSize:{type:String,default:"16px"},showPlayCount:{type:Boolean,default:!1},columnNumber:{type:Number,default:5},gap:{type:String,default:"44px 24px"},withoutPadding:{type:Boolean,default:!1}},computed:{rowStyles:function(){return{"grid-template-columns":"repeat(".concat(this.columnNumber,", 1fr)"),gap:this.gap}}},methods:{getSubText:function(t){if("copywriter"===this.subText)return t.copywriter;if("description"===this.subText)return t.description;if("updateFrequency"===this.subText)return t.updateFrequency;if("creator"===this.subText)return"by "+t.creator.nickname;if("releaseYear"===this.subText)return new Date(t.publishTime).getFullYear();if("artist"===this.subText){if(void 0!==t.artist)return'<a href="/#/artist/'.concat(t.artist.id,'">').concat(t.artist.name,"</a>");if(void 0!==t.artists)return'<a href="/#/artist/'.concat(t.artists[0].id,'">').concat(t.artists[0].name,"</a>")}if("albumType+releaseYear"===this.subText){var e=t.type;return"EP/Single"===t.type?e=1===t.size?"Single":"EP":"Single"===t.type?e="Single":"专辑"===t.type&&(e="Album"),"".concat(e," · ").concat(new Date(t.publishTime).getFullYear())}return"appleMusic"===this.subText?"by Apple Music":void 0},isPrivacy:function(t){return"playlist"===this.type&&10===t.privacy},isExplicit:function(t){return"album"===this.type&&1056768===t.mark},getTitleLink:function(t){return"/".concat(this.type,"/").concat(t.id)},getImageUrl:function(t){if(t.img1v1Url){var e=t.img1v1Url.split("/");if(e=e[e.length-1],"5639395138885805.jpg"===e)return"https://p2.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg?param=512y512"}var a=t.img1v1Url||t.picUrl||t.coverImgUrl;return"".concat(a,"?param=512y512")}}},u=o,l=(a("2508"),a("2877")),c=Object(l["a"])(u,r,s,!1,null,"20835ae4",null);e["a"]=c.exports},"2a72":function(t,e,a){"use strict";var r=a("31f9"),s=a.n(r);s.a},"2c46":function(t,e,a){"use strict";var r=a("862d"),s=a.n(r);s.a},3020:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cover",class:{"cover-hover":t.coverHover},on:{mouseover:function(e){t.focus=!0},mouseleave:function(e){t.focus=!1},click:function(e){t.clickCoverToPlay?t.play():t.goTo()}}},[a("div",{staticClass:"cover-container"},[a("div",{staticClass:"shade"},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.focus,expression:"focus"}],staticClass:"play-button",style:t.playButtonStyles,on:{click:function(e){return e.stopPropagation(),t.play()}}},[a("svg-icon",{attrs:{"icon-class":"play"}})],1)]),a("img",{style:t.imageStyles,attrs:{src:t.imageUrl}}),t.coverHover||t.alwaysShowShadow?a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.focus||t.alwaysShowShadow,expression:"focus || alwaysShowShadow"}],staticClass:"shadow",style:t.shadowStyles})]):t._e()],1)])},s=[],i=(a("a9e3"),{props:{id:{type:Number,required:!0},type:{type:String,required:!0},imageUrl:{type:String,required:!0},fixedSize:{type:Number,default:0},playButtonSize:{type:Number,default:22},coverHover:{type:Boolean,default:!0},alwaysShowPlayButton:{type:Boolean,default:!0},alwaysShowShadow:{type:Boolean,default:!1},clickCoverToPlay:{type:Boolean,default:!1},shadowMargin:{type:Number,default:12},radius:{type:Number,default:12}},data:function(){return{focus:!1}},computed:{imageStyles:function(){var t={};return 0!==this.fixedSize&&(t.width=this.fixedSize+"px",t.height=this.fixedSize+"px"),"artist"===this.type&&(t.borderRadius="50%"),t},playButtonStyles:function(){var t={};return t.width=this.playButtonSize+"%",t.height=this.playButtonSize+"%",t},shadowStyles:function(){var t={};return t.backgroundImage="url(".concat(this.imageUrl,")"),"artist"===this.type&&(t.borderRadius="50%"),t}},methods:{play:function(){var t=this.$store.state.player,e={album:t.playAlbumByID,playlist:t.playPlaylistByID,artist:t.playArtistByID};e[this.type].bind(t)(this.id)},goTo:function(){this.$router.push({name:this.type,params:{id:this.id}})}}}),n=i,o=(a("2c46"),a("2877")),u=Object(o["a"])(n,r,s,!1,null,"f1a38860",null);e["a"]=u.exports},"31f9":function(t,e,a){},"4fb2":function(t,e,a){},"5e45":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{class:t.color,style:t.buttonStyle},[null!==t.iconClass?a("svg-icon",{style:{marginRight:t.iconButton?"0px":"8px"},attrs:{iconClass:t.iconClass}}):t._e(),t._t("default")],2)},s=[],i=(a("a9e3"),{name:"ButtonTwoTone",props:{iconClass:{type:String,default:null},iconButton:{type:Boolean,default:!1},horizontalPadding:{type:Number,default:16},color:{type:String,default:"blue"},backgroundColor:{type:String,default:""},textColor:{type:String,default:""},shape:{type:String,default:"square"}},computed:{buttonStyle:function(){var t={borderRadius:"round"===this.shape?"50%":"8px",padding:"8px ".concat(this.horizontalPadding,"px"),width:"round"===this.shape?"38px":"auto"};return""!==this.backgroundColor&&(t.backgroundColor=this.backgroundColor),""!==this.textColor&&(t.color=this.textColor),t}}}),n=i,o=(a("0f0a"),a("2877")),u=Object(o["a"])(n,r,s,!1,null,"18f7e8ba",null);e["a"]=u.exports},"7df4":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"search"},[a("h1",[a("span",[t._v(t._s(t.$t("search.searchFor"))+t._s(t.typeNameTable[t.type]))]),t._v(' "'+t._s(t.keywords)+'" ')]),"artists"===t.type?a("div",[a("CoverRow",{attrs:{type:"artist",items:t.result,columnNumber:6}})],1):t._e(),"albums"===t.type?a("div",[a("CoverRow",{attrs:{type:"album",items:t.result,subText:"artist",subTextFontSize:"14px"}})],1):t._e(),"tracks"===t.type?a("div",[a("TrackList",{attrs:{tracks:t.result,type:"playlist",dbclickTrackFunc:"playAList"}})],1):t._e(),"musicVideos"===t.type?a("div",[a("MvRow",{attrs:{mvs:t.result}})],1):t._e(),"playlists"===t.type?a("div",[a("CoverRow",{attrs:{type:"playlist",items:t.result,subText:"title"}})],1):t._e(),a("div",{staticClass:"load-more"},[a("ButtonTwoTone",{directives:[{name:"show",rawName:"v-show",value:t.hasMore,expression:"hasMore"}],attrs:{color:"grey"},nativeOn:{click:function(e){return t.fetchData(e)}}},[t._v(t._s(t.$t("explore.loadMore")))])],1)])},s=[],i=(a("a15b"),a("d81d"),a("d0ff")),n=a("fefb"),o=a("dad3");var u=function(){return u=Object.assign||function(t){for(var e,a=1,r=arguments.length;a<r;a++)for(var s in e=arguments[a],e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},u.apply(this,arguments)};Object.create;Object.create;function l(t){return t.toLowerCase()}var c=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],p=/[^A-Z0-9]+/gi;function d(t,e){void 0===e&&(e={});var a=e.splitRegexp,r=void 0===a?c:a,s=e.stripRegexp,i=void 0===s?p:s,n=e.transform,o=void 0===n?l:n,u=e.delimiter,d=void 0===u?" ":u,v=f(f(t,r,"$1\0$2"),i,"\0"),y=0,h=v.length;while("\0"===v.charAt(y))y++;while("\0"===v.charAt(h-1))h--;return v.slice(y,h).split("\0").map(o).join(d)}function f(t,e,a){return e instanceof RegExp?t.replace(e,a):e.reduce((function(t,e){return t.replace(e,a)}),t)}function v(t,e){var a=t.charAt(0),r=t.substr(1).toLowerCase();return e>0&&a>="0"&&a<="9"?"_"+a+r:""+a.toUpperCase()+r}function y(t,e){return void 0===e&&(e={}),d(t,u({delimiter:"",transform:v},e))}function h(t,e){return 0===e?t.toLowerCase():v(t,e)}function m(t,e){return void 0===e&&(e={}),y(t,u({transform:h},e))}var b=a("323e"),g=a.n(b),w=a("a1a1"),S=a("d4e3"),x=a("2726"),C=a("5e45"),T={name:"Search",components:{TrackList:w["a"],MvRow:S["a"],CoverRow:x["a"],ButtonTwoTone:C["a"]},data:function(){return{show:!1,result:[],hasMore:!0}},computed:{keywords:function(){return this.$route.params.keywords},type:function(){return m(this.$route.params.type)},typeNameTable:function(){return{musicVideos:"MV",tracks:"歌曲",albums:"专辑",artists:"艺人",playlists:"歌单"}}},methods:{fetchData:function(){var t=this,e={musicVideos:1004,tracks:1,albums:10,artists:100,playlists:1e3};return Object(o["a"])({keywords:this.keywords,type:e[this.type],offset:this.result.length}).then((function(e){var a,r,s,n,o,u;switch(e=e.result,t.hasMore=null===(a=e.hasMore)||void 0===a||a,t.type){case"musicVideos":(r=t.result).push.apply(r,Object(i["a"])(e.mvs)),e.mvCount<=t.result.length&&(t.hasMore=!1);break;case"artists":(s=t.result).push.apply(s,Object(i["a"])(e.artists));break;case"albums":(n=t.result).push.apply(n,Object(i["a"])(e.albums)),e.albumCount<=t.result.length&&(t.hasMore=!1);break;case"tracks":(o=t.result).push.apply(o,Object(i["a"])(e.songs)),t.getTracksDetail();break;case"playlists":(u=t.result).push.apply(u,Object(i["a"])(e.playlists));break}g.a.done(),t.show=!0}))},getTracksDetail:function(){var t=this,e=this.result.map((function(t){return t.id}));0!==e.length&&Object(n["c"])(e.join(",")).then((function(e){t.result=e.songs}))}},created:function(){this.fetchData()}},k=T,_=(a("2a72"),a("2877")),j=Object(_["a"])(k,r,s,!1,null,"78775f2f",null);e["default"]=j.exports},"862d":function(t,e,a){},bda3:function(t,e,a){},c19a:function(t,e,a){},d0ff:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var r=a("b680");function s(t){if(Array.isArray(t))return Object(r["a"])(t)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0");function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var n=a("dde1");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return s(t)||i(t)||Object(n["a"])(t)||o()}},d4e3:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mv-row",class:{"without-padding":t.withoutPadding}},t._l(t.mvs,(function(e){return a("div",{key:t.getID(e),staticClass:"mv"},[a("div",{staticClass:"cover",on:{mouseover:function(a){t.hoverVideoID=t.getID(e)},mouseleave:function(e){t.hoverVideoID=0},click:function(a){t.goToMv(t.getID(e))}}},[a("img",{attrs:{src:t.getUrl(e)}}),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.hoverVideoID===t.getID(e),expression:"hoverVideoID === getID(mv)"}],staticClass:"shadow",style:{background:"url("+t.getUrl(e)+")"}})])],1),a("div",{staticClass:"info"},[a("div",{staticClass:"title"},[a("router-link",{attrs:{to:"/mv/"+t.getID(e)}},[t._v(t._s(t.getTitle(e)))])],1),a("div",{staticClass:"artist",domProps:{innerHTML:t._s(t.getSubtitle(e))}})])])})),0)},s=[],i=(a("99af"),a("b0c0"),a("ac1f"),a("5319"),{name:"CoverVideo",props:{mvs:Array,subtitle:{type:String,default:"artist"},withoutPadding:{type:Boolean,default:!1}},data:function(){return{hoverVideoID:0}},methods:{goToMv:function(t){var e={};void 0!==this.$parent.player&&(e={autoplay:this.$parent.player.playing}),this.$router.push({path:"/mv/"+t,query:e})},getUrl:function(t){var e,a,r=null!==(e=null!==(a=t.imgurl16v9)&&void 0!==a?a:t.cover)&&void 0!==e?e:t.coverUrl;return r.replace(/^http:/,"https:")+"?param=464y260"},getID:function(t){return void 0!==t.id?t.id:void 0!==t.vid?t.vid:void 0},getTitle:function(t){return void 0!==t.name?t.name:void 0!==t.title?t.title:void 0},getSubtitle:function(t){if("artist"===this.subtitle){var e="null",a=0;return void 0!==t.artistName?(e=t.artistName,a=t.artistId):void 0!==t.creator&&(e=t.creator[0].userName,a=t.creator[0].userId),'<a href="/#/artist/'.concat(a,'">').concat(e,"</a>")}if("publishTime"===this.subtitle)return t.publishTime}}}),n=i,o=(a("20e9"),a("2877")),u=Object(o["a"])(n,r,s,!1,null,"71b4f1ff",null);e["a"]=u.exports},dad3:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var r=a("b775"),s=a("cf45");function i(t){return Object(r["a"])({url:"/search",method:"get",params:t}).then((function(t){var e;return void 0!==(null===(e=t.result)||void 0===e?void 0:e.song)&&(t.result.song.songs=Object(s["e"])(t.result.song.songs)),t}))}}}]);
//# sourceMappingURL=chunk-2e3d2dd5.14fea5dc.js.map