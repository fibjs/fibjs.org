webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(33);
	
	__webpack_require__(35);
	
	__webpack_require__(36);
	
	__webpack_require__(37);
	
	$(function () {
	    var _toc = $("#toc");
	
	    _toc.tocify({
	        showAndHide: false,
	        extendPage: false,
	        hashGenerator: function hashGenerator(text, element) {
	            return text.replace(/\s+/g, '-');
	        }
	    });
	
	    var _content = $(".content");
	    var _window = $(window);
	    var _document = $(document);
	
	    var fixed = false;
	    var _height = _toc.height() + 50;
	    var _top = _toc.offset().top;
	    var t_top = -1;
	
	    function to(t) {
	        t = Math.floor(t);
	        if (t_top !== t) {
	            t_top = t;
	            _toc.css('top', t + 'px');
	        }
	    }
	
	    function _sync() {
	        var _scroll_top = _window.scrollTop();
	        var w_height = _window.height();
	        var c_height = _content.height();
	
	        if (_scroll_top > _top !== fixed) {
	            fixed = !fixed;
	            if (fixed) _toc.addClass('fixed_tocify');else _toc.removeClass('fixed_tocify');
	        }
	
	        if (fixed) {
	            if (_height < w_height) to(0);else to(-((_scroll_top - _top) / (c_height - w_height) * (_height - w_height)));
	        }
	    }
	
	    function _sync1() {
	        _height = _toc.height() + 50;
	        _top = _toc.offset().top;
	        _sync();
	    }
	
	    _sync();
	
	    _window.resize(_sync1);
	    _window.scroll(_sync);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery UI Widget 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */
	
	//>>label: Widget
	//>>group: Core
	//>>description: Provides a factory for creating stateful widgets with a common API.
	//>>docs: http://api.jqueryui.com/jQuery.widget/
	//>>demos: http://jqueryui.com/widget/
	
	( function( factory ) {
		if ( true ) {
	
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1), __webpack_require__(34) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
	
			// Browser globals
			factory( jQuery );
		}
	}( function( $ ) {
	
	var widgetUuid = 0;
	var widgetSlice = Array.prototype.slice;
	
	$.cleanData = ( function( orig ) {
		return function( elems ) {
			var events, elem, i;
			for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
				try {
	
					// Only trigger remove when necessary to save time
					events = $._data( elem, "events" );
					if ( events && events.remove ) {
						$( elem ).triggerHandler( "remove" );
					}
	
				// Http://bugs.jquery.com/ticket/8235
				} catch ( e ) {}
			}
			orig( elems );
		};
	} )( $.cleanData );
	
	$.widget = function( name, base, prototype ) {
		var existingConstructor, constructor, basePrototype;
	
		// ProxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		var proxiedPrototype = {};
	
		var namespace = name.split( "." )[ 0 ];
		name = name.split( "." )[ 1 ];
		var fullName = namespace + "-" + name;
	
		if ( !prototype ) {
			prototype = base;
			base = $.Widget;
		}
	
		if ( $.isArray( prototype ) ) {
			prototype = $.extend.apply( null, [ {} ].concat( prototype ) );
		}
	
		// Create selector for plugin
		$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
			return !!$.data( elem, fullName );
		};
	
		$[ namespace ] = $[ namespace ] || {};
		existingConstructor = $[ namespace ][ name ];
		constructor = $[ namespace ][ name ] = function( options, element ) {
	
			// Allow instantiation without "new" keyword
			if ( !this._createWidget ) {
				return new constructor( options, element );
			}
	
			// Allow instantiation without initializing for simple inheritance
			// must use "new" keyword (the code above always passes args)
			if ( arguments.length ) {
				this._createWidget( options, element );
			}
		};
	
		// Extend with the existing constructor to carry over any static properties
		$.extend( constructor, existingConstructor, {
			version: prototype.version,
	
			// Copy the object used to create the prototype in case we need to
			// redefine the widget later
			_proto: $.extend( {}, prototype ),
	
			// Track widgets that inherit from this widget in case this widget is
			// redefined after a widget inherits from it
			_childConstructors: []
		} );
	
		basePrototype = new base();
	
		// We need to make the options hash a property directly on the new instance
		// otherwise we'll modify the options hash on the prototype that we're
		// inheriting from
		basePrototype.options = $.widget.extend( {}, basePrototype.options );
		$.each( prototype, function( prop, value ) {
			if ( !$.isFunction( value ) ) {
				proxiedPrototype[ prop ] = value;
				return;
			}
			proxiedPrototype[ prop ] = ( function() {
				function _super() {
					return base.prototype[ prop ].apply( this, arguments );
				}
	
				function _superApply( args ) {
					return base.prototype[ prop ].apply( this, args );
				}
	
				return function() {
					var __super = this._super;
					var __superApply = this._superApply;
					var returnValue;
	
					this._super = _super;
					this._superApply = _superApply;
	
					returnValue = value.apply( this, arguments );
	
					this._super = __super;
					this._superApply = __superApply;
	
					return returnValue;
				};
			} )();
		} );
		constructor.prototype = $.widget.extend( basePrototype, {
	
			// TODO: remove support for widgetEventPrefix
			// always use the name + a colon as the prefix, e.g., draggable:start
			// don't prefix for widgets that aren't DOM-based
			widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
		}, proxiedPrototype, {
			constructor: constructor,
			namespace: namespace,
			widgetName: name,
			widgetFullName: fullName
		} );
	
		// If this widget is being redefined then we need to find all widgets that
		// are inheriting from it and redefine all of them so that they inherit from
		// the new version of this widget. We're essentially trying to replace one
		// level in the prototype chain.
		if ( existingConstructor ) {
			$.each( existingConstructor._childConstructors, function( i, child ) {
				var childPrototype = child.prototype;
	
				// Redefine the child widget using the same prototype that was
				// originally used, but inherit from the new version of the base
				$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor,
					child._proto );
			} );
	
			// Remove the list of existing child constructors from the old constructor
			// so the old child constructors can be garbage collected
			delete existingConstructor._childConstructors;
		} else {
			base._childConstructors.push( constructor );
		}
	
		$.widget.bridge( name, constructor );
	
		return constructor;
	};
	
	$.widget.extend = function( target ) {
		var input = widgetSlice.call( arguments, 1 );
		var inputIndex = 0;
		var inputLength = input.length;
		var key;
		var value;
	
		for ( ; inputIndex < inputLength; inputIndex++ ) {
			for ( key in input[ inputIndex ] ) {
				value = input[ inputIndex ][ key ];
				if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
	
					// Clone objects
					if ( $.isPlainObject( value ) ) {
						target[ key ] = $.isPlainObject( target[ key ] ) ?
							$.widget.extend( {}, target[ key ], value ) :
	
							// Don't extend strings, arrays, etc. with objects
							$.widget.extend( {}, value );
	
					// Copy everything else by reference
					} else {
						target[ key ] = value;
					}
				}
			}
		}
		return target;
	};
	
	$.widget.bridge = function( name, object ) {
		var fullName = object.prototype.widgetFullName || name;
		$.fn[ name ] = function( options ) {
			var isMethodCall = typeof options === "string";
			var args = widgetSlice.call( arguments, 1 );
			var returnValue = this;
	
			if ( isMethodCall ) {
	
				// If this is an empty collection, we need to have the instance method
				// return undefined instead of the jQuery instance
				if ( !this.length && options === "instance" ) {
					returnValue = undefined;
				} else {
					this.each( function() {
						var methodValue;
						var instance = $.data( this, fullName );
	
						if ( options === "instance" ) {
							returnValue = instance;
							return false;
						}
	
						if ( !instance ) {
							return $.error( "cannot call methods on " + name +
								" prior to initialization; " +
								"attempted to call method '" + options + "'" );
						}
	
						if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
							return $.error( "no such method '" + options + "' for " + name +
								" widget instance" );
						}
	
						methodValue = instance[ options ].apply( instance, args );
	
						if ( methodValue !== instance && methodValue !== undefined ) {
							returnValue = methodValue && methodValue.jquery ?
								returnValue.pushStack( methodValue.get() ) :
								methodValue;
							return false;
						}
					} );
				}
			} else {
	
				// Allow multiple hashes to be passed on init
				if ( args.length ) {
					options = $.widget.extend.apply( null, [ options ].concat( args ) );
				}
	
				this.each( function() {
					var instance = $.data( this, fullName );
					if ( instance ) {
						instance.option( options || {} );
						if ( instance._init ) {
							instance._init();
						}
					} else {
						$.data( this, fullName, new object( options, this ) );
					}
				} );
			}
	
			return returnValue;
		};
	};
	
	$.Widget = function( /* options, element */ ) {};
	$.Widget._childConstructors = [];
	
	$.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
	
		options: {
			classes: {},
			disabled: false,
	
			// Callbacks
			create: null
		},
	
		_createWidget: function( options, element ) {
			element = $( element || this.defaultElement || this )[ 0 ];
			this.element = $( element );
			this.uuid = widgetUuid++;
			this.eventNamespace = "." + this.widgetName + this.uuid;
	
			this.bindings = $();
			this.hoverable = $();
			this.focusable = $();
			this.classesElementLookup = {};
	
			if ( element !== this ) {
				$.data( element, this.widgetFullName, this );
				this._on( true, this.element, {
					remove: function( event ) {
						if ( event.target === element ) {
							this.destroy();
						}
					}
				} );
				this.document = $( element.style ?
	
					// Element within the document
					element.ownerDocument :
	
					// Element is window or document
					element.document || element );
				this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
			}
	
			this.options = $.widget.extend( {},
				this.options,
				this._getCreateOptions(),
				options );
	
			this._create();
	
			if ( this.options.disabled ) {
				this._setOptionDisabled( this.options.disabled );
			}
	
			this._trigger( "create", null, this._getCreateEventData() );
			this._init();
		},
	
		_getCreateOptions: function() {
			return {};
		},
	
		_getCreateEventData: $.noop,
	
		_create: $.noop,
	
		_init: $.noop,
	
		destroy: function() {
			var that = this;
	
			this._destroy();
			$.each( this.classesElementLookup, function( key, value ) {
				that._removeClass( value, key );
			} );
	
			// We can probably remove the unbind calls in 2.0
			// all event bindings should go through this._on()
			this.element
				.off( this.eventNamespace )
				.removeData( this.widgetFullName );
			this.widget()
				.off( this.eventNamespace )
				.removeAttr( "aria-disabled" );
	
			// Clean up events and states
			this.bindings.off( this.eventNamespace );
		},
	
		_destroy: $.noop,
	
		widget: function() {
			return this.element;
		},
	
		option: function( key, value ) {
			var options = key;
			var parts;
			var curOption;
			var i;
	
			if ( arguments.length === 0 ) {
	
				// Don't return a reference to the internal hash
				return $.widget.extend( {}, this.options );
			}
	
			if ( typeof key === "string" ) {
	
				// Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
				options = {};
				parts = key.split( "." );
				key = parts.shift();
				if ( parts.length ) {
					curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
					for ( i = 0; i < parts.length - 1; i++ ) {
						curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
						curOption = curOption[ parts[ i ] ];
					}
					key = parts.pop();
					if ( arguments.length === 1 ) {
						return curOption[ key ] === undefined ? null : curOption[ key ];
					}
					curOption[ key ] = value;
				} else {
					if ( arguments.length === 1 ) {
						return this.options[ key ] === undefined ? null : this.options[ key ];
					}
					options[ key ] = value;
				}
			}
	
			this._setOptions( options );
	
			return this;
		},
	
		_setOptions: function( options ) {
			var key;
	
			for ( key in options ) {
				this._setOption( key, options[ key ] );
			}
	
			return this;
		},
	
		_setOption: function( key, value ) {
			if ( key === "classes" ) {
				this._setOptionClasses( value );
			}
	
			this.options[ key ] = value;
	
			if ( key === "disabled" ) {
				this._setOptionDisabled( value );
			}
	
			return this;
		},
	
		_setOptionClasses: function( value ) {
			var classKey, elements, currentElements;
	
			for ( classKey in value ) {
				currentElements = this.classesElementLookup[ classKey ];
				if ( value[ classKey ] === this.options.classes[ classKey ] ||
						!currentElements ||
						!currentElements.length ) {
					continue;
				}
	
				// We are doing this to create a new jQuery object because the _removeClass() call
				// on the next line is going to destroy the reference to the current elements being
				// tracked. We need to save a copy of this collection so that we can add the new classes
				// below.
				elements = $( currentElements.get() );
				this._removeClass( currentElements, classKey );
	
				// We don't use _addClass() here, because that uses this.options.classes
				// for generating the string of classes. We want to use the value passed in from
				// _setOption(), this is the new value of the classes option which was passed to
				// _setOption(). We pass this value directly to _classes().
				elements.addClass( this._classes( {
					element: elements,
					keys: classKey,
					classes: value,
					add: true
				} ) );
			}
		},
	
		_setOptionDisabled: function( value ) {
			this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );
	
			// If the widget is becoming disabled, then nothing is interactive
			if ( value ) {
				this._removeClass( this.hoverable, null, "ui-state-hover" );
				this._removeClass( this.focusable, null, "ui-state-focus" );
			}
		},
	
		enable: function() {
			return this._setOptions( { disabled: false } );
		},
	
		disable: function() {
			return this._setOptions( { disabled: true } );
		},
	
		_classes: function( options ) {
			var full = [];
			var that = this;
	
			options = $.extend( {
				element: this.element,
				classes: this.options.classes || {}
			}, options );
	
			function processClassString( classes, checkOption ) {
				var current, i;
				for ( i = 0; i < classes.length; i++ ) {
					current = that.classesElementLookup[ classes[ i ] ] || $();
					if ( options.add ) {
						current = $( $.unique( current.get().concat( options.element.get() ) ) );
					} else {
						current = $( current.not( options.element ).get() );
					}
					that.classesElementLookup[ classes[ i ] ] = current;
					full.push( classes[ i ] );
					if ( checkOption && options.classes[ classes[ i ] ] ) {
						full.push( options.classes[ classes[ i ] ] );
					}
				}
			}
	
			this._on( options.element, {
				"remove": "_untrackClassesElement"
			} );
	
			if ( options.keys ) {
				processClassString( options.keys.match( /\S+/g ) || [], true );
			}
			if ( options.extra ) {
				processClassString( options.extra.match( /\S+/g ) || [] );
			}
	
			return full.join( " " );
		},
	
		_untrackClassesElement: function( event ) {
			var that = this;
			$.each( that.classesElementLookup, function( key, value ) {
				if ( $.inArray( event.target, value ) !== -1 ) {
					that.classesElementLookup[ key ] = $( value.not( event.target ).get() );
				}
			} );
		},
	
		_removeClass: function( element, keys, extra ) {
			return this._toggleClass( element, keys, extra, false );
		},
	
		_addClass: function( element, keys, extra ) {
			return this._toggleClass( element, keys, extra, true );
		},
	
		_toggleClass: function( element, keys, extra, add ) {
			add = ( typeof add === "boolean" ) ? add : extra;
			var shift = ( typeof element === "string" || element === null ),
				options = {
					extra: shift ? keys : extra,
					keys: shift ? element : keys,
					element: shift ? this.element : element,
					add: add
				};
			options.element.toggleClass( this._classes( options ), add );
			return this;
		},
	
		_on: function( suppressDisabledCheck, element, handlers ) {
			var delegateElement;
			var instance = this;
	
			// No suppressDisabledCheck flag, shuffle arguments
			if ( typeof suppressDisabledCheck !== "boolean" ) {
				handlers = element;
				element = suppressDisabledCheck;
				suppressDisabledCheck = false;
			}
	
			// No element argument, shuffle and use this.element
			if ( !handlers ) {
				handlers = element;
				element = this.element;
				delegateElement = this.widget();
			} else {
				element = delegateElement = $( element );
				this.bindings = this.bindings.add( element );
			}
	
			$.each( handlers, function( event, handler ) {
				function handlerProxy() {
	
					// Allow widgets to customize the disabled handling
					// - disabled as an array instead of boolean
					// - disabled class as method for disabling individual parts
					if ( !suppressDisabledCheck &&
							( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
						return;
					}
					return ( typeof handler === "string" ? instance[ handler ] : handler )
						.apply( instance, arguments );
				}
	
				// Copy the guid so direct unbinding works
				if ( typeof handler !== "string" ) {
					handlerProxy.guid = handler.guid =
						handler.guid || handlerProxy.guid || $.guid++;
				}
	
				var match = event.match( /^([\w:-]*)\s*(.*)$/ );
				var eventName = match[ 1 ] + instance.eventNamespace;
				var selector = match[ 2 ];
	
				if ( selector ) {
					delegateElement.on( eventName, selector, handlerProxy );
				} else {
					element.on( eventName, handlerProxy );
				}
			} );
		},
	
		_off: function( element, eventName ) {
			eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
				this.eventNamespace;
			element.off( eventName ).off( eventName );
	
			// Clear the stack to avoid memory leaks (#10056)
			this.bindings = $( this.bindings.not( element ).get() );
			this.focusable = $( this.focusable.not( element ).get() );
			this.hoverable = $( this.hoverable.not( element ).get() );
		},
	
		_delay: function( handler, delay ) {
			function handlerProxy() {
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}
			var instance = this;
			return setTimeout( handlerProxy, delay || 0 );
		},
	
		_hoverable: function( element ) {
			this.hoverable = this.hoverable.add( element );
			this._on( element, {
				mouseenter: function( event ) {
					this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
				},
				mouseleave: function( event ) {
					this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
				}
			} );
		},
	
		_focusable: function( element ) {
			this.focusable = this.focusable.add( element );
			this._on( element, {
				focusin: function( event ) {
					this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
				},
				focusout: function( event ) {
					this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
				}
			} );
		},
	
		_trigger: function( type, event, data ) {
			var prop, orig;
			var callback = this.options[ type ];
	
			data = data || {};
			event = $.Event( event );
			event.type = ( type === this.widgetEventPrefix ?
				type :
				this.widgetEventPrefix + type ).toLowerCase();
	
			// The original event may come from any element
			// so we need to reset the target on the new event
			event.target = this.element[ 0 ];
	
			// Copy original event properties over to the new event
			orig = event.originalEvent;
			if ( orig ) {
				for ( prop in orig ) {
					if ( !( prop in event ) ) {
						event[ prop ] = orig[ prop ];
					}
				}
			}
	
			this.element.trigger( event, data );
			return !( $.isFunction( callback ) &&
				callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
				event.isDefaultPrevented() );
		}
	};
	
	$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
		$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
			if ( typeof options === "string" ) {
				options = { effect: options };
			}
	
			var hasOptions;
			var effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
	
			options = options || {};
			if ( typeof options === "number" ) {
				options = { duration: options };
			}
	
			hasOptions = !$.isEmptyObject( options );
			options.complete = callback;
	
			if ( options.delay ) {
				element.delay( options.delay );
			}
	
			if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
				element[ method ]( options );
			} else if ( effectName !== method && element[ effectName ] ) {
				element[ effectName ]( options.duration, options.easing, callback );
			} else {
				element.queue( function( next ) {
					$( this )[ method ]();
					if ( callback ) {
						callback.call( element[ 0 ] );
					}
					next();
				} );
			}
		};
	} );
	
	return $.widget;
	
	} ) );


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
		if ( true ) {
	
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
	
			// Browser globals
			factory( jQuery );
		}
	} ( function( $ ) {
	
	$.ui = $.ui || {};
	
	return $.ui.version = "1.12.1";
	
	} ) );


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {/* jquery Tocify - v1.9.0 - 2013-10-01
	* http://www.gregfranko.com/jquery.tocify.js/
	* Copyright (c) 2013 Greg Franko; Licensed MIT */
	
	// Immediately-Invoked Function Expression (IIFE) [Ben Alman Blog Post](http://benalman.com/news/2010/11/immediately-invoked-function-expression/) that calls another IIFE that contains all of the plugin logic.  I used this pattern so that anyone viewing this code would not have to scroll to the bottom of the page to view the local parameters that were passed to the main IIFE.
	(function(tocify) {
	
	    // ECMAScript 5 Strict Mode: [John Resig Blog Post](http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/)
	    "use strict";
	
	    // Calls the second IIFE and locally passes in the global jQuery, window, and document objects
	    tocify(__webpack_provided_window_dot_jQuery, window, document);
	
	}
	
	// Locally passes in `jQuery`, the `window` object, the `document` object, and an `undefined` variable.  The `jQuery`, `window` and `document` objects are passed in locally, to improve performance, since javascript first searches for a variable match within the local variables set before searching the global variables set.  All of the global variables are also passed in locally to be minifier friendly. `undefined` can be passed in locally, because it is not a reserved word in JavaScript.
	(function($, window, document, undefined) {
	
	    // ECMAScript 5 Strict Mode: [John Resig Blog Post](http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/)
	    "use strict";
	
	    var tocClassName = "tocify",
	        tocClass = "." + tocClassName,
	        tocFocusClassName = "tocify-focus",
	        tocHoverClassName = "tocify-hover",
	        hideTocClassName = "tocify-hide",
	        hideTocClass = "." + hideTocClassName,
	        headerClassName = "tocify-header",
	        headerClass = "." + headerClassName,
	        subheaderClassName = "tocify-subheader",
	        subheaderClass = "." + subheaderClassName,
	        itemClassName = "tocify-item",
	        itemClass = "." + itemClassName,
	        extendPageClassName = "tocify-extend-page",
	        extendPageClass = "." + extendPageClassName;
	
	    // Calling the jQueryUI Widget Factory Method
	    $.widget("toc.tocify", {
	
	        //Plugin version
	        version: "1.9.0",
	
	        // These options will be used as defaults
	        options: {
	
	            // **context**: Accepts String: Any jQuery selector
	            // The container element that holds all of the elements used to generate the table of contents
	            context: "body",
	
	            // **ignoreSelector**: Accepts String: Any jQuery selector
	            // A selector to any element that would be matched by selectors that you wish to be ignored
	            ignoreSelector: null,
	
	            // **selectors**: Accepts an Array of Strings: Any jQuery selectors
	            // The element's used to generate the table of contents.  The order is very important since it will determine the table of content's nesting structure
	            selectors: "h1, h2, h3",
	
	            // **showAndHide**: Accepts a boolean: true or false
	            // Used to determine if elements should be shown and hidden
	            showAndHide: true,
	
	            // **showEffect**: Accepts String: "none", "fadeIn", "show", or "slideDown"
	            // Used to display any of the table of contents nested items
	            showEffect: "slideDown",
	
	            // **showEffectSpeed**: Accepts Number (milliseconds) or String: "slow", "medium", or "fast"
	            // The time duration of the show animation
	            showEffectSpeed: "medium",
	
	            // **hideEffect**: Accepts String: "none", "fadeOut", "hide", or "slideUp"
	            // Used to hide any of the table of contents nested items
	            hideEffect: "slideUp",
	
	            // **hideEffectSpeed**: Accepts Number (milliseconds) or String: "slow", "medium", or "fast"
	            // The time duration of the hide animation
	            hideEffectSpeed: "medium",
	
	            // **smoothScroll**: Accepts a boolean: true or false
	            // Determines if a jQuery animation should be used to scroll to specific table of contents items on the page
	            smoothScroll: true,
	
	            // **smoothScrollSpeed**: Accepts Number (milliseconds) or String: "slow", "medium", or "fast"
	            // The time duration of the smoothScroll animation
	            smoothScrollSpeed: "medium",
	
	            // **scrollTo**: Accepts Number (pixels)
	            // The amount of space between the top of page and the selected table of contents item after the page has been scrolled
	            scrollTo: 0,
	
	            // **showAndHideOnScroll**: Accepts a boolean: true or false
	            // Determines if table of contents nested items should be shown and hidden while scrolling
	            showAndHideOnScroll: true,
	
	            // **highlightOnScroll**: Accepts a boolean: true or false
	            // Determines if table of contents nested items should be highlighted (set to a different color) while scrolling
	            highlightOnScroll: true,
	
	            // **highlightOffset**: Accepts a number
	            // The offset distance in pixels to trigger the next active table of contents item
	            highlightOffset: 40,
	
	            // **theme**: Accepts a string: "bootstrap", "jqueryui", or "none"
	            // Determines if Twitter Bootstrap, jQueryUI, or Tocify classes should be added to the table of contents
	            theme: "bootstrap",
	
	            // **extendPage**: Accepts a boolean: true or false
	            // If a user scrolls to the bottom of the page and the page is not tall enough to scroll to the last table of contents item, then the page height is increased
	            extendPage: true,
	
	            // **extendPageOffset**: Accepts a number: pixels
	            // How close to the bottom of the page a user must scroll before the page is extended
	            extendPageOffset: 100,
	
	            // **history**: Accepts a boolean: true or false
	            // Adds a hash to the page url to maintain history
	            history: true,
	
	            // **scrollHistory**: Accepts a boolean: true or false
	            // Adds a hash to the page url, to maintain history, when scrolling to a TOC item
	            scrollHistory: false,
	
	            // **hashGenerator**: How the hash value (the anchor segment of the URL, following the
	            // # character) will be generated.
	            //
	            // "compact" (default) - #CompressesEverythingTogether
	            // "pretty" - #looks-like-a-nice-url-and-is-easily-readable
	            // function(text, element){} - Your own hash generation function that accepts the text as an
	            // argument, and returns the hash value.
	            hashGenerator: "compact",
	
	            // **highlightDefault**: Accepts a boolean: true or false
	            // Set's the first TOC item as active if no other TOC item is active.
	            highlightDefault: true
	
	        },
	
	        // _Create
	        // -------
	        //      Constructs the plugin.  Only called once.
	        _create: function() {
	
	            var self = this;
	
	            self.extendPageScroll = true;
	
	            // Internal array that keeps track of all TOC items (Helps to recognize if there are duplicate TOC item strings)
	            self.items = [];
	
	            // Generates the HTML for the dynamic table of contents
	            self._generateToc();
	
	            // Adds CSS classes to the newly generated table of contents HTML
	            self._addCSSClasses();
	
	            self.webkit = (function() {
	
	                for(var prop in window) {
	
	                    if(prop) {
	
	                        if(prop.toLowerCase().indexOf("webkit") !== -1) {
	
	                            return true;
	
	                        }
	
	                    }
	
	                }
	
	                return false;
	
	            }());
	
	            // Adds jQuery event handlers to the newly generated table of contents
	            self._setEventHandlers();
	
	            // Binding to the Window load event to make sure the correct scrollTop is calculated
	            $(window).load(function() {
	
	                // Sets the active TOC item
	                self._setActiveElement(true);
	
	                // Once all animations on the page are complete, this callback function will be called
	                $("html, body").promise().done(function() {
	
	                    setTimeout(function() {
	
	                        self.extendPageScroll = false;
	
	                    },0);
	
	                });
	
	            });
	
	        },
	
	        // _generateToc
	        // ------------
	        //      Generates the HTML for the dynamic table of contents
	        _generateToc: function() {
	
	            // _Local variables_
	
	            // Stores the plugin context in the self variable
	            var self = this,
	
	                // All of the HTML tags found within the context provided (i.e. body) that match the top level jQuery selector above
	                firstElem,
	
	                // Instantiated variable that will store the top level newly created unordered list DOM element
	                ul,
	                ignoreSelector = self.options.ignoreSelector;
	
	             // If the selectors option has a comma within the string
	             if(this.options.selectors.indexOf(",") !== -1) {
	
	                 // Grabs the first selector from the string
	                 firstElem = $(this.options.context).find(this.options.selectors.replace(/ /g,"").substr(0, this.options.selectors.indexOf(",")));
	
	             }
	
	             // If the selectors option does not have a comman within the string
	             else {
	
	                 // Grabs the first selector from the string and makes sure there are no spaces
	                 firstElem = $(this.options.context).find(this.options.selectors.replace(/ /g,""));
	
	             }
	
	            if(!firstElem.length) {
	
	                self.element.addClass(hideTocClassName);
	
	                return;
	
	            }
	
	            self.element.addClass(tocClassName);
	
	            // Loops through each top level selector
	            firstElem.each(function(index) {
	
	                //If the element matches the ignoreSelector then we skip it
	                if($(this).is(ignoreSelector)) {
	                    return;
	                }
	
	                // Creates an unordered list HTML element and adds a dynamic ID and standard class name
	                ul = $("<ul/>", {
	                    "id": headerClassName + index,
	                    "class": headerClassName
	                }).
	
	                // Appends a top level list item HTML element to the previously created HTML header
	                append(self._nestElements($(this), index));
	
	                // Add the created unordered list element to the HTML element calling the plugin
	                self.element.append(ul);
	
	                // Finds all of the HTML tags between the header and subheader elements
	                $(this).nextUntil(this.nodeName.toLowerCase()).each(function() {
	
	                    // If there are no nested subheader elemements
	                    if($(this).find(self.options.selectors).length === 0) {
	
	                        // Loops through all of the subheader elements
	                        $(this).filter(self.options.selectors).each(function() {
	
	                            //If the element matches the ignoreSelector then we skip it
	                            if($(this).is(ignoreSelector)) {
	                                return;
	                            }
	
	                            self._appendSubheaders.call(this, self, ul);
	
	                        });
	
	                    }
	
	                    // If there are nested subheader elements
	                    else {
	
	                        // Loops through all of the subheader elements
	                        $(this).find(self.options.selectors).each(function() {
	
	                            //If the element matches the ignoreSelector then we skip it
	                            if($(this).is(ignoreSelector)) {
	                                return;
	                            }
	
	                            self._appendSubheaders.call(this, self, ul);
	
	                        });
	
	                    }
	
	                });
	
	            });
	
	        },
	
	        _setActiveElement: function(pageload) {
	
	            var self = this,
	
	                hash = window.location.hash.substring(1),
	
	                elem = self.element.find('li[data-unique="' + hash + '"]');
	
	            if(hash.length) {
	
	                // Removes highlighting from all of the list item's
	                self.element.find("." + self.focusClass).removeClass(self.focusClass);
	
	                // Highlights the current list item that was clicked
	                elem.addClass(self.focusClass);
	
	                // If the showAndHide option is true
	                if(self.options.showAndHide) {
	
	                    // Triggers the click event on the currently focused TOC item
	                    elem.click();
	
	                }
	
	            }
	
	            else {
	
	                // Removes highlighting from all of the list item's
	                self.element.find("." + self.focusClass).removeClass(self.focusClass);
	
	                if(!hash.length && pageload && self.options.highlightDefault) {
	
	                    // Highlights the first TOC item if no other items are highlighted
	                    self.element.find(itemClass).first().addClass(self.focusClass);
	
	                }
	
	            }
	
	            return self;
	
	        },
	
	        // _nestElements
	        // -------------
	        //      Helps create the table of contents list by appending nested list items
	        _nestElements: function(self, index) {
	
	            var arr, item, hashValue;
	
	            arr = $.grep(this.items, function (item) {
	
	                return item === self.text();
	
	            });
	
	            // If there is already a duplicate TOC item
	            if(arr.length) {
	
	                // Adds the current TOC item text and index (for slight randomization) to the internal array
	                this.items.push(self.text() + index);
	
	            }
	
	            // If there not a duplicate TOC item
	            else {
	
	                // Adds the current TOC item text to the internal array
	                this.items.push(self.text());
	
	            }
	
	            hashValue = this._generateHashValue(arr, self, index);
	
	            // Appends a list item HTML element to the last unordered list HTML element found within the HTML element calling the plugin
	            item = $("<li/>", {
	
	                // Sets a common class name to the list item
	                "class": itemClassName,
	
	                "data-unique": hashValue
	
	            }).append($("<a/>", {
	
	                "text": self.text()
	
	            }));
	
	            // Adds an HTML anchor tag before the currently traversed HTML element
	            self.before($("<div/>", {
	
	                // Sets a name attribute on the anchor tag to the text of the currently traversed HTML element (also making sure that all whitespace is replaced with an underscore)
	                "name": hashValue,
	
	                "data-unique": hashValue
	
	            }));
	
	            return item;
	
	        },
	
	        // _generateHashValue
	        // ------------------
	        //      Generates the hash value that will be used to refer to each item.
	        _generateHashValue: function(arr, self, index) {
	
	            var hashValue = "",
	                hashGeneratorOption = this.options.hashGenerator;
	
	            if (hashGeneratorOption === "pretty") {
	
	                // prettify the text
	                hashValue = self.text().toLowerCase().replace(/\s/g, "-");
	
	                // fix double hyphens
	                while (hashValue.indexOf("--") > -1) {
	                    hashValue = hashValue.replace(/--/g, "-");
	                }
	
	                // fix colon-space instances
	                while (hashValue.indexOf(":-") > -1) {
	                    hashValue = hashValue.replace(/:-/g, "-");
	                }
	
	            } else if (typeof hashGeneratorOption === "function") {
	
	                // call the function
	                hashValue = hashGeneratorOption(self.text(), self);
	
	            } else {
	
	                // compact - the default
	                hashValue = self.text().replace(/\s/g, "");
	
	            }
	
	            // add the index if we need to
	            if (arr.length) { hashValue += ""+index; }
	
	            // return the value
	            return hashValue;
	
	        },
	
	        // _appendElements
	        // ---------------
	        //      Helps create the table of contents list by appending subheader elements
	
	        _appendSubheaders: function(self, ul) {
	
	            // The current element index
	            var index = $(this).index(self.options.selectors),
	
	                // Finds the previous header DOM element
	                previousHeader = $(self.options.selectors).eq(index - 1),
	
	                currentTagName = +$(this).prop("tagName").charAt(1),
	
	                previousTagName = +previousHeader.prop("tagName").charAt(1),
	
	                lastSubheader;
	
	            // If the current header DOM element is smaller than the previous header DOM element or the first subheader
	            if(currentTagName < previousTagName) {
	
	                // Selects the last unordered list HTML found within the HTML element calling the plugin
	                self.element.find(subheaderClass + "[data-tag=" + currentTagName + "]").last().append(self._nestElements($(this), index));
	
	            }
	
	            // If the current header DOM element is the same type of header(eg. h4) as the previous header DOM element
	            else if(currentTagName === previousTagName) {
	
	                ul.find(itemClass).last().after(self._nestElements($(this), index));
	
	            }
	
	            else {
	
	                // Selects the last unordered list HTML found within the HTML element calling the plugin
	                ul.find(itemClass).last().
	
	                // Appends an unorderedList HTML element to the dynamic `unorderedList` variable and sets a common class name
	                after($("<ul/>", {
	
	                    "class": subheaderClassName,
	
	                    "data-tag": currentTagName
	
	                })).next(subheaderClass).
	
	                // Appends a list item HTML element to the last unordered list HTML element found within the HTML element calling the plugin
	                append(self._nestElements($(this), index));
	            }
	
	        },
	
	       // _setEventHandlers
	        // ----------------
	        //      Adds jQuery event handlers to the newly generated table of contents
	        _setEventHandlers: function() {
	
	            // _Local variables_
	
	            // Stores the plugin context in the self variable
	            var self = this,
	
	                // Instantiates a new variable that will be used to hold a specific element's context
	                $self,
	
	                // Instantiates a new variable that will be used to determine the smoothScroll animation time duration
	                duration;
	
	            // Event delegation that looks for any clicks on list item elements inside of the HTML element calling the plugin
	            this.element.on("click.tocify", "li", function(event) {
	
	                if(self.options.history) {
	
	                    window.location.hash = $(this).attr("data-unique");
	
	                }
	
	                // Removes highlighting from all of the list item's
	                self.element.find("." + self.focusClass).removeClass(self.focusClass);
	
	                // Highlights the current list item that was clicked
	                $(this).addClass(self.focusClass);
	
	                // If the showAndHide option is true
	                if(self.options.showAndHide) {
	
	                    var elem = $('li[data-unique="' + $(this).attr("data-unique") + '"]');
	
	                    self._triggerShow(elem);
	
	                }
	
	                self._scrollTo($(this));
	
	            });
	
	            // Mouseenter and Mouseleave event handlers for the list item's within the HTML element calling the plugin
	            this.element.find("li").on({
	
	                // Mouseenter event handler
	                "mouseenter.tocify": function() {
	
	                    // Adds a hover CSS class to the current list item
	                    $(this).addClass(self.hoverClass);
	
	                    // Makes sure the cursor is set to the pointer icon
	                    $(this).css("cursor", "pointer");
	
	                },
	
	                // Mouseleave event handler
	                "mouseleave.tocify": function() {
	
	                    if(self.options.theme !== "bootstrap") {
	
	                        // Removes the hover CSS class from the current list item
	                        $(this).removeClass(self.hoverClass);
	
	                    }
	
	                }
	            });
	
	            // only attach handler if needed (expensive in IE)
	            if (self.options.extendPage || self.options.highlightOnScroll || self.options.scrollHistory || self.options.showAndHideOnScroll)
	            {
	            // Window scroll event handler
	                $(window).on("scroll.tocify", function() {
	
	                    // Once all animations on the page are complete, this callback function will be called
	                    $("html, body").promise().done(function() {
	
	                        // Local variables
	
	                        // Stores how far the user has scrolled
	                        var winScrollTop = $(window).scrollTop(),
	
	                            // Stores the height of the window
	                            winHeight = $(window).height(),
	
	                            // Stores the height of the document
	                            docHeight = $(document).height(),
	
	                            scrollHeight = $("body")[0].scrollHeight,
	
	                            // Instantiates a variable that will be used to hold a selected HTML element
	                            elem,
	
	                            lastElem,
	
	                            lastElemOffset,
	
	                            currentElem;
	
	                        if(self.options.extendPage) {
	
	                            // If the user has scrolled to the bottom of the page and the last toc item is not focused
	                            if((self.webkit && winScrollTop >= scrollHeight - winHeight - self.options.extendPageOffset) || (!self.webkit && winHeight + winScrollTop > docHeight - self.options.extendPageOffset)) {
	
	                                if(!$(extendPageClass).length) {
	
	                                    lastElem = $('div[data-unique="' + $(itemClass).last().attr("data-unique") + '"]');
	
	                                    if(!lastElem.length) return;
	
	                                    // Gets the top offset of the page header that is linked to the last toc item
	                                    lastElemOffset = lastElem.offset().top;
	
	                                    // Appends a div to the bottom of the page and sets the height to the difference of the window scrollTop and the last element's position top offset
	                                    $(self.options.context).append($("<div />", {
	
	                                        "class": extendPageClassName,
	
	                                        "height": Math.abs(lastElemOffset - winScrollTop) + "px",
	
	                                        "data-unique": extendPageClassName
	
	                                    }));
	
	                                    if(self.extendPageScroll) {
	
	                                        currentElem = self.element.find('li.active');
	
	                                        self._scrollTo($('div[data-unique="' + currentElem.attr("data-unique") + '"]'));
	
	                                    }
	
	                                }
	
	                            }
	
	                        }
	
	                        // The zero timeout ensures the following code is run after the scroll events
	                        setTimeout(function() {
	
	                            // _Local variables_
	
	                            // Stores the distance to the closest anchor
	                            var closestAnchorDistance = null,
	
	                                // Stores the index of the closest anchor
	                                closestAnchorIdx = null,
	
	                                // Keeps a reference to all anchors
	                                anchors = $(self.options.context).find("div[data-unique]"),
	
	                                anchorText;
	
	                            // Determines the index of the closest anchor
	                            anchors.each(function(idx) {
	                                var distance = Math.abs(($(this).next().length ? $(this).next() : $(this)).offset().top - winScrollTop - self.options.highlightOffset);
	                                if (closestAnchorDistance == null || distance < closestAnchorDistance) {
	                                    closestAnchorDistance = distance;
	                                    closestAnchorIdx = idx;
	                                } else {
	                                    return false;
	                                }
	                            });
	
	                            anchorText = $(anchors[closestAnchorIdx]).attr("data-unique");
	
	                            // Stores the list item HTML element that corresponds to the currently traversed anchor tag
	                            elem = $('li[data-unique="' + anchorText + '"]');
	
	                            // If the `highlightOnScroll` option is true and a next element is found
	                            if(self.options.highlightOnScroll && elem.length) {
	
	                                // Removes highlighting from all of the list item's
	                                self.element.find("." + self.focusClass).removeClass(self.focusClass);
	
	                                // Highlights the corresponding list item
	                                elem.addClass(self.focusClass);
	
	                            }
	
	                            if(self.options.scrollHistory) {
	
	                                if(window.location.hash !== "#" + anchorText) {
	
	                                    window.location.replace("#" + anchorText);
	
	                                }
	                            }
	
	                            // If the `showAndHideOnScroll` option is true
	                            if(self.options.showAndHideOnScroll && self.options.showAndHide) {
	
	                                self._triggerShow(elem, true);
	
	                            }
	
	                        }, 0);
	
	                    });
	
	                });
	            }
	
	        },
	
	        // Show
	        // ----
	        //      Opens the current sub-header
	        show: function(elem, scroll) {
	
	            // Stores the plugin context in the `self` variable
	            var self = this,
	                element = elem;
	
	            // If the sub-header is not already visible
	            if (!elem.is(":visible")) {
	
	                // If the current element does not have any nested subheaders, is not a header, and its parent is not visible
	                if(!elem.find(subheaderClass).length && !elem.parent().is(headerClass) && !elem.parent().is(":visible")) {
	
	                    // Sets the current element to all of the subheaders within the current header
	                    elem = elem.parents(subheaderClass).add(elem);
	
	                }
	
	                // If the current element does not have any nested subheaders and is not a header
	                else if(!elem.children(subheaderClass).length && !elem.parent().is(headerClass)) {
	
	                    // Sets the current element to the closest subheader
	                    elem = elem.closest(subheaderClass);
	
	                }
	
	                //Determines what jQuery effect to use
	                switch (self.options.showEffect) {
	
	                    //Uses `no effect`
	                    case "none":
	
	                        elem.show();
	
	                    break;
	
	                    //Uses the jQuery `show` special effect
	                    case "show":
	
	                        elem.show(self.options.showEffectSpeed);
	
	                    break;
	
	                    //Uses the jQuery `slideDown` special effect
	                    case "slideDown":
	
	                        elem.slideDown(self.options.showEffectSpeed);
	
	                    break;
	
	                    //Uses the jQuery `fadeIn` special effect
	                    case "fadeIn":
	
	                        elem.fadeIn(self.options.showEffectSpeed);
	
	                    break;
	
	                    //If none of the above options were passed, then a `jQueryUI show effect` is expected
	                    default:
	
	                        elem.show();
	
	                    break;
	
	                }
	
	            }
	
	            // If the current subheader parent element is a header
	            if(elem.parent().is(headerClass)) {
	
	                // Hides all non-active sub-headers
	                self.hide($(subheaderClass).not(elem));
	
	            }
	
	            // If the current subheader parent element is not a header
	            else {
	
	                // Hides all non-active sub-headers
	                self.hide($(subheaderClass).not(elem.closest(headerClass).find(subheaderClass).not(elem.siblings())));
	
	            }
	
	            // Maintains chainablity
	            return self;
	
	        },
	
	        // Hide
	        // ----
	        //      Closes the current sub-header
	        hide: function(elem) {
	
	            // Stores the plugin context in the `self` variable
	            var self = this;
	
	            //Determines what jQuery effect to use
	            switch (self.options.hideEffect) {
	
	                // Uses `no effect`
	                case "none":
	
	                    elem.hide();
	
	                break;
	
	                // Uses the jQuery `hide` special effect
	                case "hide":
	
	                    elem.hide(self.options.hideEffectSpeed);
	
	                break;
	
	                // Uses the jQuery `slideUp` special effect
	                case "slideUp":
	
	                    elem.slideUp(self.options.hideEffectSpeed);
	
	                break;
	
	                // Uses the jQuery `fadeOut` special effect
	                case "fadeOut":
	
	                    elem.fadeOut(self.options.hideEffectSpeed);
	
	                break;
	
	                // If none of the above options were passed, then a `jqueryUI hide effect` is expected
	                default:
	
	                    elem.hide();
	
	                break;
	
	            }
	
	            // Maintains chainablity
	            return self;
	        },
	
	        // _triggerShow
	        // ------------
	        //      Determines what elements get shown on scroll and click
	        _triggerShow: function(elem, scroll) {
	
	            var self = this;
	
	            // If the current element's parent is a header element or the next element is a nested subheader element
	            if(elem.parent().is(headerClass) || elem.next().is(subheaderClass)) {
	
	                // Shows the next sub-header element
	                self.show(elem.next(subheaderClass), scroll);
	
	            }
	
	            // If the current element's parent is a subheader element
	            else if(elem.parent().is(subheaderClass)) {
	
	                // Shows the parent sub-header element
	                self.show(elem.parent(), scroll);
	
	            }
	
	            // Maintains chainability
	            return self;
	
	        },
	
	        // _addCSSClasses
	        // --------------
	        //      Adds CSS classes to the newly generated table of contents HTML
	        _addCSSClasses: function() {
	
	            // If the user wants a jqueryUI theme
	            if(this.options.theme === "jqueryui") {
	
	                this.focusClass = "ui-state-default";
	
	                this.hoverClass = "ui-state-hover";
	
	                //Adds the default styling to the dropdown list
	                this.element.addClass("ui-widget").find(".toc-title").addClass("ui-widget-header").end().find("li").addClass("ui-widget-content");
	
	            }
	
	            // If the user wants a twitterBootstrap theme
	            else if(this.options.theme === "bootstrap") {
	
	                this.element.find(headerClass + "," + subheaderClass).addClass("nav nav-list");
	
	                this.focusClass = "active";
	
	            }
	
	            // If a user does not want a prebuilt theme
	            else {
	
	                // Adds more neutral classes (instead of jqueryui)
	
	                this.focusClass = tocFocusClassName;
	
	                this.hoverClass = tocHoverClassName;
	
	            }
	
	            //Maintains chainability
	            return this;
	
	        },
	
	        // setOption
	        // ---------
	        //      Sets a single Tocify option after the plugin is invoked
	        setOption: function() {
	
	            // Calls the jQueryUI Widget Factory setOption method
	            $.Widget.prototype._setOption.apply(this, arguments);
	
	        },
	
	        // setOptions
	        // ----------
	        //      Sets a single or multiple Tocify options after the plugin is invoked
	        setOptions: function() {
	
	            // Calls the jQueryUI Widget Factory setOptions method
	            $.Widget.prototype._setOptions.apply(this, arguments);
	
	        },
	
	        // _scrollTo
	        // ---------
	        //      Scrolls to a specific element
	        _scrollTo: function(elem) {
	
	            var self = this,
	                duration = self.options.smoothScroll || 0,
	                scrollTo = self.options.scrollTo,
	                currentDiv = $('div[data-unique="' + elem.attr("data-unique") + '"]');
	
	            if(!currentDiv.length) {
	
	                return self;
	
	            }
	
	            // Once all animations on the page are complete, this callback function will be called
	            $("html, body").promise().done(function() {
	
	                // Animates the html and body element scrolltops
	                $("html, body").animate({
	
	                    // Sets the jQuery `scrollTop` to the top offset of the HTML div tag that matches the current list item's `data-unique` tag
	                    "scrollTop": currentDiv.offset().top - ($.isFunction(scrollTo) ? scrollTo.call() : scrollTo) + "px"
	
	                }, {
	
	                    // Sets the smoothScroll animation time duration to the smoothScrollSpeed option
	                    "duration": duration
	
	                });
	
	            });
	
	            // Maintains chainability
	            return self;
	
	        }
	
	    });
	
	})); //end of plugin
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {/**
	 * social-share.js
	 *
	 * @author  52cik <fe.52cik@gmail.com>
	 * @license MIT
	 *
	 * @example
	 * <pre>
	 * socialShare('.share-components');
	 *
	 * // or
	 *
	 * socialShare('.share-bar', {
	 *     sites: ['qzone', 'qq', 'weibo','wechat'],
	 *     // ...
	 * });
	 * </pre>
	 */
	;(function (window, document, undefined) {
	
	    // Initialize a variables.
	
	    var Array$indexOf = Array.prototype.indexOf;
	    var Object$assign = Object.assign;
	
	    var runningInWeChat = /MicroMessenger/i.test(navigator.userAgent);
	    var isMobileScreen = document.documentElement.clientWidth <= 768;
	
	    var image = (document.images[0] || 0).src || '';
	    var site = getMetaContentByName('site') || getMetaContentByName('Site') || document.title;
	    var title = getMetaContentByName('title') || getMetaContentByName('Title') || document.title;
	    var description = getMetaContentByName('description') || getMetaContentByName('Description') || '';
	
	    var defaults = {
	        url: location.href,
	        origin: location.origin,
	        source: site,
	        title: title,
	        description: description,
	        image: image,
	        imageSelector: undefined,
	
	        weiboKey: '',
	
	        wechatQrcodeTitle: '微信扫一扫：分享',
	        wechatQrcodeHelper: '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>',
	        wechatQrcodeSize: 100,
	
	        sites: ['weibo', 'qq', 'wechat', 'tencent', 'douban', 'qzone', 'linkedin', 'diandian', 'facebook', 'twitter', 'google'],
	        mobileSites: [],
	        disabled: [],
	        initialized: false
	    };
	
	    var templates = {
	        qzone: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{URL}}&title={{TITLE}}&desc={{DESCRIPTION}}&summary={{SUMMARY}}&site={{SOURCE}}',
	        qq: 'http://connect.qq.com/widget/shareqq/index.html?url={{URL}}&title={{TITLE}}&source={{SOURCE}}&desc={{DESCRIPTION}}&pics={{IMAGE}}',
	        tencent: 'http://share.v.t.qq.com/index.php?c=share&a=index&title={{TITLE}}&url={{URL}}&pic={{IMAGE}}',
	        weibo: 'http://service.weibo.com/share/share.php?url={{URL}}&title={{TITLE}}&pic={{IMAGE}}&appkey={{WEIBOKEY}}',
	        wechat: 'javascript:',
	        douban: 'http://shuo.douban.com/!service/share?href={{URL}}&name={{TITLE}}&text={{DESCRIPTION}}&image={{IMAGE}}&starid=0&aid=0&style=11',
	        diandian: 'http://www.diandian.com/share?lo={{URL}}&ti={{TITLE}}&type=link',
	        linkedin: 'http://www.linkedin.com/shareArticle?mini=true&ro=true&title={{TITLE}}&url={{URL}}&summary={{SUMMARY}}&source={{SOURCE}}&armin=armin',
	        facebook: 'https://www.facebook.com/sharer/sharer.php?u={{URL}}',
	        twitter: 'https://twitter.com/intent/tweet?text={{TITLE}}&url={{URL}}&via={{ORIGIN}}',
	        google: 'https://plus.google.com/share?url={{URL}}'
	    };
	
	
	    /**
	     * Expose API to the global
	     *
	     * @param  {String|Element} elem
	     * @param  {Object} options
	     */
	    window.socialShare = function (elem, options) {
	        elem = typeof elem === 'string' ? querySelectorAlls(elem) : elem;
	
	        if (elem.length === undefined) {
	            elem = [elem];
	        }
	
	        each(elem, function (el) {
	            if (!el.initialized) {
	                share(el, options);
	            }
	        });
	    };
	
	    // Domready after initialization
	    alReady(function () {
	        socialShare('.social-share, .share-component');
	    });
	
	
	    /**
	     * Initialize a share bar.
	     *
	     * @param {Object}        $options globals (optional).
	     *
	     * @return {Void}
	     */
	    function share(elem, options) {
	        var data = mixin({}, defaults, options || {}, dataset(elem));
	
	        if (data.imageSelector) {
	            data.image = querySelectorAlls(data.imageSelector).map(function(item) {
	                return item.src;
	            }).join('||');
	        }
	
	        addClass(elem, 'share-component social-share');
	        createIcons(elem, data);
	        createWechat(elem, data);
	
	        elem.initialized = true;
	    }
	
	
	    /**
	     * Create site icons
	     *
	     * @param {Element} elem
	     * @param {Object} data
	     */
	    function createIcons(elem, data) {
	        var sites = getSites(data);
	        var isPrepend = data.mode == 'prepend';
	
	        each(isPrepend ? sites.reverse() : sites, function (name) {
	            var url = makeUrl(name, data);
	            var link = data.initialized ? getElementsByClassName(elem, 'icon-' + name) : createElementByString('<a class="social-share-icon icon-' + name + '"></a>');
	
	            if (!link.length) {
	                return true;
	            }
	
	            link[0].href = url;
	
	            if (name === 'wechat') {
	                link[0].tabindex = -1;
	            } else {
	                link[0].target = '_blank';
	            }
	
	            if (!data.initialized) {
	                isPrepend ? elem.insertBefore(link[0], elem.firstChild) : elem.appendChild(link[0]);
	            }
	        });
	    }
	
	
	    /**
	     * Create the wechat icon and QRCode.
	     *
	     * @param {Element} elem
	     * @param {Object} data
	     */
	    function createWechat (elem, data) {
	        var wechat = getElementsByClassName(elem, 'icon-wechat', 'a');
	
	        if (wechat.length === 0) {
	            return false;
	        }
	
	        var elems = createElementByString('<div class="wechat-qrcode"><h4>' + data.wechatQrcodeTitle + '</h4><div class="qrcode"></div><div class="help">' + data.wechatQrcodeHelper + '</div></div>');
	        var qrcode = getElementsByClassName(elems[0], 'qrcode', 'div');
	
	        wechat[0].appendChild(elems[0]);
	        new QRCode(qrcode[0], {text: data.url, width: data.wechatQrcodeSize, height: data.wechatQrcodeSize});
	    }
	
	
	    /**
	     * Get available site lists.
	     *
	     * @param {Object} data
	     *
	     * @returns {Array}
	     */
	    function getSites(data) {
	        if (!data['mobileSites'].length) {
	            data['mobileSites'] = data['sites'];
	        }
	
	        var sites = (isMobileScreen ? data['mobileSites'] : data['sites']).slice(0);
	        var disabled = data['disabled'];
	
	        if (typeof sites == 'string') {
	            sites = sites.split(/\s*,\s*/);
	        }
	        if (typeof disabled == 'string') {
	            disabled = disabled.split(/\s*,\s*/);
	        }
	
	        if (runningInWeChat) {
	            disabled.push('wechat');
	        }
	
	        // Remove elements
	        disabled.length && each(disabled, function (it) {
	            sites.splice(inArray(it, sites), 1);
	        });
	
	        return sites;
	    }
	
	
	    /**
	     * Build the url of icon.
	     *
	     * @param {String} name
	     * @param {Object} data
	     *
	     * @returns {String}
	     */
	    function makeUrl(name, data) {
	        data['summary'] = data['description'];
	
	        return templates[name].replace(/\{\{(\w)(\w*)\}\}/g, function (m, fix, key) {
	            var nameKey = name + fix + key.toLowerCase();
	            key = (fix + key).toLowerCase();
	
	            return encodeURIComponent((data[nameKey] === undefined ? data[key] : data[nameKey]) || '');
	        });
	    }
	
	
	    /**
	     * Supports querySelectorAll, jQuery, Zepto and simple selector.
	     *
	     * @param str
	     *
	     * @returns {*}
	     */
	    function querySelectorAlls(str) {
	        return (document.querySelectorAll || __webpack_provided_window_dot_jQuery || window.Zepto || selector).call(document, str);
	    }
	
	
	    /**
	     * Simple selector.
	     *
	     * @param {String} str #ID or .CLASS
	     *
	     * @returns {Array}
	     */
	    function selector(str) {
	        var elems = [];
	
	        each(str.split(/\s*,\s*/), function(s) {
	            var m = s.match(/([#.])(\w+)/);
	            if (m === null) {
	                throw Error('Supports only simple single #ID or .CLASS selector.');
	            }
	
	            if (m[1]) {
	                var elem = document.getElementById(m[2]);
	
	                if (elem) {
	                    elems.push(elem);
	                }
	            }
	
	            elems = elems.concat(getElementsByClassName(str));
	        });
	
	        return elems;
	    }
	
	
	    /**
	     * Add the classNames for element.
	     *
	     * @param {Element} elem
	     * @param {String} value
	     */
	    function addClass(elem, value) {
	        if (value && typeof value === "string") {
	            var classNames = (elem.className + ' ' + value).split(/\s+/);
	            var setClass = ' ';
	
	            each(classNames, function (className) {
	                if (setClass.indexOf(' ' + className + ' ') < 0) {
	                    setClass += className + ' ';
	                }
	            });
	
	            elem.className = setClass.slice(1, -1);
	        }
	    }
	
	
	    /**
	     * Get meta element content value
	     *
	     * @param {String} name
	     *
	     * @returns {String|*}
	     */
	    function getMetaContentByName(name) {
	        return (document.getElementsByName(name)[0] || 0).content;
	    }
	
	
	    /**
	     * Get elements By className for IE8-
	     *
	     * @param {Element} elem element
	     * @param {String} name className
	     * @param {String} tag tagName
	     *
	     * @returns {HTMLCollection|Array}
	     */
	    function getElementsByClassName(elem, name, tag) {
	        if (elem.getElementsByClassName) {
	            return elem.getElementsByClassName(name);
	        }
	
	        var elements = [];
	        var elems = elem.getElementsByTagName(tag || '*');
	        name = ' ' + name + ' ';
	
	        each(elems, function (elem) {
	            if ((' ' + (elem.className || '') + ' ').indexOf(name) >= 0) {
	                elements.push(elem);
	            }
	        });
	
	        return elements;
	    }
	
	
	    /**
	     * Create element by string.
	     *
	     * @param {String} str
	     *
	     * @returns {NodeList}
	     */
	    function createElementByString(str) {
	        var div = document.createElement('div');
	        div.innerHTML = str;
	
	        return div.childNodes;
	    }
	
	
	    /**
	     * Merge objects.
	     *
	     * @returns {Object}
	     */
	    function mixin() {
	        var args = arguments;
	
	        if (Object$assign) {
	            return Object$assign.apply(null, args);
	        }
	
	        var target = {};
	
	        each(args, function (it) {
	            each(it, function (v, k) {
	                target[k] = v;
	            });
	        });
	
	        return args[0] = target;
	    }
	
	
	    /**
	     * Get dataset object.
	     *
	     * @param {Element} elem
	     *
	     * @returns {Object}
	     */
	    function dataset(elem) {
	        if (elem.dataset) {
	            return elem.dataset;
	        }
	
	        var target = {};
	
	        if (elem.hasAttributes()) {
	            each(elem.attributes, function (attr) {
	                var name = attr.name;
	                if (name.indexOf('data-') !== 0) {
	                    return true;
	                }
	
	                name = name.replace(/^data-/i, '')
	                    .replace(/-(\w)/g, function (all, letter) {
	                        return letter.toUpperCase();
	                    });
	
	                target[name] = attr.value;
	            });
	
	            return target;
	        }
	
	        return {};
	    }
	
	
	    /**
	     * found element in the array.
	     *
	     * @param {Array|Object} elem
	     * @param {Array} arr
	     * @param {Number} i
	     *
	     * @returns {Number}
	     */
	    function inArray(elem, arr, i) {
	        var len;
	
	        if (arr) {
	            if (Array$indexOf) {
	                return Array$indexOf.call(arr, elem, i);
	            }
	
	            len = arr.length;
	            i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
	
	            for (; i < len; i++) {
	                // Skip accessing in sparse arrays
	                if (i in arr && arr[i] === elem) {
	                    return i;
	                }
	            }
	        }
	
	        return -1;
	    }
	
	
	    /**
	     * Simple each.
	     *
	     * @param {Array|Object} obj
	     * @param {Function} callback
	     *
	     * @returns {*}
	     */
	    function each(obj, callback) {
	        var length = obj.length;
	
	        if (length === undefined) {
	            for (var name in obj) {
	                if (obj.hasOwnProperty(name)) {
	                    if (callback.call(obj[name], obj[name], name) === false) {
	                        break;
	                    }
	                }
	            }
	        } else {
	            for (var i = 0; i < length; i++) {
	                if (callback.call(obj[i], obj[i], i) === false) {
	                    break;
	                }
	            }
	        }
	    }
	
	
	    /**
	     * Dom ready.
	     *
	     * @param {Function} fn
	     *
	     * @link https://github.com/jed/alReady.js
	     */
	    function alReady ( fn ) {
	        var add = 'addEventListener';
	        var pre = document[ add ] ? '' : 'on';
	
	        ~document.readyState.indexOf( 'm' ) ? fn() :
	            'load DOMContentLoaded readystatechange'.replace( /\w+/g, function( type, i ) {
	                ( i ? document : window )
	                    [ pre ? 'attachEvent' : add ]
	                (
	                    pre + type,
	                    function(){ if ( fn ) if ( i < 6 || ~document.readyState.indexOf( 'm' ) ) fn(), fn = 0 },
	                    !1
	                )
	            })
	    }
	})(window, document);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=docs.js.map