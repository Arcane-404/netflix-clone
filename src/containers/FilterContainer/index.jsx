import React from 'react'
import { Filter } from '../../components'
import { useMediaQuery } from '../../hooks'

const FilterContainer = () => {

	// const isMobile = useMediaQuery('mobile')
	const isTabletSm = useMediaQuery('tablet-sm')
	const isDesktop = useMediaQuery('desktop')

	return (
		<Filter>
			{isTabletSm && !isDesktop && <Filter.Text primary>Browse</Filter.Text> }
			{isDesktop && (
				<>
					<Filter.Text className={ 'active' }>Home</Filter.Text>
					{/* <Filter.Text>TV Shows</Filter.Text> */}
					{/* <Filter.Text>Movies</Filter.Text> */}
				</>
			)}
		</Filter>
	)
}

export default FilterContainer
