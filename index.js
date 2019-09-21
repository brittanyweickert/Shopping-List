function addNewShoppingItem() {
    $('#js-shopping-list-form').submit(function(e){
        const val = $('#shopping-list-entry').val();
        $('.shopping-list').append(
            `<li>
            <span class="shopping-item">${val}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`);
        e.preventDefault();
    })
}


function lineThroughItem(){
	$('.shopping-list').on('click', '.shopping-item-toggle', function(e){
		e.preventDefault();
		$(e.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');

	})
}

function deleteItem(){
	$('.shopping-list').on('click', '.shopping-item-delete', function(e){
		e.preventDefault();
		$(e.target).closest('li').remove();
	})
}


$(lineThroughItem);
$(deleteItem);
$(addNewShoppingItem);