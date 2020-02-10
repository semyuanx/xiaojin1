
var data = {
  status: 1,
  data: {
    list: [
      {
        activityId: "E0320200114342Q01",
        productId: "E03",
        loginName: "vdowen1",
        flag: 1,
        amount: 8,
        totalBetAmount: 2606428.74,
        totalValidBetAmount: 2606428.74,
        totalRemainAmount: 2606428.74,
        statDate: "02/01",
        exirationTime: 1580983200,
        exirationTime1: "2020-02-07 18:00:00",
        itemNo: 1
      },
      {
        activityId: "E0320200114342Q01",
        productId: "E03",
        loginName: "vdowen1",
        flag: 1,
        amount: 8,
        totalBetAmount: 2606428.74,
        totalValidBetAmount: 2606428.74,
        totalRemainAmount: 2606428.74,
        statDate: "02/02",
        exirationTime: 1580810400,
        exirationTime1: "2020-02-07 18:00:00",
        itemNo: 2
      }
    ],
    total: "1",
    todayTotalBetAmount: 870
  },
  msg: "成功"
}

// // 获取投注数据 JSON模拟
//   function getJson(){
//     if (data.status === 1) {
//         let {
//           todayTotalBetAmount,
//           list
//         } = data.data;
//         var needbet = 3888 - todayTotalBetAmount;
//         if(needbet<=0){
//             var s1 = '<b class="need_amount">恭喜您</b>今天已经签到成功';
//             $('.bet_amount').html(s1);
//         }else{
//             $('.need_amount').text(needbet);
//         }
//         $('.day').text(list.length);

//         var s = '';
//         var s2 = '';
//         var len = 5 - list.length;
//         // 连续签到5天
//         if (list.length<=5&&list.length>0) {    

//             for(var i=0;i<list.length;i++){
//                 if(list[i].flag==1){
//                     s += '<div class="money_item1"><div class="onlytime"></div><span class="money_get" itemno="'+list[i].itemNo+'" statdate="'+list[i].statDate+'">领取礼金</span></div>'
//                     countDowns('onlytime',list[i].exirationTime1,list[i].statDate);
//                 }else{
//                     s += '<div class="money_item2"><span class="money_date1"><b>' + list[i].statDate +'</b></span></div>'
//                 }
//             }

//             for (var i = 1; i < len+1; i++) {
//                     s += '<div class="money_item"><span class="money_date">' + (i + list.length) + '天</span></div>'
//             }
//             $('.money_list1').append(s);

//             for(var i = 0; i < 2; i++){
//                 s2 += '<div class="weilingqu"><h3>连续签到6天</h3><p><b>18</b>元大礼包</p></div>';
//             }
//             $('.money_list2').html(s2);
//         }else if(list.length==6){    //连续签到6天
//             var newlist = [];
//             for(var i = 0;i<list.length-1;i++){
//                 newlist.push(list[i]);
//             }
//             for(var i=0;i<newlist.length;i++){
//                 if(newlist[i].flag==1){
//                     s += '<div class="money_item1"><div class="onlytime"></div><span class="money_get">领取礼金</span></div>'
//                     countDowns('onlytime',newlist[i].exirationTime1,newlist[i].statDate);
//                 }else{
//                     s += '<div class="money_item2"><span class="money_date1"><b>' + newlist[i].statDate +'</b></span></div>'
//                 }
//             }
//             $('.money_list1').append(s);

//             for(var i = 5; i < list.length; i++){
//                 if(list[5].flag==1){
//                     s2 += '<div class="kelingqu"><p class="sixday"></p><span class="money_get">领取大礼</span></div><div class="weilingqu"><h3>连续签到7天</h3><p><b>18</b>元大礼包</p></div>';
//                     countDowns('sixday',list[5].exirationTime1,list[5].statDate);
//                 }
//                 if(list[5].flag==2){
//                     s2 += '<div class="kelingqu"><p>大礼包已领取</p><span class="money_date1"><b>02/06</b></span></div><div class="weilingqu"><h3>连续签到7天</h3><p><b>18</b>元大礼包</p></div>';
//                 }
//             }
//             $('.money_list2').html(s2);

//         }else if(list.length==7){   //连续签到7天
//             var newlist = [];
//             for(var i = 0;i<list.length-2;i++){
//                 newlist.push(list[i]);
//             }
//             for(var i=0;i<newlist.length;i++){
//                 if(newlist[i].flag==1){
//                     s += '<div class="money_item1"><div class="onlytime"></div><span class="money_get">领取礼金</span></div>'
//                 }else{
//                     s += '<div class="money_item2"><span class="money_date1"><b>' + newlist[i].statDate +'</b></span></div>'
//                 }
//             }
//             $('.money_list1').append(s);

