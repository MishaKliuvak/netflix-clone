import React, { useContext, useState, useEffect } from 'react'
import { SelectProfileContainer } from './profile'
import { FirebaseContext } from '../context/firebase'

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)
  const { firebase } = useContext(FirebaseContext)
  const user = firebase.auth().currentUser || {}

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
   <>
    <SelectProfileContainer user={user} setProfile={setProfile}/>
   </>
  )
}