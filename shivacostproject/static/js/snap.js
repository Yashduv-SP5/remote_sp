$('.snapdeal').css('background-image', 'url(http://medianama.com/wp-content/uploads/2020/10/snapdeal-11.png.png)')
$('.snapdeal').ready(function(){
var i=0
//   Background Images
  var images = [
    'https://i.gadgets360cdn.com/large/Snapdeal_Diwali_sale_1602156516826.jpg',
  'https://motodigg.files.wordpress.com/2015/01/snapdeal-eoss-jan-3-2015.jpg?w=600&h=376',
  'http://medianama.com/wp-content/uploads/2020/10/snapdeal-11.png.png',
  'https://i.gadgets360cdn.com/large/Snapdeal_Diwali_sale_1602156516826.jpg',
  'https://motodigg.files.wordpress.com/2015/01/snapdeal-eoss-jan-3-2015.jpg?w=600&h=376',
  'http://medianama.com/wp-content/uploads/2020/10/snapdeal-11.png.png',
  'https://i.gadgets360cdn.com/large/Snapdeal_Diwali_sale_1602156516826.jpg',
  'https://motodigg.files.wordpress.com/2015/01/snapdeal-eoss-jan-3-2015.jpg?w=600&h=376',
  'http://medianama.com/wp-content/uploads/2020/10/snapdeal-11.png.png',
   
  ]
 
//   pick body element ID
  var image = $('.snapdeal')
 
//   set initial background-image
  image.css('background-image', 'url(http://medianama.com/wp-content/uploads/2020/10/snapdeal-11.png.png)')
 
//   change image every after 5 seconds
  setInterval(function(){
    image.fadeOut(1000, function(){
      image.css('background-image', 'url(' + images [i] +')')
      i++
      image.fadeIn(3000)
    })
    if(i == images.length){
       i=0
       $('.snapdeal').css('background-image', 'url(http://medianama.com/wp-content/uploads/2020/10/snapdeal-11.png.png)')
     }
  }, 5000)
})
