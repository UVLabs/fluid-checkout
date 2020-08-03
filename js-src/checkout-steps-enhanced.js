/**
 * Checkout steps enhanced features.
 *
 * DEPENDS ON:
 * - jQuery // Interact with WooCommerce events
 */
(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define([], factory(root));
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.CheckoutStepsEnhanced = factory(root);
	}
})(typeof global !== 'undefined' ? global : this.window || this.global, function (root) {

	'use strict';

	var $ = jQuery;

	var _hasInitialized = false;
	var _publicMethods = { };
	var _settings = {
        bodyClass: 'wfc-checkout-steps-enhanced--active',
        editContactSelector: '[data-user-contact-edit]',
        userDataSelector: '[data-user-data-wrapper]',
	}



	/**
	 * METHODS
	 */



    /**
	 * Show contact details form for editing
	 */
	var removeUserData = function() {
        var userDataWrapper = document.querySelector( _settings.userDataSelector );
        if ( userDataWrapper ) {
            userDataWrapper.parentNode.removeChild( userDataWrapper );
        }
    }


    /**
	 * Handle document clicks and route to the appropriate function.
	 */
	var handleClick = function( e ) {
		if ( e.target.closest( _settings.editContactSelector ) ) {
			removeUserData();
		}
	};



	/**
	 * Initialize component and set related handlers.
	 */
	_publicMethods.init = function() {
		if ( _hasInitialized ) return;
		
		// Add event listeners
		window.addEventListener( 'click', handleClick );

		// Add init class
		document.body.classList.add( _settings.bodyClass );

		_hasInitialized = true;
	};



	//
	// Public APIs
	//
	return _publicMethods;

});
