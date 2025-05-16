import { useEffect, useState } from 'react'
import { db } from '../firebase/config'
import {
  or,
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from 'firebase/firestore'

type PostData = {
  postId: string
  createdBy?: string
  createdAt?: any
  title?: string
  imageUrl?: string
  body?: string
  tagsArray?: string[]
}

export const useFetchPosts = (
  postCollection: string,
  search: string | null = null,
  uid: string | null = null
) => {
  const [posts, setPosts] = useState<PostData[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setError(null)
    setLoading(true)

    const collectionReff = collection(db, postCollection)

    let q
    if (search) {
      q = query(
        collectionReff,
        or(
          where('createdBy', '==', search),
          where('tagsArray', 'array-contains', search)
        ),
        orderBy('createdAt', 'desc')
      )
    } else if (uid) {
      q = query(
        collectionReff,
        where('uid', '==', uid),
        orderBy('createdAt', 'desc')
      )
    } else {
      q = query(collectionReff, orderBy('createdAt', 'desc'))
    }

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        setPosts(
          querySnapshot.docs.map((doc) => ({
            postId: doc.id,
            ...doc.data(),
          }))
        )
        setLoading(false)
      },
      () => {
        setError(
          'Ocorreu um erro ao buscar os posts. Tente novamente mais tarde.'
        )
        setLoading(false)
      }
    )
    return () => unsubscribe()
  }, [postCollection, search, uid])

  return { posts, loading, error }
}
