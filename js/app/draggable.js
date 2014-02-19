require(["jquery","jquery-ui"], function ($) {
     $(function () {
        $(document).ready(function () {
			$( "#sortable" ).sortable({
			  revert: true
			});
			$( "#draggable" ).draggable({
			  connectToSortable: "#sortable",
			  helper: "clone",
			  revert: "invalid"
			});
			$( "ul, li" ).disableSelection();
		}); 
	});
});
