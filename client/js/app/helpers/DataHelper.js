class DataHelper {

    constructor() {

        throw new Error('DataHelper não pode ser instanciada.');
    }

    static textoParaData(texto) {

        if (!/\d{4}-\d{2}-\d{2}/.test(texto)) {
            throw Error('Deve estar no formato aaaa-mm-dd');
        }

        /* Separa a string da data e mapeia todos os itens do array executando a função pedida (item - indice % 2), 
        depois retorna um tipo Date informando os parametros separadamente ( através do ... ). Basicamente faz o que  código abaixo dele faz. */
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));

        
        /* let dataArray = this._inputData.value.split('-');

        let ano = parseInt(dataArray[0]);
        let mes = parseInt(dataArray[1]) - 1;
        let dia = parseInt(dataArray[2]);

        let data = new Date(ano, mes, dia); */
    }

    static dataParaTexto(data) {

        /* Retorna data em formato string no padrão 'dd/mm/aaaa'. */
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`

        // return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
    }
}