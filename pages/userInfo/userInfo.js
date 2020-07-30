// pages/userInfo/userInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: {},
    recent_topics: [],//最近创建的话题
    recent_replies: [],//最近参与的话题
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://cnodejs.org/api/v1/user/' + options.loginname,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData({
          dataList: res.data.data,
          recent_topics: res.data.data.recent_topics.length > 5 ? res.data.data.recent_topics.slice(0, 5) : res.data.data.recent_topics,
          recent_replies:  res.data.data.recent_replies.length > 5 ? res.data.data.recent_replies.slice(0, 5) : res.data.data.recent_replies
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