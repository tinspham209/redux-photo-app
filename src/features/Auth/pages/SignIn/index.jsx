import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
SignIn.propTypes = {};

// Configure FirebaseUI.
const uiConfig = {
	signInFlow: "redirect",
	signInSuccessUrl: "/photos",
	signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

function SignIn() {
	return (
		<div>
			<div className="text-center">
				<h2>Login Form</h2>

				<p>or login with social accounts</p>
			</div>
			<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
		</div>
	);
}

export default SignIn;
