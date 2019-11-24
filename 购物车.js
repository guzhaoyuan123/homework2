function checkAll() {
	//这里获取一个数组集合
	var items = document.getElementsByName("commodity");
	for (var i = 0; i < items.length; i++) {
		items[i].checked = document.getElementById("checkBoxAll").checked;
	}
}

function jian() {
	var x = document.getElementById("shoppnameber1").value;
	var y=(parseInt(x) - 1)*45.80;
	if (x > 0) {
		document.getElementById("shoppnameber1").value = parseInt(x) - 1;
		document.getElementById("xiaoji-1").innerHTML=y.toFixed(2);
		
		zongjijian(45.80);
		// 总数
		var a,b,c,d,k;
		a = document.getElementById("shoppnameber1").value;
		b = document.getElementById("shoppnameber2").value;
		c = document.getElementById("shoppnameber3").value;
		d = document.getElementById("shoppnameber4").value;
		
		k=parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d);
		document.getElementById("allNumber").innerHTML=k;
		
		// 总计
		var e,f,g,h,i;
		e = document.getElementById("xiaoji-1").innerHTML;
		f = document.getElementById("xiaoji-2").innerHTML;
		g = document.getElementById("xiaoji-3").innerHTML;
		h = document.getElementById("xiaoji-4").innerHTML;
		
		i=e+f+g+h;
		document.getElementById("allmoneny").innerHTML=parseFloat(i);
		
	} else {

	}
}

function jia() {
	var x = document.getElementById("shoppnameber1").value;
	var y=(parseInt(x) + 1)*45.80;
	document.getElementById("shoppnameber1").value =parseInt(x) + 1;
	document.getElementById("xiaoji-1").innerHTML=y.toFixed(2);
	
	zongjijia(45.80);
	// 总数
	var a,b,c,d,k;
	a = document.getElementById("shoppnameber1").value;
	b = document.getElementById("shoppnameber2").value;
	c = document.getElementById("shoppnameber3").value;
	d = document.getElementById("shoppnameber4").value;
	
	k=parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d);
	document.getElementById("allNumber").innerHTML=k;
	
}
// *********************
function jian2() {
	var x = document.getElementById("shoppnameber2").value;
	var y=(parseInt(x) - 1)*49.80;
	if (x > 0) {
		document.getElementById("shoppnameber2").value = parseInt(x) - 1;
		document.getElementById("xiaoji-2").innerHTML=y.toFixed(2);
		
		zongjijian(49.80);
		//总数
		var a,b,c,d,k;
		a = document.getElementById("shoppnameber1").value;
		b = document.getElementById("shoppnameber2").value;
		c = document.getElementById("shoppnameber3").value;
		d = document.getElementById("shoppnameber4").value;
		
		k=parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d);
		document.getElementById("allNumber").innerHTML=k;
		

	} else {

	}
}

function jia2() {
	var x = document.getElementById("shoppnameber2").value;
	var y=(parseInt(x) + 1)*49.80;
	document.getElementById("shoppnameber2").value =parseInt(x) + 1;
	document.getElementById("xiaoji-2").innerHTML=y.toFixed(2);
	
	zongjijia(49.80);
	// 总数
	var a,b,c,d,k;
	a = document.getElementById("shoppnameber1").value;
	b = document.getElementById("shoppnameber2").value;
	c = document.getElementById("shoppnameber3").value;
	d = document.getElementById("shoppnameber4").value;
	
	k=parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d);
	document.getElementById("allNumber").innerHTML=k;

}

// *********************
function jian3() {
	var x = document.getElementById("shoppnameber3").value;
	var y=(parseInt(x) - 1)*45.20;
	if (x > 0) {
		document.getElementById("shoppnameber3").value = parseInt(x) - 1;
		document.getElementById("xiaoji-3").innerHTML=y.toFixed(2);
		
		zongjijian(45.20);
		// 总数
		var a,b,c,d,k;
		a = document.getElementById("shoppnameber1").value;
		b = document.getElementById("shoppnameber2").value;
		c = document.getElementById("shoppnameber3").value;
		d = document.getElementById("shoppnameber4").value;
		
		k=parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d);
		document.getElementById("allNumber").innerHTML=k;
		
	} else {

	}
}

function jia3() {
	var x = document.getElementById("shoppnameber3").value;
	var y=(parseInt(x) + 1)*45.20;
	document.getElementById("shoppnameber3").value =parseInt(x) + 1;
	document.getElementById("xiaoji-3").innerHTML=y.toFixed(2);
	zongjijia(45.20);
	// 总数
	var a,b,c,d,k;
	a = document.getElementById("shoppnameber1").value;
	b = document.getElementById("shoppnameber2").value;
	c = document.getElementById("shoppnameber3").value;
	d = document.getElementById("shoppnameber4").value;
	
	k=parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d);
	document.getElementById("allNumber").innerHTML=k;

}

// *********************
function jian4() {
	var x = document.getElementById("shoppnameber4").value;
	var y=(parseInt(x) - 1)*45.00;
	if (x > 0) {
		document.getElementById("shoppnameber4").value = parseInt(x) - 1;
		document.getElementById("xiaoji-4").innerHTML=y.toFixed(2);
		zongjijian(45.00);
		// 总数
		var a,b,c,d,k;
		a = document.getElementById("shoppnameber1").value;
		b = document.getElementById("shoppnameber2").value;
		c = document.getElementById("shoppnameber3").value;
		d = document.getElementById("shoppnameber4").value;
		
		k=parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d);
		document.getElementById("allNumber").innerHTML=k;

	} else {

	}
}

function jia4() {
	var x = document.getElementById("shoppnameber4").value;
	var y=(parseInt(x) + 1)*45.00;
	document.getElementById("shoppnameber4").value =parseInt(x) + 1;
	document.getElementById("xiaoji-4").innerHTML=y.toFixed(2);
	zongjijia(45.00);
	// 总数
	var a,b,c,d,k;
	a = document.getElementById("shoppnameber1").value;
	b = document.getElementById("shoppnameber2").value;
	c = document.getElementById("shoppnameber3").value;
	d = document.getElementById("shoppnameber4").value;
	
	k=parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d);
	document.getElementById("allNumber").innerHTML=k;
	
}

var p=0;
function zongjijian(a){
		p=p-a;
	if(p>0){
		document.getElementById("allmoneny").innerHTML=p.toFixed(2);
	}
}

var p=0;
function zongjijia(a){

	p=p+a;
		document.getElementById("allmoneny").innerHTML =p.toFixed(2);
	
}

function del(o){
	//获取表格
	var t=document.getElementById("testTbl");
	//删除当前行
	t.deleteRow(o.parentNode.rowIndex)
}