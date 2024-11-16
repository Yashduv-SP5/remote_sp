$('.beat1').css('background-image', 'url(https://rukminim1.flixcart.com/fk-p-flap/844/140/image/b22dfa1a407a355d.jpg?q=50)')
$('.beat1').ready(function(){
var i=0
//   Background Images
  var images = [
    'https://newspaperads.ads2publish.com/wp-content/uploads/2018/05/myntra-the-biggest-beauty-and-fragrance-sale-ad-times-of-india-delhi-29-05-2018.png',
  'https://pbs.twimg.com/ext_tw_video_thumb/1661382572453011457/pu/img/_LeumlhMim9y5kBk.jpg',
  'https://cdn.grabon.in/gograbon/images/merchant/1622288977756.jpg',
     'https://tse1.mm.bing.net/th?id=OIP.GExQFPu41S-brKJiivtnrwHaEK&pid=Api&P=0&h=180',
  'https://pbs.twimg.com/ext_tw_video_thumb/1661382572453011457/pu/img/_LeumlhMim9y5kBk.jpg',
  'https://cdn.grabon.in/gograbon/images/merchant/1622288977756.jpg',
     'https://tse1.mm.bing.net/th?id=OIP.GExQFPu41S-brKJiivtnrwHaEK&pid=Api&P=0&h=180',
  'https://pbs.twimg.com/ext_tw_video_thumb/1661382572453011457/pu/img/_LeumlhMim9y5kBk.jpg',
  'https://cdn.grabon.in/gograbon/images/merchant/1622288977756.jpg',
    
   
  ]
 
//   pick body element ID
  var image = $('.beat1')
 
//   set initial background-image
  image.css('background-image', 'url(https://pbs.twimg.com/ext_tw_video_thumb/1661382572453011457/pu/img/_LeumlhMim9y5kBk.jpg)')
 
//   change image every after 5 seconds
  setInterval(function(){
    image.fadeOut(1000, function(){
      image.css('background-image', 'url(' + images [i] +')')
      i++
      image.fadeIn(3000)
    })
    if(i == images.length){
       i=0
       $('.beat1').css('background-image', 'url(https://pbs.twimg.com/ext_tw_video_thumb/1661382572453011457/pu/img/_LeumlhMim9y5kBk.jpg)')
     }
  }, 5000)
})