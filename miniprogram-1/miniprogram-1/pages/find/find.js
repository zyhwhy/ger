// pages/find/find.js
function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length === 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
Page({

  /**
   * 页面的初始数据
   */
  inputValue: '',
  data: {
    banner:[
      'http://47.104.209.44/base/img/1.jpg',
      'http://47.104.209.44/base/img/2.jpg',
      'http://47.104.209.44/base/img/3.jpg',
      'http://47.104.209.44/base/img/4.jpg',
      'http://47.104.209.44/base/img/5.jpg'
  ],
    show:true,
    precent:0,
    poster:'../../images/AD4.png',
    name:"hahahahahah",
    author:'zzzzzz',
    src:'http://47.104.209.44/mp/Sugar.mp3',
    src1: '',
    danmuList:
    [{
      text: '第 1s 出现的弹幕',
      color: '#ff0000',
      time: 1
    }, {
      text: '第 3s 出现的弹幕',
      color: '#ff00ff',
      time: 3
    }],



  },
  
  audioPlay(){
    this.audioCtx.play()
  },
  audioPaus(){
    this.audioCtx.pause()

  },
  bindInputBlur(e) {
    this.inputValue = e.detail.value
  },
  bindButtonTap() {
    const that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success(res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindVideoEnterPictureInPicture() {
    console.log('进入小窗模式')
  },

  bindVideoLeavePictureInPicture() {
    console.log('退出小窗模式')
  },
  bindPlayVideo() {
    console.log('1')
    this.videoContext.play()
  },
  bindSendDanmu() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  videoErrorCallback(e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },

  HandleTimeEnd(){
    
 

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let timer=setInterval(() => {
      if(this.data.precent<=100){
        this.data.precent=this.data.precent+5
      }
      else{
        clearInterval(timer)
        this.setData({
          show:false
        })
      }
      

      
    }, 50);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.audioCtx=wx.createAudioContext('myaudio')
    this.videoContext = wx.createVideoContext('myVideo')

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
    return {
      title: 'video',
      path: 'pages/find/video'
    }

  }
})