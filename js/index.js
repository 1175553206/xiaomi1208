/*
* @Author: Administrator
* @Date:   2017-11-07 16:49:00
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-23 16:32:56
*/

window.onload=function(){
	let itme=document.getElementsByClassName('itme');
	// let ul1=document.getElementsByClassName('bannerlist')[0];
	let lis=document.getElementsByClassName('bannerlist-li');

	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			itme[i].style.display="block";
		}
		lis[i].onmouseout=function(){
			itme[i].style.display="none";
		}
	} 
	

	// nav下拉选项

		let navdown=document.getElementsByClassName("nav-down");
		let down=document.getElementsByClassName('nav-down-ul');
		let navli=document.getElementsByClassName('nav-li');
		console.log(navdown.length,down.length,navli.length);
	    for(let i=0;i<navli.length-2;i++) {
            navli[i].onmousemove = function () {
                navdown[0].style.height='260px';
				down[i].style.display='block';
                down[i].style.transition='1s';
           }
            navli[i].onmouseout = function () {
                navdown[0].style.height='0px';
                down[i].style.display='none';
            }
        }




// 购物车
		let shopbox=document.getElementsByClassName("shop-box");
		let navbarshop=document.getElementsByClassName("navbar-right-shop");
		console.log(shopbox,navbarshop);
		navbarshop[0].onmouseover=function(){
			shopbox[0].style.display="block";
		}
		navbarshop[0].onmouseout=function(){
			shopbox[0].style.display="none";
		}




      //    明星单品
    let button = document.getElementsByTagName("button");
    let btnR = button[0];
    let btnL = button[1];

    let danpin = document.getElementsByClassName("danpin")[0];
    let count = danpin.childElementCount;

    let childw = danpin.children[0].offsetWidth + parseInt(getComputedStyle(danpin.children[0], null).marginRight);

    danpin.style.width = `${count * childw}px`;

    let num1 = 0;
    btnR.onclick = function () {
        if (num1 == 1) {
            btnR.className = "dis";
            btnL.className = "";
            return;
        }
        num1++;
        btnL.className = "";
        danpin.style.transform = `translateX(${-1240 * num1}px)`;

    }
    btnL.onclick = function () {
        if (num1 == 0) {
            btnL.className = "dis";
            btnR.className = "";
            return;
        }
        num1--;
        btnR.className = "";
        danpin.style.transform = `translateX(${-1240 * num1}px)`;
    }



