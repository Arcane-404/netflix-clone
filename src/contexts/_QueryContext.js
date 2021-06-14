import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClientOptions } from '../utilities'

const client = new QueryClient(queryClientOptions)

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
