/* Premium-but-calm interaction helpers */
(function(){
  // Footer year
  var year = document.getElementById("year");
  if(year){ year.textContent = new Date().getFullYear(); }

  // Add a subtle shadow to the header after a tiny scroll
  function onScroll(){
    if(window.scrollY > 8){
      document.body.classList.add("header-scrolled");
    }else{
      document.body.classList.remove("header-scrolled");
    }
  }
  window.addEventListener("scroll", onScroll, {passive:true});
  onScroll();

  // Smooth scroll for in-page anchors (respects reduced motion)
  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!prefersReduced){
    document.documentElement.style.scrollBehavior = "smooth";
  }

  // Scroll reveal: calm, staggered, and opt-out friendly
  if("IntersectionObserver" in window && !prefersReduced){
    var revealTargets = Array.prototype.slice.call(
      document.querySelectorAll(
        ".hero-card, .embed-slot, .media, .section, .card, .step, .cta, details"
      )
    );

    // Avoid double-wrapping: only mark items that are not already reveal-enabled
    revealTargets.forEach(function(el){
      if(!el.classList.contains("reveal")) el.classList.add("reveal");
    });

    // Small stagger for grouped cards/steps
    var staggerGroups = [
      ".grid-3 .card",
      ".steps .step",
      ".footer-grid > div"
    ];
    staggerGroups.forEach(function(sel){
      var els = Array.prototype.slice.call(document.querySelectorAll(sel));
      els.forEach(function(el, idx){
        var d = Math.min(3, idx + 1);
        el.classList.add("reveal-delay-" + d);
      });
    });

    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add("reveal-in");
          io.unobserve(entry.target);
        }
      });
    }, {threshold:0.12, rootMargin:"0px 0px -8% 0px"});

    revealTargets.forEach(function(el){ io.observe(el); });
  }else{
    // No observer or reduced motion: ensure content is visible
    var fallback = document.querySelectorAll('.reveal');
    fallback.forEach(function(el){ el.classList.add('reveal-in'); });
  }

  // Menu drawer (internal pages)
  function setupMenuDrawer(){
    var toggles = document.querySelectorAll('.menu-toggle');
    if(!toggles.length) return;

    toggles.forEach(function(toggle){
      var drawerId = toggle.getAttribute('aria-controls') || 'menu-drawer';
      var drawer = document.getElementById(drawerId);
      if(!drawer) return;

      var overlay = drawer.querySelector('.menu-drawer__overlay');
      var closeBtn = drawer.querySelector('.menu-close');
      var panel = drawer.querySelector('.menu-drawer__panel');

      function open(){
        drawer.classList.add('is-open');
        drawer.setAttribute('aria-hidden','false');
        toggle.setAttribute('aria-expanded','true');
        document.documentElement.classList.add('drawer-open');
        // focus close button for accessibility
        if(closeBtn) closeBtn.focus();
      }
      function close(){
        drawer.classList.remove('is-open');
        drawer.setAttribute('aria-hidden','true');
        toggle.setAttribute('aria-expanded','false');
        document.documentElement.classList.remove('drawer-open');
        toggle.focus();
      }

      toggle.addEventListener('click', function(){
        if(drawer.classList.contains('is-open')) close(); else open();
      });

      if(overlay) overlay.addEventListener('click', close);
      if(closeBtn) closeBtn.addEventListener('click', close);

      // close on ESC
      document.addEventListener('keydown', function(e){
        if(e.key === 'Escape' && drawer.classList.contains('is-open')){
          close();
        }
      });

      // close after clicking a link
      drawer.addEventListener('click', function(e){
        var t = e.target;
        if(t && t.tagName === 'A'){
          close();
        }
      });

      // basic focus trap
      drawer.addEventListener('keydown', function(e){
        if(e.key !== 'Tab' || !drawer.classList.contains('is-open')) return;
        var focusables = panel ? panel.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])') : [];
        if(!focusables.length) return;
        var first = focusables[0];
        var last = focusables[focusables.length-1];
        if(e.shiftKey && document.activeElement === first){
          e.preventDefault(); last.focus();
        }else if(!e.shiftKey && document.activeElement === last){
          e.preventDefault(); first.focus();
        }
      });
    });
  }
  setupMenuDrawer();

})();
