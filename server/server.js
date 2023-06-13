import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackConfig from "../webpack.config.js";
import express from "express";
import bodyParser from "body-parser";

import OlympicWinnersService from "./olympicWinnersService";
import { connection } from "../utils/dbConnect.js";

const port = process.env.PORT || 1338;
const app = express();
app.use(webpackMiddleware(webpack(webpackConfig)));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/olympicWinners", function (req, res) {
  OlympicWinnersService.getData(req.body, (rows, lastRow) => {
    res.json({ rows: rows, lastRow: lastRow });
  });
});

app.get("/load", async (req, res) => {
  connection.query(
    "SELECT * FROM olympic_winners ORDER BY country ASC",
    function (err, results) {
      res.json({
        success: err ? false : true,
        data: results,
        err,
      });
    }
  );
});

app.listen(port, () => {
  console.log(`Started on localhost: ${port}`);
});
