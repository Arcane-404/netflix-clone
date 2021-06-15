import React from 'react'
import { Filter } from '../../components'
import { FilterDropDownContainer } from '../../containers'
import { useMediaQuery } from '../../hooks'

const FilterMenuContainer = () => {

	// const isMobile = useMediaQuery('mobile')
	const isTabletSm = useMediaQuery('tablet-sm')
	const isDesktop = useMediaQuery('desktop')

	return (
		<Filter>
			{isTabletSm && !isDesktop && (
				<Filter.Option primary>Browse</Filter.Option>
			)}
			{isDesktop && (
				<>
					<Filter.Option className={ 'active' }>Home</Filter.Option>
					<Filter.Option>TV Shows</Filter.Option>
					<Filter.Option>Movies</Filter.Option>
				</>
			)}

			<FilterDropDownContainer />
		</Filter>
	)
}

export default FilterMenuContainer
