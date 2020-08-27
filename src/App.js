import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import productApi from "api/productApi";
import SignIn from "features/Auth/pages/SignIn";

// Lazy load - Code splitting
const Photo = React.lazy(() => import("./features/Photo"));

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
