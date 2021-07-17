
export default function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      data: options.data,
      method: 'GET',
      header: {
        'content-type':'appication-json'
      },
      success: resolve,
      fail: function() {
        reject('网络请求错误')
      }
    })
  })
}