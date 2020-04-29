// Burger Menu Behaviour 
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const $logo = $('.myLogo');
const $button = $('.driverBtn');
const $window = $(window);
let menuActive = false;

menuBtn.addEventListener('click', (e) =>
{
   if(!menuActive)
   {
      if ($window.height() < 361)
      {
         $content.hide();
         $logo.hide();
         $button.hide();
         menuBtn.classList.add('open');
         nav.classList.add('active');
         menuActive = true;
         e.preventDefault();
      }
      else
      {
         $logo.hide();
         $button.hide();
         menuBtn.classList.add('open');
         nav.classList.add('active');
         menuActive = true;
         e.preventDefault();
      }

   }
   else
   {  
      $content.fadeIn(800);
      $logo.fadeIn(800);
      $button.fadeIn(800);
      menuBtn.classList.remove('open');
      nav.classList.remove('active');
      menuActive = false;     
      e.preventDefault();
   }
});

// JS FOR CONTENT
var $height = $window.height();
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
});

$window.scroll(() => 
{
   $scrollPos = $window.scrollTop();          // Get position of scroll for footer
   if ($scrollPos > 0)
   {
      showScreen();
      $content.removeClass('swipeUp');
   }   
});

toggleContent();                                   // Check everything
function toggleContent()
{
   if ($height < 900)    // Add click event when smaller screen
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
   $nav.hide();
   $logo.hide();
   $menuBtn.hide();
   $button.hide();
}
function showScreen()                         // Hide items
{
   $nav.fadeIn(400);
   $logo.fadeIn(400);
   $menuBtn.fadeIn(400);
   $button.fadeIn(400);
}

