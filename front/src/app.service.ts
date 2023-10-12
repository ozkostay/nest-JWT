import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Service FRONTEND start!!! port:4000';

    // async (req, res) => {
    //   let books = [];
    //   try {
    //     const response = await fetch(`${SECONDAPP_URL}/api/books`);
    //     const data = await response.json();
    //     books = data.books;
    //   } catch (e) {
    //     console.log("Ошибка router.get /", {
    //       errorcode: 500,
    //       errmassage: "Ошибка router.get /",
    //       err: e,
    //     });
    //   }
    //   res.render("index", {
    //     title: "Main PAGE",
    //     store: books,
    //   });
  }
}
