import React from "react";
import ReactDOM from "react-dom";
import "./assets/scss/styles.scss";
import Grid from "@material-ui/core/Grid";
import SignIn from "./pages/SignIn";

const Index = () => {
	return (
		<div>
			{" "}
			<Grid container alignItems='center' justify='center'>Welcome to SNS React Boilerplate!</Grid>
			<SignIn />
		</div>
	);
};
ReactDOM.render(<Index />, document.getElementById("root"));
