import {Book} from "../../books/shared/book.model";
import {Client} from "../../clients/shared/client.model";

export class Purchase {
  id: number;
  book: Book;
  client: Client;
  quantity: number;
}
