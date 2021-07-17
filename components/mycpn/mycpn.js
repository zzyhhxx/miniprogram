


// components/mycpn/mycpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    foo:{
      type: Array,
      value:[],
      observer(newval, oldval){
        console.log(newval.__proto__ == Array.prototype)
        console.log(newval, oldval)
      }
    }
  },
  externalClasses:['titleclass'],

  /**
   * 组件的初始数据
   */
  data: {
    text:'这是我的自定义组件哈哈哈'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    btnClick(){
      console.log('哈哈哈我被电了')
    }
  }
})
