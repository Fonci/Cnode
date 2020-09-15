// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemList: [{
      item: "全部",
      tab: ''
    }, {
      item: "精华",
      tab: 'good'
    }, {
      item: "分享",
      tab: "share"
    }, {
      item: "问答",
      tab: 'ask'
    }, {
      item: "招聘",
      tab: 'job'
    }],
    dataList: [],
    tab: '',
    n: 1
  },
  // 点击tab
  getDataList(event) {
    var that = this;
    that.setData({
      tab: event.target.dataset.tab
    })
    this.getData(15)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(15)
  },
  getData(limit) {
    var that = this;
    wx.request({
      url: 'https://cnodejs.org/api/v1/topics',
      data: {
        page: 1,
        tab: that.data.tab,
        limit: limit,
        mdrender: 'false'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData({
          dataList: res.data.data
        })
      }
    })
  },

  loadMore() {
    this.data.n++;
    var that = this;
    this.getData((this.data.n) * 15)
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
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})