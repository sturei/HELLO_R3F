https://github.com/szymmis/vite-express

npx create-vite-express
->project hello_api_server
cd hello_api_server
npm install
npm run dev

in browser...
http://localhost:3000/hello

On the plus side:
- vitest is great
On the minus:
- It's a bit odd to have the node_modules as the union of the requirements on client and server side, so here keeping the client code to a minimum.


Consider Bruno for manual testing of api. It's local, and free.

And/or write e2_terminal app.  - a very simple app with just input an input textbox and telltale panels of 1. requests and 2. requests-with-responses.



Now, let's move on to try vitest....



