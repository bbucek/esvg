var esvg = {
  embed: function(){
    if (!document.querySelector('#esvg-symbols')) {
      document.querySelector('body').insertAdjacentHTML('afterbegin', '<svg id="esvg-symbols" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:none"><?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><symbol id="icon-comments" viewBox="0 0 512 512" height="100%" width="100%"><g id="Layer1"><g id="Icons"><path d="M334.95,40.2801l-149.954,0c-90.9535,0 -164.947,73.9958 -164.947,164.947c0,80.7136 58.2676,148.074 134.957,162.213l0,62.7156c0,12.1293 7.30642,23.0645 18.5135,27.7074c3.70944,1.53701 7.60632,2.28302 11.4695,2.28302c7.80501,0 15.4751,-3.0459 21.2145,-8.78532l81.186,-81.186l47.5611,0c90.9497,0 164.945,-73.9995 164.945,-164.947c0,-90.9516 -73.9958,-164.947 -164.945,-164.947M334.95,70.2706c74.5337,0 134.955,60.4213 134.955,134.957c0,74.5318 -60.4213,134.953 -134.955,134.955l0,0.0018744l-59.9827,0l-89.9713,89.9713l0,-89.9713l0,-0.0037488c-74.5375,0 -134.957,-60.4213 -134.957,-134.953c0,-74.5356 60.4195,-134.957 134.957,-134.957l149.952,0"/></g></g></symbol></svg>')
    }
  }
}

// If DOM is already ready, embed SVGs
if (document.readyState == 'interactive') { esvg.embed() }

// Handle Turbolinks (or other things that fire page change events)
document.addEventListener("page:change", function(event) { esvg.embed() })

// Handle standard DOM ready events
document.addEventListener("DOMContentLoaded", function(event) { esvg.embed() })