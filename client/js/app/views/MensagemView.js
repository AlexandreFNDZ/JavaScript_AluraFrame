class MensagemView extends View {

    constructor(elemento) {

        super(elemento);
    }

    template(model) {

        // if ternário com uma estrutura simplificada, verifica o 'model.texto' e retorna uma opção. Faz o mesmo que o código comentado abaixo dele.
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;

        /* if (model.texto) {
            return `<p class="alert alert-info">${model.texto}</p>`;
        } else {
            return `<p></p>`;
        } */
    }
}