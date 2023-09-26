let actions = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];
let timer = 100;
for (const action of actions) {
  setTimeout(() => process.stdout.write(action), timer);
  timer += 200;
}