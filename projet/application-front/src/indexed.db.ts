import Dexie, {Table} from "dexie";

interface IQuestion {
  label: string,
  id: number,
  reponses: {
    id: number,
    label: string,
    correct: boolean,
  }[]
}
export class IndexedDb extends Dexie {
  questions!: Table<IQuestion, number>;

  constructor() {
    super('multiGame');
    this.version(1).stores(
      {
        questions:'++id'
      }
    );
  }
}

export const db = new IndexedDb();
