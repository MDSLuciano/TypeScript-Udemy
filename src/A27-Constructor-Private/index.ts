// Singleton - GoF | Factory Method - GoF
// Desse jeito nunca será criado mais de uma instância do banco de dados.
export class DataBase {
  private static database: DataBase;
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDataBase(host: string, user: string, password: string): DataBase {
    if (DataBase.database) {
      console.log('Banco de dados ja foi criado');
      return DataBase.database;
    }
    console.log('Criando nova instancia do banco de dados');
    DataBase.database = new DataBase(host, user, password);
    return DataBase.database;
  }
}

const database1 = DataBase.getDataBase('localhost', 'root', '123456');
database1.connect();
const database2 = DataBase.getDataBase('localhost', 'root', '123456');
database2.connect();
const database3 = DataBase.getDataBase('localhost', 'root', '123456');
database3.connect();
