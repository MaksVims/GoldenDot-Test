import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { MainPage, CurrencyPage, MainLayout } from '../pages'

const AppRouter = () => (
  <Routes>
    <Route path='/' element={<MainLayout />}>
      <Route index element={<MainPage />} />
      <Route path='/currency/:currencyCode' element={<CurrencyPage />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Route>
  </Routes>
)

export default AppRouter