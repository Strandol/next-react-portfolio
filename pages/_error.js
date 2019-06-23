import Layout from '../components/Layout'

const Error = ({ statusCode }) =>
    <Layout title='Error'>
        {statusCode 
            ? `Could not load your user data: Status code ${statusCode}`
            : 'Could not get that page...'}
        
    </Layout>

export default Error
