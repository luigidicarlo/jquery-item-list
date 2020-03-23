var item = `
    <div class="item d-flex align-items-end">
        <div class="form-group mx-2">
            <label>
                Producto
            </label>
            <select name="products[]" class="form-control"></select>
        </div>
        <div class="form-group mx-2">
            <label>
                Cantidad
            </label>
            <input type="number" min="0" step="1" name="quantities[]" class="form-control quantity-input">
        </div>
        <div class="form-group mx-2">
            <button type="button" class="btn btn-danger btn-remove">
                Quitar
            </button>
        </div>
    </div>
`;
var plusButton = `
    <button type="button" class="btn btn-success btn-add">
        Agregar Producto
    </button>
`;