<view>
  <view style="width:100%;height:{{statusBarHeight+44}}px">
    <view class="navbar" style="top:{{statusBarHeight}}px;">
      <icon class="search" type="search" size="20" color="#FF6525" bindtap="bindSearch" />
      <view class="title">今日好看</view>
    </view>
  </view>
  <view class="breadcrumb">
    <view class="navCate">
      <view class="left">
        <view class="cate {{cur==index?'cur':''}}" qq:for="{{navCate}}" qq:key="index">{{item.name}}</view>
      </view>
      <view class="right">
        <image src="../../static/image/icon_cate.png"></image>
      </view>
    </view>
    <scroll-view class="navSubCate" scroll-x={{true}}>
      <view class="subCate {{cur==index?'cur':''}}" qq:for="{{navSubCate}}" qq:key="index">{{item.name}}</view>
    </scroll-view>
  </view>

  <view class="container">
    <view class="userinfo">
      <button wx:if="{{!hasUserInfo && canIUse}}" open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称
      </button>
      <block wx:else>
        <image bindtap="bindViewTap" class="userinfo-avatar" src="{{userInfo.avatarUrl}}" mode="cover"></image>
        <text class="userinfo-nickname">{{userInfo.nickName}}</text>
      </block>
    </view>
    <view class="usermotto">
      <text class="user-motto">{{motto}}</text>
    </view>
    <navigator url="/pages/logs/logs" open-type="navigate">
      日志
    </navigator>
  </view>
</view>