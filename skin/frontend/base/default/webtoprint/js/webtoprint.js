var WebToPrint =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var deletedIds = [];

var document = window.document;

var slice = deletedIds.slice;

var concat = deletedIds.concat;

var push = deletedIds.push;

var indexOf = deletedIds.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "1.12.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1, IE<9
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: deletedIds.sort,
	splice: deletedIds.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type( obj ) === "array";
	},

	isWindow: function( obj ) {
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {

		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	isPlainObject: function( obj ) {
		var key;

		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {

			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call( obj, "constructor" ) &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}
		} catch ( e ) {

			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Support: IE<9
		// Handle iteration over inherited properties before own properties.
		if ( !support.ownFirst ) {
			for ( key in obj ) {
				return hasOwn.call( obj, key );
			}
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {

			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data ); // jscs:ignore requireDotNotation
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1, IE<9
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( indexOf ) {
				return indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {

				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		while ( j < len ) {
			first[ i++ ] = second[ j++ ];
		}

		// Support: IE<9
		// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
		if ( len !== len ) {
			while ( second[ j ] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: function() {
		return +( new Date() );
	},

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = deletedIds[ Symbol.iterator ];
}
/* jshint ignore: end */

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, nidselect, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
					while ( i-- ) {
						groups[i] = nidselect + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( (parent = document.defaultView) && parent.top !== parent ) {
		// Support: IE 11
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( document.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( (oldCache = uniqueCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) > -1 ) !== not;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// init accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt( 0 ) === "<" &&
				selector.charAt( selector.length - 1 ) === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {

						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[ 2 ] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[ 0 ] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof root.ready !== "undefined" ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter( function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

				// Always skip document fragments
				if ( cur.nodeType < 11 && ( pos ?
					pos.index( cur ) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector( cur, selectors ) ) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[ 0 ], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem, this );
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				ret = jQuery.uniqueSort( ret );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				ret = ret.reverse();
			}
		}

		return this.pushStack( ret );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = true;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this === promise ? newDefer.promise() : this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add( function() {

					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 ||
				( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred.
			// If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );

					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.progress( updateFunc( i, progressContexts, progressValues ) )
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
} );


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {

	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
} );

/**
 * Clean-up method for dom ready events
 */
function detach() {
	if ( document.addEventListener ) {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );

	} else {
		document.detachEvent( "onreadystatechange", completed );
		window.detachEvent( "onload", completed );
	}
}

/**
 * The ready event handler and self cleanup method
 */
function completed() {

	// readyState === "complete" is good enough for us to call the dom ready in oldIE
	if ( document.addEventListener ||
		window.event.type === "load" ||
		document.readyState === "complete" ) {

		detach();
		jQuery.ready();
	}
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE6-10
		// Older IE sometimes signals "interactive" too soon
		if ( document.readyState === "complete" ||
			( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed );

		// If IE event model is used
		} else {

			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch ( e ) {}

			if ( top && top.doScroll ) {
				( function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {

							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll( "left" );
						} catch ( e ) {
							return window.setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				} )();
			}
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Support: IE<9
// Iteration over object's inherited properties before its own
var i;
for ( i in jQuery( support ) ) {
	break;
}
support.ownFirst = i === "0";

// Note: most support tests are defined in their respective modules.
// false until the test is run
support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom
jQuery( function() {

	// Minified: var a,b,c,d
	var val, div, body, container;

	body = document.getElementsByTagName( "body" )[ 0 ];
	if ( !body || !body.style ) {

		// Return for frameset docs that don't have a body
		return;
	}

	// Setup
	div = document.createElement( "div" );
	container = document.createElement( "div" );
	container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
	body.appendChild( container ).appendChild( div );

	if ( typeof div.style.zoom !== "undefined" ) {

		// Support: IE<8
		// Check if natively block-level elements act like inline-block
		// elements when setting their display to 'inline' and giving
		// them layout
		div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
		if ( val ) {

			// Prevent IE 6 from affecting layout for positioned elements #11048
			// Prevent IE from shrinking the body in IE 7 mode #12869
			// Support: IE<8
			body.style.zoom = 1;
		}
	}

	body.removeChild( container );
} );


( function() {
	var div = document.createElement( "div" );

	// Support: IE<9
	support.deleteExpando = true;
	try {
		delete div.test;
	} catch ( e ) {
		support.deleteExpando = false;
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();
var acceptData = function( elem ) {
	var noData = jQuery.noData[ ( elem.nodeName + " " ).toLowerCase() ],
		nodeType = +elem.nodeType || 1;

	// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
	return nodeType !== 1 && nodeType !== 9 ?
		false :

		// Nodes accept data unless otherwise specified; rejection can be conditional
		!noData || noData !== true && elem.getAttribute( "classid" ) === noData;
};




var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[ name ] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}

function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var ret, thisCache,
		internalKey = jQuery.expando,

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( ( !id || !cache[ id ] || ( !pvt && !cache[ id ].data ) ) &&
		data === undefined && typeof name === "string" ) {
		return;
	}

	if ( !id ) {

		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {

		// Avoid exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( typeof name === "string" ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var thisCache, i,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split( " " );
					}
				}
			} else {

				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			i = name.length;
			while ( i-- ) {
				delete thisCache[ name[ i ] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( pvt ? !isEmptyDataObject( thisCache ) : !jQuery.isEmptyObject( thisCache ) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */
	} else if ( support.deleteExpando || cache != cache.window ) {
		/* jshint eqeqeq: true */
		delete cache[ id ];

	// When all else fails, undefined
	} else {
		cache[ id ] = undefined;
	}
}

jQuery.extend( {
	cache: {},

	// The following elements (space-suffixed to avoid Object.prototype collisions)
	// throw uncatchable exceptions if you attempt to set expando properties
	noData: {
		"applet ": true,
		"embed ": true,

		// ...but Flash objects (which have this classid) *can* handle expandos
		"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[ jQuery.expando ] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Special expections of .data basically thwart jQuery.access,
		// so implement the relevant behavior ourselves

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				jQuery.data( this, key );
			} );
		}

		return arguments.length > 1 ?

			// Sets one value
			this.each( function() {
				jQuery.data( this, key, value );
			} ) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
	},

	removeData: function( key ) {
		return this.each( function() {
			jQuery.removeData( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object,
	// or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );


( function() {
	var shrinkWrapBlocksVal;

	support.shrinkWrapBlocks = function() {
		if ( shrinkWrapBlocksVal != null ) {
			return shrinkWrapBlocksVal;
		}

		// Will be changed later if needed.
		shrinkWrapBlocksVal = false;

		// Minified: var b,c,d
		var div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {

			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		// Support: IE6
		// Check if elements with layout shrink-wrap their children
		if ( typeof div.style.zoom !== "undefined" ) {

			// Reset CSS: box-sizing; display; margin; border
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;" +
				"padding:1px;width:1px;zoom:1";
			div.appendChild( document.createElement( "div" ) ).style.width = "5px";
			shrinkWrapBlocksVal = div.offsetWidth !== 3;
		}

		body.removeChild( container );

		return shrinkWrapBlocksVal;
	};

} )();
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		length = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < length; i++ ) {
				fn(
					elems[ i ],
					key,
					raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			length ? fn( elems[ 0 ], key ) : emptyGet;
};
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([\w:-]+)/ );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );

var rleadingWhitespace = ( /^\s+/ );

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
		"details|dialog|figcaption|figure|footer|header|hgroup|main|" +
		"mark|meter|nav|output|picture|progress|section|summary|template|time|video";



function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}


( function() {
	var div = document.createElement( "div" ),
		fragment = document.createDocumentFragment(),
		input = document.createElement( "input" );

	// Setup
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName( "tbody" ).length;

	// Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

	// Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone =
		document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	input.type = "checkbox";
	input.checked = true;
	fragment.appendChild( input );
	support.appendChecked = input.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE6-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// #11217 - WebKit loses check when the name is after the checked attribute
	fragment.appendChild( div );

	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input = document.createElement( "input" );
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
	support.noCloneEvent = !!div.addEventListener;

	// Support: IE<9
	// Since attributes and properties are the same in IE,
	// cleanData must set properties to undefined rather than use removeAttribute
	div[ jQuery.expando ] = 1;
	support.attributes = !div.getAttribute( jQuery.expando );
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {
	option: [ 1, "<select multiple='multiple'>", "</select>" ],
	legend: [ 1, "<fieldset>", "</fieldset>" ],
	area: [ 1, "<map>", "</map>" ],

	// Support: IE8
	param: [ 1, "<object>", "</object>" ],
	thead: [ 1, "<table>", "</table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
	// unless wrapped in a div with non-breaking characters in front of it.
	_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
};

// Support: IE8-IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
				undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context;
			( elem = elems[ i ] ) != null;
			i++
		) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; ( elem = elems[ i ] ) != null; i++ ) {
		jQuery._data(
			elem,
			"globalEval",
			!refElements || jQuery._data( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/,
	rtbody = /<tbody/i;

function fixDefaultChecked( elem ) {
	if ( rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

function buildFragment( elems, context, scripts, selection, ignored ) {
	var j, elem, contains,
		tmp, tag, tbody, wrap,
		l = elems.length,

		// Ensure a safe fragment
		safe = createSafeFragment( context ),

		nodes = [],
		i = 0;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || safe.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;

				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Manually add leading whitespace removed by IE
				if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
					nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[ 0 ] ) );
				}

				// Remove IE's autoinserted <tbody> from table fragments
				if ( !support.tbody ) {

					// String was a <table>, *may* have spurious <tbody>
					elem = tag === "table" && !rtbody.test( elem ) ?
						tmp.firstChild :

						// String was a bare <thead> or <tfoot>
						wrap[ 1 ] === "<table>" && !rtbody.test( elem ) ?
							tmp :
							0;

					j = elem && elem.childNodes.length;
					while ( j-- ) {
						if ( jQuery.nodeName( ( tbody = elem.childNodes[ j ] ), "tbody" ) &&
							!tbody.childNodes.length ) {

							elem.removeChild( tbody );
						}
					}
				}

				jQuery.merge( nodes, tmp.childNodes );

				// Fix #12392 for WebKit and IE > 9
				tmp.textContent = "";

				// Fix #12392 for oldIE
				while ( tmp.firstChild ) {
					tmp.removeChild( tmp.firstChild );
				}

				// Remember the top-level container for proper cleanup
				tmp = safe.lastChild;
			}
		}
	}

	// Fix #11356: Clear elements from fragment
	if ( tmp ) {
		safe.removeChild( tmp );
	}

	// Reset defaultChecked for any radios and checkboxes
	// about to be appended to the DOM in IE 6/7 (#8060)
	if ( !support.appendChecked ) {
		jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
	}

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}

			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( safe.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	tmp = null;

	return safe;
}


( function() {
	var i, eventName,
		div = document.createElement( "div" );

	// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
	for ( i in { submit: true, change: true, focusin: true } ) {
		eventName = "on" + i;

		if ( !( support[ i ] = eventName in window ) ) {

			// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
			div.setAttribute( eventName, "t" );
			support[ i ] = div.attributes[ eventName ].expando === false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();


var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE9
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" &&
					( !e || jQuery.event.triggered !== e.type ) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};

			// Add elem as a property of the handle fn to prevent a memory leak
			// with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] &&
				jQuery._data( cur, "handle" );

			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if (
				( !special._default ||
				 special._default.apply( eventPath.pop(), data ) === false
				) && acceptData( elem )
			) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {

						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support (at least): Chrome, IE9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox<=42+
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			/* jshint eqeqeq: false */
			for ( ; cur != this; cur = cur.parentNode || this ) {
				/* jshint eqeqeq: true */

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Safari 6-8+
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
		"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split( " " ),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: ( "button buttons clientX clientY fromElement offsetX offsetY " +
			"pageX pageY screenX screenY toElement" ).split( " " ),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +
					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
					( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY +
					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
					( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ?
					original.toElement :
					fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {

						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	// Piggyback on a donor event to simulate a different one
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true

				// Previously, `originalEvent: {}` was set here, so stopPropagation call
				// would not be triggered on donor event, since in our own
				// jQuery.event.stopPropagation function we had a check for existence of
				// originalEvent.stopPropagation method, so, consequently it would be a noop.
				//
				// Guard for simulated events was moved to jQuery.event.stopPropagation function
				// since `originalEvent` should point to the original event for the
				// constancy with other events and for more focused logic
			}
		);

		jQuery.event.trigger( e, null, elem );

		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event,
			// to properly expose it to GC
			if ( typeof elem[ name ] === "undefined" ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: IE < 9, Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( !e || this.isSimulated ) {
			return;
		}

		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

// IE submit delegation
if ( !support.submit ) {

	jQuery.event.special.submit = {
		setup: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {

				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ?

						// Support: IE <=8
						// We use jQuery.prop instead of elem.form
						// to allow fixing the IE8 delegated submit issue (gh-2332)
						// by 3rd party polyfills/workarounds.
						jQuery.prop( elem, "form" ) :
						undefined;

				if ( form && !jQuery._data( form, "submit" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submitBubble = true;
					} );
					jQuery._data( form, "submit", true );
				}
			} );

			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {

			// If form was submitted by the user, bubble the event up the tree
			if ( event._submitBubble ) {
				delete event._submitBubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event );
				}
			}
		},

		teardown: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !support.change ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {

				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._justChanged = true;
						}
					} );
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._justChanged && !event.isTrigger ) {
							this._justChanged = false;
						}

						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event );
					} );
				}
				return false;
			}

			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "change" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event );
						}
					} );
					jQuery._data( elem, "change", true );
				}
			} );
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger ||
				( elem.type !== "radio" && elem.type !== "checkbox" ) ) {

				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					jQuery._removeData( doc, fix );
				} else {
					jQuery._data( doc, fix, attaches );
				}
			}
		};
	} );
}

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	},

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp( "<(?:" + nodeNames + ")[\\s/>]", "i" ),
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

	// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement( "div" ) );

// Support: IE<8
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName( "tbody" )[ 0 ] ||
			elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( jQuery.find.attr( elem, "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}
	return elem;
}

function cloneCopyEvent( src, dest ) {
	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( support.html5Clone && ( src.innerHTML && !jQuery.trim( dest.innerHTML ) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {

		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var first, node, hasScripts,
		scripts, doc, fragment,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android<4.1, PhantomJS<2
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!jQuery._data( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							jQuery.globalEval(
								( node.text || node.textContent || node.innerHTML || "" )
									.replace( rcleanScript, "" )
							);
						}
					}
				}
			}

			// Fix #11809: Avoid leaking memory
			fragment = first = null;
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		elems = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = elems[ i ] ) != null; i++ ) {

		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( support.html5Clone || jQuery.isXMLDoc( elem ) ||
			!rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {

			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( ( !support.noCloneEvent || !support.noCloneChecked ) &&
				( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; ( node = srcElements[ i ] ) != null; ++i ) {

				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[ i ] ) {
					fixCloneNodeIssues( node, destElements[ i ] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; ( node = srcElements[ i ] ) != null; i++ ) {
					cloneCopyEvent( node, destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems, /* internal */ forceAcceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			attributes = support.attributes,
			special = jQuery.event.special;

		for ( ; ( elem = elems[ i ] ) != null; i++ ) {
			if ( forceAcceptData || acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// Support: IE<9
						// IE does not allow us to delete expando properties from nodes
						// IE creates expando attributes along with the property
						// IE does not have a removeAttribute function on Document nodes
						if ( !attributes && typeof elem.removeAttribute !== "undefined" ) {
							elem.removeAttribute( internalKey );

						// Webkit & Blink performance suffers when deleting properties
						// from DOM nodes, so set to undefined instead
						// https://code.google.com/p/chromium/issues/detail?id=378607
						} else {
							elem[ internalKey ] = undefined;
						}

						deletedIds.push( id );
					}
				}
			}
		}
	}
} );

jQuery.fn.extend( {

	// Keep domManip exposed until 3.0 (gh-2225)
	domManip: domManip,

	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append(
					( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value )
				);
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {

			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {

						// Remove element nodes and prevent memory leaks
						elem = this[ i ] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );


var iframe,
	elemdisplay = {

		// Support: Firefox
		// We have to pre-define these values for FF (#10227)
		HTML: "block",
		BODY: "block"
	};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */

// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		display = jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
				.appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var documentElement = document.documentElement;



( function() {
	var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal,
		reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	div.style.cssText = "float:left;opacity:.5";

	// Support: IE<9
	// Make sure that element opacity exists (as opposed to filter)
	support.opacity = div.style.opacity === "0.5";

	// Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	support.cssFloat = !!div.style.cssFloat;

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container = document.createElement( "div" );
	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	div.innerHTML = "";
	container.appendChild( div );

	// Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" ||
		div.style.WebkitBoxSizing === "";

	jQuery.extend( support, {
		reliableHiddenOffsets: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableHiddenOffsetsVal;
		},

		boxSizingReliable: function() {

			// We're checking for pixelPositionVal here instead of boxSizingReliableVal
			// since that compresses better and they're computed together anyway.
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},

		pixelMarginRight: function() {

			// Support: Android 4.0-4.3
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelMarginRightVal;
		},

		pixelPosition: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelPositionVal;
		},

		reliableMarginRight: function() {

			// Support: Android 2.3
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableMarginRightVal;
		},

		reliableMarginLeft: function() {

			// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableMarginLeftVal;
		}
	} );

	function computeStyleTests() {
		var contents, divStyle,
			documentElement = document.documentElement;

		// Setup
		documentElement.appendChild( container );

		div.style.cssText =

			// Support: Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";

		// Support: IE<9
		// Assume reasonable values in the absence of getComputedStyle
		pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
		pixelMarginRightVal = reliableMarginRightVal = true;

		// Check for getComputedStyle so that this code is not run in IE<9.
		if ( window.getComputedStyle ) {
			divStyle = window.getComputedStyle( div );
			pixelPositionVal = ( divStyle || {} ).top !== "1%";
			reliableMarginLeftVal = ( divStyle || {} ).marginLeft === "2px";
			boxSizingReliableVal = ( divStyle || { width: "4px" } ).width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = ( divStyle || { marginRight: "4px" } ).marginRight === "4px";

			// Support: Android 2.3 only
			// Div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			contents = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			contents.style.cssText = div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
			contents.style.marginRight = contents.style.width = "0";
			div.style.width = "1px";

			reliableMarginRightVal =
				!parseFloat( ( window.getComputedStyle( contents ) || {} ).marginRight );

			div.removeChild( contents );
		}

		// Support: IE6-8
		// First check that getClientRects works as expected
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.style.display = "none";
		reliableHiddenOffsetsVal = div.getClientRects().length === 0;
		if ( reliableHiddenOffsetsVal ) {
			div.style.display = "";
			div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			div.childNodes[ 0 ].style.borderCollapse = "separate";
			contents = div.getElementsByTagName( "td" );
			contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
			reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			if ( reliableHiddenOffsetsVal ) {
				contents[ 0 ].style.display = "";
				contents[ 1 ].style.display = "none";
				reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			}
		}

		// Teardown
		documentElement.removeChild( container );
	}

} )();


var getStyles, curCSS,
	rposition = /^(top|right|bottom|left)$/;

if ( window.getComputedStyle ) {
	getStyles = function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

	curCSS = function( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is only needed for .css('filter') in IE9, see #12537
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value"
			// instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values,
			// but width seems to be reliably pixels
			// this is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "";
	};
} else if ( documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, computed ) {
		var left, rs, rsLeft, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed[ name ] : undefined;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are
		// proportional to the parent element instead
		// and we can't measure the parent instead because it
		// might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "" || "auto";
	};
}




function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

		ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/i,

	// swappable if display is none or starts with table except
	// "table", "table-cell", or "table-caption"
	// see here for display values:
	// https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;


// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt( 0 ).toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {

			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] =
					jQuery._data( elem, "olddisplay", defaultDisplay( elem.nodeName ) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display && display !== "none" || !hidden ) {
				jQuery._data(
					elem,
					"olddisplay",
					hidden ? display : jQuery.css( elem, "display" )
				);
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = support.boxSizing &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {

		// normalize float css property
		"float": support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight
			// (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				// Support: IE
				// Swallow errors from 'invalid' CSS values (#5509)
				try {
					style[ name ] = value;
				} catch ( e ) {}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
					elem.offsetWidth === 0 ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					support.boxSizing &&
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
} );

if ( !support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {

			// IE uses filters for opacity
			return ropacity.test( ( computed && elem.currentStyle ?
				elem.currentStyle.filter :
				elem.style.filter ) || "" ) ?
					( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
					computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist -
			// attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule
				// or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return (
				parseFloat( curCSS( elem, "marginLeft" ) ) ||

				// Support: IE<=11+
				// Running getBoundingClientRect on a disconnected node in IE throws an error
				// Support: IE8 only
				// getClientRects() errors on disconnected elems
				( jQuery.contains( elem.ownerDocument, elem ) ?
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} ) :
					0
				)
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// we're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";
			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !support.shrinkWrapBlocks() ) {
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show
				// and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = jQuery._data( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done( function() {
				jQuery( elem ).hide();
			} );
		}
		anim.done( function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		} );
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ?
			jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	window.clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var a,
		input = document.createElement( "input" ),
		div = document.createElement( "div" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	// Setup
	div = document.createElement( "div" );
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName( "a" )[ 0 ];

	// Support: Windows Web Apps (WWA)
	// `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "checkbox" );
	div.appendChild( input );

	a = div.getElementsByTagName( "a" )[ 0 ];

	// First batch of tests.
	a.style.cssText = "top:1px";

	// Test setAttribute on camelCase class.
	// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute( "style" ) );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute( "href" ) === "/a";

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement( "form" ).enctype;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE8 only
	// Check if we can trust getAttribute("value")
	input = document.createElement( "input" );
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";
} )();


var rreturn = /\r/g,
	rspaces = /[\x20\t\r\n\f]+/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if (
					hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// handle most common string cases
					ret.replace( rreturn, "" ) :

					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ?
								!option.disabled :
								option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1 ) {

						// Support: IE6
						// When new option element is added to select box we need to
						// force reflow of newly added node in order to workaround delay
						// of initialization properties
						try {
							option.selected = optionSet = true;

						} catch ( _ ) {

							// Will be executed only in IE6
							option.scrollHeight;
						}

					} else {
						option.selected = false;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}

				return options;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = support.getSetAttribute,
	getSetInput = support.input;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {

					// Setting the type on a radio button after the value resets the value in IE8-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {

					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
						elem[ propName ] = false;

					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					} else {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {

			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		} else {

			// Support: IE<9
			// Use defaultChecked and defaultSelected for oldIE
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} else {
		attrHandle[ name ] = function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
			}
		};
	}
} );

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {

				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {

				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {
		set: function( elem, value, name ) {

			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					( ret = elem.ownerDocument.createAttribute( name ) )
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			if ( name === "value" || value === elem.getAttribute( name ) ) {
				return value;
			}
		}
	};

	// Some attributes are constructed with empty-string values when not defined
	attrHandle.id = attrHandle.name = attrHandle.coords =
		function( elem, name, isXML ) {
			var ret;
			if ( !isXML ) {
				return ( ret = elem.getAttributeNode( name ) ) && ret.value !== "" ?
					ret.value :
					null;
			}
		};

	// Fixing value retrieval on a button requires this module
	jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			if ( ret && ret.specified ) {
				return ret.value;
			}
		},
		set: nodeHook.set
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each( [ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		};
	} );
}

if ( !support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {

			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case sensitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}




var rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each( function() {

			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch ( e ) {}
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !support.hrefNormalized ) {

	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each( [ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	} );
}

// Support: Safari, IE9+
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		},
		set: function( elem ) {
			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );

// IE6/7 call enctype encoding
if ( !support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return jQuery.attr( elem, "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// store className if set
					jQuery._data( this, "__className__", className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				jQuery.attr( this, "class",
					className || value === false ?
					"" :
					jQuery._data( this, "__className__" ) || ""
				);
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




// Return jQuery for attributes-only inclusion


jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );


var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

jQuery.parseJSON = function( data ) {

	// Attempt to parse using the native JSON parser first
	if ( window.JSON && window.JSON.parse ) {

		// Support: Android 2.3
		// Workaround failure to string-cast null input
		return window.JSON.parse( data + "" );
	}

	var requireNonComma,
		depth = null,
		str = jQuery.trim( data + "" );

	// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
	// after removing valid tokens
	return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

		// Force termination if we see a misplaced comma
		if ( requireNonComma && comma ) {
			depth = 0;
		}

		// Perform no more replacements after returning to outermost depth
		if ( depth === 0 ) {
			return token;
		}

		// Commas must not follow "[", "{", or ","
		requireNonComma = open || comma;

		// Determine new depth
		// array/object open ("[" or "{"): depth += true - false (increment)
		// array/object close ("]" or "}"): depth += false - true (decrement)
		// other cases ("," or primitive): depth += true - true (numeric cast)
		depth += !close - !open;

		// Remove this token
		return "";
	} ) ) ?
		( Function( "return " + str ) )() :
		jQuery.error( "Invalid JSON: " + data );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	try {
		if ( window.DOMParser ) { // Standard
			tmp = new window.DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} else { // IE
			xml = new window.ActiveXObject( "Microsoft.XMLDOM" );
			xml.async = "false";
			xml.loadXML( data );
		}
	} catch ( e ) {
		xml = undefined;
	}
	if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,

	// IE leaves an \r character at EOL
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType.charAt( 0 ) === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) { // jscs:ignore requireDotNotation
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var

			// Cross-domain detection vars
			parts,

			// Loop variable
			i,

			// URL without anti-cache param
			cacheURL,

			// Response headers as string
			responseHeadersString,

			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,

			// Response headers
			responseHeaders,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {

								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" )
			.replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );

				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapAll( html.call( this, i ) );
			} );
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			var wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function() {
		return this.parent().each( function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		} ).end();
	}
} );


function getDisplay( elem ) {
	return elem.style && elem.style.display || jQuery.css( elem, "display" );
}

function filterHidden( elem ) {

	// Disconnected elements are considered hidden
	if ( !jQuery.contains( elem.ownerDocument || document, elem ) ) {
		return true;
	}
	while ( elem && elem.nodeType === 1 ) {
		if ( getDisplay( elem ) === "none" || elem.type === "hidden" ) {
			return true;
		}
		elem = elem.parentNode;
	}
	return false;
}

jQuery.expr.filters.hidden = function( elem ) {

	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return support.reliableHiddenOffsets() ?
		( elem.offsetWidth <= 0 && elem.offsetHeight <= 0 &&
			!elem.getClientRects().length ) :
			filterHidden( elem );
};

jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {

			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?

	// Support: IE6-IE8
	function() {

		// XHR cannot access local files, always use ActiveX for that case
		if ( this.isLocal ) {
			return createActiveXHR();
		}

		// Support: IE 9-11
		// IE seems to error on cross-domain PATCH requests when ActiveX XHR
		// is used. In IE 9+ always use the native XHR.
		// Note: this condition won't catch Edge as it doesn't define
		// document.documentMode but it also doesn't support ActiveX so it won't
		// reach this code.
		if ( document.documentMode > 8 ) {
			return createStandardXHR();
		}

		// Support: IE<9
		// oldIE XHR does not support non-RFC2616 methods (#13240)
		// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
		// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
		// Although this check for six methods instead of eight
		// since IE also does not support "trace" and "connect"
		return /^(get|post|head|put|delete|options)$/i.test( this.type ) &&
			createStandardXHR() || createActiveXHR();
	} :

	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

var xhrId = 0,
	xhrCallbacks = {},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	} );
}

// Determine support properties
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport( function( options ) {

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !options.crossDomain || support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					// Open the socket
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {

						// Support: IE<9
						// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
						// request header to a null-value.
						//
						// To keep consistent with other XHR implementations, cast the value
						// to string and ignore `undefined`.
						if ( headers[ i ] !== undefined ) {
							xhr.setRequestHeader( i, headers[ i ] + "" );
						}
					}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( options.hasContent && options.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, statusText, responses;

						// Was never called and is aborted or complete
						if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

							// Clean up
							delete xhrCallbacks[ id ];
							callback = undefined;
							xhr.onreadystatechange = jQuery.noop;

							// Abort manually if needed
							if ( isAbort ) {
								if ( xhr.readyState !== 4 ) {
									xhr.abort();
								}
							} else {
								responses = {};
								status = xhr.status;

								// Support: IE<10
								// Accessing binary-data responseText throws an exception
								// (#11426)
								if ( typeof xhr.responseText === "string" ) {
									responses.text = xhr.responseText;
								}

								// Firefox throws an exception when accessing
								// statusText for faulty cross-domain requests
								try {
									statusText = xhr.statusText;
								} catch ( e ) {

									// We normalize with Webkit giving an empty statusText
									statusText = "";
								}

								// Filter status for non standard behaviors

								// If the request is local and we have data: assume a success
								// (success with no data won't get notified, that's the best we
								// can do given current implementations)
								if ( !status && options.isLocal && !options.crossDomain ) {
									status = responses.text ? 200 : 404;

								// IE - #1450: sometimes returns 1223 when it should be 204
								} else if ( status === 1223 ) {
									status = 204;
								}
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, xhr.getAllResponseHeaders() );
						}
					};

					// Do send the request
					// `xhr.send` may raise an exception, but it will be
					// handled in jQuery.ajax (so no try/catch here)
					if ( !options.async ) {

						// If we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {

						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						window.setTimeout( callback );
					} else {

						// Register the callback, but delay it in case `xhr.send` throws
						// Add to the list of active xhr callbacks
						xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	} );
}

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch ( e ) {}
}




// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery( "head" )[ 0 ] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement( "script" );

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// data: string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off, url.length ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};





/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			jQuery.inArray( "auto", [ curCSSTop, curCSSLeft ] ) > -1;

		// need to be able to calculate position if either top or left
		// is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win,
			box = { top: 0, left: 0 },
			elem = this[ 0 ],
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== "undefined" ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
			left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? ( prop in win ) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
} );

// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
	function( defaultExtra, funcName ) {

		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only,
					// but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}



var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

return jQuery;
}));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

$.ui = $.ui || {};

return $.ui.version = "1.12.1";

} ) );


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by COD on 23.04.14.
 */
var ef = function ef() {};

var Logger = window.console || {};
Logger.log = Logger.log || ef;
Logger.debug = Logger.debug || ef;
Logger.warn = Logger.warn || ef;
Logger.error = Logger.error || ef;

exports.default = Logger;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var $ = __webpack_require__(0);
__webpack_require__(4);
__webpack_require__(60);
__webpack_require__(61);
__webpack_require__(62);
__webpack_require__(51)($);
__webpack_require__(48)($);

__webpack_require__(36);
__webpack_require__(37);
__webpack_require__(50);
__webpack_require__(49);
__webpack_require__(38);

// require('./fancybox/jquery-fancybox.js')($);


exports.default = $;

/***/ }),
/* 4 */
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
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by cod on 21.4.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _Logger = __webpack_require__(2);

var _Logger2 = _interopRequireDefault(_Logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Feature = function () {
    _createClass(Feature, null, [{
        key: 'instance',

        /**
         * @return {Feature}
         */
        value: function instance() {
            if (!Feature._instance) {
                Feature._instance = new Feature();
            }
            return Feature._instance;
        }
    }]);

    function Feature() {
        _classCallCheck(this, Feature);

        if (Feature._instance) {
            _Logger2.default.error('An instance of Feature already exists');
        }
    }

    /**
     * Invokes the given feature method if the feature is enabled
     *
     * @param {string} feature_name
     * @param {function} feature_method
     * @param {*} args
     * @return {*}
     */


    _createClass(Feature, [{
        key: 'call',
        value: function call(feature_name, feature_method) {
            if (typeof feature_name !== 'string') {
                throw new TypeError('Argument feature_name must be of type "string"');
            }
            if (typeof feature_method !== 'function') {
                throw new TypeError('Argument feature_method must be of type "function"');
            }

            if (this.is_activated(feature_name)) {
                var function_name = this._get_function_name('' + feature_method);
                _Logger2.default.debug('[Feature] Call \'' + function_name + '\' for ' + feature_name);

                for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                    args[_key - 2] = arguments[_key];
                }

                return feature_method.apply(undefined, args);
            }

            _Logger2.default.warn('[Feature] ' + feature_name + ' not activated');

            return undefined;
        }

        /**
         * @param {string} feature_name
         * @return {boolean}
         */

    }, {
        key: 'is_activated',
        value: function is_activated(feature_name) {
            if (typeof feature_name !== 'string') {
                throw new TypeError('Argument feature_name must be of type "string"');
            }
            return true;
        }

        /**
         * @return {{dataset: string, inPreviewEdit: string, fancybox: {saveImageButton: string, selectImage: string, resizing: string, updatePreview: string}}}
         */

    }, {
        key: '_get_function_name',


        /**
         * @param {string} feature_method
         * @return {string}
         * @private
         */
        value: function _get_function_name(feature_method) {
            var method_dump = '' + feature_method;

            if (method_dump.substr(0, 11) === 'function ()') {
                return 'anonymous function';
            }

            return method_dump.substring(9, method_dump.indexOf(' {'));
        }
    }], [{
        key: 'feature',
        get: function get() {
            return {
                dataset: 'Dataset',
                inPreviewEdit: 'InPreviewEdit',
                fancybox: {
                    saveImageButton: 'Fancybox/SaveImageButton',
                    selectImage: 'Fancybox/SelectImage',
                    resizing: 'Fancybox/Resizing',
                    updatePreview: 'Fancybox/UpdatePreview'
                }
            };
        }
    }]);

    return Feature;
}();

/**
 * @type {Feature}
 * @private
 */


exports.default = Feature;
Feature._instance = null;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jQueryLoader = __webpack_require__(3);

var _jQueryLoader2 = _interopRequireDefault(_jQueryLoader);

var _Logger = __webpack_require__(2);

var _Logger2 = _interopRequireDefault(_Logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SaveImageButton = function () {
    _createClass(SaveImageButton, null, [{
        key: 'instance',

        /**
         * @return {SaveImageButton}
         */
        value: function instance() {
            if (!SaveImageButton._instance) {
                SaveImageButton._instance = new SaveImageButton();
            }

            return SaveImageButton._instance;
        }
    }]);

    function SaveImageButton() {
        _classCallCheck(this, SaveImageButton);

        /**
         * @type {jQuery|HTMLLinkElement}
         * @private
         */
        this._button = null;
    }

    /**
     * @return {jQuery|HTMLLinkElement}
     */


    _createClass(SaveImageButton, [{
        key: 'add',


        /**
         * Adds the button if it does not already exist
         *
         * @param {DataInterface} data
         * @param {boolean} in_preview
         * @param {string} name
         * @param {string} guid
         */
        value: function add(data, in_preview, name, guid) {
            if (!this._button) {
                this._button = this._create_button(data, in_preview, name, guid);
            }
        }

        /**
         * Change the button
         *
         * @param {boolean} changed
         */

    }, {
        key: 'update',
        value: function update(changed) {
            if (changed === undefined) {
                this._button.addClass('disabled');
                this._get_outer().removeClass('saved');
            } else if (changed) {
                this._get_outer().removeClass('saved');
                this._button.removeClass('disabled');
            } else {
                this._button.addClass('disabled');
                this._get_outer().addClass('saved');
            }
        }

        /**
         * Remove the button
         */

    }, {
        key: 'remove',
        value: function remove() {
            this._button.remove();
            this._get_outer().removeClass('saved');
            this._button = null;
        }

        /**
         * @param {DataInterface} zp
         * @param {boolean} in_preview
         * @param {string} name
         * @param {string} guid
         * @return {*|jQuery}
         * @private
         */

    }, {
        key: '_create_button',
        value: function _create_button(zp, in_preview, name, guid) {
            var $outer = this._get_outer();
            if ($outer.length === 0) {
                throw new ReferenceError('Could not find fancybox-outer');
            }

            var $button = (0, _jQueryLoader2.default)('<a id="zp-save-image-button" class="disabled">' + '<span class="icon left-part" />' + '<span class="text">' + '<span class="save-image-text">' + save_text + '</span>' + '<span class="saved-image-text">' + saved_text + '</span>' + '</span>' + '</a>').appendTo($outer);

            var $close = this._get_close_button().addClass('resizer-tweaks');

            if (in_preview) {
                $close.clone().css('display', 'inline').click(function () {
                    zp._shape_to_show = name;

                    (0, _jQueryLoader2.default)('#preview-image-page-' + zp.current_page).click();

                    (0, _jQueryLoader2.default)(this).remove();
                    $close.attr('id', 'fancybox-close');
                }).appendTo($outer);

                $close.attr('id', 'fancybox-close-orig');
            }

            $button.addClass('no-middle');

            $button.click(function () {
                if ($button.hasClass('disabled')) {
                    return;
                }

                /**
                 * @type {ImageEditingContext}
                 */
                var image_editing_context = zp.image_edit;
                image_editing_context.save();
                image_editing_context.$input.prop('checked', true).change();

                $outer.addClass('saved');
                $button.addClass('disabled');
            });

            return $button;
        }

        /**
         * @return {jQuery|HTMLElement}
         * @private
         */

    }, {
        key: '_get_close_button',
        value: function _get_close_button() {
            var outer = (0, _jQueryLoader2.default)('#fancybox-close');

            return outer.length > 0 ? outer : (0, _jQueryLoader2.default)('.fancybox-close');
        }

        /**
         * @return {jQuery|HTMLElement}
         * @private
         */

    }, {
        key: '_get_button',
        value: function _get_button() {
            return (0, _jQueryLoader2.default)('#zp-save-image-button');
        }

        /**
         * @return {jQuery|HTMLElement}
         * @private
         */

    }, {
        key: '_get_outer',
        value: function _get_outer() {
            var outer = (0, _jQueryLoader2.default)('#fancybox-outer');

            return outer.length > 0 ? outer : (0, _jQueryLoader2.default)('.fancybox-outer');
        }
    }, {
        key: 'button',
        get: function get() {
            return this._button;
        }

        /**
         * Adds the button
         *
         * @param {DataInterface} zp
         * @param {boolean} in_preview
         * @param {string} name
         * @param {string} guid
         */

    }], [{
        key: 'fancybox_add_save_image_button',
        value: function fancybox_add_save_image_button(zp, in_preview, name, guid) {
            SaveImageButton.instance().add(zp, in_preview, name, guid);
        }

        /**
         * Change the button
         *
         * @param {boolean} changed
         */

    }, {
        key: 'fancybox_update_save_image_button',
        value: function fancybox_update_save_image_button(changed) {
            SaveImageButton.instance().update(changed);
        }

        /**
         * Remove the button
         */

    }, {
        key: 'fancybox_remove_save_image_button',
        value: function fancybox_remove_save_image_button() {
            SaveImageButton.instance().remove();
        }
    }]);

    return SaveImageButton;
}();

/**
 * @type {SaveImageButton}
 * @private
 */


exports.default = SaveImageButton;
SaveImageButton._instance = null;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by cod on 24.4.17.
 */

var Assert = function () {
    function Assert() {
        _classCallCheck(this, Assert);
    }

    _createClass(Assert, null, [{
        key: 'assertType',

        /**
         * Asserts that given value is of the given type
         *
         * @param {*} value
         * @param {string} type
         * @param {string} argumentName
         */
        value: function assertType(value, type) {
            var argumentName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== '' + type) {
                if (argumentName) {
                    throw new TypeError('Expected argument ' + argumentName + ' to be of type "' + type + '", "' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + '" given');
                }
                throw new TypeError('Expected value to be of type "' + type + '", "' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + '" given');
            }
        }

        /**
         * Asserts that the given value is of type function
         *
         * @param {*} value
         * @param {string} argumentName
         */

    }, {
        key: 'assertFunction',
        value: function assertFunction(value) {
            var argumentName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            Assert.assertType(value, 'function', argumentName);
        }

        /**
         * Asserts that the given value is of type object
         *
         * @param {*} value
         * @param {string} argumentName
         */

    }, {
        key: 'assertObject',
        value: function assertObject(value) {
            var argumentName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            Assert.assertType(value, 'object', argumentName);
        }

        /**
         * Asserts that the given value is a jQuery object
         *
         * @param {*} value
         * @param {string} argumentName
         */

    }, {
        key: 'assertjQuery',
        value: function assertjQuery(value) {
            var argumentName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            var actual_type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

            if (actual_type !== 'object' || typeof value.jquery === 'undefined') {
                if (argumentName) {
                    throw new TypeError('Expected argument ' + argumentName + ' to be a jQuery object, "' + actual_type + '" given');
                }
                throw new TypeError('Expected value to be a jQuery object, "' + actual_type + '" given');
            }
        }

        /**
         * Asserts that the given value is of type string
         *
         * @param {*} value
         * @param {string} argumentName
         */

    }, {
        key: 'assertString',
        value: function assertString(value) {
            var argumentName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            Assert.assertType(value, 'string', argumentName);
        }

        /**
         * Asserts that the given value is of type number
         *
         * @param {*} value
         * @param {string} argumentName
         */

    }, {
        key: 'assertNumber',
        value: function assertNumber(value) {
            var argumentName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            Assert.assertType(value, 'number', argumentName);
        }

        /**
         * Asserts that the given value is a Date
         *
         * @param {Date} value
         * @param {string} argumentName
         */

    }, {
        key: 'assertDate',
        value: function assertDate(value) {
            var argumentName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            if (!(value instanceof Date)) {
                if (argumentName) {
                    throw new TypeError('Expected argument ' + argumentName + ' to be an instance of "Date", "' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + '" given');
                }
                throw new TypeError('Expected value to be an instance of "Date", "' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + '" given');
            }
        }

        /**
         * Asserts that the given value is an instance of the given class
         *
         * @param {*} value
         * @param {class} expected
         * @param {string} argumentName
         */

    }, {
        key: 'assertInstanceOf',
        value: function assertInstanceOf(value, expected) {
            var argumentName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

            if (!(value instanceof expected)) {
                if (argumentName) {
                    throw new TypeError('Expected argument ' + argumentName + ' to be an instance of "' + expected + '", "' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + '" given');
                }
                throw new TypeError('Expected value to be an instance of "' + expected + '", "' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + '" given');
            }
        }
    }]);

    return Assert;
}();

exports.default = Assert;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by cod on 10.4.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _PreviewOverlay = __webpack_require__(35);

var _PreviewOverlay2 = _interopRequireDefault(_PreviewOverlay);

var _jQueryLoader = __webpack_require__(3);

var _jQueryLoader2 = _interopRequireDefault(_jQueryLoader);

var _Logger = __webpack_require__(2);

var _Logger2 = _interopRequireDefault(_Logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UiHelper = function () {
    _createClass(UiHelper, null, [{
        key: "instance",

        /**
         * @return {UiHelper}
         */
        value: function instance() {
            if (!UiHelper._instance) {
                UiHelper._instance = new UiHelper();
            }
            return UiHelper._instance;
        }
    }]);

    function UiHelper() {
        _classCallCheck(this, UiHelper);

        if (UiHelper._instance) {
            _Logger2.default.error('An instance of UiHelper already exists');
        }
        this._preview_overlay = null;
    }

    /**
     * Hides the given element by adding the class zp-hidden
     *
     * @param {string|jQuery|HTMLElement|string[]|jQuery[]|HTMLElement[]|} element
     * @return {UiHelper}
     */


    _createClass(UiHelper, [{
        key: "hide",
        value: function hide(element) {
            var _this = this;

            if (Array.isArray(element)) {
                element.forEach(function (i) {
                    return _this.hide(i);
                });
            }
            if (typeof element === 'string' || typeof element.nodeName === 'string') {
                return this.hide((0, _jQueryLoader2.default)(element));
            }
            if (typeof element.jquery === 'undefined') {
                throw new TypeError('Expected argument element to be a string, HTMLElement or jQuery object');
            }

            element.addClass('zp-hidden');

            return this;
        }

        /**
         * Shows the given element by removing the class zp-hidden
         *
         * @param {string|jQuery|HTMLElement|string[]|jQuery[]|HTMLElement[]|} element
         * @return {UiHelper}
         */

    }, {
        key: "show",
        value: function show(element) {
            var _this2 = this;

            if (Array.isArray(element)) {
                element.forEach(function (i) {
                    return _this2.show(i);
                });
            }
            if (typeof element === 'string' || typeof element.nodeName === 'string') {
                return this.show((0, _jQueryLoader2.default)(element));
            }
            if (typeof element.jquery === 'undefined') {
                throw new TypeError('Expected argument element to be a string, HTMLElement or jQuery object');
            }

            element.removeClass('zp-hidden');

            return this;
        }

        /**
         * Returns if the element has the zp-hidden class
         *
         * @param {string|jQuery|HTMLElement} element
         * @return {boolean}
         */

    }, {
        key: "has_hide_class",
        value: function has_hide_class(element) {
            if (typeof element === 'string' || typeof element.nodeName === 'string') {
                return this.has_hide_class((0, _jQueryLoader2.default)(element));
            }
            if (typeof element.jquery === 'undefined') {
                throw new TypeError('Expected argument element to be a string, HTMLElement or jQuery object');
            }

            return element.hasClass('zp-hidden');
        }

        /**
         * @return {PreviewOverlay}
         */

    }, {
        key: "preview_overlay",
        get: function get() {
            if (!this._preview_overlay) {
                this._preview_overlay = new _PreviewOverlay2.default(this.product_image_gallery, updating_preview_image_text);
            }

            return this._preview_overlay;
        }

        /**
         * Returns the product image gallery
         *
         * The gallery is the parent of the original product image element
         *
         * @return {HTMLElement}
         */

    }, {
        key: "product_image_gallery",
        get: function get() {
            return this.original_product_image.parent()[0];
        }

        /**
         * Returns the original product image element
         *
         * This element will be removed and replaced by the page preview element
         *
         * @return {jQuery|HTMLElement}
         */

    }, {
        key: "original_product_image",
        get: function get() {
            return (0, _jQueryLoader2.default)('#image, #image-main');
        }

        /**
         * @return {jQuery|HTMLElement}
         */

    }, {
        key: "product_image_box",
        get: function get() {
            return (0, _jQueryLoader2.default)('#zetaprints-preview-image-container');
        }

        /**
         * @return {jQuery|HTMLElement}
         */

    }, {
        key: "next_page_button",
        get: function get() {
            return (0, _jQueryLoader2.default)('#zp-next-page-button');
        }

        /**
         * @return {jQuery|HTMLElement}
         */

    }, {
        key: "enlarge_button",
        get: function get() {
            return (0, _jQueryLoader2.default)('#zp-enlarge-button');
        }

        /**
         * @return {jQuery|HTMLElement}
         */

    }, {
        key: "editor_button",
        get: function get() {
            return (0, _jQueryLoader2.default)('#zp-editor-button');
        }

        /**
         * @return {jQuery|HTMLElement}
         */

    }, {
        key: "update_preview_button",
        get: function get() {
            return (0, _jQueryLoader2.default)('#zp-update-preview-form-button');
        }

        /**
         * @return {jQuery|HTMLElement}
         */

    }, {
        key: "form_button",
        get: function get() {
            return (0, _jQueryLoader2.default)('#zp-form-button');
        }

        /**
         * @return {jQuery|HTMLElement}
         */

    }, {
        key: "product_form",
        get: function get() {
            return (0, _jQueryLoader2.default)('#product_addtocart_form');
        }
    }]);

    return UiHelper;
}();

/**
 * @type {UiHelper}
 * @private
 */


exports.default = UiHelper;
UiHelper._instance = null;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by cod on 20.4.17.
 */
var DataObject = function () {
    function DataObject() {
        _classCallCheck(this, DataObject);
    }

    _createClass(DataObject, [{
        key: "_assign_properties",

        /**
         * @param {object} data
         * @protected
         */
        value: function _assign_properties(data) {
            for (var name in data) {
                if (data.hasOwnProperty(name)) {
                    this[name] = data[name];
                }
            }
        }
    }]);

    return DataObject;
}();

exports.default = DataObject;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DataObject2 = __webpack_require__(9);

var _DataObject3 = _interopRequireDefault(_DataObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by cod on 20.4.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var LightboxConfiguration = function (_DataObject) {
  _inherits(LightboxConfiguration, _DataObject);

  function LightboxConfiguration(data) {
    _classCallCheck(this, LightboxConfiguration);

    var _this = _possibleConstructorReturn(this, (LightboxConfiguration.__proto__ || Object.getPrototypeOf(LightboxConfiguration)).call(this));

    var ef = function ef() {};

    _this.padding = 0;
    /**
     * @type {string}
     */
    _this.type = null;
    /**
     * @type {string}
     */
    _this.href = null;
    _this.autoCenter = false;
    _this.arrows = false;
    _this.closeClick = false;
    _this.showOverlay = true;
    _this.closeOnOverlayClick = false;
    _this.showTitle = false;

    _this.willShow = ef;
    _this.didShow = ef;
    _this.willClose = ef;
    _this.didClose = ef;

    _this._assign_properties(data);
    return _this;
  }

  return LightboxConfiguration;
}(_DataObject3.default);

exports.default = LightboxConfiguration;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by cod on 20.4.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _jQueryLoader = __webpack_require__(3);

var _jQueryLoader2 = _interopRequireDefault(_jQueryLoader);

var _LightboxConfiguration = __webpack_require__(10);

var _LightboxConfiguration2 = _interopRequireDefault(_LightboxConfiguration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_jQueryLoader2.default.fancybox.defaults.ajax.headers = {};

var AbstractLightbox = function () {
    function AbstractLightbox() {
        _classCallCheck(this, AbstractLightbox);
    }

    _createClass(AbstractLightbox, [{
        key: '_get_default_options',

        /**
         * @return {LightboxConfiguration}
         * @protected
         */
        value: function _get_default_options() {
            return new _LightboxConfiguration2.default();
        }

        /**
         * @param {LightboxConfiguration|object} options
         * @return {*}
         * @protected
         */

    }, {
        key: '_prepare_options',
        value: function _prepare_options(options) {
            if (!(options instanceof _LightboxConfiguration2.default)) {
                options = new _LightboxConfiguration2.default(options);
            }

            var merged_options = _jQueryLoader2.default.extend(true, {}, this._get_default_options(), options);
            var fancybox = _jQueryLoader2.default['fancybox'];
            var fancybox_version = typeof fancybox.version === 'string' ? parseInt(fancybox.version, 10) : 1;

            if (fancybox_version === 2) {
                return this._prepare_options_for_v2(merged_options);
            } else if (fancybox_version === 1) {
                return this._prepare_options_for_v1(merged_options);
            }

            throw new Error('No matching fancyBox version found');
        }

        /**
         * @param {LightboxConfiguration} options
         * @private
         */

    }, {
        key: '_prepare_options_for_v1',
        value: function _prepare_options_for_v1(options) {
            var prepared_options = _jQueryLoader2.default.extend(true, {}, options);

            prepared_options['centerOnScroll'] = options.autoCenter;
            prepared_options['showNavArrows'] = options.arrows;
            prepared_options['hideOnContentClick'] = options.closeClick;
            prepared_options['overlayShow'] = options.showOverlay;
            prepared_options['hideOnOverlayClick'] = options.closeOnOverlayClick;
            prepared_options['titleShow'] = options.showTitle;
            prepared_options['onStart'] = options.willShow;
            prepared_options['onComplete'] = options.didShow;
            prepared_options['onCleanup'] = options.willClose;
            prepared_options['onClosed'] = options.didClose;

            return prepared_options;
        }

        /**
         * @param {LightboxConfiguration} options
         * @private
         */

    }, {
        key: '_prepare_options_for_v2',
        value: function _prepare_options_for_v2(options) {
            var prepared_options = _jQueryLoader2.default.extend(true, {}, options);

            if (!options.showTitle) {
                prepared_options['helpers'] = _jQueryLoader2.default.extend(true, {}, prepared_options['helpers'], { title: null });
            }
            if (!options.closeOnOverlayClick) {
                prepared_options['helpers'] = _jQueryLoader2.default.extend(true, {}, prepared_options['helpers'], { overlay: { closeClick: true } });
            }
            if (!options.showOverlay) {
                prepared_options['helpers'] = _jQueryLoader2.default.extend(true, {}, prepared_options['helpers'], { overlay: null });
            }

            prepared_options['beforeLoad'] = options.willShow;
            prepared_options['afterShow'] = options.didShow;
            prepared_options['beforeClose'] = options.willClose;
            prepared_options['afterClose'] = options.didClose;

            return prepared_options;
        }
    }]);

    return AbstractLightbox;
}();

exports.default = AbstractLightbox;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Logger = __webpack_require__(2);

var _Logger2 = _interopRequireDefault(_Logger);

var _jQueryLoader = __webpack_require__(3);

var _jQueryLoader2 = _interopRequireDefault(_jQueryLoader);

var _ImageDimensions = __webpack_require__(43);

var _ImageDimensions2 = _interopRequireDefault(_ImageDimensions);

var _SaveImageButton = __webpack_require__(6);

var _SaveImageButton2 = _interopRequireDefault(_SaveImageButton);

var _Feature = __webpack_require__(5);

var _Feature2 = _interopRequireDefault(_Feature);

var _MetaData = __webpack_require__(45);

var _MetaData2 = _interopRequireDefault(_MetaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fancybox_show_activity = function fancybox_show_activity() {
    var fancybox = _jQueryLoader2.default.fancybox;
    if (typeof fancybox.showLoading === 'function') {
        fancybox.showLoading();
    } else if (typeof fancybox.showActivity === 'function') {
        fancybox.showActivity();
    }
};

var fancybox_hide_activity = function fancybox_hide_activity() {
    var fancybox = _jQueryLoader2.default.fancybox;
    if (typeof fancybox.hideLoading === 'function') {
        fancybox.hideLoading();
    } else if (typeof fancybox.hideActivity === 'function') {
        fancybox.hideActivity();
    }
};

var fancybox_change_zindex = function fancybox_change_zindex() {
    var new_value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1103;

    (0, _jQueryLoader2.default)('#fancybox-overlay').css('z-index', new_value);
};

var get_value_by_regexp = function get_value_by_regexp(subject, exp) {
    var match = subject.match(exp);
    if (match === null) {
        return false;
    }
    if (match.length > 2) {
        return match;
    } else {
        return match[1];
    }
};

var ImageEditor = function () {
    /**
     * @param {PersonalizationForm} personalization_form_instance
     */
    function ImageEditor(personalization_form_instance) {
        _classCallCheck(this, ImageEditor);

        this._cropping_callback = this._cropping_callback.bind(this);
        this.personalization_form_instance = personalization_form_instance;
        this.settings = {};
        /**
         * @type {ImageEditingContext}
         */
        this.context = null;
        /**
         * @type {jQuery|HTMLElement|$}
         */
        this.$user_image = null;
    }

    /**
     * Loads the editor
     *
     * @param {ImageEditingContext} context
     */


    _createClass(ImageEditor, [{
        key: 'load',
        value: function load(context) {
            var _this2 = this;

            this.context = context;

            var container = this.container = (0, _jQueryLoader2.default)('.zetaprints-image-edit');

            this._load_image();
            this._initialize_info_bar(context);

            if (context.has_fit_in_field) {
                this._prepare_fit_into_buttons(context);
            } else {
                container.addClass('no-dpi').children('.zetaprints-image-edit-menu').children('.fit-to-field-button-wrapper, .note').hide();
            }

            var $user_image_container = (0, _jQueryLoader2.default)('#zetaprints-image-edit-container');

            this.$user_image = (0, _jQueryLoader2.default)('#zetaprints-image-edit-user-image');
            this.$user_image.load(function () {
                if (container.hasClass('crop-mode') || !context.has_fit_in_field) {
                    _this2._crop_button_click_handler();
                } else if (container.hasClass('fit-to-field-mode')) {
                    _this2._fit_to_field_button_click_handler();
                } else if (container.hasClass('editor-mode')) {
                    _this2._show_image_editor();
                }

                fancybox_hide_activity();

                fancybox_change_zindex(1100);
            });

            context.container = {
                width: $user_image_container.width() - 2,
                height: $user_image_container.height() - 2
            };

            (0, _jQueryLoader2.default)('#crop-button').click(function () {
                _this2._crop_button_click_handler();
            });
            (0, _jQueryLoader2.default)('#fit-to-field-button').click(function () {
                _this2._fit_to_field_button_click_handler();
            });

            (0, _jQueryLoader2.default)('#undo-button').click(function () {
                _this2._restore_image();
            });

            (0, _jQueryLoader2.default)('#zp-image-edit-action-cancel').click(function () {
                if (container.hasClass('changed')) {
                    if (container.hasClass('crop-mode')) {
                        _this2._crop_button_click_handler();
                    } else {
                        _this2._fit_to_field_button_click_handler(true);
                    }
                }
            });

            (0, _jQueryLoader2.default)('#rotate-right-button').click(function () {
                _this2._server_side_rotation('r');
            });

            (0, _jQueryLoader2.default)('#rotate-left-button').click(function () {
                _this2._server_side_rotation('l');
            });

            (0, _jQueryLoader2.default)('#delete-button').click(function () {
                _this2._delete_image();
            });

            (0, _jQueryLoader2.default)('#image-editor-button').click(function () {
                _this2._image_editor_button_handler();
            });

            context.save = function () {
                _Logger2.default.debug('Invoked save on context');
                _this2.save();
            };
            context.reload_image = function (id) {
                _Logger2.default.debug('Invoked reload_image on context');
                _this2.reload_image(id);
            };
        }

        /**
         * @param {string} id
         */

    }, {
        key: 'reload_image',
        value: function reload_image(id) {
            var _this3 = this;

            var context = this.context;
            _jQueryLoader2.default.ajax({
                url: context.url.image,
                type: 'POST',
                datatype: 'XML',
                data: {
                    'zetaprints-action': 'img',
                    'zetaprints-ImageID': id
                },
                error: function error(XMLHttpRequest, textStatus, errorThrown) {
                    alert(cant_load_image_text + ': ' + textStatus);
                    fancybox_change_zindex(1100);
                },
                success: function success(data, textStatus) {
                    context.image_id = id;

                    _this3._process_image_details(data);
                }
            });
        }

        /**
         * Close the editor
         */

    }, {
        key: 'close',
        value: function close() {
            if (ImageEditor._image_editor) {
                ImageEditor._image_editor.close();
            }
        }

        /**
         * Save the data
         */

    }, {
        key: 'save',
        value: function save() {
            var container = this.container;
            /**
             * @type {*}
             */
            var user_image = this.$user_image;
            if (container.hasClass('crop-mode')) {
                fancybox_show_activity();
                this._server_side_cropping(user_image.power_crop('state'));

                return;
            }

            if (container.hasClass('fit-to-field-mode')) {
                this._save_metadata(user_image.power_crop('state'));

                return;
            }

            if (container.hasClass('editor-mode') && ImageEditor._image_editor) {
                ImageEditor._image_editor.save();
            }
        }

        /**
         * @param {ImageEditingContext} context
         * @private
         */

    }, {
        key: '_initialize_info_bar',
        value: function _initialize_info_bar(context) {
            this.info_bar = this.container.find('div.info-bar');

            this.info_bar_elements = {
                'current': {
                    'width': (0, _jQueryLoader2.default)('#current-width'),
                    'height': (0, _jQueryLoader2.default)('#current-height'),
                    'dpi': (0, _jQueryLoader2.default)('#current-dpi')
                },

                'recommended': {
                    'width': (0, _jQueryLoader2.default)('#recommended-width'),
                    'height': (0, _jQueryLoader2.default)('#recommended-height'),
                    'dpi': (0, _jQueryLoader2.default)('#recommended-dpi')
                }
            };

            this._set_info_bar_value('recommended', 'width', context.placeholder.width);
            this._set_info_bar_value('recommended', 'height', context.placeholder.height);
        }

        /**
         * @param {ImageEditingContext} context
         * @private
         */

    }, {
        key: '_prepare_fit_into_buttons',
        value: function _prepare_fit_into_buttons(context) {
            var _this4 = this;

            // Calculate shape dimensions
            context.shape.width = context.shape.x2 - context.shape.x1;
            context.shape.height = context.shape.y2 - context.shape.y1;

            context.placeholder.width_in = context.page.width_in * context.shape.width;
            context.placeholder.dpi = context.placeholder.width / context.placeholder.width_in;

            //Calculate ratio of the placeholder
            context.placeholder.ratio = context.placeholder.width / context.placeholder.height;

            this._set_info_bar_value('recommended', 'dpi', Math.round(context.placeholder.dpi));

            var register_fit_into_event_listener = function register_fit_into_event_listener(selector, get_crop_data_callback) {
                if (typeof selector !== 'string' && typeof selector.jquery === 'undefined') {
                    throw new TypeError('Argument "selector" must be either a jQuery object or a selector');
                }
                if (typeof get_crop_data_callback !== 'function') {
                    throw new TypeError('Argument "get_crop_data_callback" must be of type function');
                }

                (0, _jQueryLoader2.default)(selector).click(function () {
                    _this4._clear_editor();
                    var data = get_crop_data_callback();
                    if (typeof data === 'undefined') {
                        throw new TypeError('The get_crop_data_callback must return a value');
                    }

                    _this4.container.addClass('changed');
                    _this4._show_crop(data);
                });
            };

            register_fit_into_event_listener('#zp-image-edit-action-fit-image', function () {
                var context = _this4.context;
                var image = _this4._fit_image_into_placeholder(context.image, context.placeholder);
                image.ratio = context.image.ratio;

                return _this4._fit_into_container(image, context.placeholder, context.container);
            });

            register_fit_into_event_listener('#zp-image-edit-action-fill-field', function () {
                var context = _this4.context;
                var placeholder = _this4._fill_placeholder_with_image(context.image, context.placeholder);
                placeholder.ratio = context.placeholder.ratio;

                return _this4._fit_into_container(context.image, placeholder, context.container);
            });

            register_fit_into_event_listener('#zp-image-edit-action-fit-width', function () {
                var context = _this4.context;
                var image = _this4._fit_image_into_placeholder_by_width(context.image, context.placeholder);
                image.ratio = context.image.ratio;

                return _this4._fit_into_container(image, context.placeholder, context.container);
            });

            register_fit_into_event_listener('#zp-image-edit-action-fit-height', function () {
                var context = _this4.context;
                var image = _this4._fit_image_into_placeholder_by_height(context.image, context.placeholder);
                image.ratio = context.image.ratio;

                return _this4._fit_into_container(image, context.placeholder, context.container);
            });
        }

        /**
         * @param type
         * @param key
         * @param value
         * @private
         */

    }, {
        key: '_set_info_bar_value',
        value: function _set_info_bar_value(type, key, value) {
            this.info_bar_elements[type][key].html(value);
        }

        /**
         * @param data
         * @private
         */

    }, {
        key: '_cropping_callback',
        value: function _cropping_callback(data) {
            var context = this.context;
            var width_factor = data.selection.width / data.image.width;
            var height_factor = data.selection.height / data.image.height;

            this._set_info_bar_value('current', 'width', Math.round(context.image.width * width_factor));
            this._set_info_bar_value('current', 'height', Math.round(context.image.height * height_factor));

            if (width_factor !== 1 || height_factor !== 1) {
                this._set_info_bar_state('cropped', true);

                this.container.addClass('changed');

                _Feature2.default.instance().call(_Feature2.default.feature.fancybox.saveImageButton, _SaveImageButton2.default.fancybox_update_save_image_button, true);
            } else {
                this._set_info_bar_state();

                this.container.removeClass('changed');

                _Feature2.default.instance().call(_Feature2.default.feature.fancybox.saveImageButton, _SaveImageButton2.default.fancybox_update_save_image_button);
            }
        }

        /**
         * @param data
         * @private
         */

    }, {
        key: '_fit_in_field_callback',
        value: function _fit_in_field_callback(data) {
            _Feature2.default.instance().call(_Feature2.default.feature.fancybox.saveImageButton, _SaveImageButton2.default.fancybox_update_save_image_button, true);

            this.container.addClass('changed');

            this._update_info_bar_values(data);
        }

        /**
         * @param data
         * @private
         */

    }, {
        key: '_update_info_bar_values',
        value: function _update_info_bar_values(data) {
            var context = this.context;
            var factor = data.selection.width / data.image.width;

            var dpi = factor * context.image.dpi / context.placeholder_to_image_factor;

            if (dpi < context.placeholder.dpi) {
                this._set_info_bar_warning('low-cropped-resolution-warning');
            } else {
                this._set_info_bar_warning();
            }

            this._set_info_bar_value('current', 'dpi', Math.round(dpi));

            var limited_image_width = this._limit_a_to_b(data.selection.position.left, data.selection.width, data.image.position.left, data.image.width);

            var limited_image_height = this._limit_a_to_b(data.image.position.top, data.image.height, data.selection.position.top, data.selection.height);

            var width = 0;
            var height = 0;
            if ((limited_image_height !== data.image.height || limited_image_width !== data.image.width) && limited_image_width !== 0 && limited_image_height !== 0) {

                var width_factor = limited_image_width / data.image.width;

                width = context.image.width * width_factor;
                height = width / context.placeholder.ratio;

                this._set_info_bar_state('cropped', true);
            } else {
                width = context.image.width;
                height = context.image.height;

                this._set_info_bar_state();
            }

            this._set_info_bar_value('current', 'width', Math.round(width));
            this._set_info_bar_value('current', 'height', Math.round(height));
        }

        /**
         * @param data
         * @private
         */

    }, {
        key: '_update_editor_state',
        value: function _update_editor_state(data) {
            // Delegate.delegate('fancybox_update_save_image_button', $, true);
            _Feature2.default.instance().call(_Feature2.default.feature.fancybox.saveImageButton, _SaveImageButton2.default.fancybox_update_save_image_button, true);

            this._update_info_bar_values(data);
        }

        /**
         * @param data
         * @private
         */

    }, {
        key: '_save_metadata',
        value: function _save_metadata(data) {
            var context = this.context;
            var image = data.image.position;
            image.width = data.image.width;
            image.height = data.image.height;
            image.right = image.left + image.width;
            image.bottom = image.top + image.height;

            var selection = data.selection.position;
            selection.width = data.selection.width;
            selection.height = data.selection.height;
            selection.right = selection.left + selection.width;
            selection.bottom = selection.top + selection.height;

            var abs_x1 = 0;
            var abs_y1 = 0;
            var abs_x2 = 0;
            var abs_y2 = 0;

            if (selection.left < image.left) {
                var shift_x1 = (image.left - selection.left) / selection.width;
                abs_x1 = context.shape.x1 + context.shape.width * shift_x1;

                selection.left = image.left;
            } else {
                abs_x1 = context.shape.x1;
            }

            if (selection.top < image.top) {
                var shift_y1 = (image.top - selection.top) / selection.height;
                abs_y1 = context.shape.y1 + context.shape.height * shift_y1;

                selection.top = image.top;
            } else {
                abs_y1 = context.shape.y1;
            }

            if (selection.right > image.right) {
                var shift_x2 = (image.right - selection.right) / selection.width;
                abs_x2 = context.shape.x2 + context.shape.width * shift_x2;
                selection.right = image.right;
            } else {
                abs_x2 = context.shape.x2;
            }

            if (selection.bottom > image.bottom) {
                var shift_y2 = (image.bottom - selection.bottom) / selection.height;
                abs_y2 = context.shape.y2 + context.shape.height * shift_y2;

                selection.bottom = image.bottom;
            } else {
                abs_y2 = context.shape.y2;
            }

            /**
             * @type MetaData
             */
            var metadata = new _MetaData2.default({
                'cr-x1': (selection.left - image.left) / image.width,
                'cr-x2': (selection.right - image.left) / image.width,
                'cr-y1': (selection.top - image.top) / image.height,
                'cr-y2': (selection.bottom - image.top) / image.height,
                'abs-x1': abs_x1,
                'abs-y1': abs_y1,
                'abs-x2': abs_x2,
                'abs-y2': abs_y2
            });

            context.$input.data('metadata', metadata);

            this.personalization_form_instance.save_image_handler(metadata);

            this._hide_cropped_area_on_thumb();
            this._show_cropped_area_on_thumb(metadata);
        }

        /**
         * @private
         */

    }, {
        key: '_clear_metadata',
        value: function _clear_metadata() {
            var context = this.context;
            context.$input.removeData('metadata');
            this.personalization_form_instance.save_image_handler(undefined);

            this._hide_cropped_area_on_thumb();

            this._set_info_bar_value('current', 'width', context.image.width);
            this._set_info_bar_value('current', 'height', context.image.height);
            this._set_info_bar_value('current', 'dpi', context.image.dpi);
        }

        /**
         * @param data
         * @private
         */

    }, {
        key: '_server_side_cropping',
        value: function _server_side_cropping(data) {
            var _this5 = this;

            var context = this.context;
            fancybox_change_zindex();

            _jQueryLoader2.default.ajax({
                url: this.context.url.image,
                type: 'POST',
                data: {
                    'zetaprints-CropX1': data.selection.position.left / context.container.factor,
                    'zetaprints-CropY1': data.selection.position.top / context.container.factor,
                    'zetaprints-CropX2': (data.selection.position.left + data.selection.width) / context.container.factor,
                    'zetaprints-CropY2': (data.selection.position.top + data.selection.height) / context.container.factor,
                    'zetaprints-action': 'img-crop',
                    'zetaprints-ImageID': context.image_id
                },
                error: function error(XMLHttpRequest, textStatus, errorThrown) {
                    alert(cant_crop_image_text + ': ' + textStatus);
                    fancybox_change_zindex(1100);
                },
                success: function success(data, textStatus) {
                    _this5._clear_metadata();
                    _this5._clear_editor();
                    _this5._process_image_details(data);
                }
            });
        }

        /**
         * @private
         */

    }, {
        key: '_load_image',
        value: function _load_image() {
            var context = this.context;
            fancybox_change_zindex();
            fancybox_show_activity();

            this.reload_image(context.image_id);
        }

        /**
         * @param direction
         * @private
         */

    }, {
        key: '_server_side_rotation',
        value: function _server_side_rotation(direction) {
            var context = this.context;
            var _this = this;
            fancybox_change_zindex();

            this._clear_editor();
            this._clear_metadata();
            fancybox_show_activity();

            _jQueryLoader2.default.ajax({
                url: context.url.image,
                type: 'POST',
                data: {
                    'zetaprints-action': 'img-rotate',
                    'zetaprints-Rotation': direction,
                    'zetaprints-ImageID': context.image_id
                },
                error: function error(XMLHttpRequest, textStatus, errorThrown) {
                    alert(cant_rotate_image_text + ': ' + textStatus);
                    fancybox_change_zindex(1100);
                },
                success: function success(data, textStatus) {
                    _this._process_image_details(data);
                }
            });
        }

        /**
         * @param xml
         * @return {boolean}
         * @private
         */

    }, {
        key: '_process_image_details',
        value: function _process_image_details(xml) {
            var context = this.context;
            var source = context.url.user_image_template.replace('image-guid.image-ext', get_value_by_regexp(xml, /Thumb="([^"]*?)"/));

            var preview_width = get_value_by_regexp(xml, /ThumbWidth="([^"]*?)"/);
            var preview_height = get_value_by_regexp(xml, /ThumbHeight="([^"]*?)"/);
            var width = get_value_by_regexp(xml, /ImageWidth="([^"]*?)"/);
            var height = get_value_by_regexp(xml, /ImageHeight="([^"]*?)"/);
            var undo_width = get_value_by_regexp(xml, /ImageWidthUndo="([^"]*?)"/);
            var undo_height = get_value_by_regexp(xml, /ImageHeightUndo="([^"]*?)"/);

            if (!(undo_width && undo_height)) {
                (0, _jQueryLoader2.default)('#undo-button').parent().addClass('hidden');
            } else {
                (0, _jQueryLoader2.default)('#undo-button').parent().removeClass('hidden').end().attr('title', undo_all_changes_text + '. ' + original_size_text + ': ' + undo_width + ' x ' + undo_height + ' ' + px_text);
            }

            if (!(preview_width && preview_height && width && height)) {
                alert(unknown_error_occured_text);

                return false;
            }

            context.image = {
                width: width * 1,
                height: height * 1,
                ratio: width * 1 / (height * 1),
                width_in: width * 1 / context.placeholder.width * context.placeholder.width_in,
                thumb_width: preview_width,
                thumb_height: preview_height
            };

            context.image.dpi = Math.round(context.image.width / context.image.width_in);

            context.placeholder_to_image_factor = context.placeholder.width / context.image.width;

            this._set_info_bar_value('current', 'width', context.image.width);
            this._set_info_bar_value('current', 'height', context.image.height);
            this._set_info_bar_value('current', 'dpi', context.image.dpi);

            this.$user_image.addClass('zetaprints-hidden').attr('src', source);

            var tmp1 = (0, _jQueryLoader2.default)('input[value="' + context.image_id + '"]').parent().find('img');
            if (tmp1.length === 0) {
                tmp1 = (0, _jQueryLoader2.default)('#img' + context.image_id);
            }
            if (tmp1.length === 0) {
                tmp1 = (0, _jQueryLoader2.default)('input[value="' + context.image_id + '"]').parent().find('img');
            }
            if (source.match(/\.jpg/m)) {
                tmp1.attr('src', source.replace(/\.(jpg|gif|png|jpeg|bmp)/i, "_0x100.jpg"));
            } else {
                tmp1.attr('src', source);
            }
        }

        /**
         * @private
         */

    }, {
        key: '_delete_image',
        value: function _delete_image() {
            var _this = this;
            var context = this.context;
            if (confirm(delete_this_image_text)) {
                _jQueryLoader2.default.ajax({
                    url: context.url.image,
                    type: 'POST',
                    data: {
                        'zetaprints-action': 'img-delete',
                        'zetaprints-ImageID': context.image_id
                    },
                    error: function error(XMLHttpRequest, textStatus, errorThrown) {
                        alert(cant_delete_text + ': ' + textStatus);
                    },
                    success: function success(data, textStatus) {
                        _this._clear_editor();
                        _this._clear_metadata();

                        (0, _jQueryLoader2.default)('input[value="' + context.image_id + '"]').parent().remove();
                        (0, _jQueryLoader2.default)('#' + context.image_id).remove();

                        _jQueryLoader2.default.fancybox.close();
                    }
                });
            }
        }

        /**
         * @param warning
         * @private
         */

    }, {
        key: '_set_info_bar_warning',
        value: function _set_info_bar_warning(warning) {
            if (warning) {
                this.info_bar.addClass('warning ' + warning);
            } else {
                this.info_bar.removeClass('warning low-resolution-warning ' + 'low-cropped-resolution-warning ' + 'low-full-resolution-warning small-image-warning');
            }
        }

        /**
         * @param state
         * @param on
         * @private
         */

    }, {
        key: '_set_info_bar_state',
        value: function _set_info_bar_state(state, on) {
            if (!state) {
                this.info_bar.removeClass('cropped-state');
            }

            if (on) {
                this.info_bar.addClass(state + '-state');
            } else {
                this.info_bar.removeClass(state + '-state');
            }
        }

        /**
         * @param width_a
         * @param height_a
         * @param width_b
         * @param height_b
         * @return {number}
         * @private
         */

    }, {
        key: '_get_factor_a_to_b',
        value: function _get_factor_a_to_b(width_a, height_a, width_b, height_b) {
            var width_factor = width_a / width_b;
            var height_factor = height_a / height_b;

            return width_factor < height_factor ? width_factor : height_factor;
        }

        /**
         * @param image
         * @param placeholder
         * @return {{width: number, height: number}}
         * @private
         */

    }, {
        key: '_fit_image_into_placeholder',
        value: function _fit_image_into_placeholder(image, placeholder) {
            var factor = this._get_factor_a_to_b(placeholder.width, placeholder.height, image.width, image.height);

            return {
                width: image.width * factor,
                height: image.height * factor
            };
        }

        /**
         * @param image
         * @param placeholder
         * @return {{width: number, height: number}}
         * @private
         */

    }, {
        key: '_fill_placeholder_with_image',
        value: function _fill_placeholder_with_image(image, placeholder) {
            var factor = this._get_factor_a_to_b(image.width, image.height, placeholder.width, placeholder.height);

            return {
                width: placeholder.width * factor,
                height: placeholder.height * factor
            };
        }

        /**
         * @param image
         * @param placeholder
         * @return {{width, height: number}}
         * @private
         */

    }, {
        key: '_fit_image_into_placeholder_by_width',
        value: function _fit_image_into_placeholder_by_width(image, placeholder) {
            var factor = placeholder.width / image.width;

            return {
                width: placeholder.width,
                height: image.height * factor
            };
        }

        /**
         * @param image
         * @param placeholder
         * @return {{width: number, height}}
         * @private
         */

    }, {
        key: '_fit_image_into_placeholder_by_height',
        value: function _fit_image_into_placeholder_by_height(image, placeholder) {
            var factor = placeholder.height / image.height;

            return {
                width: image.width * factor, height: placeholder.height
            };
        }

        /**
         * @param image
         * @param container
         * @return {ImageDimensions}
         * @private
         */

    }, {
        key: '_fit_into_container_for_crop',
        value: function _fit_into_container_for_crop(image, container) {
            container.factor = this._get_factor_a_to_b(container.width, container.height, image.thumb_width, image.thumb_height);

            var factor = this._get_factor_a_to_b(container.width, container.height, image.width, image.height);

            var width = image.width * factor;
            var height = width / image.ratio;

            //Centring selection frame and image to centre of the container
            var left = container.width / 2 - width / 2;
            var top = container.height / 2 - height / 2;

            return new _ImageDimensions2.default({
                selection: {
                    position: {
                        top: 0,
                        left: 0
                    },
                    width: width,
                    height: height
                },

                image: {
                    position: {
                        top: 0,
                        left: 0
                    },
                    width: width,
                    height: height
                },

                container: {
                    top: top,
                    left: left,
                    width: width,
                    height: height
                }
            });
        }

        /**
         * @private
         */

    }, {
        key: '_clear_editor',
        value: function _clear_editor() {
            if (this.container.hasClass('crop-mode') || this.container.hasClass('fit-to-field-mode')) {
                this.$user_image.power_crop('destroy');
            }

            if (this.container.hasClass('editor-mode') && ImageEditor._image_editor) {
                ImageEditor._image_editor.close();
            }

            this.container.removeClass('changed');

            this._set_info_bar_warning();
            this._set_info_bar_state();

            _Feature2.default.instance().call(_Feature2.default.feature.fancybox.saveImageButton, _SaveImageButton2.default.fancybox_update_save_image_button);
            // Delegate.delegate('fancybox_update_save_image_button', $);
        }

        /**
         * @private
         */

    }, {
        key: '_crop_button_click_handler',
        value: function _crop_button_click_handler() {
            var context = this.context;
            this._clear_editor();

            this.container.removeClass('fit-to-field-mode editor-mode').addClass('crop-mode');

            //if (window.fancybox_update_save_image_button)
            //    fancybox_update_save_image_button($);

            var data = this._fit_into_container_for_crop(context.image, context.container);

            this._show_crop(data, true);
        }

        /**
         * @param ignore_metadata
         * @private
         */

    }, {
        key: '_fit_to_field_button_click_handler',
        value: function _fit_to_field_button_click_handler(ignore_metadata) {
            var context = this.context;
            this._clear_editor();

            this.container.removeClass('crop-mode editor-mode').addClass('fit-to-field-mode');

            var metadata = context.$input.data('metadata');

            var data = null;
            if (!metadata || ignore_metadata) {
                data = this._fit_into_container(context.image, context.placeholder, context.container);
            } else {
                data = this._fit_into_container_using_metadata(context.image, context.placeholder, context.shape, context.container, metadata);

                this.container.addClass('changed');
            }

            this._show_crop(data);

            _Feature2.default.instance().call(_Feature2.default.feature.fancybox.saveImageButton, _SaveImageButton2.default.fancybox_update_save_image_button, !metadata || ignore_metadata);
            // Delegate.delegate('fancybox_update_save_image_button', $, !metadata || ignore_metadata);
        }

        /**
         * @private
         */

    }, {
        key: '_image_editor_button_handler',
        value: function _image_editor_button_handler() {
            if (this.container.hasClass('editor-mode')) {
                return;
            }

            this._clear_editor();
            this._clear_metadata();

            this.container.removeClass('crop-mode fit-to-field-mode').addClass('editor-mode');

            this._show_image_editor();
        }

        /**
         * @private
         */

    }, {
        key: '_show_image_editor',
        value: function _show_image_editor() {
            _Logger2.default.warn('_show_image_editor', arguments);
            var context = this.context;
            var image_editor = this;
            var $edit_container = (0, _jQueryLoader2.default)('#zetaprints-image-edit-container');
            var fancybox_center_function = _jQueryLoader2.default.fancybox.center;

            _jQueryLoader2.default.fancybox.center = function () {
                fancybox_center_function();
                var offset = $edit_container.offset();

                ImageEditor._image_editor_wrapper.css({
                    top: offset.top,
                    left: offset.left
                });
            };

            if (!ImageEditor._image_editor) {
                fancybox_change_zindex();
                fancybox_show_activity();

                ImageEditor._image_editor_wrapper = (0, _jQueryLoader2.default)('<div id="zp-image-edit-editor-wrapper" />').appendTo('body');

                ImageEditor._image_editor_wrapper.css({
                    top: $edit_container.offset().top,
                    left: $edit_container.offset().left,
                    width: $edit_container.outerWidth(),
                    height: $edit_container.outerHeight()
                });

                ImageEditor._image_editor = new Aviary.Feather({
                    image: 'zetaprints-image-edit-user-image',
                    apiVersion: 2,
                    appendTo: 'zp-image-edit-editor-wrapper',
                    language: (0, _jQueryLoader2.default)('html').attr('lang'),
                    url: this.$user_image.attr('src'),
                    minimumStyling: true,
                    noCloseButton: true,
                    jpgQuality: 100,
                    maxSize: 600,
                    onSave: function onSave(image_id, url) {
                        context.upload_image_by_url(url);

                        return false;
                    },
                    onLoad: function onLoad() {
                        ImageEditor._image_editor.launch();

                        fancybox_hide_activity();
                        fancybox_change_zindex(1100);
                    },
                    onReady: function onReady() {
                        image_editor.container.addClass('changed');

                        _Feature2.default.instance().call(_Feature2.default.feature.fancybox.saveImageButton, _SaveImageButton2.default.fancybox_update_save_image_button, true);
                    },
                    onClose: function onClose() {
                        ImageEditor._image_editor_wrapper.css('display', 'none');
                    }
                });
            } else {
                var offset = $edit_container.offset();

                ImageEditor._image_editor_wrapper.css({
                    display: 'block',
                    top: offset.top,
                    left: offset.left
                });

                ImageEditor._image_editor.launch({
                    image: 'zetaprints-image-edit-user-image',
                    url: this.$user_image.attr('src')
                });
            }
        }

        /**
         * @param data
         * @private
         */

    }, {
        key: '_show_cropped_area_on_thumb',
        value: function _show_cropped_area_on_thumb(data) {
            var context = this.context;
            var left = data['cr-x1'] * 100;
            var top = data['cr-y1'] * 100;
            var width = (data['cr-x2'] - data['cr-x1']) * 100;
            var height = (data['cr-y2'] - data['cr-y1']) * 100;

            var $img = context.$selected_thumbnail.clone();

            var position = $img.wrap('<div class="top-image-wrapper" />').parent().css({
                left: left + '%',
                top: top + '%',
                width: width + '%',
                height: height + '%'
            }).wrap('<div class="thumb-shadow" />').parent().insertAfter(context.$selected_thumbnail).end().end().position();

            $img.css({
                left: -position.left,
                top: -position.top
            });
        }

        /**
         * @private
         */

    }, {
        key: '_hide_cropped_area_on_thumb',
        value: function _hide_cropped_area_on_thumb() {
            var context = this.context;
            context.$selected_thumbnail.parent().children('.thumb-shadow').remove();
        }

        /**
         * Perform image restore
         */

    }, {
        key: '_restore_image',
        value: function _restore_image() {
            var _this6 = this;

            var context = this.context;
            fancybox_change_zindex();
            fancybox_show_activity();

            this._clear_editor();
            this._clear_metadata();

            _jQueryLoader2.default.ajax({
                url: context.url.image,
                type: 'POST',
                data: {
                    'zetaprints-action': 'img-restore',
                    'zetaprints-ImageID': context.image_id
                },
                error: function error(XMLHttpRequest, textStatus, errorThrown) {
                    alert(cant_restore_image_text + ': ' + textStatus);
                    fancybox_change_zindex(1100);
                },
                success: function success(data, textStatus) {
                    _this6._process_image_details(data);
                }
            });
        }

        /**
         * @param {number} start_a
         * @param {number} length_a
         * @param {number} start_b
         * @param {number} length_b
         * @return {number}
         */

    }, {
        key: '_limit_a_to_b',
        value: function _limit_a_to_b(start_a, length_a, start_b, length_b) {
            if (parseInt(length_a, 10) === 0) {
                return 0;
            }

            var end_a = start_a + length_a;
            var end_b = start_b + length_b;

            if (start_a >= end_b || end_a <= start_b) {
                return 0;
            }

            if (start_a < start_b) {
                start_a = start_b;
            }

            if (end_a > end_b) {
                end_a = end_b;
            }

            return end_a - start_a;
        }

        /**
         * @param image
         * @param placeholder
         * @param container
         * @return {ImageDimensions}
         */

    }, {
        key: '_fit_into_container',
        value: function _fit_into_container(image, placeholder, container) {
            /**
             * @type {ImageDimensions}
             */
            var data = new _ImageDimensions2.default({
                selection: {
                    position: {
                        top: 0,
                        left: 0
                    }
                },

                image: {
                    position: {
                        top: 0,
                        left: 0
                    }
                }
            });

            //Use container's factor to convert original dimension to
            //container's one (multiply by the factor) or vice versa (divide by the factor)
            if (placeholder.width >= image.width && placeholder.height >= image.height) {
                container.factor = this._get_factor_a_to_b(container.width, container.height, placeholder.width, placeholder.height);
            } else {
                container.factor = this._get_factor_a_to_b(container.width, container.height, image.width, image.height);
            }

            data.selection.width = Math.round(placeholder.width * container.factor);
            data.selection.height = data.selection.width / placeholder.ratio;

            data.image.width = Math.round(image.width * container.factor);
            data.image.height = data.image.width / image.ratio;

            //Centring selection frame and image to centre of the container
            var width_centre = container.width / 2;
            var height_centre = container.height / 2;

            data.selection.position.left = width_centre - data.selection.width / 2;
            data.selection.position.top = height_centre - data.selection.height / 2;

            data.image.position.left = width_centre - data.image.width / 2;
            data.image.position.top = height_centre - data.image.height / 2;

            return data;
        }

        /**
         * @param image
         * @param placeholder
         * @param shape
         * @param container
         * @param metadata
         * @return {ImageDimensions}
         */

    }, {
        key: '_fit_into_container_using_metadata',
        value: function _fit_into_container_using_metadata(image, placeholder, shape, container, metadata) {
            var data = new _ImageDimensions2.default({
                selection: {
                    position: {
                        top: 0,
                        left: 0
                    },
                    width: placeholder.width,
                    height: placeholder.height
                },

                image: {
                    position: {
                        top: 0,
                        left: 0
                    },
                    width: image.width,
                    height: image.height
                }
            });

            if (metadata['abs-x1'] <= shape.x1 && metadata['abs-x2'] >= shape.x2 && metadata['abs-y1'] <= shape.y1 && metadata['abs-y2'] >= shape.y2) {
                data.selection.position.left = metadata['cr-x1'] * image.width;
                data.selection.position.top = metadata['cr-y1'] * image.height;

                data.selection.width = (metadata['cr-x2'] - metadata['cr-x1']) * image.width;
                data.selection.height = data.selection.width / placeholder.ratio;
            } else {
                data.image.position.left = placeholder.width * (metadata['abs-x1'] - shape.x1) / shape.width;
                data.image.position.top = placeholder.height * (metadata['abs-y1'] - shape.y1) / shape.height;

                data.image.width = placeholder.width * (metadata['abs-x2'] - metadata['abs-x1']) / shape.width * (1 + metadata['cr-x1'] / (1 - metadata['cr-x1']) + (1 - metadata['cr-x2']) / metadata['cr-x2']);
                data.image.height = data.image.width / image.ratio;

                data.selection.position.left = data.image.width * metadata['cr-x1'];
                data.selection.position.top = data.image.height * metadata['cr-y1'];
            }

            var left = data.selection.position.left < data.image.position.left ? data.selection.position.left : data.image.position.left;

            var top = data.selection.position.top < data.image.position.top ? data.selection.position.top : data.image.position.top;

            data.selection.position.right = data.selection.position.left + data.selection.width;

            data.image.position.right = data.image.position.left + data.image.width;

            var right = data.selection.position.right > data.image.position.right ? data.selection.position.right : data.image.position.right;

            data.selection.position.bottom = data.selection.position.top + data.selection.height;

            data.image.position.bottom = data.image.position.top + data.image.height;

            var bottom = data.selection.position.bottom > data.image.position.bottom ? data.selection.position.bottom : data.image.position.bottom;

            var total_width = right - left;
            var total_height = bottom - top;

            //Use container's factor to convert original dimension to
            //container's one (multiply by the factor)
            //or vice versa (divide by the factor)
            container.factor = this._get_factor_a_to_b(container.width, container.height, total_width, total_height);

            data.selection.width *= container.factor;
            data.selection.height *= container.factor;
            data.selection.position.left *= container.factor;
            data.selection.position.top *= container.factor;

            data.image.width *= container.factor;
            data.image.height = data.image.width / image.ratio;
            data.image.position.left *= container.factor;
            data.image.position.top *= container.factor;

            var shift_x = (container.width - total_width * container.factor) / 2;
            var shift_y = (container.height - total_height * container.factor) / 2;

            data.selection.position.left += shift_x;
            data.selection.position.top += shift_y;

            data.image.position.left += shift_x;
            data.image.position.top += shift_y;

            return data;
        }

        /**
         * @param data
         * @param simple_crop
         * @private
         */

    }, {
        key: '_show_crop',
        value: function _show_crop(data, simple_crop) {
            var _this7 = this;

            if (!_jQueryLoader2.default.fn.power_crop) {
                return;
            }

            var crop_callback = simple_crop ? function (data) {
                return _this7._cropping_callback(data);
            } : function (data) {
                return _this7._fit_in_field_callback(data);
            };

            /**
             * @type {object}
             */
            var user_image = this.$user_image;

            user_image.power_crop({
                simple: !!simple_crop,
                data: data,
                crop: crop_callback
            });

            if (!simple_crop) {
                data = user_image.power_crop('state');
                this._update_editor_state(data);
            }
        }
    }]);

    return ImageEditor;
}();

/**
 * @type {*}
 * @private
 */


exports.default = ImageEditor;
ImageEditor._image_editor = null;

/**
 * @type {jQuery|HTMLElement}
 * @private
 */
ImageEditor._image_editor_wrapper = null;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Fancybox resizing
 *
 * Adds resizing capabilities to fancybox for those occasions
 * where borwser window is smaller than needed for to display
 * entire image size. Maximizing the image should expand it to its full
 * size. Restore should bring it back to its previous size.
 * If browser window size is changed after fancybox is shown, that will
 * not update restore dimensions.
 * Restore dimensions WILL be updated when fancybox is closed and
 * reopened.
 */
var Resizing = function () {
    function Resizing() {
        _classCallCheck(this, Resizing);
    }

    _createClass(Resizing, null, [{
        key: 'fancybox_resizing_add',

        /**
         * @param {object} opts
         */
        value: function fancybox_resizing_add(opts) {
            // ref to displayed image
            var $img = jQuery('#fancybox-img');

            // actual dimensions
            var height = $img.height();
            var width = $img.width();

            // displayed dimensions
            var img_orig_width = opts.width;
            var img_orig_height = opts.height;

            var $parent = jQuery('#fancybox-resize');

            // check if displayed size is smaller than loaded image
            // if it is, add max/restore button, do it if fancybox loads image only;
            // if needed will enable for
            // other tyes too, but they will need to have defined width and height
            if (img_orig_width > width && opts.type === 'image' && !$parent.length) {
                var $outer = jQuery('#fancybox-outer'); // get outer container

                // get reference of resizer container
                $parent = jQuery('<div id="fancybox-resize">' + '<a class="maximize" style="display: none;"></a>' + '<a class="restore" style="display: none;"></a>' + '</div>');

                // add resizer to outer
                $outer.append($parent);

                // inject some usefull data in it
                // (original image dimensions and current dimensions)
                $parent.data({
                    'height': height,
                    'width': width,
                    'img_orig_width': img_orig_width,
                    'img_orig_height': img_orig_height
                });

                // update close icon to use custom background
                // jQuery('#fancybox-close').css('background-position', '-68px -200px');
                jQuery('#fancybox-close').addClass('resizer-tweaks');

                // cycle 'maximize'/'restore' links
                jQuery('a', $parent).each(function () {
                    // if it is maximize show it
                    if (jQuery(this).hasClass('maximize')) {
                        jQuery(this).show();
                    }

                    // add click handler
                    jQuery(this).click(function () {
                        var $this = jQuery(this); // get ref to clicked link

                        $this.hide(); // hide it

                        var data = jQuery('#fancybox-resize').data(); // get stored data

                        // calculate difference in real and displayed dimensions
                        var diff_x = data.img_orig_width - data.width;
                        var diff_y = data.img_orig_height - data.height;

                        if ($this.hasClass('maximize')) {
                            // if we are maximizing
                            Resizing.fancybox_resizing_resize(diff_x, diff_y); // add diff
                            jQuery('a.restore', $parent).first().show(); // show restore link
                        } else if ($this.hasClass('restore')) {
                            // if we are restoring
                            Resizing.fancybox_resizing_resize(-diff_x, -diff_y); // subtract diff
                            jQuery('a.maximize', $parent).first().show(); // show miximize link
                        }
                    });
                });
            } else if ($parent.length > 0 && img_orig_height === height) {
                // there is a resizer
                // image and Fancybox are now with exatly same dimensions
                $parent.remove(); // remove resizer

                // reset close icon
                // jQuery('#fancybox-close').css('background-position', '-40px 0px');
                jQuery('#fancybox-close').removeClass('resizer-tweaks');
            } else if (img_orig_height > height) {
                // we have already created resizer and
                // this is just reopening of the fancybox
                // we are updating data in resizer to acommodate for cases where browser
                // window has been resized in mean time and 'restore' dimensions are changed
                $parent.data({
                    'width': width,
                    'height': height,
                    'img_orig_width': img_orig_width,
                    'img_orig_height': img_orig_height
                }).show();

                // make sure that 'maximize' handle is visible and restore hidden
                jQuery('a.restore', $parent).hide();
                jQuery('a.maximize', $parent).show();
            }
        }

        /**
         * Hide resize icons
         *
         * Does not do much it is just convenience method
         * to use in onCleanup hook of fancy box to hide resizing
         * icons with close icon.
         */

    }, {
        key: 'fancybox_resizing_hide',
        value: function fancybox_resizing_hide() {
            jQuery('#fancybox-resize').hide();
            jQuery('#fancybox-close').removeClass('resizer-tweaks');
        }

        /**
         * Do resize
         *
         * Perform actual resizing by adding differences to various
         * elements of fancybox.
         * For out case we need to alter only wrap and inner container, if
         * resizing is to be used with other options enabled,
         * such as title, overlay etc.
         * this is the place to add other calculations.
         * Difference is always added so when restoring,
         * we need to pass negative difference.
         *
         * @param diff_x integer
         * @param diff_y integer - difference in pixels
         */

    }, {
        key: 'fancybox_resizing_resize',
        value: function fancybox_resizing_resize(diff_x, diff_y) {
            // wrap height is set to auto by default so we need to update only width
            var $wrap = jQuery('#fancybox-wrap');

            $wrap.width($wrap.width() + diff_x);

            // the above is true for fancybox 1.3.4,
            //but not guaranteed for earlier versions, so:
            $wrap.height($wrap.height() + diff_y);

            // get image container, it has both width and height set explicitly
            var $container = Resizing._fancybox_get_content_container();

            // add diffs to it.
            $container.width($container.width() + diff_x);
            $container.height($container.height() + diff_y);

            // center it to page
            jQuery.fancybox.center(true);
        }

        /**
         * Apparently between 1.3.1 and 1.3.4(current) versions of fancybox
         * there is change of id for immediate image container.
         * This function tries to handle this.
         *
         * @returns Object jQuery object representing image container
         * @private
         */

    }, {
        key: '_fancybox_get_content_container',
        value: function _fancybox_get_content_container() {
            return jQuery('#fancybox-content, #fancybox-inner');
        }
    }]);

    return Resizing;
}();

exports.default = Resizing;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UpdatePreview = function () {
    function UpdatePreview() {
        _classCallCheck(this, UpdatePreview);
    }

    _createClass(UpdatePreview, null, [{
        key: 'fancybox_add_update_preview_button',

        /**
         * @param {jQuery|function} $
         * @param {DataInterface} zp
         */
        value: function fancybox_add_update_preview_button($, zp) {
            //Don't add the button if it exists
            if (UpdatePreview.update_preview_button.length) {
                return;
            }

            var $outer = $('#fancybox-outer');

            var $update_preview = $('<a id="zp-update-preview-button">' + '<span class="icon left-part">' + '<span class="icon arrows" />' + '</span>' + '<span class="title">' + update_preview_button_text + '</span>' + '</a>').appendTo($outer);

            $('#fancybox-close').addClass('resizer-tweaks');

            $update_preview.click(function () {
                if (!$outer.hasClass('modified')) {
                    return false;
                }

                $outer.find('#fancybox-img').bind('load.update-preview', function (event) {
                    $(this).unbind('load.update-preview');

                    $outer.removeClass('preview-updating');

                    $('#fancybox-content').bind('mousemove.zp-show-shapes', function (event) {
                        $(this).unbind(event);

                        $outer.removeClass('zp-hide-shapes');
                    });
                });

                $outer.addClass('preview-updating zp-hide-shapes');

                zp.update_preview({ data: { zp: zp } });
            });
        }
    }, {
        key: 'fancybox_update_update_preview_button',


        /**
         * @param {jQuery|function} $
         */
        value: function fancybox_update_update_preview_button($) {
            var $fancybox_resize = $('#fancybox-resize');

            if ($fancybox_resize.length) {
                $fancybox_resize.addClass('middle-position');
            } else {
                UpdatePreview.update_preview_button.addClass('no-middle');
            }
        }

        /**
         * @param {jQuery|function} $
         */

    }, {
        key: 'fancybox_remove_update_preview_button',
        value: function fancybox_remove_update_preview_button($) {
            UpdatePreview.update_preview_button.remove();
            $('#fancybox-resize').removeClass('middle-position');
            $('#fancybox-outer').removeClass('preview-updating zp-hide-shapes');
            $('#fancybox-content').unbind('mousemove.zp-show-shapes');
            $('#fancybox-img').unbind('load.update-preview');
        }
    }, {
        key: 'update_preview_button',
        get: function get() {
            return $('#zp-update-preview-button');
        }
    }]);

    return UpdatePreview;
}();

exports.default = UpdatePreview;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by cod on 21.4.17.
 */
var ShapeRepository = function () {
    /**
     * @param {PersonalizationForm} personalisation_form
     */
    function ShapeRepository(personalisation_form) {
        _classCallCheck(this, ShapeRepository);

        this.personalisation_form = personalisation_form;
    }

    /**
     * @param {number} page_number
     * @return {Object.<string, Shape>}
     */


    _createClass(ShapeRepository, [{
        key: 'get_shapes',
        value: function get_shapes(page_number) {
            if (isNaN(parseInt(page_number, 10))) {
                throw new TypeError('Argument "page_number" must be of type "number"');
            }
            var pages = this.personalisation_form.data.template_details.pages;

            if (_typeof(pages[page_number]) === 'object') {
                return pages[page_number].shapes;
            }

            return undefined;
        }

        /**
         * @return {Object.<string, Shape>}
         */

    }, {
        key: 'get_shapes_of_current_page',
        value: function get_shapes_of_current_page() {
            var current_page = this.personalisation_form.data.current_page;
            if (!current_page) {
                return undefined;
            }

            return this.get_shapes(current_page);
        }

        /**
         * @param {number} page_number
         * @param {string} name
         * @return {Shape}
         */

    }, {
        key: 'get_shape',
        value: function get_shape(page_number, name) {
            if (typeof name !== 'string') {
                throw new TypeError('Argument "name" must be of type "string"');
            }

            var shapes = this.get_shapes(page_number);
            if (shapes) {
                return shapes[name];
            }

            return undefined;
        }
    }]);

    return ShapeRepository;
}();

exports.default = ShapeRepository;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

// $.ui.plugin is deprecated. Use $.widget() extensions instead.
return $.ui.plugin = {
	add: function( module, option, set ) {
		var i,
			proto = $.ui[ module ].prototype;
		for ( i in set ) {
			proto.plugins[ i ] = proto.plugins[ i ] || [];
			proto.plugins[ i ].push( [ option, set[ i ] ] );
		}
	},
	call: function( instance, name, args, allowDisconnected ) {
		var i,
			set = instance.plugins[ name ];

		if ( !set ) {
			return;
		}

		if ( !allowDisconnected && ( !instance.element[ 0 ].parentNode ||
				instance.element[ 0 ].parentNode.nodeType === 11 ) ) {
			return;
		}

		for ( i = 0; i < set.length; i++ ) {
			if ( instance.options[ set[ i ][ 0 ] ] ) {
				set[ i ][ 1 ].apply( instance.element, args );
			}
		}
	}
};

} ) );


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {
return $.ui.safeActiveElement = function( document ) {
	var activeElement;

	// Support: IE 9 only
	// IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
	try {
		activeElement = document.activeElement;
	} catch ( error ) {
		activeElement = document.body;
	}

	// Support: IE 9 - 11 only
	// IE may return null instead of an element
	// Interestingly, this only seems to occur when NOT in an iframe
	if ( !activeElement ) {
		activeElement = document.body;
	}

	// Support: IE 11 only
	// IE11 returns a seemingly empty object in some cases when accessing
	// document.activeElement from an <iframe>
	if ( !activeElement.nodeName ) {
		activeElement = document.body;
	}

	return activeElement;
};

} ) );


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Mouse
//>>group: Widgets
//>>description: Abstracts mouse-based interactions to assist in creating certain widgets.
//>>docs: http://api.jqueryui.com/mouse/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(0),
			__webpack_require__(55),
			__webpack_require__(1),
			__webpack_require__(4)
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

var mouseHandled = false;
$( document ).on( "mouseup", function() {
	mouseHandled = false;
} );

return $.widget( "ui.mouse", {
	version: "1.12.1",
	options: {
		cancel: "input, textarea, button, select, option",
		distance: 1,
		delay: 0
	},
	_mouseInit: function() {
		var that = this;

		this.element
			.on( "mousedown." + this.widgetName, function( event ) {
				return that._mouseDown( event );
			} )
			.on( "click." + this.widgetName, function( event ) {
				if ( true === $.data( event.target, that.widgetName + ".preventClickEvent" ) ) {
					$.removeData( event.target, that.widgetName + ".preventClickEvent" );
					event.stopImmediatePropagation();
					return false;
				}
			} );

		this.started = false;
	},

	// TODO: make sure destroying one instance of mouse doesn't mess with
	// other instances of mouse
	_mouseDestroy: function() {
		this.element.off( "." + this.widgetName );
		if ( this._mouseMoveDelegate ) {
			this.document
				.off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
				.off( "mouseup." + this.widgetName, this._mouseUpDelegate );
		}
	},

	_mouseDown: function( event ) {

		// don't let more than one widget handle mouseStart
		if ( mouseHandled ) {
			return;
		}

		this._mouseMoved = false;

		// We may have missed mouseup (out of window)
		( this._mouseStarted && this._mouseUp( event ) );

		this._mouseDownEvent = event;

		var that = this,
			btnIsLeft = ( event.which === 1 ),

			// event.target.nodeName works around a bug in IE 8 with
			// disabled inputs (#7620)
			elIsCancel = ( typeof this.options.cancel === "string" && event.target.nodeName ?
				$( event.target ).closest( this.options.cancel ).length : false );
		if ( !btnIsLeft || elIsCancel || !this._mouseCapture( event ) ) {
			return true;
		}

		this.mouseDelayMet = !this.options.delay;
		if ( !this.mouseDelayMet ) {
			this._mouseDelayTimer = setTimeout( function() {
				that.mouseDelayMet = true;
			}, this.options.delay );
		}

		if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
			this._mouseStarted = ( this._mouseStart( event ) !== false );
			if ( !this._mouseStarted ) {
				event.preventDefault();
				return true;
			}
		}

		// Click event may never have fired (Gecko & Opera)
		if ( true === $.data( event.target, this.widgetName + ".preventClickEvent" ) ) {
			$.removeData( event.target, this.widgetName + ".preventClickEvent" );
		}

		// These delegates are required to keep context
		this._mouseMoveDelegate = function( event ) {
			return that._mouseMove( event );
		};
		this._mouseUpDelegate = function( event ) {
			return that._mouseUp( event );
		};

		this.document
			.on( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.on( "mouseup." + this.widgetName, this._mouseUpDelegate );

		event.preventDefault();

		mouseHandled = true;
		return true;
	},

	_mouseMove: function( event ) {

		// Only check for mouseups outside the document if you've moved inside the document
		// at least once. This prevents the firing of mouseup in the case of IE<9, which will
		// fire a mousemove event if content is placed under the cursor. See #7778
		// Support: IE <9
		if ( this._mouseMoved ) {

			// IE mouseup check - mouseup happened when mouse was out of window
			if ( $.ui.ie && ( !document.documentMode || document.documentMode < 9 ) &&
					!event.button ) {
				return this._mouseUp( event );

			// Iframe mouseup check - mouseup occurred in another document
			} else if ( !event.which ) {

				// Support: Safari <=8 - 9
				// Safari sets which to 0 if you press any of the following keys
				// during a drag (#14461)
				if ( event.originalEvent.altKey || event.originalEvent.ctrlKey ||
						event.originalEvent.metaKey || event.originalEvent.shiftKey ) {
					this.ignoreMissingWhich = true;
				} else if ( !this.ignoreMissingWhich ) {
					return this._mouseUp( event );
				}
			}
		}

		if ( event.which || event.button ) {
			this._mouseMoved = true;
		}

		if ( this._mouseStarted ) {
			this._mouseDrag( event );
			return event.preventDefault();
		}

		if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
			this._mouseStarted =
				( this._mouseStart( this._mouseDownEvent, event ) !== false );
			( this._mouseStarted ? this._mouseDrag( event ) : this._mouseUp( event ) );
		}

		return !this._mouseStarted;
	},

	_mouseUp: function( event ) {
		this.document
			.off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.off( "mouseup." + this.widgetName, this._mouseUpDelegate );

		if ( this._mouseStarted ) {
			this._mouseStarted = false;

			if ( event.target === this._mouseDownEvent.target ) {
				$.data( event.target, this.widgetName + ".preventClickEvent", true );
			}

			this._mouseStop( event );
		}

		if ( this._mouseDelayTimer ) {
			clearTimeout( this._mouseDelayTimer );
			delete this._mouseDelayTimer;
		}

		this.ignoreMissingWhich = false;
		mouseHandled = false;
		event.preventDefault();
	},

	_mouseDistanceMet: function( event ) {
		return ( Math.max(
				Math.abs( this._mouseDownEvent.pageX - event.pageX ),
				Math.abs( this._mouseDownEvent.pageY - event.pageY )
			) >= this.options.distance
		);
	},

	_mouseDelayMet: function( /* event */ ) {
		return this.mouseDelayMet;
	},

	// These are placeholder methods, to be overriden by extending plugin
	_mouseStart: function( /* event */ ) {},
	_mouseDrag: function( /* event */ ) {},
	_mouseStop: function( /* event */ ) {},
	_mouseCapture: function( /* event */ ) { return true; }
} );

} ) );


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @implements DataInterface
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _Logger = __webpack_require__(2);

var _Logger2 = _interopRequireDefault(_Logger);

var _ImageUpload = __webpack_require__(30);

var _ImageUpload2 = _interopRequireDefault(_ImageUpload);

var _PreviewController = __webpack_require__(34);

var _PreviewController2 = _interopRequireDefault(_PreviewController);

var _FakeAddToCartButton = __webpack_require__(25);

var _FakeAddToCartButton2 = _interopRequireDefault(_FakeAddToCartButton);

var _UiHelper = __webpack_require__(8);

var _UiHelper2 = _interopRequireDefault(_UiHelper);

var _MetaDataHelper = __webpack_require__(33);

var _MetaDataHelper2 = _interopRequireDefault(_MetaDataHelper);

var _jQueryLoader = __webpack_require__(3);

var _jQueryLoader2 = _interopRequireDefault(_jQueryLoader);

var _ImageSelector = __webpack_require__(28);

var _ImageSelector2 = _interopRequireDefault(_ImageSelector);

var _ImageEditorController = __webpack_require__(26);

var _ImageEditorController2 = _interopRequireDefault(_ImageEditorController);

var _ImageTabController = __webpack_require__(29);

var _ImageTabController2 = _interopRequireDefault(_ImageTabController);

var _Feature = __webpack_require__(5);

var _Feature2 = _interopRequireDefault(_Feature);

var _Resizing = __webpack_require__(13);

var _Resizing2 = _interopRequireDefault(_Resizing);

var _UpdatePreview = __webpack_require__(14);

var _UpdatePreview2 = _interopRequireDefault(_UpdatePreview);

var _SaveImageButton = __webpack_require__(6);

var _SaveImageButton2 = _interopRequireDefault(_SaveImageButton);

var _SelectImage = __webpack_require__(40);

var _SelectImage2 = _interopRequireDefault(_SelectImage);

var _Dataset = __webpack_require__(39);

var _Dataset2 = _interopRequireDefault(_Dataset);

var _InPreviewEditController = __webpack_require__(31);

var _InPreviewEditController2 = _interopRequireDefault(_InPreviewEditController);

var _ShapeRepository = __webpack_require__(15);

var _ShapeRepository2 = _interopRequireDefault(_ShapeRepository);

var _Lightbox = __webpack_require__(32);

var _Lightbox2 = _interopRequireDefault(_Lightbox);

var _LightboxConfiguration = __webpack_require__(10);

var _LightboxConfiguration2 = _interopRequireDefault(_LightboxConfiguration);

var _Assert = __webpack_require__(7);

var _Assert2 = _interopRequireDefault(_Assert);

var _ZoomHelper = __webpack_require__(41);

var _ZoomHelper2 = _interopRequireDefault(_ZoomHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @implements DataInterface
 */
var PersonalizationForm = function () {
    /**
     * @param {DataInterface} data
     */
    function PersonalizationForm(data) {
        _classCallCheck(this, PersonalizationForm);

        if (arguments.length !== 1) {
            throw new TypeError('Invalid number of arguments, expected 1 got ' + arguments.length);
        }

        /** @type {DataInterface} */
        var zp = this.data = data;
        var personalization_form_instance = this;

        this._enlarge_editor_click_handler = this._enlarge_editor_click_handler.bind(this);
        this.image_field_select_handler = this.image_field_select_handler.bind(this);
        this.add_image_to_gallery = this.add_image_to_gallery.bind(this);
        this.update_preview = this.update_preview.bind(this);
        zp.scroll_strip = this.scroll_strip = this.scroll_strip.bind(this);

        var $add_to_cart_button = this._get_add_to_cart_button();
        var fake_add_to_cart_button = new _FakeAddToCartButton2.default($add_to_cart_button);
        this.shape_repository = new _ShapeRepository2.default(this);
        /** @type {PreviewController} */
        var preview_controller = this.preview_controller = new _PreviewController2.default(this, fake_add_to_cart_button);
        this.image_editor = new _ImageEditorController2.default(this);
        this.in_preview_edit_controller = new _InPreviewEditController2.default(this);
        this._preview_overlay = null;

        var template_details = data.template_details;

        //Set current template page to the first (1-based index)
        zp.current_page = 1;
        var ui_helper = _UiHelper2.default.instance();
        var $product_form = ui_helper.product_form;
        var $product_image_box = ui_helper.product_image_box;
        $product_image_box.css('position', 'relative');

        var product_image_gallery = ui_helper.product_image_gallery;
        this._set_has_image_zoomer(this._detect_initial_has_image_zoomer(product_image_gallery));

        if (this.has_changed_fields_on_page(zp.current_page)) {
            $product_form.removeClass('zp-not-modified');
        } else {
            $product_form.addClass('zp-not-modified');
        }

        this._register_click_form_button();
        this._register_click_enlarge_editor();

        //If personalization step (for 2-step theme) and base image is set...
        if (zp.is_personalization_step && this.has_image_zoomer) {
            //... then remove zoomer functionality
            this.disable_image_zoomer();
        }

        //If base image is not set...
        if (!this.has_image_zoomer) {
            //then remove all original images placed by M., zoomer and base image
            (0, _jQueryLoader2.default)(product_image_gallery).empty();

            //Add preview image placeholder
            preview_controller.add_preview_placeholder();
        }

        this._add_hidden_form_fields(template_details);

        //If update_first_preview_on_load parameter was set
        if (zp.update_first_preview_on_load) {
            //Update preview for the first page
            preview_controller.update_preview(zp, undefined, zp.preserve_fields);
        }
        // Create array for preview images sharing links
        if (window.place_preview_image_sharing_link) {
            zp.preview_sharing_links = new Array(zp.template_details.pages_number + 1);
        }

        this.preview_controller.add_previews(data);

        var pages = data.template_details.pages;
        this._prepareImageFields(pages);

        if (_jQueryLoader2.default.fn.combobox) {
            this._prepareComboBox(pages);
        }

        ui_helper.show('#page-size-page-1');
        // $('#page-size-page-1').removeClass('zp-hidden');

        zp.is_fields_hidden = true;

        if (!this.has_shapes || !window.place_all_shapes_for_page) {
            ui_helper.show('#stock-images-page-1, #input-fields-page-1');
            // $('#stock-images-page-1, #input-fields-page-1').removeClass('zp-hidden');
        }
        if (!this.has_shapes || !_Feature2.default.instance().is_activated(_Feature2.default.feature.inPreviewEdit)) {
            ui_helper.show('#stock-images-page-1, #input-fields-page-1');
            // $('#stock-images-page-1, #input-fields-page-1').removeClass('zp-hidden');

            zp.is_fields_hidden = false;

            ui_helper.hide(ui_helper.editor_button);
            // $editor_button.addClass('zp-hidden');
            ui_helper.hide(ui_helper.form_button);
            // $form_button.addClass('zp-hidden');
            ui_helper.show(ui_helper.enlarge_button);
            // $enlarge_button.removeClass('zp-hidden');
        }

        (0, _jQueryLoader2.default)('div.zetaprints-image-tabs, div.zetaprints-preview-button').css('display', 'block');

        (0, _jQueryLoader2.default)('div.zetaprints-image-tabs li:first').addClass('selected');

        (0, _jQueryLoader2.default)('div.tab.user-images').each(function () {
            var $this = (0, _jQueryLoader2.default)(this);

            //It's not empty when it has more than 1 child
            //because first child is template element
            if ($this.find('td').length > 1) {
                $this.parents('.selector-content').find('> .tab-buttons > .hidden').removeClass('hidden');
            }
        });

        // this._add_hidden_form_fields(template_details);

        $add_to_cart_button.parent().before('<div id="zp-warning-user-data-changed" class="zetaprints-notice">' + window.warning_user_data_changed + '</div>');

        if (personalization_form_instance.is_all_pages_updated(template_details) || personalization_form_instance._has_updated_pages(template_details) && template_details.missed_pages === '' || template_details.missed_pages === 'include') {
            ui_helper.hide('div.zetaprints-notice.to-update-preview');
            // $('div.zetaprints-notice.to-update-preview').addClass('zp-hidden');
        } else {
            fake_add_to_cart_button.add(typeof template_details.pages['2'] !== 'undefined');
        }
        //Add resizer for text inputs and text areas for the first page
        if (_jQueryLoader2.default.fn.text_field_resizer) {
            (0, _jQueryLoader2.default)('#input-fields-page-1 .zetaprints-text-field-wrapper').text_field_resizer();
        }

        //Set preview images sharing link for the first page
        if (window.place_preview_image_sharing_link) {
            this.set_preview_sharing_link_for_page(1, zp.preview_sharing_links);
        }

        var image_tab_controller = new _ImageTabController2.default(this);
        (0, _jQueryLoader2.default)('div.zetaprints-image-tabs li').click(function () {
            image_tab_controller.handle_click(this);
        });

        _Feature2.default.instance().call(_Feature2.default.feature.dataset, _Dataset2.default.zp_dataset_initialise, zp);
        // Delegate.delegate('zp_dataset_initialise', zp);

        this._patchProductAddToCart();

        this._add_dynamic_methods_to_data();
        this._init_image_upload_buttons();

        this._register_window_load();
        this._register_click_next_page();
        this._register_preview_lightbox();
        this._register_in_dialog_lightbox();
        this._register_click_edit_thumbnail();
        this._prepareTextFieldEditor();
        this._prepareQtip();
        this._register_input_field_events();
        this._register_delete_button_click();
        this._register_image_click();
        this._register_palette_change();

        if (zp.has_shapes) {
            _Feature2.default.instance().call(_Feature2.default.feature.inPreviewEdit, this.in_preview_edit_controller.add_in_preview_edit_handlers);
        }
    }

    /**
     * @private
     */


    _createClass(PersonalizationForm, [{
        key: "_register_click_enlarge_editor",
        value: function _register_click_enlarge_editor() {
            var ui_helper = _UiHelper2.default.instance();
            ui_helper.editor_button.click(this._enlarge_editor_click_handler);
            ui_helper.enlarge_button.click(this._enlarge_editor_click_handler);
        }

        /**
         * @private
         */

    }, {
        key: "_register_click_form_button",
        value: function _register_click_form_button() {
            var data = this.data;
            return _UiHelper2.default.instance().form_button.click(function () {
                var $fields = (0, _jQueryLoader2.default)('#input-fields-page-' + data.current_page + ', #stock-images-page-' + data.current_page);

                var ui_helper = _UiHelper2.default.instance();

                data.is_fields_hidden = !ui_helper.has_hide_class($fields);
                // zp.is_fields_hidden = !$fields.hasClass('zp-hidden');


                if (data.is_fields_hidden) {
                    $fields.animate({ opacity: 0 }, 500, function () {
                        ui_helper.hide($fields);
                        // $fields.addClass('zp-hidden');
                        $fields.css('opacity', 1);
                    });
                } else {
                    $fields.css('opacity', 0);
                    ui_helper.show($fields);
                    // $fields.removeClass('zp-hidden');
                    $fields.animate({ opacity: 1 }, 500);
                }
            });
        }

        /**
         * @return {TemplateDetail}
         */

    }, {
        key: "has_changed_fields_on_page",


        /**
         * @param {number} page_number
         * @return {boolean}
         * @api
         */
        value: function has_changed_fields_on_page(page_number) {
            var $fields = (0, _jQueryLoader2.default)('#input-fields-page-' + page_number + ', ' + '#stock-images-page-' + page_number);

            if (!$fields.length) {
                return false;
            }

            var $filtered_fields = $fields.find('*[name^="zetaprints-_"], *[name^="zetaprints-#"]').filter('textarea, select, :text, :checked').filter('*[type!=hidden]');

            var length = $filtered_fields.length;
            if (!length) {
                return false;
            }

            for (var i = 0; i < length; i++) {
                if ((0, _jQueryLoader2.default)($filtered_fields[i]).val()) {
                    return true;
                }
            }

            return false;
        }

        /**
         * @param {string} guid
         * @param {string} url
         * @param {function} [on_image_load]
         */

    }, {
        key: "add_image_to_gallery",
        value: function add_image_to_gallery(guid, url, on_image_load) {
            var _this = this;
            var data = this.data;
            var trs = (0, _jQueryLoader2.default)('.tabs-wrapper > .user-images > table > tbody > tr');

            var image_field_select_handler = function image_field_select_handler(event) {
                _this.image_field_select_handler((0, _jQueryLoader2.default)(event.target), data);
            };
            var thumbnail_edit_click_handler = function thumbnail_edit_click_handler(event) {
                event.preventDefault();
                var $target = (0, _jQueryLoader2.default)(this);
                var $input = $target.parent().children('input');

                _this._show_image_edit_dialog($input.attr('name').substring(12), $input.val(), $target.children('img'));

                return false;
            };

            var delete_image_click_handle = function delete_image_click_handle(event) {
                event.stopPropagation();
                event.preventDefault();

                if (confirm(delete_this_image_text)) {
                    var image_id = (0, _jQueryLoader2.default)(this).parents('td').children('input').val();
                    _this._delete_image(data, image_id);
                }

                return false;
            };

            trs.each(function () {
                var $tr = (0, _jQueryLoader2.default)(this);
                var $template = $tr.children('.zp-html-template');

                var $td = $template.clone().removeClass('zp-html-template').insertAfter($template);

                $td.children('.zetaprints-field').val(guid).change(image_field_select_handler);

                $td.children('.image-edit-thumb').click(thumbnail_edit_click_handler);

                var $thumb = $td.children('.image-edit-thumb');

                $thumb.find('> .buttons-row > .zp-delete-button').click(delete_image_click_handle);

                var $img = $thumb.children('img').attr('alt', guid).attr('src', url);

                if (on_image_load) {
                    $img.load(on_image_load);
                }
            });
        }

        /**
         * @param {jQuery|HTMLElement} target
         * @param {DataInterface} data
         */

    }, {
        key: "image_field_select_handler",
        value: function image_field_select_handler(target, data) {
            var _this2 = this;

            var $selector = target.parents('div.zetaprints-images-selector');
            var $content = $selector.parents('.selector-content');

            if (!$selector.get(0)) {
                $content = target.parents('.selector-content');
                $selector = $content.data('in-preview-edit').parent;
            }

            var name = target.attr('name').substring(12);
            var value = target.val();
            var has_value = !!value.length;

            var page = data.template_details.pages[data.current_page];
            var image = page.images[name];

            if (image) {
                image.value = value;

                if (typeof image.previous_value !== 'undefined') {
                    if (image.previous_value !== value) {
                        this.product_form.addClass('zp-user-data-changed');
                    } else {
                        this.product_form.removeClass('zp-user-data-changed');
                    }
                }
            }

            if (has_value) {
                $selector.removeClass('no-value');

                (0, _jQueryLoader2.default)('#fancybox-outer').addClass('modified');
                this.product_form.removeClass('zp-not-modified');

                //If ZetaPrints advanced theme is enabled then mark shape as edited then image is selected
                _Feature2.default.instance().call(_Feature2.default.feature.inPreviewEdit, function () {
                    _this2.in_preview_edit_controller.mark_shape_as_edited(page.shapes[name]);
                });
                // Delegate.delegate('mark_shape_as_edited', page.shapes[name]);
            } else {
                $selector.addClass('no-value');

                (0, _jQueryLoader2.default)('#fancybox-outer').removeClass('modified');
                //If ZetaPrints advanced theme is enabled then or unmark shape then Leave blank is selected
                _Feature2.default.instance().call(_Feature2.default.feature.inPreviewEdit, function () {
                    _this2.in_preview_edit_controller.unmark_shape_as_edited(page.shapes[name]);
                });
                // Delegate.delegate('unmark_shape_as_edited', page.shapes[name]);
            }
        }

        /**
         * @param {TemplateDetail} details
         * @return {boolean}
         * @api
         */

    }, {
        key: "is_all_pages_updated",
        value: function is_all_pages_updated(details) {
            var page_number = void 0;
            var pages = details.pages;
            for (page_number in pages) {
                if (pages.hasOwnProperty(page_number) && !details.pages[page_number]['updated-preview-image']) {
                    return false;
                }
            }

            return true;
        }

        /**
         * @param {Page} page
         * @api
         */

    }, {
        key: "store_user_data",
        value: function store_user_data(page) {
            var name = void 0;
            var fields = page.fields;
            var images = page.images;

            for (name in fields) {
                if (fields.hasOwnProperty(name)) {
                    if (!fields[name].value) {
                        fields[name].value = '';
                    }

                    fields[name].previous_value = fields[name].value;
                }
            }

            for (name in images) {
                if (images.hasOwnProperty(name)) {
                    if (!images[name].value) {
                        images[name].value = '#';
                    }

                    images[name].previous_value = images[name].value;
                }
            }
        }

        /**
         * @param {Page} page
         * @return {boolean}
         */

    }, {
        key: "is_user_data_changed",
        value: function is_user_data_changed(page) {
            var name = void 0;
            var fields = page.fields;
            var images = page.images;

            for (name in fields) {
                if (fields.hasOwnProperty(name) && typeof fields[name].previous_value !== 'undefined' && fields[name].previous_value !== fields[name].value) {
                    return true;
                }
            }
            for (name in images) {
                if (images.hasOwnProperty(name) && typeof images[name].previous_value !== 'undefined' && images[name].previous_value !== images[name].value) {
                    return true;
                }
            }
            return false;
        }

        /**
         * @param pages
         * @return {boolean}
         * @api
         */

    }, {
        key: "page_has_updating",
        value: function page_has_updating(pages) {
            for (var n in pages) {
                if (pages.hasOwnProperty(n) && typeof pages[n].is_updating !== 'undefined' && pages[n].is_updating) {
                    return true;
                }
            }

            return false;
        }

        /**
         *
         * @param {number|string} page_number
         * @param {*[]} links
         * @param {string} filename
         */

    }, {
        key: "update_preview_sharing_link_for_page",
        value: function update_preview_sharing_link_for_page(page_number, links, filename) {
            links[page_number] = preview_image_sharing_link_template + filename;
        }

        /**
         * @param {number} page_number
         * @param {object} links
         */

    }, {
        key: "set_preview_sharing_link_for_page",
        value: function set_preview_sharing_link_for_page(page_number, links) {
            if (links[page_number]) {
                (0, _jQueryLoader2.default)('span.zetaprints-share-link').removeClass('empty');
                (0, _jQueryLoader2.default)('#zetaprints-share-link-input').val(links[page_number]);
            } else {
                (0, _jQueryLoader2.default)('span.zetaprints-share-link').addClass('empty');
                (0, _jQueryLoader2.default)('#zetaprints-share-link-input').val('');
            }
        }

        /**
         *
         * @param {MouseEvent} event
         * @param {undefined|*[]} update_pages
         * @param {boolean} preserve_fields
         * @return {boolean}
         */

    }, {
        key: "update_preview",
        value: function update_preview(event, update_pages, preserve_fields) {
            this.preview_controller.update_preview(this.data, update_pages, preserve_fields);
            event.preventDefault();

            return false;
        }

        /**
         * @param {number} page_number
         * @param {DataInterface} data
         * @return {boolean}
         */

    }, {
        key: "can_show_next_page_button_for_page",
        value: function can_show_next_page_button_for_page(page_number, data) {
            var page = data.template_details.pages[page_number];

            return !!(page_number < data.template_details.pages_number && page['updated-preview-image']);
        }

        /**
         * @param {HTMLElement} panel
         * @return {boolean}
         */

    }, {
        key: "scroll_strip",
        value: function scroll_strip(panel) {
            if ((0, _jQueryLoader2.default)(panel).hasClass('images-scroller')) {
                (0, _jQueryLoader2.default)(panel).scrollLeft(0);
                var position = (0, _jQueryLoader2.default)('input:checked', panel).parents('td').position();
                if (position) {
                    (0, _jQueryLoader2.default)(panel).scrollLeft(position.left);
                }
            }
            return true;
        }

        /**
         * @param details
         * @return {string}
         * @api
         */

    }, {
        key: "export_previews_to_string",
        value: function export_previews_to_string(details) {
            var previews = '';
            var number = void 0;

            var pages = details.pages;
            for (number in pages) {
                if (pages.hasOwnProperty(number)) {
                    var page = pages[number];

                    if (page['updated-preview-image']) {
                        previews += ',' + page['updated-preview-image'].split('preview/')[1];
                    }
                }
            }

            return previews.substring(1);
        }

        /**
         * @param {string} url
         * @api
         */

    }, {
        key: "upload_image_by_url",
        value: function upload_image_by_url(url) {
            var zp = this.data;
            var personalization_form_instance = this;
            var options = {
                type: 'POST',
                dataType: 'json',
                data: { 'url': url },
                error: function error(request, status, _error) {
                    alert(status + ' ' + _error);
                },
                /**
                 * @param {UploadResult} data
                 */
                success: function success(data) {
                    personalization_form_instance.add_image_to_gallery(data.guid, data.thumbnail_url);

                    zp.image_edit.reload_image(data.guid);
                }
            };

            _jQueryLoader2.default.ajax(zp.url.upload_by_url, options);
        }

        /**
         * @param {MetaData} metadata
         */

    }, {
        key: "save_image_handler",
        value: function save_image_handler(metadata) {
            var zp = this.data;
            var $input = zp.image_edit.$input;

            if (!$input.length) {
                return;
            }

            if (metadata) {
                metadata['img-id'] = $input.val();
                _MetaDataHelper2.default.zp_set_metadata(zp.image_edit.placeholder, metadata);
            } else {
                _MetaDataHelper2.default.zp_clear_metadata(zp.image_edit.placeholder);
            }
        }

        /**
         * Disable the image zoomer if one exists
         *
         * If there's image zoomer on the page remove it and base image
         *
         * @returns {boolean} Returns if a image zoomer has been disabled
         */

    }, {
        key: "disable_image_zoomer",
        value: function disable_image_zoomer() {
            if (!this.has_image_zoomer) {
                return false;
            }
            _ZoomHelper2.default.disable_zoom();
            this._set_has_image_zoomer(false);

            return true;
        }

        /**
         * @inheritDoc
         */

    }, {
        key: "show_colorpicker",
        value: function show_colorpicker($panel) {
            _Assert2.default.assertjQuery($panel);
            if (!($panel.hasClass('color-picker') || $panel.hasClass('colour-picker'))) {
                return;
            }

            var $input = $panel.find('input');

            if (!$input.prop('checked')) {
                $input.colorpicker('open');
            }
        }

        /**
         * @inheritDoc
         */

    }, {
        key: "hide_colorpicker",
        value: function hide_colorpicker($panel) {
            _Assert2.default.assertjQuery($panel);
            if ($panel.hasClass('color-picker') || $panel.hasClass('colour-picker')) {
                $panel.find('input').colorpicker('close', true);
            }
        }

        /**
         * @inheritDoc
         */

    }, {
        key: "show_user_images",
        value: function show_user_images($panel) {
            _Assert2.default.assertjQuery($panel);
            if ($panel.find('input.zetaprints-images').length > 0) {
                $panel.tabs('option', 'active', 1);
            }
        }

        /**
         * @param {boolean} value
         * @private
         */

    }, {
        key: "_set_has_image_zoomer",
        value: function _set_has_image_zoomer(value) {
            this._has_image_zoomer = value;
        }

        /**
         * @private
         */

    }, {
        key: "_add_dynamic_methods_to_data",
        value: function _add_dynamic_methods_to_data() {
            var _this3 = this;

            var _update_preview = this.update_preview;
            this.data.update_preview = function () {
                _Logger2.default.warn('Called update_preview on ZetaPrints data');
                /** @type {function} _update_preview */
                _update_preview.apply(this, arguments);
            };

            this.data.show_user_images = function ($panel) {
                _Logger2.default.warn('Called show_user_images on ZetaPrints data');
                return _this3.show_user_images($panel);
            };

            this.data.show_colorpicker = function ($panel) {
                _Logger2.default.warn('Called show_colorpicker on ZetaPrints data');

                return _this3.show_colorpicker($panel);
            };

            this.data.hide_colorpicker = function ($panel) {
                _Logger2.default.warn('Called hide_colorpicker on ZetaPrints data');

                return _this3.hide_colorpicker($panel);
            };
        }

        /**
         * @private
         */

    }, {
        key: "_init_image_upload_buttons",
        value: function _init_image_upload_buttons() {
            var personalization_form_instance = this;
            (0, _jQueryLoader2.default)('div.button.choose-file').each(function () {
                new _ImageUpload2.default(this, personalization_form_instance);
            });
        }

        /**
         * @private
         */

    }, {
        key: "_register_window_load",
        value: function _register_window_load() {
            var personalization_form_instance = this;
            var zp = this.data;
            (0, _jQueryLoader2.default)(window).load(function (event) {
                if (zp.has_shapes /*&& window.place_all_shapes_for_page && shape_handler*/) {
                        _Feature2.default.instance().call(_Feature2.default.feature.inPreviewEdit, _InPreviewEditController2.default.precalculate_shapes, zp.template_details);

                        //Add all shapes only then there's no base image.
                        //Shapes will be added after first preview update then base image exists
                        //if (!has_image_zoomer)
                        //  place_all_shapes_for_page(zp.template_details.pages[zp.current_page].shapes,
                        //                            $product_image_box,
                        //                            shape_handler);
                    }

                (0, _jQueryLoader2.default)('.zetaprints-images-selector').each(function () {
                    new _ImageSelector2.default(this, personalization_form_instance);
                });
            });
        }

        /**
         * @private
         */

    }, {
        key: "_register_click_next_page",
        value: function _register_click_next_page() {
            var _this4 = this;

            _UiHelper2.default.instance().next_page_button.click(function () {
                var next_page_number = _this4.current_page + 1;

                (0, _jQueryLoader2.default)('div.zetaprints-image-tabs li img[rel="page-' + next_page_number + '"]').parent().click();

                return false;
            });
        }

        /**
         * @private
         */

    }, {
        key: "_register_click_edit_thumbnail",
        value: function _register_click_edit_thumbnail() {
            var personalization_form_instance = this;

            (0, _jQueryLoader2.default)('.image-edit-thumb').click(function () {
                var $target = (0, _jQueryLoader2.default)(this);
                var $input = $target.parent().children('input');

                personalization_form_instance._show_image_edit_dialog($input.attr('name').substring(12), $input.val(), $target.children('img'));

                return false;
            });
        }

        /**
         * @private
         */

    }, {
        key: "_register_input_field_events",
        value: function _register_input_field_events() {
            var personalization_form_instance = this;
            (0, _jQueryLoader2.default)('div.zetaprints-page-input-fields input.input-text').keypress(function (event) {
                if (event.keyCode === 13) {
                    return false;
                }
            });

            (0, _jQueryLoader2.default)('div.zetaprints-page-input-fields').find('.zetaprints-field').filter('textarea, :text').keyup({ zp: this }, function () {
                personalization_form_instance._text_fields_change_handle(this);
            }).filter('[readonly]').click(function (event) {
                personalization_form_instance._readonly_fields_click_handle(event, this);
            }).end().end().filter('select, :checkbox').change({ zp: this }, function () {
                personalization_form_instance._text_fields_change_handle(this);
            });
        }

        /**
         * @private
         */

    }, {
        key: "_register_delete_button_click",
        value: function _register_delete_button_click() {
            var personalization_form_instance = this;
            var zp = this.data;
            (0, _jQueryLoader2.default)('.zp-delete-button').click(function (event) {
                event.stopPropagation();
                event.preventDefault();

                if (confirm(delete_this_image_text)) {
                    var image_id = (0, _jQueryLoader2.default)(this).parents('td').children('input').val();
                    personalization_form_instance._delete_image(zp, image_id);
                }

                return false;
            });
        }

        /**
         * @private
         */

    }, {
        key: "_register_image_click",
        value: function _register_image_click() {
            var personalization_form_instance = this;
            (0, _jQueryLoader2.default)('input.zetaprints-images').click(function (event) {
                var $input = (0, _jQueryLoader2.default)(this);
                var page = personalization_form_instance.template_details.pages[personalization_form_instance.current_page];
                var field = page.images[$input.attr('name').substring(12)];

                var metadata = $input.data('metadata');
                if (metadata) {
                    metadata['img-id'] = $input.val();
                    _MetaDataHelper2.default.zp_set_metadata(field, metadata);
                } else {
                    _MetaDataHelper2.default.zp_clear_metadata(field);
                }
            });
        }

        /**
         * @private
         */

    }, {
        key: "_register_palette_change",
        value: function _register_palette_change() {
            var personalization_form_instance = this;
            var zp = this.data;

            (0, _jQueryLoader2.default)('.zetaprints-palettes .zetaprints-field').change(function () {
                var $this = (0, _jQueryLoader2.default)(this);

                var id = $this.attr('name').substring(12);

                var colour = $this.val();
                var pages = zp.template_details.pages;

                personalization_form_instance._map_pages(pages, function (page) {
                    var fields = pages[page].fields;
                    for (var field_name in fields) {
                        if (fields.hasOwnProperty(field_name)) {
                            var field = pages[page].fields[field_name];

                            if ('' + field.palette === '' + id) {
                                _MetaDataHelper2.default.zp_set_metadata(field, { 'col-f': colour });
                            }
                        }
                    }

                    var images = pages[page].images;
                    for (var image_name in images) {
                        if (images.hasOwnProperty(image_name)) {
                            var image = pages[page].images[image_name];

                            if ('' + image.palette === '' + id) {
                                _MetaDataHelper2.default.zp_set_metadata(image, { 'col-f': colour });
                            }
                        }
                    }
                });
            });
        }

        /**
         * @private
         */

    }, {
        key: "_register_in_dialog_lightbox",
        value: function _register_in_dialog_lightbox() {
            var personalization_form_instance = this;
            var data = personalization_form_instance.data;

            var lightbox_configuration = new _LightboxConfiguration2.default({
                'opacity': true,
                'overlayShow': false,
                'transitionIn': 'elastic',
                'changeSpeed': 200,
                'speedIn': 500,
                'speedOut': 500,
                'titleShow': false
            });
            lightbox_configuration.willShow = function () {
                var is_in_preview = false;

                if ((0, _jQueryLoader2.default)('#zp-update-preview-button').length) {
                    _Feature2.default.instance().call(_Feature2.default.feature.fancybox.updatePreview, _UpdatePreview2.default.fancybox_remove_update_preview_button, _jQueryLoader2.default);
                    // Delegate.delegate('fancybox_remove_update_preview_button', $);
                    is_in_preview = true;
                }

                if ((0, _jQueryLoader2.default)('#fancybox-resize').length) {
                    _Feature2.default.instance().call(_Feature2.default.feature.fancybox.resizing, _Resizing2.default.fancybox_resizing_hide);
                }

                _Feature2.default.instance().call(_Feature2.default.feature.fancybox.selectImage, _SelectImage2.default.fancybox_add_use_image_button, _jQueryLoader2.default, data, is_in_preview);
                // Delegate.delegate('fancybox_add_use_image_button', $, zp, is_in_preview);
            };
            lightbox_configuration.didShow = function () {
                _Feature2.default.instance().call(_Feature2.default.feature.fancybox.selectImage, _SelectImage2.default.fancybox_update_preview_button, _jQueryLoader2.default);
                // Delegate.delegate('fancybox_update_preview_button', $);
            };
            lightbox_configuration.didClose = function () {
                _Feature2.default.instance().call(_Feature2.default.feature.fancybox.selectImage, _SelectImage2.default.fancybox_remove_use_image_button, _jQueryLoader2.default);
                // Delegate.delegate('fancybox_remove_use_image_button', $);
            };

            var lightbox = new _Lightbox2.default();
            lightbox.register('a.in-dialog', lightbox_configuration);
        }

        /**
         * @private
         */

    }, {
        key: "_register_preview_lightbox",
        value: function _register_preview_lightbox() {
            var personalization_form_instance = this;
            var zp = personalization_form_instance.data;
            var in_preview_edit_controller = personalization_form_instance.in_preview_edit_controller;
            var shape_repository = personalization_form_instance.shape_repository;
            var lightbox_configuration = new _LightboxConfiguration2.default({
                'opacity': true,
                'overlayShow': false,
                'transitionIn': 'elastic',
                'speedIn': 500,
                'speedOut': 500,
                'titleShow': false,
                'hideOnContentClick': true,
                'showNavArrows': false
            });
            lightbox_configuration.willShow = function () {
                if ((0, _jQueryLoader2.default)('#zp-select-image-button').length) {
                    _Feature2.default.instance().call(_Feature2.default.feature.fancybox.selectImage, _SelectImage2.default.fancybox_remove_use_image_button, _jQueryLoader2.default);
                    // Delegate.delegate('fancybox_remove_use_image_button', $);
                }
                if ((0, _jQueryLoader2.default)('#zp-save-image-button').length) {
                    _Feature2.default.instance().call(_Feature2.default.feature.fancybox.saveImageButton, _SaveImageButton2.default.fancybox_remove_save_image_button, _jQueryLoader2.default);
                    // Delegate.delegate('fancybox_remove_save_image_button', $);
                }

                if (!zp.template_details.pages[zp.current_page].static) {
                    _Feature2.default.instance().call(_Feature2.default.feature.fancybox.updatePreview, _UpdatePreview2.default.fancybox_add_update_preview_button, _jQueryLoader2.default, zp);
                    // Delegate.delegate('fancybox_add_update_preview_button', $, zp);
                }
            };
            lightbox_configuration.didShow = function () {
                (0, _jQueryLoader2.default)('img#fancybox-img').attr('title', click_to_close_text);

                //!!! Needs to be implemented via zp object.
                //!!! Page state should be saved in page object.
                if (personalization_form_instance.has_changed_fields_on_page(zp.current_page)) {
                    (0, _jQueryLoader2.default)('#fancybox-outer').addClass('modified');
                } else {
                    (0, _jQueryLoader2.default)('#fancybox-outer').removeClass('modified');
                }

                _Feature2.default.instance().call(_Feature2.default.feature.fancybox.resizing, _Resizing2.default.fancybox_resizing_add, this);
                // Delegate.delegate('fancybox_resizing_add', this);

                _Feature2.default.instance().call(_Feature2.default.feature.fancybox.updatePreview, _UpdatePreview2.default.fancybox_update_update_preview_button, _jQueryLoader2.default, zp);
                // Delegate.delegate('fancybox_update_update_preview_button', $);


                if (false === (zp.has_shapes && _Feature2.default.instance().is_activated(_Feature2.default.feature.inPreviewEdit))) {
                    return;

                    // window.place_all_shapes_for_page => InPreviewEditController.place_all_shapes_for_page
                    // && window.highlight_shape => InPreviewEditController.highlight_shape
                    // && window.popup_field_by_name => InPreviewEditController.popup_field_by_name
                    // && window.fancy_shape_handler => InPreviewEditController.fancy_shape_handler
                }

                var $fancy_inner = (0, _jQueryLoader2.default)('div#fancybox-content');

                in_preview_edit_controller.place_all_shapes_for_page(shape_repository.get_shapes_of_current_page(), $fancy_inner, function (event) {
                    in_preview_edit_controller.fancy_shape_handler(event);
                });

                if (zp._shape_to_show) {
                    var shape = shape_repository.get_shape(zp.current_page, zp._shape_to_show);
                    zp._shape_to_show = undefined;

                    in_preview_edit_controller.highlight_shape(shape, $fancy_inner);

                    in_preview_edit_controller.popup_field_by_name(shape.name, undefined, shape._fields ? shape._fields : shape.name);
                }
            };
            lightbox_configuration.didClose = function () {
                _Feature2.default.instance().call(_Feature2.default.feature.fancybox.updatePreview, _UpdatePreview2.default.fancybox_remove_update_preview_button, _jQueryLoader2.default);
                // Delegate.delegate('fancybox_remove_update_preview_button', $);
                _Feature2.default.instance().call(_Feature2.default.feature.fancybox.resizing, _Resizing2.default.fancybox_resizing_hide);
            };
            lightbox_configuration.willClose = function () {
                if (zp.has_shapes && _Feature2.default.instance().is_activated(_Feature2.default.feature.inPreviewEdit)) {
                    (0, _jQueryLoader2.default)('div.zetaprints-field-shape', (0, _jQueryLoader2.default)('div#fancybox-content')).removeClass('highlighted');
                    in_preview_edit_controller.popdown_field_by_name();
                }
            };

            var lightbox = new _Lightbox2.default();
            lightbox.register('a.zetaprints-template-preview', lightbox_configuration);
        }

        /**
         * Add TemplateID parameter to the form
         *
         * @param {DataInterface} zp
         * @private
         */

    }, {
        key: "_add_template_id_parameter_to_form",
        value: function _add_template_id_parameter_to_form(zp) {
            var guid = zp.template_details.guid;
            (0, _jQueryLoader2.default)('<input type="hidden" name="zetaprints-TemplateID" value="' + guid + '" />').appendTo(_UiHelper2.default.instance().product_form);
        }

        /**
         * @param {DataInterface} zp
         * @param image_id
         * @private
         */

    }, {
        key: "_delete_image",
        value: function _delete_image(zp, image_id) {
            _jQueryLoader2.default.ajax({
                url: zp.url.image,
                type: 'POST',
                data: 'zetaprints-action=img-delete&zetaprints-ImageID=' + image_id,
                error: function error(request, status) {
                    alert(cant_delete_text + ': ' + status);
                },
                success: function success() {
                    (0, _jQueryLoader2.default)('input[value="' + image_id + '"]').parent().remove();
                }
            });
        }

        /**
         * @private
         */

    }, {
        key: "_patchProductAddToCart",
        value: function _patchProductAddToCart() {
            var _this5 = this;

            var zp = this.data;
            var preview_controller = this.preview_controller;

            if (_typeof(window.productAddToCartForm) === 'object') {
                if (typeof window.productAddToCartForm.submit === 'function') {
                    var func = window.productAddToCartForm.submit;

                    window.productAddToCartForm.submit = function (button, url) {
                        var text = window.notice_update_preview_after_data_changed,
                            pages = zp.template_details.pages,
                            changed_pages = _this5._page_get_changed(pages);

                        if (changed_pages.length > 0 && confirm(text)) {
                            preview_controller.update_preview(zp, changed_pages, false);
                            return false;
                        }

                        func(button, url);
                    };
                }
            }
        }

        /**
         * @param {Page[],object} pages
         * @param {function} callback
         * @private
         */

    }, {
        key: "_map_pages",
        value: function _map_pages(pages, callback) {
            if (typeof callback !== 'function') {
                throw new TypeError('Argument "callback" must be a function');
            }
            for (var pageIdentifier in pages) {
                if (pages.hasOwnProperty(pageIdentifier)) {
                    callback(pageIdentifier);
                }
            }
        }

        /**
         * @param {HTMLElement} product_image_element
         * @return {boolean}
         * @private
         */

    }, {
        key: "_detect_initial_has_image_zoomer",
        value: function _detect_initial_has_image_zoomer(product_image_element) {
            return !!((0, _jQueryLoader2.default)(product_image_element).hasClass('product-image-zoom') || (0, _jQueryLoader2.default)(product_image_element).parent().hasClass('product-image-zoom'));
        }

        /**
         * @private
         */

    }, {
        key: "_prepareTextFieldEditor",
        value: function _prepareTextFieldEditor() {
            if (!_jQueryLoader2.default.fn.text_field_editor) {
                return;
            }

            var zp = this.data;
            (0, _jQueryLoader2.default)('.zetaprints-page-input-fields .zetaprints-field').filter(':input:not([type="hidden"])').each(function () {
                var $text_field = (0, _jQueryLoader2.default)(this);
                var page = $text_field.parents('.zetaprints-page-input-fields').attr('id').substring(18);

                var field = zp.template_details.pages[page].fields[$text_field.attr('name').substring(12)];

                var cached_value = _MetaDataHelper2.default.zp_get_metadata(field, 'col-f', '');

                //Remove metadata values, so they won't be used in update preview requests
                //by default
                _MetaDataHelper2.default.zp_set_metadata(field, 'col-f', undefined);

                if (field['colour-picker'] !== 'RGB') {
                    return;
                }

                var $button_container = $text_field.parents('dl').children('dt');

                $text_field.text_field_editor({
                    button_parent: $button_container,
                    colour: cached_value,

                    change: function change(data) {
                        var metadata = {
                            'col-f': data.color
                        };

                        _MetaDataHelper2.default.zp_set_metadata(field, metadata);
                    }
                });
            });
        }

        /**
         * @private
         */

    }, {
        key: "_prepareQtip",
        value: function _prepareQtip() {
            if (_jQueryLoader2.default.fn.qtip) {
                (0, _jQueryLoader2.default)('div.zetaprints-page-input-fields input[title], div.zetaprints-page-input-fields textarea[title]').qtip({
                    position: { corner: { target: 'bottomLeft' } },
                    show: { delay: 1, solo: true, when: { event: 'focus' } },
                    hide: { when: { event: 'unfocus' } }
                });

                (0, _jQueryLoader2.default)('div.zetaprints-page-stock-images select[title]').qtip({
                    position: { corner: { target: 'topLeft' }, adjust: { y: -30 } },
                    show: { delay: 1, solo: true, when: { event: 'focus' } },
                    hide: { when: { event: 'unfocus' } }
                });
            }
        }

        /**
         * Adds the hidden form fields
         *
         * @param {TemplateDetail} template_details
         * @private
         */

    }, {
        key: "_add_hidden_form_fields",
        value: function _add_hidden_form_fields(template_details) {
            var product_form = _UiHelper2.default.instance().product_form;

            var value = this.export_previews_to_string(template_details);
            product_form.append((0, _jQueryLoader2.default)('<input type="hidden" name="zetaprints-previews" value="' + value + '" />'));

            var guid = template_details.guid;
            product_form.append((0, _jQueryLoader2.default)('<input type="hidden" name="zetaprints-TemplateID" value="' + guid + '" />'));
        }

        /**
         * Iterate over all image fields in template details and if image field has a value then mark it as EDITED
         *
         * @param {Object.<string, Page>} pages
         * @private
         */

    }, {
        key: "_prepareImageFields",
        value: function _prepareImageFields(pages) {
            //Iterate over all image fields in template details...
            for (var page in pages) {
                if (!pages.hasOwnProperty(page)) {
                    continue;
                }
                var images = pages[page].images;
                for (var name in images) {
                    //... and if image field has a value then...
                    if (images.hasOwnProperty(name) && images[name].value) {
                        //... mark it as EDITED
                        (0, _jQueryLoader2.default)('#stock-images-page-' + page).children('[title="' + name + '"]').removeClass('no-value');
                    }
                }
            }
        }

        /**
         * @param pages
         * @private
         */

    }, {
        key: "_prepareComboBox",
        value: function _prepareComboBox(pages) {
            //Get all dropdown text fields
            var $selects = (0, _jQueryLoader2.default)('.zetaprints-page-input-fields').find('select.zetaprints-field');

            //Iterate over all text fields in template details...
            for (var page in pages) {
                if (pages.hasOwnProperty(page)) {
                    var fields = pages[page].fields;
                    for (var name in fields) {
                        //... and if text field has combobox flag then...
                        if (fields.hasOwnProperty(name) && fields[name].combobox) {
                            //convert relevant DOM element into a combobox
                            $selects.filter('[name="zetaprints-_' + name + '"]').wrap('<div class="zetaprints-text-field-wrapper" />').combobox();
                        }
                    }
                }
            }
        }

        /**
         * @private
         */

    }, {
        key: "_enlarge_editor_click_handler",
        value: function _enlarge_editor_click_handler() {
            var current_page = this.data.current_page;

            if ((0, _jQueryLoader2.default)('#fancybox-wrap').is(':visible') || (0, _jQueryLoader2.default)('.fancybox-wrap').is(':visible')) {
                _jQueryLoader2.default.fancybox.close();
            } else {
                var preview_image_page = document.getElementById('preview-image-page-' + current_page);
                if (preview_image_page) {
                    _Logger2.default.debug("[Form] Trigger click on Preview Image Page for current page " + current_page);
                    (0, _jQueryLoader2.default)(preview_image_page).click();
                } else {
                    _Logger2.default.warn("[Form] Preview Image Page for current page " + current_page + " not found");
                }
            }
        }

        /**
         * @param {TemplateDetail} details
         * @return {boolean}
         * @private
         */

    }, {
        key: "_has_updated_pages",
        value: function _has_updated_pages(details) {
            var page_number = void 0;
            var pages = details.pages;
            for (page_number in pages) {
                if (pages.hasOwnProperty(page_number) && details.pages[page_number]['updated-preview-image']) {
                    return true;
                }
            }

            return false;
        }

        /**
         * @param pages
         * @return {Array}
         * @private
         */

    }, {
        key: "_page_get_changed",
        value: function _page_get_changed(pages) {
            var n = void 0;
            var changed_pages = [];

            for (n in pages) {
                if (pages.hasOwnProperty(n) && this.is_user_data_changed(pages[n])) {
                    changed_pages[changed_pages.length] = n;
                }
            }

            return changed_pages;
        }

        /**
         * @param {string} s
         * @return {string}
         * @private
         */

    }, {
        key: "_prepare_string_for_php",
        value: function _prepare_string_for_php(s) {
            return s.replace(/\./g, '\x0A');
        }

        /**
         * @param data
         * @return {*}
         * @private
         */

    }, {
        key: "_prepare_post_data_for_php",
        value: function _prepare_post_data_for_php(data) {
            for (var i = 0, l = data.length; i < l; i++) {
                data[i].name = this._prepare_string_for_php(data[i].name);
            }

            return data;
        }

        /**
         *
         * @param {Page} page
         * @param {*[]} data
         * @return {*[]}
         */

    }, {
        key: "_prepare_metadata_from_page",
        value: function _prepare_metadata_from_page(page, data) {
            var metadata = void 0;
            var name = void 0;
            var l = data.length;

            var images = page.images;
            for (name in images) {
                if (images.hasOwnProperty(name) && (metadata = _MetaDataHelper2.default.zp_convert_metadata_to_string(images[name]))) {
                    data[l++] = {
                        name: 'zetaprints-*#' + this._prepare_string_for_php(name),
                        value: metadata
                    };
                }
            }
            var fields = page.fields;
            for (name in fields) {
                if (fields.hasOwnProperty(name) && (metadata = _MetaDataHelper2.default.zp_convert_metadata_to_string(fields[name]))) {
                    data[l++] = {
                        name: 'zetaprints-*_' + this._prepare_string_for_php(name),
                        value: metadata
                    };
                }
            }

            return data;
        }

        /**
         * @param {number} page_number
         * @return {*|jQuery}
         * @private
         */

    }, {
        key: "_serialize_fields_for_page",
        value: function _serialize_fields_for_page(page_number) {
            return (0, _jQueryLoader2.default)('#input-fields-page-' + page_number + ', #stock-images-page-' + page_number).find('.zetaprints-field').filter(':text, textarea, :checked, select, [type="hidden"]').serializeArray();
        }

        /**
         *
         * @param {number} page_number
         * @return {*[]}
         */

    }, {
        key: "_prepare_metadata_from_page_number",
        value: function _prepare_metadata_from_page_number(page_number) {
            var page = this.data.template_details.pages[page_number];

            return this._prepare_metadata_from_page(page, this._prepare_post_data_for_php(this._serialize_fields_for_page(page_number)));
        }

        /**
         * Magento 1.9 and greater adds its own ID (but not in RWD theme) Zetaprint's ID is left for compatibility with old
         * installations and RWD-based themes
         *
         * @return {*|jQuery|HTMLElement}
         * @private
         */

    }, {
        key: "_get_add_to_cart_button",
        value: function _get_add_to_cart_button() {
            return (0, _jQueryLoader2.default)('#product-addtocart-button, #zetaprints-add-to-cart-button');
        }

        /**
         * @param {string} image_name
         * @param {string} image_guid
         * @param {jQuery|HTMLElement} $thumb
         * @private
         */

    }, {
        key: "_show_image_edit_dialog",
        value: function _show_image_edit_dialog(image_name, image_guid, $thumb) {
            this.image_editor.show(decodeURI(image_name), image_guid, $thumb);
        }

        /**
         * @param {Shape} shape
         * @param state
         * @return {*}
         * @private
         */

    }, {
        key: "_shape_update_state",
        value: function _shape_update_state(shape, state) {
            if (state) {
                return this.in_preview_edit_controller.mark_shape_as_edited(shape);
            }
            var names = shape.name.split('; ');

            if (names.length === 1) {
                return this.in_preview_edit_controller.unmark_shape_as_edited(shape);
            }

            var $fields = (0, _jQueryLoader2.default)('#input-fields-page-' + zp.current_page).find('input, textarea, select').filter('textarea, select, :text, :checked');

            var $images = (0, _jQueryLoader2.default)('#stock-images-page-' + zp.current_page).find('input').filter(':checked');

            for (var i = 0; i < names.length; i++) {
                var name = names[i];

                if ($fields.filter('[name="zetaprints-_' + name + '"]').val() || $images.filter('[name="zetaprints-#' + name + '"]').length) {
                    return;
                }
            }

            this.in_preview_edit_controller.unmark_shape_as_edited(shape);
        }

        /**
         * @param {jQuery|HTMLElement} element
         */

    }, {
        key: "_text_fields_change_handle",
        value: function _text_fields_change_handle(element) {
            var $element = (0, _jQueryLoader2.default)(element);
            var name = $element.attr('name').substring(12);
            var value = $element.is(':checkbox') ? $element.is(':checked') : $element.val();
            var state = !!value;
            var zp = this.data;
            var page = zp.template_details.pages[zp.current_page];
            var field = page.fields[name];
            var product_form = this.product_form;

            if (field) {
                field.value = value;

                if (typeof field.previous_value !== 'undefined') {
                    if (field.previous_value !== value) {
                        product_form.addClass('zp-user-data-changed');
                    } else {
                        product_form.removeClass('zp-user-data-changed');
                    }
                }
            }

            if (state) {
                (0, _jQueryLoader2.default)('#fancybox-outer').addClass('modified');
                product_form.removeClass('zp-not-modified');
            } else {
                (0, _jQueryLoader2.default)('#fancybox-outer').removeClass('modified');
            }

            if (zp.has_shapes && _Feature2.default.instance().is_activated(_Feature2.default.feature.inPreviewEdit)) {
                var shape = this.in_preview_edit_controller.get_shape_by_name(name, page.shapes);

                if (shape) {
                    this._shape_update_state(shape, state);
                }
            }

            _Feature2.default.instance().call(_Feature2.default.feature.dataset, _Dataset2.default.zp_dataset_update_state, zp, name, false);
            // Delegate.delegate('zp_dataset_update_state', zp, name, false);
        }

        /**
         *
         * @param {Event} event
         * @param {HTMLInputElement} element
         */

    }, {
        key: "_readonly_fields_click_handle",
        value: function _readonly_fields_click_handle(event, element) {
            if (element.nodeName !== 'INPUT') {
                throw new TypeError('Argument "element" must be a HTMLInputElement');
            }
            var name = (0, _jQueryLoader2.default)(this).attr('name').substring(12);

            if (this.data.template_details.pages[zp.current_page].fields[name].dataset) {
                (0, _jQueryLoader2.default)('#zp-dataset-button').click();
            } else {
                (0, _jQueryLoader2.default)(element).unbind(event).val('').prop('readonly', false);

                //Workaround for IE browser.
                //It moves cursor to the end of input field after focus.
                if (element.createTextRange) {
                    var range = element.createTextRange();

                    range.collapse(true);
                    range.move('character', 0);
                    range.select();
                }
            }
        }
    }, {
        key: "template_details",
        get: function get() {
            return this.data.template_details;
        }

        /**
         * @return {number}
         */

    }, {
        key: "current_page",
        get: function get() {
            return this.data.current_page;
        }

        /**
         * @return {boolean}
         */

    }, {
        key: "is_fields_hidden",
        get: function get() {
            return this.data.is_fields_hidden;
        }

        /**
         * @return {Array}
         */

    }, {
        key: "preview_sharing_links",
        get: function get() {
            return this.data.preview_sharing_links;
        }

        /**
         * @return {boolean}
         */

    }, {
        key: "is_personalization_step",
        get: function get() {
            return this.data.is_personalization_step;
        }

        /**
         * @return {boolean}
         */

    }, {
        key: "update_first_preview_on_load",
        get: function get() {
            return this.data.update_first_preview_on_load;
        }

        /**
         * @return {boolean}
         */

    }, {
        key: "preserve_fields",
        get: function get() {
            return this.data.preserve_fields;
        }

        /**
         * @return {boolean}
         */

    }, {
        key: "has_shapes",
        get: function get() {
            return this.data.has_shapes;
        }

        /**
         * @return {string}
         */

    }, {
        key: "w2p_url",
        get: function get() {
            return this.data.w2p_url;
        }

        /**
         * @return {Array}
         */

    }, {
        key: "options",
        get: function get() {
            return this.data.options;
        }

        /**
         * @return {object}
         */

    }, {
        key: "url",
        get: function get() {
            return this.data.url;
        }

        /**
         * @return {*}
         */

    }, {
        key: "image_edit",
        get: function get() {
            return this.data.image_edit;
        }

        /**
         * @return {*}
         */

    }, {
        key: "product_form",
        get: function get() {
            return _UiHelper2.default.instance().product_form;
        }

        /**
         * @return {boolean}
         */

    }, {
        key: "has_image_zoomer",
        get: function get() {
            return !!this._has_image_zoomer;
        }
    }]);

    return PersonalizationForm;
}();

exports.default = PersonalizationForm;


PersonalizationForm.Events = {
    UPLOAD_COMPLETE: 'personalization_form:upload_complete'
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery, jQuery) {

/**
 * AJAX Upload ( http://valums.com/ajax-upload/ )
 * Copyright (c) Andris Valums
 * Licensed under the MIT license ( http://valums.com/mit-license/ )
 * Thanks to Gary Haran, David Mark, Corey Burns and others for contributions
 */
(function () {
    /* global window */
    /* jslint browser: true, devel: true, undef: true, nomen: true, bitwise: true, regexp: true, newcap: true, immed: true */

    /**
     * Wrapper for FireBug's console.log
     */
    function log() {
        if (typeof console != 'undefined' && typeof console.log == 'function') {
            Array.prototype.unshift.call(arguments, '[Ajax Upload]');
            console.log(Array.prototype.join.call(arguments, ' '));
        }
    }

    /**
     * Attaches event to a dom element.
     * @param {Element} el
     * @param type event name
     * @param fn callback This refers to the passed element
     */
    function addEvent(el, type, fn) {
        if (el.addEventListener) {
            el.addEventListener(type, fn, false);
        } else if (el.attachEvent) {
            el.attachEvent('on' + type, function () {
                fn.call(el);
            });
        } else {
            throw new Error('not supported or DOM not loaded');
        }
    }

    /**
     * Attaches resize event to a window, limiting
     * number of event fired. Fires only when encounteres
     * delay of 100 after series of events.
     *
     * Some browsers fire event multiple times when resizing
     * http://www.quirksmode.org/dom/events/resize.html
     *
     * @param fn callback This refers to the passed element
     */
    function addResizeEvent(fn) {
        var timeout;

        addEvent(window, 'resize', function () {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(fn, 100);
        });
    }

    // Needs more testing, will be rewriten for next version
    // getOffset function copied from jQuery lib (http://jquery.com/)
    if (document.documentElement.getBoundingClientRect) {
        // Get Offset using getBoundingClientRect
        // http://ejohn.org/blog/getboundingclientrect-is-awesome/
        var getOffset = function getOffset(el) {
            var box = el.getBoundingClientRect();
            var doc = el.ownerDocument;
            var body = doc.body;
            var docElem = doc.documentElement; // for ie
            var clientTop = docElem.clientTop || body.clientTop || 0;
            var clientLeft = docElem.clientLeft || body.clientLeft || 0;

            // In Internet Explorer 7 getBoundingClientRect property is treated as physical,
            // while others are logical. Make all logical, like in IE8.
            var zoom = 1;
            if (body.getBoundingClientRect) {
                var bound = body.getBoundingClientRect();
                zoom = (bound.right - bound.left) / body.clientWidth;
            }

            if (zoom > 1) {
                clientTop = 0;
                clientLeft = 0;
            }

            var top = box.top / zoom + (window.pageYOffset || docElem && docElem.scrollTop / zoom || body.scrollTop / zoom) - clientTop,
                left = box.left / zoom + (window.pageXOffset || docElem && docElem.scrollLeft / zoom || body.scrollLeft / zoom) - clientLeft;

            return {
                top: top,
                left: left
            };
        };
    } else {
        // Get offset adding all offsets
        var getOffset = function getOffset(el) {
            var top = 0,
                left = 0;
            do {
                top += el.offsetTop || 0;
                left += el.offsetLeft || 0;
                el = el.offsetParent;
            } while (el);

            return {
                left: left,
                top: top
            };
        };
    }

    /**
     * Returns left, top, right and bottom properties describing the border-box,
     * in pixels, with the top-left relative to the body
     * @param {Element} el
     * @return {Object} Contains left, top, right,bottom
     */
    function getBox(el) {
        var left, right, top, bottom;
        var offset = getOffset(el);
        left = offset.left;
        top = offset.top;

        right = left + el.offsetWidth;
        bottom = top + el.offsetHeight;

        return {
            left: left,
            right: right,
            top: top,
            bottom: bottom
        };
    }

    /**
     * Helper that takes object literal
     * and add all properties to element.style
     * @param {Element} el
     * @param {Object} styles
     */
    function addStyles(el, styles) {
        for (var name in styles) {
            if (styles.hasOwnProperty(name)) {
                el.style[name] = styles[name];
            }
        }
    }

    /**
     * Function places an absolutely positioned
     * element on top of the specified element
     * copying position and dimentions.
     * @param {Element} from
     * @param {Element} to
     */
    function copyLayout(from, to) {
        var box = getBox(from);

        addStyles(to, {
            position: 'absolute',
            left: box.left + 'px',
            top: box.top + 'px',
            width: from.offsetWidth + 'px',
            height: from.offsetHeight + 'px'
        });
    }

    /**
     * Creates and returns element from html chunk
     * Uses innerHTML to create an element
     */
    var toElement = function () {
        var div = document.createElement('div');
        return function (html) {
            div.innerHTML = html;
            var el = div.firstChild;
            return div.removeChild(el);
        };
    }();

    /**
     * Function generates unique id
     * @return unique id
     */
    var getUID = function () {
        var id = 0;
        return function () {
            return 'ValumsAjaxUpload' + id++;
        };
    }();

    /**
     * Get file name from path
     * @param {String} file path to file
     * @return filename
     */
    function fileFromPath(file) {
        return file.replace(/.*(\/|\\)/, "");
    }

    /**
     * Get file extension lowercase
     * @param {String} file name
     * @return file extenstion
     */
    function getExt(file) {
        return -1 !== file.indexOf('.') ? file.replace(/.*[.]/, '') : '';
    }

    function hasClass(el, name) {
        var re = new RegExp('\\b' + name + '\\b');
        return re.test(el.className);
    }

    function addClass(el, name) {
        if (!hasClass(el, name)) {
            el.className += ' ' + name;
        }
    }

    function removeClass(el, name) {
        var re = new RegExp('\\b' + name + '\\b');
        el.className = el.className.replace(re, '');
    }

    function removeNode(el) {
        el.parentNode.removeChild(el);
    }

    /**
     * Easy styling and uploading
     * @constructor
     * @param button An element you want convert to
     * upload button. Tested dimentions up to 500x500px
     * @param {Object} options See defaults below.
     */
    window.AjaxUpload = function (button, options) {
        this._settings = {
            // Location of the server-side upload script
            action: 'upload.php',
            // File upload name
            name: 'userfile',
            // Additional data to send
            data: {},
            // Submit file as soon as it's selected
            autoSubmit: true,
            // The type of data that you're expecting back from the server.
            // html and xml are detected automatically.
            // Only useful when you are using json data as a response.
            // Set to "json" in that case.
            responseType: false,
            // Class applied to button when mouse is hovered
            hoverClass: 'hover',
            // Class applied to button when AU is disabled
            disabledClass: 'disabled',
            // When user selects a file, useful with autoSubmit disabled
            // You can return false to cancel upload
            onChange: function onChange(file, extension) {},
            // Callback to fire before file is uploaded
            // You can return false to cancel upload
            onSubmit: function onSubmit(file, extension) {},
            // Fired when file upload is completed
            // WARNING! DO NOT USE "FALSE" STRING AS A RESPONSE!
            onComplete: function onComplete(file, response) {}
        };

        // Merge the users options with our defaults
        for (var i in options) {
            if (options.hasOwnProperty(i)) {
                this._settings[i] = options[i];
            }
        }

        // button isn't necessary a dom element
        if (button.jquery) {
            // jQuery object was passed
            button = button[0];
        } else if (typeof button == "string") {
            if (/^#.*/.test(button)) {
                // If jQuery user passes #elementId don't break it
                button = button.slice(1);
            }

            button = document.getElementById(button);
        }

        if (!button || button.nodeType !== 1) {
            throw new Error("Please make sure that you're passing a valid element");
        }

        if (button.nodeName.toUpperCase() == 'A') {
            // disable link
            addEvent(button, 'click', function (e) {
                if (e && e.preventDefault) {
                    e.preventDefault();
                } else if (window.event) {
                    window.event.returnValue = false;
                }
            });
        }

        // DOM element
        this._button = button;
        // DOM element
        this._input = null;
        // If disabled clicking on button won't do anything
        this._disabled = false;

        // if the button was disabled before refresh if will remain
        // disabled in FireFox, let's fix it
        this.enable();

        this._rerouteClicks();
    };

    // Custom events trigger by the uploaded
    AjaxUpload.Events = {
        UPLOAD_COMPLETE: 'ajax_upload:complete'
    };

    // assigning methods to our class
    AjaxUpload.prototype = {
        setData: function setData(data) {
            this._settings.data = data;
        },
        disable: function disable() {
            addClass(this._button, this._settings.disabledClass);
            this._disabled = true;

            var nodeName = this._button.nodeName.toUpperCase();
            if (nodeName == 'INPUT' || nodeName == 'BUTTON') {
                this._button.setAttribute('disabled', 'disabled');
            }

            // hide input
            if (this._input) {
                // We use visibility instead of display to fix problem with Safari 4
                // The problem is that the value of input doesn't change if it
                // has display none when user selects a file
                this._input.parentNode.style.visibility = 'hidden';
            }
        },
        enable: function enable() {
            removeClass(this._button, this._settings.disabledClass);
            this._button.removeAttribute('disabled');
            this._disabled = false;
        },
        /**
         * Creates invisible file input
         * that will hover above the button
         * <div><input type='file' /></div>
         */
        _createInput: function _createInput() {
            var self = this;

            var input = document.createElement("input");
            input.setAttribute('type', 'file');
            input.setAttribute('name', this._settings.name);

            addStyles(input, {
                'position': 'absolute',
                // in Opera only 'browse' button
                // is clickable and it is located at
                // the right side of the input
                'right': 0,
                'margin': 0,
                'padding': 0,
                'fontSize': '480px',
                'cursor': 'pointer'
            });

            var div = document.createElement("div");
            addStyles(div, {
                'display': 'block',
                'position': 'absolute',
                'overflow': 'hidden',
                'margin': 0,
                'padding': 0,
                'opacity': 0,
                // Make sure browse button is in the right side
                // in Internet Explorer
                'direction': 'ltr',
                //Max zIndex supported by Opera 9.0-9.2
                'zIndex': 2147483583
            });

            // Make sure that element opacity exists.
            // Otherwise use IE filter
            if (div.style.opacity !== "0") {
                if (typeof div.filters == 'undefined') {
                    throw new Error('Opacity not supported by the browser');
                }
                div.style.filter = "alpha(opacity=0)";
            }

            addEvent(input, 'change', function () {

                if (!input || input.value === '') {
                    return;
                }

                // Get filename from input, required
                // as some browsers have path instead of it
                var file = fileFromPath(input.value);

                if (false === self._settings.onChange.call(self, file, getExt(file))) {
                    self._clearInput();
                    return;
                }

                // Submit form when value is changed
                if (self._settings.autoSubmit) {
                    self.submit();
                }
            });

            addEvent(input, 'mouseover', function () {
                addClass(self._button, self._settings.hoverClass);
            });

            addEvent(input, 'mouseout', function () {
                removeClass(self._button, self._settings.hoverClass);

                // We use visibility instead of display to fix problem with Safari 4
                // The problem is that the value of input doesn't change if it
                // has display none when user selects a file
                if (input.parentNode) {
                    input.parentNode.style.visibility = 'hidden';
                }
            });

            div.appendChild(input);
            document.body.appendChild(div);

            this._input = input;
        },
        _clearInput: function _clearInput() {
            if (!this._input) {
                return;
            }

            // this._input.value = ''; Doesn't work in IE6
            removeNode(this._input.parentNode);
            this._input = null;
            this._createInput();

            removeClass(this._button, this._settings.hoverClass);
        },
        /**
         * Function makes sure that when user clicks upload button,
         * the this._input is clicked instead
         */
        _rerouteClicks: function _rerouteClicks() {
            var self = this;

            // IE will later display 'access denied' error
            // if you use using self._input.click()
            // other browsers just ignore click()

            addEvent(self._button, 'mouseover', function () {
                if (self._disabled) {
                    return;
                }

                if (!self._input) {
                    self._createInput();
                }

                var div = self._input.parentNode;
                copyLayout(self._button, div);
                div.style.visibility = 'visible';
            });

            // commented because we now hide input on mouseleave
            /**
             * When the window is resized the elements
             * can be misaligned if button position depends
             * on window size
             */
            //addResizeEvent(function(){
            //    if (self._input){
            //        copyLayout(self._button, self._input.parentNode);
            //    }
            //});
        },
        /**
         * Creates iframe with unique name
         * @return {Element} iframe
         */
        _createIframe: function _createIframe() {
            // We can't use getTime, because it sometimes return
            // same value in safari :(
            var id = getUID();

            // We can't use following code as the name attribute
            // won't be properly registered in IE6, and new window
            // on form submit will open
            // var iframe = document.createElement('iframe');
            // iframe.setAttribute('name', id);

            var iframe = toElement('<iframe src="javascript:false;" name="' + id + '" />');
            // src="javascript:false; was added
            // because it possibly removes ie6 prompt
            // "This page contains both secure and nonsecure items"
            // Anyway, it doesn't do any harm.
            iframe.setAttribute('id', id);

            iframe.style.display = 'none';
            document.body.appendChild(iframe);

            return iframe;
        },
        /**
         * Creates form, that will be submitted to iframe
         * @param {Element} iframe Where to submit
         * @return {Element} form
         */
        _createForm: function _createForm(iframe) {
            var settings = this._settings;

            // We can't use the following code in IE6
            // var form = document.createElement('form');
            // form.setAttribute('method', 'post');
            // form.setAttribute('enctype', 'multipart/form-data');
            // Because in this case file won't be attached to request
            var form = toElement('<form method="post" enctype="multipart/form-data"></form>');

            form.setAttribute('action', settings.action);
            form.setAttribute('target', iframe.name);
            form.style.display = 'none';
            document.body.appendChild(form);

            // Create hidden input element for each data key
            for (var prop in settings.data) {
                if (settings.data.hasOwnProperty(prop)) {
                    var el = document.createElement("input");
                    el.setAttribute('type', 'hidden');
                    el.setAttribute('name', prop);
                    el.setAttribute('value', settings.data[prop]);
                    form.appendChild(el);
                }
            }
            return form;
        },
        /**
         * Gets response from iframe and fires onComplete event when ready
         * @param iframe
         * @param file Filename to use in onComplete callback
         */
        _getResponse: function _getResponse(iframe, file) {
            // getting response
            var toDeleteFlag = false,
                self = this,
                settings = this._settings;

            addEvent(iframe, 'load', function () {

                if ( // For Safari
                iframe.src == "javascript:'%3Chtml%3E%3C/html%3E';" ||
                // For FF, IE
                iframe.src == "javascript:'<html></html>';") {
                    // First time around, do not delete.
                    // We reload to blank page, so that reloading main page
                    // does not re-submit the post.

                    if (toDeleteFlag) {
                        // Fix busy state in FF3
                        setTimeout(function () {
                            removeNode(iframe);
                        }, 0);
                    }

                    return;
                }

                var doc = iframe.contentDocument ? iframe.contentDocument : window.frames[iframe.id].document;

                // fixing Opera 9.26,10.00
                if (doc.readyState && doc.readyState != 'complete') {
                    // Opera fires load event multiple times
                    // Even when the DOM is not ready yet
                    // this fix should not affect other browsers
                    return;
                }

                // fixing Opera 9.64
                if (doc.body && doc.body.innerHTML == "false") {
                    // In Opera 9.64 event was fired second time
                    // when body.innerHTML changed from false
                    // to server response approx. after 1 sec
                    return;
                }

                var response;

                if (doc.XMLDocument) {
                    // response is a xml document Internet Explorer property
                    response = doc.XMLDocument;
                } else if (doc.body) {
                    // response is html document or plain text
                    response = doc.body.innerHTML;

                    if (settings.responseType && settings.responseType.toLowerCase() == 'json') {
                        // If the document was sent as 'application/javascript' or
                        // 'text/javascript', then the browser wraps the text in a <pre>
                        // tag and performs html encoding on the contents.  In this case,
                        // we need to pull the original text content from the text node's
                        // nodeValue property to retrieve the unmangled content.
                        // Note that IE6 only understands text/html
                        if (doc.body.firstChild && doc.body.firstChild.nodeName.toUpperCase() == 'PRE') {
                            response = doc.body.firstChild.firstChild.nodeValue;
                        }

                        if (response) {
                            response = eval("(" + response + ")");
                        } else {
                            response = {};
                        }
                    }
                } else {
                    // response is a xml document
                    response = doc;
                }

                if (__webpack_provided_window_dot_jQuery) {
                    jQuery(document).trigger(AjaxUpload.Events.UPLOAD_COMPLETE, {
                        instance: self,
                        file: file,
                        response: response,
                        iframe: iframe
                    });
                }
                settings.onComplete.call(self, file, response);

                // Reload blank page, so that reloading main page
                // does not re-submit the post. Also, remember to
                // delete the frame
                toDeleteFlag = true;

                // Fix IE mixed content issue
                iframe.src = "javascript:'<html></html>';";
            });
        },
        /**
         * Upload file contained in this._input
         */
        submit: function submit() {
            var self = this,
                settings = this._settings;

            if (!this._input || this._input.value === '') {
                return;
            }

            var file = fileFromPath(this._input.value);

            // user returned false to cancel upload
            if (false === settings.onSubmit.call(this, file, getExt(file))) {
                this._clearInput();
                return;
            }

            // sending request
            var iframe = this._createIframe();
            var form = this._createForm(iframe);

            this._settings._iframe = iframe;

            // assuming following structure
            // div -> input type='file'
            removeNode(this._input.parentNode);
            removeClass(self._button, self._settings.hoverClass);

            form.appendChild(this._input);

            form.submit();

            // request set, clean up
            removeNode(form);
            form = null;
            removeNode(this._input);
            this._input = null;

            // Get response from iframe and fire onComplete event when ready
            this._getResponse(iframe, file);

            // get ready for next request
            this._createInput();
        },

        cancel: function cancel() {
            this._settings._iframe.src = "javascript:'<html></html>';";
        }
    };
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(0)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
 * jQuery UI Touch Punch 0.2.3w - WPXP Edition
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * WPXP Edition - by Manuel Gumpinger
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function ($) {

  // Detect touch support
  $.support.touch = 'ontouchend' in document;

  // Ignore browsers without touch support
  if (!$.support.touch) {
    return;
  }

  var mouseProto = $.ui.mouse.prototype,
      _mouseInit = mouseProto._mouseInit,
      _mouseDestroy = mouseProto._mouseDestroy,
      startX, startY,
      touchHandled,
      touchMoved;

  /**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */
  function simulateMouseEvent (event, simulatedType) {

    // Ignore multi-touch events
    if (event.originalEvent.touches.length > 1) {
      return;
    }

    var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents');
    
    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(
      simulatedType,    // type
      true,             // bubbles                    
      true,             // cancelable                 
      window,           // view                       
      1,                // detail                     
      touch.screenX,    // screenX                    
      touch.screenY,    // screenY                    
      touch.clientX,    // clientX                    
      touch.clientY,    // clientY                    
      false,            // ctrlKey                    
      false,            // altKey                     
      false,            // shiftKey                   
      false,            // metaKey                    
      0,                // button                     
      null              // relatedTarget              
    );

    // Check if element is an input, a textarea or a paragraph
    if ($(touch.target).is("input") || $(touch.target).is("textarea") || $(touch.target).is("p")) {
        event.stopPropagation();
    } else {
        event.preventDefault();
       // Dispatch the simulated event to the target element
       event.target.dispatchEvent(simulatedEvent);
    }

  }

  /**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */
  mouseProto._touchStart = function (event) {

    var self = this;

    // Ignore the event if another widget is already being handled
    if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
      return;
    }

    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;

    // Track movement to determine if interaction was a click
    touchMoved = false;

    // Track starting event
    startX = event.originalEvent.touches[0].screenX;
    startY = event.originalEvent.touches[0].screenY;

    // Simulate the mouseover event
    simulateMouseEvent(event, 'mouseover');

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');

    // Simulate the mousedown event
    simulateMouseEvent(event, 'mousedown');
  };

  /**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */
  mouseProto._touchMove = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Ignore event if no change in position from starting event
    var endX = event.originalEvent.touches[0].screenX,
        endY = event.originalEvent.touches[0].screenY;

    if( startX >= endX-2 && startX <= endX+2 && startY >= endY-2 && startY <= endY+2) {
      touchMoved = false;
      return;
    }

    // Interaction was not a click
    touchMoved = true;

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
  };

  /**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */
  mouseProto._touchEnd = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Simulate the mouseup event
    simulateMouseEvent(event, 'mouseup');

    // Simulate the mouseout event
    simulateMouseEvent(event, 'mouseout');

    // If the touch interaction did not move, it should trigger a click
    if (!touchMoved) {

      // Simulate the click event
      simulateMouseEvent(event, 'click');
    }

    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
  };

  /**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */
  mouseProto._mouseInit = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.bind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
  };

  /**
   * Remove the touch event handlers
   */
  mouseProto._mouseDestroy = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.unbind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse destroy method
    _mouseDestroy.call(self);
  };

})(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery Browser Plugin 0.1.0
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2015 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Modifications Copyright 2015 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 05-07-2015
 */
/*global window: false */

(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
      return factory($);
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    // Node-like environment
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(window.jQuery);
  }
}(function(jQuery) {
  "use strict";

  function uaMatch( ua ) {
    // If an UA is not provided, default to the current browser UA.
    if ( ua === undefined ) {
      ua = window.navigator.userAgent;
    }
    ua = ua.toLowerCase();

    var match = /(edge)\/([\w.]+)/.exec( ua ) ||
        /(opr)[\/]([\w.]+)/.exec( ua ) ||
        /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
        /(iemobile)[\/]([\w.]+)/.exec( ua ) ||
        /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
        /(msie) ([\w.]+)/.exec( ua ) ||
        ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
        [];

    var platform_match = /(ipad)/.exec( ua ) ||
        /(ipod)/.exec( ua ) ||
        /(windows phone)/.exec( ua ) ||
        /(iphone)/.exec( ua ) ||
        /(kindle)/.exec( ua ) ||
        /(silk)/.exec( ua ) ||
        /(android)/.exec( ua ) ||
        /(win)/.exec( ua ) ||
        /(mac)/.exec( ua ) ||
        /(linux)/.exec( ua ) ||
        /(cros)/.exec( ua ) ||
        /(playbook)/.exec( ua ) ||
        /(bb)/.exec( ua ) ||
        /(blackberry)/.exec( ua ) ||
        [];

    var browser = {},
        matched = {
          browser: match[ 5 ] || match[ 3 ] || match[ 1 ] || "",
          version: match[ 2 ] || match[ 4 ] || "0",
          versionNumber: match[ 4 ] || match[ 2 ] || "0",
          platform: platform_match[ 0 ] || ""
        };

    if ( matched.browser ) {
      browser[ matched.browser ] = true;
      browser.version = matched.version;
      browser.versionNumber = parseInt(matched.versionNumber, 10);
    }

    if ( matched.platform ) {
      browser[ matched.platform ] = true;
    }

    // These are all considered mobile platforms, meaning they run a mobile browser
    if ( browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone ||
      browser.ipod || browser.kindle || browser.playbook || browser.silk || browser[ "windows phone" ]) {
      browser.mobile = true;
    }

    // These are all considered desktop platforms, meaning they run a desktop browser
    if ( browser.cros || browser.mac || browser.linux || browser.win ) {
      browser.desktop = true;
    }

    // Chrome, Opera 15+ and Safari are webkit based browsers
    if ( browser.chrome || browser.opr || browser.safari ) {
      browser.webkit = true;
    }

    // IE11 has a new token so we will assign it msie to avoid breaking changes
    if ( browser.rv || browser.iemobile) {
      var ie = "msie";

      matched.browser = ie;
      browser[ie] = true;
    }

    // Edge is officially known as Microsoft Edge, so rewrite the key to match
    if ( browser.edge ) {
      delete browser.edge;
      var msedge = "msedge";

      matched.browser = msedge;
      browser[msedge] = true;
    }

    // Blackberry browsers are marked as Safari on BlackBerry
    if ( browser.safari && browser.blackberry ) {
      var blackberry = "blackberry";

      matched.browser = blackberry;
      browser[blackberry] = true;
    }

    // Playbook browsers are marked as Safari on Playbook
    if ( browser.safari && browser.playbook ) {
      var playbook = "playbook";

      matched.browser = playbook;
      browser[playbook] = true;
    }

    // BB10 is a newer OS version of BlackBerry
    if ( browser.bb ) {
      var bb = "blackberry";

      matched.browser = bb;
      browser[bb] = true;
    }

    // Opera 15+ are identified as opr
    if ( browser.opr ) {
      var opera = "opera";

      matched.browser = opera;
      browser[opera] = true;
    }

    // Stock Android browsers are marked as Safari on Android.
    if ( browser.safari && browser.android ) {
      var android = "android";

      matched.browser = android;
      browser[android] = true;
    }

    // Kindle browsers are marked as Safari on Kindle
    if ( browser.safari && browser.kindle ) {
      var kindle = "kindle";

      matched.browser = kindle;
      browser[kindle] = true;
    }

     // Kindle Silk browsers are marked as Safari on Kindle
    if ( browser.safari && browser.silk ) {
      var silk = "silk";

      matched.browser = silk;
      browser[silk] = true;
    }

    // Assign the name and platform variable
    browser.name = matched.browser;
    browser.platform = matched.platform;
    return browser;
  }

  // Run the matching process, also assign the function to the returned object
  // for manual, jQuery-free use if desired
  window.jQBrowser = uaMatch( window.navigator.userAgent );
  window.jQBrowser.uaMatch = uaMatch;

  // Only assign to jQuery.browser if jQuery is loaded
  if ( jQuery ) {
    jQuery.browser = window.jQBrowser;
  }

  return window.jQBrowser;
}));


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by cod on 11.4.17.
 */
var ColorPicker =
/**
 *
 * @param {jQuery} colour_picker_panels
 * @param {jQuery} image_selector
 */
function ColorPicker(colour_picker_panels, image_selector) {
    _classCallCheck(this, ColorPicker);

    var $colour_radio_button = colour_picker_panels.find('.zetaprints-field');
    var $colour_sample = colour_picker_panels.children('.color-sample');
    var colour = $colour_radio_button.val();

    if (colour) {
        $colour_sample.css('backgroundColor', colour);
    }

    colour_picker_panels.find('span > a').click(function () {
        $colour_radio_button.colorpicker('open');

        return false;
    });

    $colour_radio_button.colorpicker({
        color: '804080',
        inline: false,
        layout: {
            //Left, Top, Width, Height (in table cells)
            map: [0, 0, 1, 5],
            bar: [1, 0, 1, 5],
            preview: [2, 0, 1, 1],
            rgb: [2, 2, 1, 1],
            hex: [2, 3, 1, 1],
            cmyk: [3, 2, 1, 2]
        },
        parts: ['switcher', 'header', 'map', 'bar', 'hex', 'rgb', 'cmyk', 'preview', 'footer'],
        part: {
            map: { size: 128 },
            bar: { size: 128 }
        },
        altField: $colour_sample,
        showOn: 'alt',
        title: ' ',
        revert: true,
        showCloseButton: false,
        colorFormat: '#HEX',
        ok: function ok(e, data) {
            if ($colour_radio_button.val()) {
                image_selector.removeClass('no-value');

                $colour_radio_button.prop('disabled', false).change().prop('checked', true);
            }
        }
    });
};

exports.default = ColorPicker;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by cod on 19.4.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _Logger = __webpack_require__(2);

var _Logger2 = _interopRequireDefault(_Logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Delegate = function () {
    function Delegate() {
        _classCallCheck(this, Delegate);
    }

    _createClass(Delegate, null, [{
        key: 'delegate',

        /**
         * @param {string|function} method Invokes the method if exists
         * @param {*} forward_arguments Arguments to forward to the method
         * @return {*}
         */
        value: function delegate(method) {
            for (var _len = arguments.length, forward_arguments = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                forward_arguments[_key - 1] = arguments[_key];
            }

            if (typeof method === 'function') {
                return method.apply(undefined, forward_arguments);
            }

            if (typeof window[method] === 'function') {
                var _window;

                return (_window = window)[method].apply(_window, forward_arguments);
            }

            _Logger2.default.warn('Delegate "' + method + '" not found');

            return undefined;
        }
    }]);

    return Delegate;
}();

exports.default = Delegate;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by cod on 10.4.17.
 */
var FakeAddToCartButton = function () {
    /**
     * @param {jQuery} original_button
     */
    function FakeAddToCartButton(original_button) {
        _classCallCheck(this, FakeAddToCartButton);

        this.original_button = original_button;
    }

    /**
     * @param {boolean} is_multipage_template
     */


    _createClass(FakeAddToCartButton, [{
        key: 'add',
        value: function add(is_multipage_template) {
            var title = this.original_button.attr('title');
            var notice = is_multipage_template ? window.notice_to_update_preview_text_for_multipage_template : window.notice_to_update_preview_text;

            var $fake_button_with_notice = $('<button id="zetaprints-fake-add-to-cart-button" ' + 'class="button disabled" type="button" ' + 'title="' + title + '">' + '<span><span>' + title + '</span></span>' + '</button>' + '<span id="zetaprints-fake-add-to-cart-warning" ' + 'class="zetaprints-notice to-update-preview">' + notice + '</span>');

            this.original_button.addClass('no-display').after($fake_button_with_notice);
        }
    }, {
        key: 'remove',
        value: function remove() {
            $('#zetaprints-fake-add-to-cart-button, ' + '#zetaprints-fake-add-to-cart-warning').remove();
            this.original_button.removeClass('no-display');
        }
    }]);

    return FakeAddToCartButton;
}();

exports.default = FakeAddToCartButton;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Delegate = __webpack_require__(24);

var _Delegate2 = _interopRequireDefault(_Delegate);

var _Logger = __webpack_require__(2);

var _Logger2 = _interopRequireDefault(_Logger);

var _ImageEditor = __webpack_require__(12);

var _ImageEditor2 = _interopRequireDefault(_ImageEditor);

var _ImageEditingContext = __webpack_require__(44);

var _ImageEditingContext2 = _interopRequireDefault(_ImageEditingContext);

var _Feature = __webpack_require__(5);

var _Feature2 = _interopRequireDefault(_Feature);

var _SaveImageButton = __webpack_require__(6);

var _SaveImageButton2 = _interopRequireDefault(_SaveImageButton);

var _Resizing = __webpack_require__(13);

var _Resizing2 = _interopRequireDefault(_Resizing);

var _UpdatePreview = __webpack_require__(14);

var _UpdatePreview2 = _interopRequireDefault(_UpdatePreview);

var _ImageEditorLightbox = __webpack_require__(27);

var _ImageEditorLightbox2 = _interopRequireDefault(_ImageEditorLightbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImageEditorController = function () {
    /**
     * @param {PersonalizationForm} personalization_form_instance
     */
    function ImageEditorController(personalization_form_instance) {
        _classCallCheck(this, ImageEditorController);

        if (!personalization_form_instance) {
            throw new ReferenceError('Missing argument "personalization_form_instance"');
        }
        this.personalization_form_instance = personalization_form_instance;
        this.show = this.show.bind(this);
        this.$ = $;
        this.image_editor = new _ImageEditor2.default(personalization_form_instance);
    }

    _createClass(ImageEditorController, [{
        key: 'show',
        value: function show(image_name, image_guid, $thumb) {
            _Logger2.default.debug('[ImageEditorController] ImageEditor show', image_name, image_guid, $thumb);

            var lightbox = new _ImageEditorLightbox2.default(this.personalization_form_instance.url['edit-image-template'] + image_guid, this);

            lightbox.open(image_name, image_guid, $thumb);

            //
            // const fancybox = this.$['fancybox'];
            // const fancybox_version = typeof fancybox.version === 'string' ? parseInt(fancybox.version, 10) : 1;
            //
            //
            //
            // if (fancybox_version === 2) {
            //     this._show_fancybox_v2(image_guid, image_name, $thumb);
            // } else if (fancybox_version === 1) {
            //     this._show_fancybox_v1(image_guid, image_name, $thumb);
            // } else {
            //     throw new Error('No matching fancyBox version found');
            // }
        }

        /**
         * @param image_guid
         * @param image_name
         * @param $thumb
         * @private
         * @deprecated
         */
        // _show_fancybox_v1(image_guid, image_name, $thumb) {
        //     const _this = this;
        //
        //     $.fancybox({
        //         'padding': 0,
        //         'titleShow': false,
        //         'type': 'ajax',
        //         'href': this.personalization_form_instance.url['edit-image-template'] + image_guid,
        //         'hideOnOverlayClick': false,
        //         'hideOnContentClick': false,
        //         'centerOnScroll': false,
        //         'showNavArrows': false,
        //         'onStart': () => {
        //             Logger.debug('[ImageEditorController] Custom Fancybox start');
        //
        //             this.on_fancybox_start(image_name, image_guid);
        //         },
        //         'onComplete': () => {
        //             Logger.debug('[ImageEditorController] Fancybox complete');
        //             _this.on_fancybox_complete(image_name, image_guid, $thumb);
        //         },
        //         'onCleanup': function () {
        //             Logger.debug('[ImageEditorController] Fancybox cleanup');
        //
        //             if (ImageEditor._image_editor) {
        //                 ImageEditor._image_editor.close();
        //             }
        //         },
        //         'onClosed': function () {
        //             Logger.debug('[ImageEditorController] Fancybox closed');
        //
        //             Feature.instance().call(Feature.feature.fancybox.saveImageButton, SaveImageButton.fancybox_remove_save_image_button, $);
        //             // Delegate.delegate('fancybox_remove_save_image_button', $);
        //         }
        //     });
        // }

        /**
         * @param image_guid
         * @param image_name
         * @param $thumb
         * @private
         */
        // _show_fancybox_v2(image_guid, image_name, $thumb) {
        //     const _this = this;
        //
        //     $.fancybox({
        //         'padding': 0,
        //         'type': 'ajax',
        //         'href': this.personalization_form_instance.url['edit-image-template'] + image_guid,
        //         'autoCenter': false,
        //         'arrows': false,
        //         'closeClick': false,
        //         height: 340,
        //         overlay: {
        //             closeClick: false,  // if true, fancyBox will be closed when user clicks on the overlay
        //             // speedOut   : 200,   // duration of fadeOut animation
        //             // showEarly  : true,  // indicates if should be opened immediately or wait until the content is ready
        //             // css        : {},    // custom CSS properties
        //             // locked     : true   // if true, the content will be locked into overlay
        //         },
        //         helpers: {
        //             title: null
        //         },
        //
        //         'beforeLoad': function () {
        //             Logger.debug('[ImageEditorController] Custom Fancybox start');
        //             _this.on_fancybox_start(image_name, image_guid);
        //         },
        //         'beforeShow': function () {
        //             Logger.debug('[ImageEditorController] Fancybox complete');
        //             _this.on_fancybox_complete(image_name, image_guid, $thumb);
        //         },
        //         'beforeClose': function () {
        //             Logger.debug('[ImageEditorController] Fancybox cleanup');
        //
        //             if (ImageEditor._image_editor) {
        //                 ImageEditor._image_editor.close();
        //             }
        //         },
        //         'afterClose': function () {
        //             Logger.debug('[ImageEditorController] Fancybox closed');
        //
        //             Feature.instance().call(Feature.feature.fancybox.saveImageButton, SaveImageButton.fancybox_remove_save_image_button, $);
        //             // Delegate.delegate('fancybox_remove_save_image_button', $);
        //         }
        //     });
        // }

        /**
         * @param {string} image_name
         * @param {string} image_guid
         */

    }, {
        key: 'on_fancybox_start',
        value: function on_fancybox_start(image_name, image_guid) {
            $('#fancybox-overlay').css('z-index', 1103);

            var is_in_preview = false;

            if ($('#zp-update-preview-button').length) {
                _Feature2.default.instance().call(_Feature2.default.feature.fancybox.updatePreview, _UpdatePreview2.default.fancybox_remove_update_preview_button, $);
                // Delegate.delegate('fancybox_remove_update_preview_button', $);
                is_in_preview = true;
            }

            if ($('#fancybox-resize').length) {
                _Feature2.default.instance().call(_Feature2.default.feature.fancybox.resizing, _Resizing2.default.fancybox_resizing_hide);
                // Delegate.delegate('fancybox_resizing_hide');
            }

            _Feature2.default.instance().call(_Feature2.default.feature.fancybox.saveImageButton, _SaveImageButton2.default.fancybox_add_save_image_button, zp, is_in_preview, image_name, image_guid);

            // Delegate.delegate(
            //     'fancybox_add_save_image_button',
            //     $,
            //     zp,
            //     is_in_preview,
            //     image_name,
            //     image_guid
            // );
        }

        /**
         * @param {string} image_name
         * @param {string} image_guid
         * @param {jQuery|HTMLElement} $thumb
         */

    }, {
        key: 'on_fancybox_complete',
        value: function on_fancybox_complete(image_name, image_guid, $thumb) {
            _Logger2.default.debug('[ImageEditorController] Fancybox complete', image_name, image_guid, $thumb);
            var personalization_form_instance = this.personalization_form_instance;
            var zp = personalization_form_instance.data;
            var page = zp.template_details.pages[zp.current_page];

            //Define image edit context
            zp.image_edit = new _ImageEditingContext2.default({
                'url': {
                    'image': zp.url.image,
                    'user_image_template': zp.url['user-image-template']
                },
                '$selected_thumbnail': $thumb,
                //!!! Temp solution
                '$input': $thumb.parents().children('input.zetaprints-images'),
                'image_id': image_guid,
                'page': {
                    'width_in': page['width-in'],
                    'height_in': page['height-in']
                },
                'placeholder': page.images[image_name],
                'upload_image_by_url': personalization_form_instance.upload_image_by_url
            });

            //Check if current page has shapes...
            if (page.shapes)
                //...and then add shape info to the image edit context
                {
                    zp.image_edit.shape = page.shapes[image_name];
                }

            //Default values for options
            zp.image_edit.has_fit_in_field = true;

            //Add options' values
            if (zp.options['image-edit']) {
                var options = zp.options['image-edit'];

                zp.image_edit.has_fit_in_field = options['in-context'] ? '' + options['in-context']['@enabled'] !== '0' : true;
            }

            //Disable fit in field functionality if current page doesn't have shapes
            zp.image_edit.has_fit_in_field = zp.image_edit.has_fit_in_field && zp.image_edit.shape !== undefined;

            // zetaprint_image_editor.apply(zp.image_edit, [ $, { save: save_image_handler } ] );

            this.image_editor.load(zp.image_edit);
        }
    }]);

    return ImageEditorController;
}();

exports.default = ImageEditorController;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Logger = __webpack_require__(2);

var _Logger2 = _interopRequireDefault(_Logger);

var _jQueryLoader = __webpack_require__(3);

var _jQueryLoader2 = _interopRequireDefault(_jQueryLoader);

var _Feature = __webpack_require__(5);

var _Feature2 = _interopRequireDefault(_Feature);

var _SaveImageButton = __webpack_require__(6);

var _SaveImageButton2 = _interopRequireDefault(_SaveImageButton);

var _LightboxConfiguration = __webpack_require__(10);

var _LightboxConfiguration2 = _interopRequireDefault(_LightboxConfiguration);

var _ImageEditor = __webpack_require__(12);

var _ImageEditor2 = _interopRequireDefault(_ImageEditor);

var _Assert = __webpack_require__(7);

var _Assert2 = _interopRequireDefault(_Assert);

var _AbstractLightbox2 = __webpack_require__(11);

var _AbstractLightbox3 = _interopRequireDefault(_AbstractLightbox2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageEditorLightbox = function (_AbstractLightbox) {
    _inherits(ImageEditorLightbox, _AbstractLightbox);

    /**
     * @param {string} href
     * @param {ImageEditorController} image_editor_controller
     */
    function ImageEditorLightbox(href, image_editor_controller) {
        _classCallCheck(this, ImageEditorLightbox);

        var _this = _possibleConstructorReturn(this, (ImageEditorLightbox.__proto__ || Object.getPrototypeOf(ImageEditorLightbox)).call(this));

        _Assert2.default.assertString(href);

        _this.href = href;
        _this.image_editor_controller = image_editor_controller;
        return _this;
    }

    /**
     * @param {string} image_name
     * @param {string} image_guid
     * @param {jQuery|HTMLElement} $thumb
     */


    _createClass(ImageEditorLightbox, [{
        key: 'open',
        value: function open(image_name, image_guid, $thumb) {
            var _this2 = this;

            _Logger2.default.debug('[ImageEditorLightbox] open');

            var configuration = new _LightboxConfiguration2.default({
                'padding': 0,
                'titleShow': false,
                'type': 'ajax',
                'href': this.href,
                closeBtn: true,
                'willShow': function willShow() {
                    // Logger.debug('[ImageEditorLightbox] Custom Fancybox start');
                    // this.image_editor_controller.on_fancybox_start(image_name, image_guid);
                },
                'didShow': function didShow() {
                    _Logger2.default.debug('[ImageEditorLightbox] Custom Fancybox start');
                    _this2.image_editor_controller.on_fancybox_start(image_name, image_guid);

                    _Logger2.default.debug('[ImageEditorLightbox] Fancybox complete');
                    _this2.image_editor_controller.on_fancybox_complete(image_name, image_guid, $thumb);
                },
                'willClose': function willClose() {
                    _Logger2.default.debug('[ImageEditorLightbox] Fancybox cleanup');
                    _this2.image_editor_controller.image_editor.close();
                },
                'didClose': function didClose() {
                    _Logger2.default.debug('[ImageEditorLightbox] Fancybox closed');

                    _Feature2.default.instance().call(_Feature2.default.feature.fancybox.saveImageButton, _SaveImageButton2.default.fancybox_remove_save_image_button);
                    // Delegate.delegate('fancybox_remove_save_image_button', $);
                }
            });

            _jQueryLoader2.default.fancybox(this._prepare_options(configuration));
        }
    }]);

    return ImageEditorLightbox;
}(_AbstractLightbox3.default);

exports.default = ImageEditorLightbox;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ColorPicker = __webpack_require__(23);

var _ColorPicker2 = _interopRequireDefault(_ColorPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Created by cod on 18.4.17.
                                                                                                                                                           */


var ImageSelector =
/**
 * @param {Element} element
 * @param {PersonalizationForm} personalization_form
 */
function ImageSelector(element, personalization_form) {
    _classCallCheck(this, ImageSelector);

    var $field = $(element);

    var $head = $field.children('.head');
    var $content = $field.children('.selector-content');

    var $tabs = $content.children('.tab-buttons');

    var tab_number = 0;

    if (!$tabs.children('.hidden').length) {
        tab_number = 1;
    }

    $content.tabs({ active: tab_number }).bind('tabsshow', function (event, ui) {
        personalization_form.show_colorpicker($(ui.panel));
        personalization_form.scroll_strip(ui.panel);
    });

    $content.find('.zetaprints-field').change(function (event) {
        personalization_form.image_field_select_handler($(event.target), personalization_form.data);
    });

    var $panels = $content.find('> .tabs-wrapper > .tab');

    $head.click(function () {
        var $panel = $field.hasClass('zetaprints-palette') ? $content : $panels.not('.ui-tabs-hide');

        if ($field.hasClass('minimized')) {
            $field.removeClass('minimized');

            personalization_form.show_colorpicker($panel);
            personalization_form.scroll_strip($panel);
        } else {
            personalization_form.hide_colorpicker($panel);

            $field.addClass('minimized').removeClass('expanded').css('width', '100%');
        }

        return false;
    });

    var shift = $field.position().left - $('div.product-img-box').position().left;
    var full_width = shift + $field.outerWidth();

    $head.children('.collapse-expand').click(function () {
        var $panel = $panels.not('.ui-tabs-hide');

        if ($field.hasClass('expanded')) {
            $field.removeClass('expanded').removeAttr('style');
        } else {
            $field.addClass('expanded').css({ 'left': -shift, 'width': full_width });

            if ($field.hasClass('minimized')) {
                $field.removeClass('minimized');

                personalization_form.show_colorpicker($panel);
            }
        }

        personalization_form.scroll_strip($panel);

        return false;
    });

    var $colour_picker_panel = $panels.filter('.color-picker').add($field.find('.colour-picker'));

    if ($colour_picker_panel.length) {
        new _ColorPicker2.default($colour_picker_panel, $field);
    }
};

exports.default = ImageSelector;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by cod on 20.4.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _UiHelper = __webpack_require__(8);

var _UiHelper2 = _interopRequireDefault(_UiHelper);

var _jQueryLoader = __webpack_require__(3);

var _jQueryLoader2 = _interopRequireDefault(_jQueryLoader);

var _Assert = __webpack_require__(7);

var _Assert2 = _interopRequireDefault(_Assert);

var _Feature = __webpack_require__(5);

var _Feature2 = _interopRequireDefault(_Feature);

var _Page = __webpack_require__(46);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImageTabController = function () {
    /**
     * @param {PersonalizationForm} personalization_form
     */
    function ImageTabController(personalization_form) {
        _classCallCheck(this, ImageTabController);

        this.personalization_form = personalization_form;
    }

    /**
     * @param {HTMLElement} element
     */


    _createClass(ImageTabController, [{
        key: "handle_click",
        value: function handle_click(element) {
            var personalization_form = this.personalization_form;
            var data = personalization_form.data;
            var ui_helper = _UiHelper2.default.instance();
            var product_form = ui_helper.product_form;

            console.log(element);
            var page_rel = void 0;

            (0, _jQueryLoader2.default)('div.zetaprints-image-tabs li').removeClass('selected');

            // Hide preview image, preview placeholder with spinner, text fields and image fields for the current page
            ui_helper.hide(['a.zetaprints-template-preview', 'div.zetaprints-page-stock-images', 'div.zetaprints-page-input-fields', 'div.zetaprints-preview-placeholder', '.page-size-table-body']);

            // Remove shapes for current page
            if (data.has_shapes) {
                _Feature2.default.instance().call(_Feature2.default.feature.inPreviewEdit, personalization_form.in_preview_edit_controller.add_in_preview_edit_handlers);
                // Delegate.delegate('remove_all_shapes', product_image_box);
            }

            (0, _jQueryLoader2.default)(element).addClass('selected');
            page_rel = (0, _jQueryLoader2.default)('img', element).attr('rel');

            personalization_form.disable_image_zoomer();

            console.log('hidden', data.is_fields_hidden);
            // Show text fields and image fields for the selected page if it's enabled
            if (!data.is_fields_hidden) {
                ui_helper.show(['#stock-images-' + page_rel, '#input-fields-' + page_rel]);
                // $('#stock-images-' + page + ', #input-fields-' + page).removeClass('zp-hidden');
            }

            // Show preview image, preview placeholder with spinner for the selected page
            ui_helper.show(['#preview-image-' + page_rel, '#zp-placeholder-for-preview-' + page_rel, '#page-size-' + page_rel]);
            // $('#preview-image-' + page + ', #zp-placeholder-for-preview-' + page + ', #page-size-' + page).removeClass('zp-hidden');

            //Add resizer for text inputs and text areas for the selected page
            if (_jQueryLoader2.default.fn.text_field_resizer) {
                (0, _jQueryLoader2.default)('#input-fields-' + page_rel + ' .zetaprints-text-field-wrapper').text_field_resizer();
            }

            //Remember number of selected page
            data.current_page = page_rel.split('-')[1] * 1;

            if (personalization_form.has_changed_fields_on_page(data.current_page)) {
                product_form.removeClass('zp-not-modified');
            } else {
                product_form.addClass('zp-not-modified');
            }

            var has_shapes = data.has_shapes && _Feature2.default.instance().is_activated(_Feature2.default.feature.inPreviewEdit);

            // let image_box_width = $product_image_box.width();
            // let image_width = $('#preview-image-' + page)
            //     .children('img')
            //     .outerWidth();

            page_rel = data.template_details.pages[data.current_page];

            if (!page_rel.preview_is_scaled || has_shapes) {
                ui_helper.hide(ui_helper.enlarge_button);
                // ui_helper.enlarge_button.addClass('zp-hidden');
            } else {
                //Show Enlarge button
                ui_helper.show(ui_helper.enlarge_button);
                // ui_helper.enlarge_button.removeClass('zp-hidden');
            }

            this._toggle_buttons(page_rel, has_shapes);

            //Set preview images sharing link for the current page
            if (window.place_preview_image_sharing_link) {
                personalization_form.set_preview_sharing_link_for_page(data.current_page, data.preview_sharing_links);
            }

            //Add shapes for selected page
            //if (zp.has_shapes
            //    && window.place_all_shapes_for_page
            //    && window.shape_handler)
            //  place_all_shapes_for_page(
            //                          zp.template_details.pages[zp.current_page].shapes,
            //                          $product_image_box,
            //                          shape_handler);

            if ((0, _jQueryLoader2.default)('#zp-dataset-page-' + data.current_page).length) {
                (0, _jQueryLoader2.default)('#zp-dataset-button').removeClass('hidden');
            } else {
                (0, _jQueryLoader2.default)('#zp-dataset-button').addClass('hidden');
            }

            if (personalization_form.is_user_data_changed(page_rel)) {
                product_form.addClass('zp-user-data-changed');
            } else {
                product_form.removeClass('zp-user-data-changed');
            }

            if (personalization_form.can_show_next_page_button_for_page(data.current_page, data)) {
                ui_helper.next_page_button.show();
            } else {
                ui_helper.next_page_button.hide();
            }
        }

        /**
         * Checks if page is static then hides the buttons or shows them
         *
         * @param {Page} page
         * @param {boolean} has_shapes
         * @private
         */

    }, {
        key: "_toggle_buttons",
        value: function _toggle_buttons(page, has_shapes) {
            _Assert2.default.assertInstanceOf(page, _Page2.default);
            var ui_helper = _UiHelper2.default.instance();
            //Check if page is static then...
            if (page.static) {
                //... hide Update preview button,
                ui_helper.hide(ui_helper.update_preview_button);
                // ui_helper.update_preview_button.addClass('zp-hidden');

                //Form button
                ui_helper.hide(ui_helper.form_button);
                // ui_helper.form_button.addClass('zp-hidden');

                //and Editor button
                ui_helper.hide(ui_helper.editor_button);
                // ui_helper.editor_button.addClass('zp-hidden');
            } else {
                //... otherwise show them
                ui_helper.show(ui_helper.update_preview_button);
                // ui_helper.update_preview_button.removeClass('zp-hidden');

                //!!! Check if page is passive

                //Check if there's shapes and zpadvanced theme is enabled then...
                if (has_shapes) {
                    //... hide Editor button
                    ui_helper.show(ui_helper.editor_button);
                    // ui_helper.editor_button.removeClass('zp-hidden');

                    //Show Form button
                    ui_helper.show(ui_helper.form_button);
                    // ui_helper.form_button.removeClass('zp-hidden');
                }
            }
        }
    }]);

    return ImageTabController;
}();

exports.default = ImageTabController;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jQueryLoader = __webpack_require__(3);

var _jQueryLoader2 = _interopRequireDefault(_jQueryLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Created by cod on 7.4.17.
                                                                                                                                                           */


var UploadResult = function UploadResult() {
    _classCallCheck(this, UploadResult);

    this.guid = '';
    this.thumbnail = '';
    this.thumbnail_url = '';
    this.error = undefined;
};

var ImageUpload = function () {
    /**
     * @param {Element} button
     * @param {PersonalizationForm} personalization_form
     */
    function ImageUpload(button, personalization_form) {
        _classCallCheck(this, ImageUpload);

        this.personalization_form = personalization_form;
        this._on_image_added = this._on_image_added.bind(this);
        var _upload_complete = this._upload_complete = this._upload_complete.bind(this);
        var _enable = this._enable = this._enable.bind(this);

        var uploader = new AjaxUpload(button, {
            name: 'customer-image',
            action: personalization_form.data.url.upload,
            responseType: 'json',
            autoSubmit: true,
            onChange: function onChange(file, extension) {
                (0, _jQueryLoader2.default)(this._button).parents('.upload').find('input.file-name').val(file);
            },
            onSubmit: function onSubmit(file, extension) {
                (0, _jQueryLoader2.default)(this._button) //Choose button
                .addClass('disabled').next() //Cancel button
                .removeClass('disabled').next() //Spinner
                .show();

                this.disable();
            },
            onComplete: function onComplete(file, response) {
                _upload_complete(file, response, this);
            }
        });

        (0, _jQueryLoader2.default)('div.button.cancel-upload', (0, _jQueryLoader2.default)(button).parent()).click(function () {
            if (!(0, _jQueryLoader2.default)(this).hasClass('disabled')) {
                uploader.cancel();

                var spinner = _enable(uploader);
                spinner.hide();
            }
        });
    }

    /**
     * @param {AjaxUpload} uploader
     * @returns {jQuery} Returns the spinner element
     * @private
     */


    _createClass(ImageUpload, [{
        key: '_enable',
        value: function _enable(uploader) {
            uploader.enable();

            var choose_button = (0, _jQueryLoader2.default)(uploader._button).removeClass('disabled');
            var cancel_button = choose_button.next().addClass('disabled');

            // Clear the input field
            choose_button.parents('.upload').find('input.file-name').val('');

            return cancel_button.next();
        }

        /**
         * @param {string} file
         * @param {UploadResult} response
         * @param {AjaxUpload} uploader
         * @private
         */

    }, {
        key: '_upload_complete',
        value: function _upload_complete(file, response, uploader) {
            var _on_image_added = this._on_image_added;

            var spinner = this._enable(uploader);

            if ('' + response === 'Error' || typeof response['error'] !== 'undefined') {
                spinner.hide();
                alert(uploading_image_error_text);

                return;
            }

            var upload_div = (0, _jQueryLoader2.default)(uploader._button).parents('.upload');
            jQuery(document).trigger(AjaxUpload.Events.UPLOAD_COMPLETE, {
                instance: self,
                file: file,
                response: response,
                uploadDiv: upload_div
            });

            var $selector = upload_div.parents('.selector-content');
            var upload_field_id = $selector.attr('id');
            var trs = $selector.find('.tab.user-images table tr');

            this.number_of_loaded_imgs = 0;

            this.personalization_form.add_image_to_gallery(response.guid, response.thumbnail, function () {
                /** @type {HTMLImageElement} */
                var element = this;

                _on_image_added(element, upload_field_id, trs, upload_div, spinner, $selector);
            });
        }

        /**
         * @param {HTMLImageElement} element
         * @param {string} upload_field_id
         * @param {jQuery} trs
         * @param {jQuery} upload_div
         * @param {jQuery} spinner
         * @param {jQuery} selectors
         * @private
         */

    }, {
        key: '_on_image_added',
        value: function _on_image_added(element, upload_field_id, trs, upload_div, spinner, selectors) {
            /** @type {jQuery} */
            var $td = (0, _jQueryLoader2.default)(element).parents('td');

            var field_id = $td.parents('.selector-content').attr('id');

            //If a field the image was uploaded into is not current image field
            if ('' + field_id !== '' + upload_field_id) {
                var $scroll = $td.parents('.images-scroller');

                //Scroll stripper to save position of visible images
                $scroll.scrollLeft($scroll.scrollLeft() + $td.outerWidth());
            } else {
                $td.children('.zetaprints-images').click();
            }

            if (++this.number_of_loaded_imgs === trs.length) {
                var $images_div = upload_div.next();

                spinner.hide();

                // Show the current image selector's "My images" tab
                //$selector
                //    .find('> .tab-buttons > .hidden')
                //    .removeClass('hidden');


                // Show all "My images" tabs
                $td.closest('form').find('.tab-buttons > .hidden').removeClass('hidden');

                this.personalization_form.scroll_strip($images_div);

                selectors.tabs('option', 'active', 1);
            }
        }
    }]);

    return ImageUpload;
}();

exports.default = ImageUpload;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jQueryLoader = __webpack_require__(3);

var _jQueryLoader2 = _interopRequireDefault(_jQueryLoader);

var _ShapeRepository = __webpack_require__(15);

var _ShapeRepository2 = _interopRequireDefault(_ShapeRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InPreviewEditController = function () {
    /**
     * @param {PersonalizationForm} personalization_form_instance
     */
    function InPreviewEditController(personalization_form_instance) {
        _classCallCheck(this, InPreviewEditController);

        if (!personalization_form_instance) {
            throw new ReferenceError('Missing argument "personalization_form_instance"');
        }
        this.personalization_form_instance = personalization_form_instance;
        this.shape_repository = new _ShapeRepository2.default(personalization_form_instance);
        this.add_in_preview_edit_handlers = this.add_in_preview_edit_handlers.bind(this);
    }

    /**
     * @param {Shape} shape
     * @api
     */


    _createClass(InPreviewEditController, [{
        key: 'mark_shape_as_edited',
        value: function mark_shape_as_edited(shape) {
            (0, _jQueryLoader2.default)('div.zetaprints-field-shape[title="' + shape.name + '"]').addClass('edited');

            shape['has-value'] = true;
        }

        /**
         * @param {Shape} shape
         * @api
         */

    }, {
        key: 'unmark_shape_as_edited',
        value: function unmark_shape_as_edited(shape) {
            (0, _jQueryLoader2.default)('div.zetaprints-field-shape[title="' + shape.name + '"]').removeClass('edited');

            shape['has-value'] = false;
        }

        /**
         * Prepares the shapes inside the given template details
         *
         * @param {TemplateDetail} template_details
         * @api
         */

    }, {
        key: '_place_shape',


        /**
         * @param {Shape} shape
         * @param {jQuery|HTMLElement} $container
         * @param {function} shape_handler
         * @private
         */
        value: function _place_shape(shape, $container, shape_handler) {
            if (typeof shape_handler !== 'function') {
                throw new TypeError('Argument shape_handler must be of type "function"');
            }
            var edited_class = shape['has-value'] ? ' edited' : '';

            (0, _jQueryLoader2.default)('<div class="zetaprints-field-shape bottom hide' + edited_class + '" ' + 'title="' + shape.name + '">' + '<div class="zetaprints-field-shape top" />' + '</div>').css({
                top: shape.top + '%',
                left: shape.left + '%',
                width: shape.visual_width + '%',
                height: shape.visual_height + '%'
            }).appendTo($container).children().bind('click mouseover mouseout', { container: $container }, shape_handler);
        }

        /**
         * @param {Object.<string, Shape>} shapes Dictionary of Shapes
         * @param {jQuery|HTMLElement} $container
         * @param {function} shape_handler
         * @api
         */

    }, {
        key: 'place_all_shapes_for_page',
        value: function place_all_shapes_for_page(shapes, $container, shape_handler) {
            if (typeof shape_handler !== 'function') {
                throw new TypeError('Argument shape_handler must be of type "function"');
            }

            if (!shapes) {
                return;
            }

            for (var name in shapes) {
                if (shapes.hasOwnProperty(name) && !shapes[name].hidden) {
                    this._place_shape(shapes[name], $container, shape_handler);
                }
            }
        }

        /**
         * @param {jQuery|HTMLElement} container
         */

    }, {
        key: 'remove_all_shapes',
        value: function remove_all_shapes(container) {
            (0, _jQueryLoader2.default)('div.zetaprints-field-shape', container).remove();
        }

        /**
         * @param {Shape} shape
         * @param {jQuery|HTMLElement} $container
         * @api
         */

    }, {
        key: 'highlight_shape',
        value: function highlight_shape(shape, $container) {
            $container.find('.zetaprints-field-shape[title="' + shape.name + '"]').addClass('highlighted');
        }

        /**
         * @param {Shape} shape
         * @param {jQuery|HTMLElement} $container
         */

    }, {
        key: 'dehighlight_shape',
        value: function dehighlight_shape(shape, $container) {
            $container.find('.zetaprints-field-shape[title="' + shape.name + '"]').removeClass('highlighted');
        }

        /**
         * @param {string} names
         */

    }, {
        key: 'highlight_field_by_name',
        value: function highlight_field_by_name(names) {
            var names_collection = names.split('; ');

            for (var i = 0; i < names_collection.length; i++) {
                var name = names_collection[i];

                var $field = (0, _jQueryLoader2.default)('*[name="zetaprints-_' + name + '"], ' + 'div.zetaprints-images-selector[title="' + name + '"] div.head');

                var $parent = $field.parents('.zetaprints-text-field-wrapper');

                if ($parent.length) {
                    $field = $parent;
                }

                $field.addClass('highlighted');
            }
        }

        /**
         * @param {string} name
         */

    }, {
        key: 'dehighlight_field_by_name',
        value: function dehighlight_field_by_name(name) {
            (0, _jQueryLoader2.default)('.zetaprints-page-input-fields .highlighted,' + '.zetaprints-page-stock-images .highlighted').removeClass('highlighted');
        }

        /**
         * @param {string} name
         * @param {object|undefined} position
         * @param selected_shapes
         * @api
         */

    }, {
        key: 'popup_field_by_name',
        value: function popup_field_by_name(name) {
            var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
            var selected_shapes = arguments[2];

            var zp = this.personalization_form_instance.data;
            var $tabs = (0, _jQueryLoader2.default)('<div class="fieldbox-tabs fieldbox-wrapper">' + '<a class="fieldbox-button" href="#" />' + '<ul class="fieldbox-head"/>' + '</div>');

            var $ul = $tabs.children('ul');

            var $shape = (0, _jQueryLoader2.default)('#fancybox-content').find('.zetaprints-field-shape[title="' + name + '"]');

            var page = zp.template_details.pages[zp.current_page];
            var full_name = void 0;
            var width = 'auto';
            var min_width = $shape.outerWidth();

            if (min_width <= 150) {
                min_width = 150;
            }

            var selected_buttons = {};

            // selected_shapes can be a string
            // wrap it into array
            selected_shapes = [].concat(selected_shapes);

            for (var i = 0; i < selected_shapes.length; i++) {
                var shape_name = selected_shapes[i];
                var tab_title = shape_name.length <= 5 ? shape_name : shape_name.substring(0, 5) + '&hellip;';

                var $li = this._popup_field_by_name_create_li(shape_name, i, tab_title).appendTo($ul);

                var $field = void 0;
                if (page.fields && page.fields[shape_name]) {
                    var __ret = this._popup_field_by_name_for_text_field(zp, shape_name, name, page, $li);
                    $field = __ret.$field;
                    full_name = __ret.full_name;
                } else if (page.images && page.images[shape_name]) {
                    var _ret = this._popup_field_by_name_for_images(zp, shape_name, selected_buttons, name, $li);
                    $field = _ret.$field;
                    full_name = _ret.full_name;
                    selected_buttons = _ret.selected_buttons;

                    if (min_width < 400) {
                        width = 400;
                    } else {
                        width = min_width;
                    }
                }

                $field.data('in-preview-edit', {
                    'style': $field.attr('style'),
                    'parent': $field.parent()
                }).detach().removeAttr('style').wrap('<div id="fieldbox-tab-' + i + '" class="fieldbox-field" />').parent().appendTo($tabs);
            }

            $ul.append('<div class="last" />');
            $shape.append('<input type="hidden" name="field" value="' + full_name + '" />');

            //Oh God, it's a sad story :-(
            if (width === 'auto' && _jQueryLoader2.default.browser && _jQueryLoader2.default.browser.msie && _jQueryLoader2.default.browser.version === '7.0') {
                width = min_width;
            }

            var $box = this._popup_field_by_name_build_box(name, $tabs, width, min_width).appendTo('body');

            this._popup_field_by_name_apply_tabs_ie7_workaround(selected_buttons, $ul, $tabs);
            this._popup_field_by_name_register_box_click($box);

            this._popup_field_by_name_prepare_draggable_box($box, _jQueryLoader2.default.extend(true, {}, position), $shape);

            this._popup_field_by_name_prepare_tabs($tabs);
        }

        /**
         * @param {string} name
         * @param {jQuery} $tabs
         * @param {number} width
         * @param {number} min_width
         * @private
         */

    }, {
        key: '_popup_field_by_name_build_box',
        value: function _popup_field_by_name_build_box(name, $tabs, width, min_width) {
            return (0, _jQueryLoader2.default)('<div class="fieldbox" title="' + name + '" />').append($tabs).css({
                width: width,
                minWidth: min_width
            });
        }

        /**
         * @param {object} selected_buttons
         * @param {jQuery} $ul
         * @param {jQuery} $tabs
         * @private
         */

    }, {
        key: '_popup_field_by_name_apply_tabs_ie7_workaround',
        value: function _popup_field_by_name_apply_tabs_ie7_workaround(selected_buttons, $ul, $tabs) {
            //!!! Stupid work around for stupid IE7
            for (var name in selected_buttons) {
                var id = $ul.children('[title="' + name + '"]').find(' > .fieldbox-tab-inner > a').attr('href')
                //IE7 returns full URL
                .split('#');

                $tabs.find(' > #' + id[1] + ' > .selector-content').find('input[value="' + selected_buttons[name] + '"]').change().prop('checked', true);
            }
        }

        /**
         * @param {string} shape_name
         * @param {number} tab_number
         * @param {string} tab_title
         * @return {*|jQuery|HTMLElement}
         * @private
         */

    }, {
        key: '_popup_field_by_name_create_li',
        value: function _popup_field_by_name_create_li(shape_name, tab_number, tab_title) {
            return (0, _jQueryLoader2.default)('<li title="' + shape_name + '">' + '<div class="fieldbox-tab-inner">' + '<a href="#fieldbox-tab-' + tab_number + '">' + '<div class="fieldbox-tab-icon" />' + tab_title + '</a>' + '<div class="zp-clear" />' + '</div>' + '</li>');
        }

        /**
         * @param {jQuery} $box
         * @private
         */

    }, {
        key: '_popup_field_by_name_register_box_click',
        value: function _popup_field_by_name_register_box_click($box) {
            var _this2 = this;

            $box.find('.fieldbox-button').click(function () {
                _this2.popdown_field_by_name();

                return false;
            });
        }

        /**
         * @param {jQuery} $box
         * @param {object|undefined} position
         * @param {jQuery} $shape
         * @private
         */

    }, {
        key: '_popup_field_by_name_prepare_draggable_box',
        value: function _popup_field_by_name_prepare_draggable_box($box, position, $shape) {
            var height = $box.outerHeight();
            var width = $box.outerWidth();

            if (!position) {
                position = $shape.offset();
                position.top += $shape.outerHeight() - 10;
                position.left += 10;
            }

            var window_height = (0, _jQueryLoader2.default)(window).height() + (0, _jQueryLoader2.default)(window).scrollTop();
            if (position.top + height > window_height) {
                position.top -= position.top + height - window_height;
            }

            var window_width = (0, _jQueryLoader2.default)(window).width();
            if (position.left + width > window_width) {
                position.left -= position.left + width - window_width;
            }

            $box.css({
                visibility: 'visible',
                left: position.left,
                top: position.top
            }).draggable({ handle: '.fieldbox-head' });
        }

        /**
         * @param {jQuery} $tabs
         * @private
         */

    }, {
        key: '_popup_field_by_name_prepare_tabs',
        value: function _popup_field_by_name_prepare_tabs($tabs) {
            var personalization_form_instance = this.personalization_form_instance;
            $tabs.tabs({
                activate: function activate(event, ui) {
                    var $panel = (0, _jQueryLoader2.default)(ui.newPanel);

                    //Generate click event on panel to hide opened colorpicker
                    //!!!TODO: rework it after upgrading to jQuery UI 1.9+
                    $panel.click();

                    var $panel_real = $panel.find($panel.find('ul.tab-buttons li.ui-tabs-selected a').attr('href'));

                    if (!$panel_real.length) {
                        return;
                    }

                    personalization_form_instance.show_user_images($panel_real);
                    personalization_form_instance.scroll_strip($panel_real);
                    personalization_form_instance.show_colorpicker($panel_real);
                }
            });
        }

        /**
         *
         * @param {DataInterface} zp
         * @param {string} shape_name
         * @param {object} selected_buttons
         * @param {string} name
         * @param {jQuery|HTMLLIElement} $li
         * @return {{$parent, $field, full_name: string}}
         * @private
         */

    }, {
        key: '_popup_field_by_name_for_images',
        value: function _popup_field_by_name_for_images(zp, shape_name, selected_buttons, name, $li) {
            var $parent = (0, _jQueryLoader2.default)('#stock-images-page-' + zp.current_page).find('*[title="' + shape_name + '"]').removeClass('minimized');

            var $field = $parent.children('.selector-content');

            // if (min_width < 400) {
            //     width = 400;
            // } else {
            //     width = min_width;
            // }

            //Remember checked radio button for IE7 workaround
            selected_buttons[shape_name] = $field.find(':checked').val();

            var full_name = 'zetaprints-#' + name;

            $li.addClass('image-field');
            return { $parent: $parent, $field: $field, full_name: full_name, selected_buttons: selected_buttons };
        }

        /**
         * @param {DataInterface} zp
         * @param {string} shape_name
         * @param {string} name
         * @param {Page} page
         * @param {jQuery|HTMLLIElement} $li
         * @return {{$field, $_field, $parent, full_name: string}}
         * @private
         */

    }, {
        key: '_popup_field_by_name_for_text_field',
        value: function _popup_field_by_name_for_text_field(zp, shape_name, name, page, $li) {
            var $field = (0, _jQueryLoader2.default)('#input-fields-page-' + zp.current_page).find('*[name="zetaprints-_' + shape_name + '"]').not('[type="hidden"]');

            var $_field = $field;
            var $parent = $field.parents('.zetaprints-text-field-wrapper');

            if ($parent.length) {
                $field = $parent;
            }

            var full_name = 'zetaprints-_' + name;

            if (_jQueryLoader2.default.fn.text_field_editor && page.fields[shape_name]['colour-picker'] === 'RGB') {
                $_field.text_field_editor('move', $li.find('.fieldbox-tab-inner'));
            }

            $li.addClass('text-field');

            //var field = $field[0];

            //if ($_field) {
            //Workaround for IE browser.
            //It moves cursor to the end of input field after focus.
            //  if (field.createTextRange) {
            //    var range = field.createTextRange();
            //    var position = jQuery(field).val().length;

            //    range.collapse(true);
            //    range.move('character', position);
            //    range.select();
            //  }
            //}
            return { $field: $field, $_field: $_field, $parent: $parent, full_name: full_name };
        }

        /**
         * @param {string} full_name
         * @return {string}
         * @api
         */

    }, {
        key: 'popdown_field_by_name',
        value: function popdown_field_by_name() {
            var full_name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            var personalization_form_instance = this.personalization_form_instance;
            var field = full_name ? (0, _jQueryLoader2.default)('*[value="' + full_name + '"]', (0, _jQueryLoader2.default)('div#fancybox-content')) : (0, _jQueryLoader2.default)(':input', (0, _jQueryLoader2.default)('div#fancybox-content'));

            if (!field.length) {
                return '';
            }

            if (!full_name) {
                full_name = (0, _jQueryLoader2.default)(field).val();
            }

            var name = full_name.substring(12);
            var $box = (0, _jQueryLoader2.default)('.fieldbox[title="' + name + '"]');

            $box.find('.fieldbox-field').children().each(function () {
                var $element = (0, _jQueryLoader2.default)(this);
                var $_element = $element;

                if ($element.hasClass('zetaprints-text-field-wrapper')) {
                    $_element = $element.find('.zetaprints-field');
                }

                if (_jQueryLoader2.default.fn.colorpicker && $element.hasClass('selector-content')) {
                    $element.find('> .tabs-wrapper > .tab').filter('.colour-picker, .color-picker').each(function () {
                        personalization_form_instance.hide_colorpicker((0, _jQueryLoader2.default)(this));
                    });
                }

                var data = $element.data('in-preview-edit');

                //Remember checked radio button for IE7 workaround
                var $input = $element.find(':checked');

                //!!! Following code checks back initially selected radio button
                //!!! Don't know why it happens
                $element.detach().appendTo(data.parent);

                if (typeof data.style === 'undefined') {
                    $element.removeAttr('style');
                } else {
                    $element.attr('style', data.style);
                }

                //!!! Stupid work around for stupid IE7
                $input.change().prop('checked', true);

                if (_jQueryLoader2.default.fn.text_field_editor) {
                    $_element.text_field_editor('move', data.parent.parents('dl').children('dt'));
                }

                if (data.parent.hasClass('zetaprints-images-selector')) {
                    personalization_form_instance.scroll_strip((0, _jQueryLoader2.default)($element.find('ul.tab-buttons li.ui-tabs-selected a').attr('href')));
                }
            });

            $box.remove();

            (0, _jQueryLoader2.default)(field).remove();

            (0, _jQueryLoader2.default)('#current-shape').attr('id', '');

            return name;
        }

        /**
         * @return {jQuery|HTMLElement}
         * @private
         */

    }, {
        key: '_get_current_shapes_container',
        value: function _get_current_shapes_container() {
            var container = (0, _jQueryLoader2.default)('div#fancybox-content:visible');
            if (container.length > 0) {
                return container;
            }

            return (0, _jQueryLoader2.default)('div.product-img-box');
        }

        /**
         * @param {number} x
         * @param {number} y
         * @param {jQuery|HTMLElement} $container
         * @return {{x: number, y: number}}
         * @private
         */

    }, {
        key: '_glob_to_rel_coords',
        value: function _glob_to_rel_coords(x, y, $container) {
            var container_offset = $container.offset();

            x = x - container_offset.left;
            y = y - container_offset.top;

            var width = $container.width();
            var height = $container.height();

            return { x: x / width, y: y / height };
        }

        /**
         * @param c
         * @return {Array}
         * @private
         */

    }, {
        key: '_get_shapes_by_coords',
        value: function _get_shapes_by_coords(c) {
            var zp = this.personalization_form_instance.data;
            var page = zp.template_details.pages[zp.current_page];

            var shapes = [];

            var page_shapes = page.shapes;
            for (var name in page_shapes) {
                if (page_shapes.hasOwnProperty(name)) {
                    var shape = page_shapes[name];

                    if (shape.x1 <= c.x && c.x <= shape.x2 && shape.y1 <= c.y && c.y <= shape.y2) {
                        shapes.push(shape);
                    }
                }
            }

            return shapes;
        }

        /**
         * @param {Event} event
         * @api
         */

    }, {
        key: 'shape_handler',
        value: function shape_handler(event) {
            event.preventDefault();
            var zp = this.personalization_form_instance.data;
            var shape = (0, _jQueryLoader2.default)(event.target).parent();

            if (_jQueryLoader2.default.fn.draggable && _jQueryLoader2.default.fn.tabs && event.type === 'click') {
                var shapes = void 0;
                if (event.pageX && event.pageY) {
                    var c = this._glob_to_rel_coords(event.pageX, event.pageY, event.data.container);
                    shapes = this._get_shapes_by_coords(c);

                    //Remember selected shapes for further use
                    shape.data('selected-shapes', shapes);
                } else {
                    shapes = shape.data('selected-shapes');
                    shape.data('selected-shapes', undefined);
                }

                for (var i = 0; i < shapes.length; i++) {
                    event.data.container.find('.zetaprints-field-shape.bottom[title="' + shapes[i].name + '"]').addClass('zetaprints-shape-selected');
                }

                (0, _jQueryLoader2.default)('#current-shape').attr('id', '');
                (0, _jQueryLoader2.default)(shape).attr('id', 'current-shape');

                (0, _jQueryLoader2.default)('#preview-image-page-' + zp.current_page).click();
            } else if (event.type === 'mouseover') {
                (0, _jQueryLoader2.default)('#zetaprints-preview-image-container > div.zetaprints-field-shape.bottom').removeClass('highlighted');
                (0, _jQueryLoader2.default)(shape).addClass('highlighted');

                this.highlight_field_by_name((0, _jQueryLoader2.default)(shape).attr('title'));
            } else {
                (0, _jQueryLoader2.default)(shape).removeClass('highlighted');

                this.dehighlight_field_by_name((0, _jQueryLoader2.default)(shape).attr('title'));
            }
        }

        /**
         * @param {Event} event
         * @return {boolean}
         */

    }, {
        key: 'fancy_shape_handler',
        value: function fancy_shape_handler(event) {
            var zp = this.personalization_form_instance.data;
            var shape = (0, _jQueryLoader2.default)(event.target).parent();

            if (_jQueryLoader2.default.fn.draggable && _jQueryLoader2.default.fn.tabs && event.type === 'click') {
                if ((0, _jQueryLoader2.default)(shape).children().length > 1) {
                    return false;
                }

                (0, _jQueryLoader2.default)('div#fancybox-content div.zetaprints-field-shape.highlighted').removeClass('highlighted');

                shape.addClass("highlighted");

                this.popdown_field_by_name(undefined, true);

                var name = shape.attr('title');

                var _shape = zp.template_details.pages[zp.current_page].shapes[name];

                var fields = [];
                if (!_shape._selected_shape_names) {
                    var c = this._glob_to_rel_coords(event.pageX, event.pageY, event.data.container.children('#fancybox-img'));

                    var shapes = get_shapes_by_coords(c).reverse();

                    for (var i = 0; i < shapes.length; i++) {
                        fields = fields.concat(shapes[i].name.split('; '));
                    }

                    _shape._fields = fields;
                }

                this.popup_field_by_name(name, { top: event.pageY, left: event.pageX }, fields);

                return false;
            }

            if (event.type === 'mouseover') {
                var highlighted = (0, _jQueryLoader2.default)('div#fancybox-content > div.zetaprints-field-shape.highlighted');
                if ((0, _jQueryLoader2.default)(highlighted).children().length <= 1) {
                    (0, _jQueryLoader2.default)(highlighted).removeClass('highlighted');
                }

                (0, _jQueryLoader2.default)(shape).addClass('highlighted');
            } else if ((0, _jQueryLoader2.default)(shape).children().length <= 1) {
                (0, _jQueryLoader2.default)(shape).removeClass('highlighted');
            }
        }

        /**
         * Add the in-preview editing
         */

    }, {
        key: 'add_in_preview_edit_handlers',
        value: function add_in_preview_edit_handlers() {
            var _this3 = this;

            var _this = this;
            var zp = this.personalization_form_instance.data;
            this._register_text_field_handler();

            this._register_image_selector_handler(zp, _this);

            $(document).on('click', 'img#fancybox-img', function () {
                (0, _jQueryLoader2.default)('div.zetaprints-field-shape.bottom', (0, _jQueryLoader2.default)('div#fancybox-content')).removeClass('highlighted');
                _this3.popdown_field_by_name();
            });

            var fancybox_center_function = _jQueryLoader2.default.fancybox.center;
            _jQueryLoader2.default.fancybox.center = function () {
                var wrap = (0, _jQueryLoader2.default)('div#fancybox-wrap');
                var orig_position = wrap.position();
                fancybox_center_function();
                var new_position = wrap.position();

                if (orig_position.top !== new_position.top || orig_position.left !== new_position.left) {
                    _this.popup_field_by_name(_this.popdown_field_by_name());
                }
            };
        }

        /**
         * @private
         */

    }, {
        key: '_register_image_selector_handler',
        value: function _register_image_selector_handler() {
            var _this = this;
            var zp = this.personalization_form_instance.data;

            (0, _jQueryLoader2.default)('div.zetaprints-images-selector').mouseover(function () {
                var shapes = _this.shape_repository.get_shapes_of_current_page();
                var name = (0, _jQueryLoader2.default)(this).attr('title');
                var shape = _this.get_shape_by_name(name, shapes);

                _this.highlight_shape(shape, _this._get_current_shapes_container());
            }).mouseout(function () {
                if (!(0, _jQueryLoader2.default)(this).children('div.fieldbox').length) {
                    var shapes = _this.shape_repository.get_shapes_of_current_page();
                    var name = (0, _jQueryLoader2.default)(this).attr('title');
                    var shape = _this.get_shape_by_name(name, shapes);

                    _this.dehighlight_shape(shape, _this._get_current_shapes_container());
                }
            });
        }

        /**
         * @private
         */

    }, {
        key: '_register_text_field_handler',
        value: function _register_text_field_handler() {
            var _this = this;
            var zp = this.personalization_form_instance.data;

            (0, _jQueryLoader2.default)('div.zetaprints-page-input-fields').find('dd').find('input, textarea, select').mouseover(function () {
                var shapes = _this.shape_repository.get_shapes_of_current_page();
                var name = (0, _jQueryLoader2.default)(this).attr('name').substring(12);
                var shape = _this.get_shape_by_name(name, shapes);

                _this.highlight_shape(shape, _this._get_current_shapes_container());
            }).mouseout(function () {
                var shapes = _this.shape_repository.get_shapes_of_current_page();
                var name = (0, _jQueryLoader2.default)(this).attr('name').substring(12);
                var shape = _this.get_shape_by_name(name, shapes);

                _this.dehighlight_shape(shape, _this._get_current_shapes_container());
            });
        }

        /**
         * @param {string} name
         * @param {Object.<string, Shape>} shapes Dictionary of Shapes
         * @return {*}
         * @api
         */

    }, {
        key: 'get_shape_by_name',
        value: function get_shape_by_name(name, shapes) {
            for (var _name in shapes) {
                if (shapes.hasOwnProperty(_name)) {
                    var names = _name.split('; ');

                    for (var i = 0; i < names.length; i++) {
                        if (names[i] === name) {
                            return shapes[_name];
                        }
                    }
                }
            }

            return null;
        }
    }], [{
        key: 'precalculate_shapes',
        value: function precalculate_shapes(template_details) {
            var pages = template_details.pages;
            for (var page in pages) {
                if (pages.hasOwnProperty(page)) {
                    var shapes = pages[page].shapes;
                    for (var name in shapes) {
                        if (shapes.hasOwnProperty(name)) {
                            var shape = shapes[name];

                            shape.left = shape.x1 * 100;
                            shape.top = shape.y1 * 100;
                            shape.visual_width = (shape.x2 - shape.x1) * 100;
                            shape.visual_height = (shape.y2 - shape.y1) * 100;
                        }
                    }
                }
            }
        }
    }]);

    return InPreviewEditController;
}();

exports.default = InPreviewEditController;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jQueryLoader = __webpack_require__(3);

var _jQueryLoader2 = _interopRequireDefault(_jQueryLoader);

var _Logger = __webpack_require__(2);

var _Logger2 = _interopRequireDefault(_Logger);

var _LightboxConfiguration = __webpack_require__(10);

var _LightboxConfiguration2 = _interopRequireDefault(_LightboxConfiguration);

var _AbstractLightbox2 = __webpack_require__(11);

var _AbstractLightbox3 = _interopRequireDefault(_AbstractLightbox2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by cod on 20.4.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Lightbox = function (_AbstractLightbox) {
  _inherits(Lightbox, _AbstractLightbox);

  function Lightbox() {
    _classCallCheck(this, Lightbox);

    return _possibleConstructorReturn(this, (Lightbox.__proto__ || Object.getPrototypeOf(Lightbox)).apply(this, arguments));
  }

  _createClass(Lightbox, [{
    key: 'register',

    /**
     * @param {string|jQuery|HTMLElement} element
     * @param {LightboxConfiguration|object} options
     */
    value: function register(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      _Logger2.default.debug('[Lightbox] register', element);
      (0, _jQueryLoader2.default)(element).fancybox(this._prepare_options(options || new _LightboxConfiguration2.default()));
    }

    /**
     * @param {LightboxConfiguration|object} options
     */

  }, {
    key: 'open',
    value: function open() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

      _Logger2.default.debug('[Lightbox] open');
      _jQueryLoader2.default.fancybox(this._prepare_options(options || new _LightboxConfiguration2.default()));
    }
  }]);

  return Lightbox;
}(_AbstractLightbox3.default);

exports.default = Lightbox;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MetaDataHelper = function () {
    function MetaDataHelper() {
        _classCallCheck(this, MetaDataHelper);
    }

    _createClass(MetaDataHelper, null, [{
        key: 'zp_set_metadata',
        value: function zp_set_metadata(field, key, value) {
            if (!key) MetaDataHelper.zp_clear_metadata(field);else if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') field.metadata = key;else {
                if (!field.metadata) field.metadata = {};

                field.metadata[key] = value;
            }
        }
    }, {
        key: 'zp_get_metadata',
        value: function zp_get_metadata(field, key, default_value) {
            if (!field.metadata || !field.metadata[key]) return default_value;

            return field.metadata[key];
        }
    }, {
        key: 'zp_clear_metadata',
        value: function zp_clear_metadata(field) {
            field.metadata = undefined;
        }
    }, {
        key: 'zp_convert_metadata_to_string',
        value: function zp_convert_metadata_to_string(field) {
            var metadata = field.metadata;
            if (!metadata) return null;

            var s = '';

            for (var key in metadata) {
                if (metadata.hasOwnProperty(key) && metadata[key] !== undefined) {
                    s += key + '=' + metadata[key] + ';';
                }
            }

            return s.substring(0, s.length - 1);
        }
    }]);

    return MetaDataHelper;
}();

exports.default = MetaDataHelper;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by cod on 10.4.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _jQueryLoader = __webpack_require__(3);

var _jQueryLoader2 = _interopRequireDefault(_jQueryLoader);

var _UiHelper = __webpack_require__(8);

var _UiHelper2 = _interopRequireDefault(_UiHelper);

var _Logger = __webpack_require__(2);

var _Logger2 = _interopRequireDefault(_Logger);

var _Assert = __webpack_require__(7);

var _Assert2 = _interopRequireDefault(_Assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PreviewController = function () {
    /**
     * @param {PersonalizationForm} form_instance
     * @param {FakeAddToCartButton} fake_add_to_cart_button
     */
    function PreviewController(form_instance, fake_add_to_cart_button) {
        _classCallCheck(this, PreviewController);

        this.form_instance = form_instance;
        this.fake_add_to_cart_button = fake_add_to_cart_button;
        this.$_preview_placeholder = null;
        this._number_of_failed_updates = 0;

        this._success = this._success.bind(this);
        this.update_preview = this.update_preview.bind(this);
        this._update_preview_error = this._update_preview_error.bind(this);
    }

    /**
     * @return {TemplateDetail}
     */


    _createClass(PreviewController, [{
        key: "add_previews",


        /**
         *
         * @param {DataInterface} data
         */
        value: function add_previews(data) {
            //Add previews to the product page
            var pages = data.template_details.pages;
            for (var page_number in pages) {
                if (pages.hasOwnProperty(page_number)) {
                    this._add_preview(parseInt(page_number, 10), data);
                }
            }
        }

        /**
         *
         * @param {number} page_number
         * @param {DataInterface} data
         * @private
         */

    }, {
        key: "_add_preview",
        value: function _add_preview(page_number, data) {
            var _this = this;

            /**
             * @type {TemplateDetail}
             */
            var template_details = data.template_details;
            var product_image_element = _UiHelper2.default.instance().product_image_gallery;

            var url = '';

            // Don't load default image for the first page when updating it
            // on page loading. Otherwise the activity disappears after the default image
            // is loaded but before the image is updated.
            if (page_number === 1 && data.update_first_preview_on_load) {
                url = '';
            } else if (template_details.pages[page_number]['updated-preview-url']) {
                url = template_details.pages[page_number]['updated-preview-url'];

                if (window.place_preview_image_sharing_link) {
                    this.form_instance.update_preview_sharing_link_for_page(page_number, data.preview_sharing_links, url.split('/preview/')[1]);
                }
            } else {
                url = template_details.pages[page_number]['preview-url'];
            }

            var preview_image_page = (0, _jQueryLoader2.default)('<a id="preview-image-page-' + page_number + '" ' + 'class="zetaprints-template-preview zp-hidden" ' + 'href="' + url + '">' + '<img title="' + click_to_view_in_large_size + '" ' + 'src="' + url + '" ' + 'alt="Preview image for page ' + page_number + '" />' + '</a>').appendTo(product_image_element);

            var images = preview_image_page.children();

            images.bind('load', { page_number: page_number }, function (event) {
                _this._image_on_load_callback(data, event.data.page_number, this);
            });
        }

        /**
         * @param {DataInterface} data
         * @param {number} page_number
         * @param {HTMLImageElement|Element} image_element
         */

    }, {
        key: "_image_on_load_callback",
        value: function _image_on_load_callback(data, page_number, image_element) {
            var _this2 = this;

            _Logger2.default.log('_image_on_load_callback');
            var ui_helper = _UiHelper2.default.instance();

            var form_instance = this.form_instance;
            var has_image_zoomer = form_instance.has_image_zoomer;

            // Remove preview image placeholder
            this._remove_preview_placeholder();

            var $next_page_button = ui_helper.next_page_button;
            var $product_image_box = ui_helper.product_image_box;
            var $enlarge_button = ui_helper.enlarge_button;
            var $update_preview_button = ui_helper.update_preview_button;

            var previewOverlay = ui_helper.preview_overlay;
            previewOverlay.remove_no_preview();

            //Show or hide Next page button for the current page
            if (form_instance.can_show_next_page_button_for_page(data.current_page, data)) {
                $next_page_button.show();
            } else {
                $next_page_button.hide();
            }

            var pages = data.template_details.pages;

            var page = pages[page_number];

            if (page.preview_is_scaled === undefined) {
                var $_img = (0, _jQueryLoader2.default)(image_element).clone().css({
                    position: 'absolute',
                    left: '-10000px'
                }).appendTo('body');

                page.preview_is_scaled = $_img.width() > $product_image_box.width();

                $_img.remove();
            }

            //If no image zoomer on the page and image is for the first page
            //and first page was opened
            if (!has_image_zoomer) {
                if (page_number === 1 && data.current_page === 1) {
                    //then show preview for the first page
                    (0, _jQueryLoader2.default)('#preview-image-page-1').removeClass('zp-hidden');
                }

                var current_page = pages[data.current_page];

                if (page_number === data.current_page && !current_page.preview_is_scaled) {
                    $enlarge_button.addClass('zp-hidden');
                }
            }

            page.is_updating = false;

            if (!form_instance.page_has_updating(pages)) {
                //Enable Update preview action
                $update_preview_button.unbind('click');
                $update_preview_button.click(function () {
                    _this2.update_preview(_this2.form_instance.data);
                });

                previewOverlay.hide();
            }
        }

        /**
         *
         * @param {DataInterface} zeta_prints_data
         * @param {number[]|number|undefined}update_pages
         * @param {boolean} preserve_fields
         */

    }, {
        key: "update_preview",
        value: function update_preview(zeta_prints_data) {
            var _this3 = this;

            var update_pages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
            var preserve_fields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            _Assert2.default.assertObject(zeta_prints_data);
            var form_instance = this.form_instance;

            //!!!TODO: workaround
            //Remember page number
            var current_page = typeof update_pages === 'undefined' ? zeta_prints_data.current_page : update_pages.shift();

            if (typeof current_page === 'undefined') {
                _Logger2.default.warn('Could not detect current page');
                return;
            }

            //Disable click action
            _UiHelper2.default.instance().update_preview_button.unbind('click');
            _UiHelper2.default.instance().preview_overlay.show();

            if (_jQueryLoader2.default.fn.text_field_editor) {
                (0, _jQueryLoader2.default)('div.zetaprints-page-input-fields input,' + 'div.zetaprints-page-input-fields textarea').each(function () {

                    (0, _jQueryLoader2.default)(this).text_field_editor('hide');
                });
            }

            //!!!TODO: Variable name should be fixed

            /** @type {Page} */
            var page = zeta_prints_data.template_details.pages[current_page];
            var data = form_instance._prepare_metadata_from_page_number(current_page);

            page.is_updating = true;

            data[data.length] = {
                name: 'zetaprints-TemplateID',
                value: zeta_prints_data.template_details.guid
            };

            data[data.length] = { name: 'zetaprints-From', value: current_page };

            if (preserve_fields) {
                data[data.length] = { name: 'zetaprints-Preserve', value: 'yes' };
            }

            _jQueryLoader2.default.ajax({
                url: zeta_prints_data.url.preview,
                type: 'POST',
                dataType: 'json',
                data: _jQueryLoader2.default.param(data),

                error: function error() {
                    _this3._update_preview_error(page);
                },

                success: function success(data) {
                    _this3._success(page, current_page, data, update_pages, preserve_fields, zeta_prints_data);
                }

            });
        }

        /**
         *
         * @param {Page} page
         */

    }, {
        key: "_update_preview_error",
        value: function _update_preview_error(page) {
            var _this4 = this;

            var $update_preview_button = _UiHelper2.default.instance().update_preview_button;
            if (++this._number_of_failed_updates >= 2) {
                alert(cannot_update_preview_second_time);

                (0, _jQueryLoader2.default)('div.zetaprints-notice.to-update-preview').addClass('zp-hidden');
                this.fake_add_to_cart_button.remove();
                (0, _jQueryLoader2.default)('div.save-order span').css('display', 'none');
            } else {
                alert(cannot_update_preview);
            }

            $update_preview_button.click(function () {
                _Logger2.default.log('Should update preview');
                _this4.update_preview(_this4.form_instance.data);
            });

            page.is_updating = false;

            _UiHelper2.default.instance().preview_overlay.hide();
        }

        /**
         *
         * @param {Page} page
         * @param {number} current_page
         * @param {*} data
         * @param update_pages
         * @param preserve_fields
         * @param {DataInterface} zeta_prints_data
         * @private
         */

    }, {
        key: "_success",
        value: function _success(page, current_page, data, update_pages, preserve_fields, zeta_prints_data) {
            /**
             * @type {PersonalizationForm}
             */
            var form_instance = this.form_instance;
            var zp = form_instance.data;
            if (!data) {
                this._update_preview_error(page);
                return;
            }
            //!!! Make code in function to not depend on current page number
            //!!! (it's broken way to update preview, user can switch to another
            //!!! page while updating preview)
            //!!! Go throw template details and update previews which has updated
            //!!! preview images (updated-preview-image field)

            //!!! Use updated-preview-image and updated-thumb-image instead
            //!!! updated-preview-url and updated-preview-url
            //!!! Make urls in controller

            var $thumbs = (0, _jQueryLoader2.default)('div.zetaprints-image-tabs img');
            var pages_server_data = data.pages;

            //Update link to preview image in opened fancybox
            var fancy_img = (0, _jQueryLoader2.default)('#fancybox-img');
            if (fancy_img.length) {
                (0, _jQueryLoader2.default)(fancy_img).attr('src', pages_server_data[current_page]['updated-preview-url']);
            }

            for (var page_number in pages_server_data) {
                if (pages_server_data.hasOwnProperty(page_number)) {
                    var page_current_data = this.template_details.pages[page_number];
                    var page_server_data = pages_server_data[page_number];

                    if (page_server_data['updated-preview-image']) {
                        page_current_data['updated-preview-image'] = page_server_data['updated-preview-image'];
                        page_current_data['updated-preview-url'] = page_server_data['updated-preview-url'];
                    }

                    if (page_server_data['updated-thumb-image']) {
                        page_current_data['updated-thumb-image'] = page_server_data['updated-thumb-image'];
                        page_current_data['updated-thumb-url'] = page_server_data['updated-thumb-url'];
                    }

                    var preview_url = pages_server_data[page_number]['updated-preview-url'];

                    if (!preview_url) {
                        continue;
                    }

                    //Update links to preview image on current page
                    var $preview = (0, _jQueryLoader2.default)('#preview-image-page-' + page_number);

                    $preview.attr('href', preview_url);

                    $preview.find('img').attr('src', preview_url);

                    //Update link to preview thumbnail for current page tab
                    $thumbs.filter('[rel="page-' + page_number + '"]').attr('src', pages_server_data[page_number]['updated-thumb-url']);

                    var preview = pages_server_data[page_number]['updated-preview-image'];
                    preview = preview.split('preview/')[1];

                    //Update preview sharing link if the feature is enabled
                    if (window.place_preview_image_sharing_link) {
                        this.form_instance.update_preview_sharing_link_for_page(page_number, zp.preview_sharing_links, preview);
                    }
                }
            }

            //If there's image zoomer on the page
            if (form_instance.has_image_zoomer) {
                form_instance.disable_image_zoomer();

                //Add preview placeholder
                this.add_preview_placeholder();

                //Add all shapes to personalization form after first preview
                //update
                //if (zp.has_shapes && window.place_all_shapes_for_page
                //    && window.shape_handler)
                //  place_all_shapes_for_page(zp.template_details.pages_server_data[1].shapes,
                //                            $product_image_box,
                //                            shape_handler);
            }

            //Show preview sharing link if the feature is enabled
            if (window.place_preview_image_sharing_link) {
                form_instance.set_preview_sharing_link_for_page(current_page, zp.preview_sharing_links);
            }
            form_instance.product_form.removeClass('zp-user-data-changed');

            if (form_instance.is_all_pages_updated(zp.template_details) || zp.template_details.missed_pages === 'include' || zp.template_details.missed_pages === '') {

                (0, _jQueryLoader2.default)('input[name="zetaprints-previews"]').val(form_instance.export_previews_to_string(zp.template_details));

                (0, _jQueryLoader2.default)('div.zetaprints-notice.to-update-preview').addClass('zp-hidden');
                this.fake_add_to_cart_button.remove();
                (0, _jQueryLoader2.default)('div.save-order span').css('display', 'none');

                var pages = zp.template_details.pages;
                var n = void 0;
                for (n in pages) {
                    if (pages.hasOwnProperty(n)) {
                        form_instance.store_user_data(pages[n]);
                    }
                }
            } else {
                form_instance.store_user_data(page);
            }

            if (typeof update_pages !== 'undefined' && update_pages.length > 0) {
                this.update_preview(zeta_prints_data, update_pages, preserve_fields);
            }
        }

        /**
         * @private
         */

    }, {
        key: "_remove_preview_placeholder",
        value: function _remove_preview_placeholder() {
            _Logger2.default.log('_remove_preview_placeholder', this.$_preview_placeholder);

            if (this.$_preview_placeholder) {
                this.$_preview_placeholder.remove();
            }

            this.$_preview_placeholder = null;
        }

        /**
         * @api
         */

    }, {
        key: "add_preview_placeholder",
        value: function add_preview_placeholder() {
            _Logger2.default.log('add_preview placeholder');
            var productImageElement = _UiHelper2.default.instance().product_image_gallery;
            this.$_preview_placeholder = (0, _jQueryLoader2.default)('<div id="zp-preview-placeholder" />').appendTo(_UiHelper2.default.instance().product_image_gallery);
        }
    }, {
        key: "template_details",
        get: function get() {
            return this.form_instance.data.template_details;
        }
    }]);

    return PreviewController;
}();

exports.default = PreviewController;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by cod on 18.4.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _Logger = __webpack_require__(2);

var _Logger2 = _interopRequireDefault(_Logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PreviewOverlay = function () {
    /**
     * @param {HTMLElement} product_image_element
     * @param {string} updating_preview_image_text
     */
    function PreviewOverlay(product_image_element, updating_preview_image_text) {
        _classCallCheck(this, PreviewOverlay);

        this._element = $('<div id="zp-preview-overlay" class="zp-no-preview">' + '<div class="zp-preview-overlay-spinner">' + '<div />' + '</div>' + '<div class="zp-preview-overlay-text-wrapper">' + '<span class="zp-preview-overlay-text-left">' + '&nbsp;' + '</span>' + '<span class="zp-preview-overlay-text-middle">' + updating_preview_image_text + '&hellip;' + '</span>' + '<span class="zp-preview-overlay-text-right">' + '&nbsp;' + '</span>' + '</div>' + '</div>').appendTo(product_image_element);
    }

    // get element() {
    //     return this._element;
    // }

    /**
     * Hides the Preview Overlay
     *
     * @return {PreviewOverlay}
     */


    _createClass(PreviewOverlay, [{
        key: 'hide',
        value: function hide() {
            _Logger2.default.log('[PreviewOverlay] hide', this._element);
            this._element.addClass('zp-hidden');

            return this;
        }

        /**
         * Shows the Preview Overlay
         *
         * @return {PreviewOverlay}
         */

    }, {
        key: 'show',
        value: function show() {
            _Logger2.default.log('[PreviewOverlay] show', this._element);
            this._element.removeClass('zp-hidden');

            return this;
        }

        /**
         * @return {PreviewOverlay}
         */

    }, {
        key: 'remove_no_preview',
        value: function remove_no_preview() {
            this._element.removeClass('zp-no-preview');

            return this;
        }
    }]);

    return PreviewOverlay;
}();

exports.default = PreviewOverlay;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

/*jslint devel: true, bitwise: true, regexp: true, browser: true, confusion: true, unparam: true, eqeq: true, white: true, nomen: true, plusplus: true, maxerr: 50, indent: 4 */
/*globals jQuery,Color */

/*!
 * ColorPicker
 *
 * Copyright (c) 2011-2013 Martijn W. van der Lee
 * Licensed under the MIT.
 */
/* Full-featured colorpicker for jQueryUI with full theming support.
 * Most images from jPicker by Christopher T. Tillman.
 * Sourcecode created from scratch by Martijn W. van der Lee.
 */

//ZP-CHANGE:1 Cancel button should be always enabled
//ZP-ADDITION:1 Ignore subsequent calls for already closed dialog

;(function ($) {
    "use strict";

    var _colorpicker_index = 0,
        _container_popup = '<div class="ui-colorpicker ui-colorpicker-dialog ui-dialog ui-widget ui-widget-content ui-corner-all" style="display: none;"></div>',
        _container_inlineFrame = '<div class="ui-colorpicker ui-colorpicker-inline ui-dialog ui-widget ui-widget-content ui-corner-all"></div>',
        _container_inline = '<div class="ui-colorpicker ui-colorpicker-inline"></div>',
        _intToHex = function _intToHex(dec) {
        var result = Math.floor(dec).toString(16);
        if (result.length === 1) {
            result = '0' + result;
        }
        return result.toLowerCase();
    },
        _parseHex = function _parseHex(color) {
        var c, m;

        // {#}rrggbb
        m = /^#?([a-fA-F0-9]{1,6})$/.exec(color);
        if (m) {
            c = parseInt(m[1], 16);
            return new $.colorpicker.Color((c >> 16 & 0xFF) / 255, (c >> 8 & 0xFF) / 255, (c & 0xFF) / 255);
        }

        return new $.colorpicker.Color();
    },
        _layoutTable = function _layoutTable(layout, callback) {
        var bitmap, x, y, width, height, columns, rows, index, cell, html, w, h, colspan, walked;

        layout.sort(function (a, b) {
            if (a.pos[1] === b.pos[1]) {
                return a.pos[0] - b.pos[0];
            }
            return a.pos[1] - b.pos[1];
        });

        // Determine dimensions of the table
        width = 0;
        height = 0;
        $.each(layout, function (index, part) {
            width = Math.max(width, part.pos[0] + part.pos[2]);
            height = Math.max(height, part.pos[1] + part.pos[3]);
        });

        // Initialize bitmap
        bitmap = [];
        for (x = 0; x < width; ++x) {
            bitmap.push([]);
        }

        // Mark rows and columns which have layout assigned
        rows = [];
        columns = [];
        $.each(layout, function (index, part) {
            // mark columns
            for (x = 0; x < part.pos[2]; x += 1) {
                columns[part.pos[0] + x] = true;
            }
            for (y = 0; y < part.pos[3]; y += 1) {
                rows[part.pos[1] + y] = true;
            }
        });

        // Generate the table
        html = '';
        cell = layout[index = 0];
        for (y = 0; y < height; ++y) {
            html += '<tr>';
            x = 0;
            while (x < width) {
                if (typeof cell !== 'undefined' && x === cell.pos[0] && y === cell.pos[1]) {
                    // Create a "real" cell
                    html += callback(cell, x, y);

                    for (h = 0; h < cell.pos[3]; h += 1) {
                        for (w = 0; w < cell.pos[2]; w += 1) {
                            bitmap[x + w][y + h] = true;
                        }
                    }

                    x += cell.pos[2];
                    cell = layout[++index];
                } else {
                    // Fill in the gaps
                    colspan = 0;
                    walked = false;

                    while (x < width && bitmap[x][y] === undefined && (cell === undefined || y < cell.pos[1] || y === cell.pos[1] && x < cell.pos[0])) {
                        if (columns[x] === true) {
                            colspan += 1;
                        }
                        walked = true;
                        x += 1;
                    }

                    if (colspan > 0) {
                        html += '<td colspan="' + colspan + '"></td>';
                    } else if (!walked) {
                        x += 1;
                    }
                }
            }
            html += '</tr>';
        }

        return '<table cellspacing="0" cellpadding="0" border="0"><tbody>' + html + '</tbody></table>';
    };

    $.colorpicker = new function () {
        this.regional = {
            '': {
                ok: 'OK',
                cancel: 'Cancel',
                none: 'None',
                button: 'Color',
                title: 'Pick a color',
                transparent: 'Transparent',
                hsvH: 'H',
                hsvS: 'S',
                hsvV: 'V',
                rgbR: 'R',
                rgbG: 'G',
                rgbB: 'B',
                labL: 'L',
                labA: 'a',
                labB: 'b',
                hslH: 'H',
                hslS: 'S',
                hslL: 'L',
                cmykC: 'C',
                cmykM: 'M',
                cmykY: 'Y',
                cmykK: 'K',
                alphaA: 'A'
            }
        };

        this.swatches = {
            'html': [{ name: 'black', r: 0, g: 0, b: 0 }, { name: 'dimgray', r: 0.4117647058823529, g: 0.4117647058823529, b: 0.4117647058823529 }, { name: 'gray', r: 0.5019607843137255, g: 0.5019607843137255, b: 0.5019607843137255 }, { name: 'darkgray', r: 0.6627450980392157, g: 0.6627450980392157, b: 0.6627450980392157 }, { name: 'silver', r: 0.7529411764705882, g: 0.7529411764705882, b: 0.7529411764705882 }, { name: 'lightgrey', r: 0.8274509803921568, g: 0.8274509803921568, b: 0.8274509803921568 }, { name: 'gainsboro', r: 0.8627450980392157, g: 0.8627450980392157, b: 0.8627450980392157 }, { name: 'whitesmoke', r: 0.9607843137254902, g: 0.9607843137254902, b: 0.9607843137254902 }, { name: 'white', r: 1, g: 1, b: 1 }, { name: 'rosybrown', r: 0.7372549019607844, g: 0.5607843137254902, b: 0.5607843137254902 }, { name: 'indianred', r: 0.803921568627451, g: 0.3607843137254902, b: 0.3607843137254902 }, { name: 'brown', r: 0.6470588235294118, g: 0.16470588235294117, b: 0.16470588235294117 }, { name: 'firebrick', r: 0.6980392156862745, g: 0.13333333333333333, b: 0.13333333333333333 }, { name: 'lightcoral', r: 0.9411764705882353, g: 0.5019607843137255, b: 0.5019607843137255 }, { name: 'maroon', r: 0.5019607843137255, g: 0, b: 0 }, { name: 'darkred', r: 0.5450980392156862, g: 0, b: 0 }, { name: 'red', r: 1, g: 0, b: 0 }, { name: 'snow', r: 1, g: 0.9803921568627451, b: 0.9803921568627451 }, { name: 'salmon', r: 0.9803921568627451, g: 0.5019607843137255, b: 0.4470588235294118 }, { name: 'mistyrose', r: 1, g: 0.8941176470588236, b: 0.8823529411764706 }, { name: 'tomato', r: 1, g: 0.38823529411764707, b: 0.2784313725490196 }, { name: 'darksalmon', r: 0.9137254901960784, g: 0.5882352941176471, b: 0.47843137254901963 }, { name: 'orangered', r: 1, g: 0.27058823529411763, b: 0 }, { name: 'coral', r: 1, g: 0.4980392156862745, b: 0.3137254901960784 }, { name: 'lightsalmon', r: 1, g: 0.6274509803921569, b: 0.47843137254901963 }, { name: 'sienna', r: 0.6274509803921569, g: 0.3215686274509804, b: 0.17647058823529413 }, { name: 'seashell', r: 1, g: 0.9607843137254902, b: 0.9333333333333333 }, { name: 'chocolate', r: 0.8235294117647058, g: 0.4117647058823529, b: 0.11764705882352941 }, { name: 'saddlebrown', r: 0.5450980392156862, g: 0.27058823529411763, b: 0.07450980392156863 }, { name: 'sandybrown', r: 0.9568627450980393, g: 0.6431372549019608, b: 0.3764705882352941 }, { name: 'peachpuff', r: 1, g: 0.8549019607843137, b: 0.7254901960784313 }, { name: 'peru', r: 0.803921568627451, g: 0.5215686274509804, b: 0.24705882352941178 }, { name: 'linen', r: 0.9803921568627451, g: 0.9411764705882353, b: 0.9019607843137255 }, { name: 'darkorange', r: 1, g: 0.5490196078431373, b: 0 }, { name: 'bisque', r: 1, g: 0.8941176470588236, b: 0.7686274509803922 }, { name: 'burlywood', r: 0.8705882352941177, g: 0.7215686274509804, b: 0.5294117647058824 }, { name: 'tan', r: 0.8235294117647058, g: 0.7058823529411765, b: 0.5490196078431373 }, { name: 'antiquewhite', r: 0.9803921568627451, g: 0.9215686274509803, b: 0.8431372549019608 }, { name: 'navajowhite', r: 1, g: 0.8705882352941177, b: 0.6784313725490196 }, { name: 'blanchedalmond', r: 1, g: 0.9215686274509803, b: 0.803921568627451 }, { name: 'papayawhip', r: 1, g: 0.9372549019607843, b: 0.8352941176470589 }, { name: 'orange', r: 1, g: 0.6470588235294118, b: 0 }, { name: 'moccasin', r: 1, g: 0.8941176470588236, b: 0.7098039215686275 }, { name: 'wheat', r: 0.9607843137254902, g: 0.8705882352941177, b: 0.7019607843137254 }, { name: 'oldlace', r: 0.9921568627450981, g: 0.9607843137254902, b: 0.9019607843137255 }, { name: 'floralwhite', r: 1, g: 0.9803921568627451, b: 0.9411764705882353 }, { name: 'goldenrod', r: 0.8549019607843137, g: 0.6470588235294118, b: 0.12549019607843137 }, { name: 'darkgoldenrod', r: 0.7215686274509804, g: 0.5254901960784314, b: 0.043137254901960784 }, { name: 'cornsilk', r: 1, g: 0.9725490196078431, b: 0.8627450980392157 }, { name: 'gold', r: 1, g: 0.8431372549019608, b: 0 }, { name: 'palegoldenrod', r: 0.9333333333333333, g: 0.9098039215686274, b: 0.6666666666666666 }, { name: 'khaki', r: 0.9411764705882353, g: 0.9019607843137255, b: 0.5490196078431373 }, { name: 'lemonchiffon', r: 1, g: 0.9803921568627451, b: 0.803921568627451 }, { name: 'darkkhaki', r: 0.7411764705882353, g: 0.7176470588235294, b: 0.4196078431372549 }, { name: 'beige', r: 0.9607843137254902, g: 0.9607843137254902, b: 0.8627450980392157 }, { name: 'lightgoldenrodyellow', r: 0.9803921568627451, g: 0.9803921568627451, b: 0.8235294117647058 }, { name: 'olive', r: 0.5019607843137255, g: 0.5019607843137255, b: 0 }, { name: 'yellow', r: 1, g: 1, b: 0 }, { name: 'lightyellow', r: 1, g: 1, b: 0.8784313725490196 }, { name: 'ivory', r: 1, g: 1, b: 0.9411764705882353 }, { name: 'olivedrab', r: 0.4196078431372549, g: 0.5568627450980392, b: 0.13725490196078433 }, { name: 'yellowgreen', r: 0.6039215686274509, g: 0.803921568627451, b: 0.19607843137254902 }, { name: 'darkolivegreen', r: 0.3333333333333333, g: 0.4196078431372549, b: 0.1843137254901961 }, { name: 'greenyellow', r: 0.6784313725490196, g: 1, b: 0.1843137254901961 }, { name: 'lawngreen', r: 0.48627450980392156, g: 0.9882352941176471, b: 0 }, { name: 'chartreuse', r: 0.4980392156862745, g: 1, b: 0 }, { name: 'darkseagreen', r: 0.5607843137254902, g: 0.7372549019607844, b: 0.5607843137254902 }, { name: 'forestgreen', r: 0.13333333333333333, g: 0.5450980392156862, b: 0.13333333333333333 }, { name: 'limegreen', r: 0.19607843137254902, g: 0.803921568627451, b: 0.19607843137254902 }, { name: 'lightgreen', r: 0.5647058823529412, g: 0.9333333333333333, b: 0.5647058823529412 }, { name: 'palegreen', r: 0.596078431372549, g: 0.984313725490196, b: 0.596078431372549 }, { name: 'darkgreen', r: 0, g: 0.39215686274509803, b: 0 }, { name: 'green', r: 0, g: 0.5019607843137255, b: 0 }, { name: 'lime', r: 0, g: 1, b: 0 }, { name: 'honeydew', r: 0.9411764705882353, g: 1, b: 0.9411764705882353 }, { name: 'mediumseagreen', r: 0.23529411764705882, g: 0.7019607843137254, b: 0.44313725490196076 }, { name: 'seagreen', r: 0.1803921568627451, g: 0.5450980392156862, b: 0.3411764705882353 }, { name: 'springgreen', r: 0, g: 1, b: 0.4980392156862745 }, { name: 'mintcream', r: 0.9607843137254902, g: 1, b: 0.9803921568627451 }, { name: 'mediumspringgreen', r: 0, g: 0.9803921568627451, b: 0.6039215686274509 }, { name: 'mediumaquamarine', r: 0.4, g: 0.803921568627451, b: 0.6666666666666666 }, { name: 'aquamarine', r: 0.4980392156862745, g: 1, b: 0.8313725490196079 }, { name: 'turquoise', r: 0.25098039215686274, g: 0.8784313725490196, b: 0.8156862745098039 }, { name: 'lightseagreen', r: 0.12549019607843137, g: 0.6980392156862745, b: 0.6666666666666666 }, { name: 'mediumturquoise', r: 0.2823529411764706, g: 0.8196078431372549, b: 0.8 }, { name: 'darkslategray', r: 0.1843137254901961, g: 0.30980392156862746, b: 0.30980392156862746 }, { name: 'paleturquoise', r: 0.6862745098039216, g: 0.9333333333333333, b: 0.9333333333333333 }, { name: 'teal', r: 0, g: 0.5019607843137255, b: 0.5019607843137255 }, { name: 'darkcyan', r: 0, g: 0.5450980392156862, b: 0.5450980392156862 }, { name: 'darkturquoise', r: 0, g: 0.807843137254902, b: 0.8196078431372549 }, { name: 'aqua', r: 0, g: 1, b: 1 }, { name: 'cyan', r: 0, g: 1, b: 1 }, { name: 'lightcyan', r: 0.8784313725490196, g: 1, b: 1 }, { name: 'azure', r: 0.9411764705882353, g: 1, b: 1 }, { name: 'cadetblue', r: 0.37254901960784315, g: 0.6196078431372549, b: 0.6274509803921569 }, { name: 'powderblue', r: 0.6901960784313725, g: 0.8784313725490196, b: 0.9019607843137255 }, { name: 'lightblue', r: 0.6784313725490196, g: 0.8470588235294118, b: 0.9019607843137255 }, { name: 'deepskyblue', r: 0, g: 0.7490196078431373, b: 1 }, { name: 'skyblue', r: 0.5294117647058824, g: 0.807843137254902, b: 0.9215686274509803 }, { name: 'lightskyblue', r: 0.5294117647058824, g: 0.807843137254902, b: 0.9803921568627451 }, { name: 'steelblue', r: 0.27450980392156865, g: 0.5098039215686274, b: 0.7058823529411765 }, { name: 'aliceblue', r: 0.9411764705882353, g: 0.9725490196078431, b: 1 }, { name: 'dodgerblue', r: 0.11764705882352941, g: 0.5647058823529412, b: 1 }, { name: 'slategray', r: 0.4392156862745098, g: 0.5019607843137255, b: 0.5647058823529412 }, { name: 'lightslategray', r: 0.4666666666666667, g: 0.5333333333333333, b: 0.6 }, { name: 'lightsteelblue', r: 0.6901960784313725, g: 0.7686274509803922, b: 0.8705882352941177 }, { name: 'cornflowerblue', r: 0.39215686274509803, g: 0.5843137254901961, b: 0.9294117647058824 }, { name: 'royalblue', r: 0.2549019607843137, g: 0.4117647058823529, b: 0.8823529411764706 }, { name: 'midnightblue', r: 0.09803921568627451, g: 0.09803921568627451, b: 0.4392156862745098 }, { name: 'lavender', r: 0.9019607843137255, g: 0.9019607843137255, b: 0.9803921568627451 }, { name: 'navy', r: 0, g: 0, b: 0.5019607843137255 }, { name: 'darkblue', r: 0, g: 0, b: 0.5450980392156862 }, { name: 'mediumblue', r: 0, g: 0, b: 0.803921568627451 }, { name: 'blue', r: 0, g: 0, b: 1 }, { name: 'ghostwhite', r: 0.9725490196078431, g: 0.9725490196078431, b: 1 }, { name: 'darkslateblue', r: 0.2823529411764706, g: 0.23921568627450981, b: 0.5450980392156862 }, { name: 'slateblue', r: 0.41568627450980394, g: 0.35294117647058826, b: 0.803921568627451 }, { name: 'mediumslateblue', r: 0.4823529411764706, g: 0.40784313725490196, b: 0.9333333333333333 }, { name: 'mediumpurple', r: 0.5764705882352941, g: 0.4392156862745098, b: 0.8588235294117647 }, { name: 'blueviolet', r: 0.5411764705882353, g: 0.16862745098039217, b: 0.8862745098039215 }, { name: 'indigo', r: 0.29411764705882354, g: 0, b: 0.5098039215686274 }, { name: 'darkorchid', r: 0.6, g: 0.19607843137254902, b: 0.8 }, { name: 'darkviolet', r: 0.5803921568627451, g: 0, b: 0.8274509803921568 }, { name: 'mediumorchid', r: 0.7294117647058823, g: 0.3333333333333333, b: 0.8274509803921568 }, { name: 'thistle', r: 0.8470588235294118, g: 0.7490196078431373, b: 0.8470588235294118 }, { name: 'plum', r: 0.8666666666666667, g: 0.6274509803921569, b: 0.8666666666666667 }, { name: 'violet', r: 0.9333333333333333, g: 0.5098039215686274, b: 0.9333333333333333 }, { name: 'purple', r: 0.5019607843137255, g: 0, b: 0.5019607843137255 }, { name: 'darkmagenta', r: 0.5450980392156862, g: 0, b: 0.5450980392156862 }, { name: 'magenta', r: 1, g: 0, b: 1 }, { name: 'fuchsia', r: 1, g: 0, b: 1 }, { name: 'orchid', r: 0.8549019607843137, g: 0.4392156862745098, b: 0.8392156862745098 }, { name: 'mediumvioletred', r: 0.7803921568627451, g: 0.08235294117647059, b: 0.5215686274509804 }, { name: 'deeppink', r: 1, g: 0.0784313725490196, b: 0.5764705882352941 }, { name: 'hotpink', r: 1, g: 0.4117647058823529, b: 0.7058823529411765 }, { name: 'palevioletred', r: 0.8588235294117647, g: 0.4392156862745098, b: 0.5764705882352941 }, { name: 'lavenderblush', r: 1, g: 0.9411764705882353, b: 0.9607843137254902 }, { name: 'crimson', r: 0.8627450980392157, g: 0.0784313725490196, b: 0.23529411764705882 }, { name: 'pink', r: 1, g: 0.7529411764705882, b: 0.796078431372549 }, { name: 'lightpink', r: 1, g: 0.7137254901960784, b: 0.7568627450980392 }]
        };

        this.writers = {
            '#HEX': function HEX(color, that) {
                return that._formatColor('#rxgxbx', color);
            },
            '#HEX3': function HEX3(color, that) {
                var hex3 = $.colorpicker.writers.HEX3(color);
                return hex3 === false ? false : '#' + hex3;
            },
            'HEX': function HEX(color, that) {
                return that._formatColor('rxgxbx', color);
            },
            'HEX3': function HEX3(color, that) {
                var rgb = color.getRGB(),
                    r = Math.floor(rgb.r * 255),
                    g = Math.floor(rgb.g * 255),
                    b = Math.floor(rgb.b * 255);

                if (r >>> 4 === (r &= 0xf) && g >>> 4 === (g &= 0xf) && b >>> 4 === (b &= 0xf)) {
                    return r.toString(16) + g.toString(16) + b.toString(16);
                }
                return false;
            },
            'RGB': function RGB(color, that) {
                return color.getAlpha() >= 1 ? that._formatColor('rgb(rd,gd,bd)', color) : false;
            },
            'RGBA': function RGBA(color, that) {
                return that._formatColor('rgba(rd,gd,bd,af)', color);
            },
            'RGB%': function RGB(color, that) {
                return color.getAlpha() >= 1 ? that._formatColor('rgb(rp%,gp%,bp%)', color) : false;
            },
            'RGBA%': function RGBA(color, that) {
                return that._formatColor('rgba(rp%,gp%,bp%,af)', color);
            },
            'HSL': function HSL(color, that) {
                return color.getAlpha() >= 1 ? that._formatColor('hsl(hd,sd,vd)', color) : false;
            },
            'HSLA': function HSLA(color, that) {
                return that._formatColor('hsla(hd,sd,vd,af)', color);
            },
            'HSL%': function HSL(color, that) {
                return color.getAlpha() >= 1 ? that._formatColor('hsl(hp%,sp%,vp%)', color) : false;
            },
            'HSLA%': function HSLA(color, that) {
                return that._formatColor('hsla(hp%,sp%,vp%,af)', color);
            },
            'NAME': function NAME(color, that) {
                return that._closestName(color);
            },
            'EXACT': function EXACT(color, that) {
                // @todo experimental. Implement a good fallback list
                return that._exactName(color);
            }
        };

        this.parsers = {
            '': function _(color) {
                if (color === '') {
                    return new $.colorpicker.Color();
                }
            },
            'NAME': function NAME(color, that) {
                var c = that._getSwatch($.trim(color));
                if (c) {
                    return new $.colorpicker.Color(c.r, c.g, c.b);
                }
            },
            'RGBA': function RGBA(color) {
                var m = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/.exec(color);
                if (m) {
                    return new $.colorpicker.Color(m[1] / 255, m[2] / 255, m[3] / 255, parseFloat(m[4]));
                }
            },
            'RGBA%': function RGBA(color) {
                var m = /^rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/.exec(color);
                if (m) {
                    return new $.colorpicker.Color(m[1] / 100, m[2] / 100, m[3] / 100, m[4] / 100);
                }
            },
            'HSLA': function HSLA(color) {
                var m = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/.exec(color);
                if (m) {
                    return new $.colorpicker.Color().setHSL(m[1] / 255, m[2] / 255, m[3] / 255).setAlpha(parseFloat(m[4]));
                }
            },
            'HSLA%': function HSLA(color) {
                var m = /^hsla?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/.exec(color);
                if (m) {
                    return new $.colorpicker.Color().setHSL(m[1] / 100, m[2] / 100, m[3] / 100).setAlpha(m[4] / 100);
                }
            },
            '#HEX': function HEX(color) {
                var m = /^#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/.exec(color);
                if (m) {
                    return new $.colorpicker.Color(parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255);
                }
            },
            '#HEX3': function HEX3(color) {
                var m = /^#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/.exec(color);
                if (m) {
                    return new $.colorpicker.Color(parseInt(String(m[1]) + m[1], 16) / 255, parseInt(String(m[2]) + m[2], 16) / 255, parseInt(String(m[3]) + m[3], 16) / 255);
                }
            },
            'HEX': function HEX(color) {
                var m = /^([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/.exec(color);
                if (m) {
                    return new $.colorpicker.Color(parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255);
                }
            },
            'HEX3': function HEX3(color) {
                var m = /^([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/.exec(color);
                if (m) {
                    return new $.colorpicker.Color(parseInt(String(m[1]) + m[1], 16) / 255, parseInt(String(m[2]) + m[2], 16) / 255, parseInt(String(m[3]) + m[3], 16) / 255);
                }
            }
        };

        this.partslists = {
            'full': ['header', 'map', 'bar', 'hex', 'hsv', 'rgb', 'alpha', 'lab', 'cmyk', 'preview', 'swatches', 'footer'],
            'popup': ['map', 'bar', 'hex', 'hsv', 'rgb', 'alpha', 'preview', 'footer'],
            'draggable': ['header', 'map', 'bar', 'hex', 'hsv', 'rgb', 'alpha', 'preview', 'footer'],
            'inline': ['map', 'bar', 'hex', 'hsv', 'rgb', 'alpha', 'preview']
        };

        this.limits = {
            'websafe': function websafe(color) {
                color.limit(6);
            },
            'nibble': function nibble(color) {
                color.limit(16);
            },
            'binary': function binary(color) {
                color.limit(2);
            },
            'name': function name(color, that) {
                var swatch = that._getSwatch(that._closestName(color));
                color.setRGB(swatch.r, swatch.g, swatch.b);
            }
        };

        this.parts = {
            header: function header(inst) {
                var that = this,
                    e = null,
                    _html = function _html() {
                    var title = inst.options.title || inst._getRegional('title'),
                        html = '<span class="ui-dialog-title">' + title + '</span>';

                    if (!inst.inline && inst.options.showCloseButton) {
                        html += '<a href="#" class="ui-dialog-titlebar-close ui-corner-all" role="button">' + '<span class="ui-icon ui-icon-closethick">close</span></a>';
                    }

                    return '<div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix">' + html + '</div>';
                };

                this.init = function () {
                    e = $(_html()).prependTo(inst.dialog);

                    var close = $('.ui-dialog-titlebar-close', e);
                    inst._hoverable(close);
                    inst._focusable(close);
                    close.click(function (event) {
                        event.preventDefault();
                        inst.close(inst.options.revert);
                    });

                    if (!inst.inline && inst.options.draggable) {
                        var draggableOptions = {
                            handle: e
                        };
                        if (inst.options.containment) {
                            draggableOptions.containment = inst.options.containment;
                        }
                        inst.dialog.draggable(draggableOptions);
                    }
                };
            },

            map: function map(inst) {
                var that = this,
                    e = null,
                    mousemove_timeout = null,
                    _mousedown2,
                    _mouseup2,
                    _mousemove,
                    _html;

                _mousedown2 = function _mousedown(event) {
                    if (!inst.opened) {
                        return;
                    }

                    var div = $('.ui-colorpicker-map-layer-pointer', e),
                        offset = div.offset(),
                        width = div.width(),
                        height = div.height(),
                        x = event.pageX - offset.left,
                        y = event.pageY - offset.top;

                    if (x >= 0 && x < width && y >= 0 && y < height) {
                        event.stopImmediatePropagation();
                        event.preventDefault();
                        e.unbind('mousedown', _mousedown2);
                        $(document).bind('mouseup', _mouseup2);
                        $(document).bind('mousemove', _mousemove);
                        _mousemove(event);
                    }
                };

                _mouseup2 = function _mouseup(event) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    $(document).unbind('mouseup', _mouseup2);
                    $(document).unbind('mousemove', _mousemove);
                    e.bind('mousedown', _mousedown2);
                };

                _mousemove = function _mousemove(event) {
                    event.stopImmediatePropagation();
                    event.preventDefault();

                    if (event.pageX === that.x && event.pageY === that.y) {
                        return;
                    }
                    that.x = event.pageX;
                    that.y = event.pageY;

                    var div = $('.ui-colorpicker-map-layer-pointer', e),
                        offset = div.offset(),
                        width = div.width(),
                        height = div.height(),
                        x = event.pageX - offset.left,
                        y = event.pageY - offset.top;

                    x = Math.max(0, Math.min(x / width, 1));
                    y = Math.max(0, Math.min(y / height, 1));

                    // interpret values
                    switch (inst.mode) {
                        case 'h':
                            inst.color.setHSV(null, x, 1 - y);
                            break;

                        case 's':
                        case 'a':
                            inst.color.setHSV(x, null, 1 - y);
                            break;

                        case 'v':
                            inst.color.setHSV(x, 1 - y, null);
                            break;

                        case 'r':
                            inst.color.setRGB(null, 1 - y, x);
                            break;

                        case 'g':
                            inst.color.setRGB(1 - y, null, x);
                            break;

                        case 'b':
                            inst.color.setRGB(x, 1 - y, null);
                            break;
                    }

                    inst._change();
                };

                _html = function _html() {
                    var html = '<div class="ui-colorpicker-map ui-colorpicker-map-' + (inst.options.part.map.size || 256) + ' ui-colorpicker-border">' + '<span class="ui-colorpicker-map-layer-1">&nbsp;</span>' + '<span class="ui-colorpicker-map-layer-2">&nbsp;</span>' + (inst.options.alpha ? '<span class="ui-colorpicker-map-layer-alpha">&nbsp;</span>' : '') + '<span class="ui-colorpicker-map-layer-pointer"><span class="ui-colorpicker-map-pointer"></span></span></div>';
                    return html;
                };

                this.update = function () {
                    var step = (inst.options.part.map.size || 256) * 65 / 64;

                    switch (inst.mode) {
                        case 'h':
                            $('.ui-colorpicker-map-layer-1', e).css({
                                'background-position': '0 0',
                                'opacity': ''
                            }).show();
                            $('.ui-colorpicker-map-layer-2', e).hide();
                            break;

                        case 's':
                        case 'a':
                            $('.ui-colorpicker-map-layer-1', e).css({
                                'background-position': '0 ' + -step + 'px',
                                'opacity': ''
                            }).show();
                            $('.ui-colorpicker-map-layer-2', e).css({
                                'background-position': '0 ' + -step * 2 + 'px',
                                'opacity': ''
                            }).show();
                            break;

                        case 'v':
                            $(e).css('background-color', 'black');
                            $('.ui-colorpicker-map-layer-1', e).css({
                                'background-position': '0 ' + -step * 3 + 'px',
                                'opacity': ''
                            }).show();
                            $('.ui-colorpicker-map-layer-2', e).hide();
                            break;

                        case 'r':
                            $('.ui-colorpicker-map-layer-1', e).css({
                                'background-position': '0 ' + -step * 4 + 'px',
                                'opacity': ''
                            }).show();
                            $('.ui-colorpicker-map-layer-2', e).css({
                                'background-position': '0 ' + -step * 5 + 'px',
                                'opacity': ''
                            }).show();
                            break;

                        case 'g':
                            $('.ui-colorpicker-map-layer-1', e).css({
                                'background-position': '0 ' + -step * 6 + 'px',
                                'opacity': ''
                            }).show();
                            $('.ui-colorpicker-map-layer-2', e).css({
                                'background-position': '0 ' + -step * 7 + 'px',
                                'opacity': ''
                            }).show();
                            break;

                        case 'b':
                            $('.ui-colorpicker-map-layer-1', e).css({
                                'background-position': '0 ' + -step * 8 + 'px',
                                'opacity': ''
                            }).show();
                            $('.ui-colorpicker-map-layer-2', e).css({
                                'background-position': '0 ' + -step * 9 + 'px',
                                'opacity': ''
                            }).show();
                            break;
                    }
                    that.repaint();
                };

                this.repaint = function () {
                    var div = $('.ui-colorpicker-map-layer-pointer', e),
                        x = 0,
                        y = 0;

                    switch (inst.mode) {
                        case 'h':
                            x = inst.color.getHSV().s * div.width();
                            y = (1 - inst.color.getHSV().v) * div.width();
                            $(e).css('background-color', inst.color.copy().setHSV(null, 1, 1).toCSS());
                            break;

                        case 's':
                        case 'a':
                            x = inst.color.getHSV().h * div.width();
                            y = (1 - inst.color.getHSV().v) * div.width();
                            $('.ui-colorpicker-map-layer-2', e).css('opacity', 1 - inst.color.getHSV().s);
                            break;

                        case 'v':
                            x = inst.color.getHSV().h * div.width();
                            y = (1 - inst.color.getHSV().s) * div.width();
                            $('.ui-colorpicker-map-layer-1', e).css('opacity', inst.color.getHSV().v);
                            break;

                        case 'r':
                            x = inst.color.getRGB().b * div.width();
                            y = (1 - inst.color.getRGB().g) * div.width();
                            $('.ui-colorpicker-map-layer-2', e).css('opacity', inst.color.getRGB().r);
                            break;

                        case 'g':
                            x = inst.color.getRGB().b * div.width();
                            y = (1 - inst.color.getRGB().r) * div.width();
                            $('.ui-colorpicker-map-layer-2', e).css('opacity', inst.color.getRGB().g);
                            break;

                        case 'b':
                            x = inst.color.getRGB().r * div.width();
                            y = (1 - inst.color.getRGB().g) * div.width();
                            $('.ui-colorpicker-map-layer-2', e).css('opacity', inst.color.getRGB().b);
                            break;
                    }

                    if (inst.options.alpha) {
                        $('.ui-colorpicker-map-layer-alpha', e).css('opacity', 1 - inst.color.getAlpha());
                    }

                    $('.ui-colorpicker-map-pointer', e).css({
                        'left': x - 7,
                        'top': y - 7
                    });
                };

                this.init = function () {
                    e = $(_html()).appendTo($('.ui-colorpicker-map-container', inst.dialog));

                    e.bind('mousedown', _mousedown2);
                };
            },

            bar: function bar(inst) {
                var that = this,
                    e = null,
                    _mousedown3,
                    _mouseup3,
                    _mousemove,
                    _html;

                _mousedown3 = function _mousedown(event) {
                    if (!inst.opened) {
                        return;
                    }

                    var div = $('.ui-colorpicker-bar-layer-pointer', e),
                        offset = div.offset(),
                        width = div.width(),
                        height = div.height(),
                        x = event.pageX - offset.left,
                        y = event.pageY - offset.top;

                    if (x >= 0 && x < width && y >= 0 && y < height) {
                        event.stopImmediatePropagation();
                        event.preventDefault();
                        e.unbind('mousedown', _mousedown3);
                        $(document).bind('mouseup', _mouseup3);
                        $(document).bind('mousemove', _mousemove);
                        _mousemove(event);
                    }
                };

                _mouseup3 = function _mouseup(event) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    $(document).unbind('mouseup', _mouseup3);
                    $(document).unbind('mousemove', _mousemove);
                    e.bind('mousedown', _mousedown3);
                };

                _mousemove = function _mousemove(event) {
                    event.stopImmediatePropagation();
                    event.preventDefault();

                    if (event.pageY === that.y) {
                        return;
                    }
                    that.y = event.pageY;

                    var div = $('.ui-colorpicker-bar-layer-pointer', e),
                        offset = div.offset(),
                        height = div.height(),
                        y = event.pageY - offset.top;

                    y = Math.max(0, Math.min(y / height, 1));

                    // interpret values
                    switch (inst.mode) {
                        case 'h':
                            inst.color.setHSV(1 - y, null, null);
                            break;

                        case 's':
                            inst.color.setHSV(null, 1 - y, null);
                            break;

                        case 'v':
                            inst.color.setHSV(null, null, 1 - y);
                            break;

                        case 'r':
                            inst.color.setRGB(1 - y, null, null);
                            break;

                        case 'g':
                            inst.color.setRGB(null, 1 - y, null);
                            break;

                        case 'b':
                            inst.color.setRGB(null, null, 1 - y);
                            break;

                        case 'a':
                            inst.color.setAlpha(1 - y);
                            break;
                    }

                    inst._change();
                };

                _html = function _html() {
                    var html = '<div class="ui-colorpicker-bar ui-colorpicker-bar-' + (inst.options.part.bar.size || 256) + '  ui-colorpicker-border">' + '<span class="ui-colorpicker-bar-layer-1">&nbsp;</span>' + '<span class="ui-colorpicker-bar-layer-2">&nbsp;</span>' + '<span class="ui-colorpicker-bar-layer-3">&nbsp;</span>' + '<span class="ui-colorpicker-bar-layer-4">&nbsp;</span>';

                    if (inst.options.alpha) {
                        html += '<span class="ui-colorpicker-bar-layer-alpha">&nbsp;</span>' + '<span class="ui-colorpicker-bar-layer-alphabar">&nbsp;</span>';
                    }

                    html += '<span class="ui-colorpicker-bar-layer-pointer"><span class="ui-colorpicker-bar-pointer"></span></span></div>';

                    return html;
                };

                this.update = function () {
                    var step = (inst.options.part.bar.size || 256) * 65 / 64;

                    switch (inst.mode) {
                        case 'h':
                        case 's':
                        case 'v':
                        case 'r':
                        case 'g':
                        case 'b':
                            $('.ui-colorpicker-bar-layer-alpha', e).show();
                            $('.ui-colorpicker-bar-layer-alphabar', e).hide();
                            break;

                        case 'a':
                            $('.ui-colorpicker-bar-layer-alpha', e).hide();
                            $('.ui-colorpicker-bar-layer-alphabar', e).show();
                            break;
                    }

                    switch (inst.mode) {
                        case 'h':
                            $('.ui-colorpicker-bar-layer-1', e).css({
                                'background-position': '0 0',
                                'opacity': ''
                            }).show();
                            $('.ui-colorpicker-bar-layer-2', e).hide();
                            $('.ui-colorpicker-bar-layer-3', e).hide();
                            $('.ui-colorpicker-bar-layer-4', e).hide();
                            break;

                        case 's':
                            $('.ui-colorpicker-bar-layer-1', e).css({
                                'background-position': '0 ' + -step + 'px',
                                'opacity': ''
                            }).show();
                            $('.ui-colorpicker-bar-layer-2', e).css({
                                'background-position': '0 ' + -step * 2 + 'px',
                                'opacity': ''
                            }).show();
                            $('.ui-colorpicker-bar-layer-3', e).hide();
                            $('.ui-colorpicker-bar-layer-4', e).hide();
                            break;

                        case 'v':
                            $('.ui-colorpicker-bar-layer-1', e).css({
                                'background-position': '0 ' + -step * 2 + 'px',
                                'opacity': ''
                            }).show();
                            $('.ui-colorpicker-bar-layer-2', e).hide();
                            $('.ui-colorpicker-bar-layer-3', e).hide();
                            $('.ui-colorpicker-bar-layer-4', e).hide();
                            break;

                        case 'r':
                            $('.ui-colorpicker-bar-layer-1', e).css({
                                'background-position': '0 ' + -step * 6 + 'px',
                                'opacity': ''
                            }).show();
                            $('.ui-colorpicker-bar-layer-2', e).css({
                                'background-position': '0 ' + -step * 5 + 'px',
                                'opacity': ''
                            }).show();
                            $('.ui-colorpicker-bar-layer-3', e).css({
                                'background-position': '0 ' + -step * 3 + 'px',
                                'opacity': ''
                            }).show();
                            $('.ui-colorpicker-bar-layer-4', e).css({
                                'background-position': '0 ' + -step * 4 + 'px',
                                'opacity': ''
                            }).show();
                            break;

                        case 'g':
                            $('.ui-colorpicker-bar-layer-1', e).css({
                                'background-position': '0 ' + -step * 10 + 'px',
                                'opacity': ''
                            }).show();
                            $('.ui-colorpicker-bar-layer-2', e).css({
                                'background-position': '0 ' + -step * 9 + 'px',
                                'opacity': ''
                            }).show();
                            $('.ui-colorpicker-bar-layer-3', e).css({
                                'background-position': '0 ' + -step * 7 + 'px',
                                'opacity': ''
                            }).show();
                            $('.ui-colorpicker-bar-layer-4', e).css({
                                'background-position': '0 ' + -step * 8 + 'px',
                                'opacity': ''
                            }).show();
                            break;

                        case 'b':
                            $('.ui-colorpicker-bar-layer-1', e).css({
                                'background-position': '0 ' + -step * 14 + 'px',
                                'opacity': ''
                            }).show();
                            $('.ui-colorpicker-bar-layer-2', e).css({
                                'background-position': '0 ' + -step * 13 + 'px',
                                'opacity': ''
                            }).show();
                            $('.ui-colorpicker-bar-layer-3', e).css({
                                'background-position': '0 ' + -step * 11 + 'px',
                                'opacity': ''
                            }).show();
                            $('.ui-colorpicker-bar-layer-4', e).css({
                                'background-position': '0 ' + -step * 12 + 'px',
                                'opacity': ''
                            }).show();
                            break;

                        case 'a':
                            $('.ui-colorpicker-bar-layer-1', e).hide();
                            $('.ui-colorpicker-bar-layer-2', e).hide();
                            $('.ui-colorpicker-bar-layer-3', e).hide();
                            $('.ui-colorpicker-bar-layer-4', e).hide();
                            break;
                    }
                    that.repaint();
                };

                this.repaint = function () {
                    var div = $('.ui-colorpicker-bar-layer-pointer', e),
                        y = 0;

                    switch (inst.mode) {
                        case 'h':
                            y = (1 - inst.color.getHSV().h) * div.height();
                            break;

                        case 's':
                            y = (1 - inst.color.getHSV().s) * div.height();
                            $('.ui-colorpicker-bar-layer-2', e).css('opacity', 1 - inst.color.getHSV().v);
                            $(e).css('background-color', inst.color.copy().setHSV(null, 1, null).toCSS());
                            break;

                        case 'v':
                            y = (1 - inst.color.getHSV().v) * div.height();
                            $(e).css('background-color', inst.color.copy().setHSV(null, null, 1).toCSS());
                            break;

                        case 'r':
                            y = (1 - inst.color.getRGB().r) * div.height();
                            $('.ui-colorpicker-bar-layer-2', e).css('opacity', Math.max(0, inst.color.getRGB().b - inst.color.getRGB().g));
                            $('.ui-colorpicker-bar-layer-3', e).css('opacity', Math.max(0, inst.color.getRGB().g - inst.color.getRGB().b));
                            $('.ui-colorpicker-bar-layer-4', e).css('opacity', Math.min(inst.color.getRGB().b, inst.color.getRGB().g));
                            break;

                        case 'g':
                            y = (1 - inst.color.getRGB().g) * div.height();
                            $('.ui-colorpicker-bar-layer-2', e).css('opacity', Math.max(0, inst.color.getRGB().b - inst.color.getRGB().r));
                            $('.ui-colorpicker-bar-layer-3', e).css('opacity', Math.max(0, inst.color.getRGB().r - inst.color.getRGB().b));
                            $('.ui-colorpicker-bar-layer-4', e).css('opacity', Math.min(inst.color.getRGB().r, inst.color.getRGB().b));
                            break;

                        case 'b':
                            y = (1 - inst.color.getRGB().b) * div.height();
                            $('.ui-colorpicker-bar-layer-2', e).css('opacity', Math.max(0, inst.color.getRGB().r - inst.color.getRGB().g));
                            $('.ui-colorpicker-bar-layer-3', e).css('opacity', Math.max(0, inst.color.getRGB().g - inst.color.getRGB().r));
                            $('.ui-colorpicker-bar-layer-4', e).css('opacity', Math.min(inst.color.getRGB().r, inst.color.getRGB().g));
                            break;

                        case 'a':
                            y = (1 - inst.color.getAlpha()) * div.height();
                            $(e).css('background-color', inst.color.copy().toCSS());
                            break;
                    }

                    if (inst.mode !== 'a') {
                        $('.ui-colorpicker-bar-layer-alpha', e).css('opacity', 1 - inst.color.getAlpha());
                    }

                    $('.ui-colorpicker-bar-pointer', e).css('top', y - 3);
                };

                this.init = function () {
                    e = $(_html()).appendTo($('.ui-colorpicker-bar-container', inst.dialog));

                    e.bind('mousedown', _mousedown3);
                };
            },

            preview: function preview(inst) {
                var that = this,
                    e = null,
                    _html;

                _html = function _html() {
                    return '<div class="ui-colorpicker-preview ui-colorpicker-border">' + '<div class="ui-colorpicker-preview-initial"><div class="ui-colorpicker-preview-initial-alpha"></div></div>' + '<div class="ui-colorpicker-preview-current"><div class="ui-colorpicker-preview-current-alpha"></div></div>' + '</div>';
                };

                this.init = function () {
                    e = $(_html()).appendTo($('.ui-colorpicker-preview-container', inst.dialog));

                    $('.ui-colorpicker-preview-initial', e).click(function () {
                        inst.color = inst.currentColor.copy();
                        inst._change();
                    });
                };

                this.update = function () {
                    if (inst.options.alpha) {
                        $('.ui-colorpicker-preview-initial-alpha, .ui-colorpicker-preview-current-alpha', e).show();
                    } else {
                        $('.ui-colorpicker-preview-initial-alpha, .ui-colorpicker-preview-current-alpha', e).hide();
                    }

                    this.repaint();
                };

                this.repaint = function () {
                    $('.ui-colorpicker-preview-initial', e).css('background-color', inst.currentColor.set ? inst.currentColor.toCSS() : '').attr('title', inst.currentColor.set ? inst.currentColor.toCSS() : '');
                    $('.ui-colorpicker-preview-initial-alpha', e).css('opacity', 1 - inst.currentColor.getAlpha());
                    $('.ui-colorpicker-preview-current', e).css('background-color', inst.color.set ? inst.color.toCSS() : '').attr('title', inst.color.set ? inst.color.toCSS() : '');
                    $('.ui-colorpicker-preview-current-alpha', e).css('opacity', 1 - inst.color.getAlpha());
                };
            },

            hsv: function hsv(inst) {
                var that = this,
                    e = null,
                    _html;

                _html = function _html() {
                    var html = '';

                    if (inst.options.hsv) {
                        html += '<div class="ui-colorpicker-hsv-h"><input class="ui-colorpicker-mode" type="radio" value="h"/><label>' + inst._getRegional('hsvH') + '</label><input class="ui-colorpicker-number" type="number" min="0" max="360" size="10"/><span class="ui-colorpicker-unit">&deg;</span></div>' + '<div class="ui-colorpicker-hsv-s"><input class="ui-colorpicker-mode" type="radio" value="s"/><label>' + inst._getRegional('hsvS') + '</label><input class="ui-colorpicker-number" type="number" min="0" max="100" size="10"/><span class="ui-colorpicker-unit">%</span></div>' + '<div class="ui-colorpicker-hsv-v"><input class="ui-colorpicker-mode" type="radio" value="v"/><label>' + inst._getRegional('hsvV') + '</label><input class="ui-colorpicker-number" type="number" min="0" max="100" size="10"/><span class="ui-colorpicker-unit">%</span></div>';
                    }

                    return '<div class="ui-colorpicker-hsv">' + html + '</div>';
                };

                this.init = function () {
                    e = $(_html()).appendTo($('.ui-colorpicker-hsv-container', inst.dialog));

                    $('.ui-colorpicker-mode', e).click(function () {
                        inst.mode = $(this).val();
                        inst._updateAllParts();
                    });

                    $('.ui-colorpicker-number', e).bind('change keyup', function () {
                        inst.color.setHSV($('.ui-colorpicker-hsv-h .ui-colorpicker-number', e).val() / 360, $('.ui-colorpicker-hsv-s .ui-colorpicker-number', e).val() / 100, $('.ui-colorpicker-hsv-v .ui-colorpicker-number', e).val() / 100);
                        inst._change();
                    });
                };

                this.repaint = function () {
                    var hsv = inst.color.getHSV();
                    hsv.h *= 360;
                    hsv.s *= 100;
                    hsv.v *= 100;

                    $.each(hsv, function (index, value) {
                        var input = $('.ui-colorpicker-hsv-' + index + ' .ui-colorpicker-number', e);
                        value = Math.round(value);
                        if (parseInt(input.val(), 10) !== value) {
                            input.val(value);
                        }
                    });
                };

                this.update = function () {
                    $('.ui-colorpicker-mode', e).each(function () {
                        $(this).attr('checked', $(this).val() === inst.mode);
                    });
                    this.repaint();
                };
            },

            rgb: function rgb(inst) {
                var that = this,
                    e = null,
                    _html;

                _html = function _html() {
                    var html = '';

                    if (inst.options.rgb) {
                        html += '<div class="ui-colorpicker-rgb-r"><input class="ui-colorpicker-mode" type="radio" value="r"/><label>' + inst._getRegional('rgbR') + '</label><input class="ui-colorpicker-number" type="number" min="0" max="255"/></div>' + '<div class="ui-colorpicker-rgb-g"><input class="ui-colorpicker-mode" type="radio" value="g"/><label>' + inst._getRegional('rgbG') + '</label><input class="ui-colorpicker-number" type="number" min="0" max="255"/></div>' + '<div class="ui-colorpicker-rgb-b"><input class="ui-colorpicker-mode" type="radio" value="b"/><label>' + inst._getRegional('rgbB') + '</label><input class="ui-colorpicker-number" type="number" min="0" max="255"/></div>';
                    }

                    return '<div class="ui-colorpicker-rgb">' + html + '</div>';
                };

                this.init = function () {
                    e = $(_html()).appendTo($('.ui-colorpicker-rgb-container', inst.dialog));

                    $('.ui-colorpicker-mode', e).click(function () {
                        inst.mode = $(this).val();
                        inst._updateAllParts();
                    });

                    $('.ui-colorpicker-number', e).bind('change keyup', function () {
                        var r = $('.ui-colorpicker-rgb-r .ui-colorpicker-number', e).val();
                        inst.color.setRGB($('.ui-colorpicker-rgb-r .ui-colorpicker-number', e).val() / 255, $('.ui-colorpicker-rgb-g .ui-colorpicker-number', e).val() / 255, $('.ui-colorpicker-rgb-b .ui-colorpicker-number', e).val() / 255);

                        inst._change();
                    });
                };

                this.repaint = function () {
                    $.each(inst.color.getRGB(), function (index, value) {
                        var input = $('.ui-colorpicker-rgb-' + index + ' .ui-colorpicker-number', e);
                        value = Math.floor(value * 255);
                        if (parseInt(input.val(), 10) !== value) {
                            input.val(value);
                        }
                    });
                };

                this.update = function () {
                    $('.ui-colorpicker-mode', e).each(function () {
                        $(this).attr('checked', $(this).val() === inst.mode);
                    });
                    this.repaint();
                };
            },

            lab: function lab(inst) {
                var that = this,
                    part = null,
                    html = function html() {
                    var html = '';

                    if (inst.options.hsv) {
                        html += '<div class="ui-colorpicker-lab-l"><label>' + inst._getRegional('labL') + '</label><input class="ui-colorpicker-number" type="number" min="0" max="100"/></div>' + '<div class="ui-colorpicker-lab-a"><label>' + inst._getRegional('labA') + '</label><input class="ui-colorpicker-number" type="number" min="-128" max="127"/></div>' + '<div class="ui-colorpicker-lab-b"><label>' + inst._getRegional('labB') + '</label><input class="ui-colorpicker-number" type="number" min="-128" max="127"/></div>';
                    }

                    return '<div class="ui-colorpicker-lab">' + html + '</div>';
                };

                this.init = function () {
                    var data = 0;

                    part = $(html()).appendTo($('.ui-colorpicker-lab-container', inst.dialog));

                    $('.ui-colorpicker-number', part).bind('change keyup', function (event) {
                        inst.color.setLAB(parseInt($('.ui-colorpicker-lab-l .ui-colorpicker-number', part).val(), 10) / 100, (parseInt($('.ui-colorpicker-lab-a .ui-colorpicker-number', part).val(), 10) + 128) / 255, (parseInt($('.ui-colorpicker-lab-b .ui-colorpicker-number', part).val(), 10) + 128) / 255);
                        inst._change();
                    });
                };

                this.repaint = function () {
                    var lab = inst.color.getLAB();
                    lab.l *= 100;
                    lab.a = lab.a * 255 - 128;
                    lab.b = lab.b * 255 - 128;

                    $.each(lab, function (index, value) {
                        var input = $('.ui-colorpicker-lab-' + index + ' .ui-colorpicker-number', part);
                        value = Math.round(value);
                        if (parseInt(input.val(), 10) !== value) {
                            input.val(value);
                        }
                    });
                };

                this.update = function () {
                    this.repaint();
                };
            },

            cmyk: function cmyk(inst) {
                var that = this,
                    part = null,
                    html = function html() {
                    var html = '';

                    if (inst.options.hsv) {
                        html += '<div class="ui-colorpicker-cmyk-c"><label>' + inst._getRegional('cmykC') + '</label><input class="ui-colorpicker-number" type="number" min="0" max="100"/><span class="ui-colorpicker-unit">%</span></div>' + '<div class="ui-colorpicker-cmyk-m"><label>' + inst._getRegional('cmykM') + '</label><input class="ui-colorpicker-number" type="number" min="0" max="100"/><span class="ui-colorpicker-unit">%</span></div>' + '<div class="ui-colorpicker-cmyk-y"><label>' + inst._getRegional('cmykY') + '</label><input class="ui-colorpicker-number" type="number" min="0" max="100"/><span class="ui-colorpicker-unit">%</span></div>' + '<div class="ui-colorpicker-cmyk-k"><label>' + inst._getRegional('cmykK') + '</label><input class="ui-colorpicker-number" type="number" min="0" max="100"/><span class="ui-colorpicker-unit">%</span></div>';
                    }

                    return '<div class="ui-colorpicker-cmyk">' + html + '</div>';
                };

                this.init = function () {
                    part = $(html()).appendTo($('.ui-colorpicker-cmyk-container', inst.dialog));

                    $('.ui-colorpicker-number', part).bind('change keyup', function (event) {
                        inst.color.setCMYK(parseInt($('.ui-colorpicker-cmyk-c .ui-colorpicker-number', part).val(), 10) / 100, parseInt($('.ui-colorpicker-cmyk-m .ui-colorpicker-number', part).val(), 10) / 100, parseInt($('.ui-colorpicker-cmyk-y .ui-colorpicker-number', part).val(), 10) / 100, parseInt($('.ui-colorpicker-cmyk-k .ui-colorpicker-number', part).val(), 10) / 100);
                        inst._change();
                    });
                };

                this.repaint = function () {
                    $.each(inst.color.getCMYK(), function (index, value) {
                        var input = $('.ui-colorpicker-cmyk-' + index + ' .ui-colorpicker-number', part);
                        value = Math.round(value * 100);
                        if (parseInt(input.val(), 10, 10) !== value) {
                            input.val(value);
                        }
                    });
                };

                this.update = function () {
                    this.repaint();
                };
            },

            alpha: function alpha(inst) {
                var that = this,
                    e = null,
                    _html;

                _html = function _html() {
                    var html = '';

                    if (inst.options.alpha) {
                        html += '<div class="ui-colorpicker-a"><input class="ui-colorpicker-mode" name="mode" type="radio" value="a"/><label>' + inst._getRegional('alphaA') + '</label><input class="ui-colorpicker-number" type="number" min="0" max="100"/><span class="ui-colorpicker-unit">%</span></div>';
                    }

                    return '<div class="ui-colorpicker-alpha">' + html + '</div>';
                };

                this.init = function () {
                    e = $(_html()).appendTo($('.ui-colorpicker-alpha-container', inst.dialog));

                    $('.ui-colorpicker-mode', e).click(function () {
                        inst.mode = $(this).val();
                        inst._updateAllParts();
                    });

                    $('.ui-colorpicker-number', e).bind('change keyup', function () {
                        inst.color.setAlpha($('.ui-colorpicker-a .ui-colorpicker-number', e).val() / 100);
                        inst._change();
                    });
                };

                this.update = function () {
                    $('.ui-colorpicker-mode', e).each(function () {
                        $(this).attr('checked', $(this).val() === inst.mode);
                    });
                    this.repaint();
                };

                this.repaint = function () {
                    var input = $('.ui-colorpicker-a .ui-colorpicker-number', e),
                        value = Math.round(inst.color.getAlpha() * 100);
                    if (parseInt(input.val(), 10) !== value) {
                        input.val(value);
                    }
                };
            },

            hex: function hex(inst) {
                var that = this,
                    e = null,
                    _html;

                _html = function _html() {
                    var html = '';

                    if (inst.options.alpha) {
                        html += '<input class="ui-colorpicker-hex-alpha" type="text" maxlength="2" size="2"/>';
                    }

                    html += '<input class="ui-colorpicker-hex-input" type="text" maxlength="6" size="6"/>';

                    return '<div class="ui-colorpicker-hex"><label>#</label>' + html + '</div>';
                };

                this.init = function () {
                    e = $(_html()).appendTo($('.ui-colorpicker-hex-container', inst.dialog));

                    // repeat here makes the invalid input disappear faster
                    $('.ui-colorpicker-hex-input', e).bind('change keydown keyup', function (a, b, c) {
                        if (/[^a-fA-F0-9]/.test($(this).val())) {
                            $(this).val($(this).val().replace(/[^a-fA-F0-9]/, ''));
                        }
                    });

                    $('.ui-colorpicker-hex-input', e).bind('change keyup', function () {
                        // repeat here makes sure that the invalid input doesn't get parsed
                        inst.color = _parseHex($(this).val()).setAlpha(inst.color.getAlpha());
                        inst._change();
                    });

                    $('.ui-colorpicker-hex-alpha', e).bind('change keydown keyup', function () {
                        if (/[^a-fA-F0-9]/.test($(this).val())) {
                            $(this).val($(this).val().replace(/[^a-fA-F0-9]/, ''));
                        }
                    });

                    $('.ui-colorpicker-hex-alpha', e).bind('change keyup', function () {
                        inst.color.setAlpha(parseInt($('.ui-colorpicker-hex-alpha', e).val(), 16) / 255);
                        inst._change();
                    });
                };

                this.update = function () {
                    this.repaint();
                };

                this.repaint = function () {
                    if (!$('.ui-colorpicker-hex-input', e).is(':focus')) {
                        $('.ui-colorpicker-hex-input', e).val(inst.color.toHex(true));
                    }

                    if (!$('.ui-colorpicker-hex-alpha', e).is(':focus')) {
                        $('.ui-colorpicker-hex-alpha', e).val(_intToHex(inst.color.getAlpha() * 255));
                    }
                };
            },

            swatches: function swatches(inst) {
                var that = this,
                    part = null,
                    html = function html() {
                    var html = '';

                    inst._eachSwatch(function (name, color) {
                        var c = new $.colorpicker.Color(color.r, color.g, color.b),
                            css = c.toCSS();
                        html += '<div class="ui-colorpicker-swatch" style="background-color:' + css + '" title="' + name + '"></div>';
                    });

                    return '<div class="ui-colorpicker-swatches ui-colorpicker-border" style="width:' + inst.options.swatchesWidth + 'px">' + html + '</div>';
                };

                this.init = function () {
                    part = $(html()).appendTo($('.ui-colorpicker-swatches-container', inst.dialog));

                    $('.ui-colorpicker-swatch', part).click(function () {
                        inst.color = inst._parseColor($(this).css('background-color'));
                        inst._change();
                    });
                };
            },

            footer: function footer(inst) {
                var that = this,
                    part = null,
                    id_transparent = 'ui-colorpicker-special-transparent-' + _colorpicker_index,
                    id_none = 'ui-colorpicker-special-none-' + _colorpicker_index,
                    html = function html() {
                    var html = '';

                    if (inst.options.alpha || !inst.inline && inst.options.showNoneButton) {
                        html += '<div class="ui-colorpicker-buttonset">';

                        if (inst.options.alpha) {
                            html += '<input type="radio" name="ui-colorpicker-special" id="' + id_transparent + '" class="ui-colorpicker-special-transparent"/><label for="' + id_transparent + '">' + inst._getRegional('transparent') + '</label>';
                        }
                        if (!inst.inline && inst.options.showNoneButton) {
                            html += '<input type="radio" name="ui-colorpicker-special" id="' + id_none + '" class="ui-colorpicker-special-none"><label for="' + id_none + '">' + inst._getRegional('none') + '</label>';
                        }
                        html += '</div>';
                    }

                    if (!inst.inline) {
                        html += '<div class="ui-dialog-buttonset">';
                        if (inst.options.showCancelButton) {
                            html += '<button class="ui-colorpicker-cancel">' + inst._getRegional('cancel') + '</button>';
                        }
                        html += '<button class="ui-colorpicker-ok">' + inst._getRegional('ok') + '</button>';
                        html += '</div>';
                    }

                    return '<div class="ui-dialog-buttonpane ui-widget-content">' + html + '</div>';
                };

                this.init = function () {
                    part = $(html()).appendTo(inst.dialog);

                    $('.ui-colorpicker-ok', part).button().click(function () {
                        inst.close();
                    });

                    $('.ui-colorpicker-cancel', part).button().click(function () {
                        inst.close(true); //cancel
                    });

                    //inst._getRegional('transparent')
                    $('.ui-colorpicker-buttonset', part).buttonset();

                    $('.ui-colorpicker-special-color', part).click(function () {
                        inst._change();
                    });

                    $('#' + id_none, part).click(function () {
                        inst.color.set = false;
                        inst._change();
                    });

                    $('#' + id_transparent, part).click(function () {
                        inst.color.setAlpha(0);
                        inst._change();
                    });
                };

                this.repaint = function () {
                    if (!inst.color.set) {
                        $('.ui-colorpicker-special-none', part).attr('checked', true).button("refresh");
                    } else if (inst.color.getAlpha() === 0) {
                        $('.ui-colorpicker-special-transparent', part).attr('checked', true).button("refresh");
                    } else {
                        $('input', part).attr('checked', false).button("refresh");
                    }

                    //ZP-CHANGE:1 Cancel button should be always enabled
                    //$('.ui-colorpicker-cancel', part).button(inst.changed ? 'enable' : 'disable');
                };

                this.update = function () {};
            }
        };

        this.Color = function () {
            var spaces = {
                rgb: { r: 0, g: 0, b: 0 },
                hsv: { h: 0, s: 0, v: 0 },
                hsl: { h: 0, s: 0, l: 0 },
                lab: { l: 0, a: 0, b: 0 },
                cmyk: { c: 0, m: 0, y: 0, k: 1 }
            },
                a = 1,
                illuminant = [0.9504285, 1, 1.0889],
                // CIE-L*ab D65/2' 1931
            args = arguments,
                _clip = function _clip(v) {
                if (isNaN(v) || v === null) {
                    return 0;
                }
                if (typeof v == 'string') {
                    v = parseInt(v, 10);
                }
                return Math.max(0, Math.min(v, 1));
            },
                _hexify = function _hexify(number) {
                var digits = '0123456789abcdef',
                    lsd = number % 16,
                    msd = (number - lsd) / 16,
                    hexified = digits.charAt(msd) + digits.charAt(lsd);
                return hexified;
            },
                _rgb_to_xyz = function _rgb_to_xyz(rgb) {
                var r = rgb.r > 0.04045 ? Math.pow((rgb.r + 0.055) / 1.055, 2.4) : rgb.r / 12.92,
                    g = rgb.g > 0.04045 ? Math.pow((rgb.g + 0.055) / 1.055, 2.4) : rgb.g / 12.92,
                    b = rgb.b > 0.04045 ? Math.pow((rgb.b + 0.055) / 1.055, 2.4) : rgb.b / 12.92;

                return {
                    x: r * 0.4124 + g * 0.3576 + b * 0.1805,
                    y: r * 0.2126 + g * 0.7152 + b * 0.0722,
                    z: r * 0.0193 + g * 0.1192 + b * 0.9505
                };
            },
                _xyz_to_rgb = function _xyz_to_rgb(xyz) {
                var rgb = {
                    r: xyz.x * 3.2406 + xyz.y * -1.5372 + xyz.z * -0.4986,
                    g: xyz.x * -0.9689 + xyz.y * 1.8758 + xyz.z * 0.0415,
                    b: xyz.x * 0.0557 + xyz.y * -0.2040 + xyz.z * 1.0570
                };

                rgb.r = rgb.r > 0.0031308 ? 1.055 * Math.pow(rgb.r, 1 / 2.4) - 0.055 : 12.92 * rgb.r;
                rgb.g = rgb.g > 0.0031308 ? 1.055 * Math.pow(rgb.g, 1 / 2.4) - 0.055 : 12.92 * rgb.g;
                rgb.b = rgb.b > 0.0031308 ? 1.055 * Math.pow(rgb.b, 1 / 2.4) - 0.055 : 12.92 * rgb.b;

                return rgb;
            },
                _rgb_to_hsv = function _rgb_to_hsv(rgb) {
                var minVal = Math.min(rgb.r, rgb.g, rgb.b),
                    maxVal = Math.max(rgb.r, rgb.g, rgb.b),
                    delta = maxVal - minVal,
                    del_R,
                    del_G,
                    del_B,
                    hsv = {
                    h: 0,
                    s: 0,
                    v: maxVal
                };

                if (delta === 0) {
                    hsv.h = 0;
                    hsv.s = 0;
                } else {
                    hsv.s = delta / maxVal;

                    del_R = ((maxVal - rgb.r) / 6 + delta / 2) / delta;
                    del_G = ((maxVal - rgb.g) / 6 + delta / 2) / delta;
                    del_B = ((maxVal - rgb.b) / 6 + delta / 2) / delta;

                    if (rgb.r === maxVal) {
                        hsv.h = del_B - del_G;
                    } else if (rgb.g === maxVal) {
                        hsv.h = 1 / 3 + del_R - del_B;
                    } else if (rgb.b === maxVal) {
                        hsv.h = 2 / 3 + del_G - del_R;
                    }

                    if (hsv.h < 0) {
                        hsv.h += 1;
                    } else if (hsv.h > 1) {
                        hsv.h -= 1;
                    }
                }

                return hsv;
            },
                _hsv_to_rgb = function _hsv_to_rgb(hsv) {
                var rgb = {
                    r: 0,
                    g: 0,
                    b: 0
                },
                    var_h,
                    var_i,
                    var_1,
                    var_2,
                    var_3;

                if (hsv.s === 0) {
                    rgb.r = rgb.g = rgb.b = hsv.v;
                } else {
                    var_h = hsv.h === 1 ? 0 : hsv.h * 6;
                    var_i = Math.floor(var_h);
                    var_1 = hsv.v * (1 - hsv.s);
                    var_2 = hsv.v * (1 - hsv.s * (var_h - var_i));
                    var_3 = hsv.v * (1 - hsv.s * (1 - (var_h - var_i)));

                    if (var_i === 0) {
                        rgb.r = hsv.v;
                        rgb.g = var_3;
                        rgb.b = var_1;
                    } else if (var_i === 1) {
                        rgb.r = var_2;
                        rgb.g = hsv.v;
                        rgb.b = var_1;
                    } else if (var_i === 2) {
                        rgb.r = var_1;
                        rgb.g = hsv.v;
                        rgb.b = var_3;
                    } else if (var_i === 3) {
                        rgb.r = var_1;
                        rgb.g = var_2;
                        rgb.b = hsv.v;
                    } else if (var_i === 4) {
                        rgb.r = var_3;
                        rgb.g = var_1;
                        rgb.b = hsv.v;
                    } else {
                        rgb.r = hsv.v;
                        rgb.g = var_1;
                        rgb.b = var_2;
                    }
                }

                return rgb;
            },
                _rgb_to_hsl = function _rgb_to_hsl(rgb) {
                var minVal = Math.min(rgb.r, rgb.g, rgb.b),
                    maxVal = Math.max(rgb.r, rgb.g, rgb.b),
                    delta = maxVal - minVal,
                    del_R,
                    del_G,
                    del_B,
                    hsl = {
                    h: 0,
                    s: 0,
                    l: (maxVal + minVal) / 2
                };

                if (delta === 0) {
                    hsl.h = 0;
                    hsl.s = 0;
                } else {
                    hsl.s = hsl.l < 0.5 ? delta / (maxVal + minVal) : delta / (2 - maxVal - minVal);

                    del_R = ((maxVal - rgb.r) / 6 + delta / 2) / delta;
                    del_G = ((maxVal - rgb.g) / 6 + delta / 2) / delta;
                    del_B = ((maxVal - rgb.b) / 6 + delta / 2) / delta;

                    if (rgb.r === maxVal) {
                        hsl.h = del_B - del_G;
                    } else if (rgb.g === maxVal) {
                        hsl.h = 1 / 3 + del_R - del_B;
                    } else if (rgb.b === maxVal) {
                        hsl.h = 2 / 3 + del_G - del_R;
                    }

                    if (hsl.h < 0) {
                        hsl.h += 1;
                    } else if (hsl.h > 1) {
                        hsl.h -= 1;
                    }
                }

                return hsl;
            },
                _hsl_to_rgb = function _hsl_to_rgb(hsl) {
                var var_1,
                    var_2,
                    hue_to_rgb = function hue_to_rgb(v1, v2, vH) {
                    if (vH < 0) {
                        vH += 1;
                    }
                    if (vH > 1) {
                        vH -= 1;
                    }
                    if (6 * vH < 1) {
                        return v1 + (v2 - v1) * 6 * vH;
                    }
                    if (2 * vH < 1) {
                        return v2;
                    }
                    if (3 * vH < 2) {
                        return v1 + (v2 - v1) * (2 / 3 - vH) * 6;
                    }
                    return v1;
                };

                if (hsl.s === 0) {
                    return {
                        r: hsl.l,
                        g: hsl.l,
                        b: hsl.l
                    };
                }

                var_2 = hsl.l < 0.5 ? hsl.l * (1 + hsl.s) : hsl.l + hsl.s - hsl.s * hsl.l;
                var_1 = 2 * hsl.l - var_2;

                return {
                    r: hue_to_rgb(var_1, var_2, hsl.h + 1 / 3),
                    g: hue_to_rgb(var_1, var_2, hsl.h),
                    b: hue_to_rgb(var_1, var_2, hsl.h - 1 / 3)
                };
            },
                _xyz_to_lab = function _xyz_to_lab(xyz) {
                var x = xyz.x / illuminant[0],
                    y = xyz.y / illuminant[1],
                    z = xyz.z / illuminant[2];

                x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
                y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
                z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

                return {
                    l: (116 * y - 16) / 100, // [0,100]
                    a: (500 * (x - y) + 128) / 255, // [-128,127]
                    b: (200 * (y - z) + 128) / 255 // [-128,127]
                };
            },
                _lab_to_xyz = function _lab_to_xyz(lab) {
                var lab2 = {
                    l: lab.l * 100,
                    a: lab.a * 255 - 128,
                    b: lab.b * 255 - 128
                },
                    xyz = {
                    x: 0,
                    y: (lab2.l + 16) / 116,
                    z: 0
                };

                xyz.x = lab2.a / 500 + xyz.y;
                xyz.z = xyz.y - lab2.b / 200;

                xyz.x = Math.pow(xyz.x, 3) > 0.008856 ? Math.pow(xyz.x, 3) : (xyz.x - 16 / 116) / 7.787;
                xyz.y = Math.pow(xyz.y, 3) > 0.008856 ? Math.pow(xyz.y, 3) : (xyz.y - 16 / 116) / 7.787;
                xyz.z = Math.pow(xyz.z, 3) > 0.008856 ? Math.pow(xyz.z, 3) : (xyz.z - 16 / 116) / 7.787;

                xyz.x *= illuminant[0];
                xyz.y *= illuminant[1];
                xyz.z *= illuminant[2];

                return xyz;
            },
                _rgb_to_cmy = function _rgb_to_cmy(rgb) {
                return {
                    c: 1 - rgb.r,
                    m: 1 - rgb.g,
                    y: 1 - rgb.b
                };
            },
                _cmy_to_rgb = function _cmy_to_rgb(cmy) {
                return {
                    r: 1 - cmy.c,
                    g: 1 - cmy.m,
                    b: 1 - cmy.y
                };
            },
                _cmy_to_cmyk = function _cmy_to_cmyk(cmy) {
                var K = 1;

                if (cmy.c < K) {
                    K = cmy.c;
                }
                if (cmy.m < K) {
                    K = cmy.m;
                }
                if (cmy.y < K) {
                    K = cmy.y;
                }

                if (K === 1) {
                    return {
                        c: 0,
                        m: 0,
                        y: 0,
                        k: 1
                    };
                }

                return {
                    c: (cmy.c - K) / (1 - K),
                    m: (cmy.m - K) / (1 - K),
                    y: (cmy.y - K) / (1 - K),
                    k: K
                };
            },
                _cmyk_to_cmy = function _cmyk_to_cmy(cmyk) {
                return {
                    c: cmyk.c * (1 - cmyk.k) + cmyk.k,
                    m: cmyk.m * (1 - cmyk.k) + cmyk.k,
                    y: cmyk.y * (1 - cmyk.k) + cmyk.k
                };
            };

            this.set = false;

            this.setAlpha = function (_a) {
                if (_a !== null) {
                    a = _clip(_a);
                }
                this.set = true;

                return this;
            };

            this.getAlpha = function () {
                return a;
            };

            this.setRGB = function (r, g, b) {
                spaces = { rgb: this.getRGB() };
                if (r !== null) {
                    spaces.rgb.r = _clip(r);
                }
                if (g !== null) {
                    spaces.rgb.g = _clip(g);
                }
                if (b !== null) {
                    spaces.rgb.b = _clip(b);
                }
                this.set = true;

                return this;
            };

            this.setHSV = function (h, s, v) {
                spaces = { hsv: this.getHSV() };
                if (h !== null) {
                    spaces.hsv.h = _clip(h);
                }
                if (s !== null) {
                    spaces.hsv.s = _clip(s);
                }
                if (v !== null) {
                    spaces.hsv.v = _clip(v);
                }
                this.set = true;

                return this;
            };

            this.setHSL = function (h, s, l) {
                spaces = { hsl: this.getHSL() };
                if (h !== null) {
                    spaces.hsl.h = _clip(h);
                }
                if (s !== null) {
                    spaces.hsl.s = _clip(s);
                }
                if (l !== null) {
                    spaces.hsl.l = _clip(l);
                }
                this.set = true;

                return this;
            };

            this.setLAB = function (l, a, b) {
                spaces = { lab: this.getLAB() };
                if (l !== null) {
                    spaces.lab.l = _clip(l);
                }
                if (a !== null) {
                    spaces.lab.a = _clip(a);
                }
                if (b !== null) {
                    spaces.lab.b = _clip(b);
                }
                this.set = true;

                return this;
            };

            this.setCMYK = function (c, m, y, k) {
                spaces = { cmyk: this.getCMYK() };
                if (c !== null) {
                    spaces.cmyk.c = _clip(c);
                }
                if (m !== null) {
                    spaces.cmyk.m = _clip(m);
                }
                if (y !== null) {
                    spaces.cmyk.y = _clip(y);
                }
                if (k !== null) {
                    spaces.cmyk.k = _clip(k);
                }
                this.set = true;

                return this;
            };

            this.getRGB = function () {
                if (!spaces.rgb) {
                    spaces.rgb = spaces.lab ? _xyz_to_rgb(_lab_to_xyz(spaces.lab)) : spaces.hsv ? _hsv_to_rgb(spaces.hsv) : spaces.hsl ? _hsl_to_rgb(spaces.hsl) : spaces.cmyk ? _cmy_to_rgb(_cmyk_to_cmy(spaces.cmyk)) : { r: 0, g: 0, b: 0 };
                    spaces.rgb.r = _clip(spaces.rgb.r);
                    spaces.rgb.g = _clip(spaces.rgb.g);
                    spaces.rgb.b = _clip(spaces.rgb.b);
                }
                return $.extend({}, spaces.rgb);
            };

            this.getHSV = function () {
                if (!spaces.hsv) {
                    spaces.hsv = spaces.lab ? _rgb_to_hsv(this.getRGB()) : spaces.rgb ? _rgb_to_hsv(spaces.rgb) : spaces.hsl ? _rgb_to_hsv(this.getRGB()) : spaces.cmyk ? _rgb_to_hsv(this.getRGB()) : { h: 0, s: 0, v: 0 };
                    spaces.hsv.h = _clip(spaces.hsv.h);
                    spaces.hsv.s = _clip(spaces.hsv.s);
                    spaces.hsv.v = _clip(spaces.hsv.v);
                }
                return $.extend({}, spaces.hsv);
            };

            this.getHSL = function () {
                if (!spaces.hsl) {
                    spaces.hsl = spaces.rgb ? _rgb_to_hsl(spaces.rgb) : spaces.hsv ? _rgb_to_hsl(this.getRGB()) : spaces.cmyk ? _rgb_to_hsl(this.getRGB()) : spaces.hsv ? _rgb_to_hsl(this.getRGB()) : { h: 0, s: 0, l: 0 };
                    spaces.hsl.h = _clip(spaces.hsl.h);
                    spaces.hsl.s = _clip(spaces.hsl.s);
                    spaces.hsl.l = _clip(spaces.hsl.l);
                }
                return $.extend({}, spaces.hsl);
            };

            this.getCMYK = function () {
                if (!spaces.cmyk) {
                    spaces.cmyk = spaces.rgb ? _cmy_to_cmyk(_rgb_to_cmy(spaces.rgb)) : spaces.hsv ? _cmy_to_cmyk(_rgb_to_cmy(this.getRGB())) : spaces.hsl ? _cmy_to_cmyk(_rgb_to_cmy(this.getRGB())) : spaces.lab ? _cmy_to_cmyk(_rgb_to_cmy(this.getRGB())) : { c: 0, m: 0, y: 0, k: 1 };
                    spaces.cmyk.c = _clip(spaces.cmyk.c);
                    spaces.cmyk.m = _clip(spaces.cmyk.m);
                    spaces.cmyk.y = _clip(spaces.cmyk.y);
                    spaces.cmyk.k = _clip(spaces.cmyk.k);
                }
                return $.extend({}, spaces.cmyk);
            };

            this.getLAB = function () {
                if (!spaces.lab) {
                    spaces.lab = spaces.rgb ? _xyz_to_lab(_rgb_to_xyz(spaces.rgb)) : spaces.hsv ? _xyz_to_lab(_rgb_to_xyz(this.getRGB())) : spaces.hsl ? _xyz_to_lab(_rgb_to_xyz(this.getRGB())) : spaces.cmyk ? _xyz_to_lab(_rgb_to_xyz(this.getRGB())) : { l: 0, a: 0, b: 0 };
                    spaces.lab.l = _clip(spaces.lab.l);
                    spaces.lab.a = _clip(spaces.lab.a);
                    spaces.lab.b = _clip(spaces.lab.b);
                }
                return $.extend({}, spaces.lab);
            };

            this.getChannels = function () {
                return {
                    r: this.getRGB().r,
                    g: this.getRGB().g,
                    b: this.getRGB().b,
                    a: this.getAlpha(),
                    h: this.getHSV().h,
                    s: this.getHSV().s,
                    v: this.getHSV().v,
                    c: this.getCMYK().c,
                    m: this.getCMYK().m,
                    y: this.getCMYK().y,
                    k: this.getCMYK().k,
                    L: this.getLAB().l,
                    A: this.getLAB().a,
                    B: this.getLAB().b
                };
            };

            this.getSpaces = function () {
                return $.extend(true, {}, spaces);
            };

            this.distance = function (color) {
                var space = 'lab',
                    getter = 'get' + space.toUpperCase(),
                    a = this[getter](),
                    b = color[getter](),
                    distance = 0,
                    channel;

                for (channel in a) {
                    distance += Math.pow(a[channel] - b[channel], 2);
                }

                return distance;
            };

            this.equals = function (color) {
                var a = this.getRGB(),
                    b = color.getRGB();

                return this.getAlpha() === color.getAlpha() && a.r === b.r && a.g === b.g && a.b === b.b;
            };

            this.limit = function (steps) {
                steps -= 1;
                var rgb = this.getRGB();
                this.setRGB(Math.round(rgb.r * steps) / steps, Math.round(rgb.g * steps) / steps, Math.round(rgb.b * steps) / steps);
            };

            this.toHex = function () {
                var rgb = this.getRGB();
                return _hexify(rgb.r * 255) + _hexify(rgb.g * 255) + _hexify(rgb.b * 255);
            };

            this.toCSS = function () {
                return '#' + this.toHex();
            };

            this.copy = function () {
                var color = new $.colorpicker.Color(this.getSpaces(), this.getAlpha());
                color.set = this.set;
                return color;
            };

            // Construct
            if (args.length === 2) {
                spaces = args[0];
                this.setAlpha(args[1] === 0 ? 0 : args[1] || 1);
                this.set = true;
            }
            if (args.length > 2) {
                this.setRGB(args[0], args[1], args[2]);
                this.setAlpha(args[3] === 0 ? 0 : args[3] || 1);
                this.set = true;
            }
        };
    }();

    $.widget("vanderlee.colorpicker", {
        options: {
            alpha: false, // Show alpha controls and mode
            altAlpha: true, // change opacity of altField as well?
            altField: '', // selector for DOM elements which change background color on change.
            altOnChange: true, // true to update on each change, false to update only on close.
            altProperties: 'background-color', // comma separated list of any of 'background-color', 'color', 'border-color', 'outline-color'
            autoOpen: false, // Open dialog automatically upon creation
            buttonClass: null, // If set, the button will get this/these classname(s).
            buttonColorize: false,
            buttonImage: 'images/ui-colorpicker.png',
            buttonImageOnly: false,
            buttonText: null, // Text on the button and/or title of button image.
            closeOnEscape: true, // Close the dialog when the escape key is pressed.
            closeOnOutside: true, // Close the dialog when clicking outside the dialog (not for inline)
            color: '#00FF00', // Initial color (for inline only)
            colorFormat: 'HEX', // Format string for output color format
            draggable: true, // Make popup dialog draggable if header is visible.
            containment: null, // Constrains dragging to within the bounds of the specified element or region.
            duration: 'fast',
            hsv: true, // Show HSV controls and modes
            inline: true, // Show any divs as inline by default
            inlineFrame: true, // Show a border and background when inline.
            layout: {
                map: [0, 0, 1, 5], // Left, Top, Width, Height (in table cells).
                bar: [1, 0, 1, 5],
                preview: [2, 0, 1, 1],
                hsv: [2, 1, 1, 1],
                rgb: [2, 2, 1, 1],
                alpha: [2, 3, 1, 1],
                hex: [2, 4, 1, 1],
                lab: [3, 1, 1, 1],
                cmyk: [3, 2, 1, 2],
                swatches: [4, 0, 1, 5]
            },
            limit: '', // Limit color "resolution": '', 'websafe', 'nibble', 'binary', 'name'
            modal: false, // Modal dialog?
            mode: 'h', // Initial editing mode, h, s, v, r, g, b or a
            okOnEnter: false, // Close (with OK) when pressing the enter key
            parts: '', // leave empty for automatic selection
            part: {
                map: { size: 256 },
                bar: { size: 256 }
            }, // options per part
            regional: '',
            revert: false, // Revert color upon non
            rgb: true, // Show RGB controls and modes
            showAnim: 'fadeIn',
            showCancelButton: true,
            showNoneButton: false,
            showCloseButton: true,
            showOn: 'focus click alt', // 'focus', 'click', 'button', 'alt', 'both'
            showOptions: {},
            swatches: null, // null for default or kv-object or names swatches set
            swatchesWidth: 84, // width (in number of pixels) of swatches box.
            title: null,

            cancel: null,
            close: null,
            init: null,
            select: null,
            ok: null,
            open: null
        },

        _create: function _create() {
            var that = this,
                text;

            ++_colorpicker_index;

            that.widgetEventPrefix = 'colorpicker';

            that.opened = false;
            that.generated = false;
            that.inline = false;
            that.changed = false;

            that.dialog = null;
            that.button = null;
            that.image = null;
            that.overlay = null;

            that.mode = that.options.mode;

            if (that.element.is('input') || that.options.inline === false) {
                // Initial color
                that._setColor(that.element.is('input') ? that.element.val() : that.options.color);
                that._callback('init');

                // showOn focus
                if (/\bfocus|both\b/.test(that.options.showOn)) {
                    that.element.bind('focus', function () {
                        that.open();
                    });
                }

                // showOn click
                if (/\bclick|both\b/.test(that.options.showOn)) {
                    that.element.bind('click', function () {
                        that.open();
                    });
                }

                // showOn button
                if (/\bbutton|both\b/.test(that.options.showOn)) {
                    if (that.options.buttonImage !== '') {
                        text = that.options.buttonText || that._getRegional('button');

                        that.image = $('<img/>').attr({
                            'src': that.options.buttonImage,
                            'alt': text,
                            'title': text
                        });
                        if (that.options.buttonClass) {
                            that.image.attr('class', that.options.buttonClass);
                        }

                        that._setImageBackground();
                    }

                    if (that.options.buttonImageOnly && that.image) {
                        that.button = that.image;
                    } else {
                        that.button = $('<button type="button"></button>').html(that.image || that.options.buttonText).button();
                        that.image = that.image ? $('img', that.button).first() : null;
                    }
                    that.button.insertAfter(that.element).click(function () {
                        that[that.opened ? 'close' : 'open']();
                    });
                }

                // showOn alt
                if (/\balt|both\b/.test(that.options.showOn)) {
                    $(that.options.altField).bind('click', function () {
                        that.open();
                    });
                }

                if (that.options.autoOpen) {
                    that.open();
                }
            } else {
                that.inline = true;

                that._generate();
                that.opened = true;
            }

            return this;
        },

        _setOption: function _setOption(key, value) {
            var that = this;

            switch (key) {
                case "disabled":
                    if (value) {
                        that.dialog.addClass('ui-colorpicker-disabled');
                    } else {
                        that.dialog.removeClass('ui-colorpicker-disabled');
                    }
                    break;
            }

            $.Widget.prototype._setOption.apply(that, arguments);
        },

        _setImageBackground: function _setImageBackground() {
            if (this.image && this.options.buttonColorize) {
                this.image.css('background-color', this.color.set ? this._formatColor('RGBA', this.color) : '');
            }
        },

        /**
         * If an alternate field is specified, set it according to the current color.
         */
        _setAltField: function _setAltField() {
            if (this.options.altOnChange && this.options.altField && this.options.altProperties) {
                var index,
                    property,
                    properties = this.options.altProperties.split(',');

                for (index = 0; index <= properties.length; ++index) {
                    property = $.trim(properties[index]);
                    switch (property) {
                        case 'color':
                        case 'fill':
                        case 'stroke':
                        case 'background-color':
                        case 'backgroundColor':
                        case 'outline-color':
                        case 'border-color':
                            $(this.options.altField).css(property, this.color.set ? this.color.toCSS() : '');
                            break;
                    }
                }

                if (this.options.altAlpha) {
                    $(this.options.altField).css('opacity', this.color.set ? this.color.getAlpha() : '');
                }
            }
        },

        _setColor: function _setColor(text) {
            this.color = this._parseColor(text);
            this.currentColor = this.color.copy();

            this._setImageBackground();
            this._setAltField();
        },

        setColor: function setColor(text) {
            this._setColor(text);
            this._change();
        },

        getColor: function getColor(format) {
            return this._formatColor(format || this.options.colorFormat, this.color);
        },

        _generateInline: function _generateInline() {
            var that = this;

            $(that.element).html(that.options.inlineFrame ? _container_inlineFrame : _container_inline);

            that.dialog = $('.ui-colorpicker', that.element);
        },

        _generatePopup: function _generatePopup() {
            var that = this;

            $('body').append(_container_popup);
            that.dialog = $('.ui-colorpicker:last');

            // Close on clicking outside window and controls
            $(document).delegate('html', 'touchstart click', function (event) {
                if (!that.opened || event.target === that.element[0] || that.overlay) {
                    return;
                }

                // Check if clicked on any part of dialog
                if (that.dialog.is(event.target) || that.dialog.has(event.target).length > 0) {
                    that.element.blur(); // inside window!
                    return;
                }

                // Check if clicked on known external elements
                var p,
                    parents = $(event.target).parents();
                // add the event.target in case of buttonImageOnly and closeOnOutside both are set to true
                parents.push(event.target);
                for (p = 0; p <= parents.length; ++p) {
                    // button
                    if (that.button !== null && parents[p] === that.button[0]) {
                        return;
                    }
                    // showOn alt
                    if (/\balt|both\b/.test(that.options.showOn) && $(that.options.altField).is(parents[p])) {
                        return;
                    }
                }

                // no closeOnOutside
                if (!that.options.closeOnOutside) {
                    return;
                }

                that.close(that.options.revert);
            });

            $(document).keydown(function (event) {
                // close on ESC key
                if (that.opened && event.keyCode === 27 && that.options.closeOnEscape) {
                    that.close(that.options.revert);
                }

                // OK on Enter key
                if (that.opened && event.keyCode === 13 && that.options.okOnEnter) {
                    that.close();
                }
            });

            // Close (with OK) on tab key in element
            that.element.keydown(function (event) {
                if (event.keyCode === 9) {
                    that.close();
                }
            }).keyup(function (event) {
                var color = that._parseColor(that.element.val());
                if (!that.color.equals(color)) {
                    that.color = color;
                    that._change();
                }
            });
        },

        _generate: function _generate() {
            var that = this,
                index,
                part,
                parts_list,
                layout_parts,
                table,
                classes;

            that._setColor(that.inline || !that.element.is('input') ? that.options.color : that.element.val());

            that[that.inline ? '_generateInline' : '_generatePopup']();

            // Determine the parts to include in this colorpicker
            if (typeof that.options.parts === 'string') {
                if ($.colorpicker.partslists[that.options.parts]) {
                    parts_list = $.colorpicker.partslists[that.options.parts];
                } else {
                    // automatic
                    parts_list = $.colorpicker.partslists[that.inline ? 'inline' : 'popup'];
                }
            } else {
                parts_list = that.options.parts;
            }

            // Add any parts to the internal parts list
            that.parts = {};
            $.each(parts_list, function (index, part) {
                if ($.colorpicker.parts[part]) {
                    that.parts[part] = new $.colorpicker.parts[part](that);
                }
            });

            if (!that.generated) {
                layout_parts = [];

                $.each(that.options.layout, function (part, pos) {
                    if (that.parts[part]) {
                        layout_parts.push({
                            'part': part,
                            'pos': pos
                        });
                    }
                });

                table = $(_layoutTable(layout_parts, function (cell, x, y) {
                    classes = ['ui-colorpicker-' + cell.part + '-container'];

                    if (x > 0) {
                        classes.push('ui-colorpicker-padding-left');
                    }

                    if (y > 0) {
                        classes.push('ui-colorpicker-padding-top');
                    }

                    return '<td  class="' + classes.join(' ') + '"' + (cell.pos[2] > 1 ? ' colspan="' + cell.pos[2] + '"' : '') + (cell.pos[3] > 1 ? ' rowspan="' + cell.pos[3] + '"' : '') + ' valign="top"></td>';
                })).appendTo(that.dialog);
                if (that.options.inlineFrame) {
                    table.addClass('ui-dialog-content ui-widget-content');
                }

                that._initAllParts();
                that._updateAllParts();
                that.generated = true;
            }
        },

        _effectGeneric: function _effectGeneric(element, show, slide, fade, callback) {
            var that = this;

            if ($.effects && $.effects[that.options.showAnim]) {
                element[show](that.options.showAnim, that.options.showOptions, that.options.duration, callback);
            } else {
                element[that.options.showAnim === 'slideDown' ? slide : that.options.showAnim === 'fadeIn' ? fade : show](that.options.showAnim ? that.options.duration : null, callback);
                if (!that.options.showAnim || !that.options.duration) {
                    callback();
                }
            }
        },

        _effectShow: function _effectShow(element, callback) {
            this._effectGeneric(element, 'show', 'slideDown', 'fadeIn', callback);
        },

        _effectHide: function _effectHide(element, callback) {
            this._effectGeneric(element, 'hide', 'slideUp', 'fadeOut', callback);
        },

        open: function open() {
            var that = this,
                offset,
                bottom,
                right,
                height,
                width,
                x,
                y,
                zIndex,
                hiddenPlaceholder;

            if (!that.opened) {
                that._generate();

                if (that.element.is(':hidden')) {
                    hiddenPlaceholder = $('<div/>').insertBefore(that.element);
                    offset = hiddenPlaceholder.offset();
                    hiddenPlaceholder.remove();
                } else {
                    offset = that.element.offset();
                }
                bottom = $(window).height() + $(window).scrollTop();
                right = $(window).width() + $(window).scrollLeft();
                height = that.dialog.outerHeight(false);
                width = that.dialog.outerWidth();
                x = offset.left;
                y = offset.top + that.element.outerHeight(false);

                if (x + width > right) {
                    x = Math.max(0, right - width);
                }

                if (y + height > bottom) {
                    if (offset.top - height >= $(window).scrollTop()) {
                        y = offset.top - height;
                    } else {
                        y = Math.max(0, bottom - height);
                    }
                }

                that.dialog.css({ 'left': x, 'top': y });

                // Automatically find highest z-index.
                zIndex = 0;
                $(that.element[0]).parents().each(function () {
                    var z = $(this).css('z-index');
                    if ((typeof z === 'number' || typeof z === 'string') && z !== '' && !isNaN(z)) {
                        if (z > zIndex) {
                            zIndex = parseInt(z, 10);
                            return false;
                        }
                    } else {
                        $(this).siblings().each(function () {
                            var z = $(this).css('z-index');
                            if ((typeof z === 'number' || typeof z === 'string') && z !== '' && !isNaN(z)) {
                                if (z > zIndex) {
                                    zIndex = parseInt(z, 10);
                                }
                            }
                        });
                    }
                });

                // @todo zIndexOffset option, to raise above other elements?
                that.dialog.css('z-index', zIndex += 2);

                that.overlay = that.options.modal ? new $.ui.dialog.overlay(that) : null;
                if (that.overlay !== null) {
                    var z = that.overlay.$el.css('z-index');
                    if ((typeof z === 'number' || typeof z === 'string') && z !== '' && !isNaN(z)) {
                        that.dialog.css('z-index', zIndex + z + 2);
                    }
                }

                that._effectShow(this.dialog);
                that.opened = true;
                that._callback('open', true);

                // Without waiting for domready the width of the map is 0 and we
                // wind up with the cursor stuck in the upper left corner
                $(function () {
                    that._repaintAllParts();
                });
            }
        },

        close: function close(cancel) {
            var that = this;

            //ZP-ADDITION:1 Ignore subsequent calls for already closed dialog
            if (!that.opened) return;

            if (cancel) {
                that.color = that.currentColor.copy();
                that._change();
                that._callback('cancel', true);
            } else {
                that.currentColor = that.color.copy();
                that._callback('ok', true);
            }
            that.changed = false;

            // tear down the interface
            that._effectHide(that.dialog, function () {
                that.dialog.remove();
                that.dialog = null;
                that.generated = false;

                that.opened = false;
                that._callback('close', true);
            });

            if (that.overlay) {
                that.overlay.destroy();
            }
        },

        destroy: function destroy() {
            this.element.unbind();

            if (this.image !== null) {
                this.image.remove();
            }

            if (this.button !== null) {
                this.button.remove();
            }

            if (this.dialog !== null) {
                this.dialog.remove();
            }

            if (this.overlay) {
                this.overlay.destroy();
            }
        },

        _callback: function _callback(callback, spaces) {
            var that = this,
                data,
                lab;

            if (that.color.set) {
                data = {
                    formatted: that._formatColor(that.options.colorFormat, that.color),
                    colorPicker: that
                };

                lab = that.color.getLAB();
                lab.a = lab.a * 2 - 1;
                lab.b = lab.b * 2 - 1;

                if (spaces === true) {
                    data.a = that.color.getAlpha();
                    data.rgb = that.color.getRGB();
                    data.hsv = that.color.getHSV();
                    data.cmyk = that.color.getCMYK();
                    data.hsl = that.color.getHSL();
                    data.lab = lab;
                }

                return that._trigger(callback, null, data);
            } else {
                return that._trigger(callback, null, {
                    formatted: '',
                    colorPicker: that
                });
            }
        },

        _initAllParts: function _initAllParts() {
            $.each(this.parts, function (index, part) {
                if (part.init) {
                    part.init();
                }
            });
        },

        _updateAllParts: function _updateAllParts() {
            $.each(this.parts, function (index, part) {
                if (part.update) {
                    part.update();
                }
            });
        },

        _repaintAllParts: function _repaintAllParts() {
            $.each(this.parts, function (index, part) {
                if (part.repaint) {
                    part.repaint();
                }
            });
        },

        _change: function _change() {
            this.changed = true;

            // Limit color palette
            if (this.options.limit && $.colorpicker.limits[this.options.limit]) {
                $.colorpicker.limits[this.options.limit](this.color, this);
            }

            // update input element content
            if (!this.inline) {
                if (!this.color.set) {
                    this.element.val('');
                } else if (!this.color.equals(this._parseColor(this.element.val()))) {
                    this.element.val(this._formatColor(this.options.colorFormat, this.color));
                }

                this._setImageBackground();
                this._setAltField();
            }

            // update color option
            this.options.color = this.color.set ? this.color.toCSS() : '';

            if (this.opened) {
                this._repaintAllParts();
            }

            // callback
            this._callback('select');
        },

        // This will be deprecated by jQueryUI 1.9 widget
        _hoverable: function _hoverable(e) {
            e.hover(function () {
                e.addClass("ui-state-hover");
            }, function () {
                e.removeClass("ui-state-hover");
            });
        },

        // This will be deprecated by jQueryUI 1.9 widget
        _focusable: function _focusable(e) {
            e.focus(function () {
                e.addClass("ui-state-focus");
            }).blur(function () {
                e.removeClass("ui-state-focus");
            });
        },

        _getRegional: function _getRegional(name) {
            return $.colorpicker.regional[this.options.regional][name] !== undefined ? $.colorpicker.regional[this.options.regional][name] : $.colorpicker.regional[''][name];
        },

        _getSwatches: function _getSwatches() {
            if (typeof this.options.swatches === 'string') {
                return $.colorpicker.swatches[this.options.swatches];
            }

            if ($.isPlainObject(this.options.swatches)) {
                return this.colorpicker.swatches;
            }

            return $.colorpicker.swatches.html;
        },

        _eachSwatch: function _eachSwatch(callback) {
            var currentSwatches = this._getSwatches();
            var name;
            $.each(currentSwatches, function (nameOrIndex, swatch) {
                if ($.isArray(currentSwatches)) {
                    name = swatch.name;
                } else {
                    name = nameOrIndex;
                }
                callback(name, swatch);
            });
        },

        _getSwatch: function _getSwatch(name) {
            var swatch = false;

            this._eachSwatch(function (swatchName, current) {
                if (swatchName.toLowerCase() == name.toLowerCase()) {
                    swatch = current;
                    return false;
                }
                return true;
            });

            return swatch;
        },

        _parseColor: function _parseColor(color) {
            var that = this,
                c;

            $.each($.colorpicker.parsers, function (name, parser) {
                c = parser(color, that);
                if (c) {
                    return false;
                }
            });

            if (c) {
                return c;
            }

            return new $.colorpicker.Color();
        },

        _exactName: function _exactName(color) {
            var name = false;

            this._eachSwatch(function (n, swatch) {
                if (color.equals(new $.colorpicker.Color(swatch.r, swatch.g, swatch.b))) {
                    name = n;
                    return false;
                }
                return true;
            });

            return name;
        },

        _closestName: function _closestName(color) {
            var rgb = color.getRGB(),
                distance = null,
                name = false,
                d;

            this._eachSwatch(function (n, swatch) {
                d = color.distance(new $.colorpicker.Color(swatch.r, swatch.g, swatch.b));
                if (d < distance || distance === null) {
                    name = n;
                    if (d === 0) {
                        return false; // can't get much closer than 0
                    }
                    distance = d;
                }
                return true;
            });

            return name;
        },

        _formatColor: function _formatColor(formats, color) {
            var that = this,
                text = null,
                types = {
                'x': function x(v) {
                    return _intToHex(v * 255);
                },
                'd': function d(v) {
                    return Math.floor(v * 255);
                },
                'f': function f(v) {
                    return v;
                },
                'p': function p(v) {
                    return v * 100;
                }
            },
                channels = color.getChannels();

            if (!$.isArray(formats)) {
                formats = [formats];
            }

            $.each(formats, function (index, format) {
                if ($.colorpicker.writers[format]) {
                    text = $.colorpicker.writers[format](color, that);
                    return text === false;
                } else {
                    text = format.replace(/\\?[argbhsvcmykLAB][xdfp]/g, function (m) {
                        if (m.match(/^\\/)) {
                            return m.slice(1);
                        }
                        return types[m.charAt(1)](channels[m.charAt(0)]);
                    });
                    return false;
                }
            });

            return text;
        }
    });
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

;jQuery(function ($) {
    $.colorpicker.parts.switcher = function (inst) {
        this.init = function () {
            var $dialog = inst.dialog,
                $rgb = $('<div class="ui-colorpicker-switcher-rgb">RGB</div>'),
                $cmyk = $('<div class="ui-colorpicker-switcher-cmyk">CMYK</div>');

            inst.element.val(inst._formatColor('#HEX', inst.color));

            $dialog.addClass('ui-colorpicker-mode-rgb');

            $('<div class="ui-colorpicker-switcher"/>').append($rgb, $cmyk).appendTo($dialog);

            $($rgb).on('click', function () {
                if ($dialog.hasClass('ui-colorpicker-mode-rgb')) return;

                inst.options.colorFormat = '#HEX';
                inst.element.val(inst._formatColor('#HEX', inst.color));

                $dialog.removeClass('ui-colorpicker-mode-cmyk').addClass('ui-colorpicker-mode-rgb');
            });

            $($cmyk).on('click', function () {
                if ($dialog.hasClass('ui-colorpicker-mode-cmyk')) return;

                inst.options.colorFormat = '#CMYK';
                inst.element.val(inst._formatColor('#CMYK', inst.color));

                inst.mode = 'h';
                inst._updateAllParts();

                $dialog.removeClass('ui-colorpicker-mode-rgb').addClass('ui-colorpicker-mode-cmyk');
            });
        };
    };

    $.colorpicker.writers['#CMYK'] = function (color, that) {
        var cmyk = color.getCMYK(),
            c = ('00' + Math.floor(cmyk.c * 255)).slice(-3),
            m = ('00' + Math.floor(cmyk.m * 255)).slice(-3),
            y = ('00' + Math.floor(cmyk.y * 255)).slice(-3),
            k = ('00' + Math.floor(cmyk.k * 255)).slice(-3);

        return '#' + c + m + y + k;
    };

    $.colorpicker.parsers['#CMYK'] = function (color) {
        var m = /^#(\d{3})(\d{3})(\d{3})(\d{3})$/.exec(color);

        if (m) return new $.colorpicker.Color().setCMYK(m[1] / 255, m[2] / 255, m[3] / 255, m[4] / 255);
    };
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function ($) {

    var methods = {
        select: function select(index) {
            this.find(' > .zp-combobox-input-wrapper > input').val(this.data('options')[index]);
        }
    };

    $.fn.combobox = function (method) {
        var settings = {
            select: function select(event, ui) {}
        };

        if (methods[method]) return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));else if ((typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' || !method) $.extend(settings, method);else $.error('Method ' + method + ' does not exist on jQuery.power_crop');

        var $select = $(this);
        var $selected_option = $select.children(':selected');

        var options = [];

        $select.children('option').each(function () {
            options.push($(this).text());
        });

        var $wrapper = $select.parent().data('options', options);

        setTooltip($wrapper, $select.attr('title'), '(Select or enter a value)');

        var $field = $('<input />').attr('id', $select.attr('id')).attr('name', $select.attr('name')).attr('class', 'input-text ' + $select.attr('class')).insertAfter($select).val($selected_option.text() ? $selected_option.text() : '').autocomplete({
            appendTo: $wrapper,
            delay: 0,
            minLength: 0,
            position: {
                my: 'left top',
                offset: '0',
                at: 'left bottom',
                of: $wrapper,
                collision: 'none'
            },
            source: options,

            open: function open(event, ui) {
                $field.parent().parent().addClass('z-index-1');
                $button.addClass('opened');
            },

            select: function select(event, ui) {
                for (var i = 0; i < options.length; i++) {
                    if (options[i] == ui.item.value) break;
                }ui.item.index = i;

                return settings.select.apply(this, [event, ui]);
            },

            close: function close(event, ui) {
                $field.parent().parent().removeClass('z-index-1');
                $button.removeClass('opened');
            }
        }).wrap('<div class="zp-combobox-input-wrapper"/>');

        $select.remove();

        var $button = $('<div class="zp-combobox-button">' + '<div class="zp-combobox-icon-wrapper">' + '<div class="zp-combobox-button-icon" />' + '</div>' + '</div>').click(function () {
            if ($field.autocomplete('widget').is(':visible')) $field.autocomplete('close').focus();else $field.autocomplete('search', '').focus();
        }).appendTo($wrapper);

        return $field;
    };

    function setTooltip($element, title, tooltip) {
        var content = '';

        if ($.trim(title)) content += title;

        if ($.trim(tooltip)) {
            if (content) content += '<br/>';

            content += '<small>' + tooltip + '</small>';
        }

        if (content) $element.qtip({
            content: content,
            position: { corner: { target: 'topLeft', tooltip: 'bottomLeft' } },
            show: { delay: 1, solo: true, when: { event: 'focus' } },
            hide: { when: { event: 'unfocus' } }
        });
    }
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dataset = function () {
    function Dataset() {
        _classCallCheck(this, Dataset);
    }

    _createClass(Dataset, null, [{
        key: 'zp_dataset_initialise',
        value: function zp_dataset_initialise(zp) {
            var $dataset = $('.zp-dataset');

            $dataset.find('.zp-dataset-checkbox').hover(function () {
                $(this).parent().addClass('zp-dataset-active');
            }, function () {
                $(this).parent().removeClass('zp-dataset-active');
            });

            var $td = $dataset.find('td').filter(':not(.zp-dataset-checkbox)');

            /* $td
             .mouseenter(function (event) {
             $popup = $(this).children('.zp-dataset-popup');
              if (!$popup.length)
             $popup = $('<div class="zp-dataset-popup" />')
             .append($(this)
             .children()
             .clone())
             .appendTo(this);
              $popup
             .detach()
             .appendTo($('body'))
             .attr('id', 'zp-dataset-popup-active')
             .css({
             top: event.pageY + 15,
             left: event.pageX + 15 })
             .show();
             })
             .mouseleave(function (event) {
             $('#zp-dataset-popup-active')
             .hide()
             .removeAttr('id')
             .detach()
             .appendTo($(this));
             })
             .mousemove(function (event) {
             $('#zp-dataset-popup-active')
             .css({
             top: event.pageY + 15,
             left: event.pageX + 15 });
             })*/
            $td.click(function () {
                var $this = $(this);

                if (zp.template_details['dataset-integrity-enforce']) {
                    $this.parent().find('> .zp-dataset-checkbox > input').mousedown().click();

                    return;
                }

                var page = zp.template_details.pages[zp.current_page];
                var name = $this.attr('class');

                if (!(page.fields && page.fields[name] && page.fields[name].dataset)) {
                    return false;
                }

                var $tr = $this.parent();
                var $tbody = $tr.parent();

                $tbody.children('.zp-dataset-selected').removeClass('zp-dataset-selected').find('input').prop('checked', false).end().children().slice(1).addClass('zp-dataset-selected');

                var index = $tbody.children().index($tr);

                $('#input-fields-page-' + zp.current_page).find('[name="zetaprints-_' + name + '"]').val(page.fields[name].dataset[index].text);

                $tbody.find('td').filter('.' + name.replace(/ /g, '.')).removeClass('zp-dataset-selected');

                $('#product_addtocart_form').removeClass('zp-not-modified');

                $this.addClass('zp-dataset-selected');
            });

            var $inputs = $dataset.find('input');

            $inputs.mousedown(function () {
                $inputs.filter(':checked').prop('checked', false);
            }).click(function () {
                var page = zp.template_details.pages[zp.current_page];

                var fields = page.fields;
                if (!fields) {
                    return;
                }

                var $tr = $(this).parent().parent();

                $tr.parent().find('.zp-dataset-selected').removeClass('zp-dataset-selected');

                var index = $tr.parent().children().index($tr);

                var $input_fields = $('#input-fields-page-' + zp.current_page);

                for (var name in fields) {
                    if (fields.hasOwnProperty(name) && fields[name].dataset) {
                        $input_fields.find('[name="zetaprints-_' + name + '"]').val(fields[name].dataset[index].text);
                    }
                }

                $('#product_addtocart_form').removeClass('zp-not-modified');

                $tr.addClass('zp-dataset-selected');
            });

            var $button = $('#zp-dataset-button');

            $button.click(function () {
                $.fancybox({
                    'type': 'inline',
                    'href': '#zp-dataset-page-' + zp.current_page
                });
            });

            if ($('#zp-dataset-page-' + zp.current_page).length) {
                $button.removeClass('hidden');
            }
        }

        /**
         * @param {DataInterface} zp
         * @param {string} name
         * @param state
         */

    }, {
        key: 'zp_dataset_update_state',
        value: function zp_dataset_update_state(zp, name, state) {
            var $table = $('#zp-dataset-table-page-' + zp.current_page);

            $table.find('tr.zp-dataset-selected').removeClass('zp-dataset-selected').find('input').prop('checked', false).end().children().slice(1).addClass('zp-dataset-selected');

            name = '.' + name.replace(/ /g, '.') + '.zp-dataset-selected';

            $table.find(name).removeClass('zp-dataset-selected');
        }
    }]);

    return Dataset;
}();

exports.default = Dataset;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jQueryLoader = __webpack_require__(3);

var _jQueryLoader2 = _interopRequireDefault(_jQueryLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SelectImage = function () {
    function SelectImage() {
        _classCallCheck(this, SelectImage);
    }

    _createClass(SelectImage, null, [{
        key: 'fancybox_add_use_image_button',

        /**
         * @param {jQuery|function} $
         * @param {DataInterface} zp
         * @param {boolean} in_preview
         */
        value: function fancybox_add_use_image_button($, zp, in_preview) {
            //Don't add the button if it exists
            if ($('#zp-select-image-button').length) {
                return;
            }

            var $outer = $('#fancybox-outer');

            var $button = $('<a id="zp-select-image-button">' + '<span class="icon left-part">' + '<span class="icon tick" />' + '</span>' + '<span class="text">' + '<span class="use-image-text">' + use_image_button_text + '</span>' + '<span class="selected-image-text">' + selected_image_button_text + '</span>' + '</span>' + '</a>').appendTo($outer);

            var $close = $('#fancybox-close').addClass('resizer-tweaks');

            if (in_preview) {
                $close.clone().css('display', 'inline').click(function () {
                    zp._shape_to_show = this._detect_share_name($);

                    $('#preview-image-page-' + zp.current_page).click();

                    $(this).remove();
                    $close.attr('id', 'fancybox-close');
                }).appendTo($outer);

                $close.attr('id', 'fancybox-close-orig');
            }

            $button.addClass('no-middle');

            $button.click(function () {
                if ($outer.hasClass('selected')) {
                    return;
                }

                var $input = SelectImage._get_image_selector().not('.minimized').find(' > .selector-content > .tabs-wrapper > .images-scroller').find('a[href="' + $('#fancybox-img').attr('src') + '"]').parent().children('input').prop('checked', true).change();

                $outer.addClass('selected');

                if (in_preview) {
                    var shape_name = $input.attr('name').substring(12);

                    $('#zetaprints-preview-image-container').find(' > .zetaprints-field-shape[title="' + shape_name + '"] > .top').click();

                    $('#fancybox-close').remove();
                    $close.attr('id', 'fancybox-close');
                }
            });
        }

        /**
         * @param {jQuery|function} $
         */

    }, {
        key: 'fancybox_update_preview_button',
        value: function fancybox_update_preview_button($) {
            $('#fancybox-close').addClass('resizer-tweaks');

            var is_checked = SelectImage._get_image_selector().not('.minimized').find(' > .selector-content > .tabs-wrapper > .images-scroller').find('a[href="' + $('#fancybox-img').attr('src') + '"]').parent().children('input').prop('checked');

            if (is_checked) {
                $('#fancybox-outer').addClass('selected');
            } else {
                $('#fancybox-outer').removeClass('selected');
            }
        }

        /**
         * @param {jQuery|function} $
         */

    }, {
        key: 'fancybox_remove_use_image_button',
        value: function fancybox_remove_use_image_button($) {
            $('#zp-select-image-button').remove();
        }

        /**
         * @return {jQuery|HTMLElement}
         * @private
         */

    }, {
        key: '_get_image_selector',
        value: function _get_image_selector() {
            return (0, _jQueryLoader2.default)('.zetaprints-images-selector');
        }

        /**
         * @return {string}
         * @private
         */

    }, {
        key: '_detect_share_name',
        value: function _detect_share_name() {
            return SelectImage._get_image_selector().not('.minimized').find(' > .selector-content > .tabs-wrapper > .images-scroller').find('a[href="' + (0, _jQueryLoader2.default)('#fancybox-img').attr('src') + '"]').parent().children('input').attr('name').substring(12);
        }
    }]);

    return SelectImage;
}();

exports.default = SelectImage;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by cod on 25.4.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _UiHelper = __webpack_require__(8);

var _UiHelper2 = _interopRequireDefault(_UiHelper);

var _Logger = __webpack_require__(2);

var _Logger2 = _interopRequireDefault(_Logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ZoomHelper = function () {
    function ZoomHelper() {
        _classCallCheck(this, ZoomHelper);
    }

    _createClass(ZoomHelper, null, [{
        key: "disable_zoom",

        /**
         * Disable zoom
         */
        value: function disable_zoom() {
            _Logger2.default.debug('[ZoomHelper] Disable zoom');
            var product_image_gallery = _UiHelper2.default.instance().product_image_gallery;
            $(product_image_gallery).removeClass('product-image-zoom');
            _UiHelper2.default.instance().original_product_image.remove();
            $('#track_hint, div.zoom').remove();

            // Disable the elevateZoom plugin
            $('.zoomContainer').remove();
            $('.product-image-gallery .gallery-image').removeData('elevateZoom');
        }
    }]);

    return ZoomHelper;
}();

exports.default = ZoomHelper;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PersonalizationForm = __webpack_require__(19);

Object.defineProperty(exports, 'PersonalizationForm', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PersonalizationForm).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals require */

__webpack_require__(0);
__webpack_require__(22);
__webpack_require__(4);
__webpack_require__(21);

// require('./library/modernizr-custom.js');
// require('./library/jquery-1.11.2.min.js');
// require('./library/jquery-migrate-1.2.1.min.js');
// require('./library/jquery-ui-1.11.2.custom.min.js');

// require('./fancybox/jquery-fancybox.js');
// require('./library/jquery-qtip-min.js');
// require('./colorpicker/colorpicker.js');
// require('./colorpicker/switcher.js');
//
// require('./text-field-resizer/text-field-resizer.js');
// require('./text-field-editor/text-field-editor.js');
//
// require('./combobox-field/combobox-field.js');

// require('./dataset/dataset.js');

// require('./powercrop/jquery-powercrop.js');

// require('./fancybox/fancybox-resizing.js');
// require('./fancybox/fancybox-update-preview.js');
// require('./fancybox/fancybox-select-image.js');
// require('./fancybox/fancybox-save-image.js');
__webpack_require__(20);
// require('./image-edit.js');

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Position = __webpack_require__(47);

var _Position2 = _interopRequireDefault(_Position);

var _DataObject2 = __webpack_require__(9);

var _DataObject3 = _interopRequireDefault(_DataObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by cod on 20.4.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ImageDimensions = function (_DataObject) {
    _inherits(ImageDimensions, _DataObject);

    function ImageDimensions(dimensions) {
        _classCallCheck(this, ImageDimensions);

        var _this = _possibleConstructorReturn(this, (ImageDimensions.__proto__ || Object.getPrototypeOf(ImageDimensions)).call(this));

        _this.selection = {
            width: 0,
            height: 0,
            position: new _Position2.default()
        };

        _this.image = {
            width: 0,
            height: 0,
            position: new _Position2.default()
        };

        _this._assign_properties(dimensions);
        return _this;
    }

    return ImageDimensions;
}(_DataObject3.default);

exports.default = ImageDimensions;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DataObject2 = __webpack_require__(9);

var _DataObject3 = _interopRequireDefault(_DataObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by cod on 20.4.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ImageEditingContext = function (_DataObject) {
  _inherits(ImageEditingContext, _DataObject);

  function ImageEditingContext(data) {
    _classCallCheck(this, ImageEditingContext);

    /**
     * @type {object}
     */
    var _this = _possibleConstructorReturn(this, (ImageEditingContext.__proto__ || Object.getPrototypeOf(ImageEditingContext)).call(this));

    _this.url = {};
    _this.image_id = '';
    _this.page = {
      'width_in': 0,
      'height_in': 0
    };
    _this.image = {};
    _this.placeholder = {};
    _this.upload_image_by_url = function () {};
    _this.shape = undefined;
    _this.has_fit_in_field = true;

    _this.container = {
      width: 0,
      height: 0
    };

    /**
     * @type {jQuery}
     */
    _this.$selected_thumbnail = {};

    /**
     * !!! Temp solution
     * @type {jQuery}
     * @internal
     */
    _this.$input = {};

    /**
     * Reference to the Image Editor's save()
     */
    _this.save = function () {};

    /**
     * Reference to the Image Editor's reload_image()
     */
    _this.reload_image = function () {};

    _this._assign_properties(data);
    return _this;
  }

  return ImageEditingContext;
}(_DataObject3.default);

exports.default = ImageEditingContext;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DataObject2 = __webpack_require__(9);

var _DataObject3 = _interopRequireDefault(_DataObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by cod on 24.4.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var MetaData = function (_DataObject) {
  _inherits(MetaData, _DataObject);

  function MetaData(data) {
    _classCallCheck(this, MetaData);

    /**
     * @type {number}
     */
    var _this = _possibleConstructorReturn(this, (MetaData.__proto__ || Object.getPrototypeOf(MetaData)).call(this));

    _this['cr-x1'] = undefined;
    /**
     * @type {number}
     */
    _this['cr-x2'] = undefined;
    /**
     * @type {number}
     */
    _this['cr-y1'] = undefined;
    /**
     * @type {number}
     */
    _this['cr-y2'] = undefined;
    /**
     * @type {number}
     */
    _this['abs-x1'] = undefined;
    /**
     * @type {number}
     */
    _this['abs-y1'] = undefined;
    /**
     * @type {number}
     */
    _this['abs-x2'] = undefined;
    /**
     * @type {number}
     */
    _this['abs-y2'] = undefined;

    _this._assign_properties(data);
    return _this;
  }

  return MetaData;
}(_DataObject3.default);

exports.default = MetaData;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by cod on 20.4.17.
 */
var Page = function Page() {
    _classCallCheck(this, Page);

    this.name = "Page 1";
    this.fields = {};
    this.static = false;

    this.is_updating = false;

    this["preview-image"] = "preview/...";
    this["thumb-image"] = "thumb/...";
    this["width-in"] = 1.496062992126;
    this["height-in"] = 1.259842519685;
    this["width-cm"] = 3.8;
    this["height-cm"] = 3.2;
    this["preview-url"] = "https://domain.tld/web-to-print/preview/get/guid/1234.jpg/";
    this["thumb-url"] = "https://domain.tld/web-to-print/thumbnail/get/guid/1234.jpg/width/100/height/100/";
    this.shapes = {
        "Photo": {
            "name": "Photo",
            "x1": 0.0388,
            "y1": 0.0468,
            "x2": 0.9612,
            "y2": 0.879,
            "anchor-x": 0.748,
            "anchor-y": 0.6766,
            "hidden": false,
            "has-value": false
        }
    };
    this.images = {
        "Photo": {
            "name": "Photo",
            "width": 414,
            "height": 314,
            "color-picker": null,
            "allow-upload": true,
            "allow-url": false,
            "clipped": false,
            "palette": null,
            "value": null
        }
    };
};

exports.default = Page;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by cod on 20.4.17.
 */
var Position = function Position() {
  var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  _classCallCheck(this, Position);

  /**
   * @type {number}
   */
  this.top = top;

  /**
   * @type {number}
   */
  this.left = left;
};

exports.default = Position;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function ($) {
    "use strict";

    var $container = void 0;
    var methods = {
        destroy: function destroy() {
            $container = this.data('power-crop-container');

            if ($container) {
                $container.remove();
                this.show();
            }
        },

        state: function state() {
            $container = this.data('power-crop-container');

            if ($container) {
                var $viewport = $container.find('.powercrop-viewport');
                var $image = $container.find('.powercrop-image');

                return {
                    image: {
                        width: $image.width(),
                        height: $image.height(),
                        position: $image.parent().position()
                    },
                    selection: {
                        width: $viewport.width(),
                        height: $viewport.height(),
                        position: $viewport.position()
                    }
                };
            }
        }
    };

    $.fn.power_crop = function (method) {
        var image_position = null;
        var viewport_position = null;
        var $image_wrapper = void 0;

        var settings = {
            simple: false,
            data: null,
            crop: function crop() {},
            stop: function stop() {}
        };

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if ((typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' || !method) {
            $.extend(settings, method);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.power_crop');
        }

        var $image = this.clone().removeAttr('id').removeAttr('class');

        var aspect_ratio = $image.height() / $image.width();

        var $image_top = $image.clone().addClass('powercrop-image-top');

        var $container = $image.addClass('powercrop-image').wrap('<div class="powercrop-container no-resizing-action" />').parent();

        if (settings.simple) {
            $container.addClass('simple');
        }

        this.hide().after($container).data('power-crop-container', $container);

        if (!settings.simple) {
            $image.resizable({
                aspectRatio: true,
                handles: 'ne, nw, se, sw',
                start: function start(event, ui) {
                    $container.removeClass('no-resizing-action');
                },
                resize: function resize(event, ui) {
                    $image_top_wrapper.css({
                        width: ui.size.width,
                        height: ui.size.height,
                        top: ui.position.top - viewport_position.top - 1,
                        left: ui.position.left - viewport_position.left - 1
                    });

                    $image_top.css({
                        width: ui.size.width,
                        height: ui.size.height
                    });

                    image_position = $image_wrapper.position();

                    invoke_on_event(settings.crop);
                },
                stop: function stop(event, ui) {
                    image_position = $image_wrapper.position();

                    $container.addClass('no-resizing-action');

                    var image_width = Math.round(ui.size.width);
                    var image_height = Math.round(ui.size.height);

                    $image_top_wrapper.css({
                        width: image_width,
                        height: image_height,
                        top: image_position.top - viewport_position.top - 1,
                        left: image_position.left - viewport_position.left - 1
                    });

                    $image_top.css({
                        width: image_width,
                        height: image_height
                    });

                    $image.css({
                        width: image_width,
                        height: image_height
                    });

                    $image_wrapper.css({
                        width: image_width,
                        height: image_height
                    });

                    invoke_on_event(settings.stop);
                }
            });

            $image_wrapper = $image.parent().draggable({
                drag: function drag(event, ui) {
                    $image_top_wrapper.css({
                        top: ui.position.top - viewport_position.top - 1,
                        left: ui.position.left - viewport_position.left - 1
                    });

                    image_position = ui.position;

                    invoke_on_event(settings.crop);
                },
                stop: function stop(event, ui) {
                    image_position = ui.position;

                    invoke_on_event(settings.stop);
                }
            });

            //$container.css({
            //  width: $image_wrapper.outerWidth(),
            //  height: $image_wrapper.outerHeight() });
        } else {
            $image_wrapper = $image;
        }

        var $viewport = $('<div class="powercrop-viewport" />').appendTo($container);

        $('<div class="powercrop-viewport-inner" />').append($image_top).appendTo($viewport);

        $viewport.append('<div class="powercrop-viewport-handle" ' + 'title="Click and drag to move the frame" />');

        $viewport.resizable({
            aspectRatio: !settings.simple,
            containment: settings.simple ? $container : false,
            handles: 'ne, nw, se, sw',
            start: function start(event, ui) {
                $container.removeClass('no-resizing-action');
            },
            resize: function resize(event, ui) {
                if (ui.position.left < 0) {
                    ui.position.left = 0;
                }

                if (ui.position.top < 0) {
                    ui.position.top = 0;
                }

                $image_top_wrapper.css({
                    top: image_position.top - ui.position.top - 1,
                    left: image_position.left - ui.position.left - 1
                });

                viewport_position = $viewport.position();

                invoke_on_event(settings.crop);
            },
            stop: function stop(event, ui) {
                viewport_position = $viewport.position();

                $container.addClass('no-resizing-action');

                $image_top_wrapper.css({
                    top: image_position.top - viewport_position.top - 1,
                    left: image_position.left - viewport_position.left - 1
                });

                if (settings.simple) {
                    check_viewport_moving();
                }

                invoke_on_event(settings.stop);
            }
        }).draggable({
            containment: settings.simple ? $container : false,
            handle: 'div.powercrop-viewport-handle',
            drag: function drag(event, ui) {
                $image_top_wrapper.css({
                    top: image_position.top - ui.position.top - 1,
                    left: image_position.left - ui.position.left - 1
                });

                viewport_position = ui.position;

                invoke_on_event(settings.crop);
            },
            stop: function stop(event, ui) {
                viewport_position = ui.position;

                if (settings.simple) {
                    check_viewport_moving();
                }

                invoke_on_event(settings.stop);
            }
        });

        var $image_top_wrapper = void 0;
        if (!settings.simple) {
            $image_top.resizable({
                aspectRatio: true,
                handles: 'ne, nw, se, sw',
                resize: function resize(event, ui) {
                    $image_wrapper.css({
                        width: ui.size.width,
                        height: ui.size.height,
                        top: ui.position.top + viewport_position.top + 1,
                        left: ui.position.left + viewport_position.left + 1
                    });

                    $image.css({
                        width: ui.size.width,
                        height: ui.size.height
                    });

                    invoke_on_event(settings.crop);
                },
                stop: function stop(event, ui) {
                    var image_top_position = $image_top_wrapper.position();

                    var image_width = Math.round(ui.size.width);
                    var image_height = Math.round(ui.size.height);

                    $image_wrapper.css({
                        width: image_width,
                        height: image_height,
                        top: image_top_position.top + viewport_position.top + 1,
                        left: image_top_position.left + viewport_position.left + 1
                    });

                    $image.css({
                        width: image_width,
                        height: image_height
                    });

                    $image_top.css({
                        width: image_width,
                        height: image_height
                    });

                    $image_top_wrapper.css({
                        width: image_width,
                        height: image_height
                    });

                    invoke_on_event(settings.stop);
                }
            });

            $image_top_wrapper = $image_top.parent().draggable({
                drag: function drag(event, ui) {
                    $image_wrapper.css({
                        top: viewport_position.top + ui.position.top + 1,
                        left: viewport_position.left + ui.position.left + 1
                    });

                    image_position = $image_wrapper.position();

                    invoke_on_event(settings.crop);
                },
                stop: function stop(event, ui) {
                    image_position = $image_wrapper.position();

                    invoke_on_event(settings.stop);
                }
            });
        } else {
            $image_top_wrapper = $image_top;
        }

        update_position(complete_data(settings.data));

        if (settings.simple) {
            check_viewport_moving();
        }

        function complete_data(data) {
            var default_data = {
                image: {
                    width: $image.width(),
                    height: $image.height(),
                    position: { top: 0, left: 0 }
                },
                selection: {
                    width: $image.width(),
                    height: $image.height(),
                    position: { top: 0, left: 0 }
                }
            };

            return $.extend(true, {}, default_data, data);
        }

        function update_position(data) {
            $image_wrapper.css({
                width: data.image.width,
                height: data.image.height,
                top: data.image.position.top,
                left: data.image.position.left
            });

            $image.css({
                width: data.image.width,
                height: data.image.height
            });

            image_position = data.image.position;

            $viewport.css({
                width: data.selection.width,
                height: data.selection.height,
                top: data.selection.position.top,
                left: data.selection.position.left
            });

            if (data.container) {
                $container.css({
                    left: data.container.left,
                    top: data.container.top,
                    width: data.container.width + 2,
                    height: data.container.height + 2
                });
            } else if (!settings.simple) {
                //$container.css({
                //  width: $viewport.outerWidth(),
                //  height: $viewport.outerHeight() });
            } else {
                $container.css({
                    width: $viewport.outerWidth() > $image.outerWidth() ? $viewport.outerWidth() : $image.outerWidth(),
                    height: $viewport.outerHeight() > $image.outerHeight() ? $viewport.outerHeight() : $image.outerHeight()
                });
            }

            viewport_position = data.selection.position;

            $image_top_wrapper.css({
                width: data.image.width,
                height: data.image.height,
                top: image_position.top - viewport_position.top - 1,
                left: image_position.left - viewport_position.left - 1
            });

            $image_top.css({
                width: data.image.width,
                height: data.image.height
            });
        }

        function invoke_on_event(callback) {
            callback({
                image: {
                    width: $image.width(),
                    height: $image.height(),
                    position: image_position
                },
                selection: {
                    width: $viewport.width(),
                    height: $viewport.height(),
                    position: viewport_position
                }
            });
        }

        function check_viewport_moving() {
            if ($viewport.outerWidth() === $container.width() && $viewport.outerHeight() === $container.height()) {
                $viewport.addClass('no-moving-action');
            } else {
                $viewport.removeClass('no-moving-action');
            }
        }

        return this;
    };
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function ($) {
    var methods = {
        hide: function hide() {
            $editor = this.data('text-field-editor');

            if ($editor) {
                $editor.removeClass('opened');
                $(document).unbind('click.text-field-editor');
            }
        },

        move: function move(target) {
            $editor = this.data('text-field-editor');

            if (!$editor) return;

            $editor.removeClass('opened').detach().prependTo(target);
        }
    };

    $.fn.text_field_editor = function (method) {
        var settings = {
            button_parent: null,
            colour: '',
            change: function change(data) {}
        };

        if (methods[method]) return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));else if ((typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' || !method) $.extend(settings, method);else $.error('Method ' + method + ' does not exist on jQuery.text_field_editor');

        var $field = this;

        var $editor = $('<div class="zp-text-field-editor" />').prependTo(settings.button_parent);

        $field.data('text-field-editor', $editor);

        var $handle = $('<div class="zp-text-field-editor-handle">' + '<div class="zp-text-field-editor-icon pen" />' + '</div>').appendTo($editor);

        var $panel = $('<div class="zp-text-field-editor-panel">' + '<div class="white-line" />' + '</div>').appendTo($editor);

        var $row = $('<div class="zp-text-field-editor-row">' + '<div class="zp-text-field-editor-icon color-picker" />' + '</div>').appendTo($panel);

        var $options = $('<div class="zp-text-field-editor-options" />').appendTo($row);

        $('<div class="zp-text-field-editor-clear" />').appendTo($row);

        var name = 'zp-text-field-editor-colorpicker-' + this.attr('name').substring(12);

        $('<div class="zp-text-field-editor-option">' + '<div><input type="radio" name="' + name + '" value="default" checked="checked" /></div>' + '<div><span>Default</span></div>' + '</div>').appendTo($options);

        var $pallet = $('<div class="zp-text-field-editor-icon pallet">' + '<div class="zp-text-field-editor-color-example" />' + '</div>');

        var $color_example = $pallet.children();

        var $radio_button = $('<input type="radio" name="' + name + '" value="" />');

        if (settings.colour) {
            $color_example.css('backgroundColor', settings.colour);
            $radio_button.val(settings.colour);
        }

        $('<div class="zp-text-field-editor-option" />').append($radio_button.wrap('<div />').parent()).append($pallet).appendTo($options);

        $handle.click(function () {
            $(document).unbind('click.text-field-editor');

            if ($editor.hasClass('opened')) $editor.removeClass('opened');else {
                $('div.zp-text-field-editor').removeClass('opened');

                var offset = $handle.offset();
                var position = $handle.position();

                var c = offset.top == position.top && offset.left == position.left ? offset : position;

                $panel.css({
                    top: c.top + $handle.outerHeight() - 1,
                    left: c.left
                });

                $editor.addClass('opened');

                $(document).bind('click.text-field-editor', out_editor_click);
            }

            return false;
        });

        $('input', $row).change(function () {
            var value = $(this).val();

            if (!value) $radio_button.colorpicker('open');else if (value == 'default') _change('color', undefined);else _change('color', value);
        });

        var color_picker_on = false;

        $radio_button.colorpicker({
            color: '804080',
            inline: false,
            layout: {
                //Left, Top, Width, Height (in table cells)
                map: [0, 0, 1, 5],
                bar: [1, 0, 1, 5],
                preview: [2, 0, 1, 1],
                rgb: [2, 2, 1, 1],
                hex: [2, 3, 1, 1],
                cmyk: [3, 2, 1, 2]
            },
            parts: ['switcher', 'header', 'map', 'bar', 'hex', 'rgb', 'cmyk', 'preview', 'footer'],
            part: {
                map: { size: 128 },
                bar: { size: 128 }
            },
            altField: $color_example,
            showOn: 'alt',
            title: ' ',
            revert: true,
            showCloseButton: false,
            colorFormat: '#HEX',

            open: function open() {
                color_picker_on = true;
            },

            close: function close(colpkr) {
                color_picker_on = false;
            },

            ok: function ok(e, data) {
                _change('color', data.formatted);
            }
        });

        function out_editor_click(event) {
            if (color_picker_on) return;

            var editor = $editor.get(0);
            var child_parent = $(event.target).parents('div.zp-text-field-editor').get(0);

            if (!(event.target == editor || child_parent == editor)) {
                $handle.click();
            }
        }

        function _change(name, value) {
            if (value === undefined) $editor.removeClass('state-changed');else $editor.addClass('state-changed');

            var data = {};
            data[name] = value;

            settings.change(data);
        }

        return this;
    };
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _Logger = __webpack_require__(2);

var _Logger2 = _interopRequireDefault(_Logger);

var _jQueryLoader = __webpack_require__(3);

var _jQueryLoader2 = _interopRequireDefault(_jQueryLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = _jQueryLoader2.default || jQuery;

var restore_field_style = function restore_field_style(event) {
    var $field = $(this);
    var data = $field.data('text-field-resizer');

    $field.unbind(event);

    if (data['style'] === undefined) {
        data['wrapper'].removeAttr('style');
    } else {
        data['wrapper'].attr('style', data['style']);
    }
};

$.fn.text_field_resizer = function () {
    return this.each(function () {
        var $wrapper = $(this);
        var $field = $wrapper.find('.input-text, textarea');

        if (typeof $wrapper.resizable === 'function') {
            $wrapper.resizable({
                handles: $field.prop('tagName').toUpperCase() === 'TEXTAREA' ? 'se, sw' : 'e, w',

                create: function create() {
                    $wrapper.mousedown(function () {
                        $field.focus();
                    });

                    $field.data('text-field-resizer', {
                        'style': $wrapper.attr('style'),
                        'wrapper': $wrapper
                    });
                },

                start: function start() {
                    $wrapper.css('z-index', 1000);
                    $field.focus();
                },

                stop: function stop() {
                    $field.focus();
                }
            });

            $wrapper.mouseenter(function () {
                $field.unbind('blur', restore_field_style);
            }).mouseleave(function () {
                $field.bind('blur', restore_field_style);
            });
        } else {
            _Logger2.default.error('$wrapper.resizable is not a function');
        }
    });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 51 */
/***/ (function(module, exports) {

/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

module.exports = function(jQuery) {
    "use strict";

    var H = jQuery("html"),
        W = jQuery(window),
        D = jQuery(document),
        F = jQuery.fancybox = function() {
            F.open.apply(this, arguments);
        },
        IE = navigator.userAgent.match(/msie/i),
        didUpdate = null,
        isTouch = document.createTouch !== undefined,

        isQuery = function(obj) {
            return obj && obj.hasOwnProperty && obj instanceof jQuery;
        },
        isString = function(str) {
            return str && jQuery.type(str) === "string";
        },
        isPercentage = function(str) {
            return isString(str) && str.indexOf('%') > 0;
        },
        isScrollable = function(el) {
            return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
        },
        getScalar = function(orig, dim) {
            var value = parseInt(orig, 10) || 0;

            if (dim && isPercentage(orig)) {
                value = F.getViewport()[dim] / 100 * value;
            }

            return Math.ceil(value);
        },
        getValue = function(value, dim) {
            return getScalar(value, dim) + 'px';
        };

    jQuery.extend(F, {
        // The current version of fancyBox
        version: '2.1.5',

        defaults: {
            padding: 15,
            margin: 20,

            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1, // Set to 2 for retina display support

            autoSize: true,
            autoHeight: false,
            autoWidth: false,

            autoResize: true,
            autoCenter: !isTouch,
            fitToView: true,
            aspectRatio: false,
            topRatio: 0.5,
            leftRatio: 0.5,

            scrolling: 'auto', // 'auto', 'yes' or 'no'
            wrapCSS: '',

            arrows: true,
            closeBtn: true,
            closeClick: false,
            nextClick: false,
            mouseWheel: true,
            autoPlay: false,
            playSpeed: 3000,
            preload: 3,
            modal: false,
            loop: true,

            ajax: {
                dataType: 'html',
                headers: {
                    'X-fancyBox': true
                }
            },
            iframe: {
                scrolling: 'auto',
                preload: true
            },
            swf: {
                wmode: 'transparent',
                allowfullscreen: 'true',
                allowscriptaccess: 'always'
            },

            keys: {
                next: {
                    13: 'left', // enter
                    34: 'up', // page down
                    39: 'left', // right arrow
                    40: 'up' // down arrow
                },
                prev: {
                    8: 'right', // backspace
                    33: 'down', // page up
                    37: 'right', // left arrow
                    38: 'down' // up arrow
                },
                close: [27], // escape key
                play: [32], // space - start/stop slideshow
                toggle: [70] // letter "f" - toggle fullscreen
            },

            direction: {
                next: 'left',
                prev: 'right'
            },

            scrollOutside: true,

            // Override some properties
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,

            // HTML templates
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
                loading: '<div id="fancybox-loading"><div></div></div>'
            },

            // Properties for each animation type
            // Opening fancyBox
            openEffect: 'fade', // 'elastic', 'fade' or 'none'
            openSpeed: 250,
            openEasing: 'swing',
            openOpacity: true,
            openMethod: 'zoomIn',

            // Closing fancyBox
            closeEffect: 'fade', // 'elastic', 'fade' or 'none'
            closeSpeed: 250,
            closeEasing: 'swing',
            closeOpacity: true,
            closeMethod: 'zoomOut',

            // Changing next gallery item
            nextEffect: 'elastic', // 'elastic', 'fade' or 'none'
            nextSpeed: 250,
            nextEasing: 'swing',
            nextMethod: 'changeIn',

            // Changing previous gallery item
            prevEffect: 'elastic', // 'elastic', 'fade' or 'none'
            prevSpeed: 250,
            prevEasing: 'swing',
            prevMethod: 'changeOut',

            // Enable default helpers
            helpers: {
                overlay: true,
                title: true
            },

            // Callbacks
            onCancel: jQuery.noop, // If canceling
            beforeLoad: jQuery.noop, // Before loading
            afterLoad: jQuery.noop, // After loading
            beforeShow: jQuery.noop, // Before changing in current item
            afterShow: jQuery.noop, // After opening
            beforeChange: jQuery.noop, // Before changing gallery item
            beforeClose: jQuery.noop, // Before closing
            afterClose: jQuery.noop // After closing
        },

        //Current state
        group: {}, // Selected group
        opts: {}, // Group options
        previous: null, // Previous element
        coming: null, // Element being loaded
        current: null, // Currently loaded element
        isActive: false, // Is activated
        isOpen: false, // Is currently open
        isOpened: false, // Have been fully opened at least once

        wrap: null,
        skin: null,
        outer: null,
        inner: null,

        player: {
            timer: null,
            isActive: false
        },

        // Loaders
        ajaxLoad: null,
        imgPreload: null,

        // Some collections
        transitions: {},
        helpers: {},

        /*
         *	Static methods
         */

        open: function(group, opts) {
            if (!group) {
                return;
            }

            if (!jQuery.isPlainObject(opts)) {
                opts = {};
            }

            // Close if already active
            if (false === F.close(true)) {
                return;
            }

            // Normalize group
            if (!jQuery.isArray(group)) {
                group = isQuery(group) ? jQuery(group).get() : [group];
            }

            // Recheck if the type of each element is `object` and set content type (image, ajax, etc)
            jQuery.each(group, function(i, element) {
                var obj = {},
                    href,
                    title,
                    content,
                    type,
                    rez,
                    hrefParts,
                    selector;

                if (jQuery.type(element) === "object") {
                    // Check if is DOM element
                    if (element.nodeType) {
                        element = jQuery(element);
                    }

                    if (isQuery(element)) {
                        obj = {
                            href: element.data('fancybox-href') || element.attr('href'),
                            title: jQuery('<div/>').text(element.data('fancybox-title') || element.attr('title') || '').html(),
                            isDom: true,
                            element: element
                        };

                        if (jQuery.metadata) {
                            jQuery.extend(true, obj, element.metadata());
                        }

                    } else {
                        obj = element;
                    }
                }

                href = opts.href || obj.href || (isString(element) ? element : null);
                title = opts.title !== undefined ? opts.title : obj.title || '';

                content = opts.content || obj.content;
                type = content ? 'html' : (opts.type || obj.type);

                if (!type && obj.isDom) {
                    type = element.data('fancybox-type');

                    if (!type) {
                        rez = element.prop('class').match(/fancybox\.(\w+)/);
                        type = rez ? rez[1] : null;
                    }
                }

                if (isString(href)) {
                    // Try to guess the content type
                    if (!type) {
                        if (F.isImage(href)) {
                            type = 'image';

                        } else if (F.isSWF(href)) {
                            type = 'swf';

                        } else if (href.charAt(0) === '#') {
                            type = 'inline';

                        } else if (isString(element)) {
                            type = 'html';
                            content = element;
                        }
                    }

                    // Split url into two pieces with source url and content selector, e.g,
                    // "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
                    if (type === 'ajax') {
                        hrefParts = href.split(/\s+/, 2);
                        href = hrefParts.shift();
                        selector = hrefParts.shift();
                    }
                }

                if (!content) {
                    if (type === 'inline') {
                        if (href) {
                            content = jQuery(isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href); //strip for ie7

                        } else if (obj.isDom) {
                            content = element;
                        }

                    } else if (type === 'html') {
                        content = href;

                    } else if (!type && !href && obj.isDom) {
                        type = 'inline';
                        content = element;
                    }
                }

                jQuery.extend(obj, {
                    href: href,
                    type: type,
                    content: content,
                    title: title,
                    selector: selector
                });

                group[i] = obj;
            });

            // Extend the defaults
            F.opts = jQuery.extend(true, {}, F.defaults, opts);

            // All options are merged recursive except keys
            if (opts.keys !== undefined) {
                F.opts.keys = opts.keys ? jQuery.extend({}, F.defaults.keys, opts.keys) : false;
            }

            F.group = group;

            return F._start(F.opts.index);
        },

        // Cancel image loading or abort ajax request
        cancel: function() {
            var coming = F.coming;

            if (coming && false === F.trigger('onCancel')) {
                return;
            }

            F.hideLoading();

            if (!coming) {
                return;
            }

            if (F.ajaxLoad) {
                F.ajaxLoad.abort();
            }

            F.ajaxLoad = null;

            if (F.imgPreload) {
                F.imgPreload.onload = F.imgPreload.onerror = null;
            }

            if (coming.wrap) {
                coming.wrap.stop(true, true).trigger('onReset').remove();
            }

            F.coming = null;

            // If the first item has been canceled, then clear everything
            if (!F.current) {
                F._afterZoomOut(coming);
            }
        },

        // Start closing animation if is open; remove immediately if opening/closing
        close: function(event) {
            F.cancel();

            if (false === F.trigger('beforeClose')) {
                return;
            }

            F.unbindEvents();

            if (!F.isActive) {
                return;
            }

            if (!F.isOpen || event === true) {
                jQuery('.fancybox-wrap').stop(true).trigger('onReset').remove();

                F._afterZoomOut();

            } else {
                F.isOpen = F.isOpened = false;
                F.isClosing = true;

                jQuery('.fancybox-item, .fancybox-nav').remove();

                F.wrap.stop(true, true).removeClass('fancybox-opened');

                F.transitions[F.current.closeMethod]();
            }
        },

        // Manage slideshow:
        //   jQuery.fancybox.play(); - toggle slideshow
        //   jQuery.fancybox.play( true ); - start
        //   jQuery.fancybox.play( false ); - stop
        play: function(action) {
            var clear = function() {
                    clearTimeout(F.player.timer);
                },
                set = function() {
                    clear();

                    if (F.current && F.player.isActive) {
                        F.player.timer = setTimeout(F.next, F.current.playSpeed);
                    }
                },
                stop = function() {
                    clear();

                    D.unbind('.player');

                    F.player.isActive = false;

                    F.trigger('onPlayEnd');
                },
                start = function() {
                    if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
                        F.player.isActive = true;

                        D.bind({
                            'onCancel.player beforeClose.player': stop,
                            'onUpdate.player': set,
                            'beforeLoad.player': clear
                        });

                        set();

                        F.trigger('onPlayStart');
                    }
                };

            if (action === true || (!F.player.isActive && action !== false)) {
                start();
            } else {
                stop();
            }
        },

        // Navigate to next gallery item
        next: function(direction) {
            var current = F.current;

            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.next;
                }

                F.jumpto(current.index + 1, direction, 'next');
            }
        },

        // Navigate to previous gallery item
        prev: function(direction) {
            var current = F.current;

            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.prev;
                }

                F.jumpto(current.index - 1, direction, 'prev');
            }
        },

        // Navigate to gallery item by index
        jumpto: function(index, direction, router) {
            var current = F.current;

            if (!current) {
                return;
            }

            index = getScalar(index);

            F.direction = direction || current.direction[(index >= current.index ? 'next' : 'prev')];
            F.router = router || 'jumpto';

            if (current.loop) {
                if (index < 0) {
                    index = current.group.length + (index % current.group.length);
                }

                index = index % current.group.length;
            }

            if (current.group[index] !== undefined) {
                F.cancel();

                F._start(index);
            }
        },

        // Center inside viewport and toggle position type to fixed or absolute if needed
        reposition: function(e, onlyAbsolute) {
            var current = F.current,
                wrap = current ? current.wrap : null,
                pos;

            if (wrap) {
                pos = F._getPosition(onlyAbsolute);

                if (e && e.type === 'scroll') {
                    delete pos.position;

                    wrap.stop(true, true).animate(pos, 200);

                } else {
                    wrap.css(pos);

                    current.pos = jQuery.extend({}, current.dim, pos);
                }
            }
        },

        update: function(e) {
            var type = (e && e.originalEvent && e.originalEvent.type),
                anyway = !type || type === 'orientationchange';

            if (anyway) {
                clearTimeout(didUpdate);

                didUpdate = null;
            }

            if (!F.isOpen || didUpdate) {
                return;
            }

            didUpdate = setTimeout(function() {
                var current = F.current;

                if (!current || F.isClosing) {
                    return;
                }

                F.wrap.removeClass('fancybox-tmp');

                if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
                    F._setDimension();
                }

                if (!(type === 'scroll' && current.canShrink)) {
                    F.reposition(e);
                }

                F.trigger('onUpdate');

                didUpdate = null;

            }, (anyway && !isTouch ? 0 : 300));
        },

        // Shrink content to fit inside viewport or restore if resized
        toggle: function(action) {
            if (F.isOpen) {
                F.current.fitToView = jQuery.type(action) === "boolean" ? action : !F.current.fitToView;

                // Help browser to restore document dimensions
                if (isTouch) {
                    F.wrap.removeAttr('style').addClass('fancybox-tmp');

                    F.trigger('onUpdate');
                }

                F.update();
            }
        },

        hideLoading: function() {
            D.unbind('.loading');

            jQuery('#fancybox-loading').remove();
        },

        showLoading: function() {
            var el, viewport;

            F.hideLoading();

            el = jQuery(F.opts.tpl.loading).click(F.cancel).appendTo('body');

            // If user will press the escape-button, the request will be canceled
            D.bind('keydown.loading', function(e) {
                if ((e.which || e.keyCode) === 27) {
                    e.preventDefault();

                    F.cancel();
                }
            });

            if (!F.defaults.fixed) {
                viewport = F.getViewport();

                el.css({
                    position: 'absolute',
                    top: (viewport.h * 0.5) + viewport.y,
                    left: (viewport.w * 0.5) + viewport.x
                });
            }

            F.trigger('onLoading');
        },

        getViewport: function() {
            var locked = (F.current && F.current.locked) || false,
                rez = {
                    x: W.scrollLeft(),
                    y: W.scrollTop()
                };

            if (locked && locked.length) {
                rez.w = locked[0].clientWidth;
                rez.h = locked[0].clientHeight;

            } else {
                // See http://bugs.jquery.com/ticket/6724
                rez.w = isTouch && window.innerWidth ? window.innerWidth : W.width();
                rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
            }

            return rez;
        },

        // Unbind the keyboard / clicking actions
        unbindEvents: function() {
            if (F.wrap && isQuery(F.wrap)) {
                F.wrap.unbind('.fb');
            }

            D.unbind('.fb');
            W.unbind('.fb');
        },

        bindEvents: function() {
            var current = F.current,
                keys;

            if (!current) {
                return;
            }

            // Changing document height on iOS devices triggers a 'resize' event,
            // that can change document height... repeating infinitely
            W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

            keys = current.keys;

            if (keys) {
                D.bind('keydown.fb', function(e) {
                    var code = e.which || e.keyCode,
                        target = e.target || e.srcElement;

                    // Skip esc key if loading, because showLoading will cancel preloading
                    if (code === 27 && F.coming) {
                        return false;
                    }

                    // Ignore key combinations and key events within form elements
                    if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || jQuery(target).is('[contenteditable]')))) {
                        jQuery.each(keys, function(i, val) {
                            if (current.group.length > 1 && val[code] !== undefined) {
                                F[i](val[code]);

                                e.preventDefault();
                                return false;
                            }

                            if (jQuery.inArray(code, val) > -1) {
                                F[i]();

                                e.preventDefault();
                                return false;
                            }
                        });
                    }
                });
            }

            if (jQuery.fn.mousewheel && current.mouseWheel) {
                F.wrap.bind('mousewheel.fb', function(e, delta, deltaX, deltaY) {
                    var target = e.target || null,
                        parent = jQuery(target),
                        canScroll = false;

                    while (parent.length) {
                        if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
                            break;
                        }

                        canScroll = isScrollable(parent[0]);
                        parent = jQuery(parent).parent();
                    }

                    if (delta !== 0 && !canScroll) {
                        if (F.group.length > 1 && !current.canShrink) {
                            if (deltaY > 0 || deltaX > 0) {
                                F.prev(deltaY > 0 ? 'down' : 'left');

                            } else if (deltaY < 0 || deltaX < 0) {
                                F.next(deltaY < 0 ? 'up' : 'right');
                            }

                            e.preventDefault();
                        }
                    }
                });
            }
        },

        trigger: function(event, o) {
            var ret, obj = o || F.coming || F.current;

            if (obj) {
                if (jQuery.isFunction(obj[event])) {
                    ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
                }

                if (ret === false) {
                    return false;
                }

                if (obj.helpers) {
                    jQuery.each(obj.helpers, function(helper, opts) {
                        if (opts && F.helpers[helper] && jQuery.isFunction(F.helpers[helper][event])) {
                            F.helpers[helper][event](jQuery.extend(true, {}, F.helpers[helper].defaults, opts), obj);
                        }
                    });
                }
            }

            D.trigger(event);
        },

        isImage: function(str) {
            return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
        },

        isSWF: function(str) {
            return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
        },

        _start: function(index) {
            var coming = {},
                obj,
                href,
                type,
                margin,
                padding;

            index = getScalar(index);
            obj = F.group[index] || null;

            if (!obj) {
                return false;
            }

            coming = jQuery.extend(true, {}, F.opts, obj);

            // Convert margin and padding properties to array - top, right, bottom, left
            margin = coming.margin;
            padding = coming.padding;

            if (jQuery.type(margin) === 'number') {
                coming.margin = [margin, margin, margin, margin];
            }

            if (jQuery.type(padding) === 'number') {
                coming.padding = [padding, padding, padding, padding];
            }

            // 'modal' propery is just a shortcut
            if (coming.modal) {
                jQuery.extend(true, coming, {
                    closeBtn: false,
                    closeClick: false,
                    nextClick: false,
                    arrows: false,
                    mouseWheel: false,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: false
                        }
                    }
                });
            }

            // 'autoSize' property is a shortcut, too
            if (coming.autoSize) {
                coming.autoWidth = coming.autoHeight = true;
            }

            if (coming.width === 'auto') {
                coming.autoWidth = true;
            }

            if (coming.height === 'auto') {
                coming.autoHeight = true;
            }

            /*
             * Add reference to the group, so it`s possible to access from callbacks, example:
             * afterLoad : function() {
             *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
             * }
             */

            coming.group = F.group;
            coming.index = index;

            // Give a chance for callback or helpers to update coming item (type, title, etc)
            F.coming = coming;

            if (false === F.trigger('beforeLoad')) {
                F.coming = null;

                return;
            }

            type = coming.type;
            href = coming.href;

            if (!type) {
                F.coming = null;

                //If we can not determine content type then drop silently or display next/prev item if looping through gallery
                if (F.current && F.router && F.router !== 'jumpto') {
                    F.current.index = index;

                    return F[F.router](F.direction);
                }

                return false;
            }

            F.isActive = true;

            if (type === 'image' || type === 'swf') {
                coming.autoHeight = coming.autoWidth = false;
                coming.scrolling = 'visible';
            }

            if (type === 'image') {
                coming.aspectRatio = true;
            }

            if (type === 'iframe' && isTouch) {
                coming.scrolling = 'scroll';
            }

            // Build the neccessary markup
            coming.wrap = jQuery(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo(coming.parent || 'body');

            jQuery.extend(coming, {
                skin: jQuery('.fancybox-skin', coming.wrap),
                outer: jQuery('.fancybox-outer', coming.wrap),
                inner: jQuery('.fancybox-inner', coming.wrap)
            });

            jQuery.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
                coming.skin.css('padding' + v, getValue(coming.padding[i]));
            });

            F.trigger('onReady');

            // Check before try to load; 'inline' and 'html' types need content, others - href
            if (type === 'inline' || type === 'html') {
                if (!coming.content || !coming.content.length) {
                    return F._error('content');
                }

            } else if (!href) {
                return F._error('href');
            }

            if (type === 'image') {
                F._loadImage();

            } else if (type === 'ajax') {
                F._loadAjax();

            } else if (type === 'iframe') {
                F._loadIframe();

            } else {
                F._afterLoad();
            }
        },

        _error: function(type) {
            jQuery.extend(F.coming, {
                type: 'html',
                autoWidth: true,
                autoHeight: true,
                minWidth: 0,
                minHeight: 0,
                scrolling: 'no',
                hasError: type,
                content: F.coming.tpl.error
            });

            F._afterLoad();
        },

        _loadImage: function() {
            // Reset preload image so it is later possible to check "complete" property
            var img = F.imgPreload = new Image();

            img.onload = function() {
                this.onload = this.onerror = null;

                F.coming.width = this.width / F.opts.pixelRatio;
                F.coming.height = this.height / F.opts.pixelRatio;

                F._afterLoad();
            };

            img.onerror = function() {
                this.onload = this.onerror = null;

                F._error('image');
            };

            img.src = F.coming.href;

            if (img.complete !== true) {
                F.showLoading();
            }
        },

        _loadAjax: function() {
            var coming = F.coming;

            F.showLoading();

            F.ajaxLoad = jQuery.ajax(jQuery.extend({}, coming.ajax, {
                url: coming.href,
                error: function(jqXHR, textStatus) {
                    if (F.coming && textStatus !== 'abort') {
                        F._error('ajax', jqXHR);

                    } else {
                        F.hideLoading();
                    }
                },
                success: function(data, textStatus) {
                    if (textStatus === 'success') {
                        coming.content = data;

                        F._afterLoad();
                    }
                }
            }));
        },

        _loadIframe: function() {
            var coming = F.coming,
                iframe = jQuery(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
                .attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
                .attr('src', coming.href);

            // This helps IE
            jQuery(coming.wrap).bind('onReset', function() {
                try {
                    jQuery(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
                } catch (e) {}
            });

            if (coming.iframe.preload) {
                F.showLoading();

                iframe.one('load', function() {
                    jQuery(this).data('ready', 1);

                    // iOS will lose scrolling if we resize
                    if (!isTouch) {
                        jQuery(this).bind('load.fb', F.update);
                    }

                    // Without this trick:
                    //   - iframe won't scroll on iOS devices
                    //   - IE7 sometimes displays empty iframe
                    jQuery(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

                    F._afterLoad();
                });
            }

            coming.content = iframe.appendTo(coming.inner);

            if (!coming.iframe.preload) {
                F._afterLoad();
            }
        },

        _preloadImages: function() {
            var group = F.group,
                current = F.current,
                len = group.length,
                cnt = current.preload ? Math.min(current.preload, len - 1) : 0,
                item,
                i;

            for (i = 1; i <= cnt; i += 1) {
                item = group[(current.index + i) % len];

                if (item.type === 'image' && item.href) {
                    new Image().src = item.href;
                }
            }
        },

        _afterLoad: function() {
            var coming = F.coming,
                previous = F.current,
                placeholder = 'fancybox-placeholder',
                current,
                content,
                type,
                scrolling,
                href,
                embed;

            F.hideLoading();

            if (!coming || F.isActive === false) {
                return;
            }

            if (false === F.trigger('afterLoad', coming, previous)) {
                coming.wrap.stop(true).trigger('onReset').remove();

                F.coming = null;

                return;
            }

            if (previous) {
                F.trigger('beforeChange', previous);

                previous.wrap.stop(true).removeClass('fancybox-opened')
                    .find('.fancybox-item, .fancybox-nav')
                    .remove();
            }

            F.unbindEvents();

            current = coming;
            content = coming.content;
            type = coming.type;
            scrolling = coming.scrolling;

            jQuery.extend(F, {
                wrap: current.wrap,
                skin: current.skin,
                outer: current.outer,
                inner: current.inner,
                current: current,
                previous: previous
            });

            href = current.href;

            switch (type) {
                case 'inline':
                case 'ajax':
                case 'html':
                    if (current.selector) {
                        content = jQuery('<div>').html(content).find(current.selector);

                    } else if (isQuery(content)) {
                        if (!content.data(placeholder)) {
                            content.data(placeholder, jQuery('<div class="' + placeholder + '"></div>').insertAfter(content).hide());
                        }

                        content = content.show().detach();

                        current.wrap.bind('onReset', function() {
                            if (jQuery(this).find(content).length) {
                                content.hide().replaceAll(content.data(placeholder)).data(placeholder, false);
                            }
                        });
                    }
                    break;

                case 'image':
                    content = current.tpl.image.replace(/\{href\}/g, href);
                    break;

                case 'swf':
                    content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
                    embed = '';

                    jQuery.each(current.swf, function(name, val) {
                        content += '<param name="' + name + '" value="' + val + '"></param>';
                        embed += ' ' + name + '="' + val + '"';
                    });

                    content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
                    break;
            }

            if (!(isQuery(content) && content.parent().is(current.inner))) {
                current.inner.append(content);
            }

            // Give a chance for helpers or callbacks to update elements
            F.trigger('beforeShow');

            // Set scrolling before calculating dimensions
            current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

            // Set initial dimensions and start position
            F._setDimension();

            F.reposition();

            F.isOpen = false;
            F.coming = null;

            F.bindEvents();

            if (!F.isOpened) {
                jQuery('.fancybox-wrap').not(current.wrap).stop(true).trigger('onReset').remove();

            } else if (previous.prevMethod) {
                F.transitions[previous.prevMethod]();
            }

            F.transitions[F.isOpened ? current.nextMethod : current.openMethod]();

            F._preloadImages();
        },

        _setDimension: function() {
            var viewport = F.getViewport(),
                steps = 0,
                canShrink = false,
                canExpand = false,
                wrap = F.wrap,
                skin = F.skin,
                inner = F.inner,
                current = F.current,
                width = current.width,
                height = current.height,
                minWidth = current.minWidth,
                minHeight = current.minHeight,
                maxWidth = current.maxWidth,
                maxHeight = current.maxHeight,
                scrolling = current.scrolling,
                scrollOut = current.scrollOutside ? current.scrollbarWidth : 0,
                margin = current.margin,
                wMargin = getScalar(margin[1] + margin[3]),
                hMargin = getScalar(margin[0] + margin[2]),
                wPadding,
                hPadding,
                wSpace,
                hSpace,
                origWidth,
                origHeight,
                origMaxWidth,
                origMaxHeight,
                ratio,
                width_,
                height_,
                maxWidth_,
                maxHeight_,
                iframe,
                body;

            // Reset dimensions so we could re-check actual size
            wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

            wPadding = getScalar(skin.outerWidth(true) - skin.width());
            hPadding = getScalar(skin.outerHeight(true) - skin.height());

            // Any space between content and viewport (margin, padding, border, title)
            wSpace = wMargin + wPadding;
            hSpace = hMargin + hPadding;

            origWidth = isPercentage(width) ? (viewport.w - wSpace) * getScalar(width) / 100 : width;
            origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

            if (current.type === 'iframe') {
                iframe = current.content;

                if (current.autoHeight && iframe.data('ready') === 1) {
                    try {
                        if (iframe[0].contentWindow.document.location) {
                            inner.width(origWidth).height(9999);

                            body = iframe.contents().find('body');

                            if (scrollOut) {
                                body.css('overflow-x', 'hidden');
                            }

                            origHeight = body.outerHeight(true);
                        }

                    } catch (e) {}
                }

            } else if (current.autoWidth || current.autoHeight) {
                inner.addClass('fancybox-tmp');

                // Set width or height in case we need to calculate only one dimension
                if (!current.autoWidth) {
                    inner.width(origWidth);
                }

                if (!current.autoHeight) {
                    inner.height(origHeight);
                }

                if (current.autoWidth) {
                    origWidth = inner.width();
                }

                if (current.autoHeight) {
                    origHeight = inner.height();
                }

                inner.removeClass('fancybox-tmp');
            }

            width = getScalar(origWidth);
            height = getScalar(origHeight);

            ratio = origWidth / origHeight;

            // Calculations for the content
            minWidth = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
            maxWidth = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

            minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
            maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

            // These will be used to determine if wrap can fit in the viewport
            origMaxWidth = maxWidth;
            origMaxHeight = maxHeight;

            if (current.fitToView) {
                maxWidth = Math.min(viewport.w - wSpace, maxWidth);
                maxHeight = Math.min(viewport.h - hSpace, maxHeight);
            }

            maxWidth_ = viewport.w - wMargin;
            maxHeight_ = viewport.h - hMargin;

            if (current.aspectRatio) {
                if (width > maxWidth) {
                    width = maxWidth;
                    height = getScalar(width / ratio);
                }

                if (height > maxHeight) {
                    height = maxHeight;
                    width = getScalar(height * ratio);
                }

                if (width < minWidth) {
                    width = minWidth;
                    height = getScalar(width / ratio);
                }

                if (height < minHeight) {
                    height = minHeight;
                    width = getScalar(height * ratio);
                }

            } else {
                width = Math.max(minWidth, Math.min(width, maxWidth));

                if (current.autoHeight && current.type !== 'iframe') {
                    inner.width(width);

                    height = inner.height();
                }

                height = Math.max(minHeight, Math.min(height, maxHeight));
            }

            // Try to fit inside viewport (including the title)
            if (current.fitToView) {
                inner.width(width).height(height);

                wrap.width(width + wPadding);

                // Real wrap dimensions
                width_ = wrap.width();
                height_ = wrap.height();

                if (current.aspectRatio) {
                    while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
                        if (steps++ > 19) {
                            break;
                        }

                        height = Math.max(minHeight, Math.min(maxHeight, height - 10));
                        width = getScalar(height * ratio);

                        if (width < minWidth) {
                            width = minWidth;
                            height = getScalar(width / ratio);
                        }

                        if (width > maxWidth) {
                            width = maxWidth;
                            height = getScalar(width / ratio);
                        }

                        inner.width(width).height(height);

                        wrap.width(width + wPadding);

                        width_ = wrap.width();
                        height_ = wrap.height();
                    }

                } else {
                    width = Math.max(minWidth, Math.min(width, width - (width_ - maxWidth_)));
                    height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
                }
            }

            if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
                width += scrollOut;
            }

            inner.width(width).height(height);

            wrap.width(width + wPadding);

            width_ = wrap.width();
            height_ = wrap.height();

            canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
            canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

            jQuery.extend(current, {
                dim: {
                    width: getValue(width_),
                    height: getValue(height_)
                },
                origWidth: origWidth,
                origHeight: origHeight,
                canShrink: canShrink,
                canExpand: canExpand,
                wPadding: wPadding,
                hPadding: hPadding,
                wrapSpace: height_ - skin.outerHeight(true),
                skinSpace: skin.height() - height
            });

            if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
                inner.height('auto');
            }
        },

        _getPosition: function(onlyAbsolute) {
            var current = F.current,
                viewport = F.getViewport(),
                margin = current.margin,
                width = F.wrap.width() + margin[1] + margin[3],
                height = F.wrap.height() + margin[0] + margin[2],
                rez = {
                    position: 'absolute',
                    top: margin[0],
                    left: margin[3]
                };

            if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
                rez.position = 'fixed';

            } else if (!current.locked) {
                rez.top += viewport.y;
                rez.left += viewport.x;
            }

            rez.top = getValue(Math.max(rez.top, rez.top + ((viewport.h - height) * current.topRatio)));
            rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width) * current.leftRatio)));

            return rez;
        },

        _afterZoomIn: function() {
            var current = F.current;

            if (!current) {
                return;
            }

            F.isOpen = F.isOpened = true;

            F.wrap.css('overflow', 'visible').addClass('fancybox-opened').hide().show(0);

            F.update();

            // Assign a click event
            if (current.closeClick || (current.nextClick && F.group.length > 1)) {
                F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
                    if (!jQuery(e.target).is('a') && !jQuery(e.target).parent().is('a')) {
                        e.preventDefault();

                        F[current.closeClick ? 'close' : 'next']();
                    }
                });
            }

            // Create a close button
            if (current.closeBtn) {
                jQuery(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
                    e.preventDefault();

                    F.close();
                });
            }

            // Create navigation arrows
            if (current.arrows && F.group.length > 1) {
                if (current.loop || current.index > 0) {
                    jQuery(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
                }

                if (current.loop || current.index < F.group.length - 1) {
                    jQuery(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
                }
            }

            F.trigger('afterShow');

            // Stop the slideshow if this is the last item
            if (!current.loop && current.index === current.group.length - 1) {

                F.play(false);

            } else if (F.opts.autoPlay && !F.player.isActive) {
                F.opts.autoPlay = false;

                F.play(true);
            }
        },

        _afterZoomOut: function(obj) {
            obj = obj || F.current;

            jQuery('.fancybox-wrap').trigger('onReset').remove();

            jQuery.extend(F, {
                group: {},
                opts: {},
                router: false,
                current: null,
                isActive: false,
                isOpened: false,
                isOpen: false,
                isClosing: false,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });

            F.trigger('afterClose', obj);
        }
    });

    /*
     *	Default transitions
     */

    F.transitions = {
        getOrigPosition: function() {
            var current = F.current,
                element = current.element,
                orig = current.orig,
                pos = {},
                width = 50,
                height = 50,
                hPadding = current.hPadding,
                wPadding = current.wPadding,
                viewport = F.getViewport();

            if (!orig && current.isDom && element.is(':visible')) {
                orig = element.find('img:first');

                if (!orig.length) {
                    orig = element;
                }
            }

            if (isQuery(orig)) {
                pos = orig.offset();

                if (orig.is('img')) {
                    width = orig.outerWidth();
                    height = orig.outerHeight();
                }

            } else {
                pos.top = viewport.y + (viewport.h - height) * current.topRatio;
                pos.left = viewport.x + (viewport.w - width) * current.leftRatio;
            }

            if (F.wrap.css('position') === 'fixed' || current.locked) {
                pos.top -= viewport.y;
                pos.left -= viewport.x;
            }

            pos = {
                top: getValue(pos.top - hPadding * current.topRatio),
                left: getValue(pos.left - wPadding * current.leftRatio),
                width: getValue(width + wPadding),
                height: getValue(height + hPadding)
            };

            return pos;
        },

        step: function(now, fx) {
            var ratio,
                padding,
                value,
                prop = fx.prop,
                current = F.current,
                wrapSpace = current.wrapSpace,
                skinSpace = current.skinSpace;

            if (prop === 'width' || prop === 'height') {
                ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

                if (F.isClosing) {
                    ratio = 1 - ratio;
                }

                padding = prop === 'width' ? current.wPadding : current.hPadding;
                value = now - padding;

                F.skin[prop](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio)));
                F.inner[prop](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio) - (skinSpace * ratio)));
            }
        },

        zoomIn: function() {
            var current = F.current,
                startPos = current.pos,
                effect = current.openEffect,
                elastic = effect === 'elastic',
                endPos = jQuery.extend({
                    opacity: 1
                }, startPos);

            // Remove "position" property that breaks older IE
            delete endPos.position;

            if (elastic) {
                startPos = this.getOrigPosition();

                if (current.openOpacity) {
                    startPos.opacity = 0.1;
                }

            } else if (effect === 'fade') {
                startPos.opacity = 0.1;
            }

            F.wrap.css(startPos).animate(endPos, {
                duration: effect === 'none' ? 0 : current.openSpeed,
                easing: current.openEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomIn
            });
        },

        zoomOut: function() {
            var current = F.current,
                effect = current.closeEffect,
                elastic = effect === 'elastic',
                endPos = {
                    opacity: 0.1
                };

            if (elastic) {
                endPos = this.getOrigPosition();

                if (current.closeOpacity) {
                    endPos.opacity = 0.1;
                }
            }

            F.wrap.animate(endPos, {
                duration: effect === 'none' ? 0 : current.closeSpeed,
                easing: current.closeEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomOut
            });
        },

        changeIn: function() {
            var current = F.current,
                effect = current.nextEffect,
                startPos = current.pos,
                endPos = {
                    opacity: 1
                },
                direction = F.direction,
                distance = 200,
                field;

            startPos.opacity = 0.1;

            if (effect === 'elastic') {
                field = direction === 'down' || direction === 'up' ? 'top' : 'left';

                if (direction === 'down' || direction === 'right') {
                    startPos[field] = getValue(getScalar(startPos[field]) - distance);
                    endPos[field] = '+=' + distance + 'px';

                } else {
                    startPos[field] = getValue(getScalar(startPos[field]) + distance);
                    endPos[field] = '-=' + distance + 'px';
                }
            }

            // Workaround for http://bugs.jquery.com/ticket/12273
            if (effect === 'none') {
                F._afterZoomIn();

            } else {
                F.wrap.css(startPos).animate(endPos, {
                    duration: current.nextSpeed,
                    easing: current.nextEasing,
                    complete: F._afterZoomIn
                });
            }
        },

        changeOut: function() {
            var previous = F.previous,
                effect = previous.prevEffect,
                endPos = {
                    opacity: 0.1
                },
                direction = F.direction,
                distance = 200;

            if (effect === 'elastic') {
                endPos[direction === 'down' || direction === 'up' ? 'top' : 'left'] = (direction === 'up' || direction === 'left' ? '-' : '+') + '=' + distance + 'px';
            }

            previous.wrap.animate(endPos, {
                duration: effect === 'none' ? 0 : previous.prevSpeed,
                easing: previous.prevEasing,
                complete: function() {
                    jQuery(this).trigger('onReset').remove();
                }
            });
        }
    };

    /*
     *	Overlay helper
     */

    F.helpers.overlay = {
        defaults: {
            closeClick: true, // if true, fancyBox will be closed when user clicks on the overlay
            speedOut: 200, // duration of fadeOut animation
            showEarly: true, // indicates if should be opened immediately or wait until the content is ready
            css: {}, // custom CSS properties
            locked: !isTouch, // if true, the content will be locked into overlay
            fixed: true // if false, the overlay CSS position property will not be set to "fixed"
        },

        overlay: null, // current handle
        fixed: false, // indicates if the overlay has position "fixed"
        el: jQuery('html'), // element that contains "the lock"

        // Public methods
        create: function(opts) {
            var parent;

            opts = jQuery.extend({}, this.defaults, opts);

            if (this.overlay) {
                this.close();
            }

            parent = F.coming ? F.coming.parent : opts.parent;

            this.overlay = jQuery('<div class="fancybox-overlay"></div>').appendTo(parent && parent.length ? parent : 'body');
            this.fixed = false;

            if (opts.fixed && F.defaults.fixed) {
                this.overlay.addClass('fancybox-overlay-fixed');

                this.fixed = true;
            }
        },

        open: function(opts) {
            var that = this;

            opts = jQuery.extend({}, this.defaults, opts);

            if (this.overlay) {
                this.overlay.unbind('.overlay').width('auto').height('auto');

            } else {
                this.create(opts);
            }

            if (!this.fixed) {
                W.bind('resize.overlay', jQuery.proxy(this.update, this));

                this.update();
            }

            if (opts.closeClick) {
                this.overlay.bind('click.overlay', function(e) {
                    if (jQuery(e.target).hasClass('fancybox-overlay')) {
                        if (F.isActive) {
                            F.close();
                        } else {
                            that.close();
                        }

                        return false;
                    }
                });
            }

            this.overlay.css(opts.css).show();
        },

        close: function() {
            W.unbind('resize.overlay');

            if (this.el.hasClass('fancybox-lock')) {
                jQuery('.fancybox-margin').removeClass('fancybox-margin');

                this.el.removeClass('fancybox-lock');

                W.scrollTop(this.scrollV).scrollLeft(this.scrollH);
            }

            jQuery('.fancybox-overlay').remove().hide();

            jQuery.extend(this, {
                overlay: null,
                fixed: false
            });
        },

        // Private, callbacks

        update: function() {
            var width = '100%', offsetWidth;

            // Reset width/height so it will not mess
            this.overlay.width(width).height('100%');

            // jQuery does not return reliable result for IE
            if (IE) {
                offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

                if (D.width() > offsetWidth) {
                    width = D.width();
                }

            } else if (D.width() > W.width()) {
                width = D.width();
            }

            this.overlay.width(width).height(D.height());
        },

        // This is where we can manipulate DOM, because later it would cause iframes to reload
        onReady: function(opts, obj) {
            var overlay = this.overlay;

            jQuery('.fancybox-overlay').stop(true, true);

            if (!overlay) {
                this.create(opts);
            }

            if (opts.locked && this.fixed && obj.fixed) {
                obj.locked = this.overlay.append(obj.wrap);
                obj.fixed = false;
            }

            if (opts.showEarly === true) {
                this.beforeShow.apply(this, arguments);
            }
        },

        beforeShow: function(opts, obj) {
            if (obj.locked && !this.el.hasClass('fancybox-lock')) {
                if (this.fixPosition !== false) {
                    jQuery('*').filter(function() {
                        return (jQuery(this).css('position') === 'fixed' && !jQuery(this).hasClass("fancybox-overlay") && !jQuery(this).hasClass("fancybox-wrap"));
                    }).addClass('fancybox-margin');
                }

                this.el.addClass('fancybox-margin');

                this.scrollV = W.scrollTop();
                this.scrollH = W.scrollLeft();

                this.el.addClass('fancybox-lock');

                W.scrollTop(this.scrollV).scrollLeft(this.scrollH);
            }

            this.open(opts);
        },

        onUpdate: function() {
            if (!this.fixed) {
                this.update();
            }
        },

        afterClose: function(opts) {
            // Remove overlay if exists and fancyBox is not opening
            // (e.g., it is not being open using afterClose callback)
            if (this.overlay && !F.coming) {
                this.overlay.fadeOut(opts.speedOut, jQuery.proxy(this.close, this));
            }
        }
    };

    /*
     *	Title helper
     */

    F.helpers.title = {
        defaults: {
            type: 'float', // 'float', 'inside', 'outside' or 'over',
            position: 'bottom' // 'top' or 'bottom'
        },

        beforeShow: function(opts) {
            var current = F.current,
                text = current.title,
                type = opts.type,
                title,
                target;

            if (jQuery.isFunction(text)) {
                text = text.call(current.element, current);
            }

            if (!isString(text) || jQuery.trim(text) === '') {
                return;
            }

            title = jQuery('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

            switch (type) {
                case 'inside':
                    target = F.skin;
                    break;

                case 'outside':
                    target = F.wrap;
                    break;

                case 'over':
                    target = F.inner;
                    break;

                default: // 'float'
                    target = F.skin;

                    title.appendTo('body');

                    if (IE) {
                        title.width(title.width());
                    }

                    title.wrapInner('<span class="child"></span>');

                    //Increase bottom margin so this title will also fit into viewport
                    F.current.margin[2] += Math.abs(getScalar(title.css('margin-bottom')));
                    break;
            }

            title[(opts.position === 'top' ? 'prependTo' : 'appendTo')](target);
        }
    };

    // jQuery plugin initialization
    jQuery.fn.fancybox = function(options) {
        var index,
            that = jQuery(this),
            selector = this.selector || '',
            run = function(e) {
                var what = jQuery(this).blur(), idx = index, relType, relVal;

                if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
                    relType = options.groupAttr || 'data-fancybox-group';
                    relVal = what.attr(relType);

                    if (!relVal) {
                        relType = 'rel';
                        relVal = what.get(0)[relType];
                    }

                    if (relVal && relVal !== '' && relVal !== 'nofollow') {
                        what = selector.length ? jQuery(selector) : that;
                        what = what.filter('[' + relType + '="' + relVal + '"]');
                        idx = what.index(this);
                    }

                    options.index = idx;

                    // Stop an event from bubbling if everything is fine
                    if (F.open(what, options) !== false) {
                        e.preventDefault();
                    }
                }
            };

        options = options || {};
        index = options.index || 0;

        if (!selector || options.live === false) {
            that.unbind('click.fb-start').bind('click.fb-start', run);

        } else {
            D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
        }

        this.filter('[data-fancybox-start=1]').trigger('click');

        return this;
    };

    // Tests that need a body at doc ready
    D.ready(function() {
        var w1, w2;

        if (jQuery.scrollbarWidth === undefined) {
            // http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
            jQuery.scrollbarWidth = function() {
                var parent = jQuery('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
                    child = parent.children(),
                    width = child.innerWidth() - child.height(99).innerWidth();

                parent.remove();

                return width;
            };
        }

        if (jQuery.support.fixedPosition === undefined) {
            jQuery.support.fixedPosition = (function() {
                var elem = jQuery('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
                    fixed = (elem[0].offsetTop === 20 || elem[0].offsetTop === 15);

                elem.remove();

                return fixed;
            }());
        }

        jQuery.extend(F.defaults, {
            scrollbarWidth: jQuery.scrollbarWidth(),
            fixed: jQuery.support.fixedPosition,
            parent: jQuery('body')
        });

        //Get real width of page scroll-bar
        w1 = jQuery(window).width();

        H.addClass('fancybox-lock-test');

        w2 = jQuery(window).width();

        H.removeClass('fancybox-lock-test');

        jQuery("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
    });
}


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: :data Selector
//>>group: Core
//>>description: Selects elements which have data stored under the specified key.
//>>docs: http://api.jqueryui.com/data-selector/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {
return $.extend( $.expr[ ":" ], {
	data: $.expr.createPseudo ?
		$.expr.createPseudo( function( dataName ) {
			return function( elem ) {
				return !!$.data( elem, dataName );
			};
		} ) :

		// Support: jQuery <1.8
		function( elem, i, match ) {
			return !!$.data( elem, match[ 3 ] );
		}
} );
} ) );


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: disableSelection
//>>group: Core
//>>description: Disable selection of text content within the set of matched elements.
//>>docs: http://api.jqueryui.com/disableSelection/

// This file is deprecated
( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

return $.fn.extend( {
	disableSelection: ( function() {
		var eventType = "onselectstart" in document.createElement( "div" ) ?
			"selectstart" :
			"mousedown";

		return function() {
			return this.on( eventType + ".ui-disableSelection", function( event ) {
				event.preventDefault();
			} );
		};
	} )(),

	enableSelection: function() {
		return this.off( ".ui-disableSelection" );
	}
} );

} ) );


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

// Internal use only
return $.ui.escapeSelector = ( function() {
	var selectorEscape = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
	return function( selector ) {
		return selector.replace( selectorEscape, "\\$1" );
	};
} )();

} ) );


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

// This file is deprecated
return $.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );
} ) );


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Keycode
//>>group: Core
//>>description: Provide keycodes as keynames
//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {
return $.ui.keyCode = {
	BACKSPACE: 8,
	COMMA: 188,
	DELETE: 46,
	DOWN: 40,
	END: 35,
	ENTER: 13,
	ESCAPE: 27,
	HOME: 36,
	LEFT: 37,
	PAGE_DOWN: 34,
	PAGE_UP: 33,
	PERIOD: 190,
	RIGHT: 39,
	SPACE: 32,
	TAB: 9,
	UP: 38
};

} ) );


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {
return $.ui.safeBlur = function( element ) {

	// Support: IE9 - 10 only
	// If the <body> is blurred, IE will switch windows, see #9420
	if ( element && element.nodeName.toLowerCase() !== "body" ) {
		$( element ).trigger( "blur" );
	}
};

} ) );


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: scrollParent
//>>group: Core
//>>description: Get the closest ancestor element that is scrollable.
//>>docs: http://api.jqueryui.com/scrollParent/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

return $.fn.scrollParent = function( includeHidden ) {
	var position = this.css( "position" ),
		excludeStaticParent = position === "absolute",
		overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
		scrollParent = this.parents().filter( function() {
			var parent = $( this );
			if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
				return false;
			}
			return overflowRegex.test( parent.css( "overflow" ) + parent.css( "overflow-y" ) +
				parent.css( "overflow-x" ) );
		} ).eq( 0 );

	return position === "fixed" || !scrollParent.length ?
		$( this[ 0 ].ownerDocument || document ) :
		scrollParent;
};

} ) );


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: uniqueId
//>>group: Core
//>>description: Functions to generate and remove uniqueId's
//>>docs: http://api.jqueryui.com/uniqueId/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

return $.fn.extend( {
	uniqueId: ( function() {
		var uuid = 0;

		return function() {
			return this.each( function() {
				if ( !this.id ) {
					this.id = "ui-id-" + ( ++uuid );
				}
			} );
		};
	} )(),

	removeUniqueId: function() {
		return this.each( function() {
			if ( /^ui-id-\d+$/.test( this.id ) ) {
				$( this ).removeAttr( "id" );
			}
		} );
	}
} );

} ) );


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Draggable
//>>group: Interactions
//>>description: Enables dragging functionality for any element.
//>>docs: http://api.jqueryui.com/draggable/
//>>demos: http://jqueryui.com/draggable/
//>>css.structure: ../../themes/base/draggable.css

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(0),
			__webpack_require__(18),
			__webpack_require__(52),
			__webpack_require__(16),
			__webpack_require__(17),
			__webpack_require__(57),
			__webpack_require__(58),
			__webpack_require__(1),
			__webpack_require__(4)
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

$.widget( "ui.draggable", $.ui.mouse, {
	version: "1.12.1",
	widgetEventPrefix: "drag",
	options: {
		addClasses: true,
		appendTo: "parent",
		axis: false,
		connectToSortable: false,
		containment: false,
		cursor: "auto",
		cursorAt: false,
		grid: false,
		handle: false,
		helper: "original",
		iframeFix: false,
		opacity: false,
		refreshPositions: false,
		revert: false,
		revertDuration: 500,
		scope: "default",
		scroll: true,
		scrollSensitivity: 20,
		scrollSpeed: 20,
		snap: false,
		snapMode: "both",
		snapTolerance: 20,
		stack: false,
		zIndex: false,

		// Callbacks
		drag: null,
		start: null,
		stop: null
	},
	_create: function() {

		if ( this.options.helper === "original" ) {
			this._setPositionRelative();
		}
		if ( this.options.addClasses ) {
			this._addClass( "ui-draggable" );
		}
		this._setHandleClassName();

		this._mouseInit();
	},

	_setOption: function( key, value ) {
		this._super( key, value );
		if ( key === "handle" ) {
			this._removeHandleClassName();
			this._setHandleClassName();
		}
	},

	_destroy: function() {
		if ( ( this.helper || this.element ).is( ".ui-draggable-dragging" ) ) {
			this.destroyOnClear = true;
			return;
		}
		this._removeHandleClassName();
		this._mouseDestroy();
	},

	_mouseCapture: function( event ) {
		var o = this.options;

		// Among others, prevent a drag on a resizable-handle
		if ( this.helper || o.disabled ||
				$( event.target ).closest( ".ui-resizable-handle" ).length > 0 ) {
			return false;
		}

		//Quit if we're not on a valid handle
		this.handle = this._getHandle( event );
		if ( !this.handle ) {
			return false;
		}

		this._blurActiveElement( event );

		this._blockFrames( o.iframeFix === true ? "iframe" : o.iframeFix );

		return true;

	},

	_blockFrames: function( selector ) {
		this.iframeBlocks = this.document.find( selector ).map( function() {
			var iframe = $( this );

			return $( "<div>" )
				.css( "position", "absolute" )
				.appendTo( iframe.parent() )
				.outerWidth( iframe.outerWidth() )
				.outerHeight( iframe.outerHeight() )
				.offset( iframe.offset() )[ 0 ];
		} );
	},

	_unblockFrames: function() {
		if ( this.iframeBlocks ) {
			this.iframeBlocks.remove();
			delete this.iframeBlocks;
		}
	},

	_blurActiveElement: function( event ) {
		var activeElement = $.ui.safeActiveElement( this.document[ 0 ] ),
			target = $( event.target );

		// Don't blur if the event occurred on an element that is within
		// the currently focused element
		// See #10527, #12472
		if ( target.closest( activeElement ).length ) {
			return;
		}

		// Blur any element that currently has focus, see #4261
		$.ui.safeBlur( activeElement );
	},

	_mouseStart: function( event ) {

		var o = this.options;

		//Create and append the visible helper
		this.helper = this._createHelper( event );

		this._addClass( this.helper, "ui-draggable-dragging" );

		//Cache the helper size
		this._cacheHelperProportions();

		//If ddmanager is used for droppables, set the global draggable
		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.current = this;
		}

		/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */

		//Cache the margins of the original element
		this._cacheMargins();

		//Store the helper's css position
		this.cssPosition = this.helper.css( "position" );
		this.scrollParent = this.helper.scrollParent( true );
		this.offsetParent = this.helper.offsetParent();
		this.hasFixedAncestor = this.helper.parents().filter( function() {
				return $( this ).css( "position" ) === "fixed";
			} ).length > 0;

		//The element's absolute position on the page minus margins
		this.positionAbs = this.element.offset();
		this._refreshOffsets( event );

		//Generate the original position
		this.originalPosition = this.position = this._generatePosition( event, false );
		this.originalPageX = event.pageX;
		this.originalPageY = event.pageY;

		//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
		( o.cursorAt && this._adjustOffsetFromHelper( o.cursorAt ) );

		//Set a containment if given in the options
		this._setContainment();

		//Trigger event + callbacks
		if ( this._trigger( "start", event ) === false ) {
			this._clear();
			return false;
		}

		//Recache the helper size
		this._cacheHelperProportions();

		//Prepare the droppable offsets
		if ( $.ui.ddmanager && !o.dropBehaviour ) {
			$.ui.ddmanager.prepareOffsets( this, event );
		}

		// Execute the drag once - this causes the helper not to be visible before getting its
		// correct position
		this._mouseDrag( event, true );

		// If the ddmanager is used for droppables, inform the manager that dragging has started
		// (see #5003)
		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.dragStart( this, event );
		}

		return true;
	},

	_refreshOffsets: function( event ) {
		this.offset = {
			top: this.positionAbs.top - this.margins.top,
			left: this.positionAbs.left - this.margins.left,
			scroll: false,
			parent: this._getParentOffset(),
			relative: this._getRelativeOffset()
		};

		this.offset.click = {
			left: event.pageX - this.offset.left,
			top: event.pageY - this.offset.top
		};
	},

	_mouseDrag: function( event, noPropagation ) {

		// reset any necessary cached properties (see #5009)
		if ( this.hasFixedAncestor ) {
			this.offset.parent = this._getParentOffset();
		}

		//Compute the helpers position
		this.position = this._generatePosition( event, true );
		this.positionAbs = this._convertPositionTo( "absolute" );

		//Call plugins and callbacks and use the resulting position if something is returned
		if ( !noPropagation ) {
			var ui = this._uiHash();
			if ( this._trigger( "drag", event, ui ) === false ) {
				this._mouseUp( new $.Event( "mouseup", event ) );
				return false;
			}
			this.position = ui.position;
		}

		this.helper[ 0 ].style.left = this.position.left + "px";
		this.helper[ 0 ].style.top = this.position.top + "px";

		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.drag( this, event );
		}

		return false;
	},

	_mouseStop: function( event ) {

		//If we are using droppables, inform the manager about the drop
		var that = this,
			dropped = false;
		if ( $.ui.ddmanager && !this.options.dropBehaviour ) {
			dropped = $.ui.ddmanager.drop( this, event );
		}

		//if a drop comes from outside (a sortable)
		if ( this.dropped ) {
			dropped = this.dropped;
			this.dropped = false;
		}

		if ( ( this.options.revert === "invalid" && !dropped ) ||
				( this.options.revert === "valid" && dropped ) ||
				this.options.revert === true || ( $.isFunction( this.options.revert ) &&
				this.options.revert.call( this.element, dropped ) )
		) {
			$( this.helper ).animate(
				this.originalPosition,
				parseInt( this.options.revertDuration, 10 ),
				function() {
					if ( that._trigger( "stop", event ) !== false ) {
						that._clear();
					}
				}
			);
		} else {
			if ( this._trigger( "stop", event ) !== false ) {
				this._clear();
			}
		}

		return false;
	},

	_mouseUp: function( event ) {
		this._unblockFrames();

		// If the ddmanager is used for droppables, inform the manager that dragging has stopped
		// (see #5003)
		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.dragStop( this, event );
		}

		// Only need to focus if the event occurred on the draggable itself, see #10527
		if ( this.handleElement.is( event.target ) ) {

			// The interaction is over; whether or not the click resulted in a drag,
			// focus the element
			this.element.trigger( "focus" );
		}

		return $.ui.mouse.prototype._mouseUp.call( this, event );
	},

	cancel: function() {

		if ( this.helper.is( ".ui-draggable-dragging" ) ) {
			this._mouseUp( new $.Event( "mouseup", { target: this.element[ 0 ] } ) );
		} else {
			this._clear();
		}

		return this;

	},

	_getHandle: function( event ) {
		return this.options.handle ?
			!!$( event.target ).closest( this.element.find( this.options.handle ) ).length :
			true;
	},

	_setHandleClassName: function() {
		this.handleElement = this.options.handle ?
			this.element.find( this.options.handle ) : this.element;
		this._addClass( this.handleElement, "ui-draggable-handle" );
	},

	_removeHandleClassName: function() {
		this._removeClass( this.handleElement, "ui-draggable-handle" );
	},

	_createHelper: function( event ) {

		var o = this.options,
			helperIsFunction = $.isFunction( o.helper ),
			helper = helperIsFunction ?
				$( o.helper.apply( this.element[ 0 ], [ event ] ) ) :
				( o.helper === "clone" ?
					this.element.clone().removeAttr( "id" ) :
					this.element );

		if ( !helper.parents( "body" ).length ) {
			helper.appendTo( ( o.appendTo === "parent" ?
				this.element[ 0 ].parentNode :
				o.appendTo ) );
		}

		// Http://bugs.jqueryui.com/ticket/9446
		// a helper function can return the original element
		// which wouldn't have been set to relative in _create
		if ( helperIsFunction && helper[ 0 ] === this.element[ 0 ] ) {
			this._setPositionRelative();
		}

		if ( helper[ 0 ] !== this.element[ 0 ] &&
				!( /(fixed|absolute)/ ).test( helper.css( "position" ) ) ) {
			helper.css( "position", "absolute" );
		}

		return helper;

	},

	_setPositionRelative: function() {
		if ( !( /^(?:r|a|f)/ ).test( this.element.css( "position" ) ) ) {
			this.element[ 0 ].style.position = "relative";
		}
	},

	_adjustOffsetFromHelper: function( obj ) {
		if ( typeof obj === "string" ) {
			obj = obj.split( " " );
		}
		if ( $.isArray( obj ) ) {
			obj = { left: +obj[ 0 ], top: +obj[ 1 ] || 0 };
		}
		if ( "left" in obj ) {
			this.offset.click.left = obj.left + this.margins.left;
		}
		if ( "right" in obj ) {
			this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
		}
		if ( "top" in obj ) {
			this.offset.click.top = obj.top + this.margins.top;
		}
		if ( "bottom" in obj ) {
			this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
		}
	},

	_isRootNode: function( element ) {
		return ( /(html|body)/i ).test( element.tagName ) || element === this.document[ 0 ];
	},

	_getParentOffset: function() {

		//Get the offsetParent and cache its position
		var po = this.offsetParent.offset(),
			document = this.document[ 0 ];

		// This is a special case where we need to modify a offset calculated on start, since the
		// following happened:
		// 1. The position of the helper is absolute, so it's position is calculated based on the
		// next positioned parent
		// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
		// the document, which means that the scroll is included in the initial calculation of the
		// offset of the parent, and never recalculated upon drag
		if ( this.cssPosition === "absolute" && this.scrollParent[ 0 ] !== document &&
				$.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) {
			po.left += this.scrollParent.scrollLeft();
			po.top += this.scrollParent.scrollTop();
		}

		if ( this._isRootNode( this.offsetParent[ 0 ] ) ) {
			po = { top: 0, left: 0 };
		}

		return {
			top: po.top + ( parseInt( this.offsetParent.css( "borderTopWidth" ), 10 ) || 0 ),
			left: po.left + ( parseInt( this.offsetParent.css( "borderLeftWidth" ), 10 ) || 0 )
		};

	},

	_getRelativeOffset: function() {
		if ( this.cssPosition !== "relative" ) {
			return { top: 0, left: 0 };
		}

		var p = this.element.position(),
			scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );

		return {
			top: p.top - ( parseInt( this.helper.css( "top" ), 10 ) || 0 ) +
				( !scrollIsRootNode ? this.scrollParent.scrollTop() : 0 ),
			left: p.left - ( parseInt( this.helper.css( "left" ), 10 ) || 0 ) +
				( !scrollIsRootNode ? this.scrollParent.scrollLeft() : 0 )
		};

	},

	_cacheMargins: function() {
		this.margins = {
			left: ( parseInt( this.element.css( "marginLeft" ), 10 ) || 0 ),
			top: ( parseInt( this.element.css( "marginTop" ), 10 ) || 0 ),
			right: ( parseInt( this.element.css( "marginRight" ), 10 ) || 0 ),
			bottom: ( parseInt( this.element.css( "marginBottom" ), 10 ) || 0 )
		};
	},

	_cacheHelperProportions: function() {
		this.helperProportions = {
			width: this.helper.outerWidth(),
			height: this.helper.outerHeight()
		};
	},

	_setContainment: function() {

		var isUserScrollable, c, ce,
			o = this.options,
			document = this.document[ 0 ];

		this.relativeContainer = null;

		if ( !o.containment ) {
			this.containment = null;
			return;
		}

		if ( o.containment === "window" ) {
			this.containment = [
				$( window ).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
				$( window ).scrollTop() - this.offset.relative.top - this.offset.parent.top,
				$( window ).scrollLeft() + $( window ).width() -
					this.helperProportions.width - this.margins.left,
				$( window ).scrollTop() +
					( $( window ).height() || document.body.parentNode.scrollHeight ) -
					this.helperProportions.height - this.margins.top
			];
			return;
		}

		if ( o.containment === "document" ) {
			this.containment = [
				0,
				0,
				$( document ).width() - this.helperProportions.width - this.margins.left,
				( $( document ).height() || document.body.parentNode.scrollHeight ) -
					this.helperProportions.height - this.margins.top
			];
			return;
		}

		if ( o.containment.constructor === Array ) {
			this.containment = o.containment;
			return;
		}

		if ( o.containment === "parent" ) {
			o.containment = this.helper[ 0 ].parentNode;
		}

		c = $( o.containment );
		ce = c[ 0 ];

		if ( !ce ) {
			return;
		}

		isUserScrollable = /(scroll|auto)/.test( c.css( "overflow" ) );

		this.containment = [
			( parseInt( c.css( "borderLeftWidth" ), 10 ) || 0 ) +
				( parseInt( c.css( "paddingLeft" ), 10 ) || 0 ),
			( parseInt( c.css( "borderTopWidth" ), 10 ) || 0 ) +
				( parseInt( c.css( "paddingTop" ), 10 ) || 0 ),
			( isUserScrollable ? Math.max( ce.scrollWidth, ce.offsetWidth ) : ce.offsetWidth ) -
				( parseInt( c.css( "borderRightWidth" ), 10 ) || 0 ) -
				( parseInt( c.css( "paddingRight" ), 10 ) || 0 ) -
				this.helperProportions.width -
				this.margins.left -
				this.margins.right,
			( isUserScrollable ? Math.max( ce.scrollHeight, ce.offsetHeight ) : ce.offsetHeight ) -
				( parseInt( c.css( "borderBottomWidth" ), 10 ) || 0 ) -
				( parseInt( c.css( "paddingBottom" ), 10 ) || 0 ) -
				this.helperProportions.height -
				this.margins.top -
				this.margins.bottom
		];
		this.relativeContainer = c;
	},

	_convertPositionTo: function( d, pos ) {

		if ( !pos ) {
			pos = this.position;
		}

		var mod = d === "absolute" ? 1 : -1,
			scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );

		return {
			top: (

				// The absolute mouse position
				pos.top	+

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.top * mod +

				// The offsetParent's offset without borders (offset + border)
				this.offset.parent.top * mod -
				( ( this.cssPosition === "fixed" ?
					-this.offset.scroll.top :
					( scrollIsRootNode ? 0 : this.offset.scroll.top ) ) * mod )
			),
			left: (

				// The absolute mouse position
				pos.left +

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.left * mod +

				// The offsetParent's offset without borders (offset + border)
				this.offset.parent.left * mod	-
				( ( this.cssPosition === "fixed" ?
					-this.offset.scroll.left :
					( scrollIsRootNode ? 0 : this.offset.scroll.left ) ) * mod )
			)
		};

	},

	_generatePosition: function( event, constrainPosition ) {

		var containment, co, top, left,
			o = this.options,
			scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] ),
			pageX = event.pageX,
			pageY = event.pageY;

		// Cache the scroll
		if ( !scrollIsRootNode || !this.offset.scroll ) {
			this.offset.scroll = {
				top: this.scrollParent.scrollTop(),
				left: this.scrollParent.scrollLeft()
			};
		}

		/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */

		// If we are not dragging yet, we won't check for options
		if ( constrainPosition ) {
			if ( this.containment ) {
				if ( this.relativeContainer ) {
					co = this.relativeContainer.offset();
					containment = [
						this.containment[ 0 ] + co.left,
						this.containment[ 1 ] + co.top,
						this.containment[ 2 ] + co.left,
						this.containment[ 3 ] + co.top
					];
				} else {
					containment = this.containment;
				}

				if ( event.pageX - this.offset.click.left < containment[ 0 ] ) {
					pageX = containment[ 0 ] + this.offset.click.left;
				}
				if ( event.pageY - this.offset.click.top < containment[ 1 ] ) {
					pageY = containment[ 1 ] + this.offset.click.top;
				}
				if ( event.pageX - this.offset.click.left > containment[ 2 ] ) {
					pageX = containment[ 2 ] + this.offset.click.left;
				}
				if ( event.pageY - this.offset.click.top > containment[ 3 ] ) {
					pageY = containment[ 3 ] + this.offset.click.top;
				}
			}

			if ( o.grid ) {

				//Check for grid elements set to 0 to prevent divide by 0 error causing invalid
				// argument errors in IE (see ticket #6950)
				top = o.grid[ 1 ] ? this.originalPageY + Math.round( ( pageY -
					this.originalPageY ) / o.grid[ 1 ] ) * o.grid[ 1 ] : this.originalPageY;
				pageY = containment ? ( ( top - this.offset.click.top >= containment[ 1 ] ||
					top - this.offset.click.top > containment[ 3 ] ) ?
						top :
						( ( top - this.offset.click.top >= containment[ 1 ] ) ?
							top - o.grid[ 1 ] : top + o.grid[ 1 ] ) ) : top;

				left = o.grid[ 0 ] ? this.originalPageX +
					Math.round( ( pageX - this.originalPageX ) / o.grid[ 0 ] ) * o.grid[ 0 ] :
					this.originalPageX;
				pageX = containment ? ( ( left - this.offset.click.left >= containment[ 0 ] ||
					left - this.offset.click.left > containment[ 2 ] ) ?
						left :
						( ( left - this.offset.click.left >= containment[ 0 ] ) ?
							left - o.grid[ 0 ] : left + o.grid[ 0 ] ) ) : left;
			}

			if ( o.axis === "y" ) {
				pageX = this.originalPageX;
			}

			if ( o.axis === "x" ) {
				pageY = this.originalPageY;
			}
		}

		return {
			top: (

				// The absolute mouse position
				pageY -

				// Click offset (relative to the element)
				this.offset.click.top -

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.top -

				// The offsetParent's offset without borders (offset + border)
				this.offset.parent.top +
				( this.cssPosition === "fixed" ?
					-this.offset.scroll.top :
					( scrollIsRootNode ? 0 : this.offset.scroll.top ) )
			),
			left: (

				// The absolute mouse position
				pageX -

				// Click offset (relative to the element)
				this.offset.click.left -

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.left -

				// The offsetParent's offset without borders (offset + border)
				this.offset.parent.left +
				( this.cssPosition === "fixed" ?
					-this.offset.scroll.left :
					( scrollIsRootNode ? 0 : this.offset.scroll.left ) )
			)
		};

	},

	_clear: function() {
		this._removeClass( this.helper, "ui-draggable-dragging" );
		if ( this.helper[ 0 ] !== this.element[ 0 ] && !this.cancelHelperRemoval ) {
			this.helper.remove();
		}
		this.helper = null;
		this.cancelHelperRemoval = false;
		if ( this.destroyOnClear ) {
			this.destroy();
		}
	},

	// From now on bulk stuff - mainly helpers

	_trigger: function( type, event, ui ) {
		ui = ui || this._uiHash();
		$.ui.plugin.call( this, type, [ event, ui, this ], true );

		// Absolute position and offset (see #6884 ) have to be recalculated after plugins
		if ( /^(drag|start|stop)/.test( type ) ) {
			this.positionAbs = this._convertPositionTo( "absolute" );
			ui.offset = this.positionAbs;
		}
		return $.Widget.prototype._trigger.call( this, type, event, ui );
	},

	plugins: {},

	_uiHash: function() {
		return {
			helper: this.helper,
			position: this.position,
			originalPosition: this.originalPosition,
			offset: this.positionAbs
		};
	}

} );

$.ui.plugin.add( "draggable", "connectToSortable", {
	start: function( event, ui, draggable ) {
		var uiSortable = $.extend( {}, ui, {
			item: draggable.element
		} );

		draggable.sortables = [];
		$( draggable.options.connectToSortable ).each( function() {
			var sortable = $( this ).sortable( "instance" );

			if ( sortable && !sortable.options.disabled ) {
				draggable.sortables.push( sortable );

				// RefreshPositions is called at drag start to refresh the containerCache
				// which is used in drag. This ensures it's initialized and synchronized
				// with any changes that might have happened on the page since initialization.
				sortable.refreshPositions();
				sortable._trigger( "activate", event, uiSortable );
			}
		} );
	},
	stop: function( event, ui, draggable ) {
		var uiSortable = $.extend( {}, ui, {
			item: draggable.element
		} );

		draggable.cancelHelperRemoval = false;

		$.each( draggable.sortables, function() {
			var sortable = this;

			if ( sortable.isOver ) {
				sortable.isOver = 0;

				// Allow this sortable to handle removing the helper
				draggable.cancelHelperRemoval = true;
				sortable.cancelHelperRemoval = false;

				// Use _storedCSS To restore properties in the sortable,
				// as this also handles revert (#9675) since the draggable
				// may have modified them in unexpected ways (#8809)
				sortable._storedCSS = {
					position: sortable.placeholder.css( "position" ),
					top: sortable.placeholder.css( "top" ),
					left: sortable.placeholder.css( "left" )
				};

				sortable._mouseStop( event );

				// Once drag has ended, the sortable should return to using
				// its original helper, not the shared helper from draggable
				sortable.options.helper = sortable.options._helper;
			} else {

				// Prevent this Sortable from removing the helper.
				// However, don't set the draggable to remove the helper
				// either as another connected Sortable may yet handle the removal.
				sortable.cancelHelperRemoval = true;

				sortable._trigger( "deactivate", event, uiSortable );
			}
		} );
	},
	drag: function( event, ui, draggable ) {
		$.each( draggable.sortables, function() {
			var innermostIntersecting = false,
				sortable = this;

			// Copy over variables that sortable's _intersectsWith uses
			sortable.positionAbs = draggable.positionAbs;
			sortable.helperProportions = draggable.helperProportions;
			sortable.offset.click = draggable.offset.click;

			if ( sortable._intersectsWith( sortable.containerCache ) ) {
				innermostIntersecting = true;

				$.each( draggable.sortables, function() {

					// Copy over variables that sortable's _intersectsWith uses
					this.positionAbs = draggable.positionAbs;
					this.helperProportions = draggable.helperProportions;
					this.offset.click = draggable.offset.click;

					if ( this !== sortable &&
							this._intersectsWith( this.containerCache ) &&
							$.contains( sortable.element[ 0 ], this.element[ 0 ] ) ) {
						innermostIntersecting = false;
					}

					return innermostIntersecting;
				} );
			}

			if ( innermostIntersecting ) {

				// If it intersects, we use a little isOver variable and set it once,
				// so that the move-in stuff gets fired only once.
				if ( !sortable.isOver ) {
					sortable.isOver = 1;

					// Store draggable's parent in case we need to reappend to it later.
					draggable._parent = ui.helper.parent();

					sortable.currentItem = ui.helper
						.appendTo( sortable.element )
						.data( "ui-sortable-item", true );

					// Store helper option to later restore it
					sortable.options._helper = sortable.options.helper;

					sortable.options.helper = function() {
						return ui.helper[ 0 ];
					};

					// Fire the start events of the sortable with our passed browser event,
					// and our own helper (so it doesn't create a new one)
					event.target = sortable.currentItem[ 0 ];
					sortable._mouseCapture( event, true );
					sortable._mouseStart( event, true, true );

					// Because the browser event is way off the new appended portlet,
					// modify necessary variables to reflect the changes
					sortable.offset.click.top = draggable.offset.click.top;
					sortable.offset.click.left = draggable.offset.click.left;
					sortable.offset.parent.left -= draggable.offset.parent.left -
						sortable.offset.parent.left;
					sortable.offset.parent.top -= draggable.offset.parent.top -
						sortable.offset.parent.top;

					draggable._trigger( "toSortable", event );

					// Inform draggable that the helper is in a valid drop zone,
					// used solely in the revert option to handle "valid/invalid".
					draggable.dropped = sortable.element;

					// Need to refreshPositions of all sortables in the case that
					// adding to one sortable changes the location of the other sortables (#9675)
					$.each( draggable.sortables, function() {
						this.refreshPositions();
					} );

					// Hack so receive/update callbacks work (mostly)
					draggable.currentItem = draggable.element;
					sortable.fromOutside = draggable;
				}

				if ( sortable.currentItem ) {
					sortable._mouseDrag( event );

					// Copy the sortable's position because the draggable's can potentially reflect
					// a relative position, while sortable is always absolute, which the dragged
					// element has now become. (#8809)
					ui.position = sortable.position;
				}
			} else {

				// If it doesn't intersect with the sortable, and it intersected before,
				// we fake the drag stop of the sortable, but make sure it doesn't remove
				// the helper by using cancelHelperRemoval.
				if ( sortable.isOver ) {

					sortable.isOver = 0;
					sortable.cancelHelperRemoval = true;

					// Calling sortable's mouseStop would trigger a revert,
					// so revert must be temporarily false until after mouseStop is called.
					sortable.options._revert = sortable.options.revert;
					sortable.options.revert = false;

					sortable._trigger( "out", event, sortable._uiHash( sortable ) );
					sortable._mouseStop( event, true );

					// Restore sortable behaviors that were modfied
					// when the draggable entered the sortable area (#9481)
					sortable.options.revert = sortable.options._revert;
					sortable.options.helper = sortable.options._helper;

					if ( sortable.placeholder ) {
						sortable.placeholder.remove();
					}

					// Restore and recalculate the draggable's offset considering the sortable
					// may have modified them in unexpected ways. (#8809, #10669)
					ui.helper.appendTo( draggable._parent );
					draggable._refreshOffsets( event );
					ui.position = draggable._generatePosition( event, true );

					draggable._trigger( "fromSortable", event );

					// Inform draggable that the helper is no longer in a valid drop zone
					draggable.dropped = false;

					// Need to refreshPositions of all sortables just in case removing
					// from one sortable changes the location of other sortables (#9675)
					$.each( draggable.sortables, function() {
						this.refreshPositions();
					} );
				}
			}
		} );
	}
} );

$.ui.plugin.add( "draggable", "cursor", {
	start: function( event, ui, instance ) {
		var t = $( "body" ),
			o = instance.options;

		if ( t.css( "cursor" ) ) {
			o._cursor = t.css( "cursor" );
		}
		t.css( "cursor", o.cursor );
	},
	stop: function( event, ui, instance ) {
		var o = instance.options;
		if ( o._cursor ) {
			$( "body" ).css( "cursor", o._cursor );
		}
	}
} );

$.ui.plugin.add( "draggable", "opacity", {
	start: function( event, ui, instance ) {
		var t = $( ui.helper ),
			o = instance.options;
		if ( t.css( "opacity" ) ) {
			o._opacity = t.css( "opacity" );
		}
		t.css( "opacity", o.opacity );
	},
	stop: function( event, ui, instance ) {
		var o = instance.options;
		if ( o._opacity ) {
			$( ui.helper ).css( "opacity", o._opacity );
		}
	}
} );

$.ui.plugin.add( "draggable", "scroll", {
	start: function( event, ui, i ) {
		if ( !i.scrollParentNotHidden ) {
			i.scrollParentNotHidden = i.helper.scrollParent( false );
		}

		if ( i.scrollParentNotHidden[ 0 ] !== i.document[ 0 ] &&
				i.scrollParentNotHidden[ 0 ].tagName !== "HTML" ) {
			i.overflowOffset = i.scrollParentNotHidden.offset();
		}
	},
	drag: function( event, ui, i  ) {

		var o = i.options,
			scrolled = false,
			scrollParent = i.scrollParentNotHidden[ 0 ],
			document = i.document[ 0 ];

		if ( scrollParent !== document && scrollParent.tagName !== "HTML" ) {
			if ( !o.axis || o.axis !== "x" ) {
				if ( ( i.overflowOffset.top + scrollParent.offsetHeight ) - event.pageY <
						o.scrollSensitivity ) {
					scrollParent.scrollTop = scrolled = scrollParent.scrollTop + o.scrollSpeed;
				} else if ( event.pageY - i.overflowOffset.top < o.scrollSensitivity ) {
					scrollParent.scrollTop = scrolled = scrollParent.scrollTop - o.scrollSpeed;
				}
			}

			if ( !o.axis || o.axis !== "y" ) {
				if ( ( i.overflowOffset.left + scrollParent.offsetWidth ) - event.pageX <
						o.scrollSensitivity ) {
					scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft + o.scrollSpeed;
				} else if ( event.pageX - i.overflowOffset.left < o.scrollSensitivity ) {
					scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft - o.scrollSpeed;
				}
			}

		} else {

			if ( !o.axis || o.axis !== "x" ) {
				if ( event.pageY - $( document ).scrollTop() < o.scrollSensitivity ) {
					scrolled = $( document ).scrollTop( $( document ).scrollTop() - o.scrollSpeed );
				} else if ( $( window ).height() - ( event.pageY - $( document ).scrollTop() ) <
						o.scrollSensitivity ) {
					scrolled = $( document ).scrollTop( $( document ).scrollTop() + o.scrollSpeed );
				}
			}

			if ( !o.axis || o.axis !== "y" ) {
				if ( event.pageX - $( document ).scrollLeft() < o.scrollSensitivity ) {
					scrolled = $( document ).scrollLeft(
						$( document ).scrollLeft() - o.scrollSpeed
					);
				} else if ( $( window ).width() - ( event.pageX - $( document ).scrollLeft() ) <
						o.scrollSensitivity ) {
					scrolled = $( document ).scrollLeft(
						$( document ).scrollLeft() + o.scrollSpeed
					);
				}
			}

		}

		if ( scrolled !== false && $.ui.ddmanager && !o.dropBehaviour ) {
			$.ui.ddmanager.prepareOffsets( i, event );
		}

	}
} );

$.ui.plugin.add( "draggable", "snap", {
	start: function( event, ui, i ) {

		var o = i.options;

		i.snapElements = [];

		$( o.snap.constructor !== String ? ( o.snap.items || ":data(ui-draggable)" ) : o.snap )
			.each( function() {
				var $t = $( this ),
					$o = $t.offset();
				if ( this !== i.element[ 0 ] ) {
					i.snapElements.push( {
						item: this,
						width: $t.outerWidth(), height: $t.outerHeight(),
						top: $o.top, left: $o.left
					} );
				}
			} );

	},
	drag: function( event, ui, inst ) {

		var ts, bs, ls, rs, l, r, t, b, i, first,
			o = inst.options,
			d = o.snapTolerance,
			x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,
			y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;

		for ( i = inst.snapElements.length - 1; i >= 0; i-- ) {

			l = inst.snapElements[ i ].left - inst.margins.left;
			r = l + inst.snapElements[ i ].width;
			t = inst.snapElements[ i ].top - inst.margins.top;
			b = t + inst.snapElements[ i ].height;

			if ( x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d ||
					!$.contains( inst.snapElements[ i ].item.ownerDocument,
					inst.snapElements[ i ].item ) ) {
				if ( inst.snapElements[ i ].snapping ) {
					( inst.options.snap.release &&
						inst.options.snap.release.call(
							inst.element,
							event,
							$.extend( inst._uiHash(), { snapItem: inst.snapElements[ i ].item } )
						) );
				}
				inst.snapElements[ i ].snapping = false;
				continue;
			}

			if ( o.snapMode !== "inner" ) {
				ts = Math.abs( t - y2 ) <= d;
				bs = Math.abs( b - y1 ) <= d;
				ls = Math.abs( l - x2 ) <= d;
				rs = Math.abs( r - x1 ) <= d;
				if ( ts ) {
					ui.position.top = inst._convertPositionTo( "relative", {
						top: t - inst.helperProportions.height,
						left: 0
					} ).top;
				}
				if ( bs ) {
					ui.position.top = inst._convertPositionTo( "relative", {
						top: b,
						left: 0
					} ).top;
				}
				if ( ls ) {
					ui.position.left = inst._convertPositionTo( "relative", {
						top: 0,
						left: l - inst.helperProportions.width
					} ).left;
				}
				if ( rs ) {
					ui.position.left = inst._convertPositionTo( "relative", {
						top: 0,
						left: r
					} ).left;
				}
			}

			first = ( ts || bs || ls || rs );

			if ( o.snapMode !== "outer" ) {
				ts = Math.abs( t - y1 ) <= d;
				bs = Math.abs( b - y2 ) <= d;
				ls = Math.abs( l - x1 ) <= d;
				rs = Math.abs( r - x2 ) <= d;
				if ( ts ) {
					ui.position.top = inst._convertPositionTo( "relative", {
						top: t,
						left: 0
					} ).top;
				}
				if ( bs ) {
					ui.position.top = inst._convertPositionTo( "relative", {
						top: b - inst.helperProportions.height,
						left: 0
					} ).top;
				}
				if ( ls ) {
					ui.position.left = inst._convertPositionTo( "relative", {
						top: 0,
						left: l
					} ).left;
				}
				if ( rs ) {
					ui.position.left = inst._convertPositionTo( "relative", {
						top: 0,
						left: r - inst.helperProportions.width
					} ).left;
				}
			}

			if ( !inst.snapElements[ i ].snapping && ( ts || bs || ls || rs || first ) ) {
				( inst.options.snap.snap &&
					inst.options.snap.snap.call(
						inst.element,
						event,
						$.extend( inst._uiHash(), {
							snapItem: inst.snapElements[ i ].item
						} ) ) );
			}
			inst.snapElements[ i ].snapping = ( ts || bs || ls || rs || first );

		}

	}
} );

$.ui.plugin.add( "draggable", "stack", {
	start: function( event, ui, instance ) {
		var min,
			o = instance.options,
			group = $.makeArray( $( o.stack ) ).sort( function( a, b ) {
				return ( parseInt( $( a ).css( "zIndex" ), 10 ) || 0 ) -
					( parseInt( $( b ).css( "zIndex" ), 10 ) || 0 );
			} );

		if ( !group.length ) { return; }

		min = parseInt( $( group[ 0 ] ).css( "zIndex" ), 10 ) || 0;
		$( group ).each( function( i ) {
			$( this ).css( "zIndex", min + i );
		} );
		this.css( "zIndex", ( min + group.length ) );
	}
} );

$.ui.plugin.add( "draggable", "zIndex", {
	start: function( event, ui, instance ) {
		var t = $( ui.helper ),
			o = instance.options;

		if ( t.css( "zIndex" ) ) {
			o._zIndex = t.css( "zIndex" );
		}
		t.css( "zIndex", o.zIndex );
	},
	stop: function( event, ui, instance ) {
		var o = instance.options;

		if ( o._zIndex ) {
			$( ui.helper ).css( "zIndex", o._zIndex );
		}
	}
} );

return $.ui.draggable;

} ) );


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Resizable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Resizable
//>>group: Interactions
//>>description: Enables resize functionality for any element.
//>>docs: http://api.jqueryui.com/resizable/
//>>demos: http://jqueryui.com/resizable/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/resizable.css
//>>css.theme: ../../themes/base/theme.css

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(0),
			__webpack_require__(18),
			__webpack_require__(53),
			__webpack_require__(16),
			__webpack_require__(1),
			__webpack_require__(4)
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

$.widget( "ui.resizable", $.ui.mouse, {
	version: "1.12.1",
	widgetEventPrefix: "resize",
	options: {
		alsoResize: false,
		animate: false,
		animateDuration: "slow",
		animateEasing: "swing",
		aspectRatio: false,
		autoHide: false,
		classes: {
			"ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
		},
		containment: false,
		ghost: false,
		grid: false,
		handles: "e,s,se",
		helper: false,
		maxHeight: null,
		maxWidth: null,
		minHeight: 10,
		minWidth: 10,

		// See #7960
		zIndex: 90,

		// Callbacks
		resize: null,
		start: null,
		stop: null
	},

	_num: function( value ) {
		return parseFloat( value ) || 0;
	},

	_isNumber: function( value ) {
		return !isNaN( parseFloat( value ) );
	},

	_hasScroll: function( el, a ) {

		if ( $( el ).css( "overflow" ) === "hidden" ) {
			return false;
		}

		var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
			has = false;

		if ( el[ scroll ] > 0 ) {
			return true;
		}

		// TODO: determine which cases actually cause this to happen
		// if the element doesn't have the scroll set, see if it's possible to
		// set the scroll
		el[ scroll ] = 1;
		has = ( el[ scroll ] > 0 );
		el[ scroll ] = 0;
		return has;
	},

	_create: function() {

		var margins,
			o = this.options,
			that = this;
		this._addClass( "ui-resizable" );

		$.extend( this, {
			_aspectRatio: !!( o.aspectRatio ),
			aspectRatio: o.aspectRatio,
			originalElement: this.element,
			_proportionallyResizeElements: [],
			_helper: o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null
		} );

		// Wrap the element if it cannot hold child nodes
		if ( this.element[ 0 ].nodeName.match( /^(canvas|textarea|input|select|button|img)$/i ) ) {

			this.element.wrap(
				$( "<div class='ui-wrapper' style='overflow: hidden;'></div>" ).css( {
					position: this.element.css( "position" ),
					width: this.element.outerWidth(),
					height: this.element.outerHeight(),
					top: this.element.css( "top" ),
					left: this.element.css( "left" )
				} )
			);

			this.element = this.element.parent().data(
				"ui-resizable", this.element.resizable( "instance" )
			);

			this.elementIsWrapper = true;

			margins = {
				marginTop: this.originalElement.css( "marginTop" ),
				marginRight: this.originalElement.css( "marginRight" ),
				marginBottom: this.originalElement.css( "marginBottom" ),
				marginLeft: this.originalElement.css( "marginLeft" )
			};

			this.element.css( margins );
			this.originalElement.css( "margin", 0 );

			// support: Safari
			// Prevent Safari textarea resize
			this.originalResizeStyle = this.originalElement.css( "resize" );
			this.originalElement.css( "resize", "none" );

			this._proportionallyResizeElements.push( this.originalElement.css( {
				position: "static",
				zoom: 1,
				display: "block"
			} ) );

			// Support: IE9
			// avoid IE jump (hard set the margin)
			this.originalElement.css( margins );

			this._proportionallyResize();
		}

		this._setupHandles();

		if ( o.autoHide ) {
			$( this.element )
				.on( "mouseenter", function() {
					if ( o.disabled ) {
						return;
					}
					that._removeClass( "ui-resizable-autohide" );
					that._handles.show();
				} )
				.on( "mouseleave", function() {
					if ( o.disabled ) {
						return;
					}
					if ( !that.resizing ) {
						that._addClass( "ui-resizable-autohide" );
						that._handles.hide();
					}
				} );
		}

		this._mouseInit();
	},

	_destroy: function() {

		this._mouseDestroy();

		var wrapper,
			_destroy = function( exp ) {
				$( exp )
					.removeData( "resizable" )
					.removeData( "ui-resizable" )
					.off( ".resizable" )
					.find( ".ui-resizable-handle" )
						.remove();
			};

		// TODO: Unwrap at same DOM position
		if ( this.elementIsWrapper ) {
			_destroy( this.element );
			wrapper = this.element;
			this.originalElement.css( {
				position: wrapper.css( "position" ),
				width: wrapper.outerWidth(),
				height: wrapper.outerHeight(),
				top: wrapper.css( "top" ),
				left: wrapper.css( "left" )
			} ).insertAfter( wrapper );
			wrapper.remove();
		}

		this.originalElement.css( "resize", this.originalResizeStyle );
		_destroy( this.originalElement );

		return this;
	},

	_setOption: function( key, value ) {
		this._super( key, value );

		switch ( key ) {
		case "handles":
			this._removeHandles();
			this._setupHandles();
			break;
		default:
			break;
		}
	},

	_setupHandles: function() {
		var o = this.options, handle, i, n, hname, axis, that = this;
		this.handles = o.handles ||
			( !$( ".ui-resizable-handle", this.element ).length ?
				"e,s,se" : {
					n: ".ui-resizable-n",
					e: ".ui-resizable-e",
					s: ".ui-resizable-s",
					w: ".ui-resizable-w",
					se: ".ui-resizable-se",
					sw: ".ui-resizable-sw",
					ne: ".ui-resizable-ne",
					nw: ".ui-resizable-nw"
				} );

		this._handles = $();
		if ( this.handles.constructor === String ) {

			if ( this.handles === "all" ) {
				this.handles = "n,e,s,w,se,sw,ne,nw";
			}

			n = this.handles.split( "," );
			this.handles = {};

			for ( i = 0; i < n.length; i++ ) {

				handle = $.trim( n[ i ] );
				hname = "ui-resizable-" + handle;
				axis = $( "<div>" );
				this._addClass( axis, "ui-resizable-handle " + hname );

				axis.css( { zIndex: o.zIndex } );

				this.handles[ handle ] = ".ui-resizable-" + handle;
				this.element.append( axis );
			}

		}

		this._renderAxis = function( target ) {

			var i, axis, padPos, padWrapper;

			target = target || this.element;

			for ( i in this.handles ) {

				if ( this.handles[ i ].constructor === String ) {
					this.handles[ i ] = this.element.children( this.handles[ i ] ).first().show();
				} else if ( this.handles[ i ].jquery || this.handles[ i ].nodeType ) {
					this.handles[ i ] = $( this.handles[ i ] );
					this._on( this.handles[ i ], { "mousedown": that._mouseDown } );
				}

				if ( this.elementIsWrapper &&
						this.originalElement[ 0 ]
							.nodeName
							.match( /^(textarea|input|select|button)$/i ) ) {
					axis = $( this.handles[ i ], this.element );

					padWrapper = /sw|ne|nw|se|n|s/.test( i ) ?
						axis.outerHeight() :
						axis.outerWidth();

					padPos = [ "padding",
						/ne|nw|n/.test( i ) ? "Top" :
						/se|sw|s/.test( i ) ? "Bottom" :
						/^e$/.test( i ) ? "Right" : "Left" ].join( "" );

					target.css( padPos, padWrapper );

					this._proportionallyResize();
				}

				this._handles = this._handles.add( this.handles[ i ] );
			}
		};

		// TODO: make renderAxis a prototype function
		this._renderAxis( this.element );

		this._handles = this._handles.add( this.element.find( ".ui-resizable-handle" ) );
		this._handles.disableSelection();

		this._handles.on( "mouseover", function() {
			if ( !that.resizing ) {
				if ( this.className ) {
					axis = this.className.match( /ui-resizable-(se|sw|ne|nw|n|e|s|w)/i );
				}
				that.axis = axis && axis[ 1 ] ? axis[ 1 ] : "se";
			}
		} );

		if ( o.autoHide ) {
			this._handles.hide();
			this._addClass( "ui-resizable-autohide" );
		}
	},

	_removeHandles: function() {
		this._handles.remove();
	},

	_mouseCapture: function( event ) {
		var i, handle,
			capture = false;

		for ( i in this.handles ) {
			handle = $( this.handles[ i ] )[ 0 ];
			if ( handle === event.target || $.contains( handle, event.target ) ) {
				capture = true;
			}
		}

		return !this.options.disabled && capture;
	},

	_mouseStart: function( event ) {

		var curleft, curtop, cursor,
			o = this.options,
			el = this.element;

		this.resizing = true;

		this._renderProxy();

		curleft = this._num( this.helper.css( "left" ) );
		curtop = this._num( this.helper.css( "top" ) );

		if ( o.containment ) {
			curleft += $( o.containment ).scrollLeft() || 0;
			curtop += $( o.containment ).scrollTop() || 0;
		}

		this.offset = this.helper.offset();
		this.position = { left: curleft, top: curtop };

		this.size = this._helper ? {
				width: this.helper.width(),
				height: this.helper.height()
			} : {
				width: el.width(),
				height: el.height()
			};

		this.originalSize = this._helper ? {
				width: el.outerWidth(),
				height: el.outerHeight()
			} : {
				width: el.width(),
				height: el.height()
			};

		this.sizeDiff = {
			width: el.outerWidth() - el.width(),
			height: el.outerHeight() - el.height()
		};

		this.originalPosition = { left: curleft, top: curtop };
		this.originalMousePosition = { left: event.pageX, top: event.pageY };

		this.aspectRatio = ( typeof o.aspectRatio === "number" ) ?
			o.aspectRatio :
			( ( this.originalSize.width / this.originalSize.height ) || 1 );

		cursor = $( ".ui-resizable-" + this.axis ).css( "cursor" );
		$( "body" ).css( "cursor", cursor === "auto" ? this.axis + "-resize" : cursor );

		this._addClass( "ui-resizable-resizing" );
		this._propagate( "start", event );
		return true;
	},

	_mouseDrag: function( event ) {

		var data, props,
			smp = this.originalMousePosition,
			a = this.axis,
			dx = ( event.pageX - smp.left ) || 0,
			dy = ( event.pageY - smp.top ) || 0,
			trigger = this._change[ a ];

		this._updatePrevProperties();

		if ( !trigger ) {
			return false;
		}

		data = trigger.apply( this, [ event, dx, dy ] );

		this._updateVirtualBoundaries( event.shiftKey );
		if ( this._aspectRatio || event.shiftKey ) {
			data = this._updateRatio( data, event );
		}

		data = this._respectSize( data, event );

		this._updateCache( data );

		this._propagate( "resize", event );

		props = this._applyChanges();

		if ( !this._helper && this._proportionallyResizeElements.length ) {
			this._proportionallyResize();
		}

		if ( !$.isEmptyObject( props ) ) {
			this._updatePrevProperties();
			this._trigger( "resize", event, this.ui() );
			this._applyChanges();
		}

		return false;
	},

	_mouseStop: function( event ) {

		this.resizing = false;
		var pr, ista, soffseth, soffsetw, s, left, top,
			o = this.options, that = this;

		if ( this._helper ) {

			pr = this._proportionallyResizeElements;
			ista = pr.length && ( /textarea/i ).test( pr[ 0 ].nodeName );
			soffseth = ista && this._hasScroll( pr[ 0 ], "left" ) ? 0 : that.sizeDiff.height;
			soffsetw = ista ? 0 : that.sizeDiff.width;

			s = {
				width: ( that.helper.width()  - soffsetw ),
				height: ( that.helper.height() - soffseth )
			};
			left = ( parseFloat( that.element.css( "left" ) ) +
				( that.position.left - that.originalPosition.left ) ) || null;
			top = ( parseFloat( that.element.css( "top" ) ) +
				( that.position.top - that.originalPosition.top ) ) || null;

			if ( !o.animate ) {
				this.element.css( $.extend( s, { top: top, left: left } ) );
			}

			that.helper.height( that.size.height );
			that.helper.width( that.size.width );

			if ( this._helper && !o.animate ) {
				this._proportionallyResize();
			}
		}

		$( "body" ).css( "cursor", "auto" );

		this._removeClass( "ui-resizable-resizing" );

		this._propagate( "stop", event );

		if ( this._helper ) {
			this.helper.remove();
		}

		return false;

	},

	_updatePrevProperties: function() {
		this.prevPosition = {
			top: this.position.top,
			left: this.position.left
		};
		this.prevSize = {
			width: this.size.width,
			height: this.size.height
		};
	},

	_applyChanges: function() {
		var props = {};

		if ( this.position.top !== this.prevPosition.top ) {
			props.top = this.position.top + "px";
		}
		if ( this.position.left !== this.prevPosition.left ) {
			props.left = this.position.left + "px";
		}
		if ( this.size.width !== this.prevSize.width ) {
			props.width = this.size.width + "px";
		}
		if ( this.size.height !== this.prevSize.height ) {
			props.height = this.size.height + "px";
		}

		this.helper.css( props );

		return props;
	},

	_updateVirtualBoundaries: function( forceAspectRatio ) {
		var pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b,
			o = this.options;

		b = {
			minWidth: this._isNumber( o.minWidth ) ? o.minWidth : 0,
			maxWidth: this._isNumber( o.maxWidth ) ? o.maxWidth : Infinity,
			minHeight: this._isNumber( o.minHeight ) ? o.minHeight : 0,
			maxHeight: this._isNumber( o.maxHeight ) ? o.maxHeight : Infinity
		};

		if ( this._aspectRatio || forceAspectRatio ) {
			pMinWidth = b.minHeight * this.aspectRatio;
			pMinHeight = b.minWidth / this.aspectRatio;
			pMaxWidth = b.maxHeight * this.aspectRatio;
			pMaxHeight = b.maxWidth / this.aspectRatio;

			if ( pMinWidth > b.minWidth ) {
				b.minWidth = pMinWidth;
			}
			if ( pMinHeight > b.minHeight ) {
				b.minHeight = pMinHeight;
			}
			if ( pMaxWidth < b.maxWidth ) {
				b.maxWidth = pMaxWidth;
			}
			if ( pMaxHeight < b.maxHeight ) {
				b.maxHeight = pMaxHeight;
			}
		}
		this._vBoundaries = b;
	},

	_updateCache: function( data ) {
		this.offset = this.helper.offset();
		if ( this._isNumber( data.left ) ) {
			this.position.left = data.left;
		}
		if ( this._isNumber( data.top ) ) {
			this.position.top = data.top;
		}
		if ( this._isNumber( data.height ) ) {
			this.size.height = data.height;
		}
		if ( this._isNumber( data.width ) ) {
			this.size.width = data.width;
		}
	},

	_updateRatio: function( data ) {

		var cpos = this.position,
			csize = this.size,
			a = this.axis;

		if ( this._isNumber( data.height ) ) {
			data.width = ( data.height * this.aspectRatio );
		} else if ( this._isNumber( data.width ) ) {
			data.height = ( data.width / this.aspectRatio );
		}

		if ( a === "sw" ) {
			data.left = cpos.left + ( csize.width - data.width );
			data.top = null;
		}
		if ( a === "nw" ) {
			data.top = cpos.top + ( csize.height - data.height );
			data.left = cpos.left + ( csize.width - data.width );
		}

		return data;
	},

	_respectSize: function( data ) {

		var o = this._vBoundaries,
			a = this.axis,
			ismaxw = this._isNumber( data.width ) && o.maxWidth && ( o.maxWidth < data.width ),
			ismaxh = this._isNumber( data.height ) && o.maxHeight && ( o.maxHeight < data.height ),
			isminw = this._isNumber( data.width ) && o.minWidth && ( o.minWidth > data.width ),
			isminh = this._isNumber( data.height ) && o.minHeight && ( o.minHeight > data.height ),
			dw = this.originalPosition.left + this.originalSize.width,
			dh = this.originalPosition.top + this.originalSize.height,
			cw = /sw|nw|w/.test( a ), ch = /nw|ne|n/.test( a );
		if ( isminw ) {
			data.width = o.minWidth;
		}
		if ( isminh ) {
			data.height = o.minHeight;
		}
		if ( ismaxw ) {
			data.width = o.maxWidth;
		}
		if ( ismaxh ) {
			data.height = o.maxHeight;
		}

		if ( isminw && cw ) {
			data.left = dw - o.minWidth;
		}
		if ( ismaxw && cw ) {
			data.left = dw - o.maxWidth;
		}
		if ( isminh && ch ) {
			data.top = dh - o.minHeight;
		}
		if ( ismaxh && ch ) {
			data.top = dh - o.maxHeight;
		}

		// Fixing jump error on top/left - bug #2330
		if ( !data.width && !data.height && !data.left && data.top ) {
			data.top = null;
		} else if ( !data.width && !data.height && !data.top && data.left ) {
			data.left = null;
		}

		return data;
	},

	_getPaddingPlusBorderDimensions: function( element ) {
		var i = 0,
			widths = [],
			borders = [
				element.css( "borderTopWidth" ),
				element.css( "borderRightWidth" ),
				element.css( "borderBottomWidth" ),
				element.css( "borderLeftWidth" )
			],
			paddings = [
				element.css( "paddingTop" ),
				element.css( "paddingRight" ),
				element.css( "paddingBottom" ),
				element.css( "paddingLeft" )
			];

		for ( ; i < 4; i++ ) {
			widths[ i ] = ( parseFloat( borders[ i ] ) || 0 );
			widths[ i ] += ( parseFloat( paddings[ i ] ) || 0 );
		}

		return {
			height: widths[ 0 ] + widths[ 2 ],
			width: widths[ 1 ] + widths[ 3 ]
		};
	},

	_proportionallyResize: function() {

		if ( !this._proportionallyResizeElements.length ) {
			return;
		}

		var prel,
			i = 0,
			element = this.helper || this.element;

		for ( ; i < this._proportionallyResizeElements.length; i++ ) {

			prel = this._proportionallyResizeElements[ i ];

			// TODO: Seems like a bug to cache this.outerDimensions
			// considering that we are in a loop.
			if ( !this.outerDimensions ) {
				this.outerDimensions = this._getPaddingPlusBorderDimensions( prel );
			}

			prel.css( {
				height: ( element.height() - this.outerDimensions.height ) || 0,
				width: ( element.width() - this.outerDimensions.width ) || 0
			} );

		}

	},

	_renderProxy: function() {

		var el = this.element, o = this.options;
		this.elementOffset = el.offset();

		if ( this._helper ) {

			this.helper = this.helper || $( "<div style='overflow:hidden;'></div>" );

			this._addClass( this.helper, this._helper );
			this.helper.css( {
				width: this.element.outerWidth(),
				height: this.element.outerHeight(),
				position: "absolute",
				left: this.elementOffset.left + "px",
				top: this.elementOffset.top + "px",
				zIndex: ++o.zIndex //TODO: Don't modify option
			} );

			this.helper
				.appendTo( "body" )
				.disableSelection();

		} else {
			this.helper = this.element;
		}

	},

	_change: {
		e: function( event, dx ) {
			return { width: this.originalSize.width + dx };
		},
		w: function( event, dx ) {
			var cs = this.originalSize, sp = this.originalPosition;
			return { left: sp.left + dx, width: cs.width - dx };
		},
		n: function( event, dx, dy ) {
			var cs = this.originalSize, sp = this.originalPosition;
			return { top: sp.top + dy, height: cs.height - dy };
		},
		s: function( event, dx, dy ) {
			return { height: this.originalSize.height + dy };
		},
		se: function( event, dx, dy ) {
			return $.extend( this._change.s.apply( this, arguments ),
				this._change.e.apply( this, [ event, dx, dy ] ) );
		},
		sw: function( event, dx, dy ) {
			return $.extend( this._change.s.apply( this, arguments ),
				this._change.w.apply( this, [ event, dx, dy ] ) );
		},
		ne: function( event, dx, dy ) {
			return $.extend( this._change.n.apply( this, arguments ),
				this._change.e.apply( this, [ event, dx, dy ] ) );
		},
		nw: function( event, dx, dy ) {
			return $.extend( this._change.n.apply( this, arguments ),
				this._change.w.apply( this, [ event, dx, dy ] ) );
		}
	},

	_propagate: function( n, event ) {
		$.ui.plugin.call( this, n, [ event, this.ui() ] );
		( n !== "resize" && this._trigger( n, event, this.ui() ) );
	},

	plugins: {},

	ui: function() {
		return {
			originalElement: this.originalElement,
			element: this.element,
			helper: this.helper,
			position: this.position,
			size: this.size,
			originalSize: this.originalSize,
			originalPosition: this.originalPosition
		};
	}

} );

/*
 * Resizable Extensions
 */

$.ui.plugin.add( "resizable", "animate", {

	stop: function( event ) {
		var that = $( this ).resizable( "instance" ),
			o = that.options,
			pr = that._proportionallyResizeElements,
			ista = pr.length && ( /textarea/i ).test( pr[ 0 ].nodeName ),
			soffseth = ista && that._hasScroll( pr[ 0 ], "left" ) ? 0 : that.sizeDiff.height,
			soffsetw = ista ? 0 : that.sizeDiff.width,
			style = {
				width: ( that.size.width - soffsetw ),
				height: ( that.size.height - soffseth )
			},
			left = ( parseFloat( that.element.css( "left" ) ) +
				( that.position.left - that.originalPosition.left ) ) || null,
			top = ( parseFloat( that.element.css( "top" ) ) +
				( that.position.top - that.originalPosition.top ) ) || null;

		that.element.animate(
			$.extend( style, top && left ? { top: top, left: left } : {} ), {
				duration: o.animateDuration,
				easing: o.animateEasing,
				step: function() {

					var data = {
						width: parseFloat( that.element.css( "width" ) ),
						height: parseFloat( that.element.css( "height" ) ),
						top: parseFloat( that.element.css( "top" ) ),
						left: parseFloat( that.element.css( "left" ) )
					};

					if ( pr && pr.length ) {
						$( pr[ 0 ] ).css( { width: data.width, height: data.height } );
					}

					// Propagating resize, and updating values for each animation step
					that._updateCache( data );
					that._propagate( "resize", event );

				}
			}
		);
	}

} );

$.ui.plugin.add( "resizable", "containment", {

	start: function() {
		var element, p, co, ch, cw, width, height,
			that = $( this ).resizable( "instance" ),
			o = that.options,
			el = that.element,
			oc = o.containment,
			ce = ( oc instanceof $ ) ?
				oc.get( 0 ) :
				( /parent/.test( oc ) ) ? el.parent().get( 0 ) : oc;

		if ( !ce ) {
			return;
		}

		that.containerElement = $( ce );

		if ( /document/.test( oc ) || oc === document ) {
			that.containerOffset = {
				left: 0,
				top: 0
			};
			that.containerPosition = {
				left: 0,
				top: 0
			};

			that.parentData = {
				element: $( document ),
				left: 0,
				top: 0,
				width: $( document ).width(),
				height: $( document ).height() || document.body.parentNode.scrollHeight
			};
		} else {
			element = $( ce );
			p = [];
			$( [ "Top", "Right", "Left", "Bottom" ] ).each( function( i, name ) {
				p[ i ] = that._num( element.css( "padding" + name ) );
			} );

			that.containerOffset = element.offset();
			that.containerPosition = element.position();
			that.containerSize = {
				height: ( element.innerHeight() - p[ 3 ] ),
				width: ( element.innerWidth() - p[ 1 ] )
			};

			co = that.containerOffset;
			ch = that.containerSize.height;
			cw = that.containerSize.width;
			width = ( that._hasScroll ( ce, "left" ) ? ce.scrollWidth : cw );
			height = ( that._hasScroll ( ce ) ? ce.scrollHeight : ch ) ;

			that.parentData = {
				element: ce,
				left: co.left,
				top: co.top,
				width: width,
				height: height
			};
		}
	},

	resize: function( event ) {
		var woset, hoset, isParent, isOffsetRelative,
			that = $( this ).resizable( "instance" ),
			o = that.options,
			co = that.containerOffset,
			cp = that.position,
			pRatio = that._aspectRatio || event.shiftKey,
			cop = {
				top: 0,
				left: 0
			},
			ce = that.containerElement,
			continueResize = true;

		if ( ce[ 0 ] !== document && ( /static/ ).test( ce.css( "position" ) ) ) {
			cop = co;
		}

		if ( cp.left < ( that._helper ? co.left : 0 ) ) {
			that.size.width = that.size.width +
				( that._helper ?
					( that.position.left - co.left ) :
					( that.position.left - cop.left ) );

			if ( pRatio ) {
				that.size.height = that.size.width / that.aspectRatio;
				continueResize = false;
			}
			that.position.left = o.helper ? co.left : 0;
		}

		if ( cp.top < ( that._helper ? co.top : 0 ) ) {
			that.size.height = that.size.height +
				( that._helper ?
					( that.position.top - co.top ) :
					that.position.top );

			if ( pRatio ) {
				that.size.width = that.size.height * that.aspectRatio;
				continueResize = false;
			}
			that.position.top = that._helper ? co.top : 0;
		}

		isParent = that.containerElement.get( 0 ) === that.element.parent().get( 0 );
		isOffsetRelative = /relative|absolute/.test( that.containerElement.css( "position" ) );

		if ( isParent && isOffsetRelative ) {
			that.offset.left = that.parentData.left + that.position.left;
			that.offset.top = that.parentData.top + that.position.top;
		} else {
			that.offset.left = that.element.offset().left;
			that.offset.top = that.element.offset().top;
		}

		woset = Math.abs( that.sizeDiff.width +
			( that._helper ?
				that.offset.left - cop.left :
				( that.offset.left - co.left ) ) );

		hoset = Math.abs( that.sizeDiff.height +
			( that._helper ?
				that.offset.top - cop.top :
				( that.offset.top - co.top ) ) );

		if ( woset + that.size.width >= that.parentData.width ) {
			that.size.width = that.parentData.width - woset;
			if ( pRatio ) {
				that.size.height = that.size.width / that.aspectRatio;
				continueResize = false;
			}
		}

		if ( hoset + that.size.height >= that.parentData.height ) {
			that.size.height = that.parentData.height - hoset;
			if ( pRatio ) {
				that.size.width = that.size.height * that.aspectRatio;
				continueResize = false;
			}
		}

		if ( !continueResize ) {
			that.position.left = that.prevPosition.left;
			that.position.top = that.prevPosition.top;
			that.size.width = that.prevSize.width;
			that.size.height = that.prevSize.height;
		}
	},

	stop: function() {
		var that = $( this ).resizable( "instance" ),
			o = that.options,
			co = that.containerOffset,
			cop = that.containerPosition,
			ce = that.containerElement,
			helper = $( that.helper ),
			ho = helper.offset(),
			w = helper.outerWidth() - that.sizeDiff.width,
			h = helper.outerHeight() - that.sizeDiff.height;

		if ( that._helper && !o.animate && ( /relative/ ).test( ce.css( "position" ) ) ) {
			$( this ).css( {
				left: ho.left - cop.left - co.left,
				width: w,
				height: h
			} );
		}

		if ( that._helper && !o.animate && ( /static/ ).test( ce.css( "position" ) ) ) {
			$( this ).css( {
				left: ho.left - cop.left - co.left,
				width: w,
				height: h
			} );
		}
	}
} );

$.ui.plugin.add( "resizable", "alsoResize", {

	start: function() {
		var that = $( this ).resizable( "instance" ),
			o = that.options;

		$( o.alsoResize ).each( function() {
			var el = $( this );
			el.data( "ui-resizable-alsoresize", {
				width: parseFloat( el.width() ), height: parseFloat( el.height() ),
				left: parseFloat( el.css( "left" ) ), top: parseFloat( el.css( "top" ) )
			} );
		} );
	},

	resize: function( event, ui ) {
		var that = $( this ).resizable( "instance" ),
			o = that.options,
			os = that.originalSize,
			op = that.originalPosition,
			delta = {
				height: ( that.size.height - os.height ) || 0,
				width: ( that.size.width - os.width ) || 0,
				top: ( that.position.top - op.top ) || 0,
				left: ( that.position.left - op.left ) || 0
			};

			$( o.alsoResize ).each( function() {
				var el = $( this ), start = $( this ).data( "ui-resizable-alsoresize" ), style = {},
					css = el.parents( ui.originalElement[ 0 ] ).length ?
							[ "width", "height" ] :
							[ "width", "height", "top", "left" ];

				$.each( css, function( i, prop ) {
					var sum = ( start[ prop ] || 0 ) + ( delta[ prop ] || 0 );
					if ( sum && sum >= 0 ) {
						style[ prop ] = sum || null;
					}
				} );

				el.css( style );
			} );
	},

	stop: function() {
		$( this ).removeData( "ui-resizable-alsoresize" );
	}
} );

$.ui.plugin.add( "resizable", "ghost", {

	start: function() {

		var that = $( this ).resizable( "instance" ), cs = that.size;

		that.ghost = that.originalElement.clone();
		that.ghost.css( {
			opacity: 0.25,
			display: "block",
			position: "relative",
			height: cs.height,
			width: cs.width,
			margin: 0,
			left: 0,
			top: 0
		} );

		that._addClass( that.ghost, "ui-resizable-ghost" );

		// DEPRECATED
		// TODO: remove after 1.12
		if ( $.uiBackCompat !== false && typeof that.options.ghost === "string" ) {

			// Ghost option
			that.ghost.addClass( this.options.ghost );
		}

		that.ghost.appendTo( that.helper );

	},

	resize: function() {
		var that = $( this ).resizable( "instance" );
		if ( that.ghost ) {
			that.ghost.css( {
				position: "relative",
				height: that.size.height,
				width: that.size.width
			} );
		}
	},

	stop: function() {
		var that = $( this ).resizable( "instance" );
		if ( that.ghost && that.helper ) {
			that.helper.get( 0 ).removeChild( that.ghost.get( 0 ) );
		}
	}

} );

$.ui.plugin.add( "resizable", "grid", {

	resize: function() {
		var outerDimensions,
			that = $( this ).resizable( "instance" ),
			o = that.options,
			cs = that.size,
			os = that.originalSize,
			op = that.originalPosition,
			a = that.axis,
			grid = typeof o.grid === "number" ? [ o.grid, o.grid ] : o.grid,
			gridX = ( grid[ 0 ] || 1 ),
			gridY = ( grid[ 1 ] || 1 ),
			ox = Math.round( ( cs.width - os.width ) / gridX ) * gridX,
			oy = Math.round( ( cs.height - os.height ) / gridY ) * gridY,
			newWidth = os.width + ox,
			newHeight = os.height + oy,
			isMaxWidth = o.maxWidth && ( o.maxWidth < newWidth ),
			isMaxHeight = o.maxHeight && ( o.maxHeight < newHeight ),
			isMinWidth = o.minWidth && ( o.minWidth > newWidth ),
			isMinHeight = o.minHeight && ( o.minHeight > newHeight );

		o.grid = grid;

		if ( isMinWidth ) {
			newWidth += gridX;
		}
		if ( isMinHeight ) {
			newHeight += gridY;
		}
		if ( isMaxWidth ) {
			newWidth -= gridX;
		}
		if ( isMaxHeight ) {
			newHeight -= gridY;
		}

		if ( /^(se|s|e)$/.test( a ) ) {
			that.size.width = newWidth;
			that.size.height = newHeight;
		} else if ( /^(ne)$/.test( a ) ) {
			that.size.width = newWidth;
			that.size.height = newHeight;
			that.position.top = op.top - oy;
		} else if ( /^(sw)$/.test( a ) ) {
			that.size.width = newWidth;
			that.size.height = newHeight;
			that.position.left = op.left - ox;
		} else {
			if ( newHeight - gridY <= 0 || newWidth - gridX <= 0 ) {
				outerDimensions = that._getPaddingPlusBorderDimensions( this );
			}

			if ( newHeight - gridY > 0 ) {
				that.size.height = newHeight;
				that.position.top = op.top - oy;
			} else {
				newHeight = gridY - outerDimensions.height;
				that.size.height = newHeight;
				that.position.top = op.top + os.height - newHeight;
			}
			if ( newWidth - gridX > 0 ) {
				that.size.width = newWidth;
				that.position.left = op.left - ox;
			} else {
				newWidth = gridX - outerDimensions.width;
				that.size.width = newWidth;
				that.position.left = op.left + os.width - newWidth;
			}
		}
	}

} );

return $.ui.resizable;

} ) );


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Tabs 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Tabs
//>>group: Widgets
//>>description: Transforms a set of container elements into a tab structure.
//>>docs: http://api.jqueryui.com/tabs/
//>>demos: http://jqueryui.com/tabs/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/tabs.css
//>>css.theme: ../../themes/base/theme.css

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(0),
			__webpack_require__(54),
			__webpack_require__(56),
			__webpack_require__(17),
			__webpack_require__(59),
			__webpack_require__(1),
			__webpack_require__(4)
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

$.widget( "ui.tabs", {
	version: "1.12.1",
	delay: 300,
	options: {
		active: null,
		classes: {
			"ui-tabs": "ui-corner-all",
			"ui-tabs-nav": "ui-corner-all",
			"ui-tabs-panel": "ui-corner-bottom",
			"ui-tabs-tab": "ui-corner-top"
		},
		collapsible: false,
		event: "click",
		heightStyle: "content",
		hide: null,
		show: null,

		// Callbacks
		activate: null,
		beforeActivate: null,
		beforeLoad: null,
		load: null
	},

	_isLocal: ( function() {
		var rhash = /#.*$/;

		return function( anchor ) {
			var anchorUrl, locationUrl;

			anchorUrl = anchor.href.replace( rhash, "" );
			locationUrl = location.href.replace( rhash, "" );

			// Decoding may throw an error if the URL isn't UTF-8 (#9518)
			try {
				anchorUrl = decodeURIComponent( anchorUrl );
			} catch ( error ) {}
			try {
				locationUrl = decodeURIComponent( locationUrl );
			} catch ( error ) {}

			return anchor.hash.length > 1 && anchorUrl === locationUrl;
		};
	} )(),

	_create: function() {
		var that = this,
			options = this.options;

		this.running = false;

		this._addClass( "ui-tabs", "ui-widget ui-widget-content" );
		this._toggleClass( "ui-tabs-collapsible", null, options.collapsible );

		this._processTabs();
		options.active = this._initialActive();

		// Take disabling tabs via class attribute from HTML
		// into account and update option properly.
		if ( $.isArray( options.disabled ) ) {
			options.disabled = $.unique( options.disabled.concat(
				$.map( this.tabs.filter( ".ui-state-disabled" ), function( li ) {
					return that.tabs.index( li );
				} )
			) ).sort();
		}

		// Check for length avoids error when initializing empty list
		if ( this.options.active !== false && this.anchors.length ) {
			this.active = this._findActive( options.active );
		} else {
			this.active = $();
		}

		this._refresh();

		if ( this.active.length ) {
			this.load( options.active );
		}
	},

	_initialActive: function() {
		var active = this.options.active,
			collapsible = this.options.collapsible,
			locationHash = location.hash.substring( 1 );

		if ( active === null ) {

			// check the fragment identifier in the URL
			if ( locationHash ) {
				this.tabs.each( function( i, tab ) {
					if ( $( tab ).attr( "aria-controls" ) === locationHash ) {
						active = i;
						return false;
					}
				} );
			}

			// Check for a tab marked active via a class
			if ( active === null ) {
				active = this.tabs.index( this.tabs.filter( ".ui-tabs-active" ) );
			}

			// No active tab, set to false
			if ( active === null || active === -1 ) {
				active = this.tabs.length ? 0 : false;
			}
		}

		// Handle numbers: negative, out of range
		if ( active !== false ) {
			active = this.tabs.index( this.tabs.eq( active ) );
			if ( active === -1 ) {
				active = collapsible ? false : 0;
			}
		}

		// Don't allow collapsible: false and active: false
		if ( !collapsible && active === false && this.anchors.length ) {
			active = 0;
		}

		return active;
	},

	_getCreateEventData: function() {
		return {
			tab: this.active,
			panel: !this.active.length ? $() : this._getPanelForTab( this.active )
		};
	},

	_tabKeydown: function( event ) {
		var focusedTab = $( $.ui.safeActiveElement( this.document[ 0 ] ) ).closest( "li" ),
			selectedIndex = this.tabs.index( focusedTab ),
			goingForward = true;

		if ( this._handlePageNav( event ) ) {
			return;
		}

		switch ( event.keyCode ) {
		case $.ui.keyCode.RIGHT:
		case $.ui.keyCode.DOWN:
			selectedIndex++;
			break;
		case $.ui.keyCode.UP:
		case $.ui.keyCode.LEFT:
			goingForward = false;
			selectedIndex--;
			break;
		case $.ui.keyCode.END:
			selectedIndex = this.anchors.length - 1;
			break;
		case $.ui.keyCode.HOME:
			selectedIndex = 0;
			break;
		case $.ui.keyCode.SPACE:

			// Activate only, no collapsing
			event.preventDefault();
			clearTimeout( this.activating );
			this._activate( selectedIndex );
			return;
		case $.ui.keyCode.ENTER:

			// Toggle (cancel delayed activation, allow collapsing)
			event.preventDefault();
			clearTimeout( this.activating );

			// Determine if we should collapse or activate
			this._activate( selectedIndex === this.options.active ? false : selectedIndex );
			return;
		default:
			return;
		}

		// Focus the appropriate tab, based on which key was pressed
		event.preventDefault();
		clearTimeout( this.activating );
		selectedIndex = this._focusNextTab( selectedIndex, goingForward );

		// Navigating with control/command key will prevent automatic activation
		if ( !event.ctrlKey && !event.metaKey ) {

			// Update aria-selected immediately so that AT think the tab is already selected.
			// Otherwise AT may confuse the user by stating that they need to activate the tab,
			// but the tab will already be activated by the time the announcement finishes.
			focusedTab.attr( "aria-selected", "false" );
			this.tabs.eq( selectedIndex ).attr( "aria-selected", "true" );

			this.activating = this._delay( function() {
				this.option( "active", selectedIndex );
			}, this.delay );
		}
	},

	_panelKeydown: function( event ) {
		if ( this._handlePageNav( event ) ) {
			return;
		}

		// Ctrl+up moves focus to the current tab
		if ( event.ctrlKey && event.keyCode === $.ui.keyCode.UP ) {
			event.preventDefault();
			this.active.trigger( "focus" );
		}
	},

	// Alt+page up/down moves focus to the previous/next tab (and activates)
	_handlePageNav: function( event ) {
		if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_UP ) {
			this._activate( this._focusNextTab( this.options.active - 1, false ) );
			return true;
		}
		if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_DOWN ) {
			this._activate( this._focusNextTab( this.options.active + 1, true ) );
			return true;
		}
	},

	_findNextTab: function( index, goingForward ) {
		var lastTabIndex = this.tabs.length - 1;

		function constrain() {
			if ( index > lastTabIndex ) {
				index = 0;
			}
			if ( index < 0 ) {
				index = lastTabIndex;
			}
			return index;
		}

		while ( $.inArray( constrain(), this.options.disabled ) !== -1 ) {
			index = goingForward ? index + 1 : index - 1;
		}

		return index;
	},

	_focusNextTab: function( index, goingForward ) {
		index = this._findNextTab( index, goingForward );
		this.tabs.eq( index ).trigger( "focus" );
		return index;
	},

	_setOption: function( key, value ) {
		if ( key === "active" ) {

			// _activate() will handle invalid values and update this.options
			this._activate( value );
			return;
		}

		this._super( key, value );

		if ( key === "collapsible" ) {
			this._toggleClass( "ui-tabs-collapsible", null, value );

			// Setting collapsible: false while collapsed; open first panel
			if ( !value && this.options.active === false ) {
				this._activate( 0 );
			}
		}

		if ( key === "event" ) {
			this._setupEvents( value );
		}

		if ( key === "heightStyle" ) {
			this._setupHeightStyle( value );
		}
	},

	_sanitizeSelector: function( hash ) {
		return hash ? hash.replace( /[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&" ) : "";
	},

	refresh: function() {
		var options = this.options,
			lis = this.tablist.children( ":has(a[href])" );

		// Get disabled tabs from class attribute from HTML
		// this will get converted to a boolean if needed in _refresh()
		options.disabled = $.map( lis.filter( ".ui-state-disabled" ), function( tab ) {
			return lis.index( tab );
		} );

		this._processTabs();

		// Was collapsed or no tabs
		if ( options.active === false || !this.anchors.length ) {
			options.active = false;
			this.active = $();

		// was active, but active tab is gone
		} else if ( this.active.length && !$.contains( this.tablist[ 0 ], this.active[ 0 ] ) ) {

			// all remaining tabs are disabled
			if ( this.tabs.length === options.disabled.length ) {
				options.active = false;
				this.active = $();

			// activate previous tab
			} else {
				this._activate( this._findNextTab( Math.max( 0, options.active - 1 ), false ) );
			}

		// was active, active tab still exists
		} else {

			// make sure active index is correct
			options.active = this.tabs.index( this.active );
		}

		this._refresh();
	},

	_refresh: function() {
		this._setOptionDisabled( this.options.disabled );
		this._setupEvents( this.options.event );
		this._setupHeightStyle( this.options.heightStyle );

		this.tabs.not( this.active ).attr( {
			"aria-selected": "false",
			"aria-expanded": "false",
			tabIndex: -1
		} );
		this.panels.not( this._getPanelForTab( this.active ) )
			.hide()
			.attr( {
				"aria-hidden": "true"
			} );

		// Make sure one tab is in the tab order
		if ( !this.active.length ) {
			this.tabs.eq( 0 ).attr( "tabIndex", 0 );
		} else {
			this.active
				.attr( {
					"aria-selected": "true",
					"aria-expanded": "true",
					tabIndex: 0
				} );
			this._addClass( this.active, "ui-tabs-active", "ui-state-active" );
			this._getPanelForTab( this.active )
				.show()
				.attr( {
					"aria-hidden": "false"
				} );
		}
	},

	_processTabs: function() {
		var that = this,
			prevTabs = this.tabs,
			prevAnchors = this.anchors,
			prevPanels = this.panels;

		this.tablist = this._getList().attr( "role", "tablist" );
		this._addClass( this.tablist, "ui-tabs-nav",
			"ui-helper-reset ui-helper-clearfix ui-widget-header" );

		// Prevent users from focusing disabled tabs via click
		this.tablist
			.on( "mousedown" + this.eventNamespace, "> li", function( event ) {
				if ( $( this ).is( ".ui-state-disabled" ) ) {
					event.preventDefault();
				}
			} )

			// Support: IE <9
			// Preventing the default action in mousedown doesn't prevent IE
			// from focusing the element, so if the anchor gets focused, blur.
			// We don't have to worry about focusing the previously focused
			// element since clicking on a non-focusable element should focus
			// the body anyway.
			.on( "focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
				if ( $( this ).closest( "li" ).is( ".ui-state-disabled" ) ) {
					this.blur();
				}
			} );

		this.tabs = this.tablist.find( "> li:has(a[href])" )
			.attr( {
				role: "tab",
				tabIndex: -1
			} );
		this._addClass( this.tabs, "ui-tabs-tab", "ui-state-default" );

		this.anchors = this.tabs.map( function() {
			return $( "a", this )[ 0 ];
		} )
			.attr( {
				role: "presentation",
				tabIndex: -1
			} );
		this._addClass( this.anchors, "ui-tabs-anchor" );

		this.panels = $();

		this.anchors.each( function( i, anchor ) {
			var selector, panel, panelId,
				anchorId = $( anchor ).uniqueId().attr( "id" ),
				tab = $( anchor ).closest( "li" ),
				originalAriaControls = tab.attr( "aria-controls" );

			// Inline tab
			if ( that._isLocal( anchor ) ) {
				selector = anchor.hash;
				panelId = selector.substring( 1 );
				panel = that.element.find( that._sanitizeSelector( selector ) );

			// remote tab
			} else {

				// If the tab doesn't already have aria-controls,
				// generate an id by using a throw-away element
				panelId = tab.attr( "aria-controls" ) || $( {} ).uniqueId()[ 0 ].id;
				selector = "#" + panelId;
				panel = that.element.find( selector );
				if ( !panel.length ) {
					panel = that._createPanel( panelId );
					panel.insertAfter( that.panels[ i - 1 ] || that.tablist );
				}
				panel.attr( "aria-live", "polite" );
			}

			if ( panel.length ) {
				that.panels = that.panels.add( panel );
			}
			if ( originalAriaControls ) {
				tab.data( "ui-tabs-aria-controls", originalAriaControls );
			}
			tab.attr( {
				"aria-controls": panelId,
				"aria-labelledby": anchorId
			} );
			panel.attr( "aria-labelledby", anchorId );
		} );

		this.panels.attr( "role", "tabpanel" );
		this._addClass( this.panels, "ui-tabs-panel", "ui-widget-content" );

		// Avoid memory leaks (#10056)
		if ( prevTabs ) {
			this._off( prevTabs.not( this.tabs ) );
			this._off( prevAnchors.not( this.anchors ) );
			this._off( prevPanels.not( this.panels ) );
		}
	},

	// Allow overriding how to find the list for rare usage scenarios (#7715)
	_getList: function() {
		return this.tablist || this.element.find( "ol, ul" ).eq( 0 );
	},

	_createPanel: function( id ) {
		return $( "<div>" )
			.attr( "id", id )
			.data( "ui-tabs-destroy", true );
	},

	_setOptionDisabled: function( disabled ) {
		var currentItem, li, i;

		if ( $.isArray( disabled ) ) {
			if ( !disabled.length ) {
				disabled = false;
			} else if ( disabled.length === this.anchors.length ) {
				disabled = true;
			}
		}

		// Disable tabs
		for ( i = 0; ( li = this.tabs[ i ] ); i++ ) {
			currentItem = $( li );
			if ( disabled === true || $.inArray( i, disabled ) !== -1 ) {
				currentItem.attr( "aria-disabled", "true" );
				this._addClass( currentItem, null, "ui-state-disabled" );
			} else {
				currentItem.removeAttr( "aria-disabled" );
				this._removeClass( currentItem, null, "ui-state-disabled" );
			}
		}

		this.options.disabled = disabled;

		this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null,
			disabled === true );
	},

	_setupEvents: function( event ) {
		var events = {};
		if ( event ) {
			$.each( event.split( " " ), function( index, eventName ) {
				events[ eventName ] = "_eventHandler";
			} );
		}

		this._off( this.anchors.add( this.tabs ).add( this.panels ) );

		// Always prevent the default action, even when disabled
		this._on( true, this.anchors, {
			click: function( event ) {
				event.preventDefault();
			}
		} );
		this._on( this.anchors, events );
		this._on( this.tabs, { keydown: "_tabKeydown" } );
		this._on( this.panels, { keydown: "_panelKeydown" } );

		this._focusable( this.tabs );
		this._hoverable( this.tabs );
	},

	_setupHeightStyle: function( heightStyle ) {
		var maxHeight,
			parent = this.element.parent();

		if ( heightStyle === "fill" ) {
			maxHeight = parent.height();
			maxHeight -= this.element.outerHeight() - this.element.height();

			this.element.siblings( ":visible" ).each( function() {
				var elem = $( this ),
					position = elem.css( "position" );

				if ( position === "absolute" || position === "fixed" ) {
					return;
				}
				maxHeight -= elem.outerHeight( true );
			} );

			this.element.children().not( this.panels ).each( function() {
				maxHeight -= $( this ).outerHeight( true );
			} );

			this.panels.each( function() {
				$( this ).height( Math.max( 0, maxHeight -
					$( this ).innerHeight() + $( this ).height() ) );
			} )
				.css( "overflow", "auto" );
		} else if ( heightStyle === "auto" ) {
			maxHeight = 0;
			this.panels.each( function() {
				maxHeight = Math.max( maxHeight, $( this ).height( "" ).height() );
			} ).height( maxHeight );
		}
	},

	_eventHandler: function( event ) {
		var options = this.options,
			active = this.active,
			anchor = $( event.currentTarget ),
			tab = anchor.closest( "li" ),
			clickedIsActive = tab[ 0 ] === active[ 0 ],
			collapsing = clickedIsActive && options.collapsible,
			toShow = collapsing ? $() : this._getPanelForTab( tab ),
			toHide = !active.length ? $() : this._getPanelForTab( active ),
			eventData = {
				oldTab: active,
				oldPanel: toHide,
				newTab: collapsing ? $() : tab,
				newPanel: toShow
			};

		event.preventDefault();

		if ( tab.hasClass( "ui-state-disabled" ) ||

				// tab is already loading
				tab.hasClass( "ui-tabs-loading" ) ||

				// can't switch durning an animation
				this.running ||

				// click on active header, but not collapsible
				( clickedIsActive && !options.collapsible ) ||

				// allow canceling activation
				( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
			return;
		}

		options.active = collapsing ? false : this.tabs.index( tab );

		this.active = clickedIsActive ? $() : tab;
		if ( this.xhr ) {
			this.xhr.abort();
		}

		if ( !toHide.length && !toShow.length ) {
			$.error( "jQuery UI Tabs: Mismatching fragment identifier." );
		}

		if ( toShow.length ) {
			this.load( this.tabs.index( tab ), event );
		}
		this._toggle( event, eventData );
	},

	// Handles show/hide for selecting tabs
	_toggle: function( event, eventData ) {
		var that = this,
			toShow = eventData.newPanel,
			toHide = eventData.oldPanel;

		this.running = true;

		function complete() {
			that.running = false;
			that._trigger( "activate", event, eventData );
		}

		function show() {
			that._addClass( eventData.newTab.closest( "li" ), "ui-tabs-active", "ui-state-active" );

			if ( toShow.length && that.options.show ) {
				that._show( toShow, that.options.show, complete );
			} else {
				toShow.show();
				complete();
			}
		}

		// Start out by hiding, then showing, then completing
		if ( toHide.length && this.options.hide ) {
			this._hide( toHide, this.options.hide, function() {
				that._removeClass( eventData.oldTab.closest( "li" ),
					"ui-tabs-active", "ui-state-active" );
				show();
			} );
		} else {
			this._removeClass( eventData.oldTab.closest( "li" ),
				"ui-tabs-active", "ui-state-active" );
			toHide.hide();
			show();
		}

		toHide.attr( "aria-hidden", "true" );
		eventData.oldTab.attr( {
			"aria-selected": "false",
			"aria-expanded": "false"
		} );

		// If we're switching tabs, remove the old tab from the tab order.
		// If we're opening from collapsed state, remove the previous tab from the tab order.
		// If we're collapsing, then keep the collapsing tab in the tab order.
		if ( toShow.length && toHide.length ) {
			eventData.oldTab.attr( "tabIndex", -1 );
		} else if ( toShow.length ) {
			this.tabs.filter( function() {
				return $( this ).attr( "tabIndex" ) === 0;
			} )
				.attr( "tabIndex", -1 );
		}

		toShow.attr( "aria-hidden", "false" );
		eventData.newTab.attr( {
			"aria-selected": "true",
			"aria-expanded": "true",
			tabIndex: 0
		} );
	},

	_activate: function( index ) {
		var anchor,
			active = this._findActive( index );

		// Trying to activate the already active panel
		if ( active[ 0 ] === this.active[ 0 ] ) {
			return;
		}

		// Trying to collapse, simulate a click on the current active header
		if ( !active.length ) {
			active = this.active;
		}

		anchor = active.find( ".ui-tabs-anchor" )[ 0 ];
		this._eventHandler( {
			target: anchor,
			currentTarget: anchor,
			preventDefault: $.noop
		} );
	},

	_findActive: function( index ) {
		return index === false ? $() : this.tabs.eq( index );
	},

	_getIndex: function( index ) {

		// meta-function to give users option to provide a href string instead of a numerical index.
		if ( typeof index === "string" ) {
			index = this.anchors.index( this.anchors.filter( "[href$='" +
				$.ui.escapeSelector( index ) + "']" ) );
		}

		return index;
	},

	_destroy: function() {
		if ( this.xhr ) {
			this.xhr.abort();
		}

		this.tablist
			.removeAttr( "role" )
			.off( this.eventNamespace );

		this.anchors
			.removeAttr( "role tabIndex" )
			.removeUniqueId();

		this.tabs.add( this.panels ).each( function() {
			if ( $.data( this, "ui-tabs-destroy" ) ) {
				$( this ).remove();
			} else {
				$( this ).removeAttr( "role tabIndex " +
					"aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded" );
			}
		} );

		this.tabs.each( function() {
			var li = $( this ),
				prev = li.data( "ui-tabs-aria-controls" );
			if ( prev ) {
				li
					.attr( "aria-controls", prev )
					.removeData( "ui-tabs-aria-controls" );
			} else {
				li.removeAttr( "aria-controls" );
			}
		} );

		this.panels.show();

		if ( this.options.heightStyle !== "content" ) {
			this.panels.css( "height", "" );
		}
	},

	enable: function( index ) {
		var disabled = this.options.disabled;
		if ( disabled === false ) {
			return;
		}

		if ( index === undefined ) {
			disabled = false;
		} else {
			index = this._getIndex( index );
			if ( $.isArray( disabled ) ) {
				disabled = $.map( disabled, function( num ) {
					return num !== index ? num : null;
				} );
			} else {
				disabled = $.map( this.tabs, function( li, num ) {
					return num !== index ? num : null;
				} );
			}
		}
		this._setOptionDisabled( disabled );
	},

	disable: function( index ) {
		var disabled = this.options.disabled;
		if ( disabled === true ) {
			return;
		}

		if ( index === undefined ) {
			disabled = true;
		} else {
			index = this._getIndex( index );
			if ( $.inArray( index, disabled ) !== -1 ) {
				return;
			}
			if ( $.isArray( disabled ) ) {
				disabled = $.merge( [ index ], disabled ).sort();
			} else {
				disabled = [ index ];
			}
		}
		this._setOptionDisabled( disabled );
	},

	load: function( index, event ) {
		index = this._getIndex( index );
		var that = this,
			tab = this.tabs.eq( index ),
			anchor = tab.find( ".ui-tabs-anchor" ),
			panel = this._getPanelForTab( tab ),
			eventData = {
				tab: tab,
				panel: panel
			},
			complete = function( jqXHR, status ) {
				if ( status === "abort" ) {
					that.panels.stop( false, true );
				}

				that._removeClass( tab, "ui-tabs-loading" );
				panel.removeAttr( "aria-busy" );

				if ( jqXHR === that.xhr ) {
					delete that.xhr;
				}
			};

		// Not remote
		if ( this._isLocal( anchor[ 0 ] ) ) {
			return;
		}

		this.xhr = $.ajax( this._ajaxSettings( anchor, event, eventData ) );

		// Support: jQuery <1.8
		// jQuery <1.8 returns false if the request is canceled in beforeSend,
		// but as of 1.8, $.ajax() always returns a jqXHR object.
		if ( this.xhr && this.xhr.statusText !== "canceled" ) {
			this._addClass( tab, "ui-tabs-loading" );
			panel.attr( "aria-busy", "true" );

			this.xhr
				.done( function( response, status, jqXHR ) {

					// support: jQuery <1.8
					// http://bugs.jquery.com/ticket/11778
					setTimeout( function() {
						panel.html( response );
						that._trigger( "load", event, eventData );

						complete( jqXHR, status );
					}, 1 );
				} )
				.fail( function( jqXHR, status ) {

					// support: jQuery <1.8
					// http://bugs.jquery.com/ticket/11778
					setTimeout( function() {
						complete( jqXHR, status );
					}, 1 );
				} );
		}
	},

	_ajaxSettings: function( anchor, event, eventData ) {
		var that = this;
		return {

			// Support: IE <11 only
			// Strip any hash that exists to prevent errors with the Ajax request
			url: anchor.attr( "href" ).replace( /#.*$/, "" ),
			beforeSend: function( jqXHR, settings ) {
				return that._trigger( "beforeLoad", event,
					$.extend( { jqXHR: jqXHR, ajaxSettings: settings }, eventData ) );
			}
		};
	},

	_getPanelForTab: function( tab ) {
		var id = $( tab ).attr( "aria-controls" );
		return this.element.find( this._sanitizeSelector( "#" + id ) );
	}
} );

// DEPRECATED
// TODO: Switch return back to widget declaration at top of file when this is removed
if ( $.uiBackCompat !== false ) {

	// Backcompat for ui-tab class (now ui-tabs-tab)
	$.widget( "ui.tabs", $.ui.tabs, {
		_processTabs: function() {
			this._superApply( arguments );
			this._addClass( this.tabs, "ui-tab" );
		}
	} );
}

return $.ui.tabs;

} ) );


/***/ })
/******/ ]);
//# sourceMappingURL=webtoprint.js.map