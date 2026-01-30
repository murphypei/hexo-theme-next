/**
 * Fix pagination HTML escaping issue
 */

/* global hexo */

'use strict';

// Fix pagination HTML during rendering
hexo.extend.filter.register('after_render:html', function(str, data) {
  if (!str || typeof str !== 'string') return str;
  
  // Fix escaped HTML in pagination - match exact pattern from generated HTML
  return str
    .replace(/&lt;i class&#x3D;&quot;fa fa-angle-left&quot; aria-label&#x3D;&quot;([^&]*?)&quot;&gt;&lt;&#x2F;i&gt;/g, '<i class="fa fa-angle-left" aria-label="$1"></i>')
    .replace(/&lt;i class&#x3D;&quot;fa fa-angle-right&quot; aria-label&#x3D;&quot;([^&]*?)&quot;&gt;&lt;&#x2F;i&gt;/g, '<i class="fa fa-angle-right" aria-label="$1"></i>');
}, 0);
