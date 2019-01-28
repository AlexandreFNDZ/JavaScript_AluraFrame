class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
    }

    get negociacoes() {

        // Retorna uma cópia da lista _negociacoes, protegendo as informações da lista original.
        return [].concat(this._negociacoes);
    }
}