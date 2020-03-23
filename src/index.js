$(document).ready(function () {
    var itemList = '#item-list';
    var addBtn = '.btn-add';

    if ($(itemList)) {
        // item is imported from src/constants.js
        var list = [];
        var productsData = [];
        
        init();

        async function init() {
            $(itemList).parent().prepend(plusButton);

            // Gets available products
            const productsResp = await fetch(`${baseUrl}/products.json`);
            productsData = await productsResp.json();

            // Gets predefined data
            const resp = await fetch(`${baseUrl}/example.json`);
            const data = await resp.json();
            
            // Initializes list with default values
            list = [
                { product: 1, quantity: 0 }
            ];

            // If predefined is not empty, fill list with fetched data
            if (data.length) {
                list = data;
            }

            $(addBtn).on('click', function() {
                list.push({
                    product: 1,
                    quantity: 0
                });
                render();
            });
            render();
        }

        async function render() {
            $(itemList).children().remove();

            list.forEach(function(listItem, index) {
                var i = index;
                $(itemList).append(item);

                productsData.forEach(function(product) {
                    $(`${itemList} .item:nth-child(${i + 1}) select`).append(`
                        <option value="${product.id}">
                            ${product.name}
                        </option>
                    `);
                });
                
                $(`${itemList} .item:nth-child(${index + 1}) select`).val(listItem.product);
                $(`${itemList} .item:nth-child(${index + 1}) input.quantity-input`).val(listItem.quantity);
                $(`${itemList} .item:nth-child(${index + 1}) select`).on('change', function(e) {
                    list[index].product = +e.target.value;
                });
                $(`${itemList} .item:nth-child(${index + 1}) input.quantity-input`).on('change', function(e) {
                    list[index].quantity = +e.target.value;
                });
                $(`${itemList} .item:nth-child(${index + 1}) button.btn-remove`).on('click', function() {
                    list.splice(index, 1);
                    render();
                });
            });
        }
    }
});
