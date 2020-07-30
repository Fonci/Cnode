// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginname: '',
    detailList: {},
    replies: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    wx.request({
      url: 'https://cnodejs.org/api/v1/topic/' + options.id,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        const content = res.data.data.content;
        res.data.data.content = content.replace(/\<img/gi, '<img style="width:100%;height:auto;"')
        that.setData({
          detailList: res.data.data,
          replies: res.data.data.replies,
          loginname: res.data.data.author.loginname
        })
      }
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