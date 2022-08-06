import React from 'react';
import HighlightsList from "../components/HighlightsList";
import Layout from '../components/Layout/Layout';
import { Grid } from '@chakra-ui/react';

function Home() {


    return (
        <Layout>
          <Grid >
            <HighlightsList />
          </Grid>
      </Layout>
    )
}

export default Home;
