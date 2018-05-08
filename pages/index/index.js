var app = getApp()
var baseUrl = 'http://z.cn/api/v1122';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  getToken: function () {
    wx.login({
      success: function (res) {
        console.log(res);
        var code = res.code;
        console.log('code');
        console.log(code);
        wx.request({
          url: baseUrl + '/token/user',
          data: {
            code: code
          },
          method: 'POST',
          success: function (res) {
            console.log(res.data);
            wx.setStorageSync('token', res.data.token);
          },
          fail: function (res) {
            console.log(res.data);
          }
        })
      }
    })
  },

  pay: function () {
    var token = wx.getStorageSync('token');
    var that = this;
    wx.request({
      url: baseUrl + '/order',
      header:{
        token:token
      },
      data:{
        products:
        [
          {
            product_id:1, count:2
          },
          {
            product_id:2, count: 3
          }
        ]
      },
      method:'POST',
      success:function(res){
        console.log(res.data);
        // if(res.data.pass){
        //   wx.setStorageSync('order_id', res.data.order_id);
        //   that.getPreOrder(token,res.data.order_id);
        // }
        // else{
        //   console.log('订单未创建成功');
        // }
      }
    })
  },

  // getSuperToken:function(){
  //   wx.request({
  //     url: baseUrl + '/token/app',
  //     data:{
  //       ac:'warcraft',
  //       se:'777'
  //     },
  //     method:'POST',
  //     success:function(res){
  //       console.log(res.data);
        
  //     }
  //   })
  // },
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