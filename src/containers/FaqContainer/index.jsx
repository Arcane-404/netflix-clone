import React from 'react'
import { Accordion } from '../../components'
import data from '../../json/_faq.json'
import { Plus } from '../../components/Icon/'

const FaqContainer = () => {
	return (
		<Accordion>
			<Accordion.Heading>Frequently Asked Questions</Accordion.Heading>
			<Accordion.Inner>
				{
					data.map( ( acc, i ) => (
						<Accordion.Frame key={ i }>
							<Accordion.Header>
								<Accordion.Title>
									{ acc.header }
								</Accordion.Title>
							</Accordion.Header>
							<Accordion.Body>
								<Accordion.Content>
									{ acc.top_content }
								</Accordion.Content>
								<Accordion.Content>
									{ acc.bottom_content }
								</Accordion.Content>
							</Accordion.Body>
						</Accordion.Frame>
					))
				}
			</Accordion.Inner>
		</Accordion>
	)
}

export default FaqContainer
