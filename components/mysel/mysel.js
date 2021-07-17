// components/mysel/mysel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    counter:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    increamentCounter(num) {
      const nn = parseInt(num)
      if(nn.__proto__ === Number.prototype && !isNaN(nn)){
        this.setData({
          counter:this.data.counter + nn
        })
      }else {
        console.log("不是数字")
      }
    }
  }
})
