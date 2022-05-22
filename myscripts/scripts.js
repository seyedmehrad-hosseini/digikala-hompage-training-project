
var body_height =window.innerHeight

if (window.innerWidth <= 1200){
    
   
    // var window_width = window.innerWidth
    document.getElementById("locationmodal").style.bottom = `-${body_height}px`;
    document.getElementById("mydrop").style.bottom = `-${body_height}px`;
    // document.getElementById("mobilelist").style.right = `-${window_width}px`;
    document.getElementById("modal-black-id").classList.remove('display-on')
    document.getElementById("modal-close-id").classList.remove('display-on')
    document.getElementById("modal-black-location").classList.remove('display-on')
    document.getElementById("modal-close-location").classList.remove('display-on')


}
else{

        document.getElementById("mydrop").classList.remove("display-on")
        document.getElementById("locationmodal").classList.remove("display-on")

}
window.addEventListener( "resize",function change_bottom(){

    document.getElementById("move-body").style.transform = "translate(0px, 0px)" 
    document.getElementById("suggest-slider-move").style.transform = "translate(0px, 0px)" 
    document.getElementById("brands-move").style.transform = "translate(0px, 0px)" 
    document.getElementById("bestsell-move").style.transform = "translate(0px, 0px)" 
    document.getElementById("search-result-move").style.transform = "translate(0px, 0px)" 

    document.getElementById("move-body").setAttribute("value" ,`0`)  
    document.getElementById("suggest-slider-move").setAttribute("value" ,`0`)  
    document.getElementById("brands-move").setAttribute("value" ,`0`)  
    document.getElementById("bestsell-move").setAttribute("value" ,`0`)
    document.getElementById("search-result-move").setAttribute("value" ,`0`)  
  

    // console.log(document.getElementById("move-body").getAttribute("value"))



    var body_height =window.innerHeight
    if (window.innerWidth <= 1200){

        document.getElementById("mydrop").classList.add("display-on")
        document.getElementById("locationmodal").classList.add("display-on")

        document.getElementById("locationmodal").style.bottom = `-${body_height}px`;
        document.getElementById("mydrop").style.bottom = `-${body_height}px`;
        document.getElementById("modal-black-id").classList.remove('display-on')
        document.getElementById("modal-close-id").classList.remove('display-on')
        document.getElementById("modal-black-location").classList.remove('display-on')
        document.getElementById("modal-close-location").classList.remove('display-on')

    }
    else{

        document.getElementById("mydrop").classList.remove("display-on")
        document.getElementById("locationmodal").classList.remove("display-on")

    }
})
function dropdown(myattrbutes){

    //Takes a modaland a screen for the darkness behind the modal and a colorless screen
    //  to close the modal,whit(this and data-) and gives them a class to active.

    var mydropid = document.getElementById(myattrbutes.id).getAttribute('data-dropid')
    var mydrop = document.getElementById(mydropid)
    var myblackid = document.getElementById(myattrbutes.id).getAttribute('data-black')
    var mycloseid = document.getElementById(myattrbutes.id).getAttribute('data-close')

    if(window.innerWidth >= 1200){//in the pc
        

        mydrop.classList.add('display-on' )

        setTimeout(() => { 
            mydrop.classList.add('opacity-on' )
        }, 10);

        

        document.getElementById(myblackid).classList.add('display-on')
        document.getElementById(mycloseid).classList.add('display-on')
    }

    else{//in the mobile

        mydrop.classList.add('mobile-search-on' ,'display-on' )
        document.getElementById('close-search-mobile').style.display='block'

    }

}
function closedrop(myattrbutes){

        //Takes a modaland a screen for the darkness behind the modal and a colorless screen
    //  to close the modal,whit(this and data-) and gives them a class to deactive.
    
    var mydropid = document.getElementById(myattrbutes.id).getAttribute('data-dropid')
    var mydrop = document.getElementById(mydropid)
    var myblackid = document.getElementById(myattrbutes.id).getAttribute('data-black')
    var mycloseid = document.getElementById(myattrbutes.id).getAttribute('data-close')
    console.log(myblackid , mycloseid)
  
    if(window.innerWidth >= 1200){//in the pc

        
        
        mydrop.classList.remove('opacity-on' )

        setTimeout(() => {
 
            mydrop.classList.remove('display-on' )

        }, 500);

        document.getElementById(myblackid).classList.remove('display-on')
        document.getElementById(mycloseid).classList.remove('display-on')

    }
    else if(mydropid == 'mobilelist'){//just deactive mobile list

        document.getElementById(myblackid).classList.remove('display-on')
        document.getElementById(mycloseid).classList.remove('display-on')
        document.getElementById(mydropid).style.right = '-312px'

    }
    else{//in the mobile

        myattrbutes.classList.remove('mobile-search-on')
        // document.getElementById('close-search-mobile').style.display='none'



    }



}

