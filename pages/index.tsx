import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Button } from '@/components/ui/button'
import { useCurrentUser } from '@/hooks/query/user'

import LandingPage from './templates/ebraj/index'

export default LandingPage
