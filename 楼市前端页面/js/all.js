var icons=document.querySelectorAll("#icons")

for (let i=0;i<icons.length;i++) {


    icons[i].onmouseover = function () {
        icons[i].style.background = "rgb(38,38,38)"

    }

    icons[i].onmouseout=function () {
        icons[i].style.background="#000"

    }

}

// var stop2=document.querySelector(".xxx")
//
// console.log(stop2.offsetTop);

// var stop2=document.querySelector(".xxx");

// var stop2=document.querySelector(".xxx")
// setTimeout(function () {
//     stop2.style.top=0+"px"
//     stop2.style.opacity=1
//
// },3000);

var down=document.querySelectorAll(".name #inp")
var change=document.querySelectorAll("#name")

for (let i=0;i<down.length;i++) {


    down[i].onfocus = function () {
        // console.log(i)
        // alert(1)
        // icons[i].style.background = "rgb(38,38,38)"
        // for (let j=0;j<change.length;j++) {

        // alert(1)
        change[i].style.opacity = 0.5;
        // }
        // console.log(change[j])



    }
    down[i].onblur=function () {

        // for (let j=0;j<change.length;j++) {


        change[i].style.opacity = 1;
        // }




    }


    // icons[i].onmouseout=function () {
    //     icons[i].style.background="#000"
    //
    // }


    // down.focus();
}