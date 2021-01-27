// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      msg:"靠靠靠靠靠靠靠?",
      word:"哈哈哈哈哈哈哈",
      count:"10086",
      flag:!!0,
      isshow:true
  },
  countAdd(){
      this.setData({
          count:++this.data.count,
        
       
      })
  },
  shows:function(){
this.setData({
    isshow:!this.data.isshow,
 
})

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})