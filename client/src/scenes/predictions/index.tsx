import {useEffect} from 'react'

type Props = {}

const Predictions = (props: Props) => {
    useEffect(() => {
        document.title = "Finance | Predictions"
    }, [])
  return (
    <div>Predictions</div>
  )
}

export default Predictions