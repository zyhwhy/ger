// pages/mine/mine.js
const db = wx.cloud.database();  // 链接云数据库  

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    //查询
    db.collection('zyh-user')
    .where({

    }).get()
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
    db.collection("zyh-user")
        .add({
            data:{
                username:"huahua1",
                pasword:"000000",
                age:30
            }
        }).then(res=>{
            console.log(res)
        })
        db.collection("zyh-user")
        .where({
            username:"zyh"
        })
        .update({
            data:{
                age:25,
                userpwd:"abc123"
            }
        })
        .then(res=>{
            console.log(res)
        })

        db.collection("zyh-user")
        .where({
            username:"huahua1"
        })
        .remove()
        .then(res=>{
            console.log(res)
        })





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