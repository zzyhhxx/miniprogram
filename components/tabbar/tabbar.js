// components/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:['最新','流行','精选']
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentItem:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    choose(e) {
      const index = e.currentTarget.dataset.ind
      this.setData({
        currentItem:index
      })
      this.triggerEvent("choose",{value:index})
    }
  }
})
