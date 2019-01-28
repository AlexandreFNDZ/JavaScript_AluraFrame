class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document); // Cria um atalho para o método QuerySelector usando a variável '$'

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($("#negociacoesView"));

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($("#mensagemView"));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {

        event.preventDefault();
        alert("Chamei ação no controller.");

        this._mensagem.texto = 'Adicionado com sucesso';
        this._mensagemView.update(this._mensagem);

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        this._limpaFormulario();

        console.log(this._listaNegociacoes.negociacoes);
    }

    _criaNegociacao() {

        return new Negociacao(
            DataHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}