import { Grid, AjaxStore } from "@bryntum/grid";
import "@bryntum/grid/grid.stockholm.css";

const store = new AjaxStore({
  readUrl: "/load",
  autoLoad: true,
});

const grid = new Grid({
  appendTo: document.body,
  readOnly: true,
  store,
  columns: [
    {
      text: "Country",
      field: "country",
      width: 200,
    },
    {
      text: "Sport",
      field: "sport",
      width: 200,
    },
    {
      text: "Athlete",
      field: "athlete",
      width: 200,
    },
    {
      text: "Year",
      field: "year",
      width: 50,
    },
    {
      text: "Gold",
      field: "gold",
      width: 50,
    },
    {
      text: "Silver",
      field: "silver",
      width: 50,
    },
    {
      text: "Bronze",
      field: "bronze",
      width: 50,
    },
  ],
});
