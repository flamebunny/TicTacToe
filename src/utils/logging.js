export function logEvent(eventName, data) {
  if (process.env.NODE_ENV === 'test') {
    return
  }

  const args = [`Event: ${eventName}`]

  if (data) {
    args.push(data)
  }

  // eslint-disable-next-line
  console.log.apply(null, args)
}