<view class="watch">
  <view class="watch-top">
    <button qq:if="{{!hasUserInfo && canIUse}}" open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称
    </button>
    <block qq:else>
      <image bindtap="bindViewTap" class="userinfo-avatar" src="{{userInfo.avatarUrl}}" mode="cover"></image>
      <text class="userinfo-nickname">{{userInfo.nickName}}</text>
    </block>
  </view>
  <view class="watch-main">
    <block qq:if="{{navCate.length>0}}" qq:for="{{navCate}}" qq:key="index">
      <view class="watch-item {{index==0?'first':''}}">
        <view class="item-top">
          <text class="cate-name">{{item.name}}</text>
        </view>
        <view class="item-main">
          <block qq:for="{{item.children}}" qq:key="{{child.id}}" qq:for-item="child">
            <view class="item-btn {{child.isWatch?'hover':''}}" data-id="{{child.id}}" bindtap="bindCate">{{child.name}}
            </view>
          </block>
        </view>
      </view>
    </block>
  </view>



</view>