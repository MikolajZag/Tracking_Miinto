const button_first=document.querySelector('.button_first');

button_first.addEventListener('click', ()=> {
    const input=document.querySelector('#input_field').value;

    window.open('https://tracktrace.dpd.com.pl/'+input );
});

const button_second=document.querySelector('.button_second');

button_second.addEventListener('click', ()=> {
    const input=document.querySelector('#input_field').value;

    window.open('https://www.dhl.com/nl-en/home/tracking/tracking-express.html?submit=1&tracking-id='+input );
});

const button_third=document.querySelector('.button_third');

button_third.addEventListener('click', ()=> {
    const input=document.querySelector('#input_field').value;

    window.open('https://gls-group.com/PL/pl/sledzenie-paczek.html?match='+input );
});

const button_fourth=document.querySelector('.button_fourth');

button_fourth.addEventListener('click', ()=> {
    const input=document.querySelector('#input_field').value;

    window.open('https://sporing.posten.no/sporing/'+input );
});
