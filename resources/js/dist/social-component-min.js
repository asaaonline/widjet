

//   $( document ).ready(function() {
    
//     var x = document.URL;
//     console.log("ready!");
//     $(".test").hover(
//         function () {
//             console.log("print");
//         }
//     );

//     var gogle="https://plus.google.com/share?url="+x;

//         $("#google").attr("href",gogle);
        

//     var fbButton = document.getElementById('fb-share-button');
//     var url = window.location.href;
    
//     fbButton.addEventListener('click', function() {
//         window.open('https://www.facebook.com/sharer/sharer.php?u=' + url,
//             'facebook-share-dialog',
//             'width=800,height=600'
//         );
//         return false;
//     });

//     var ur="https://www.linkedin.com/shareArticle?mini=true&url="+x+"&title=LinkedIn%20Developer%20Network&summary=My%20favorite%20developer%20program&source=LinkedIn";


//     $('#link_id').click(function(){
//         window.open(ur, 'window name', 'window settings');
//         return false;
//       });

// });



// function test(value) {
//     console.log(value);
//             if ($('#fun').is(":checked")) {
//                 bootbox.prompt({
//                     title: "This is a prompt with a set of checkbox inputs!",
//                     inputType: 'checkbox',
//                     inputOptions: [
//                         {
//                             text: 'Choice One',
//                             value: '1',
//                         },
                    
//                     ],
//                     callback: function (result) {
//                         console.log(result);
//                     }
//                 });
//             }
    
    
//         }






$(document).ready(function () {
    var x = document.URL;

    $('[data-toggle="tooltip"]').tooltip();  
    console.log("ready!");
    $(".test").hover(
        function () {
            console.log("print");
        }
    );
    var gogle = "https://plus.google.com/share?url=" + x;

    $("#google").attr("href", gogle);
    // $("#a").append("");

    ///////facebook/////////////////////////////////////////
    $(".ui.facebook.button").click(function () {
        FB.ui({
            method: 'share',
            href: x,
        }, function (response) { });
    })

    var fbButton = document.getElementById('fb-share-button');
    var url = "http://www.facebook.com";

    fbButton.addEventListener('click', function () {
        if($("#fb-share-button").attr("avalability")==='true'){
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + url,
            'facebook-share-dialog',
            'width=800,height=600'
        );
        return false;
        }
    });


    ////////////////////linkdn//////////////////////////////////////////
    var ur = "https://www.linkedin.com/shareArticle?mini=true&url=" + x + "&title=LinkedIn%20Developer%20Network&summary=My%20favorite%20developer%20program&source=LinkedIn";



    $('#link_id').click(function () {
        if($("#link_id").attr("avalability")==='true'){
        window.open(ur, 'window name', 'window settings');
        return false;
        }
    });

    ///////////////////////pinterest//////////////////////////////////////

    // var pinOneButton = document.querySelector('.pinterest');
    // pinOneButton.addEventListener('click', function (e) {


    //     PinUtils.pinAny();
    // });


    //skype//////////////////////
    (function (r, d, s) {
      
        r.loadSkypeWebSdkAsync = r.loadSkypeWebSdkAsync || function (p) {
            var js, sjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(p.id)) { return; }
            js = d.createElement(s);
            js.id = p.id;
            js.src = p.scriptToLoad;
            js.onload = p.callback
            sjs.parentNode.insertBefore(js, sjs);
        };
        var p = {
            scriptToLoad: 'https://swx.cdn.skype.com/shared/v/latest/skypewebsdk.js',
            id: 'skype_web_sdk'
        };
        if($("#skype").attr("avalability")==='true'){
        r.loadSkypeWebSdkAsync(p);
        }
    })(window, document, 'script');



    /////////////////xing//////////////////////////////
    var xingUrl = "https://www.xing.com/spi/shares/new?url=" + x;
    $('#xing').click(function () {
        console.log('press');
        if($("#xing").attr("avalability")==='true'){
        window.open(xingUrl, 'window name', 'window settings');
        return false;
        }
    });

    /////////////////////////////////// tumblrUrl/////////////////
    var tumblrUrl = "http://tumblr.com/widgets/share/tool?canonicalUrl=" + x
    $('#tumblr').click(function () {
        console.log('press');
        if($("#tumblr").attr("avalability")==='true'){
        window.open(tumblrUrl, 'window name', 'window settings');
        return false;
        }
    });


    ///////////////////////////Redit////////////////////////////////////
    var redditUrl = "http://www.reddit.com/submit?url=" + x
    $('#reddit').click(function () {
        console.log('press');
        if($("#reddit").attr("avalability")==='true'){
        window.open(redditUrl, 'window name', 'window settings');
        return false;
        }
    });



