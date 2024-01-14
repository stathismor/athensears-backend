export default {
  name: 'gig',
  type: 'document',
  title: 'Gig',
  fields: [
    {
      name: 'date',
      type: 'date',
      title: 'Date',
    },
    {
      name: 'artist',
      type: 'string',
      title: 'Artist',
    },
    {
      title: 'Venue',
      name: 'venue',
      type: 'reference',
      to: [{type: 'venue'}],
    },
    {
      name: 'ticketUrl',
      type: 'url',
      title: 'Ticket URL',
    },
    {
      name: 'price',
      type: 'string',
      title: 'Price (€)',
    },
  ],
}
