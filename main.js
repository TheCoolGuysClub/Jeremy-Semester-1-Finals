


let p1 = $("#p1");
let p2 = $("#p2");
p2.on("mouseover", function() {
  $(this).css('cursor', 'pointer');
})
p1.on("click", function() {
  $("#page2container").addClass("hide");
  $("#page1container").removeClass("hide");
  $("#dropdown").removeClass("moveright");
})
p1.on("mouseover", function() {
  $(this).css('cursor', 'pointer');
})
p2.on("click", function() {
  $("#page1container").addClass("hide");
  $("#page2container").removeClass("hide");
  $("#dropdown").removeClass("moveright");
})


//Dropdown menu on right side
let counter = 0;
let open = $("#open");
open.on("click", function() {
  counter++;
  if ((counter % 2) === 1) {
    open.html("X");
    open.css('font-size', '30px');
  } else {
    open.html("&#9776;");
    open.css("font-size", "40px");
  }

  $("#dropdown").toggleClass("moveright");
})

//blog

let input = $("#input");
let num = 0;
let comments = $("#comments");

input.keypress(function(e) {

  if (input.val().length > 0){
    if(e.which == 13) {
      let text = $("<section> </section>");
      text.append(input.val());
      input.val("");
      $("#add").prepend(text);
      num++;
      comments.html(num + " comments");

      text.mouseover(function() {
        $(this).css('color', 'red');
        $(this).css('cursor', 'pointer');
      })
      text.mouseout(function() {
        $(this).css('color', 'black');
      })

      text.on("click", function() {
        text.html("");
        num --;
        comments.html(num + " comments");
      })
    }
  }
});


let box1 = $(".box1");
let box2 = $(".box2");
let box3 = $(".box3");
let bluebox = $(".blue");
box1.on("click", function() {
  box1.toggleClass("moveover");
})

box2.on("click", function() {
  box2.toggleClass("moveover");
  box2.toggleClass("doublewidth");
})
box3.on("click", function() {
  box3.toggleClass("moveover");
  box3.toggleClass("triplewidth");
})

let abox = $(".abox");
abox.on("click", function() {
  $(this).toggleClass("green");
})

let one = $("#one");
let two = $("#two");
let three = $("#three");
let four = $("#four");
let five = $("#five");
let six = $("#six");
let seven = $("#seven");
let eight = $("#eight");
let nine = $("#nine");
let ten = $("#ten");

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;

one.on("click", function() {
  if (count1 % 2 === 0) {
   four.html("One");
  } else {
    four.html("");
  }
  count1++;

})
two.on("click", function() {
  if (count2 % 2 === 0) {
   five.html("Two");
  } else {
    five.html("");
  }
  count2++;
})
three.on("click", function() {
  if (count3 % 2 === 0) {
   six.html("Three");
  } else {
    six.html("");
  }
  count3++;
})
seven.on("click", function() {
  if (count4 % 2 === 0) {
   nine.html("Four");
  } else {
    nine.html("");
  }
  count4++;
})
eight.on("click", function() {
  if (count5 % 2 === 0) {
   ten.html("Five");
  } else {
    ten.html("");
  }
  count5++;
})
