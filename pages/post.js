import Ling from 'next/link'
import { withRouter } from 'next/router'

import Layout from "../components/Layout";

const Post = ({ router }) => {
    return (
        <Layout title={router.query.title}>
            <p>Some post</p>
        </Layout>
    )
}

export default withRouter(Post)
