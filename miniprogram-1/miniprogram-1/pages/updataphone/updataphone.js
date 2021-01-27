// pages/updataphone/updataphone.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"",
    name:"",
    _id:""

  },
  updateContact(){
    wx.showLoading({
        title: '请求中...',
    })

    db.collection("zyh-phone")
    .where({
        _id:this.data._id,
    })
    .update({
        data:{
            name:this.data.name,
            phone:this.data.phone,
         
        }
    }).then(res=>{
        wx.hideLoading({
          success: (res) => {
            wx.navigateTo({
              url: '../phone/phone',
            })
          },
        })

        wx.navigateBack({
          delta: 0,
        })
    })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
        // 获取这条数据的详细信息 
        wx.showLoading({
            title: '请求中...',
        })
        db.collection("zyh-phone")
        .where({
            _id:options._id
        })
        .get()
        .then(res=>{
            console.log(res)
            wx.hideLoading({
              success: (res) => {},
            })
            this.setData({
                name:res.data[0].name,
                phone:res.data[0].phone,
                _id:res.data[0]._id
            
            })

            wx.setNavigationBarTitle({
              title: '修改通讯录('+res.data[0].uname+')',
            })

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