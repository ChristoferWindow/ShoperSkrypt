



<script>

(function( $ ) {

  var settings;

  var methods = {
    init : function(options) {

      settings = $.extend( {
        'hide_fallbacks' : false,
        'selected' : function(style) {},
        'opened' : function() {},
        'closed' : function() {},
        'initial' : '',
        'fonts' : []
      }, options);

      var root = this;
      var $root = $(this);
      root.selectedCallback = settings['selected'];
      root.openedCallback = settings['opened'];
      root.closedCallback = settings['closed'];
      var visible = false;
      var selected = false;
      var openedClass = 'fontSelectOpen';

      var displayName = function(font) {
        if (settings['hide_fallbacks'])
          return font.substr(0, font.indexOf(','));
        else
          return font;
      }

      var select = function(font) {
        root.find('span').html(displayName(font).replace(/['']{1}/gi,""));
        root.css('font-family', font);
        selected = font;

        root.selectedCallback(selected);
      }

      var positionUl = function() {
        var left, top;
        left = $(root).offset().left;
        top = $(root).offset().top + $(root).outerHeight();

        $(ul).css({
          'position': 'absolute',
          'left': left + 'px',
          'top': top + 'px',
          'width': $(root).outerWidth() + 'px'
        });
      }

      var closeUl = function() {
        ul.slideUp('fast', function() {
          visible = false;
        });

        $root.removeClass(openedClass);

        root.closedCallback();
      }

      var openUi = function() {
        ul.slideDown('fast', function() {
          visible = true;
        });

        $root.addClass(openedClass);

        root.openedCallback();
      }

      // Setup markup
      $root.prepend('<span>' + settings['initial'].replace(/'/g,'&#039;') + '</span>');
      var ul = $('<ul class="fontSelectUl"></ul>').appendTo('body');
      ul.hide();
      positionUl();

      for (var i = 0; i < settings['fonts'].length; i++) {
        var item = $('<li>' + displayName(settings['fonts'][i]) + '</li>').appendTo(ul);
        $(item).css('font-family', settings['fonts'][i]);
      }

      if (settings['initial'] != '')
        select(settings['initial']);

      ul.find('li').click(function() {

        if (!visible)
          return;

        positionUl();
        closeUl();

        select($(this).css('font-family'));
      });

      $root.click(function(event) {

        if (visible)
          return;

        event.stopPropagation();

        positionUl();
        openUi();
      });

      $('html').click(function() {
        if (visible)
        {
          closeUl();
        }
      })
    },
    selected : function() {
      return this.css('font-family');
    },
    select : function(font) {
      this.find('span').html(font.substr(0, font.indexOf(',')).replace(/[""]{1}/gi,""));
      this.css('font-family', font);
      selected = font;
    }
  };

  $.fn.fontSelector = function(method) {
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.fontSelector' );
    }
  }
}) ( jQuery );

$(function() {
		$("#input_text").on("input", null, null, function() {
			var text_value = $(this).val();
			text_value = text_value.replace(/\r?\n/g,'<br/>');
			$("#font_view").html(text_value);
		});
		$("#font_select").fontSelector(
				{
					'hide_fallbacks' : false,
					'initial' : 'litery-font-25',
					'selected' : function(style) {
						$("#font_view").css("font-family", style);
						$(".char_font_view").css("font-family", style);
						$("#tooltip_content").css("font-family", style);
					},
					'fonts' : [ 'litery-font-01',
					            'litery-font-02',
					            'litery-font-03',
					            'litery-font-04',
					            'litery-font-05',
					            'litery-font-06',
					            'litery-font-07',
					            'litery-font-08',
					            'litery-font-10',
					            'litery-font-11',
					            'litery-font-12',
					            'litery-font-13',
					            'litery-font-14',
					            'litery-font-15',
					            'litery-font-16',
					            'litery-font-17',
					            'litery-font-18',
					            'litery-font-19',
					            'litery-font-20',
					            'litery-font-21',
					            'litery-font-22',
					            'litery-font-23',
					            'litery-font-24',
					            'litery-font-25',
					            'litery-font-26',
					            'litery-font-27',
					            'litery-font-28',
                                'napisy-font-29']
				});

		var text_value = $("#input_text").val();
		if (text_value != '')
		{
			$("#font_view").text(text_value);
		}
	});
	$(function(){
		$("#char_font_view").click(function(){
			$("#char_table_content").toggle();
		});
	});







</script>
