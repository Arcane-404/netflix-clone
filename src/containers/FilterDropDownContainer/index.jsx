import React from 'react'
import { DropDown } from '../../components'

const FilterDropDownContainer = () => {
	return (
		<DropDown filtered>
			<DropDown.ListOne>
				<DropDown.Option bold>TV Shows</DropDown.Option>
				<DropDown.Option bold>Movies</DropDown.Option>
			</DropDown.ListOne>

			{/* <DropDown.Line vertical /> */}

			{/* <DropDown.ListTwo>
				<DropDown.Option>ITEM</DropDown.Option>
			</DropDown.ListTwo> */}
		</DropDown>
	)
}

export default FilterDropDownContainer
