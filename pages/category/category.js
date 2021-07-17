// pages/category/category.js
const app = getApp()
import request from '../../network/network'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentItem:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onload')
    // request({
    //   url:'https://www.codepiece.cn/index.php/api/data/getMultidata',
    //   data: {
    //     multidata: '1'
    //   }
    // }).then(res => {
    //   console.log(res,'category111')
    // }).catch(err => {
    //   console.log(err)
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onready')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onshow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onhide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onunload')
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
  choose(e) {
    this.setData({
      currentItem:e.detail.value
    })
  },
  increament() {
    const com = this.selectComponent("#counter")
    console.log(com)
    com.increamentCounter('avc')
  },
  getData() {
    try{
      app.__get('https://www.codepiece.cn/index.php/api/data/getMultidata',{
        multidata: '1'
      },function(res) {
        console.log(res)
      })
    }catch(err){
      console.log(err,'错误')
    }
  },
  showToast() {
    wx.showToast({
      title: '嘿嘿嘿',
      duration: 2000,
      icon:'loading',
      // mask:true
    })
  },
  showModel() {
    wx.showModal({
      title: '温馨提示',
      content: '请不要瞎点',
      cancelColor: 'cancelColor',
      success(res) {
        if(res.confirm) {
          console.log('点击了确定')
        }else if(res.cancel){
          console.log('点击了取消')
        }
      }
    })
  },
  showLoading() {
    wx.showLoading({
      title: '玩命加载中...',
    })
  },
  hideLoading() {
    wx.hideLoading({
      success: (res) => {
        console.log('取消加载了')
      },
    })
  },
  showActionSheet() {
    wx.showActionSheet({
      itemList: ['aaa','bbb','ccc'],
      success(res) {
        console.log(res)
      }
    })
  }
})