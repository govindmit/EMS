import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import { Grid, Box, Paper, FormHelperText } from "@mui/material";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { API } from "../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const theme = createTheme();

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [err, seterr] = useState("");

  const navigate = useNavigate();
  const data = { email, password };

  const handelLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${API.login}`, data)
      .then((response) => {
        if (response) {
          localStorage.setItem(
            "token",
            JSON.stringify(response.data.data.token)
          );
          localStorage.setItem("user", JSON.stringify(response.data.data));
          navigate("/dashboard");
        } else {
          alert("wrong token");
        }
      })
      .catch((err) => {
        if (email && password) {
          const err = "*user details are not correct*";
          seterr(err);
        }
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAB6VBMVEX///8AAADmOTKjz56hzu//4gBut17mkAD/72XJFyfBGSjMFybFGCgfmDj+3gD/+/TliQDr6+v5ugD+97X5tgD957j90wD/7l38zQAQebgZlDsUkT4KbauysrIQj0Campr7xQDTFSU1ervIyMj7yQDmKSz6th8al9V7FxPnOjwUgMAIaKX6uS7+68vsc3X3x8cAnlBsbGwldLj7yGAFh0Ycolq6Gyrc5vGJrNNRisLK5tc3q2quxuBNsnjsogoKi0SEhIS4uLh1AADvqirxtVIdHR0yMjLlIxkAkyfRAAAAX6GWlpZRUVH0tLT75eVislC62/KLGBlOqGCTt9QAlN3+44jo8+rDABT129z/+OMAV5rEOkR1oc5eXl4rKipCQkLh4OA2caWWypDL5MuKxH+627jzo6LpTUnjGQvJpabxq6ruhoXqYV6ne3qRUlCHwoGBLSt9vOZJpNrWvLv/8HepJSLD4Nz1xDqfy7/61ktDpUuJw5Whz7K5joyEwI/gcnis1Z5Gm7v+76VOoKGNrXNwk0oaiaB1ekF1ZTYTiZF7RyrbcXdbrtX92TvUVF11i0rNwEy5tm6PsIl7p6M1fDcAgSD82GM8nGTZh4xdqXyt07793IX43bUhkH0ffZfI0L95ZIe4oWCxooNQV44+AAAPQUlEQVR4nO2cC0MTVxaAR3BteRkDQiEEAlEMT4EohNBYgRYNEWIkJQ+J8lLcBXe30rVWw2Jr921ln8jDrfv4pXvPOffO3ElCQAnKdO+nbWfuTIbk6zn3nHkQTVMoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFBZlfuF9vwMrs3CiuFgJfGvuMH1MYOx9vw9rErt+Yh78Fd9VAvdFuHsxYawVXz9xp7hYCdwbW2Ji8fy9q1ev/vRnxuAJRrHO4Pt7d0eYcPfS8v02Jq6lpYjR8nN9y93rTN+84U9VEZkwBlwRiCsyKP+FvsMdiL5fFsu8QRWxH8Z7PhJQwLWIgDPx8Aux1yAEn5y9+5wE7T5fJHL8+APf4X6I90XiakbAmbgxIsJmHu1lhF8+gaRNsPIj1bd0dTd1QOvILO0Wo+B7EqyYzBSYUUXsZm8cT4S2Jqvy8sz2bj/9gVneNfJI35e0WzHpqwAm5zMFYhUBbdneiAee43gY24cf5eUTq+m7l89eaesI71woda9XEE+ycnhB20Ucz13PAzzMrz76MB+dpyymz543+B62jlDnssBzt6JiF4HzX+XV5/GswGH2sPfolNX0JfJOfTdaR6hzuXPCyF2BeRL8Op+9Bx6Phx1lKr+9x6c+sJq+PJWjubn5RmtrK+wVMwdfkDBPgruZe7Di97ejvr3tWU7f+VzJ2yxg+rBzmZeDL1ixtrqwcDc9CQLXhL1vsrylVvztdXVOgOn73Gc7+ZO8fPKB9fTdy+2N85DpS5iDL/hEP1mLpZlAfRL82gi3FU87E1dX5/V66wgWfZEfoT4bz90WISw+hvC1/lbsXO4aXUtwVX55bDJYUeEggavcG4H2AprP76yDCPyR6ktcbZbFla1vTcAlqnB5cxmMlTN9v5a7lmDmhZa1oN4JtsuAvhTsgPZA3wPbSeYPFZ7UEepOWlSfiLOx6adL3WF9fGKsDGmFzmVBD75g9lWWS+gvODn/zbeg7XjAUyeCD080Uk6u73ubYe3kVFUymex69pE0ZEV9Gte3HjYPJ0hfM6u8Xxhdi8jcWPpJxZM1OtmNBXlBefId0wZnttwe1xfF2sH0rRj6qvSfY5uytr4Sir3M4TDXB6XXKByTtHEnGMTuhWSuCn+v29uxNw54ub4ArnXw0usR+qZMP8n2WPizor51Jo9Nc5nDXF8Z6PuNHnw08YEvB0ME42SFg/2p2GRRh2dmEVFuo7DmC4nOxY6Saqoyf9aUhfVtxcHS2ASuhLsXn5Y8xyWuDzqX31LwOSrqcadY0CEIYv4u4EDwd0wfFguf0IdrGiZvHTR+JnvJqqou7mqqxrL6qEY0j60/fbrePDYWj48twnA31wedy+9RH4s2PdgEFWkcQX2NUDgweTVur66d1sTkFzlZU1PDM7f6RU2NsfYYlk9+akF9vEaUNcfjzbgwhkWEBWUJwDqX1j9Q8DmC+IJBI/gcFds4NAmLf8R+Bdf9XJ8T11Jgr4PpC4A++qnPajgvUFfSsvpElgrGlnB4muyVlDB9f6Lgc1DhSBvB53CQvkugbwXseXE9JfThFeZoiOt7wPQ9wx26anRe4sBLq+rT+k324jjzsdzl9krgogHoq693rOGmesABfx1iaJstpVOoj4TxyS+EpTci9H3P9JGdF4a+2i4YwPCzpL51ylmKtvg6DZaWSfpGIHeZL5z6Yhv1BjQE+jZiUdSHrR4rvVht/biGpbeDld6VmprHuH+yRoKmP8vq24qX6JSVmsbKGbz06q4GZX0b1Mn01bMsDuDJBvUq7aloxLg1FOpwdoA+T20tuaqqlaKPjL6stai+CUnfGD2SkRgr1wF9f4bg4/p2ZH3UyWgbLPhYuwL6Ujl+Ql0HAzqXF7XUtUxJ+mpe4JBl9SXGDHtUNrT+EkMfdS71jcwVdikLkj4H9S07jvpNTbN74VzNn+MnpEAf61w+/0ttNQ5M1cqgsBe1tdbUFxbRV17GJ77nccNeeSl0Lk8aGeAI5r5GnXo6692s34ArCXSmm+MnREPgj+n761mu72yWPliwpD6tVMRanC4bLPHULSVAXz3a2kBbm/XC3sYO7s+EXob/YrfnFUf1RaIpf4gqidD3t9oc+jB5bdbVt871xfF0Aya+UonyGyx5ebBR6XUIe9S1aGm+Abs96lwidc4QKxjOED/rJX2ev5+ltq/qrAQ2fklYsqa+LZ6rcXoco99kr7SU6fsH+brMz3kvY/xtiItXbA0XosZVFrpMwNoVqiSgL8RK77fkSks2Gfaa0Gh1k2X1LYG+0vL4Fq5txc32Sh+2jmyLfKWTDG1n+/JkWjzastnYSBUkAM2yF+NNE/qokvi5Ps/Zs2TnseQPR17CwGeW1NdNwmjmC5dBwpbFGSVC3xdabJvFHqNxNevV2ywoySRdaJGusjBCuJYK8c6lqYkmv2STDgafDRetqS+M+sqncWWLeStd35roTnQ/J639+JxBLH25MZe/NBvlMWn3GldZ/EIfToWBEHUu3zU1PaJ9q4U96qNfWVifhpMdXebTnks3PLZKSB9/ymX1IlPVuC0/jxbbhCFx90i6yjJg0he5yZK3gzUuTSL8tORLEPbIFIwW1bcO/kq2ssZZVveX9veP6E+H76AtfdaLpTGjN8Vm7FxCWIACNPl10EUD382OUCjk8aCkpNg9meSqbE2W1odRlkPfNHPHGJGGBrchgy+ure6sppnLi4zLO2JjyrhIFRH6sJJESF+0kjmqNPxxbI8qLa1vCSa58gx94Qlur/ShaZxNgpyLyOWL+qYo3hGXOheY8WAtFQLafaipUuQvJ9lUae3oo9I7LVbD3UvPp0vjMAh1ZDozLGOrF7k61GcUkwDqM+4PQbMcmgtEBm6GQjdv3vTbKjkvu/TXJF9V6lhUH5Te/v6SrUQiMYHiCCzA4Zyv2JEEGqM+1IetHlxh7kB9IO5mhz8VDfhshqmmV9VJRvXLykqTvlP/fCefuLDEKUt1b9PPt7oT+V8yuMkFpo0xHz5P0BGFJTQXCs35BwI+ceXPJrs6ffo0+6fSpO+UJe1p6yz4MFP717eW9hInGNzG3JX7GNTnDLFcdWK4ZTxMbzPbyuIza9qDK1Qs4CYSuTN1V2Lpi6JlJupCzjr0lvt3YGyn8/OpNe1piX0GXDarpgeuMsMtk+r8ZHY0CoVCoVAoFAqFQqFQHJzB9Nqq+mKbt2TwUk9PX09P9j1cxd7E0j19fX098Hdn770VZlZ7wFx65xL852P1zUpvxODHYO0SzHurGIFragrcNzEKOf5bkpjFPX1qCtwnNOlJurhONQXug51cySolsyIfO+gpu1TgFNj3Ht6QtfiYSdKz1BcdCIi7YzAFqh5wD2IsxvQUTXm9bq87IFZXe/ouvZ93ZRkGJUUpr9sNf8VtRqb24/f0tqyCpM/HQm8g4He7/cY2pS8/kr6A152CR2vdXmOb0pcfSV/Ui4/Ds+y169v20Gc3KMzbKdyR3g2Svgib93xMotttbMuvz35MYvTWmQO/Gzxgw4EP8+6QS4cbKgf7EzW2vYE+Ru9B342l9fmg7rq9+u+S7ll5M/Ud2J8F9fVcCgxE6ftYfSlWdqnts7PBr/an7zZjlPs7YP5aUN8Pc16G3/xMWcANg68396GPIs7eUIjws5y+f712OilnB4ySF/FTA+10/pD3CW27bOwM+jvYu7GYvvDyet2c0x0dQF28ZPjw7MMfSHnnnHOd1XlebtKnjUr6Gm6x5ZlrchNyZug2G7vVYKwPDbnYnjMs/a/JBxR7DGcf42ixWNTC9MFJBlcGU6ChMuJ0vu48d6Fr19eb9d3W9c2KqdCIJPuMXl+GaeQayNSumCZNSZ9dbDnmKvCnLhDd91raitbr+DkaJWwqgGe9lMjsLO51Z2fnuVe7PS1r0mfXk3dWqsU8ruQhPuZiS+O6I/Jn6JOL+tChfPyDkTjf0tbWcu9Lo0smcxCEvIywPtr/6hwT2Pkq9xRo0gepdmwGljD2xl1DUliRh/FbUvy5aPnKUO8xXbyhD4N1xnVt1DjGUWKZyStqWcReWeiy0yUXccEqAGGoJS8wgec6c2Ywftrx4eHhBtfQqJ6sDSYH47CAJmcgpF26KpeRmTNiSdc3rEfpOCg+NA1vCYbeMvwCQgCTlQ/7/KJ+sEUvP/vtegQCc5WQrLb5NoxeEdIoZeEQ+jZuzSUWeo3jzGiSPkMaDs0WXMCB6Gaz3n3+WwhRU8hxqJS4eVhWQwLnOEyWPrtmrp48U4f1jOVjoMolpWUvD0n9tXrw0f+NI1Y9louKlvUVijN/RNoexVYwqq8nWfjlSN8MfRRK2P/1NrgYDZDRQ1Rkj4kG5BZX5ZIGXTzEhD67dIwrxwpwMl1Yzre1dEurEawYKXHiwYuwfB5yYXd9V3oZrIUb5irOHMuSKoILGeLaXNLgMI9EoS/zGLcK+eEPToY+ymB+qcXul6svJ4++zMgYPgR9Mwf/yIUkSx+vuuAM2ubMqfBN9OFHd53RmX2L5MWaM2Qc44h1Ltn64HIV1+d2Z3/92Rvoy3HeisEllw4ozC5pMGfpOGL1QiKXPs0v9HkzY++N9OHJG29crgw1nLHz/eTGpUEs8KwUi7o+6AR548KPcZQ4VH3X9NC5xXOSoitn24yvHhfWdH3Yeg9p4qUWSN6C6aMztPGGhhl9M+9wZvhJG9pwidJCJ22j+n6Y+HgSM+NqGBe5fpQ4XH1y3RzNHuKTGuozLhnM6gdEfaZrDEcsdw9ZnyRrXHzy2XF9jGciVd5x06BUdoyLXleOmr2C6Rti5Lw43NDLPv3tXnnOmh2agbuZ+u6874P0nNEvl8IBxYuGe1kRGu0d1o4cBdJ3IOS22WIofQdC6TsQTN9S1iDTB1ddUkrfXiy1tLVNZA7CyW4E/u3N/B4R24XOzs5Cf6mUhfVpbW1tLfcz8teHd3a90lManGdwtflVod/CNQvrS9yDq/XnzV8XFHHPMTLtVT86FHuafZZR8KO+KxZbiuhekU54ue3fc865/5jujNOdokeFnvisTxhvFxlT4GJRUVvL9H87z0m2bHSfMt+TBv+/dGMG0y2jiTaezdWdEG4X8M443iI6t8tNXgVJu7ocTtxvMWrJMy6NblBeUF/IlQe6XW5OY0rZczjpqbzND06BzOCyPNh1Aec8Nentg26WucuZ33hYzQSqSU+hUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgKwP8Aznm7sx8c4ZEAAAAASUVORK5CYII=)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "550px",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handelLogin}
              sx={{ mt: 1 }}
            >
              <FormHelperText sx={{ color: "#d90429", fontSize: "10px" }}>
                {err}
              </FormHelperText>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default Login;
