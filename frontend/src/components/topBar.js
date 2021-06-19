import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

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
    "& .Mui-focused .MuiInputBase-input": {
      color: "white",
    },
  },
})(TextField);

function TopBar() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justify="center"
      style={{ margin: "1.5rem", width: "calc(100vw - 3rem)" }}
    >
      <Grid item xs={12} md={8}>
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
                <Typography variant="h5" align="center">Participantion Data App</Typography>
                <Typography variant="body" align="center" style={{ marginTop: "1.5rem" }}>
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
                justify="center"
                style={{ padding: "1rem 4rem" }}
              >
                <Typography variant="h4">Participantion Data App</Typography>
                <Typography variant="h4"></Typography>
                <Typography variant="body" style={{ marginTop: "1.5rem" }}>
                  This app creates, demonstrates and deletes users and the % of
                  their participation
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
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
                onSubmit={handleSubmit}
              >
                <WhiteTextField
                  label="Name"
                  placeholder="Enter first name..."
                  style={{ marginBottom: "0.5rem", width: "12rem" }}
                  InputProps={{
                    style: { color: "white" },
                  }}
                />
                <WhiteTextField
                  label="Last Name"
                  placeholder="Enter last name..."
                  style={{ marginBottom: "0.5rem", width: "12rem" }}
                />
                <WhiteTextField
                  label="Participation"
                  placeholder="Enter hours..."
                  style={{ marginBottom: "1.5rem", width: "12rem" }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  style={{ width: "8rem", backgroundColor: "#fafafa" }}
                >
                  Send
                </Button>
              </form>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default TopBar;