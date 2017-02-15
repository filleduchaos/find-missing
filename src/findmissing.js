'use strict';

module.exports = {
	/** This function finds the uncommon element between two arrays */
	findMissing: function(arr1, arr2) {
		// Join the two arrays
		const all = arr1.concat(arr2);

		// Filter out values that are present in either or both
		const uncommon = all.filter(val => arr1.indexOf(val) == -1 || arr2.indexOf(val) == -1);

		// Return the uncommon element or 0 if there is no uncommon element
		return uncommon[0] || 0;
	}
	
}