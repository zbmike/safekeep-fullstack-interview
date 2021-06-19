import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import { useState } from "react";

import { createParticipant } from "../api/participants";

const WhiteTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& label": {
      color: "white",
    },
    "&:hover .MuiInput-underline:before": {
      borderBottomColor: "white",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "rgba(255,255,255,0.42)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiInput-underline.Mui-error:after": {
      borderBottomColor: "red",
    },
    "& .MuiInputBase-input": {
      color: "white",
    },
    "& .Mui-focused .MuiInputBase-input": {
      color: "white",
    },
  },
})(TextField);

function TopBar({ dispatch }) {
  const theme = useTheme();
  const lgMatches = useMediaQuery(theme.breakpoints.up("lg"));
  const mdMatches = useMediaQuery(theme.breakpoints.up("md"));

  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [hour, setHour] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const participantObj = { name, surName, hour: +hour };
    const data = await createParticipant(participantObj);
    dispatch({ type: "create", payload: { data } });
  };
  return (
    <Card>
      <Grid
        container
        spacing={0}
        style={{ backgroundColor: "rgb(17,154,255)", color: "white" }}
      >
        <Hidden mdUp>
          <Grid
            xs={12}
            md={6}
            item
            container
            direction="column"
            alignItems="center"
            justify="center"
            style={{ padding: "1rem 4rem" }}
          >
            <Typography variant="h5" align="center">
              Participantion Data App
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ marginTop: "1.5rem" }}
            >
              This app creates, demonstrates and deletes users and the % of
              their participation
            </Typography>
          </Grid>
        </Hidden>
        <Hidden smDown>
          <Grid
            xs={12}
            md={6}
            item
            container
            direction="column"
            alignItems="flex-start"
            style={{ padding: "3rem 4rem" }}
          >
            <Typography variant="h4">Participantion Data App</Typography>
            <Typography variant="h4"></Typography>
            <Typography variant="body1" style={{ marginTop: "1.5rem" }}>
              This app creates, demonstrates and deletes users and the
              percentage of their participation.
            </Typography>
          </Grid>
        </Hidden>
        <Grid
          xs={12}
          md={6}
          item
          container
          justify="center"
          style={{ padding: "2rem" }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: mdMatches ? "flex-end" : "center",
              justifyContent: "center",
            }}
            onSubmit={handleSubmit}
          >
            <WhiteTextField
              label="Name"
              placeholder="Enter first name..."
              style={{
                marginBottom: "0.5rem",
                width: lgMatches ? "18rem" : "12rem",
              }}
              value={name}
              onChange={({ target }) => {
                setName(target.value);
              }}
            />
            <WhiteTextField
              label="Last Name"
              placeholder="Enter last name..."
              style={{
                marginBottom: "0.5rem",
                width: lgMatches ? "18rem" : "12rem",
              }}
              value={surName}
              onChange={({ target }) => setSurName(target.value)}
            />
            <WhiteTextField
              label="Participated Time"
              placeholder="Enter hours..."
              style={{
                marginBottom: "1.5rem",
                width: lgMatches ? "18rem" : "12rem",
              }}
              value={hour}
              onChange={({ target }) => setHour(target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              style={{ width: "8rem", backgroundColor: "#fafafa" }}
            >
              Send {">"}
            </Button>
          </form>
        </Grid>
      </Grid>
    </Card>
  );
}

export default TopBar;
