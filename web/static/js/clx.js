 $(function() {
     geekcn.tools.topBanner('#topBanner');
     geekcn.tools.topNavi('.nav_list','.wrap');
     geekcn.tools.jobMore('.toggleJob','#jobBox');
     geekcn.tools.geekTab();

 })
 var geekcn = {};
 geekcn.tools = {};

 geekcn.tools.topBanner = function(banners) {
     var bannerimg = $(banners).find('.bannerImg');
     var bImgs = bannerimg.find('img');
     var cators = $(banners).find('.cators');
     var catorsli = cators.find('li');
     var index = 0;
     var timer = null;

     function bannplay() {
         if (bImgs.length < 2) {
             return false;
         }
         bImgs.hide();
         bImgs.eq(index).stop().fadeIn(500)
         catorsli.removeClass('active');
         catorsli.eq(index).addClass('active');
     }
     var autoplay = function() {
         index++;
         index = index % (bImgs.length)
         bannplay();
     }
     timer = setInterval(function() {
         autoplay();
     }, 5000);


     $(banners).hover(function() {
         clearInterval(timer);
     }, function() {
         timer = setInterval(function() {
             index++;
             index = index % (bImgs.length)
             bannplay();
         }, 5000);
     });
     $('.bannerR,.cators li').click(function(e) {
         clearInterval(timer);
         autoplay();
         e.preventDefault();
     });
     $('.bannerL').click(function(e) {
         clearInterval(timer);
         index--;
         index = index % (bImgs.length)
         bannplay();
         e.preventDefault();
     });

 }


 geekcn.tools.topNavi = function(navilist, warpcon) {
     var nav_lista = $(navilist).find('a');
     var wrap = $(warpcon);
     var timers = null;
     nav_lista.each(function(index) {
         $(this).click(function(e) {
             $('html,body').animate({
                 scrollTop: wrap.eq(index).offset().top - 50
             }, 500);
             e.stopPropagation();

         })
     })

     $(window).scroll(function() {
         clearInterval(timers);
         timers = setInterval(function() {
             var wint = $(window).scrollTop();
             wrap.each(function(index) {
                 var wrapt = (wrap.eq(index).offset().top - 50);
                 if (wint >= wrapt) {
                     nav_lista.eq(index).addClass('abg').siblings().removeClass('abg');
                 } else {
                     nav_lista.eq(index).removeClass('abg');
                 }
             });
         }, 500);

     })
 }

 geekcn.tools.jobMore = function(togglejob, jobBox) {
     var job_item = $(jobBox).find('.job_item');
     jobitemH = job_item.length * job_item.outerHeight(true);
     var i = 1;
     $(togglejob).click(function(e) {
         if (i) {
             $(jobBox).height(jobitemH);
         } else {
             $(jobBox).height(620);
         }
         i = !i;
         e.preventDefault();
     })
 }

 
   geekcn.tools.geekTab = function() {
     var geekCon = [
     {"info": "<div class='introduct_title'><span>COMPANY</span> PROFILE</div><div class='introduct_name'><span class='big_name'>际客简介</span><div class='small_name'>公司成立于2005年。2011年转型，走上多渠道、复合型跨境电商专业<br/>之路，成为整机类国内跨境出口电商的领头羊。</div></div>"}, 
     {"info": "<div class='introduct_title'><span>COMPANY</span> PRODUCT</div><div class='introduct_name'><span class='big_name'>际客产品</span><div class='small_name'>优势产品为高价值电子产品，如智能手机、平板、TV BOX、户外运动、无人机、智 能穿戴、智能<br/>家居、新奇特消费电子及配件等，众多知名品牌海外代理商。</div> </div>"}, 
     {"info": "<div class='introduct_title'><span>COMPANY</span> ADVENTURE</div><div class='introduct_name'><span class='big_name'>际客优势</span><div class='small_name'>自备IT技术团队；自建B2C独立商城；自创国际品牌（Android <br/>box及手机配件方向等）；海外本地化专业运营团队，90%为专业型外籍员工</div> </div>" },
     {"info": "<div class='introduct_title font-white'><span>S</span>TAFF PRESENCE</div><div class='introduct_name'><span class='big_name font-white'>际客风采</span><div class='small_name font-white m_top'>齐聚一心，乐出职业风采</div></div>"},
     {"info": "<div class='introduct_title font-white'><span>C</span>OMPANY ACTIVITY</div> <div class='introduct_name'> <span class='big_name font-white'>活动安排</span> '<div class='small_name font-white m_top'>多元的活动，展现我们团队的凝聚力</div> </div>"},
     {"info": "<div class='introduct_title font-white'><span>O</span>ffice environment</div> <div class='introduct_name'> <span class='big_name font-white'>工作环境</span> <div class='small_name font-white m_top'>提供小空间，管理更人性化</div> </div>"}
     ];
     var banA = $('.ban1');
     var banB = $('.ban2');
     var goodsInt = $('.goods_int');
     var goodsCon = $('.cWra');
     var tLefta = $('#t1 .box_left');
     var tLeftb = $('#t3 .box_left');
     goodsConH = goodsCon.eq(0).outerHeight(true);
    goodsConHb = goodsCon.eq(3).outerHeight(true); 
   
     banA.height(goodsConH);
     banB.height(goodsConHb); 
     goodsInt.click(function() { 
         var index = $(this).attr("data-index");
         if(index<=2){
         tLefta.html(geekCon[index].info);
         banA.height(goodsCon.eq(index).outerHeight(true));
         goodsInt.eq(index).addClass('down').siblings(goodsInt).removeClass('down');
         goodsCon.eq(index).addClass('cwShow').siblings(goodsCon).removeClass('cwShow');
          }else if(index>2){
         tLeftb.html(geekCon[index].info);
         banB.height(goodsCon.eq(index).outerHeight(true));
         goodsInt.eq(index).addClass('down').siblings(goodsInt).removeClass('down');
         goodsCon.eq(index).addClass('cwShow').siblings(goodsCon).removeClass('cwShow');
        }
 
          
     })
}


 
  