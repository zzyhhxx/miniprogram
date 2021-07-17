// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowTime:"",
    active:false,
    score:0,
    movies: ['海尔兄弟','海贼王','海上上海'],
    counter:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleTimeString()
      })
    }, 1000);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  btnClick() {
    console.log("dianji")
  },
  activeBox() {
    console.log("dianjidddd")
    this.setData({
      active:!this.data.active
    })
  },
  getScore(e) {
    this.setData({
      score:e.detail.value
    })
  },
  moviesClick(e) {
    console.log(e.currentTarget.dataset.item)
  },
  increament(e) {
    console.log(e)
    this.setData({
      counter:++this.data.counter
    })
  }
})