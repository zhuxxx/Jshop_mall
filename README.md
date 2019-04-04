# Jshop小程序商城


#### 项目介绍
Jshop小程序商城，是一款开源的电商系统，包含微信小程序和H5端，为大中小企业提供移动电子商务优秀的解决方案。

后台采用Thinkphp5.1框架开发，执行效率、扩展性、稳定性值得信赖。并且Jshop小程序商城上手难度低，可大量节省定制化开发周期。

前台H5使用Vue开发，在页面的打开和渲染效率上更快，下单流程流畅自然，可大大增加用户体验，提升订单量。

强大的促销引擎，多种促销方式自由搭配，满足各种场景的促销方式需求，做活动更灵活简单，并且在促销的扩展上也非常方便。


### 最新2.0版本介绍
后台框架升级到Thinkphp5.1最新版本5.1.35 LTS，如果thinkphp5.1有更新，可以直接执行 单独更新tp5.1 的命令。

Jshop小程序商城2.0后台UI采用layuiAdmin，多Tab操作更方便，更加美观大方，非常感谢layerui团队的精美作品。

新增uni-app简约前台H5+小程序模板，全新UI设计，更多交互细节，我们倾尽全力为您提供更加流畅舒爽的体验，后续会对这套模板进行APP以及支付宝等小程序兼容。


#### 关于开源
这不是一款免费的系统，商用记得授权哦。

之所以不彻底免费，一方面是可以让我们有持续维护下去的动力和资源，另外一方面也是不想让您有后顾之忧，避免后期尴尬。

我们的团队水平有限，也是在探索中学习，在改进。之所以开源，就是为了方便大家，也是为了提升下该项目的质量，我们相信有您的参与，可以使我们的系统更加完善和健壮。

#### 功能介绍

 + 商品管理，单规格、多规格商品管理，品牌、分类管理、商品评价
 + 订单管理，订单支付、发货、取消、售后等
 + 会员管理，会员列表，消息管理等
 + 运营管理，广告管理、文章管理
 + 微信管理，小程序管理、微信公众号管理、模板列表、公众号菜单管理
 + 促销管理，商品促销、订单促销、优惠券、团购秒杀
 + 财务管理，支付单、退款单管理、提现管理、账户资金管理
 + 控制面板，计划任务、插件、图片、地区、消息、店铺配置、支付方式、配送方式、物流公司管理。信任登录插件、阿里云OSS插件、阿里云短信插件、微信消息模板插件、分销功能
 + 门店管理，门店列表。门店核销、店员管理、提货单管理。
 + 智能表单，表单列表、表单统计、表单提交管理、表单小程序码等
 + 统计报表，商品销量统计、财务收款统计、订单销量统计



#### H5端说明
H5端采用Vue开发，数据和页面分离，封装APP时体验效果也更好。H5端可以放在离客户最近的地方，比如单独服务器、电脑桌面、PAD、手机、广告机等。

#### 智能表单说明
智能表单包含有：订单、付款码、留言、反馈、登记、调研这几种类型，可实现店铺收款、门店内扫码下单、活动预约、活动预定、会议登记、在线报名、上课签到等等。

智能表单可以为您的线上线下结合提供更强大的助力。

