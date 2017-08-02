// Originally from https://github.com/logancollins/cloud-to-butt-safari/blob/master/cloudtobutt.js

// Replace
walk(document.body);

function walk(node) {
    
	// This function is originally from here:
	// http://is.gd/mwZp7E
	var child, next;
	
	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)  {
	var v = textNode.nodeValue;
	
	v = v.replace(/\bPresident Trump\b/g, "President #Bawbag");
	v = v.replace(/\bPRESIDENT TRUMP\b/g, "PRESIDENT #BAWBAG");
	v = v.replace(/\Mr Trump\b/g, "The #Bawbag");
	v = v.replace(/\bDonald Trump\b/g, "#Bawbag");
	v = v.replace(/\bPOTUS\b/g, "SCROTUS");
	v = v.replace(/\bIvanka Trump\b/g, "Ivanka");
	v = v.replace(/\bIvanka\b/g, "That Useless Ivanka™");
	v = v.replace(/\bMs Trump\b/g, "That Useless Ivanka™");
	v = v.replace(/\bTrump\b/g, "#Bawbag");
	
	textNode.nodeValue = v;
}

