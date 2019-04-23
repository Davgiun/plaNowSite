var angle = 0;

//прокрутка зображень на слайдері
function galleryspin(sign) { 
	spinner = document.querySelector("#spinner");
	if (!sign) { 
		angle += 45;
	} else {
		angle -= 45; 
	}
	spinner.setAttribute("style","transform: rotateY("+ angle +"deg);");

	/*@cc_on
// тут код, который видят и исполняют только IE, остальные браузеры считают за комментарии
	@*/
}



/*поява блоку меню при скролі сторінки*/
window.onscroll = function() {
	var head = document.getElementById('head');
	var nav = document.getElementById('navigation');
	var slider = document.getElementById('carousel');
    var scroll = document.body.scrollTop || document.documentElement.scrollTop;
    var bio_nav = document.getElementById('biography_nav');
    var anim_nav = document.getElementById('animations_nav');
    var film_nav = document.getElementById('films_nav');
    var new_topic = document.getElementById('create_news');


    //фіксованість шапки
    if(scroll < 5){//прибрати фіксованість
    	head.removeAttribute("class");    	
    }else if(scroll > getPosition(head)) {//зробити меню фіксованим
    	//alert(getPosition(nav));
    	var at = document.createAttribute("class");
    	at.value = "fixed_head";	
    	head.setAttributeNode(at);
    } 

    //фіксованість меню
    if(scroll < (getPosition(slider) + slider.offsetHeight - head.offsetHeight)){//прибрати фіксованість меню
    	nav.removeAttribute("class");
    	if(bio_nav.hasAttribute("class"))
    		bio_nav.removeAttribute("class"); 
    	if(anim_nav.hasAttribute("class"))	
    		anim_nav.removeAttribute("class"); 
    	if(film_nav.hasAttribute("class"))
    		film_nav.removeAttribute("class");
    	if(new_topic.hasAttribute("class"))
    		new_topic.removeAttribute("class");
    }else if((scroll + head.offsetHeight) > getPosition(nav)){//зробити меню фіксованим
    	var att = document.createAttribute("class");
    	att.value = "fixed_nav";	
    	nav.setAttributeNode(att);
    	if(!bio_nav.hasAttribute("class")){
	    	var attr = document.createAttribute("class");
	    	attr.value = "fixed_left";
	    	bio_nav.setAttributeNode(attr);
	    	bio_nav.style.top = "" + (getPosition(nav) + nav.offsetHeight) + "px";
	    }
	    else if(!anim_nav.hasAttribute("class")){
	    	var at1 = document.createAttribute("class");
	    	at1.value = "fixed_left";
	    	anim_nav.setAttributeNode(at1);
	    	anim_nav.style.top = "" + (getPosition(nav) + nav.offsetHeight) + "px";
    	}
    	else if(!film_nav.hasAttribute("class")){
	    	var at2 = document.createAttribute("class");
	    	at2.value = "fixed_left";
	    	film_nav.setAttributeNode(at2);
	    	film_nav.style.top = "" + (getPosition(nav) + nav.offsetHeight) + "px";
	    }
	    else if(!new_topic.hasAttribute("class")){
	    	var at3 = document.createAttribute("class");
	    	at3.value = "fixed_left";
	    	new_topic.setAttributeNode(at3);
	    	new_topic.style.top = "" + (getPosition(nav) + nav.offsetHeight) + "px";
	    }
    } 
 }


/*повертає позицію елемента на сторінці */
function getPosition(element){
	var top = 0;
	do{
		top += element.offsetTop || 0;
		element = element.offsetParent;/*зміщення відносно батька*/
	}while(element);
	return top;
}

// відкритки початкову сторінку
document.getElementById("defaultOpen").click();

//відкрити іншу сторінку в тому ж вікні
function openPage(element){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent"); //блоки з контентом
    for (i = 0; i < tabcontent.length; i++) {//зробити блоки не видимими
        tabcontent[i].style.display = "none";
    }
    document.getElementById(element).style.display = "block";//зробити блоки видимими

//повернути скрол нагору
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


/*зміна лічильника та сторінок*/
function nextPage(sign){
	var current = +document.getElementById("count").innerHTML;
	var limit =  +document.getElementById("limit").innerHTML;
	if(current == 2 && +sign > 0){
		current = 1;
	}else if(current == 1 && +sign < 0){
		current = 2;
	} else{
		current += +sign;
	}

	document.getElementById("count").innerHTML = current;//змінюємо сторінку

	if(current == 1){
		document.getElementById("gallery1").style.display = "block";//зробити блоки видимими
		document.getElementById("gallery2").style.display = "none";//зробити блок невидимим
	}
	if(current == 2){
		document.getElementById("gallery2").style.display = "block";//зробити блоки видимими
		document.getElementById("gallery1").style.display = "none";//зробити блок невидимим
	}

	//повернути скрол нагору
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}


//відкрити закрити коментарі
function openNav() {
    document.getElementById("sidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

//document.getElementById("name").value = user.name;

//додати коментар
function addComent(){
	var name = document.getElementById("name");
	var coment = document.getElementById("text");

	if(name.value == "" || text.value == ""){//перевірка значень
        name.style.border = "1px solid red";
        text.style.border = "1px solid red";
        return;
    }
    else{
        name.style.border = "none";
        text.style.border = "none";
    }
	var p = document.createElement('p');
	p.className = "coment";
	p.innerHTML = "<strong>"  + name.value + ":</strong><br>" + coment.value;

	document.getElementById("coments").appendChild(p);

	return false;
}

//додати тему блогу
function addTopic(){
	var topic = document.getElementById("new_title");
	var text = document.getElementById("topic_text");
	var url =  document.getElementById("img_url");

	if(topic.value == "" || text.value == ""){//перевірка значень
        topic.style.border = "1px solid red";
        text.style.border = "1px solid red";
        return;
    }
    else{
        topic.style.border = "none";
        text.style.border = "none";
    }

	var div = document.createElement('div');
	div.className = "blog_topic";

	var h = document.createElement('h2');
	h.innerHTML = topic.value;

	var p = document.createElement('p');
	p.className = "coment";
	p.innerHTML = text.value;

	if(url.value != ""){
		var img = document.createElement('img');
		var att = document.createAttribute("src");
	    att.value = url.value;	
	    img.setAttributeNode(att);

	    div.appendChild(img);
	}
    div.appendChild(h);
    div.appendChild(p);
	document.getElementById("blog_main").appendChild(div);

	return false;
}

function admin(){
	var com = document.getElementsByClassName("coment");
  	var number = document.getElementById("tt").value;
  	com[number-1].parentNode.removeChild(com[number-1]);
}