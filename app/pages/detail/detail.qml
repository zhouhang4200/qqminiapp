<view class="search" qq:if="{{isSearch}}">
  <view class="top-search">
    <view class="search-box">
      <icon type="search" size="16" color="#cccccc" class="search-icon" />
      <input class="search-input" placeholder="搜索" type="text" focus="{{true}}" bindinput="bindChangeInput"
        value="{{inputVal}}" />
      <icon type="cancel" size="16" color="#cccccc" bindtap="bindClear" hidden="{{hide}}" class="search-clear" />
    </view>
    <text class="search-text" bindtap="bindSearch">搜索</text>
  </view>
  <view class="search-feed">
    <block qq:if="{{searchdata.length>0}}" qq:for="{{searchdata}}" qq:key="index">
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
  </view>
</view>

<view class="detail">
  <view class="detail-video video-item" qq:if="{{isVideo}}">

    <view class="item-poster" bindtap="bindPlayVideo">
      <video id="myVideo" src="{{video.url}}" controls="{{true}}" autoplay="{{true}}" event-model="bubble">
        <cover-view class="controls">
          <cover-view class="time">{{video.play_time}}</cover-view>
          <cover-view class="play_icon">
            <cover-image src="../../static/image/icon_play.png"></cover-image>
          </cover-view>
          <cover-image class="poster" src={{video.thumb}}></cover-image>
        </cover-view>
      </video>
    </view>
    <view class="item-detail">
      <text class="title">{{video.title}}</text>
      <view class="item-label">
        <view class="label">
          <text qq:if="{{video.play_count>0}}" class="source">{{video.play_count}}播放</text>
        </view>
        <view class="operation">
          <button open-type="share" data-id="{{video.id}}" share-type="{{2}}" class="qzone" data-qtype="qtype">
            <image src="../../static/image/icon_qzone.png"></image>
          </button>
          <button open-type="share" data-id="{{video.id}}" share-type="{{1}}" class="qfriend" data-qtype="qq">
            <image src="../../static/image/icon_qq.png"></image>
          </button>
        </view>
      </view>
    </view>
  </view>
  <view class="detail-video  video-error" qq:if="{{isError}}">
    <view class="error">
      <image src="../../static/image/video_error.png"></image>
    </view>
  </view>
  <view class="detail-more" qq:if="{{isMore}}">
    <view class="more-top">
      —　更多推荐欣赏　—
    </view>
    <view class="more-feed">
      <block qq:if="{{curdata.length>0}}" qq:for="{{curdata}}" qq:key="index">
        <view class="more-item {{index==0?'first':''}}">
          <view class="item-poster" data-path="{{'/pages/detail/detail?id='+item.id}}" bindtap="bindGoTo">
            <text qq:if="{{item.play_count>0}}" class="count">{{item.play_count}}播放</text>
            <text class="time">{{item.play_time}}</text>
            <view class="play_icon">
              <image src="../../static/image/icon_play.png"></image>
            </view>
            <image class="poster" src={{item.thumb}}></image>
          </view>
          <view class="item-detail">
            <text class="title">{{item.title}}</text>
          </view>
        </view>
      </block>
    </view>
  </view>
</view>

<!-- 
<view class="container log-list">
  <block wx:for="{{logs}}" wx:for-item="log">
    <text class="log-item">{{index + 1}}. {{log}}</text>
  </block>
</view> -->