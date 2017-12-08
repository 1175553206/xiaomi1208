$(function () {
    let shopbox=$(".shop-box");
    let navbarshop=$(".navbar-right-shop");
    navbarshop.hover(function(){
        $(this).find(shopbox).attr('style','display:block;');
    },function(){
        $(this).find(shopbox).attr('style','display:none');
    })




    let itme=$('.itme');

    let lis=$('.bannerlist-li');

    lis.hover(function(){
        $(this).find(itme).attr('style','display:block;');
    },function(){
        $(this).find(itme).attr('style','display:none');
    })


    //下拉菜单
    $('.nav-center li').each(function(index) {
        $(this).mouseenter(function() {

            $('.nav-items').animate({height:290}, 300);
            $('.nav-item')[index].style.display='block';

        });
        $(this).mouseleave(function() {

            $('.nav-items').animate({height:0}, 300);
            $('.nav-item')[index].style.display='none';

        });
    });


    //节点轮播
    $("#left").click(function(){
        $('.danpin').animate({left:0}, 1000)
        $(this).addClass('hot');
        $("#right").removeClass('hot');
    })
    $("#right").click(function(){
        $('.danpin').animate({left:-1240}, 1000);
        $("#left").removeClass('hot');
        $(this).addClass('hot');
    })

});
let bannertime=setInterval(bannerfn,2000);
let num=0;
let bannerfalg=true;
function bannerfn(){
    if(num>=$('.banner-pic li').length){
        num=0;
    }
    $('.banner-pic li').each(function(index, el) {
        el.style.opacity=0;
    });
    $('.banner-pic li')[num].style.opacity=1;

    $('.banner-btn li').each(function(index, el) {
        el.style.background='#827073';
    });
    $('.banner-btn li')[num].style.background='#b59ca0';
    num++;
    bannerfalg=false;
}
function bannerfn1(){
    if(num<0){
        num=6;
    }
    $('.banner-pic li').each(function(index, el) {
        el.style.opacity=0;
    });
    $('.banner-pic li')[num].style.opacity=1;

    $('.banner-btn li').each(function(index, el) {
        el.style.background='#827073';
    });
    $('.banner-btn li')[num].style.background='#b59ca0';
    num--;
    bannerfalg=false;

}
$('.banner').mouseenter(function() {
    clearInterval(bannertime);
});
$('.banner').mouseleave(function() {
    bannertime=setInterval(bannerfn,2000);
});
$('.banner-left').click(function(){
    if(bannerfalg){

        bannerfn1();
    }
    bannerfalg=true;
});
$('.banner-right').click(function(){
    if(bannerfalg){
        bannerfn();
    }
    bannerfalg=true;
})

$('.banner-btn li').each(function(index, el) {
    $(this).click(function(){

        this.style.background='#b59ca0';
        $('.banner-btn li')[num].style.background='#827073'
        $('.banner-pic li')[num].style.opacity=0;
        $('.banner-pic li')[index].style.opacity=1;
        num=index;
    })
});

//家电选项卡

$('.head-right1').mouseenter(function(event) {
    /*console.log(event);//event指向jq对象
    console.log(this);//this指向对应的dom对象*/
    $(this).parent().children().removeClass('hover');
    $(this).addClass('hover');
    $('.content-right').each(function(index, el) {
        el.style.display="none";
    });
    $('.content-right')[$(this).index()].style.display='block';

});

//内容无缝轮播图
function neirong(select){
    let now=next=0;
    let flag=true;
    $(select).find('.youfh').click(function(){
        if(flag){
            flag=false;

            if(next>=2){
                next=2;
                flag=true;
                return;
            }
            next++;
            let biaoyu=$(select).find('.biaoyu');
            // biaoyu[next].style.left='290px';
            $(biaoyu[next]).animate({left:0},500);
            $(biaoyu[now]).animate({left:-290},500,function(){flag=true;});
            let btn=$(select).find('.neirong-btn li')
            $(btn[next]).addClass('btnhot');
            $(btn[now]).removeClass('btnhot');
            now=next;

        }

    });
    $(select).find('.zuofh').click(function(){

        if(flag){
            flag=false;
            next--;
            if(next<0){
                next=0;
                flag=true;
                return;
            }

            let biaoyu=$(select).find('.biaoyu');
            // biaoyu[next].style.left='-290px';
            $(biaoyu[next]).animate({left:0},500);
            $(biaoyu[now]).animate({left:290},500,function(){flag=true;});
            let btn=$(select).find('.neirong-btn li');
            $(btn[next]).addClass('btnhot');
            $(btn[now]).removeClass('btnhot');
            now=next;
        }

    })
    $(select).find('.neirong-btn li').click(function(){
        let biaoyu=$(select).find('.biaoyu');
        let btn=$(select).find('.neirong-btn li');
        if($(this).index()==now){return}
        else if($(this).index()<now){

            $(biaoyu[$(this).index()]).animate({left:0},500);
            $(biaoyu[now]).animate({left:290},500,function(){flag=true;});
            $(btn[$(this).index()]).addClass('btnhot');
            $(btn[now]).removeClass('btnhot');
            next=now=$(this).index();
        }
        else if($(this).index()>now){
            $(biaoyu[$(this).index()]).animate({left:0},500);
            $(biaoyu[now]).animate({left:-290},500,function(){flag=true;});
            $(btn[$(this).index()]).addClass('btnhot');
            $(btn[now]).removeClass('btnhot');
            next=now=$(this).index();
        }
    })
}

var n1=new neirong($('.neirong-lb')[0]);
var n2=new neirong($('.neirong-lb')[1]);
var n3=new neirong($('.neirong-lb')[2]);
var n4=new neirong($('.neirong-lb')[3]);

})