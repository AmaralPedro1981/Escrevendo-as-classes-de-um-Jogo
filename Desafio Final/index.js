class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo.toLowerCase()) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "ataque desconhecido";
      }
  
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}.`);
    }
  }
  

  const mago = new Heroi("Gandalf", 1000, "Mago");
  mago.atacar(); 
  
  const guerreiro = new Heroi("Aragorn", 30, "Guerreiro");
  guerreiro.atacar(); 
  
  const monge = new Heroi("Bruce Lee", 40, "Monge");
  monge.atacar(); 
  
  const ninja = new Heroi("Naruto", 20, "Ninja");
  ninja.atacar(); 
  