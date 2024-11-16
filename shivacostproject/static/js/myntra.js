$('.myntra').css('background-image', 'url(https://newspaperads.ads2publish.com/wp-content/uploads/2018/05/myntra-the-biggest-beauty-and-fragrance-sale-ad-times-of-india-delhi-29-05-2018.png)')
$('.myntra').ready(function(){
var i=0
//   Background Images
  var images = [
    'https://newspaperads.ads2publish.com/wp-content/uploads/2018/05/myntra-the-biggest-beauty-and-fragrance-sale-ad-times-of-india-delhi-29-05-2018.png',
  'https://indiacityblog.com/wp-content/uploads/2020/10/3c3d9bc85cfa8c349613803f81e67378-scaled.jpg',
  'https://cdn.flipshope.com/blog/wp-content/uploads/2020/06/Myntra-EORS-Offers-768x854.jpg',
  'https://pbs.twimg.com/ext_tw_video_thumb/1661382572453011457/pu/img/_LeumlhMim9y5kBk.jpg',
    https://newspaperads.ads2publish.com/wp-content/uploads/2018/05/myntra-the-biggest-beauty-and-fragrance-sale-ad-times-of-india-delhi-29-05-2018.png',
  'https://indiacityblog.com/wp-content/uploads/2020/10/3c3d9bc85cfa8c349613803f81e67378-scaled.jpg',
  'https://cdn.flipshope.com/blog/wp-content/uploads/2020/06/Myntra-EORS-Offers-768x854.jpg',
  'https://pbs.twimg.com/ext_tw_video_thumb/1661382572453011457/pu/img/_LeumlhMim9y5kBk.jpg',
    https://newspaperads.ads2publish.com/wp-content/uploads/2018/05/myntra-the-biggest-beauty-and-fragrance-sale-ad-times-of-india-delhi-29-05-2018.png',
  'https://indiacityblog.com/wp-content/uploads/2020/10/3c3d9bc85cfa8c349613803f81e67378-scaled.jpg',
  'https://cdn.flipshope.com/blog/wp-content/uploads/2020/06/Myntra-EORS-Offers-768x854.jpg',
  'https://pbs.twimg.com/ext_tw_video_thumb/1661382572453011457/pu/img/_LeumlhMim9y5kBk.jpg',
  ]
 
//   pick body element ID
  var image = $('.myntra')
 
//   set initial background-image
  image.css('background-image', 'url(https://newspaperads.ads2publish.com/wp-content/uploads/2018/05/myntra-the-biggest-beauty-and-fragrance-sale-ad-times-of-india-delhi-29-05-2018.png)')
 
//   change image every after 5 seconds
  setInterval(function(){
    image.fadeOut(1000, function(){
      image.css('background-image', 'url(' + images [i] +')')
      i++
      image.fadeIn(3000)
    })
    if(i == images.length){
       i=0
       $('.myntra').css('background-image', 'url(https://cdn.flipshope.com/blog/wp-content/uploads/2020/06/Myntra-EORS-Offers-768x854.jpg)')
     }
  }, 5000)
})