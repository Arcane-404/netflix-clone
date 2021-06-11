import React from 'react'
import { Accordion } from '../../components'
import data from '../../json/_faq.json'

const FaqContainer = () => {
	return (
		<Accordion>
			<Accordion.Heading>Frequently Asked Questions</Accordion.Heading>
			<Accordion.Inner>
				<Accordion.Frame>

					<Accordion.Header>
						<Accordion.Title></Accordion.Title>
					</Accordion.Header>

					<Accordion.Body>
						<Accordion.Content></Accordion.Content>
						<Accordion.Content></Accordion.Content>
					</Accordion.Body>

				</Accordion.Frame>
			</Accordion.Inner>
		</Accordion>
	)
}

export default FaqContainer
