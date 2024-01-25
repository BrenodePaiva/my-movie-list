import { Route, Routes } from 'react-router-dom'

import { Movies, MyList, Series, Detail, PageNotFound } from '../containers'
import DefaltLayout from '../layout/DefaltLayout'

function Router() {
  return (
    <Routes>
      <Route element={<DefaltLayout />}>
        <Route path="/" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/minha-lista" element={<MyList />} />
        <Route path="/detalhes/:id" element={<Detail />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default Router
