var svg = d3.select('body').append('svg').attr('class', 'svg');
window.onresize = function(){
  svg.attr({
    width: window.innerWidth,
    height: window.innerHeight
  })
}

var l1 = svg.append('line').attr({
  x1:window.innerWidth,
  y1: 0,
  x2: 100,
  y2: 100,
  class: 'line'
});
var l2 = svg.append('line').attr({
  x1:window.innerWidth,
  y1: window.innerHeight,
  x2: 100,
  y2: 100,
  class: 'line'
});
var l3 = svg.append('line').attr({
  x1: 0,
  y1: 0,
  x2: 100,
  y2: 100,
  class: 'line'
});
var l4 = svg.append('line').attr({
  x1:0,
  y1: window.innerHeight,
  x2: 100,
  y2: 100,
  class: 'line'
});
// var text = svg.append('text').attr({
//   x: 0,
//   y:0,
//   class: 'text'
// }).text("клик для заказа");

var offer = [
  '<p>11шт</p>',
  '<p>11шт</p>',
  '<p>8шт</p>',
  '<p>9шт</p>',
  '<p>7шт</p>',
  '<p class="action">3шт</p>'
]
var  rect = d3.select('body').append('div')
.style({
  // position:'absolute',
   'z-index':200,
  // width:'25vw',
  // height:'25vw',
  // background: '#eee',
  // border: '5px solid black',
   display:'none'
})
.attr('class','svg block').html('<p class="del">17.200руб</p>\
  <p class="red">10.790руб</p>\
  <p class="last">в наличии </p>\
  <p>'+Math.floor(Math.random()*5 + 1)+'шт</p>\
  <p style="color: #aaa">* для заказа кликните в любом месте </p>');

  $('.slide').on ('mousewheel', function (e) {
    var rd = Math.floor(Math.random()*4 + 1);
    if(rd==2){
      setTimeout(function(){
        rect.html('<p class="del">17.200руб</p>\
          <p class="red">10.790руб</p>\
          <p class="last">в наличии </p>\
          <p class="action">1шт</p>\
          <p style="color: #aaa">* для заказа кликните в любом месте </p>');
      }, 100);
    }else{
      rect.html('<p class="del">17.200руб</p>\
        <p class="red">10.790руб</p>\
        <p class="last">в наличии </p>\
        <p>'+rd+'шт</p>\
        <p style="color: #aaa">* для заказа кликните в любом месте </p>');
    }
  });


// var bbox = svg.append('rect').attr({
//   width:text[0][0].getBBox().width,
//   height:text[0][0].getBBox().height,
//   x:text[0][0].getBBox().x,
//   y:text[0][0].getBBox().y,
//   fill:'black'
// })

svg.on({'mousemove': function(){
  l1.attr({
    x2: d3.mouse(this)[0],
    y2: d3.mouse(this)[1]
  });
  l2.attr({
    x2: d3.mouse(this)[0],
    y2: d3.mouse(this)[1]
  })
  l3.attr({
    x2: d3.mouse(this)[0],
    y2: d3.mouse(this)[1]
  })
  l4.attr({
    x2: d3.mouse(this)[0],
    y2: d3.mouse(this)[1]
  })
  // text.attr({
  //   x: d3.mouse(this)[0],
  //   y: d3.mouse(this)[1]
  // })
  rect.style({
    left: d3.mouse(this)[0] +10 +'px',
    top: d3.mouse(this)[1] - 20 +'px'
  })
},
'click': function(){
  sh = 1 -sh;
  if(sh){
    d3.select('.zak').attr('style', '');
  }else{
    d3.select('.zak').attr('style', 'none');
  }
}})

var sh = 0;
$('.svg').on('click', function(){
});
