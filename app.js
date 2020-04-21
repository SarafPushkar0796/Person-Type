$(document).ready(() => {
    const work = $('#work');
    const social = $('#social');
    const sleep = $('#sleep');
    var person = $('#person');
    
    work.change(function(){

        // when work 'true' or work and sleep 'true'
        if($(this).prop("checked") == true || $(this).prop("checked") == true && sleep.prop("checked") == true){
            person.html('So you are a <span style="font-size: 24px;text-decoration: underline;">Workaholic</span> person &#129297;.');

            // toggle 'social' when 'work'
            social.prop('checked', false);
        } else if($(this).prop("checked") == false && social.prop('checked') == false && sleep.prop('checked') == false){ 
            person.html('So you like to do <span style="font-size: 24px;text-decoration: underline;">Nothing !</span> &#129315;.');
        } else if($(this).prop("checked") == false && sleep.prop('checked') == true){
            person.html('So you just like to <span style="font-size: 24px;text-decoration: underline;">Sleep</span> &#128564;.');
        }
    });

    social.change(function(){

        // when social 'true' or social and sleep 'true'
        if($(this).prop("checked") == true || $(this).prop("checked") == true && sleep.prop("checked") == true){
            person.html('So you are a <span style="font-size: 24px;text-decoration: underline;">Social</span> person &#128526;.');

            // toggle 'work' when 'social'
            work.prop('checked', false);
        } else if($(this).prop("checked") == false && work.prop('checked') == false && sleep.prop('checked') == false){ 
            person.html('So you like to do <span style="font-size: 24px;text-decoration: underline;">Nothing !</span> &#129315;.');
        }  else if($(this).prop("checked") == false && sleep.prop('checked') == true){
            person.html('So you just like to <span style="font-size: 24px;text-decoration: underline;">Sleep</span> &#128564;.');
        }
    });

    sleep.change(function(){
        if(work.prop('checked') == true && $(this).prop("checked") == true){
            work.prop('checked', true);

            person.html('So you are a <span style="font-size: 24px;text-decoration: underline;">Workaholic</span> person &#129297;.');
        } else if(social.prop('checked') == true && $(this).prop("checked") == true){
            social.prop('checked', true);

            person.html('So you are a <span style="font-size: 24px;text-decoration: underline;">Social</span> person &#128526;.');
        } else if($(this).prop("checked") == true){
            person.html('So you just like to <span style="font-size: 24px;text-decoration: underline;">Sleep</span> &#128564;.');
        } else if($(this).prop("checked") == false && social.prop('checked') == true) {
            person.html('So you are a <span style="font-size: 24px;text-decoration: underline;">Social</span> person &#128526;.');
        } else if($(this).prop("checked") == false && work.prop('checked') == true){
            person.html('So you are a <span style="font-size: 24px;text-decoration: underline;">Workaholic</span> person &#129297;.');
        } else { 
            person.html('So you like to do <span style="font-size: 24px;text-decoration: underline;">Nothing !</span> &#129315;.');            
        }
    });
});