/////////////////////////////whatsApp/////////////////////////////////////////
  var whatsappUrl = "whatsapp://send?text=" + x
    $('#whatsapp').click(function () {
        console.log('press whatsApp');
        if($("#whatsapp").attr("avalability")==='true'){
        window.open(whatsappUrl, 'window name', 'window settings');
        return false;
        }
    });


/////////////////////////////Flattr/////////////////////////////////////////
var FlattrppUrl = "https://flattr.com/submit/auto?url=" + x
$('#flattr').click(function () {
    console.log('press Flattr');
    if($("#flattr").attr("avalability")==='true'){
    window.open(FlattrppUrl, 'window name', 'window settings');
    return false;
    }
});

/////////////////////////////buffer/////////////////////////////////////////
var bufferUrl = "https://bufferapp.com/add?url="+x
$('#buffer').click(function () {
    console.log('press buffer');
    if($("#buffer").attr("avalability")==='true'){
    window.open(bufferUrl, 'window name', 'window settings');
    return false;
    }
});

/////////////////////////////Vkontakte/////////////////////////////////////////
var VkontakteUrl = "http://vkontakte.ru/share.php?url=" + x
$('#Vkontakte').click(function () {
    console.log('press Vkontakte' );
    if($("#Vkontakte").attr("avalability")==='true'){
    window.open(VkontakteUrl, 'window name', 'window settings');
    return false;
    }
});

/////////////////////////////stumbleupon/////////////////////////////////////////
var stumbleuponUrl = "http://www.stumbleupon.com/submit?url="+x+"&amp;title=Simple Share Buttons"
$('#stumbleupon').click(function () {
    console.log('press');
    if($("#stumbleupon").attr("avalability")==='true'){
    window.open(stumbleuponUrl, 'window name', 'window settings');
    return false;
    }
});

/////////////////////////////digg/////////////////////////////////////////
var diggUrl = "http://www.digg.com/submit?url=" + x
$('#digg').click(function () {
    console.log('press');
    if($("#digg").attr("avalability")==='true'){
    window.open(diggUrl, 'window name', 'window settings');
    return false;
    }
});

/////////////////////////////Yahoo/////////////////////////////////////////
var YahooUrl = "http://compose.mail.yahoo.com/?body={url}" + x
$('#Yahooapp').click(function () {
    console.log('press');
    if($("#Yahooapp").attr("avalability")==='true'){
    window.open(YahooUrl, 'window name', 'window settings');
    return false;
    }
});

/////////////////////////////blogger/////////////////////////////////////////
var bloggerUrl = "https://www.blogger.com/blog-this.g?u=" + x
$('#blogger').click(function () {
    console.log('press');
    if($("#blogger").attr("avalability")==='true'){
    window.open(bloggerUrl, 'window name', 'window settings');
    return false;
    }
});















    $('.check').click(function () {
        
        console.log('checked');
        var id = $(this).attr('id');
        var style = $(this).attr('styles')
        if ($(this).is(":checked")) {
            bootbox.prompt({
                title: "Do you agree to the pricacy policy and will adhere to them unconditionally",
                inputType: 'checkbox',
                inputOptions: [
                    {
                        text: 'I agree',
                        value: '1',
                    },
    
                ],
                callback: function (result) {
                    tes44(id, result, style);
                }
            });
        } else {
            uncheck(id,style);
        }
    
    
    });


    function tes44(id, result, style) {
        console.log('value1', id);
        console.log('result', result);
    if(result!==null){
        if (result.length == 1) {
            switch (style) {
                case "one": {
                    var id2 = $('#' + id).closest('.row').find('img').attr('src', main+'/images/' + id + '_selected.png');
                    
                }
                    break;
                case "two": {
            
                }
                    break;
                case "three": {
                   
                }
                    break;
            }
            $('#' + id).closest('.row').find('img').parents().attr('avalability','true');
            // console.log('pp',id2);
        } else {
            $('#' + id).closest('.row').find('img').parents().attr('avalability','false');
           $('#'+id).prop('checked',false);
        }
    }else{
        uncheck(id,style);

    }
    }
    
    
    function uncheck(id,style) {
        $('#'+id).prop('checked',false);
        if(style=='one'){
            $('#' + id).closest('.row').find('img').attr('src', main+'/images/' + id + '_unselected.png');
        }
        
        $('#' + id).closest('.row').find('img').parents().attr('avalability','false');
    }

    
});











////////////////check box///////////////////////////

// $(".check").click(()=>{
//     console.log("dddd")
//     console.log($(this));
// })


        // $('.check').click(function(){
        //     var id = $(this).attr('id');
        //     console.log(id);
        //     // switch(id){}


        //   });
        