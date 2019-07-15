<view class="page">
  <view class="top">
    <view class="navbar" style="margin-top:{{statusBarHeight}}px;">
      <icon class="search" type="search" size="20" color="#FF6525" bindtap="bindGoTo" data-path="/pages/detail/detail" />
      <view class="title">今日好看</view>
    </view>
    <view class="breadcrumb">
      <view class="navCate">
        <view class="left">
          <view bindtap="bindNavCate" data-navtype="cur" data-cur="{{item.id}}" class="cate {{cur==item.id?'cur':''}}"
            qq:for="{{navCate}}" qq:key="index">{{item.name}}</view>
        </view>
        <view class="right" bindtap="bindGoTo" data-path="">
          <image src="../../static/image/icon_cate.png"></image>
        </view>
      </view>
      <scroll-view class="navSubCate" scroll-x={{true}} qq:if="{{navSubCate.length>1}}">
        <view bindtap="bindNavCate" data-navtype="subcur" data-cur="{{item.id}}"
          class="subCate {{subcur==item.id?'cur':''}}" qq:for="{{navSubCate}}" qq:key="index">{{item.name}}</view>
      </scroll-view>
    </view>
  </view>
  <view class="feed" style="margin-top:{{statusBarHeight+44}}px;" qq:if="{{showFeed}}">
    <block qq:if="{{curdata.length>0}}" qq:for="{{curdata}}" qq:key="index">
      <view class="feed-item {{index==0?'first':''}}">
        <view class="item-poster" data-path="{{'/pages/detail/detail?id='+item.id}}" bindtap="bindGoTo">
          <text class="title">{{item.title}}</text>
          <text qq:if="{{item.play_count>0}}" class="count">{{item.play_count}}播放</text>
          <text class="time">{{item.play_time}}</text>
          <view class="play_icon">
            <image src="../../static/image/icon_play.png"></image>
          </view>
          <image class="poster" src={{item.thumb}}></image>
        </view>
        <view class="item-detail">
          <view class="label">
            <text class="source">{{item.source_name}}</text>
          </view>
          <view class="operation">
            <button open-type="share" data-id="{{item.id}}" share-type="{{2}}" class="qzone" data-qtype="qtype">
              <image src="../../static/image/icon_qzone.png"></image>
            </button>
            <button open-type="share" data-id="{{item.id}}" share-type="{{1}}" class="qfriend" data-qtype="qq">
              <image src="../../static/image/icon_qq.png"></image>
            </button>
          </view>
        </view>
      </view>
    </block>
    <view class="watch" qq:if="{{isOneByWatch!=1&&cur=='gz'&&navSubCate.length==1}}">
      <view class="watch-title">
        <text>您还没有关注的人</text>
        <text>快去推荐内容中寻找吧</text>
      </view>
      <view class="watch-btn">
        <button wx:if="{{!hasUserInfo}}" open-type="getUserInfo" bindgetuserinfo="getUserInfo">去关注</button>
        <button wx:if="{{hasUserInfo}}" bindtap="bindGoTo" data-path="">去关注</button>
      </view>
    </view>
  </view>

  <!-- <view class="container">
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
  </view> -->
</view>
<view class="modal" bindtap="bindOnceByWatch" qq:if="{{isOneByWatch==1}}">
  <view class="watch-mark" style="margin-top:{{statusBarHeight+44}}px;">
    <image src="../../static/image/noviceguide.png"></image>
  </view>
</view>