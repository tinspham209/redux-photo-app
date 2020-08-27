import productApi from "api/productApi";
import SignIn from "features/Auth/pages/SignIn";
import firebase from "firebase";
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

// Lazy load - Code splitting
const Photo = React.lazy(() => import("./features/Photo"));

// Configure Firebase.
const config = {
	apiKey: "AIzaSyAv84XrHERAG7Oq6o3SHxWgk4g3WX1BaMg",
	authDomain: "photo-app-aaa15.firebaseapp.com",
};
firebase.initializeApp(config);

function App() {
	const [productList, setProductList] = useState([]);
	useEffect(() => {
		const fetchProductList = async () => {
			try {
				const params = {
					_page: 1,
					_limit: 10,
				};
				const response = await productApi.getAll(params);
				setProductList(response.data);
			} catch (error) {
				console.log("failed to fetch product list:", error);
			}
		};

		fetchProductList();
	}, []);

	// Handle firebase auth changed
	useEffect(() => {
		const unregisterAuthObserver = firebase
			.auth()
			.onAuthStateChanged(async (user) => {
				if (!user) {
					// user logs out, handle something
					console.log("User is not logged in");
					return;
				}
				console.log("Logged in user: ", user.displayName);
				const token = await user.getIdToken();
				console.log("Logged in user: ", token);
			});

		return () => {
			unregisterAuthObserver();
		};
	}, []);

	return (
		<div className="photo-app">
			<Suspense fallback={<div>Loading ...</div>}>
				<BrowserRouter>
					<Header />

					<Switch>
						<Redirect exact from="/" to="/photos" />

						<Route path="/photos" component={Photo} />
						<Route path="/sign-in" component={SignIn} />

						<Route component={NotFound} />
					</Switch>
				</BrowserRouter>
			</Suspense>
		</div>
	);
}

export default App;
