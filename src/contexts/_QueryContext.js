import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const client = new QueryClient()

const QueryDevtools = () => (
	<ReactQueryDevtools initialIsOpen={ false } />
)

const QueryContextProvider = ({ children }) => {
	return (
		<QueryClientProvider client={ client }>
			{ children }
			{/* <QueryDevtools /> */}
		</QueryClientProvider>
	)
}

export { QueryDevtools, QueryContextProvider }

// const queryOptions = {
// 	defaultOptions: {
// 		queries: { refetchOnWindowFocus: false },
// 		mutations: {}
// 	}
// }
