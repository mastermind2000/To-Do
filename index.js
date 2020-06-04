// add close button
var x = document.querySelectorAll('li');
console.log(x);
for(var i = 0; i < x.length; i++){
	var span = document.createElement('span');
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	x[i].appendChild(span);
}
// implement method when user clicks on close button
var close = document.getElementsByClassName('close');
for(var i = 0; i < close.length; i++){
	close[i].onclick = function(){
		var div = this.parentElement;
		div.style.display = "none";
	}
}
//add checked class 
var list = document.querySelector('ul');
console.log(list);
list.addEventListener('click',(e) => {
  console.log(e);
  console.log(e.target.tagName);
  if(e.target.tagName === 'LI'){
  	e.target.classList.toggle('checked');
  	console.log("success");
  }
},false);

//add your input
function method(){
	var li = document.createElement('li');
	var input = document.getElementById('myInput').value;
	var text = document.createTextNode(input);
	li.appendChild(text);
	if(input === ''){
		alert("Input some text");
	}
	else{
		document.getElementById('myul').appendChild(li);
	}
	document.getElementById('myInput').value = "";
	var span = document.createElement('span');
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);
	for(var i = 0; i < close.length; i++){
		close[i].onclick = function(){
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}
function removeall(){
	var lst = document.getElementsByTagName("ul");
    lst[0].innerHTML = "";
}