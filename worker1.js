var p = document.querySelectorAll('p');
for(var i = 0; i < p.length; i++) {
    p[i].onclick = funtion () {
        this.style.color = "orange";
        alert(this.innerHtml);
    }
}