import { formatDistance, format } from 'date-fns'

export const convertSecondsToTimeObject = (seconds: number) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60
  return { hours, minutes, seconds: remainingSeconds }
}

export const convertTimeObjectToReadableString = ({
  hours,
  minutes,
  seconds,
}: {
  hours: number
  minutes: number
  seconds: number
}) => {
  return `${hours ? hours.toFixed(0) : ''}${hours > 0 ? 'h ' : ''}${
    minutes ? minutes.toFixed(0) : ''
  }${minutes > 0 ? 'm ' : ''}${seconds ? seconds.toFixed(0) : ''}${
    seconds > 0 ? 's' : ''
  }`
}

export const getTimeDistance = (from: Date, to: Date) => {
  return formatDistance(from, to, { addSuffix: true })
}

export const formatToLocalDateTime = (
  timestamp: number,
  stringFormat?: string
) => {
  return format(new Date(timestamp), stringFormat ?? 'dd/MM/yy hh:mm a')
}
