#!/usr/bin/env node

import * as ngrok from "ngrok";
import * as http from "http";
import * as fs from "fs";
import * as process from "process";
import * as qrcode from "qrcode";

const arg = process.argv;

if (arg[2] != undefined) {
  http
    .createServer(function (req, res) {
      if (req.url != "/" + arg[2]) {
        res.res.writeHead(404);
        res.end("Error");
        return;
      }
      fs.readFile(process.cwd() + req.url, function (err, data) {
        if (err) {
          res.writeHead(404);
          res.end(JSON.stringify(err));
          return;
        }
        res.setHeader("Content-Length", data.byteLength);
        res.writeHead(200, {
          "Content-Legth": data.byteLength,
          "Content-Type": "application/octet-stream",
        });
        res.end(data);
      });
    })
    .listen(8080);
}

const endpoint = await ngrok.connect({
  addr: 8080,
});

const url = arg[2] == undefined ? endpoint : endpoint + "/" + arg[2];

console.log(url);

const qr = await qrcode.toString(url, {
  type: "terminal",
  small: true,
});

console.log(qr);
