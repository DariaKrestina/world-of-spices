import { useEffect, useState } from "react"
import { getAllBlends } from "../services/blends"
import { getAllSpices } from "../services/spices"
import { Route, Switch } from "react-router-dom"
import Spices from "../screens/Spices"

export default function MainContainer() {
  const [blends, setBlends] = useState([])
  const [spices, setSpices] = useState([])

  useEffect(() => {
    const fetchSpices = async () => {
      const spiceList = await getAllSpices()
      setSpices(spiceList)
    }
    fetchSpices()
  }, [])

  useEffect(() => {
    const fetchBlends = async () => {
      const blendList = await getAllBlends()
      setBlends(blendList)
    }
    fetchBlends()
  }, [])

  return (
    <div>
      <Switch>
        <Route path='/spices'>
          <Spices spices={ spices }/>
        </Route>
      </Switch>
    </div>
  )
}
