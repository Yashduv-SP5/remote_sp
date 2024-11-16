
$('.back').css('background-image', 'url(https://m.media-amazon.com/images/I/61qa3132IFL._SX3000_.jpg)')
$('.back').ready(function(){
var i=0
//   Background Images
  var images = [
    'https://m.media-amazon.com/images/I/61qa3132IFL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71RaBHdyGuL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg',
        'https://m.media-amazon.com/images/I/61qa3132IFL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71RaBHdyGuL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg',
   'https://m.media-amazon.com/images/I/61qa3132IFL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71RaBHdyGuL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg',
        'https://m.media-amazon.com/images/I/61qa3132IFL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71RaBHdyGuL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg',
   
  ]
 
//   pick body element ID
  var image = $('.back')
 
//   set initial background-image
  image.css('background-image', 'url(https://images-eu.ssl-images-amazon.com/images/G/31/img22/Laptops/Smartchoice/D72653193_IN_PC_Laptops_BAU-Feb-Smart-choice-laptops_1500x450_2.jpg)')
 
//   change image every after 5 seconds
  setInterval(function(){
    image.fadeOut(1000, function(){
      image.css('background-image', 'url(' + images [i] +')')
      i++
      image.fadeIn(3000)
    })
    if(i == images.length){
       i=0
       $('.back').css('background-image', 'url(https://images-eu.ssl-images-amazon.com/images/G/31/img22/Laptops/Smartchoice/D72653193_IN_PC_Laptops_BAU-Feb-Smart-choice-laptops_1500x450_2.jpg)')
     }
  }, 5000)
})


$('body').ready(function(){
  var j= -1;
 
//   Background Images
  var images = [
    'https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?w=2000',
    'https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?size=626&ext=jpg',
     'https://images.unsplash.com/photo-1684410767032-1ce876f35aa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1092&q=80',
'https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=398&q=80',
'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
 'https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?w=2000',
    'https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?size=626&ext=jpg',
     'https://images.unsplash.com/photo-1684410767032-1ce876f35aa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1092&q=80',
'https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=398&q=80',
'https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
 
  ]
 
//   pick body element ID
  var image = $('body')
 
//   set initial background-image
  image.css('background-image', 'url(https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?size=626&ext=jpg)')
 
//   change image every after 5 seconds
  setInterval(function(){
    image.fadeOut(0, function(){
      image.css('background-image', 'url(' + images [j++] +')')
      image.fadeIn(0)
    })
    if(j+1 == images.length){
      j=0
      image.css('background-image', 'url(https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?size=626&ext=jpg)')
     }
  }, 5000)
})

