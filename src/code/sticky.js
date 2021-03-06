let code = {};

code.import = `
"usingComponents": {
    "i-sticky": "../../dist/sticky/index",
    "i-sticky-item": "../../dist/sticky-item/index"
}
`;
code.usage = `
<view class="i-sticky-demo-des">
    注: 1.由于组件内部不能使用onPageScroll,导致不能监听scrollTop值只能通过用户用props传递。
</view>
<view class="i-sticky-demo-des">
    2.在微信开发客户端显示的时候会有bug。不停计算scrollTop值不能同步
</view>
<view class="i-sticky-demo">
    <i-sticky scrollTop="{{scrollTop}}">
        <i-sticky-item i-class="i-sticky-demo-title">
            <view slot="title">
                逻辑层
            </view>
            <view slot="content">
                <view class="i-sticky-demo-item">注册程序</view>
                <view class="i-sticky-demo-item">场景值</view>
                <view class="i-sticky-demo-item">注册页面</view>
                <view class="i-sticky-demo-item">路由</view>
                <view class="i-sticky-demo-item">模块化</view>
                <view class="i-sticky-demo-item">API</view>
            </view>
        </i-sticky-item>
        <i-sticky-item i-class="i-sticky-demo-title">
            <view slot="title">
                视图层
            </view>
            <view slot="content">
                <view class="i-sticky-demo-item">注册程序</view>
                <view class="i-sticky-demo-item">场景值</view>
                <view class="i-sticky-demo-item">注册页面</view>
                <view class="i-sticky-demo-item">路由</view>
                <view class="i-sticky-demo-item">模块化</view>
                <view class="i-sticky-demo-item">API</view>
            </view>
        </i-sticky-item>
        <i-sticky-item i-class="i-sticky-demo-title">
            <view slot="title">
                自定义组件
            </view>
            <view slot="content">
                <view class="i-sticky-demo-item">注册程序</view>
                <view class="i-sticky-demo-item">场景值</view>
                <view class="i-sticky-demo-item">注册页面</view>
                <view class="i-sticky-demo-item">路由</view>
                <view class="i-sticky-demo-item">模块化</view>
                <view class="i-sticky-demo-item">API</view>
                <view class="i-sticky-demo-item">注册程序</view>
                <view class="i-sticky-demo-item">场景值</view>
                <view class="i-sticky-demo-item">注册页面</view>
                <view class="i-sticky-demo-item">路由</view>
                <view class="i-sticky-demo-item">模块化</view>
                <view class="i-sticky-demo-item">API</view>
            </view>
        </i-sticky-item>
        <i-sticky-item i-class="i-sticky-demo-title">
            <view slot="title">
                插件
            </view>
            <view slot="content">
                <view class="i-sticky-demo-item">注册程序</view>
                <view class="i-sticky-demo-item">场景值</view>
                <view class="i-sticky-demo-item">注册页面</view>
                <view class="i-sticky-demo-item">路由</view>
                <view class="i-sticky-demo-item">模块化</view>
                <view class="i-sticky-demo-item">API</view>
                <view class="i-sticky-demo-item">注册程序</view>
                <view class="i-sticky-demo-item">场景值</view>
                <view class="i-sticky-demo-item">注册页面</view>
                <view class="i-sticky-demo-item">路由</view>
                <view class="i-sticky-demo-item">模块化</view>
                <view class="i-sticky-demo-item">API</view>
                <view class="i-sticky-demo-item">注册程序</view>
                <view class="i-sticky-demo-item">场景值</view>
                <view class="i-sticky-demo-item">注册页面</view>
                <view class="i-sticky-demo-item">路由</view>
                <view class="i-sticky-demo-item">模块化</view>
                <view class="i-sticky-demo-item">API</view>
            </view>
        </i-sticky-item>
    </i-sticky>
</view>
`;

code.js = `
Page({
    data : {
        scrollTop : 0
    },
    onChange(event){
        console.log(event.detail,'click right menu callback data')
    },
    //页面滚动执行方式
    onPageScroll(event){
        this.setData({
            scrollTop : event.scrollTop
        })
    }
});
`;

export default code;