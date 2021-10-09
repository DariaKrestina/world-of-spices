import { useEffect, useState } from "react"
import { getAllBlends, postBlend, deleteBlend, putBlend } from "../services/blends"
import { getAllSpices, getOneSpice } from "../services/spices"
import { Route, Switch, useHistory } from "react-router-dom"
import Spices from "../screens/Spices"
import SpiceDetail from "../screens/SpiceDetail"
import Blends from "../screens/Blends"
import BlendCreate from "../screens/BlendCreate"
import BlendEdit from "../screens/BlendEdit"
import Home from "../screens/Home"

export default function MainContainer() {
  const [blends, setBlends] = useState(null)
  const [spices, setSpices] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const fetchSpices = async () => {
      const spiceList = await getAllSpices()
      setSpices(spiceList)
    }
    fetchSpices()
  }, [])

  useEffect(() => {
    const fetchOneSpice = async (id) => {
      const singleSpice = await getOneSpice(id)
      setSpices(singleSpice)
    }
    fetchOneSpice()
  }, [])

  useEffect(() => {
    const fetchBlends = async () => {
      const blendList = await getAllBlends()
      setBlends(blendList)
    }
    fetchBlends()
  }, [])

  const handleBlendCreate = async (blendData) => {
    const newBlend = await postBlend(blendData)
    setBlends((prevState) => [...prevState, newBlend])
    history.push('/blends')
  }

  const handleBlendDelete = async (id) => {
    await deleteBlend(id)
    setBlends(prevState => prevState.filter(blendItem => blendItem.id !== id))
  }

  const handleBlendEdit = async (id, blendData) => {
    const editedBlend = await putBlend(id, blendData)
    setBlends(prevState => prevState.map(blend => {
      return blend.id === Number(id) ? editedBlend : blend
    }))
    history.push('/blends')
  }

  if (!spices || !blends) return <h1>Loading...</h1>

  return (
    <div>
      <Switch>
        <Route path='/spices/:id'>
          <SpiceDetail spices={ spices }/>
        </Route>
        <Route path='/spices'>
          <Spices spices={ spices }/>
        </Route>
        <Route path='/blends/:id/edit'>
          <BlendEdit blends={ blends } handleBlendEdit={handleBlendEdit} handleBlendDelete={ handleBlendDelete }/>
        </Route>
        <Route path='/blends/new'>
          <BlendCreate handleBlendCreate={handleBlendCreate} />
        </Route>
        <Route path='/blends'>
          <Blends blends={ blends } handleBlendDelete={ handleBlendDelete }/>
        </Route>
        <Route path='/'>
          <Home spices={ spices }/>
        </Route>
      </Switch>
    </div>
  )
}
