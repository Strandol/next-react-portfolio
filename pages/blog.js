import Link from 'next/link'

import Layout from "../components/Layout";

const PostLink = ({ title, id }) =>
    <li>
        <Link as={`/${id}`} href={`/post?title=${title}`}>
            <a>{title}</a>
        </Link>
    </li>

const Blog = () => {
    return (
        <Layout>
            <ul>
                <PostLink id='2551' title='React Post' />
            </ul>
        </Layout>
    )
}

export default Blog
