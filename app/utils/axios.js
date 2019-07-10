var axios = {
  isProxy: true,
  bastUrl: 'https://mini.adhei.com',
  pbastUrl: 'https://easy-mock.com/mock/5d22efdb8ad5ce4c827aa874/miniapp_jrhk',
  get(param) {
    var bastUrl = axios.bastUrl;
    if (axios.isProxy) {
      bastUrl = axios.pbastUrl;
    }
    var url = bastUrl + param.url;
    var data = param.data || {};
    var uuid = qq.getStorageSync('uuid');
    if (!uuid) {
      uuid = 1;
      qq.setStorageSync('uuid', uuid);
    }
    data.uuid = uuid;
    qq.showLoading({
      title: '加载中'
    });
    qq.request({
      url: url, // 仅为示例，并非真实的接口地址
      data: data,
      method: param.method || 'GET',
      dataType: param.dataType || 'json',
      success(res) {
        qq.hideLoading();
        if (res.statusCode == 200) {
          var data = res.data;
          if (data.status == 'success') {
            param.success(data.data);
          } else {
            axios.error(data.info);
          }
        } else {
          axios.error(res);
        }
      }
    });
  },
  post(param) {
    param.method = 'POST';
    axios.get(param);
  },
  error(e) {
    qq.showToast({
      title: '网络出现异常，请重新操作',
      icon: 'none',
      duration: 2000
    });
    console.log(e);
  }
};

module.exports = {
  get: axios.get,
  post: axios.post
};
