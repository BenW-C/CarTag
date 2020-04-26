// Burger Menu Behaviour 
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const $logo = $('.myLogo');
const $button = $('.driverBtn');
let menuActive = false;

menuBtn.addEventListener('click', (e) =>
{
   if(!menuActive)
   {
      $logo.hide();
      $button.hide();
      menuBtn.classList.add('open');
      nav.classList.add('active');
      menuActive = true;
      e.preventDefault();
   }
   else
   {  
      $logo.fadeIn(800);
      $button.fadeIn(800);
      menuBtn.classList.remove('open');
      nav.classList.remove('active');
      menuActive = false;     
      e.preventDefault();
   }
});

// VARIABLES FOR CONTENT MANIPULATION
var content = document.querySelector('.content');
var $content = $('.content');
const $menuBtn = $('.menu-btn');
const $nav = $('nav');
let contentActive = false;
var height = $(window).height();
var $footer = $('.footer');

checkHeight(); // initialize function
$(window).resize(function()
{
   $footer.hide();
   height = $(window).height();  // on resize get new height + call function
   checkHeight();
});

function checkHeight(e) 
{
   $footer.show();
   if (height < 850)
   {

      $content.on('click', () =>
      {

         menuBtn.classList.remove('open'); // Remove active menu when 
         nav.classList.remove('active'); // clicking on content
         if (!contentActive)
         {
            $nav.hide();
            $logo.hide();
            $menuBtn.hide();
            $button.hide();
            content.classList.add('swipeUp');
            contentActive = true;
            e.preventDefault(); // Needed so elements don't fade back in 
         }
         else
         {
            $nav.fadeIn(800);
            $logo.fadeIn(800);
            $menuBtn.fadeIn(800);
            $button.fadeIn(800);
            content.classList.remove('swipeUp');
            contentActive = false;
            e.preventDefault(); // Needed so elements don't fade back in
         }
      })
   }
   else
   {
      $content.off(); // remove click event from content
   }
}

// FOOTER
var $driverBtn = $('.driverBtn');

$(window).scroll(() =>
{
   upOrDown();
});

function upOrDown()
{
   if ($(this).scrollTop() == 250)
   {
      $driverBtn.addClass('active');
      $logo.fadeOut(800);
   }
   else
   {
      $logo.fadeIn(800);
      $driverBtn.removeClass('active');
   }
}