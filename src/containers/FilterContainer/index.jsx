import React from 'react'
import { Filter } from '../../components'
import { useMediaQuery } from '../../hooks'

const FilterContainer = () => {

	// const isMobile = useMediaQuery('mobile')
	const isTabletSm = useMediaQuery('tablet-sm')
	const isDesktop = useMediaQuery('desktop')

	return (
		<Filter>
			{isTabletSm && !isDesktop && <Filter.Option primary>Browse</Filter.Option> }
			{isDesktop && (
				<>
					<Filter.Option className={ 'active' }>Home</Filter.Option>
					{/* <Filter.Option>TV Shows</Filter.Option> */}
					{/* <Filter.Option>Movies</Filter.Option> */}
				</>
			)}
		</Filter>
	)
}

export default FilterContainer