//             for(var i = 6; i < list.length; i++){
//                 if(list[5].flag==1&&list[6].flag==1){
//                     s2 += '<div class="kelingqu"><p class="sixday"></p><span class="money_get">领取大礼</span></div><div class="kelingqu"><p></p><span class="money_get">领取大礼</span></div>';
//                     countDowns('sixday',list[5].exirationTime1,list[5].statDate);
//                     countDowns('sixday',list[6].exirationTime1,list[6].statDate);
//                 }
//                 else if(list[5].flag==1&&list[6].flag==2){
//                     s2 += '<div class="kelingqu"><p class="sixday"></p><span class="money_get">领取大礼</span></div><div class="kelingqu"><p>大礼包已领取</p><span class="money_date1"><b>'+list[6].statDate+'</b></span></div>';
//                     countDowns('sixday',list[5].exirationTime1,list[5].statDate);
//                 }
//                 else if(list[5].flag==2&&list[6].flag==1){
//                     s2 += '<div class="kelingqu"><p>大礼包已领取</p><span class="money_date1"><b>'+list[5].statDate+'</b></span></div><div class="kelingqu"><p class="sixday"></p><span class="money_get">领取大礼</span></div>';
//                     countDowns('sixday',list[6].exirationTime1,list[6].statDate);
//                 }else if(list[5].flag==2&&list[6].flag==2){
//                     s2 += '<div class="kelingqu"><p>大礼包已领取</p><span class="money_date1"><b>'+list[5].statDate+'</b></span></div><div class="kelingqu"><p>大礼包已领取</p><span class="money_date1"><b>'+list[5].statDate+'</b></span></div>';
//                 }
//             }
//             $('.money_list2').html(s2);
//         }else {
//           for (var i = 1; i < len+1; i++) {
//             s += '<div class="money_item"><span class="money_date">' + i + '天</span></div>'
//           }
//           $('.money_list1').append(s);

//           for(var i = 0; i < 2; i++){
//             s2 += '<div class="weilingqu"><h3>连续签到6天</h3><p><b>18</b>元大礼包</p></div>';
//           }
//           $('.money_list2').html(s2);
//         }
//       }
//   }

// //   领奖时间还有多久过期
//   function countDowns (el,endtime,time) {
//     var now_time = new Date().getTime();
//     var end_time = Date.parse(new Date(endtime));
//       setInterval(function(){

//         now_time+=1000;
//         var _str = '';
//         var cd = function(t1,t2,tg){
//             var ms = t1-t2;
//             var minutes = 1000*60;
//             var hours = minutes*60;
//             var days = hours*60;
//             // 天数
//             var d = Math.floor(ms/days);
//             // 毫秒
//             ms%= days;
//             var h = Math.floor(ms/hours);
//             ms%= hours;
//             var m = Math.floor(ms/minutes);
//             ms%= minutes;
//             var s = Math.floor(ms/1000);
//             // 返回所需值并退出函数
//             switch(tg){
//               case 'd':return d;
//               case 'h':return h<10?'0'+h:h;
//               case 'm':return m<10?'0'+m:m;
//               case 's':return s<10?'0'+s:s;
//             }
//           }
//         // 过期
//         if(end_time-now_time<=0){
//             $(`.${el}`).parent().addClass('guoqi');
//             $(`.${el}`).parent().find('.money_get').addClass('guoqi_date').html(`<b>${time}</b>`);
//         }else{
//             var h = cd(end_time,now_time,'h');
//             var m = cd(end_time,now_time,'m');
//             var s = cd(end_time,now_time,'s');
//             _str = `<b>${h}:${m}:${s}</b><span>后失效</span>`
//             $(`.${el}`).html(_str);
//         }
//       },1000)
//   }

//   // 过滤时间
//   function filterStatDate(sd){
//      var sdarr = sd.split('/');
//      return `2020-${sdarr[0]}-${sdarr[1]}`;
//   }

//   function eleHandle() {
//       var week = '1';
//     $('.close').click(function () {
//       $('.pop-newYear2019').fadeOut();
//     })
//     $('.active_detail').click(function () {
//       $('.pop-newYear2019').fadeIn();
//     })
//     // 两周切换
//     $('.tabhd li').click(function(){
//         var i = $(this).index();
//         $(this).addClass('on').siblings().removeClass('on');
//         // getData(i+1);
//         // week = i+1;
//     })
//     // 点击领奖
//     $('.money_list1').on('click','.money_get',function(){
//         var itemno = $(this).attr('itemno');
//         var statdate = $(this).attr('statdate');
//         var st = filterStatDate(statdate);
//         $.ajax({
//             type: 'GET',
//             url: 'xj_activity.htm',
//             data: {
//               activityWeek: week,
//               operate: 'requestSignIn',
//               itemNo:itemno,
//               siteType:2,
//               statDate:st
//             },
//             ascType: false,
//             dataType: 'json',
//             success: function (data) {

//             }
//         })
//     })
//   }

//   $(function () {
//     whatapp();
//     eleHandle();
//     getJson();
//   });

function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

function cd(t1,t2) {
  var ms = t1 - t2;
  if(ms<0){
    return '00:00:00'
  }
  var minutes = 1000 * 60;
  var hours = minutes * 60;
  var days = hours * 60;
  // 天数
  var d = Math.floor(ms / days);
  // 毫秒
  ms %= days;
  var h = Math.floor(ms / hours);
  ms %= hours;
  var m = Math.floor(ms / minutes);
  ms %= minutes;
  var s = Math.floor(ms / 1000);
  // 返回所需值并退出函数
  // switch (tg) {
  //   case 'd': return d;
  //   case 'h': return h < 10 ? '0' + h : h;
  //   case 'm': return m < 10 ? '0' + m : m;
  //   case 's': return s < 10 ? '0' + s : s;
  // }
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s
  return `${h}:${m}:${s}`
}