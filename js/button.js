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
var text = svg.append('text').attr({
  x: 0,
  y:0,
  class: 'text'
}).text("клик для заказа");

var  rect = svg.insert('rect', 'text')
.attr('width', 220)
.attr('height', 120);


// var bbox = svg.append('rect').attr({
//   width:text[0][0].getBBox().width,
//   height:text[0][0].getBBox().height,
//   x:text[0][0].getBBox().x,
//   y:text[0][0].getBBox().y,
//   fill:'black'
// })

svg.on('mousemove', function(){
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
  text.attr({
    x: d3.mouse(this)[0],
    y: d3.mouse(this)[1]
  })
  rect.attr({
    x: d3.mouse(this)[0],
    y: d3.mouse(this)[1] - 20
  })
})
