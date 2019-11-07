var h1tag = document.createElement('h1');
h1tag.textContent = "Coding Boot Camp";
h1tag.setAttribute("style", "font-family: Impact, Charcoal, sans-serif; color:purple; font-size: 44px");
document.body.appendChild(h1tag).style.textAlign = "center";


var h2tag = document.createElement('h2');
h2tag.textContent = "UC Riverside Extension 2019-2020";
h2tag.setAttribute("style", "font-family: Impact, Charcoal, sans-serif; color: black; font-size: 24px");
document.body.appendChild(h2tag).style.textAlign = "center";

document.body.style.backgroundImage = "url('bkgcarbon.png')";

var imgtag = document.createElement('img');
imgtag.textContent = "Image Goes Here, shhh";
imgtag.setAttribute("src", "https://twopheat.github.io/prework-about-me/img/bkgfinal.svg");
imgtag.setAttribute("width", "100%");
imgtag.setAttribute("height", "auto");
document.body.appendChild(imgtag).style.boxShadow = "0px 1px 2px 2px #00000024";
document.body.appendChild(imgtag).style.borderRadius = "5px";

var imgCaption = document.createElement('caption');
imgCaption.textContent = "I made this SVG image for my prework assignment.";
imgCaption.setAttribute("style", "font-family: Impact, Charcoal, sans-serif; color:lightblue; font-size: 18px");
document.body.appendChild(imgCaption).style.textAlign = "center";
document.body.appendChild(imgCaption).style.display = "inherit";

var myItemList = document.createElement('list');
document.body.appendChild(myItemList);

var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'favicon.png';
    document.getElementsByTagName('head')[0].appendChild(link);


let listArray = ["Range Rover HSE SC","AMG C32","Electric Conversions","Solar Power"],
     ul = document.createElement('ul');
        ul.setAttribute("style", "background-color:black; border-radius:5px;list-style-type: none;font-family: Impact, Charcoal, sans-serif; color: #df3f96; font-size: 18px");
        document.body.appendChild(ul).style.textAlign = "center";
        document.body.appendChild(ul).style.boxShadow = "0px 1px 2px 2px #00000024";;
listArray.forEach(function (item) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML += item;

});

