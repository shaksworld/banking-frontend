import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/App.css';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import AuthLayout from 'layouts/auth';
import AdminLayout from 'layouts/user';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';

// PrivateRoute component for private routes
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			// Replace the condition below with your authentication logic
			localStorage.getItem('isAuthenticated') ? (
				<Component {...props} />
			) : (
				<Redirect to="/auth/login" />
			)
		}
	/>
);

// PublicRoute component for public routes
const PublicRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props => <Component {...props} />}
	/>
);

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<React.StrictMode>
			<ThemeEditorProvider>
				<HashRouter>
					<Switch>
						<PublicRoute path="/auth" component={AuthLayout} />
						<PublicRoute path="/home" component={Home} />
						<PublicRoute path="/admin" component={AdminLayout} />
						<Redirect from="/" to="/home" />
					</Switch>
				</HashRouter>
			</ThemeEditorProvider>
		</React.StrictMode>
	</ChakraProvider>,
	document.getElementById('root')
);

// Example component for public route
function Home() {
	return <h2>Home</h2>;
}

