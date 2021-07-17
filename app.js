// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // code只有五分钟有效
        // console.log(res)
        console.log(wx.getStorageSync('log'))
      }
    })
  },
  globalData: {
    userInfo: null
  },
  __get(url, data, callBack) {
    wx.request({
      url,
      header:{
        'content-type': 'application/json'
      },
      method:'GET',
      data,
      success(res){
        callBack(res)
      },
      fail() {
        throw new Error("网络请求失败")
      },
      complete() {
      }
    })
  },
  __post() {

  }
})
