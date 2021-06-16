import React, { useState } from 'react'
import { Filter } from '../../components'
import { FilterDropDownContainer } from '../../containers'
import { useMediaQuery } from '../../hooks'

const FilterMenuContainer = () => {

	const [ isOpen, setOpen ] = useState(false)
	const isMobile = useMediaQuery('mobile')
	const isTabletSm = useMediaQuery('tablet-sm')
	const isDesktop = useMediaQuery('desktop')

	const openDropDown = () => setOpen(true)

	const dropDownProps = {
		isOpen,
		setOpen
	}

	if (isMobile) return null

	return (
		<Filter>
			{isTabletSm && !isDesktop && (
				<Filter.Option primary onClick={ openDropDown }>Browse</Filter.Option>
			)}
			{isDesktop && (
				<>
					<Filter.Option className={ 'active' }>Home</Filter.Option>
					<Filter.Option>TV Shows</Filter.Option>
					<Filter.Option>Movies</Filter.Option>
				</>
			)}

			{ isOpen && !isDesktop && <FilterDropDownContainer { ...dropDownProps } /> }
			{/* { isOpen && <FilterDropDownContainer closeDropDown={ closeDropDown } /> } */}
		</Filter>
	)
}

export default FilterMenuContainer
