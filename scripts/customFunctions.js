function changeMenuColor() {
    let janela = $(window).scrollTop();
    let nav = $('#nav');
    let navLink = $('.nav-link');
    let btnContato = $('.btn-eContato');
    let logoMenu = $('.navbar-logo');
    if (janela == 0) {
        nav.removeClass('bg-light-scrolled');
        nav.addClass('bg-light');
        navLink.removeClass('nav-link-scrolled');
        btnContato.removeClass('btn-eContato-scrolled');
        logoMenu.attr('src','images/logoBranco.svg');
        return;
    }
    nav.removeClass('bg-light');
    nav.addClass('bg-light-scrolled');
    navLink.addClass('nav-link-scrolled');
    btnContato.addClass('btn-eContato-scrolled');
    logoMenu.attr('src','images/logoGradiente.svg');
}

function isElementVisible(elem,ms,arg) {
    const ref = $(elem);
    if (ref.visible()) {
        ref.animate({opacity: 1}, ms);
    }
}


function blink(elem,ms){
    const ref = $(elem);
    setInterval(()=>{
      if(ref.is(':visible')) return ref.hide();
      ref.show();
    },ms);
}

function loadNews(){
    $.get('http://bcpadvogados.com.br/wp-json/wp/v2/posts?per_page=3&_embed',function (data) {
        for(item of data){
            console.log(item);
            $('.section-7-card-grid').append(`
                <div class="section-7-card">
                    <img style="margin-top:10%" class="wordpress-pic" src="images/Rectangle.png"/>
                     <div style="width: 60%">
                        <a target="_blank" href="${item.link}" class="section-7-card-title">${item.title.rendered}</a>
                     </div>
                    <span class="section-7-subtitle">Por: ${item._embedded.author[0].name}</span>
                    <span class="section-7-subtitle">${moment(item.date).format('DD/MM/YYYY')}</span>
                </div>
            `);
        }
    });
}

$(document).ready(()=>{
  blink('.titulo-head',500);
  loadNews();
})
$(document).scroll(() => {
    changeMenuColor();
    isElementVisible('.section-1-title',1000);
    isElementVisible('.section-1-text',1200);
    isElementVisible('.section-1-image',1500);

});

window.scroll({behavior: "smooth"});