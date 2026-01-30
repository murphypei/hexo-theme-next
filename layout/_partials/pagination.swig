{%- if page.prev or page.next %}
  <nav class="pagination">
    {%- set prev_icon = '<i class="fa fa-angle-left" aria-label="' + __('accessibility.prev_page') + '"></i>' %}
    {%- set next_icon = '<i class="fa fa-angle-right" aria-label="' + __('accessibility.next_page') + '"></i>' %}
    {{ paginator({
      prev_text: prev_icon,
      next_text: next_icon,
      mid_size: 1
    }) | safe }}
  </nav>
{%- endif %}
