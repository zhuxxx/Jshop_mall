(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-distribution-apply"],{"1d58":function(t,e,i){"use strict";var a=i("98d0"),c=i.n(a);c.a},"3cdf":function(t,e,i){"use strict";i.r(e);var a=i("c484"),c=i("e101");for(var n in c)"default"!==n&&function(t){i.d(e,t,function(){return c[t]})}(n);i("1d58");var l=i("2877"),s=Object(l["a"])(c["default"],a["a"],a["b"],!1,null,"c6cc07ac",null);e["default"]=s.exports},"43a7":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".content[data-v-c6cc07ac]{background-color:#ff7159;height:calc(100vh - 44px);padding-top:%?50?%}.apply-c[data-v-c6cc07ac]{margin:%?40?% auto;padding:%?26?% 0;border-radius:%?30?%;-webkit-box-shadow:0 0 10px #aaa;box-shadow:0 0 10px #aaa;width:%?670?%;min-height:%?400?%;background-color:#fff}.apply-top .cell-item[data-v-c6cc07ac]{width:%?610?%}.apply-top .cell-item[data-v-c6cc07ac]:last-child{border-bottom:1px solid #f3f3f3}.apply-top .cell-item .cell-item-hd[data-v-c6cc07ac]{min-width:%?120?%}.apply-top .cell-item .cell-bd-input[data-v-c6cc07ac]{width:100%}.apply-tip[data-v-c6cc07ac]{padding:%?26?%}.apply-bot[data-v-c6cc07ac]{width:100%;text-align:center}.apply-bot .btn[data-v-c6cc07ac]{border-radius:%?50?%;width:90%;margin:%?40?% auto 0}",""])},"98d0":function(t,e,i){var a=i("43a7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var c=i("4f06").default;c("ca69a980",a,!0,{sourceMap:!1,shadowMode:!1})},c179:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("7f7f");var a={data:function(){return{name:"",weixin:"",qq:"",mobile:"",checked:!1,is_agree:"off"}},methods:{agreeAgreement:function(){this.checked?(this.checked=!1,this.is_agree="off"):(this.checked=!0,this.is_agree="on")},checkData:function(t){return t.name?t.weixin?t.qq?t.mobile?11!==t.mobile.length?(this.$common.errorToShow("手机号格式不正确"),!1):"on"==t.agreement||(this.$common.errorToShow("请钩选分销协议"),!1):(this.$common.errorToShow("请输入您的手机号"),!1):(this.$common.errorToShow("请输入您的QQ"),!1):(this.$common.errorToShow("请输入您的微信"),!1):(this.$common.errorToShow("请输入您的姓名"),!1)},goApplyState:function(){var t=this,e={name:this.name,weixin:this.weixin,qq:this.qq,mobile:this.mobile,agreement:this.is_agree};this.checkData(e)&&this.$api.applyDistribution(e,function(e){e.status?t.$common.successToShow(e.msg,function(){uni.navigateTo({url:"./apply_state"})}):t.$common.errorToShow(e.msg)})},goAgreement:function(){uni.navigateTo({url:"./agreement"})}}};e.default=a},c484:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"apply-c"},[i("v-uni-view",{staticClass:"apply-top"},[i("v-uni-view",{staticClass:"cell-group"},[i("v-uni-view",{staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("姓名")])],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-input",{staticClass:"cell-bd-input",attrs:{type:"text",placeholder:"请填您的姓名"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),i("v-uni-view",{staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("微信")])],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-input",{staticClass:"cell-bd-input",attrs:{type:"text",placeholder:"请填您的微信"},model:{value:t.weixin,callback:function(e){t.weixin=e},expression:"weixin"}})],1)],1),i("v-uni-view",{staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("QQ")])],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-input",{staticClass:"cell-bd-input",attrs:{type:"number",placeholder:"请填您的QQ"},model:{value:t.qq,callback:function(e){t.qq=e},expression:"qq"}})],1)],1),i("v-uni-view",{staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("手机")])],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-input",{staticClass:"cell-bd-input",attrs:{type:"number",placeholder:"请填写您的手机号码"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}})],1)],1)],1),i("v-uni-view",{staticClass:"apply-tip color-6 fsz26"},[i("v-uni-label",{staticClass:"radio",on:{click:function(e){e=t.$handleEvent(e),t.agreeAgreement(e)}}},[i("v-uni-radio",{attrs:{value:"1",checked:t.checked,color:"#FF7159"}}),t._v("我已经阅读并接受")],1),i("v-uni-text",{on:{click:function(e){e=t.$handleEvent(e),t.goAgreement()}}},[t._v('"分销协议"')])],1)],1),i("v-uni-view",{staticClass:"apply-bot"},[i("v-uni-button",{staticClass:"btn btn-square btn-o btn-all",attrs:{"hover-class":"btn-hover"},on:{click:function(e){e=t.$handleEvent(e),t.goApplyState()}}},[t._v("申请成为分销")])],1)],1)],1)},c=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return c})},e101:function(t,e,i){"use strict";i.r(e);var a=i("c179"),c=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=c.a}}]);