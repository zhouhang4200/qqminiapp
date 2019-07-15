var axios = {
  isProxy: true,
  bastUrl: 'https://mini.adhei.com',
  pbastUrl: 'http://api.miniapp.test/api',
  get(uri, param) {
    var bastUrl = axios.bastUrl;
    if (axios.isProxy) {
      bastUrl = axios.pbastUrl;
    }
    param = param || {};
    var url = bastUrl + uri;
    var data = param.data || {};
    var token = qq.getStorageSync('token');
    if (token) {
      data.token = token;
    }
    param.showLoading = typeof param.showLoading === 'undefined' ? true : param.showLoading;
    if (param.showLoading) {
      qq.showLoading({
        title: '加载中'
      });
    }
    return new Promise((resolve, reject) => {
      qq.request({
        url: url, // 仅为示例，并非真实的接口地址
        data: data,
        method: param.method || 'GET',
        dataType: param.dataType || 'json',
        success(res) {
          qq.hideLoading();
          if (res.statusCode == 200) {
            var data = res.data;
            if (data.status == 0) {
              resolve(data.data);
            } else {
              reject(data.info);
              axios.error(data.info);
            }
          } else {
            reject(res);
            axios.error(res);
          }
        },
        fail(e) {
          qq.hideLoading();
          reject(e);
          axios.error(e);
        }
      });
    });
  },
  post(uri, param) {
    param.method = 'POST';
    return axios.get(uri, param);
  },
  error(e) {
    qq.showToast({
      title: '网络出现异常，请重新操作',
      icon: 'none',
      duration: 2000
    });
  }
};

module.exports = {
  get: axios.get,
  post: axios.post
};
