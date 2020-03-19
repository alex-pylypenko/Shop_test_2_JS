
let del_1_price = 710;
let del_2_price = 210;
let del_3_price = 180;

let del_1_name = `Доставка курьерской службой`;
let del_2_name = `Доставка транспортной компанией`;
let del_3_name = `Самовывоз`;



let loadMap = () => {
    
    
    str = `<div class="delivery_direction">
                        <span class="delivery_option_text">Пункт самовывоза</span>
                        <form>
                            <div class="section">
                                <span class="section_name">Станция метро</span>
                                <div class="field_name">

                                    <select>
                                        <option>Кузнецкий мост</option>
                                        <option>Учительский мост</option>
                                        <option>Депутатский мост</option>
                                    </select>

                                </div>                              
                            </div>
                        </form>
                    </div>
                    
                    <div class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.864443592659!2d37.62386141622563!3d55.76085698055555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5ce61f496d%3A0x8cc0313821930f2d!2z0JrRg9C30L3QtdGG0LrQuNC5INC80L7RgdGC!5e0!3m2!1sru!2s!4v1584524881065!5m2!1sru!2s" width="420" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>`;
    
    
    $('div#hidden_part').html(str);
    $('div#hidden_part').show();
};




let closeMap = () => {
    $('div#hidden_part').hide();
};



$('#error').hide();


let checkName = () => {
    let text = document.getElementById('name_name').value;
    let str = ``;
    if(!text.match(/^[аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ-]+$/)){
      
        str = `Имя и фамилия должны содержать русские буквы и "-"`;
        $('#error').html(str);
        $('#error').show();
        
    } else {
        $('#error').hide();
    }
}

let checkSurname = () => {
    let text = document.getElementById('name_surname').value;
    let str = ``;
    if(!text.match(/^[аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ-]+$/)){
      
        str = `Имя и фамилия должны содержать русские буквы и "-"`;
        $('#error').html(str);
        $('#error').show();
        
    } else {
        $('#error').hide();
    }
}




$(document).ready(function() {
    $("#phone").mask("+7 (999) 99 999-99");
  });




$('#name_name').blur(checkName);
$('#name_surname').blur(checkSurname);

$('div#hidden_part').hide();

$('#open_map').click(loadMap);


$('.close_map').click(closeMap);





let delivery1 = function(name, price){
    let str = ``;
    let str2 = ``;
    let str3 = ``;
    
    str = `<div class="product_1_name">
                                ${name}
                            </div>
                            <div class="product_1_price">
                                ${price} &#8381;
                            </div>`;
    
    str2 = `<div class="product_3_name">
                                Сумма с доставкой
                            </div>
                            <div class="product_3_price">
                                ${18344 + price} &#8381;
                            </div>`;
    
    str3 = `<img src="https://png2.cleanpng.com/sh/f0a4f9020b40e758dfad1a07d9134323/L0KzQYi4UsE5N5dnfJGAYUO7RbeCg8g4bJU2TpC5NkC7R4q8WcE2OWQ7TKUEM0K4RYe8TwBvbz==/5a385f9c87dd16.0608795915136439325565.png" alt=""><span class="picture_text">${18344 + price} &#8381;</span>`;
    
    
    $('#menu_right').html(str3);
    $('.section_3 .product_1').html(str2);
    $('div #var_delivery_price').html(str);
    
};




$('#delivery_1').click(delivery1(del_1_name, del_1_price));      /* При вызове 3-х последних функций всегда работает только последняя */
$('#delivery_2').click(delivery1(del_2_name, del_2_price));
$('#open_map').click(delivery1(del_3_name, del_3_price));





/*let delivery2 = e => {
    if ($(e.target).hasClass('close_map')) {
        delivery1(del_2_name, del_2_price);
    }
}*/




/*document.getElementById("delivery_1").addEventListener("click", delivery1(del_1_name, del_1_price));
document.getElementById("delivery_2").addEventListener("click", delivery1(del_2_name, del_2_price));
document.getElementById("open_map").addEventListener("click", delivery1(del_3_name, del_3_price));*/




/*$('#delivery_1').on('click', delivery2);
$('#delivery_2').on('click', delivery2);*/










