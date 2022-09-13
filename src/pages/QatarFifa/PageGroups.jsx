import React from 'react'
import { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import Group from './Group'
import qatar from './groups'

const PageGroups = () => {
    const [groups, setGroups] = useState(qatar);

  return (
    <Layout>
            <div>PageGroups</div>
            <Group groups={groups}/>
    </Layout>
  )
}

export default PageGroups