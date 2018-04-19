class Message {
  constructor(text = '', created = Date.now()){
    this.text = text;

    this.created = created;
  }
  // ****************************************************************************
  // getter - substitui a chamada realizada no metodo toString
  // ****************************************************************************
  get created(){
    return this._created;
  }
  // ****************************************************************************
  // setter - substitui a atrubuição realizada no construtor
  // ****************************************************************************
  set created(created){
    if(!created || isNaN(created)){
      throw new Error('Propriedade created inválida');
    }
    this._created = created;
  }

  // ****************************************************************************
  // Retorna automaticamente uma string sempre que a instância for chamada em um 
  // contexto de string
  // ****************************************************************************
  toString(){
    return `Mensagem criada em : ${this._created} - Texto: ${this.text}`
  }
}

var emptyMessage = new Message();
var textMessage = new Message('Mensagem escrita ontem', Date.now() - 86400);

console.log(String(emptyMessage));
console.log(String(textMessage));