// 家电部分函数封装
		function jia(num){
		let content=document.getElementsByClassName("content")[num];
		let heardright=document.getElementsByClassName("head-right")[num];
		let contentright=content.getElementsByClassName("content-right");
		let headright1=heardright.getElementsByClassName("head-right1");
		//console.log(contentright.length,headright1.length);
		contentright[0].style.display="block";
		headright1[0].className="head-right1 hover";
		for(let i=0;i<headright1.length;i++){
			headright1[i].onmouseover=function(){
				for(let j=0;j<headright1.length;j++){
					contentright[j].style.display="none";
					headright1[j].className="head-right1";
				}
				contentright[i].style.display="block";
				headright1[i].className="head-right1 hover";
			}
		}
	}
	var jiadian=new jia(0);
	var zhineng=new jia(1);
	var dapei=new jia(2);
	var zhoubian=new jia(3);

		//banner轮播图
		let bannerpic=document.getElementsByClassName("banner-pic")[0];
		let bannerli=bannerpic.getElementsByTagName("li");

		let btn=document.getElementsByClassName("banner-btn")[0];
		let btns=btn.getElementsByTagName("li");

		let bannerleft=document.getElementsByClassName("banner-left")[0];
		let bannerright=document.getElementsByClassName("banner-right")[0];

		let banner=document.getElementsByClassName("banner")[0];


		let time1=setInterval(fn,2000);
		let num=0;
		function fn(){
			num++;
			if(num==bannerli.length){
				num=0;
			}
			bannerli[0].style.opactity=1;
			for(let i=0;i<bannerli.length;i++){

				// bannerli[i].style.display="none";
				bannerli[i].className="";
				//bannerli[i].style.zIndex=5;
				btns[i].style.background="#827073";
			}
			// bannerli[num].style.display="block";
			bannerli[num].className="opacity";
			// bannerli[num].style.opactity=1;
			//bannerli[num].style.zIndex=10;
			btns[num].style.background="#b59ca0";
		}
		bannerright.onclick=function(){
			fn();
		}
		bannerleft.onclick=function(){
			fn1();
		}
		function fn1(){
			num--;
			if(num==-1){
				num=bannerli.length-1;
			}
			for(let i=0;i<bannerli.length;i++){

				// bannerli[i].style.display="none";
				// bannerli[i].style.opactity=0;
				bannerli[i].className="";
				//bannerli[i].style.zIndex=5;
				btns[i].style.background="#827073";
			}
			// bannerli[num].style.display="block";
			// bannerli[num].style.opactity=1;
			bannerli[num].className="opacity";
			//bannerli[num].style.zIndex=10;
			btns[num].style.background="#b59ca0";
		}

		banner.onmouseover=function(){
			clearInterval(time1);
		}
		banner.onmouseout=function(){
			time1=setInterval(fn,2000);
		}

			for(let i=0;i<btns.length;i++){
				btns[i].onclick=function(){
					btns[num].style.background="#827073";
					btns[i].style.background="#b59ca0";
					// bannerli[num].style.display="none";
					// bannerli[num].style.opactity=0;
					bannerli[num].className="";
					//bannerli[num].style.zIndex=5;
					// bannerli[i].style.display="block";
					// bannerli[i].style.opactity=1;
					bannerli[i].className="opacity";
					//bannerli[i].style.zIndex=10;
					num=i;
			}
		}

        //内容
		function neirong(num){
		let neironglb=document.getElementsByClassName("neirong-lb");
		let biaoyu=neironglb[num].getElementsByClassName("biaoyu");
		let widths=neironglb[num].offsetWidth;
		

		let back=document.getElementsByClassName("zuofh")[num];
		let forward=document.getElementsByClassName("youfh")[num];
		
		let neirongbtn=document.getElementsByClassName("neirong-btn");
		let btnlist1=neirongbtn[num].getElementsByTagName("li");

		let flag=true;
		let now=next=0;
		///let time2=setInterval(fn4,1000);
		function fn3(){
			next++;
			if(next==biaoyu.length){
				next=biaoyu.length-1;
				return;
			}
			biaoyu[next].style.left=`${widths}px`;
			animate(biaoyu[now],{left:-widths});
			animate(biaoyu[next],{left:0},btnfn);
			now=next;

		}
		function fn4(){
			next--;
			if(next==-1){
				next=0;
				return;
			}
			biaoyu[next].style.left=`-${widths}px`;
			animate(biaoyu[now],{left:widths});
			animate(biaoyu[next],{left:0},btnfn);
			now=next;

		}
		back.onclick=function(){
			flag=true;
			if(flag){
				fn4();
				flag=false;
			}
			
		}
		forward.onclick=function(){
			flag=true;
			if(flag){
				fn3();
				flag=false;
			}

		}

		function btnfn(){
			for(let i=0;i<btnlist1.length;i++){
				btnlist1[i].className="btmr";
			}
			btnlist1[now].className="btnhot";

			flag=true;
		}


		for(let i=0;i<btnlist1.length;i++){
			btnlist1[i].onclick=function(){
				if(i==now){return}
				else if(i<now){
					animate(biaoyu[now],{left:widths});
					animate(biaoyu[i],{left:0});
					for(let j=0;j<btnlist1.length;j++){
						btnlist1[j].className="btmr";
					}
					btnlist1[i].className="btnhot";
				}
				else if(i>now){
					animate(biaoyu[now],{left:-widths});
					animate(biaoyu[i],{left:0});
					for(let j=0;j<btnlist1.length;j++){
						btnlist1[j].className="btmr";
					}
					btnlist1[i].className="btnhot";
				}
				now=next=i;
			}
		}
	}


	var nei1=new neirong(0);
	var nei2=new neirong(1);
	var nei3=new neirong(2);
	var nei4=new neirong(3);
	 


}