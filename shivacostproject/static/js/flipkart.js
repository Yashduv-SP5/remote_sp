$('.beat').css('background-image', 'url(https://printablegraphics.in/wp-content/uploads/2017/10/Flipkart-print-ads-Best-prices-768x426.jpg)')
$('.beat').ready(function(){
var i=0
//   Background Images
  var images = [
    'https://flipkartstories.blob.core.windows.net/stories/2017/08/Perfectbuy_banner_V2.jpg',
  'https://www.zingoy.com/blog/wp-content/uploads/2020/09/Flipkart-Banner-Desktop__5__bxqskl-768x169.jpg',
  'https://printablegraphics.in/wp-content/uploads/2017/10/Flipkart-print-ads-Best-prices-768x426.jpg',
'https://image.winudf.com/v2/image1/Y29tLmZsaXBrYXJ0LmFuZHJvaWRfc2NyZWVuXzBfMTU2ODM4MTg1MF8wOTU/screen-0.jpg?fakeurl=1&type=.jpg',
'https://flipkartstories.blob.core.windows.net/stories/2017/08/Perfectbuy_banner_V2.jpg',
  'https://www.zingoy.com/blog/wp-content/uploads/2020/09/Flipkart-Banner-Desktop__5__bxqskl-768x169.jpg',
  'https://printablegraphics.in/wp-content/uploads/2017/10/Flipkart-print-ads-Best-prices-768x426.jpg',
'https://image.winudf.com/v2/image1/Y29tLmZsaXBrYXJ0LmFuZHJvaWRfc2NyZWVuXzBfMTU2ODM4MTg1MF8wOTU/screen-0.jpg?fakeurl=1&type=.jpg',
'https://flipkartstories.blob.core.windows.net/stories/2017/08/Perfectbuy_banner_V2.jpg',
  'https://www.zingoy.com/blog/wp-content/uploads/2020/09/Flipkart-Banner-Desktop__5__bxqskl-768x169.jpg',
  'https://printablegraphics.in/wp-content/uploads/2017/10/Flipkart-print-ads-Best-prices-768x426.jpg',
'https://image.winudf.com/v2/image1/Y29tLmZsaXBrYXJ0LmFuZHJvaWRfc2NyZWVuXzBfMTU2ODM4MTg1MF8wOTU/screen-0.jpg?fakeurl=1&type=.jpg',
  ]
 
//   pick body element ID
  var image = $('.beat')
 
//   set initial background-image
  image.css('background-image', 'url(https://image.winudf.com/v2/image1/Y29tLmZsaXBrYXJ0LmFuZHJvaWRfc2NyZWVuXzBfMTU2ODM4MTg1MF8wOTU/screen-0.jpg?fakeurl=1&type=.jpg)')
 
//   change image every after 5 seconds
  setInterval(function(){
    image.slideUp(1000, function(){
      image.css('background-image', 'url(' + images [i] +')')
      i++
      image.slideDown(3000)
    })
    if(i == images.length){
       i=0
       $('.beat').css('background-image', 'url(https://image.winudf.com/v2/image1/Y29tLmZsaXBrYXJ0LmFuZHJvaWRfc2NyZWVuXzBfMTU2ODM4MTg1MF8wOTU/screen-0.jpg?fakeurl=1&type=.jpg)')
     }
  }, 5000)
})