//This function only works on a pc.
// When scrolling down, the bottom of the header goes up, and when scrolling up,
// that part returns to its place.
lastpageoffset = 0
window.addEventListener("scroll" ,function header_position() {
    var fade_header = document.getElementById('menulist-of-header')

    if(window.innerWidth >= 1200){

        if(window.pageYOffset > 130){
            if(window.pageYOffset < lastpageoffset  ){

                fade_header.style.bottom="-60px";
        
            }
            else{
    
                fade_header.style.bottom="0px";
            }
        }
    }
    lastpageoffset = window.pageYOffset //مقدار را  ذخیره می کند تا مقدار جدید اسکرول را با قبلی مقایسه کند


    
})

    //Takes a menumobile and a screen for the darkness behind the modal and a colorless screen
    //  to close the modal,whit(this and data-) and gives them a class to active.
function dropmenu(attribute) {

    var mobil_list_id = document.getElementById(attribute.id).getAttribute('data-dropid')
    var myblackid = document.getElementById(attribute.id).getAttribute('data-black')
    var mycloseid = document.getElementById(attribute.id).getAttribute('data-close')

    document.getElementById(myblackid).classList.add('display-on')
    document.getElementById(mycloseid).classList.add('display-on')
    document.getElementById(mobil_list_id).style.right = '0px'
    
}

i = 0
function big_slider(attribute) {

    var slider_box_id = document.getElementById(attribute.id).getAttribute('data-box-id')
    var bottom_box_id = document.getElementById(attribute.id).getAttribute("data-bottomsbox-id")
    var img_active = document.getElementById(attribute.id).getAttribute("data-img-active")
    var bottom_active = document.getElementById(attribute.id).getAttribute("data-bottom-active")

    var my_a_tag = document.getElementById(slider_box_id).getElementsByTagName('a')
    var my_li_tag = document.getElementById(bottom_box_id).getElementsByTagName('li')
    console.log(i)
    if(attribute.id == "nextslide"){

        my_a_tag[i].classList.remove(img_active)
        my_li_tag[i].classList.remove(bottom_active)

        i = (i + 1) % my_a_tag.length //وقتی به اخری رسید باعث میشه برگرده اول

        my_a_tag[i].classList.add(img_active)
        my_li_tag[i].classList.add(bottom_active)


    }else{

        my_a_tag[i].classList.remove(img_active)
        my_li_tag[i].classList.remove(bottom_active)

        i = (i - 1 + my_a_tag.length) % my_a_tag.length  // وقتی به اولی رسید باعث میشه برگرده اخر
        my_a_tag[i].classList.add(img_active)
        my_li_tag[i].classList.add(bottom_active)


    }
    
}
function body_slider(attribute) {
    
    var next_or_prev = document.getElementById(attribute.id).getAttribute('value')//for Determining the next or prev
    var move_body_id = document.getElementById(attribute.id).getAttribute('data-move')
    var body_slider_id = document.getElementById(attribute.id).getAttribute('data-slider-body')
    var movement = parseFloat(document.getElementById(attribute.id).getAttribute('data-number-movement'))
    var move_width = document.getElementById(move_body_id).clientWidth
    var body_width = document.getElementById(body_slider_id).clientWidth
    var y = parseFloat(document.getElementById(move_body_id).getAttribute("value"))
    console.log(y)

   
    if(next_or_prev == 'prev'  & y <= (move_width)-(body_width)){ //این برا دکمه برگشت کار میکنه و قسمت دوم باعث میشه اسلایدر ما بیش از حد به سمت راست نره
        
        y = y + movement //مقداری که اسلایدار جابجا شده با مقداری که باید جابجا بشه جمع میکنه و ترنسلیت میشه همون قدر
        
        document.getElementById(move_body_id).style.transform = `translate(${y}px , 0px)`
        document.getElementById(move_body_id).setAttribute("value" ,`${y}`)  
        console.log(y)
    }else if( next_or_prev == 'next' & y !== 0){//این برا دکمه بعدی کار میکنه و قسمت دوم باعث میشه اسلایدر ما وقی به انتهای قسمت راست رسید دیگه بیش تر از اون به چپ نره
        
        y = y - movement//مقدار جابجایی از مقداری که اسلایدر جابجا شده کم میشه
        
        document.getElementById(move_body_id).style.transform = `translate(${y}px , 0px)`
        document.getElementById(move_body_id).setAttribute("value" ,`${y}`)

    
    }
    
}

