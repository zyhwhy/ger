// pages/phone/phone.js
const db = wx.cloud.database();  // 链接云数据库  
function getphone(){
  db.collection("zyh-phone")
        .where({

        })
        .get()
        .then(res=>{
            console.log(res)
            this.setData({
              list:res.data
            })
            console.log(this.data.list)
            
        })
        .catch(err=>{
            console.log(err)
        })

}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    name:'',
    phone:'',

  },
  updata(e){
    console.log(e)
    var item = e.target.dataset.item
    wx.navigateTo({
      url: '../updataphone/updataphone?_id='+item._id,
    })


  },
  dele(e){
    console.log(e.currentTarget.dataset)
    const name=e.currentTarget.dataset.item.name
    wx.showModal({
      title: '提示',
      content: '是否确认删除',
      success:(res) =>{
        if (res.confirm) {
          //解绑
          console.log('已经删除')
          db.collection("zyh-phone")
          .where({
              name:name
          })
          .remove()
          .then(res=>{
            var list1 = this.data.list.filter(item=>item.name!=name)
                        this.setData({
                            list:list1
                        })
  
          })
        }
      }
  })

 
},

  /**
   * 生命周期函数--监听页面加载
   */
  tophone(){
    if(this.data.name&&this.data.phone){
    console.log(this.data.name)
    db.collection("zyh-phone")
        .add({
            data:{
             name:this.data.name,
             phone:this.data.phone
            }
        }).then(res=>{
            console.log(res)
            wx.addPhoneContact({
              firstName: this.data.name,
              mobilePhoneNumber:this.data.phone
            })
            db.collection("zyh-phone")
            .where({
    
            })
            .get()
            .then(res=>{
                console.log(res)
                this.setData({
                  list:res.data
                })
                console.log(this.data.list)
                
            })
            .catch(err=>{
                console.log(err)
            })
        })
        
      }
      else{
       console.log('输入不可为空')
      }
  },

  onLoad: function (options) {
    db.collection("zyh-phone")
        .where({

        })
        .get()
        .then(res=>{
            console.log(res)
            this.setData({
              list:res.data
            })
            console.log(this.data.list)
            
        })
        .catch(err=>{
            console.log(err)
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