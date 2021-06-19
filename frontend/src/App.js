import { useReducer } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import TopBar from "./components/topBar";
import Chart from "./components/chart";
import Table from "./components/table";

const data = [
  {
    id: 1,
    name: "Mike",
    surName: "He",
    hours: 20,
  },
  {
    id: 2,
    name: "Peter",
    surName: "Parker",
    hours: 57,
  },
  {
    id: 3,
    name: "Wade",
    surName: "Watts",
    hours: 45,
  },
];

const ACTIONS = {
  CREATE: 'create',
  LOADALL: 'load-all',
  DELETE: 'delete',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CREATE:
      return [...state, action.payload.data];
    case ACTIONS.LOADALL:
      return action.payload.data;
    case ACTIONS.DELETE:
      return state.filter(entry => entry.id !== action.payload.id);
    default: 
    return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justify="center"
      style={{ margin: "1.5rem", width: "calc(100vw - 3rem)" }}
    >
      <Grid
        item
        xs={12}
        container
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12} md={8}>
          <TopBar />
        </Grid>
        <Grid item xs={12} md={8}>
          <Card>
            <Grid container>
              <Grid item xs={12} lg={6} style={{padding: "0.5rem", overflow:"auto"}}>
                <Table data={state} dispatch={dispatch} />
              </Grid>
              <Grid item xs={12} lg={6} style={{padding: "0.5rem", overflow:"auto"}}>
                <Chart data={state} />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