function openlist(attribute){
    
    var opened_list_id = document.getElementById(attribute.id).getAttribute("data-listid")
    document.getElementById(attribute.id).classList.toggle("category-list-on")

    console.log(document.getElementById(attribute.id).getElementsByTagName("i"))
    document.getElementById(attribute.id).getElementsByTagName("i")[0].classList.toggle("scale-arrow")
    document.getElementById(opened_list_id).classList.toggle("list-on")
}



var products = [ 
    "باتری قلمی و نیم قلمی ",
    "باتری آلکالاین",
    "باتری پاناسونیک",
    "باتری پنانسینگ",
    "گیتار یاماهاC40",
    "گیتاردایموند مدل melodi212",
    "گیتار دایموند مدل TS600",
    "لباس،پیراهن مردانه مدلbn02",
    "لباس،پیراهن مردانه مدل ناوالس",
    "لباس،پیراهن مردانه مدل اسپینر",
    "کیف دوشی زنانه مدل 01",
    "کیف دوشی زنانه مدل 02",
    "کیف دوشی زنانه مدل 03",
    "کیف دوشی زنانه مدل 04",
    "لباسشویی مدل 01",
    "لباسشویی مدل 02",
    "لباسشویی مدل 03",
    "لباسشویی مدل 04",
    "عطر زنانه سموا مدل Eau de parfum حجم ۱۰۰ میلی لیتر",
    "عطر زنانه شالیز مدل EDT حجم 50میلی لیتر"


]

var products_img = [
    "1-batri",
    "2-batri2",
    "3-batri3",
    "4-batri4",
    "5-giutar1",
    "6-giutar2",
    "7-giutar3",
    "8-shirt",
    "9-shirt2",
    "10-tshirt",
    "11-kif",
    "12-kif2",
    "13-kif3",
    "14-kif4",
    "15-lebasshoi1",
    "16-lebasshoi2",
    "17-lebasshoi3",
    "18-lebasshoi4",
    "19-atr1",
    "20-atr2",


]

function search_result(attribute){

    document.getElementById("search-result-move").style.transform = "translate(0px, 0px)" 
    document.getElementById("search-result-move").setAttribute("value" ,`0`)  
    var search_move_id = document.getElementById("search-result-move")
    var input_value = document.getElementById(attribute.id).value

    
    search_move_id.style.opacity = "0"

    setTimeout(() => {

        if( input_value  !== 0 & input_value !==''){

            document.getElementById("search-result-body").style.display ="flex"
            var a = search_move_id.getElementsByTagName("div").length

            for(l = a-1 ; l >=0 ; l--){
    
                search_move_id.removeChild(search_move_id.getElementsByTagName("div")[l])

            }
        
           
        
            var products_results = []
            var products_img_results =[]

            for(k=0 ; k< products.length  ; k++ ){
        
                if( products[k].indexOf(input_value) !== -1){
        
                    products_results.push(products[k])
                    products_img_results.push(products_img[k])
                }
            }
        
        
            for(j=0 ; j < products_results.length ;j++ ){
        
                var a = document.createElement("div")
                document.getElementById("search-result-move").appendChild(a)
        
            }
        
            for(h=0 ; h < products_results.length ;h++ ){
        
                var tag_img = document.createElement("img")
                var tag_a = document.createElement("a")
        
        
                search_move_id.getElementsByTagName("div")[h].appendChild(tag_img)
                search_move_id.getElementsByTagName("div")[h].appendChild(tag_a)
        
                search_move_id.getElementsByTagName("div")[h].getElementsByTagName("a")[0].innerHTML = `${products_results[h]}`
                search_move_id.getElementsByTagName("div")[h].getElementsByTagName("a")[0].href= "#"
                search_move_id.getElementsByTagName("div")[h].getElementsByTagName("img")[0].src = `images/search-result/${products_img_results[h]}.jpg`
    
        
            }
        
            setTimeout(() => {
                search_move_id.style.opacity = "1"
            }, 1000);

            search_body_id = document.getElementById("search-result-body")
            console.log(search_move_id.clientWidth ,search_body_id.clientWidth)
            if(search_move_id.clientWidth <=search_body_id.clientWidth){

                document.getElementById("next-slider-search").style.display ="none"
                document.getElementById("prev-slider-search").style.display ="none"
            }else{
                document.getElementById("next-slider-search").style.display ="block"
                document.getElementById("prev-slider-search").style.display ="block"
            }
        }
        else{
            setTimeout(() => {
                document.getElementById("search-result-body").style.display ="none"
    
            }, 100);
       

          
    
            
        }
    }, 1000);

}