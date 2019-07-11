import AP.Common.GDT as apCommonGDT;

businessobject BusinessObject1 {

	
	element a:IntegerValue;

	message aaaa text "www";

	action test raises aaaa;

	

	
        // Root node must not be specified, it is created implicitly
        //
        // Add elements here. 
        // 
        // To declare an element as alternative key, use the [AlternativeKey] annotation.
        // Please note:
        // - An alternative key of type UUID exists implicitly for each node, enabling the node
        //   to be used as an association target.
        // - The QueryByElements query is created automatically for each node.
        // - Code completion is available with CTRL + SPACE.

}