import React from 'react'

import { NavbarSimple } from './Component/NavbarSimple'
import Home from './Component/Home'
import { DrawerDefault } from './Component/DrawerDefault'

const App = () => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <>
      <NavbarSimple openDrawer={openDrawer} closeDrawer={closeDrawer} />
      <Home />
      <DrawerDefault openDrawer={openDrawer} closeDrawer={closeDrawer} open={open} />

    </>
  )
}

export default App