#### 项目演示
- 前台H5演示：[https://b2c.jihainet.com/](https://b2c.jihainet.com/)
- 后台演示：[https://b2c.jihainet.com/manage/](https://b2c.jihainet.com/manage/)
- QQ交流群：823732583（开发手册、接口文档、操作手册请进群查看哦~）
- 交流社区：[https://bbs.jihainet.com/](https://bbs.jihainet.com/)
- 小程序体验二维码

![输入图片说明](https://images.gitee.com/uploads/images/2018/1018/184408_a1c0d706_8503.jpeg "gh_03bc4364b4dc_344.jpg")

- 安卓APP体验二维码【可进群下载体验】

![输入图片说明](https://images.gitee.com/uploads/images/2018/1026/163026_31132341_8503.png "1540542519.png")



#### 项目截图
![输入图片说明](https://images.gitee.com/uploads/images/2018/1019/104933_383a7831_8503.png "img(1).png")
#### 后台截图
![输入图片说明](https://images.gitee.com/uploads/images/2018/1019/104952_d154e8b4_8503.png "首页.png")
![输入图片说明](https://images.gitee.com/uploads/images/2018/1019/105206_a2dfa9e2_8503.png "商品列表.png")
![输入图片说明](https://images.gitee.com/uploads/images/2018/1019/105222_7caa99b6_8503.png "添加商品.png")
![输入图片说明](https://images.gitee.com/uploads/images/2018/1019/105317_82da6a34_8503.png "添加优惠券.png")


#### 目录结构
初始的目录结构如下：
~~~
wwwroot  WEB部署目录（或者子目录）
├─addons                应用插件目录
├─application           应用目录
│  ├─api                api接口模块目录
│  ├─b2c                前台模块
│  ├─common             公共模块目录
│  ├─crontab            定时任务目录
│  ├─job                任务队列目录
│  ├─manage             后台管理目录
│  ├─wechat             接收微信消息目录
│  ├─command.php        命令行工具配置文件
│  ├─common.php         公共函数文件
│  ├─tags.php           应用行为扩展定义文件
│
├─config                配置文件目录
├─h5                    前台H5源码
├─public                WEB目录（对外访问目录）
│  ├─install            自动安装目录
│  ├─static             前台静态文件
│  ├─wap                前台手机端运行目录
│  ├─index.php          入口文件
│  └─.htaccess          用于apache的重写
│
├─thinkphp              thinkphp框架系统目录
├─update                版本升级包
├─extend                扩展类库目录
├─runtime               应用的运行时目录（可写，可定制）
├─vendor                第三方类库目录（Composer依赖库）
├─wechat_app            微信小程序源码
├─build.php             自动生成定义文件（参考）
├─composer.json         composer 定义文件
├─LICENSE.txt           授权说明文件
├─README.md             README 文件
├─think                 命令行入口文件
├─crontab               定时任务命令行入口文件
~~~

#### 更新说明
2019-04-04 v2.0 本次更新属于重大升级更新。强烈建议更新。更新前记得备份以前代码以及数据库哦。
1. 插件优化调整
2. 信任登录调整
3. H5下单流程增加发票
4. H5个人中心增加充值
5. 修复H5注册时不显示头像问题
6. 优化安装程序
7. 优化小程序提示方法，小程序统一替换存储和获取存储方法统一替换错误和正确提示方法
8. 优化小程序搜索和跳转逻辑
9. 阿里云短信通知增加卖家提醒
10. 后台增加卖家备注功能
11. 后台布局调整，优化为layuiadmin ifream多tab布局。
12. H5微信支付同步回调bug修复
13. 修复不能评价问题
14. 修复编辑多区域配送方式报错
15. 修复H5分享bug
16. 修复智能表单问题、修复商品属性问题
17. thinkphp升级为5.1.35 LTS【从本次更新开始，可以单独更新tp框架了】
18. 后台商品分类调整为无限极分类
19. 修复小程序和H5地址区域同名问题
20. 商品分类增加与类型关联
21. 修复微信扩展库curl ipv6问题，强制指向ipv4
22. 修复公众号二级菜单bug
23. 修复H5订单列表样式问题
24. 优化公众号打开H5后登陆，只保留微信授权登录
25. 增加货品图片【感谢@打酱油 贡献代码】
26. 订单评论接口修改
27. H5订单支付结果页修复【感谢@苏芏恺提出此问题】
28. 优化后台异常页面显示
29. 优惠券接口优化
30. 优化H5支付问题
31. 优化接口添加售后数量字段
32. 充值成功后页面跳转页面调整
33. 优化节点添加和编辑必填项问题
34. 优化跨域对OPTIONS的兼容性
35. 接口增加商品评论数量
36. 促销方式增加指定用户等级促销
37. 修复默认地址问题
38. 小程序发票增加开关控制
39. 优化用户的优惠券列表排序调整
40. 修复PHP7.2下表单编辑问题
41. 接口增加省市区获取接口，后台增加省市区缓存功能
42. 接口商品详情页图片以及文章图片优化
43. 我的余额明细bug修复
44. 优化购物车接口和小程序积分开关判断规则
45. 我的提现列表接口优化
46. 添加获取多个广告接口
47. 小程序个人资料修改bug修复【感谢@Linuxpro提出此bug】
48. 增加一些广告位
49. 修复商品分类标签7.2下bug
50. 完善地址库信息。
51. 修复文章分类添加子分类bug
52. 修复地区添加深度问题
53. 修复会员添加编辑时图片上传弹出层问题
54. 修复商品参数切换问题【感谢@千百度提出此问题】
55. 增加uni-app新模板，全新UI设计，全新风格。


2019-03-16 V1.1.4 更新请先备份数据库。
1. h5端商品评论样式调整
2. 智能表单付款码bug修复
3. 智能表单优化，修复已知bug
4. 新增用户等级
5. 小程序只能表单图片裁剪优化
6. 修复_sImage方法导致死循环的bug，感谢@网络小猪 网友提供此bug
7. 商品上面增加阶梯会员价，商品可设置不同的会员价
8. 小程序端，商品详情页优化立即购买流程，增加了返回值的判断
9. 小程序转发图片和描述语修改
10. 修复用户编辑的时候状态如果设置成停用后修改不了的bug。
11. 订单模型优化，优化了订单状态
12. 插件机制优化，增加带模型、视图插件
13. 个人中心增加了积分明细
14. 小程序端在下单的时候，增加了发票信息，下单可以保存发票信息，并在后台显示
15. 小程序端个人中心余额明细增加类型筛选
16. 修复发布公众号菜单时不能发布其他小程序的问题
17. 提货单提货码优化6位不会重复
18. 促销方式优化，在商品详情页和商品列表页显示的更精确
19. 新增快递电子面单打印插件，可单张打印，也可批量打印（发货）
20. 小程序端优化自提等配置参数，走统一配置信息接口
21. h5端商品列表筛选排序bug修复
22. 小程序端我的优惠券列表优化网速过慢时的延迟问题。
23. 小程序端优化登陆状态的代码，登陆在接口端判断即可，具体页面上不做判断了
24. 后台报表统计新增用户收藏统计，感谢网友@别紧张，我不是什么好人！ 提出的此宝贵意见
25. 新增H5百度统计
26. 修复32位mysql统计报表报错问题
27. 修复小程序和H5的订单和优惠券列表重复加载问题
28. 小程序签到积分功能完善
29. 优化H5查看物流信息页面


2019-02-23 V1.1.3 更新请先备份数据库。
1. 微信小程序端模板兼容微信开发者工具新版本，修改navigationBarTextStyle的值
2. 优化后台日志查看功能
3. 商品详情页页面商品详情图片间隙优化
4. 增加订单打印，打印购物单，配货单和联合打印
5. 优化积分和余额变动的情况，当变动为0的时候，不变，并直接返回成功，因为没必要变
6. H5端模板商品列表页修改,增加一级大图分类显示和一级小图分类显示
7. 新增功能“智能表单”，希望能在各个应用场景中帮到大家
8. 优化后台菜单显示地方代码，减少数据库查询次数，感谢网友Michael提出的此问题
9. 优化了物流查询的流程，快递单号前后屏蔽掉了空格，提高识别率，感谢网友小松-18050996693提出的此bug
10. 优化安装流程
11. 后台物流公司列表增加了筛选
12. 新增促销方式，指定商品第几件减指定金额
13. 修复已知的bug

2019-01-26 V1.1.2
1. 修复后台顶部个人中心按钮无法点击的bug
2. 修复H5端订单列表页滚动加载的bug
3. 增加阿里云短信插件给卖家发送短信
4. 修复H5端商品详情评论加载bug
5. 修复H5端登陆密码次数过多，输入验证码bug
6. 修复提货单鱼添加商品分类bug
7. 增加用户提现服务费
8. 修复商品促销bug，指定商品条件的时候，只有一个商品生效，后面的不生效的问题
9. 修复指定分类时的bug
10. 增加订单导出
11. 增加统计报表功能，财务收款，收款单、订单收款、订单退款、充值单以及提现的统计，增加商品销量排行的统计，增加订单销量的统计
12. 我已领优惠券可用状态bug修复
13. 后台列表时间段搜索分隔符统一调整，”~“统一成”到“
14. 优化接口返回空列表的时候，状态位false的问题，空列表有额是true
15. 小程序增加广告url打开页面功能，在微信公众平台指定业务域名之后，可以直接跳转到网页了
16. 后台首页优化操作日志列表，增加”更多“按钮
17. 广告，广告位控制器名称修改，再也不会让浏览器插件屏蔽了
18. 后台各种弹出页面的样式优化
19. 后台需要时间段搜索的一些页面，增加上时间段搜索，使后台表单搜索更友好，功能更强大
20. 后台用户列表积分和余额细节优化
21. 定时任务增加url触发方式，使定时任务执行更灵活，可使用我们的taskPHP方式，现在也可自己配置crontab或计划任务来执行
22. 修复小程序端退换货时快递公司不能输入的bug
23. 修复后台退款单退款方式保存表的bug
24. 优化售后流程，在小程序端订单详情可以查看所对应的售后单了
25. 后台增加操作日志导出
26. 修复添加商品创建时间（ctime）为空的bug
27. 在后台，图片管理的地方，增加图片删除的功能
28. 小程序端商品分类接口优化，只需要一次请求就可以了，切换分类不会再此请求
29. 后台商品批量导入功能优化
30. 后台列表页面优化，高度调整统一
31. 小程序端，优化搜索框、用户邀请和用户提现页面
32. 后台促销列表增加启用/禁用按钮
33. 页面的一些细节调整和优化


2019-01-10 新年好，jshop给大家拜年了。
1. 商品详情页显示购物车数量
2. h5端文章列表页优化，文章分类接口优化，修复排序不生效的问题
3. 微信支付增加二维码扫码支付功能（单纯接口上支持，为PC端微信扫码支付做准备）
4. 支付宝增加PC端支付的功能（单纯接口上支持，为PC端功能做准备）
5. 支付回调优化，增加回调价格校验，增强安全性
6. 后台上传图片bug修复
7. 后台用户列表优化，增加会员导入功能
8. 首页优惠券样式修改
9. 修复小程序端微信地址取过来之后，没有判断默认地址的bug
10. H5端微信分享添加图片
11. 小程序端图片的模式添加，保证图片不拉伸扭曲和变形
12. 商品分类优化
13. 后台新建商品的时候商品编码和货品编码为空的时候没有自动生成的bug
14. 后台订单页面，订单详情页面优化
15. 后台退款单增加单号查询
16. 修复生成订单的时候，商品成本价没有保存到订单详情的bug
17. 统一了店铺配置接口，小程序端和H5端统一用此接口获取店铺配置信息
18. H5端团购秒杀详情页微信分享
19. H5端优惠券列表页面优化
20. 小程序端优惠券列表页面优化
21. 商品列表接口增加商品编码查询功能（可以通过商品编码查询到商品，为首页扫一扫做准备）
22. H5端登陆流程优化，需要token的接口会在请求前拦截并跳转到登陆页面
23. 小程序端商品列表排序优化，感谢QQ群网友@General提供的建议
24. 商品详情页分享功能优化，修复微信分享二维码不出来的bug


2018-12-29 更新内容。更新请先备份数据库。本次更新后，以后版本为不定时更新。
1. 商品详情页增加返回首页操作
2. 购物车显示效果优化
3. 订单详情优化
4. 优化小程序评价评分
5. H5微信jsapi支付修复
6. 商品评价后台显示样式优化
7. 修复未登录生成海报昵称为null问题
8. 微信授权登录增加判断是否微信浏览器
9. 优化个人信息填写
10. 小程序收货地址校检手机号信息
11. 邀请优化
12. 优化unionid登录
13. 促销商品数量bug修复
14. 小程序页面样式优化
15. 创建订单接口bug修复
16. 修复后台添加用户头像问题
17. 导出优化。
18. 库存问题修复
19. 购物车增加店铺名显示
20. 小程序端登录优化
21. 优惠券接口优化
22. 修复提货单店铺名称问题
23. 修复支付单接口查看bug
24. 支付单表优化字段
25. 库存单位优化
26. 优化商品参数显示
27. 增加店员所属门店筛选
28. 更改管理员控制器名称
29. 小程序会员中心订单小标状态优化
30. 小程序充值优化
31. 修复H5购物车点击结算bug

#### 环境要求
- Nginx/Apache/IIS
- PHP5.6+
- MySQL5.5+

建议使用环境：Linux + Nginx1.14 + PHP7 + MySQL5.6

#### 部署说明

[安装部署](https://gitee.com/hnjihai/jshop_mall/wikis/%E5%AE%89%E8%A3%85%E9%83%A8%E7%BD%B2?sort_id=881805)

#### nginx 伪静态配置，apache请勿使用此配置
~~~
    location / {
        if (!-e $request_filename){
            rewrite  ^(.*)$  /index.php?s=$1  last;   break;
        }
    }
~~~
#### 安全&缺陷
如果你发现了一个安全漏洞或缺陷，请发送邮件到 jima@jihainet.com。所有的安全漏洞都将及时得到解决。


#### License

Jshop小程序商城遵循JPPL（吉海科技Jshop系列付费产品许可）协议。

本项目包含的第三方源码和二进制文件之版权信息另行标注。

版权所有Copyright © 2019 by 吉海科技 (https://www.jihainet.com)

All rights reserved。

吉海科技Jshop系列付费产品许可协议详情请参阅 [LICENSE.txt](LICENSE.txt)