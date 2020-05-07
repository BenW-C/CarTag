// Burger Menu Behaviour 
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const $logo = $('.myLogo');
const $button = $('.driverBtn');
const $window = $(window);
let menuActive = false;
const $langBtn = $('.language');

menuBtn.addEventListener('click', () =>
{
   if(!menuActive)
   {
      if ($window.height() < 600 || $window.width() < 812)
      {
         $content.hide();
         $logo.hide();
         $button.hide();
         $langBtn.hide();
         menuBtn.classList.add('open');
         nav.classList.add('active');
         menuActive = true;
      }
      else
      {
         $logo.hide();
         $button.hide();
         $langBtn.hide();
         menuBtn.classList.add('open');
         nav.classList.add('active');
         menuActive = true;
      }

   }
   else
   {  
      $langBtn.fadeIn(800);
      $content.fadeIn(800);
      $logo.fadeIn(800);
      $button.fadeIn(800);
      menuBtn.classList.remove('open');
      nav.classList.remove('active');
      menuActive = false;     
   }
});

// JS FOR CONTENT
var $height = $window.height();
var $width = $window.width();
var $scrollPos = $window.scrollTop();
var $content = $('.content');
var $menuBtn = $('.menu-btn');
var $nav = $('nav');
var contentActive = false;
var $footer = $('footer');

$window.resize(() => 
{
   $footer.hide();
   $height = $window.height();                // Get height on resize
   $width = $window.width();
});

$window.scroll(() => 
{  
   $scrollPos = $window.scrollTop();          // Get position of scroll for footer
   $height = $window.height();                // Get height on resize
   $width = $window.width();
   if ($scrollPos > 0)
   {
      showScreen();
      $content.removeClass('swipeUp');       // remove both active menus when scrolling down
      nav.classList.remove('active');
      menuBtn.classList.remove('open');
      $content.fadeIn(800);
   }
   if ($scrollPos == 250)
   {
      $button.addClass('active');
   }
   else
   {
      $button.removeClass('active');
   }  
});

toggleContent();                                   // Check everything
function toggleContent()
{
   if ($height < 900 || $width < 1200)    // Add click event when smaller screen
   {
      $content.click(() =>
      {
         $menuBtn.removeClass('open');    // Remove active menu when 
         $nav.removeClass('active');      // clicking on content

         if (!contentActive && $scrollPos >= 0)
         {
            contentActive = true;
            clearScreen();
            $content.addClass('swipeUp');
            $window.scrollTop(0);           // Show content instead of footer
         }
         else
         {
            $content.removeClass('swipeUp');
            contentActive = false;       
            showScreen();            
         }
      });
   }
   else
   {
      $content.off();                          // Remove click event when screen is bigger
   }
}

function clearScreen()                        // Show items
{
   $langBtn.hide();
   $nav.hide();
   $logo.hide();
   $menuBtn.hide();
   $button.hide();
}
function showScreen()                         // Hide items
{
   $langBtn.fadeIn(400);
   $nav.fadeIn(400);
   $logo.fadeIn(400);
   $menuBtn.fadeIn(400);
   $button.fadeIn(400);
}

