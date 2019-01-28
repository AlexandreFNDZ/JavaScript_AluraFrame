class Negociacao
{
    constructor(data, quant, valor) {
        this._data = new Date(data);
        this._quantidade = quant;
        this._valor = valor;
        Object.freeze(this);
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getDate());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}